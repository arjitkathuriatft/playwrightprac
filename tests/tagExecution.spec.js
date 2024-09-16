const {test} = require("@playwright/test");

test('@run Facebook.com', async({page})=> {
await page.goto("https://www.facebook.com");
console.log( await page.title());
})

// npx playwright test --grep @run

// it will find from all the tags