const ApartamentClient = require('../client/ApartamentClient')
const CondominioClient = require('../client/CondominioClient')
const DistanceWorkClient = require('../client/DistanceWorkClient')
const DocumentClient = require('../client/DocumentClient')
const EnquadramentoClient = require('../client/EnquadramentoClient')
const FinanceClient = require('../client/FinanceClient')
const GeocodingClient = require('../client/GeocodingClient')
const GooglePlaceClient = require('../client/GooglePlaceClient')
const GovernoClient = require('../client/GovernoClient')
const HourClient = require('../client/HourClient')
const InccClient = require('../client/InccClient')
const ScoreClient = require('../client/ScoreClient')
const TabelaClient = require('../client/TabelaClient')
const ViaCepClient = require('../client/ViaCepClient')
const ZoneamentoClient = require('../client/ZoneamentoClient')

class Apartament {
  async allApartaments(request, response) {
    try {
      const result = await getAllApartaments()
      response
        .status(200)
        .json({ message: result })
    } catch (error) {
      console.log(error)
      response
        .status(400)
        .json({ message: error })
    }
  }

  async registerApartaments(request, response) {
    const body = request.body
    try {
      const apartamentClient = new ApartamentClient(body)

      await apartamentClient.register(new ScoreClient())
      await apartamentClient.register(new ViaCepClient())
      await apartamentClient.register(new GeocodingClient())
      await apartamentClient.register(new FinanceClient())
      await apartamentClient.register(new CondominioClient())
      await apartamentClient.register(new DocumentClient())
      await apartamentClient.register(new GovernoClient())
      await apartamentClient.register(new EnquadramentoClient())
      await apartamentClient.register(new HourClient())
      await apartamentClient.register(new ZoneamentoClient())

      const object = apartamentClient.getObject()

      const incc = new InccClient(object)
      await apartamentClient.register(incc)

      const places = new GooglePlaceClient(object)
      await apartamentClient.register(places)

      const distanceWorkClient_daniel = new DistanceWorkClient(object, "daniel")
      await apartamentClient.register(distanceWorkClient_daniel)

      const distanceWorkClient_raquel = new DistanceWorkClient(object, "raquel")
      await apartamentClient.register(distanceWorkClient_raquel)

      const tabelaClient = new TabelaClient(object)
      apartamentClient.register(tabelaClient)

      response
        .status(200)
        .json({ message: apartamentClient.getObject() })

    } catch (error) {
      console.log(error)
      response
        .status(400)
        .json({ message: error })
    }
  }
}

module.exports = new Apartament()