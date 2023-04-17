const path = require('path');
const puppeteer = require('puppeteer');
const fs = require('fs')

async function run(object) {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();

    // Aqui você pode configurar opções adicionais, como tamanho de página, margens, etc.

    var contentHtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <style>
            html {
                -webkit-print-color-adjust: exact;
            }
    
            * {
                padding: 0;
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;
                letter-spacing: -1px;
            }
    
            header {
                width: 900px;
                height: 100px;
                background-image: linear-gradient(#e66465, #9198e5);
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                color: #fff;
                flex-direction: column;
            }
    
            p {
                font-size: 15pt;
            }
    
            article {
                width: 100%;
                min-height: 250px;
                margin-top: 10px;
            }
    
            section {
                width: 100%;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px;
                box-sizing: border-box;
                margin-top: 10px;
            }
    
            div {
                width: 200px;
                height: 75px;
                border-radius: 10px;
                padding: 5px;
                box-sizing: border-box;
                color: #000000;
                font-weight: 600;
                background: #ffffff;
                box-shadow: 0px 0px 10px 0px #d8d8d8;
                margin-left: 20px;
                margin-right: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
    
            .desc {
                font-size: 15pt;
            }
    
            #cx-valor {
                margin-top: 0px;
            }
    
            #valor {
                width: 100%;
                height: 50px;
                font-size: 20pt;
                color: #e66465;
            }
    
            #andar {
                width: 100%;
                height: 50px;
                font-size: 20pt;
                color: #e66465;
                margin-right: 15px;
            }
    
            #casa {
                width: 100%;
                height: 50px;
                font-size: 15pt;
                color: #e66465;
                margin-right: 15px;
            }
    
            #info {
                width: 100%;
            }
    
            #informacao {
                width: 100%;
                min-height: 523px;
                display: flex;
                justify-content: space-around;
                margin: 0;
            }
    
            .infos {
                width: 250px;
                min-height: 400px;
                margin-left: 5px;
                flex-direction: column;
                margin: 0;
                padding: 0;
                overflow: hidden;
                box-shadow: 0px 0px 5px 0px #d8d8d8;
                border-radius: 5px;
            }
    
            .top-info {
                width: 100%;
                height: 40px;
                margin: 0;
                background-color: #e66465;
                color: #fff;
            }
    
            .content {
                width: 100%;
                height: 440px;
                font-size: 10pt;
                font-weight: 100;
                padding-left: 30px;
                box-sizing: border-box;
                display: block;
            }
    
            .km {
                width: 100%;
                height: 20px;
                font-size: 10pt;
                margin: 0;
                background-color: #b284b3;
                color: #fff;
            }
    
            .distancia {
                width: 100%;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-around;
            }
    
            .dist {
                width: 25%;
                height: 100%;
                margin: 0;
                padding: 0;
                background-color: #9396e1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #fff;
            }
    
            .tempo {
                background-color: #b284b3;
            }
    
            .dist-value {
                font-size: 20pt;
                font-weight: 600;
            }
    
            .title {
                font-size: 15pt;
            }
    
            .entrada {
                font-size: 11pt;
            }
    
            .financiamento {
                width: 100%;
                height: 250px;
                padding: 0;
                margin: 0;
            }
    
            .sac {
                width: 50%;
                height: 100%;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: #b284b3;
                color: #fff;
            }
    
            .price {
                width: 50%;
                height: 100%;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: #9198e5;
                color: #fff;
            }
    
            .fin-desc {
                font-size: 12pt;
                font-weight: 600;
            }
    
            .fin-value {
                font-size: 20pt;
            }
    
            .fin-title {
                font-size: 20pt;
                font-weight: 600;
            }
    
            .info-bot-ponto {
                width: 100%;
                height: 75px;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                background-color: #e66465;
                color: #fff;
            }
    
            .info-bot-recomenda {
                width: 100%;
                height: 75px;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                background-color: #9396e1;
                color: #fff;
            }
    
            .info-bot-descricao {
                width: 100%;
                min-height: 200px;
                font-size: 15pt;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                background-color: #b284b3;
                color: #fff;
                display: block;
                padding: 15px;
                box-sizing: border-box;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
        </style>
    </head>
    
    <body>
        <main>
    
            <header>
                <h1>${object['nome']}</h1>
                <p>Construtora ${object['construtora']}</p>
            </header>
    
            <article>
    
                <section id="cx-valor">
                    <div id="valor">R$ ${object['preco']},00</div>
                    <div id="andar">${object["andar"]} º</div>
                    <div id="casa">${object['governo']}</div>
                </section>
    
                <section>
                    <div>
                        <span style="color:#e46568">Reclame Aqui</span>
                        <p class="desc" style="color:#e46568">${object['nota']}</p>
                    </div>
                    <div>
                        <span style="color: #b284b3">Documentação</span>
                        <p class="desc" style="color: #b284b3">${object['documentacao'] ? "Grátis" : "Paga"}</p>
                    </div>
                    <div>
                        <span style="color: #9396e1">Tipo de financiamento</span>
                        <p class="desc" style="color: #9396e1">${object['enquadramento']}</p>
                    </div>
                    <div>
                        <span style="color: #9396e1">Entrada: </span>
                        <p class="desc" style="color: #9396e1">R$ ${object['entrada']},00</p>
                    </div>
                </section>
                <section>
                    <div>
                        <span style="color:#e46568">Garagem</span>
                        <p class="desc" style="color:#e46568">${object['vaga']}</p>
                    </div>
                    <div>
                        <span style="color: #b284b3">Coberta</span>
                        <p class="desc" style="color: #b284b3">${object['garagem']}</p>
                    </div>
                    <div>
                        <span style="color: #9396e1">Varanda</span>
                        <p class="desc" style="color: #9396e1">${object['varanda']}</p>
                    </div>
                    <div>
                        <span style="color: #9396e1">Metragem: </span>
                        <p class="desc" style="color: #9396e1">${object['tamanho']} m²</p>
                    </div>
                </section>
                <section>
                    <div>
                        <span style="color:#e46568">Banheiros</span>
                        <p class="desc" style="color:#e46568">${object['banheiros']}</p>
                    </div>
                    <div>
                        <span style="color: #b284b3">Dormitórios</span>
                        <p class="desc" style="color: #b284b3">${object['quartos']}</p>
                    </div>
                    <div>
                        <span style="color: #9396e1">Planta</span>
                        <p class="desc" style="color: #9396e1">${object['planta']}</p>
                    </div>
                    <div>
                        <span style="color: #9396e1">Vista</span>
                        <p class="desc" style="color: #9396e1">${object['vista']}</p>
                    </div>
                </section>
    
                <section>
                    <div>
                        <span style="color:#e46568">Lado do Sol</span>
                        <p class="desc" style="color:#e46568">${object['sol']}</p>
                    </div>
                    <div>
                        <span style="color:#e46568">Condomínio</span>
                        <p class="desc" style="color:#e46568">R$ ${object['condomonio']},00</p>
                    </div>
                    <div>
                        <span style="color:#e46568">Período de obra</span>
                        <p class="desc" style="color:#e46568">${object['periodo']} meses</p>
                    </div>
                    <div>
                        <span style="color:#e46568">Valor max obra</span>
                        <p class="desc" style="color:#e46568">R$ ${object['valor_max']},00</p>
                    </div>
                </section>
    
                <section id="informacao">
                    <div class="infos">
                        <section class="top-info">Mercados</section>
                        <section class="km">1 km</section>
                        <section class="content">
                            <ul>
                                ${object["mercados"]}
                            </ul>
                        </section>
                    </div>
                    <div class="infos">
                        <section class="top-info">Hospitais</section>
                        <section class="km">5 km</section>
                        <section class="content">
                            <ul>
                                ${object["hospitais"]}
                             </ul>
                        </section>
                    </div>
                    <div class="infos">
                        <section class="top-info">Escolas</section>
                        <section class="km">1 km</section>
                        <section class="content">
                            <ul>
                                ${object['escolas']}
                            </ul>
                        </section>
                    </div>
                </section>
                <section class="distancia">
                    <section class="dist">
                        <span>Trabalho do Daniel</span>
                        <span class="dist-value">${object["distanciaDaniel"]}</span>
                    </section>
                    <section class="dist tempo">
                        <span>Tempo Daniel</span>
                        <span class="dist-value">${object["tempoDaniel"]}</span>
                    </section>
                    <section class="dist">
                        <span>Trabalho da Raquel</span>
                        <span class="dist-value">${object["distanciaRaquel"]}</span>
                    </section>
                    <section class="dist tempo">
                        <span>Tempo da Raquel</span>
                        <span class="dist-value">${object["tempoRaquel"]}</span>
                    </section>
                </section>
                <section class="financiamento">
                    <section class="sac">
                        <span class="fin-title">SAC</span>
                        <span class="fin-desc">Primeira parcela</span>
                        <span class="fin-value">R$ ${object["sac"]['parcela1']},00</span>
                        <span class="fin-desc">Ultima parcela</span>
                        <span class="fin-value">R$ ${object["sac"]['parcelaN']},00</span>
                        <span class="fin-desc">Valor final</span>
                        <span class="fin-value">R$ ${object["sac"]['valorFinal']},00</span>
                        <span class="fin-desc">Diferença</span>
                        <span class="fin-value">R$ ${object["sac"]['diferenca']},00</span>
                    </section>
                    <section class="price">
                        <span class="fin-title">PRICE</span>
                        <span class="fin-desc">Primeira parcela</span>
                        <span class="fin-value">R$ ${object["price"]['parcela1']},00</span>
                        <span class="fin-desc">Ultima parcela</span>
                        <span class="fin-value">R$ ${object["price"]['parcelaN']},00</span>
                        <span class="fin-desc">Valor final</span>
                        <span class="fin-value">R$ ${object["price"]['valorFinal']},00</span>
                        <span class="fin-desc">Diferença</span>
                        <span class="fin-value">R$ ${object["price"]['diferenca']},00</span>
                    </section>
                </section>
                <section class="info-bot-ponto">
                    <span>Pontuação</span>
                    <span style="font-size: 25pt;">${object['nota_bot']}</span>
                </section>
                <section class="info-bot-recomenda">
                    <span style="font-size: 20pt;">${object['compro']}</span>
                </section>
                <section class="info-bot-descricao">
                    ${object['description_bot']}
                </section>
            </article>
        </main>
    </body>
    
    </html>`
    
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36')

    await page.setContent(contentHtml);

    // Passo 4: Gerar o PDF
    // await page.goto("file://" + x); // Carrega o arquivo HTML
    await page.pdf({ path: './arquivo.pdf', format: 'A4' }); // Gera o PDF

    await browser.close(); // Fecha o navegador
}

module.exports = run