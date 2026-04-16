const {test,expect}=require('@playwright/test')
test ('right click',async({page})=>{

    //   await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    //   await page.locator("//span[text()='right click me']").click({button:'right'})
    //   await page.waitForTimeout(3000)

    // await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator("//button[@ondblclick='myFunction1()']").dblclick()
    // const check=await page.locator("#field2")
    // expect(check).toHaveValue("Hello World!")
    // await page.waitForTimeout(3000)

    // await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator("#draggable").dragTo(await page.locator("#droppable"))
    // await page.waitForTimeout(3000)

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#name").fill("sachin yadav is a billionaire")
    await page.keyboard.press("Control+a")
    await page.keyboard.press("Control+c")

    await page.keyboard.down("Tab")
  
    await page.keyboard.press("Control+v")
    await page.waitForTimeout(3000)


})