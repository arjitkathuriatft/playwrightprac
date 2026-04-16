const { test, expect } = require("@playwright/test");

// by default run parallel no need to mention this
// test.describe.configure({ mode: 'parallel' });

// if you want to run serieal then you can mention this it will run with 1 worker and if 1 fail 
// then it will run other test also
test.describe.configure({ mode: 'serial' });
// --bedefault also run serial but difference is that if 1 fail then it wo't run other

test('check parallel execution', async ({ page }) => {
    const username = page.locator('#username');
    const password = page.locator('#password');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await username.type("Hello")
    await page.locator("#signInBtn").click();

}),

test('Google.com', async ({ page }) => {
        await page.goto("https://www.google.com");
        console.log(await page.title());
 }),

 test('Facebook.com', async({page})=> {
    await page.goto("https://www.facebook.com");
    console.log( await page.title());
})

 test('amazon.com', async({page})=> {
    await page.goto("https://www.facebook.com");
    console.log( await page.title());
})


 test('befkoof.com', async({page})=> {
    await page.goto("https://www.facebook.com");
    console.log( await page.title());
})

 test('flipkart.com', async({page})=> {
    await page.goto("https://www.facebook.com");
    console.log( await page.title());
})

