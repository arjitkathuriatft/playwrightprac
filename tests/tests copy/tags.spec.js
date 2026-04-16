const {test,expect}=require('@playwright/test')

test.only("test1@smoke",async({page})=>{
      let a="sachin yadav"
      expect(a).toContainText("sachin")
       console.log("this is test1")
})

test("test2@smoke",async({page})=>{
    console.log("this is test2")
})

test("test3@reg",async({page})=>{
    console.log("this is test3")
})

test("test4@reg",async({page})=>{
    console.log("this is test4")
})