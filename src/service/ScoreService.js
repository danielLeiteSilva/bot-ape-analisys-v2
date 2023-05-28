const request = require('request')

class ScoreService {
    constructor() {
        this.url = process.env.URL_HEROKU || "http://localhost:8081"
    }

    async getScore(construtora) {

        const headers = {
            body: JSON.stringify({
                construtora: construtora
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        return new Promise((resolve) => {
            try {
                request.post(`${this.url}/score`, headers, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)["score"]
                            resolve({ message: response, code: response.statusCode })
                        } else {
                            resolve({ message: "Not possible resolve request", code: response.statusCode })
                        }
                    } else {
                        resolve({ message: error, code: response.statusCode })
                    }
                })

            } catch (Exception) {
                resolve({ message: Exception, code: 404 })
            }
        })
    }
}


module.exports = ScoreService