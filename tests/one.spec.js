const {test, expect} = require("@playwright/test");
require('dotenv').config();


test('my first test', async({browser})=>{
const context =  await browser.newContext();
const page = await context.newPage();
console.log(process.env.ENABLE_FIREFOX)
await page.goto('https://www.google.com')
console.log(process.env.ENABLE_FIREFOX)

})

test('my second test', async({browser})=>{
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.facebook.com') 
    })

    // npx playwright test tests/one.spec.js --config playwrightfirefox.config.js
    // npx playwright test tests/one.spec.js --config playwrightall.config.js --project=firefox
    // npx playwright test tests/one.spec.js --config playwrightenv.config.js