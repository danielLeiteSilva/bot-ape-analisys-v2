class GPTService {
    constructor(model) {
        this.model = model
        this.token = process.env.GPT_TOKEN
        this.url = process.env.GPT_URL || "https://api.openai.com/v1/completions"
    }


    // body: JSON.stringify({
    //     model: "text-davinci-003",
    //     prompt: text,
    //     max_tokens: 2048,
    //     temperature: 0,
    //     top_p: 1
    // }),

    payload(text) {
        this.model['prompt'] = text
        return {
            body: JSON.stringify(this.model),
            headers: {
                "Authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            }
        }
    }


    gptAnalysis(text) {
        return new Promise((resolve) => {
            try {
                request.post(`${this.url}`, this.payload(text), (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            resolve({ message: body, code: response.statusCode })
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


module.exports = GPTService