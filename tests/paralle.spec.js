const { test, expect } = require("@playwright/test");


test.describe.configure({ mode: 'parallel' });
// test.describe.configure({ mode: 'serial' });
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

