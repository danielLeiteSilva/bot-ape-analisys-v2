const GoogleService = require("../service/GoogleService")
const { readConfig } = require("../config/Config")

class GooglePlaceClient {
  constructor() {
    this.googleService = new GoogleService()
    this.config = readConfig('config_places.json')
  }

  register = async (coordinates) => {
    let locals = [], results = []
    for (let placeInfo of this.config) {
      const { type, radius } = placeInfo
      const response = await this.googleService.place(coordinates, type, radius)
      response["message"]["results"].map(place => {
        locals.push(place.name)
      })
      results.push({ type, locals })
      locals = []
    }
    return { key: "places", value: results }
  }
}

module.exports = GooglePlaceClient