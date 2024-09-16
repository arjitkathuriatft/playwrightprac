const {test, expect} = require("@playwright/test");

test("verfy full page and locator screenshot", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.screenshot({path:'fullPage.png'})
    await page.locator('#displayed-text').screenshot({path:'locator.png'})

})


test("verfy visual testing", async({page})=>{

    await page.goto("https:/www.google.com/");
    // --if landing.png is not present then it will create it
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
    

})