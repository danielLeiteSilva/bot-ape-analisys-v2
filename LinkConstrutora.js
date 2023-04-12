const request = require('request')

async function getLink(construtora) {
    return new Promise((resolve) => {
        try {
            request.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0&cx=c5d05e446c336476b&searchType=SEARCH_TYPE_UNDEFINED&lr=lang_pt&q=nota ${construtora} no reclame aqui google`, (error, response, body) => {
                if (!error) {
                    if (response.statusCode === 200) {
                        const result = JSON.parse(body)['items'][0]['link']
                        resolve({ message: result, code: response.statusCode })
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


module.exports = getLink