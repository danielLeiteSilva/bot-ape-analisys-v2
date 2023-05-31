class FinanceClient {
  constructor() {
    this.financimento = process.env.FINANCIAMENTO || 211200.0
  }

  finance_calculated = (body) => {
    const { valor_imovel, entrada, fgts } = body

    let valor_total_financiamento = 0
    let financimento = valor_imovel - entrada

    financimento > this.financimento
      ? valor_total_financiamento = this.financimento
      : valor_total_financiamento = financimento - fgts

    return valor_total_financiamento

  }

  entry_calculated = (body) => {

    const { valor_imovel, entrada, fgts } = body

    let financimento = valor_imovel - entrada
    let entrada_liquida = 0

    financimento > this.financimento
      ? entrada_liquida = financimento - this.financimento - fgts
      : entrada_liquida = 0

    entrada_liquida = entrada_liquida <= 0 ? 0 : entrada_liquida

    return entrada_liquida

  }


  register = async (body) => {

    const valor = this.finance_calculated(body)
    const entrada = this.entry_calculated(body)

    return { key: "financiamento", value: { valor, entrada } }
  }
}

module.exports = FinanceClient