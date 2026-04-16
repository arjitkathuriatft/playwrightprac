const {test, expect}=require('@playwright/test')

test("hidden",async({page})=>{
       
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await page.locator("//a[@href='/web/index.php/pim/viewPimModule']").click()
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()
    const options=await page.$$("//div[@role='listbox']//div")
    for(let i=0;i<options.length;i++){
        let value = await options[i].textContent()
        if(value.includes("Chief Financial Officer")){
            await options[i].click()
            break;
        }
    }
    await page.waitForTimeout(3000)

})