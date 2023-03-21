const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.status(200).json({ response: "ok" })
})

app.listen(port, async () => {

    const { Telegraf } = require('telegraf');
    const { message } = require('telegraf/filters');
    const request = require('request')

    const bot = new Telegraf("933198108:AAFChuapeL6Ypig4ZoNWczKlliKROdzqwuo");

    let nome = true
    let localizacao = false
    let nota = false
    let tamanho = false
    let preco = false
    let financiamento = false
    let vaga = false
    let varanda = false
    let banheiros = false
    let quartos = true

    let object = {}

    console.log("Start Bot!!!")
    console.log("Connected")

    bot.on(message('text'), async (ctx) => {
        if (nome) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual o nome do empreendimento? `);
            nome = false
            localizacao = true
        } else if (localizacao) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é o CEP do empreendimento? `);
            object["nome"] = await ctx.message.text
            localizacao = false
            nota = true
        } else if (nota) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é a nota da construtora? `);
            object["cep"] = await ctx.message.text
            nota = false
            tamanho = true
        } else if (tamanho) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é o tamanho em M² do empreendimento? `);
            object["nota"] = await ctx.message.text
            tamanho = false
            preco = true
        } else if (preco) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é o preço do empreendimento? `);
            object["tamanho"] = await ctx.message.text
            preco = false
            financiamento = true
        } else if (financiamento) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é a porcentagem de financiamento? `);
            object["preco"] = await ctx.message.text
            financiamento = false
            vaga = true
        } else if (vaga) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Possui vaga de carro? `);
            object["financiamento"] = await ctx.message.text
            vaga = false
            varanda = true
        } else if (varanda) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Possui varanda? `);
            object["vaga"] = await ctx.message.text
            varanda = false
            banheiros = true
        }else if(banheiros){
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Quantos banheiros ele possuí? `);
            object["varanda"] = await ctx.message.text
            banheiros = false
            quartos = true
        }else if(quartos){
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Quantos quartos ele possuí? `);
            object["banheiros"] = await ctx.message.text
            quartos = false
        } else {
            object["quartos"] = await ctx.message.text
            object["entrada"] = calculatedFinance(object["preco"], object["financiamento"])

            await ctx.telegram.sendMessage(ctx.message.chat.id, `Aguarde um momento... `);

            let addressWork = "Av. Interlagos, 3501 - Vila Arriete, São Paulo - SP, 04661-200"

            let address = await getAddressGoogleWithCep(object["cep"])

            let result = await getDistanceAndTime(address["message"], addressWork)

            object["distancia"] = result["message"]["distance"]
            object["tempo"] = result["message"]["duration"]

            console.log(object)

            let text = createTextToAnalysis()

            let resultAnalysis = await chatGptAnalysis(text)

            let response = JSON.parse(resultAnalysis["message"])["choices"][0]["text"]

            try {
                let res = JSON.parse(response)
                let text = responseAnalysis(res)

                await ctx.telegram.sendMessage(ctx.message.chat.id, text);

                nome = true
                localizacao = false
                nota = false
                tamanho = false
                preco = false
                financiamento = false
                vaga = false
                varanda = false
                banheiros = false
                quartos = false

            } catch (error) {
                console.log(error)
            }

        }

    })

    function checked(nota) {
        if (nota >= 8) {
            return "✅"
        } else if (nota >= 5 && nota <= 7.99) {
            return "⚠️"
        } else {
            return "❌"
        }

    }

    function responseAnalysis(response) {
        return `
    ${checked(response.nota)} Nota do empreendimento: ${response.nota} 
    
    ${response.description}

    Eu ${response.compro.toLowerCase()} a compra desse apê, viu!

    Ele pode ser um ${response.sentiment.toLowerCase()} negócio para você!
    
    `
    }

    function calculatedFinance(price, porcentagem){
        let preco = parseFloat(price)
        let percent = parseFloat(porcentagem)

        return ((100.00 - percent) / 100) * preco
    }

    function createTextToAnalysis() {
        return `Estou procurando um apartamento com as seguintes condições:

    Que fique a menos 20km da empresa (Flexível até 25 km)
    Que a nota de reclamação da construtora seja maior que 7
    Que o tempo percorrido seja menor que 1h
    Que o tamanho seja entre 45m² e 55m² (Flexível até 40m²)
    Que o preço seja abaixo de R$ 350.000 reais (Flexível até R$ 450.000 reais)
    E que a porcentagem de financiamento seja de 80% para cima (Flexível até 70%)
    Que tenha varanda
    Que tenha vaga
    Que a entrada seja menor que R$ 50.000
    Que tenha um ou dois banheiros (Se tiver dois banheiros, pontuar mais alto)
    Que tenha mais de 2 quartos (Se tiver três, pontuar mais alto)

    
    Com base nessas informações acima, avalie essas condições: 
    
    Nome do empreendimento: ${object.nome}
    Localização (KM): ${object.distancia}
    Nota de reclamação da construtora: ${object.nota}
    Tamanho m²: ${object.tamanho}
    Preço:  ${object.preco}
    Financiamento (%): ${object.financiamento}
    Tempo percorrido: ${object.tempo}
    Varanda: ${object.varanda}
    Vaga: ${object.vaga}
    Entrada: ${object.entrada}
    Banheiro: ${object.banheiros}
    Quartos: ${object.quartos}
    
    Com base nessas informações acima, devolva somente um codigo JSON formatado sem quebra de linha, E NADA MAIS, com os seguintes parametros: 
    nota: 0 - 10 
    description: descricao do porque devo ou não comprar o Apê
    compro: recomendo ou não recomendo
    sentiment: bom, mau, razoável, péssimo, excelente`
    }


    function generatePayloadText(text) {
        return {
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: text,
                max_tokens: 2048,
                temperature: 0,
                top_p: 1
            }),
            headers: {
                "Authorization": `Bearer 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`,
                "Content-Type": "application/json"
            }
        }
    }


    function chatGptAnalysis(text) {

        return new Promise((resolve) => {
            try {
                request.post("https://api.openai.com/v1/completions", generatePayloadText(text), (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            resolve({ message: body, code: response.statusCode })
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


    async function getAddressGoogleWithCep(cep) {
        return new Promise((resolve) => {
            try {
                request.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const result = JSON.parse(body)["results"][0]["formatted_address"]
                            resolve({ message: result, code: response.statusCode })
                        } else {
                            resolve({ message: "Not possible resolve request", code: response.statusCode })
                        }
                    } else {
                        resolve({ message: error, code: response.statusCode })
                    }
                })

            } catch (e) {
                resolve({ message: Exception, code: 404 })
            }

        })
    }

    async function getDistanceAndTime(address, addressWork) {
        return new Promise((resolve) => {
            try {
                request.get(encodeURI(`https://maps.googleapis.com/maps/api/directions/json?origin=${address}&destination=${addressWork}&mode=transit&transit_mode=bus&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`), (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const distance = JSON.parse(body)["routes"][0]["legs"][0]["distance"]["text"]
                            const duration = JSON.parse(body)["routes"][0]["legs"][0]["duration"]["text"]
                            resolve({ message: { distance, duration }, code: response.statusCode })
                        } else {
                            resolve({ message: "Not possible resolve request", code: response.statusCode })
                        }
                    } else {
                        resolve({ message: error, code: response.statusCode })
                    }
                })

            } catch (e) {
                resolve({ message: Exception, code: 404 })
            }

        })
    }

    bot.launch();

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));

})

