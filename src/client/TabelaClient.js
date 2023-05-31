const FinanceModel = require("../model/FinanceModel")

class TabelaClient {
  constructor(object) {
    this.finance = new FinanceModel()
    this.object = object
    this.prazo = process.env.PRAZO || 420
  }

  taxa = (taxa) => {
    return taxa / 100 / 12
  }

  parcela = (renda) => {
    return (renda * 30) / 100
  }

  sac = () => {
    return this.finance.calculoParcelaSAC()
  }

  price = () => {
    return this.finance.calculoParcelaPRICE()
  }

  percentSac = (renda) => {
    const parcela = this.sac(this.finance)?.parcela1
    const parse = parseFloat(parcela)
    return (parse / renda) * 100
  }

  percentPrice = (renda) => {
    const parcela = this.price(this.finance)?.parcela1
    const parse = parseFloat(parcela)
    return (parse / renda) * 100
  }

  parcelaPrice = () => {
    const parcela = this.price(this.finance)?.parcela1
    return parseFloat(parcela)
  }

  parcelaSac = () => {
    const parcela = this.sac(this.finance)?.parcela1
    return parseFloat(parcela)
  }

  priceResult = (renda) => {
    let percentSac = this.percentSac(renda)
    if (percentSac < 30.0) {
      return { key: "tabela", value: { tipo_financiamento: "Price/Sac", valor_max_parcela: this.parcelaPrice() } }
    }
  }

  sacResult = (renda) => {
    let percentPrice = this.percentPrice(renda)
    if (percentPrice < 30.0) {
      return { key: "tabela", value: { tipo_financiamento: "Price", valor_max_parcela: this.parcelaSac() } }
    }
  }

  nefResult = (renda) => {
    return { key: "tabela", value: { tipo_financiamento: "NEF", valor_max_parcela: this.parcela(renda) } }
  }

  register = body => {
    const { renda, taxa } = body
    const { valor } = this.object?.financiamento
    const juros = this.taxa(taxa)
    this.finance.setValues(juros, valor, this.prazo)

    return this.priceResult(renda)
      || this.sacResult(renda)
      || this.nefResult(renda)
  }
}

module.exports = TabelaClient