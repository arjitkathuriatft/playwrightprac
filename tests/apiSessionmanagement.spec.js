const {test, expect} = require("@playwright/test");
let webcontext;

test.beforeAll(async({browser})=> {
    const context =await browser.newContext();
    const page = await context.newPage();
    const email = "arjit.kathuria19@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Test@123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path: 'state.json'})
    webcontext = await browser.newContext({storageState: 'state.json'})


})



// Page not required in fixture we are passing it dynamically

test('direct browser interaction', async({})=> {
    const page = await webcontext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 

    // How to debug
    // cntr/cmd + shift + p
    // ---chossed Debug: npm script
    //  it will come in nom package json file like that "scripts": {},
    //  write like that
    // "scripts": {
    //     "test": "npx playwright test tests/apiSessionmanagement.spec.js --headed"
    //   },
    // then click on debug  or ctrl + shift + p -> click on debug npm module

})

// ----install playwright and start 

// npm init playwright@latest