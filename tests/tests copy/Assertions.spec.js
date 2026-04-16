const {test,expect}=require("@playwright/test")

test("assertions",async({page})=>{
  await page.goto("https://demoblaze.com/index.html")
  await page.locator("#login2").click()
  await page.locator("#loginusername").fill("Sachin@9634")
  await page.locator("#loginpassword").fill("9634473790")
  await page.locator("//button[@onclick='logIn()']").click()
  const verifytext=await page.locator("#logout2")
  console.log(">>>>>>>>>>>>>>>>>>>>>",await verifytext.textContent())
  // toHaveText()
  await expect(verifytext).toHaveText("Log out")

  // url assertion
  await expect(page).toHaveURL("https://demoblaze.com/index.html")

  // title assertions
  await expect(page).toHaveTitle("STORE")

  //enable or disable assertions
  const logoutEnable=await page.locator("#logout2")
//  await expect.soft(logoutEnable).toBeDisabled()
  await expect(logoutEnable).toBeEnabled()

 //to be visible
 const visibleverifi=await page.locator("#nameofuser")
 await expect(visibleverifi).toBeVisible()


      
})