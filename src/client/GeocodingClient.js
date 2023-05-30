const GoogleService = require("../service/GoogleService")

class GeocodingClient {
  constructor() {
    this.googleService = new GoogleService()
  }

  register = async (body) => {
    const { cep } = body
    const response = await this.googleService.getCordinates(cep)
    return { key: "geocoding", value: response["message"] }
  }
}


module.exports = GeocodingClient