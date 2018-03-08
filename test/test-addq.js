const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('TESTING ADDQ', function () {
  it('should..', async function () {
    const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.setCookie( { name: 'cookie_notice_accepted', value: 'true', domain: 'www.addq.se' } );
    await page.goto('https://www.addq.se/');
    await page.click('.nav-opener');
    await page.waitForSelector('a[href="https://www.addq.se/karriar/"]');

    await page.click('a[href="https://www.addq.se/karriar/"]');
    await page.waitForSelector('#wrapper > main > div.container > div:nth-child(1) > div > div > div > div > div > h4');

    await page.hover('#wrapper > main > div.container > div:nth-child(1) > div > div > div > div > div > h4');
    await sleep(1000);

    await page.hover('img[src="https://www.addq.se/wp-content/uploads/2017/11/hjärta-300x300.jpg"]');
    await sleep(1000);

    await page.hover('img[src="https://www.addq.se/wp-content/uploads/2017/11/järngänget-300x300.jpg"]');
    await sleep(1000);

    await page.hover('#wrapper > main > div.container > div:nth-child(3) > div > div > div > div.wpb_text_column.center-text.blue-theme.max-width-728.divider-center > div > h4');
    await sleep(1000);

    await page.hover('#wrapper > main > div.container > div:nth-child(3) > div > div > div > div.wpb_text_column.wpb_content_element > div > h3');
    await sleep(2000);

    await page.hover('#wrapper > main > div.container > div:nth-child(4) > div:nth-child(2) > div > div > div:nth-child(1) > a');
    await sleep(1000);

    await page.click('#wrapper > main > div.container > div:nth-child(4) > div:nth-child(2) > div > div > div:nth-child(1) > a');
    await sleep(5000);

    await page.screenshot( { path: './screenshots/screenshot.png' } );
    await browser.close();
  });
});
