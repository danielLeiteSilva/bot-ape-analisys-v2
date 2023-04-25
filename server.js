const express = require('express')
const app = express()
const MongoClient = require('./MongoClient')
const Finance = require('./Financimento')
const fs = require('fs')
const XLSX = require('xlsx')
const { ObjectId } = require('mongodb')

const port = process.env.PORT || 8084

app.get("/", (req, res) => {
    res.status(200).json({ response: "ok" })
})

app.listen(port, async () => {

    const { Telegraf, Markup } = require('telegraf');
    const { message } = require('telegraf/filters');
    const request = require('request')

    const bot = new Telegraf("1752567066:AAGm7V0w4JRqDEu5N9HILjmsLWh1MV_c_bs");

    //Test
    // const bot = new Telegraf("997375635:AAEb5KD5ylWpo3OcAOviPpVX7_xRKSMm1mw");


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
    let garagem = false
    let planta = false
    let vista = false
    let sol = false
    let obra = false
    let valor_periodo = false
    let andar = false
    let contrato = false
    let taxaJ = false
    let renda = false
    let andares = false

    let object = {}


    let relatorio = false
    let analise = false

    console.log("Start Bot!!!")
    console.log("Connected")

    bot.on(message('text'), async (ctx) => {

        let command = await ctx.message.text
        command = command.toLowerCase()

        if ("relatorio" === command || relatorio) {
            relatorio = true

            const connection = await MongoClient()
            let all = await connection.find({}).toArray()

            const workSheet = XLSX.utils.json_to_sheet(all)
            const workBook = XLSX.utils.book_new()

            let date = new Date()
            let format_data = date.toLocaleTimeString('pt-BR', {
                timeZone: 'America/Sao_Paulo',
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            })

            let format_value = format_data.split(",")

            let format_date = format_value[0].split("/").join("_")
            let format_hour = format_value[1].split(":").join("-").trim()

            let name_plan = `apartamentos_relatorio_${format_date}_${format_hour}`

            XLSX.utils.book_append_sheet(workBook, workSheet, 'Apartamentos')
            XLSX.writeFile(workBook, `${name_plan}.xlsx`)

            await ctx.replyWithDocument({ source: `./${name_plan}.xlsx` })
            fs.rmSync(`./${name_plan}.xlsx`)

            relatorio = false
        } else if ('analise' === command || analise) {
            analise = true
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
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Possui vaga de carro? `);
                await ctx.reply('Possui vaga de carro?', Markup.keyboard(['Sim', 'Não']).resize().oneTime())
                object["preco"] = await ctx.message.text
                vaga = false
                varanda = true
            } else if (varanda) {
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Possui varanda? `);
                await ctx.reply('Possui varanda?', Markup.keyboard(['Sim', 'Não']).resize().oneTime())
                object["vaga"] = await ctx.message.text
                varanda = false
                banheiros = true
            } else if (banheiros) {
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Quantos banheiros ele possuí? `);
                await ctx.reply('Quantos banheiros ele possuí?', Markup.keyboard(['1', '2', '+2']).resize().oneTime())
                object["varanda"] = await ctx.message.text
                banheiros = false
                quartos = true
            } else if (quartos) {
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Quantos quartos ele possuí? `);
                await ctx.reply('Quantos quartos ele possuí?', Markup.keyboard(['1', '2', '+2']).resize().oneTime())
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
                garagem = true

            } else if (garagem) {
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Garagem é coberta? `);
                await ctx.reply('Garagem é coberta?', Markup.keyboard(['Sim', 'Não']).resize().oneTime())
                object["fgts"] = await ctx.message.text
                garagem = false
                planta = true

            } else if (planta) {
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual tipo de planta? `);
                await ctx.reply('Qual tipo de planta?', Markup.keyboard(['Canto', 'Corredor']).resize().oneTime())
                object["garagem"] = await ctx.message.text
                planta = false
                vista = true

            } else if (vista) {
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Vista do apartamento? `);
                await ctx.reply('Vista do apartamento?', Markup.keyboard(['Aberta', 'Fechada']).resize().oneTime())
                object["planta"] = await ctx.message.text
                vista = false
                sol = true

            } else if (sol) {
                // await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual o lado do sol? `);
                await ctx.reply('Qual o lado do sol?', Markup.keyboard(['Manhã', 'Tarde']).resize().oneTime())
                object["vista"] = await ctx.message.text
                sol = false
                obra = true

            } else if (obra) {
                await ctx.telegram.sendMessage(ctx.message.chat.id, `Período de obras em meses? `);
                object["sol"] = await ctx.message.text
                obra = false
                valor_periodo = true

            } else if (valor_periodo) {
                await ctx.telegram.sendMessage(ctx.message.chat.id, `Valor máximo do período de obras? `);
                object["periodo"] = await ctx.message.text
                valor_periodo = false
                andar = true
            } else if (andar) {
                await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual o andar? (Somente o número) `);
                object["valor_max"] = await ctx.message.text
                andar = false
                contrato = true
            } else if (contrato) {
                await ctx.reply('Qual o período de assinatura do contrato com a caixa?', Markup.keyboard(['30', '60', '90']).resize().oneTime())
                object["andar"] = await ctx.message.text
                contrato = false
                taxaJ = true

            } else if (taxaJ) {
                await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual a taxa de juros?`);
                object["contrato"] = await ctx.message.text
                taxaJ = false
                renda = true

            } else if (renda) {
                await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual a renda?`);
                object["taxa"] = await ctx.message.text
                renda = false
                andares = true

            } else if (andares) {
                await ctx.telegram.sendMessage(ctx.message.chat.id, `Qual a quantidade de andares?`);
                object["renda"] = await ctx.message.text
                andares = false

            } else {

                object["andares"] = await ctx.message.text


                await ctx.telegram.sendMessage(ctx.message.chat.id, `⌛ Aguarde um momento... ⌛ `);

                let score = await getScore(object['construtora'])
                object['nota'] = score["message"]
                console.log(score, object['nota'])

                let addressWork = "Av. Interlagos, 3501 - Vila Arriete, São Paulo - SP, 04661-200"
                let addressWorkRaquel = "R. Rio Grande, 500 - Vila Mariana, São Paulo - SP, 04018-001"

                let address = await getAndressViaCep(object["cep"])
                object['endereco'] = address["message"]


                let geometry = await latLong(address["message"])
                let market = await markets(geometry["message"])
                let hosp = await hospital(geometry["message"])
                let escolas = await school(geometry["message"])
                let trens = await trains(geometry["message"])
                let metros = await subway(geometry["message"])


                let subway_data = ""
                metros["message"]["results"].map(results => {
                    subway_data = subway_data += "<li>" + results.name + "</li>" + "\n"
                })

                let train = ""
                trens["message"]["results"].map(results => {
                    train = train += "<li>" + results.name + "</li>" + "\n"
                })

                let schools = ""
                escolas["message"]["results"].map(results => {
                    schools = schools += "<li>" + results.name + "</li>" + "\n"
                })

                let emergency = ""
                hosp["message"]["results"].map(results => {
                    emergency = emergency += "<li>" + results.name + "</li>" + "\n"
                })

                let supermarkets = ""
                market["message"]["results"].map(results => {
                    supermarkets = supermarkets += "<li>" + results.name + "</li>" + "\n"
                })

                object['metro'] = subway_data
                object['trens'] = train
                object["mercados"] = supermarkets
                object["hospitais"] = emergency
                object['escolas'] = schools

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

                let taxa = parseFloat(object['taxa'])

                let valorFinanciamento = 240000
                let txJuros = 0.0
                if (valorParce > 264000.00) {
                    txJuros = taxa / 100 / 12
                    object['enquadramento'] = "SFH"
                    object['documentacao'] = false
                    object['governo'] = 'Habitação popular'
                } else {
                    txJuros = taxa / 100 / 12
                    object['governo'] = 'Casa verde amarela'
                    object['enquadramento'] = "SFH"
                    object['documentacao'] = true
                }

                let tam = parseInt(object["tamanho"])

                object["condomonio"] = tam * 11

                let resultFinanciamento = 0
                let entrada = 0 
                let financimento = valorParce - valorEntradaDisponivel
                if (financimento > valorFinanciamento) {
                    entrada = financimento - valorFinanciamento - fgtsParce
                    resultFinanciamento = valorFinanciamento
                } else {
                    entrada = 0
                    resultFinanciamento = financimento - fgts
                }

                object['financimento'] = resultFinanciamento
                object['entrada'] = entrada <= 0 ? 0 : entrada

                let contract = parseInt(object['contrato'])
                object['incc'] = contract > 30 || object['entrada'] > 0 ? "Sim" : "Não"

                const finance = new Finance(txJuros, resultFinanciamento, 420)
                object['sac'] = finance.calculoParcelaSAC()
                object['price'] = finance.calculoParcelaPRICE()

                let renda = parseFloat(object["renda"])
                let parcela1Sac = parseFloat(object['sac']['parcela1'])
                let parcela1Price = parseFloat(object['price']['parcela1'])

                let percentSac = (parcela1Sac / renda) * 100
                let percentPrice = (parcela1Price / renda) * 100

                if (percentSac < 30) {
                    object['type_fin'] = "Price/Sac"
                } else if (percentPrice < 30) {
                    object['type_fin'] = "Price"
                } else {
                    object['type_fin'] = "NEF"
                }

                let his1 = 1302 * 3
                let his2 = 1302 * 6
                let hmp = 1302 * 10

                if (renda < his1) {
                    object['zoneamento'] = "HIS 1"
                } else if (renda < his2) {
                    object['zoneamento'] = "HIS 2"
                } else if (renda < hmp) {
                    object['zoneamento'] = "HMP"
                } else {
                    object['zoneamento'] = "R2V"
                }

                let text = createTextToAnalysis()

                let resultAnalysis = await chatGptAnalysis(text)

                let response = JSON.parse(resultAnalysis["message"])["choices"][0]["text"]
                let res = JSON.parse(response)

                object['nota_bot'] = res?.nota
                object['description_bot'] = res?.description
                object['compro'] = res?.compro

                const file = await getPDF(object)
                const base64 = file['message']

                let nome_file = object["nome"].replace(" ", "_").toLowerCase()
                fs.writeFileSync(`./${nome_file}.pdf`, base64, 'base64')

                try {

                    // Markup.inlineKeyboard([
                    //     Markup.button.url('Mapa de enchentes:', 'https://www.google.com/maps/d/edit?mid=1j-syQuSeo5O3m4iRZwdIk7msXLrek2A&usp=sharing')
                    // ])

                    await ctx.replyWithDocument({ source: `./${nome_file}.pdf` })
                    fs.rmSync(`./${nome_file}.pdf`)

                    const connection = await MongoClient()
                    object['_id'] = new ObjectId()
                    const insertUser = await connection.insertOne(object)

                    console.log("Inserido no banco de dados!!!")
                    console.log(insertUser)

                } catch (error) {
                    console.log(error)
                    await ctx.telegram.sendMessage(ctx.message.chat.id, `Não foi possível enviar ${error}`);
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
                    garagem = false
                    planta = false
                    vista = false
                    sol = false
                    obra = false
                    valor_periodo = false
                    andar = false
                    contrato = false
                    taxaJ = false
                    analise = false
                    renda = false
                    andares = false
                }

            }
        }
    })

    function createTextToAnalysis() {
        return `Estou procurando um apartamento com as seguintes condições:

    Que fique a menos 10km da empresa do Daniel (Flexível até 20 km)
    Que fique a menos 10km da empresa do Raquel (Flexível até 20 km)
    Que a nota de reclamação da construtora seja maior que 6
    Que o tempo percorrido Daniel seja menor que 1h
    Que o tempo percorrido Raquel seja menor que 1h
    Que o tamanho seja entre 40m² e 55m² (Flexível até 39m²)
    Que o preço seja abaixo de R$ 270.000 reais (Flexível até R$ 320.000 reais)
    Que tenha varanda
    Que tenha vaga (Se não tiver, abaixar a pontuação em 1 ponto)
    Que a garagem seja coberta 
    Que a vista seja aberta (Se não tiver, abaixar a pontuação em 0.5 ponto)
    Que a entrada seja menor que R$ 50.000 reais
    Que tenha um ou dois banheiros (Se tiver dois banheiros, pontuar mais alto)
    Que tenha 2 quartos (Se tiver 3, pontuar mais alto)
    Que a documentação seja grátis
    Que o período de obra não ultrapasse 24 meses
    Que não tenha incc (Se não tiver, abaixar a pontuação em 1 ponto)
    
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
    INCC: ${object['incc']}
    Documentação: ${object['documentacao'] ? "Grátis" : "Paga"}
    Período: ${object["periodo"]}
    Cobertura da Vaga: ${object["garagem"]}
    Vista:  ${object["vista"]}

    Com base nessas informações acima, devolva somente um codigo JSON formatado sem quebra de linha, E NADA MAIS, com os seguintes parametros: 
    nota: 0 - 10
    description: uma descricao detalhada do porque devo ou não comprar o Apê
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


    async function getPDF(object) {

        const headers = {
            body: JSON.stringify({
                object: { ...object }
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        return new Promise((resolve) => {
            try {
                // request.post(`http://localhost:8081/pdf`, headers, (error, response, body) => {
                request.post(`https://api-get-score.herokuapp.com/pdf`, headers, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)["file"]
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

    async function getScore(construtora) {

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
                // request.post(`http://localhost:8081/score`, headers, (error, response, body) => {
                request.post(`https://api-get-score.herokuapp.com/score`, headers, (error, response, body) => {
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

    async function getAndressViaCep(cep) {
        return new Promise((resolve) => {
            try {
                request.get(`https://viacep.com.br/ws/${cep}/json/`, (error, response, body) => {
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

    async function getDistanceAndTime(address, addressWork) {
        return new Promise((resolve) => {
            try {
                request.get(encodeURI(`https://maps.googleapis.com/maps/api/directions/json?origin=${address}&destination=${addressWork}&mode=transit&transit_mode=bus&departure_time=1681786080&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`), (error, response, body) => {
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

    async function latLong(address) {
        return new Promise((resolve) => {
            try {
                request.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const { location } = JSON.parse(body)['results'][0]['geometry']

                            resolve({ message: location, code: response.statusCode })
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

    async function trains(geometry) {
        return new Promise((resolve) => {
            try {
                request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geometry.lat},${geometry.lng}&radius=5000&type=train_station&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)
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

    async function subway(geometry) {
        return new Promise((resolve) => {
            try {
                request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geometry.lat},${geometry.lng}&radius=5000&type=subway_station&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)
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

    async function markets(geometry) {
        return new Promise((resolve) => {
            try {
                request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geometry.lat},${geometry.lng}&radius=1000&type=supermarket&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)
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


    async function hospital(geometry) {
        return new Promise((resolve) => {
            try {
                request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geometry.lat},${geometry.lng}&radius=10000&type=hospital&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)
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


    async function school(geometry) {
        return new Promise((resolve) => {
            try {
                request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geometry.lat},${geometry.lng}&radius=1000&type=school&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === 200) {
                            const response = JSON.parse(body)
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

    bot.launch();

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));

})

//P = VP X (1 + i) ^ p x i / (1 + i) ^ p - 1

function calculoPrice(tx, vp, n) {
    return vp * Math.pow((1 + tx), n) * tx / Math.pow((1 + tx), tx) - 1
}

