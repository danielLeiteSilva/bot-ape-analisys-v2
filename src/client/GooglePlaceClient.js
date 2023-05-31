const GoogleService = require("../service/GoogleService")
const { readConfig } = require("../config/Config")

class GooglePlaceClient {
  constructor(object) {
    this.googleService = new GoogleService()
    this.config = readConfig('config_places.json')
    this.object = object
  }

  register = async (body) => {
    let results = []
    for (let placeInfo of this.config) {
      let locals = []
      const { type, radius } = placeInfo
      const response = await this.googleService.place(this.object.geocoding, type, radius)
      response["message"]["results"].map(place => {
        locals.push(place.name)
      })
      results.push({ type, locals })
    }
    return { key: "places", value: results }
  }
}

module.exports = GooglePlaceClient