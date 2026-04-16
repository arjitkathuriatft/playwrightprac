const {test,expect}=require("@playwright/test")

test.skip("frames",async ({page})=>{
      await page.goto("https://ui.vision/demo/webtest/frames/")
      const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
      await frame1.locator("//input[@name='mytext1']").fill("sachin yadav")
      await page.waitForTimeout(3000)
      const frame2=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"})
      await frame2.locator("//input[@name='mytext2']").fill('sachin yadav 2')
      await page.waitForTimeout(3000)
})

test("nested",async({page})=>{

       await page.goto("https://ui.vision/demo/webtest/frames/")
       const NestedFrame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
       const childframes=await NestedFrame.childFrames()
       console.log(">>>>>>>>>>>>>>>>>>>>",childframes.length)
       const childframe= childframes[0]
       await childframe.locator("#i8").click()
       await page.waitForTimeout(5000)

})