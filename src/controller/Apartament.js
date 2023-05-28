const ApartamentClient = require("../client/ApartamentClient")

const {
  setBody,
  registerAddress,
  registerLongitude,
  registerScore,
  registerLatitude,
  setCoordinates,
  registerMarket,
  registerSchool,
  registerHospital,
  registerSubways,
  registerTrains,
  registerDistanceWorkAndTimeDaniel,
  registerDistanceWorkAndTimeRaquel,
  registerHour,
  registerEnquadramento,
  registerGorverno,
  registerDocumentacao,
  registerCondominio,
  registerFinanciamento,
  registerIncc,
  registerTipoTabela,
  registerZoneamento,
  registerApartament,
  getAllApartaments
} = new ApartamentClient()

class Apartament {
  async all(request, response) {
    try {
      const result = await getAllApartaments()
      response.status(200).json({ message: result })
    } catch (error) {
      console.log(error)
      response.status(400).json({ message: error })
    }
  }

  async register(request, response) {
    const body = request.body
    try {
      setBody(body)
      await registerAddress()
      await registerLatitude()
      await registerScore()
      await registerLongitude()
      await setCoordinates()
      await registerMarket()
      await registerSchool()
      await registerHospital()
      await registerSubways()
      await registerTrains()
      await registerDistanceWorkAndTimeDaniel()
      await registerDistanceWorkAndTimeRaquel()
      await registerHour()
      await registerEnquadramento()
      await registerGorverno()
      await registerDocumentacao()
      await registerCondominio()
      await registerFinanciamento()
      await registerIncc()
      await registerTipoTabela()
      await registerZoneamento()

      const result = await registerApartament()
      response.status(200).json({ message: result })
    } catch (error) {
      console.log(error)
      response.status(400).json({ message: error })
    }
  }
}

module.exports = new Apartament