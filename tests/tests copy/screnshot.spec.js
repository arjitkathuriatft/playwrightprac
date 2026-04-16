const {test, expect} = require('@playwright/test')

test("screenshot",async({page})=>{
    //   await page.locator('//img[@alt="Canon"]').screenshot({path:"tests/screenshot/"+Date.now()+"full.png"})
    await page.goto("https://demo.opencart.com/")
    await page.locator('//a[text()="Desktops"]').hover()
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Mac ()']").click()
    await page.waitForTimeout(2000)
})