const {test,expect}=require('@playwright/test')

test("dropdown",async ({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/")
     await page.locator("#country").selectOption("Japan")
     await page.waitForTimeout(3000)

     // check number of options in dropdown 
     const options=await page.$$("#country>option")
     console.log(">>>>>>>>>>",options.length)
     await expect(await page.locator("#country>option")).toHaveCount(10)


     // check any specific value present in dropDown or not
     const multi=await page.$$("#country>option")
     for(let i=0;i<multi.length;i++){
        let print=await multi[i].textContent();
        console.log(print)
     }

     // select multiple options in dropdown
     await page.locator("#colors").selectOption(["Red","Blue","Green"])
     await page.waitForTimeout(3000)
})