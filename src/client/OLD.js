const GoogleService = require("../service/GoogleService")


const MongoClient = require("./MongoClient")
const Finance = require("./FinancimentoClient")
const { ObjectId } = require('mongodb')

class ApartamentClient {
  constructor() {
    this.googleService = new GoogleService()
   
    this.client = new MongoClient()
    this.json = {}
    this.body = {}
    this.coordinates = {}
    
    this.mcmv = process.env.MCMV || 264000.0
    this.salario = process.env.SALARIO || 1302
    this.condominio = process.env.CONDOMINIO || 11
    this.addressWork = [
      process.env.WORK_DANIEL || "Av. Interlagos, 3501 - Vila Arriete, São Paulo - SP, 04661-200",
      process.env.WORK_RAQUEL || "R. Rio Grande, 500 - Vila Mariana, São Paulo - SP, 04018-001"
    ]
  }

  // setBody = (body) => {
  //   this.body = body
  // }

  // setJson = (key, value) => {
  //   this.json[key] = value
  // }

  // getJson = () => {
  //   return Object.assign(this.json, this.body)
  // }

  // // registerScore = async () => {
  //   const { construtora } = this.body
  //   const response = await this.scoreService.getScore(construtora)
  //   this.setJson('nota', response["message"])
  // }

  // registerAddress = async () => {
  //   const { cep } = this.body
  //   const address = await this.viaCepService.getAndressViaCep(cep)
  //   this.setJson('endereco', address["message"])
  // }

  // registerLatitude = async () => {
  //   const { cep } = this.body
  //   const response = await this.googleService.getCordinates(cep)
  //   this.setJson('latitude', response["message"]["latitude"])
  // }

  // registerLongitude = async () => {
  //   const { cep } = this.body
  //   const response = await this.googleService.getCordinates(cep)
  //   this.setJson('longitude', response["message"]["longitude"])
  // }

  // setCoordinates = async () => {
  //   const { cep } = this.body
  //   const response = await this.googleService.getCordinates(cep)
  //   this.coordinates = response["message"]
  // }

  // registerMarket = async () => {
  //   const markets = []
  //   const response = await this.googleService.getMarkets(this.coordinates)
  //   response["message"]["results"].map(market => markets.push(market.name))
  //   this.setJson('mercados', markets)
  // }

  // registerSchool = async () => {
  //   const schools = []
  //   const response = await this.googleService.getSchool(this.coordinates)
  //   response["message"]["results"].map(school => schools.push(school.name))
  //   this.setJson("escolas", schools)
  // }

  // registerHospital = async () => {
  //   const hospitals = []
  //   const response = await this.googleService.getHospital(this.coordinates)
  //   response["message"]["results"].map(hospital => hospitals.push(hospital.name))
  //   this.setJson("hospitais", hospitals)
  // }

  // registerSubways = async () => {
  //   const subways = []
  //   const response = await this.googleService.getSubway(this.coordinates)
  //   response["message"]["results"].map(subway => subways.push(subway.name))
  //   this.setJson("metros", subways)
  // }

  // registerTrains = async () => {
  //   const trains = []
  //   const response = await this.googleService.getTrains(this.coordinates)
  //   response["message"]["results"].map(train => trains.push(train.name))
  //   this.setJson("trens", trains)
  // }

  registerDistanceWorkAndTimeDaniel = async () => {
    const work = await this.googleService.getDistanceAndTime(this.json?.endereco, this.addressWork[0])
    this.setJson('distancia_trabalho_daniel', work["message"]["distance"])
    this.setJson('tempo_trabalho_daniel', work["message"]["duration"])
  }

  registerDistanceWorkAndTimeRaquel = async () => {
    const work = await this.googleService.getDistanceAndTime(this.json?.endereco, this.addressWork[1])
    this.setJson('distancia_trabalho_raquel', work["message"]["distance"])
    this.setJson('tempo_trabalho_raquel', work["message"]["duration"])
  }

  registerHour = () => {
    this.setJson("hora", new Date())
  }

  registerEnquadramento = () => {
    this.setJson("enquadramento", "SFH")
  }

  // registerGorverno = () => {
  //   const { valor_imovel } = this.body
  //   valor_imovel > this.mcmv
  //     ? this.setJson("governo", "Habitação popular")
  //     : this.setJson("governo", "Casa verde amarela")
  // }

  // registerDocumentacao = () => {
  //   const { valor_imovel } = this.body
  //   valor_imovel > this.mcmv
  //     ? this.setJson("documentacao", false)
  //     : this.setJson("documentacao", true)
  // }

  // registerCondominio = () => {
  //   const { tamanho } = this.body
  //   const valor = tamanho * this.condominio
  //   this.setJson("condominio", valor)
  // }

  // registerFinanciamento = () => {
  //   const { valor_imovel, entrada, fgts } = this.body

  //   let valor_total_financiamento = 0
  //   let financimento = valor_imovel - entrada
  //   let entrada_liquida = 0

  //   if (financimento > this.financimento) {
  //     entrada_liquida = financimento - this.financimento - fgts
  //     valor_total_financiamento = this.financimento
  //   } else {
  //     entrada_liquida = 0
  //     valor_total_financiamento = financimento - fgts
  //   }

  //   entrada_liquida = entrada_liquida <= 0 ? 0 : entrada_liquida

  //   this.setJson("financimento", valor_total_financiamento)
  //   this.setJson('entrada_resultado', entrada_liquida)
  // }

  // registerIncc = () => {
  //   const { assinatura_constrato } = this.body
  //   const result = assinatura_constrato > 30 || this.json?.entrada_resultado > 0 ? "Sim" : "Não"
  //   this.setJson("incc", result)
  // }

  registerTipoTabela = () => {
    const { renda, taxa } = this.body
    const txJuros = taxa / 100 / 12

    const finance = new Finance(txJuros, this.json?.financimento, 420)

    const sac = finance.calculoParcelaSAC()
    const price = finance.calculoParcelaPRICE()

    this.setJson("sac", sac)
    this.setJson("price", price)

    let parcela1Sac = parseFloat(sac.parcela1)
    let parcela1Price = parseFloat(price.parcela1)

    let percentSac = (parcela1Sac / renda) * 100
    let percentPrice = (parcela1Price / renda) * 100

    if (percentSac < 30) {

      this.setJson("tipo_financiamento", "Price/Sac")
      this.setJson("valor_max_parcela_financimento", parcela1Sac)

    } else if (percentPrice < 30) {

      this.setJson("tipo_financiamento", "Price")
      this.setJson("valor_max_parcela_financimento", parcela1Price)

    } else {

      let percentAcess = (renda * 30) / 100
      this.setJson("tipo_financiamento", "NEF")
      this.setJson("valor_max_parcela_financimento", percentAcess)

    }
  }

  registerZoneamento = () => {
    const { renda } = this.body

    const HIS_1 = parseFloat(this.salario * 3)
    const HIS_2 = parseFloat(this.salario * 6)
    const HMP = parseFloat(this.salario * 10)

    if (renda < HIS_1) {
      this.setJson("zoneamento", "HIS 1")
    } else if (renda < HIS_2) {
      this.setJson("zoneamento", "HIS 2")
    } else if (renda < HMP) {
      this.setJson("zoneamento", "HMP")
    } else {
      this.setJson("zoneamento", "R2V")
    }
  }

  registerApartament = async () => {
    this.setJson("_id", new ObjectId())
    return await this.client.insertOne(this.getJson(this.body))
  }

  getAllApartaments = async () => {
    return await this.client.all()
  }

}

module.exports = ApartamentClient