const{test,expect}=require('@playwright/test')

test("test1",async({page})=>{

       await page.goto('https://demoblaze.com/index.html')
       await page.locator('#login2').click()
       await page.locator('#loginusername').fill('Sachin@9634')
       await page.locator('#loginpassword').fill('9634473790')
       await page.locator('//button[@onclick="logIn()"]').click()
       const ProductList=await page.$$('//h4[@class="card-title"]//a')
       console.log(">>>>>>>>>>>>>>>>>>>>",ProductList.length)
       for(let i=0;i<ProductList.length;i++){
            const text=await ProductList[i].textContent()
            console.log(">>>>>>>>>>>>",text)
       }
})