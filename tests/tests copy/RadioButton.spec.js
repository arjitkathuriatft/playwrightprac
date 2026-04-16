const {test,expect}=require('@playwright/test')

test("rediobutton",async({page})=>{
    //checked all checkboxes 
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page.locator("//div[@class='form-check form-check-inline']//input[@type='checkbox']")).toHaveCount(7)
    const days= await page.$$("//div[@class='form-check form-check-inline']//input[@type='checkbox']")
    for(let i=0;i<days.length;i++){
        await days[i].check()
    }
    await page.waitForTimeout(5000)

})