const {test,expect}=require('@playwright/test')

let page;
test.beforeEach(async({browser})=>{
      page = await browser.newPage();
      await page.goto("https://demoblaze.com/index.html")
      await page.locator("#login2").click()
      await page .locator("#loginusername").fill("Sachin@9634")
      await page.locator("#loginpassword").fill("9634473790")
      await page.locator('//button[@onclick="logIn()"]').click()
})

test.afterEach(async()=>{
    await page.locator("#logout2").click()
})

test("verifyHomePage",async ()=>{

    // verify HomePage
    const produncts=await page.locator("#tbodyid>div>div>div>h4")
    await page.waitForTimeout(3000)
    await expect(await produncts.count()).toBe(9)

})

test("addToCart",async ()=>{
        // add to cart
        await page.locator('//a[text()="Samsung galaxy s6"]').click()
        await page.locator('//a[@onclick="addToCart(1)"]').click()

        await page.on("dialog",async (dialog)=>{
            await expect(dialog.message()).toContain("Product added.")
            await dialog.accept()
        })

})
