const ApartamentClient = require('../client/ApartamentClient')
const CondominioClient = require('../client/CondominioClient')
const DocumentClient = require('../client/DocumentClient')
const FinanceClient = require('../client/FinanceClient')
const GeocodingClient = require('../client/GeocodingClient')
const GooglePlaceClient = require('../client/GooglePlaceClient')
const GovernoClient = require('../client/GovernoClient')
const InccClient = require('../client/InccClient')
const ScoreClient = require('../client/ScoreClient')
const ViaCepClient = require('../client/ViaCepClient')

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
      await apartamentClient.register(new GooglePlaceClient())

      const incc = new InccClient(apartamentClient.getObject())
      await apartamentClient.register(incc)

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