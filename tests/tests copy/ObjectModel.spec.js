const{test,expect}=require('@playwright/test')
const{LoginPage}=require('../POM/login.js')
const{addToCard}=require('../POM/addTocCart.js')
const{verifycard}=require('../POM/verifyCard.js')


test('LoginAndAddToCart',async ({page})=>{
      //login
      const login = new LoginPage(page)
      await login.loginPageGoto()
      await login.login('Sachin@9634','9634473790')
      await page.waitForTimeout(3000)

      // addTocart
      const addproduct=new addToCard(page)
      await addproduct.addcard('Iphone 6 32gb')
      await page.waitForTimeout(3000)
      //verifycart

      const verifycart=new verifycard(page)
      await page.waitForTimeout(3000)
      await verifycart.verifycart("Iphone 6 32gb")

      // const status= await verifycart.verifycart("Iphone 6 32gb")
      // console.log(status)
      // expect(await status).toBe(true)
      await page.waitForTimeout(3000)

})
