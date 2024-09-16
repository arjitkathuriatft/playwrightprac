const {test, expect} = require("@playwright/test");

test('verify multiple config', async({page})=> {
const username = page.locator('#username');
const password = page.locator('#password');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log( await page.title());
await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
await username.type("Hello")
await page.locator("#signInBtn").click();

})

// npx playwright test tests/multipleconfig.spec.js --config playwright.config1.js

// you can run different config file like that


// npx playwright test tests/multipleconfig.spec.js --config playwright.config1.js --project=firefox
// You can use project and select from there

    // ----accept ssl certificate
    // ignoreHTTPSErrors: true