class PDFService {
    constructor() {
        this.url = process.env.URL_HEROKU || "https://api-get-score.herokuapp.com"
    }

    async getPDF(request) {

        const headers = {
            body: JSON.stringify({
                object: { ...request }
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        return new Promise((resolve) => {
            try {
                request.post(`${this.url}/pdf`, headers, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)["file"]
                            resolve({ message: response, code: response.statusCode })
                        } else {
                            reject({ message: "Not possible resolve request", code: response.statusCode })
                        }
                    } else {
                        reject({ message: error, code: response.statusCode })
                    }
                })

            } catch (Exception) {
                reject({ message: Exception, code: 404 })
            }
        })
    }
}

module.exports = PDFService