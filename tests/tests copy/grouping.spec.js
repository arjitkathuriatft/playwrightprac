const {test, expect} = require('@playwright/test');


test.describe("group1",async ()=>{
    
    test("test1",async({page})=>{
        await page.goto("https://ui.vision/demo/webtest/frames/")
        await page.waitForTimeout(2000)
        await page.close()
})

test("test2",async({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.waitForTimeout(2000)
    await page.close()
})

})
