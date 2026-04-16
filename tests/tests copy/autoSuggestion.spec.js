const {test,expect}=require('@playwright/test')

test("autoSuggestion",async({page})=>{
   await page.goto("https://www.redbus.in/")
   await page.locator("#src").fill("delhi")
   await page.waitForSelector(".sc-dnqmqq.eFEVtU")
   const allValue=await page.$$(".sc-dnqmqq.eFEVtU>li")
   for(let i=0;i<allValue.length;i++){
        let value=await allValue[i].textContent()
        if(value.includes("Akshardham Metro Station")){
               await allValue[i].click()
        }
   }
   await page.waitForTimeout(3000)

})