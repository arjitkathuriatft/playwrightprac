const {test,expect}=require('@playwright/test')

test("alert",async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")
      await page.on("dialog",async (dialog)=>{
            let message=await dialog.message()
            console.log(message)
            expect(message).toContain("Please enter your name:")
            await dialog.accept("sachin yadav")
      })
      
      await page.locator('//button[@onclick="myFunctionPrompt()"]').click()
      expect(await page.locator('#demo')).toHaveText("Hello sachin yadav! How are you today?")
      await page.waitForTimeout(3000)
    //   await page.locator('#name').fill("sachin Yadav")
    //   await page.waitForTimeout(5000)
})