const{test,expect,chromium}=require('@playwright/test')

test("multuTab",async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const pagePromise=await context.waitForEvent('page')
    await page1.locator('//a[text()="OrangeHRM, Inc"]').click()
    const newPage=await pagePromise
    expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")
    await newPage.waitForTimeout(3000)
})