const request = require('request')

class ViaCepService {
    constructor() {
        this.url = process.env.URL_VIACEP || "https://viacep.com.br/ws"
    }
    async getAndressViaCep(cep) {
        return new Promise((resolve) => {
            try {
                request.get(`${this.url}/${cep}/json/`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const result = JSON.parse(body)
                            const andress = `${result['logradouro']} - ${result['bairro']} - ${result['localidade']}, ${result['uf']}`
                            resolve({ message: andress, code: response.statusCode })
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

module.exports = ViaCepService