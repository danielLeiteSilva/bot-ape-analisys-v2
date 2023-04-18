const puppeteer = require('puppeteer');
const getLink = require('./LinkConstrutora');

const getScore = async (construtora) => {

    let { message } = await getLink(construtora)

    try {

        const browser = await puppeteer.launch({
            headless: false, 
            ignoreDefaultArgs: ['--disable-extensions'],
            args: ['--no-sandbox']
        })

        const page = await browser.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36')
        await page.goto(message);
        await page.setViewport({ width: 1080, height: 1024 });
        await sleep(5000)
        await page.click('#reputation-tab-5');
        let resp = await page.evaluate(() => document.getElementsByClassName("score")[0].textContent);
        await browser.close();
        return resp.split("/")[0]
    } catch (error) {
        console.log(error)
        return "15"
    }
}


sleep = (timer) => {
    return new Promise(resolve => setTimeout(resolve, timer))
}


module.exports = getScore