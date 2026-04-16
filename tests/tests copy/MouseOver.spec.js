const {test,expect}=require('@playwright/test')

test("Mouse",async ({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.locator('//a[text()="Desktops"]').hover()
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Mac (1)']").click()
    await page.waitForTimeout(2000)
})
