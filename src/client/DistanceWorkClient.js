const Config = require("../config/Config")
const GoogleService = require("../service/GoogleService")

class DistanceWorkClient {
  constructor(object, key) {
    this.googleService = new GoogleService()
    this.file = Config.readConfig("config_distance.json")
    this.object = object
    this.key = key
  }

  register = async body => {
    const work = await this.googleService.getDistanceAndTime(this.object?.endereco, this.file[this.key])
    return { key: `trabalho_${this.key}`, value: work["message"]["duration"] }
  }
}

module.exports = DistanceWorkClient