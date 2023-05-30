const ScoreService = require("../service/ScoreService")

class ScoreClient {
  constructor() {
    this.scoreService = new ScoreService()
  }

  register = async (body) => {
    const { construtora } = body
    const response = await this.scoreService.getScore(construtora)
    return { key: 'nota', value: response["message"] }
  }
}

module.exports = ScoreClient