const request = require('request')


class GoogleService {

    constructor() {
        this.key = process.env.KEY || "AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0"
        this.api = process.env.API || "https://maps.googleapis.com/maps/api"
    }

    async getDistanceAndTime(address, addressWork) {
        return new Promise((resolve, reject) => {
            try {
                request.get(encodeURI(`${this.api}/directions/json?origin=${address}&destination=${addressWork}&mode=transit&transit_mode=bus&key=${this.key}`), (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const distance = JSON.parse(body)["routes"][0]["legs"][0]["distance"]["text"]
                            const duration = JSON.parse(body)["routes"][0]["legs"][0]["duration"]["text"]
                            resolve({ message: { distance, duration }, code: response.statusCode })
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

    async place(geometry, type, radius) {
        return new Promise((resolve) => {
            try {
                request.get(`${this.api}/place/nearbysearch/json?location=${geometry.latitude},${geometry.longitude}&radius=${radius}&type=${type}&key=${this.key}`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)
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

module.exports = GoogleService