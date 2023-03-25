const { openBrowser, goto, write, click, closeBrowser, $ , into, textBox} = require('taiko');

(async () => {
    await openBrowser({headless: false});
    await goto("https://habitacao.caixa.gov.br/siopiweb-web/simulaOperacaoInternet.do?method=inicializarCasoUso&pk_campaign=habitacao&pk_kwd=direct&pk_source=redirect");
    await write('Residencial', into(textBox("Informe o tipo de financiamento")))
    await sleep(5000)

    await closeBrowser();
})();


sleep = (timer) => {
    return new Promise(resolve => setTimeout(resolve, timer))
}