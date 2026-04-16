const {test,expect}=require('@playwright/test')

test("datepicker",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")
      await page.locator("#datepicker[type='text']").click()
      const date1 = "1"
      const month = "July"
      const year="2025"

     while(true){
        
        const currentyear= await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const currentmonth=await page.locator('//span[@class="ui-datepicker-month"]').textContent()

        if(year==currentyear && month==currentmonth){
          break;
         }
        await page.locator('//span[text()="Next"]').click()
    }

   await page.locator(`//a[@class="ui-state-default"][text()="${date1}"]`).click()
  // await page.locator('//a[@class="ui-state-default"][text()="3"]').click()

    await page.waitForTimeout(2000)
})