const express = require('express')
const app = express()
const MongoClient = require('./MongoClient')
const Finance = require('./Financimento')
const getScore = require('./Nota')

const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.status(200).json({ response: "ok" })
})

app.listen(port, async () => {

    const { Telegraf } = require('telegraf');
    const { message } = require('telegraf/filters');
    const request = require('request')

    const bot = new Telegraf("933198108:AAHXHGN0Tzcleos_VP3-QENjPOuGQhC5Nxo");

    let nome = true
    let localizacao = false
    let nota = false
    let tamanho = false
    let preco = false
    let vaga = false
    let varanda = false
    let banheiros = false
    let quartos = false
    let entrada = false
    let fgts = false
    let construtora = false

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
            construtora = true
        } else if (construtora) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é o nome da construtora? `);
            object["cep"] = await ctx.message.text
            construtora = false
            tamanho = true
        } else if (tamanho) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é o tamanho em M² do empreendimento? `);
            object["construtora"] = await ctx.message.text
            tamanho = false
            preco = true
        } else if (preco) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual é o preço do empreendimento? `);
            object["tamanho"] = await ctx.message.text
            preco = false
            vaga = true
        } else if (vaga) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Possui vaga de carro? `);
            object["preco"] = await ctx.message.text
            vaga = false
            varanda = true
        } else if (varanda) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Possui varanda? `);
            object["vaga"] = await ctx.message.text
            varanda = false
            banheiros = true
        } else if (banheiros) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Quantos banheiros ele possuí? `);
            object["varanda"] = await ctx.message.text
            banheiros = false
            quartos = true
        } else if (quartos) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Quantos quartos ele possuí? `);
            object["banheiros"] = await ctx.message.text
            quartos = false
            entrada = true
        } else if (entrada) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual valor de entrada disponível hoje? `);
            object["quartos"] = await ctx.message.text
            entrada = false
            fgts = true
        } else if (fgts) {
            await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual valor de FGTS disponível hoje? `);
            object["entrada"] = await ctx.message.text
            fgts = false
        } else {
            object["fgts"] = await ctx.message.text

            await ctx.telegram.sendMessage(ctx.message.chat.id, `Aguarde um momento... `);

            object['nota'] = await getScore(object['construtora'])

            let addressWork = "Av. Interlagos, 3501 - Vila Arriete, São Paulo - SP, 04661-200"
            let addressWorkRaquel = "R. Rio Grande, 500 - Vila Mariana, São Paulo - SP, 04018-001"

            let address = await getAddressGoogleWithCep(object["cep"])

            let result = await getDistanceAndTime(address["message"], addressWork)
            let raquel = await getDistanceAndTime(address["message"], addressWorkRaquel)

            object["distanciaDaniel"] = result["message"]["distance"]
            object["distanciaRaquel"] = raquel["message"]["distance"]

            object["tempoDaniel"] = result["message"]["duration"]
            object["tempoRaquel"] = raquel["message"]["duration"]
            object["hora"] = new Date()


            let valorParce = parseFloat(object["preco"].replace('.', "").replace("R$").trim())
            let fgtsParce = parseFloat(object["fgts"].replace('.', "").replace("R$").trim())
            let valorEntradaDisponivel = parseFloat(object["entrada"].replace('.', "").replace("R$").trim())

            let valorFinanciamento = 211000
            let txJuros = 0.0
            if (valorParce >= 264000.00) {
                txJuros = 8.72  / 100 / 12
                object['enquadramento'] = "SFH HMP"
                object['documentacao'] = false
            } else {
                txJuros = 7.16 / 100 / 12
                object['enquadramento'] = "HIS MCMV"
                object['documentacao'] = true
            }

            valorFinanciamento = valorFinanciamento - fgtsParce
            object['financimento'] = valorFinanciamento
            object['entrada'] = valorParce - valorFinanciamento - valorEntradaDisponivel

            const finance = new Finance(txJuros, valorParce, 420)
            object['sac'] = finance.calculoParcelaSAC()
            object['price'] = finance.calculoParcelaPRICE()

            let text = createTextToAnalysis()

            let resultAnalysis = await chatGptAnalysis(text)

            let response = JSON.parse(resultAnalysis["message"])["choices"][0]["text"]

            try {
                let res = JSON.parse(response)
                let text = responseAnalysis(res)

                await ctx.telegram.sendMessage(ctx.message.chat.id, text);

                const connection = await MongoClient()
                const insertUser = await connection.insertOne(object)

                console.log("Inserido no banco de dados!!!")
                console.log(insertUser)

            } catch (error) {
                console.log(error)
            } finally {
                nome = true
                localizacao = false
                nota = false
                tamanho = false
                preco = false
                vaga = false
                varanda = false
                banheiros = false
                quartos = false
                entrada = false
                fgts = false
                construtora = false
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
    
        Nome do empreendimento: ${object['nome']}
    Construtora: ${object['construtora']}
    Nota da construtora: ${object['nota']}
    Tamanho: ${object['tamanho']}
    Entrada: ${object['entrada'] <= 0 ? 0 : object['entrada'] }
    Documentacao: ${object['documentacao'] ? "Grátis" : "Paga"}
    Tipo de financiamento: ${object['enquadramento']}
    Distancia do trabalho:
        - Daniel: ${object['distanciaDaniel']}
        - Raquel: ${object['distanciaRaquel']}


    Tempo até o trabalho:
        - Daniel: ${object['tempoDaniel']}
        - Raquel: ${object['tempoRaquel']}


    Financiamento:
        Anos: ${420 / 12}
        - PRICE:
            primeira: ${object['price']['parcela1']}
            ultima: ${object['price']['parcelaN']}
            valor final: ${object['price']['valorFinal']}
            diferenca: ${object['price']['diferenca']}
        - SAC:
            primeira: ${object['sac']['parcela1']}
            ultima: ${object['sac']['parcelaN']}
            valor final: ${object['sac']['valorFinal']}
            diferenca: ${object['sac']['diferenca']}
    
    Avaliação da IA

    ${checked(response.nota)} Nota do empreendimento: ${response.nota} 
    
    ${response.description}

    Eu ${response.compro.toLowerCase()} a compra desse apê, viu!

    Ele pode ser um ${response.sentiment.toLowerCase()} negócio para você!
    
    `
    }

    function calculatedFinance(price, porcentagem) {
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
    Que a entrada seja menor que R$ 50.000 reais
    Que tenha um ou dois banheiros (Se tiver dois banheiros, pontuar mais alto)
    Que tenha mais de 2 quartos (Se tiver três, pontuar mais alto)

    
    Com base nessas informações acima, avalie essas condições: 
    
    Nome do empreendimento: ${object.nome}
    Localização (KM) trabalho da Raquel: ${object.distanciaRaquel}
    Localização (KM) trabalho da Daniel: ${object.distanciaDaniel}
    Nota de reclamação da construtora: ${object.nota}
    Tamanho m²: ${object.tamanho}
    Preço:  ${object.preco}
    Tempo percorrido trabalho da Raquel: ${object.tempoRaquel}
    Tempo percorrido trabalho do Daniel: ${object.tempoDaniel}
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

            } catch (Exception) {
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

            } catch (Exception) {
                resolve({ message: Exception, code: 404 })
            }

        })
    }

    bot.launch();

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));

})

//P = VP X (1 + i) ^ p x i / (1 + i) ^ p - 1

function calculoPrice(tx, vp, n) {
    return vp * Math.pow((1 + tx), n) * tx / Math.pow((1 + tx), tx) - 1
}

