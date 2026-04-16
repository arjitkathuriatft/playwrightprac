
const {test,expect}=require('@playwright/test')
const path = require('path')


   
    test("login",async ({page})=>{

            await page.goto("https://demoblaze.com/index.html")
            await page.locator('#login2').click()
            await page.locator('#loginusername').fill('Sachin@9634')
            await page.locator('#loginpassword').fill('9634473790')
            await page.locator('//button[@onclick="logIn()"]').click()
            await page.context().storageState({path:'user.json'})
            await page.waitForTimeout(3000)
    })

    test("withOutLogin",async({browser})=>{
           const context=await browser.newContext({storageState:'user.json'})
           const page= await context.newPage();
           await page.goto("https://demoblaze.com/index.html")
           const text=await page.locator('#logout2').textContent()
           console.log(">>>>>>>>>>>>>>>>>>>",text)
           await page.locator("//a[text()='Laptops']").click()
           await page.waitForTimeout(3000)

    })
