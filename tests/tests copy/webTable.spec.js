const {test,expect}=require('@playwright/test')

test("webTable",async({page})=>{
       await page.goto("https://testautomationpractice.blogspot.com/")
       const col=await page.$$("#productTable>thead>tr>th")


       for(let i=0;i<col.length;i++){
           let coltext=await col[i].textContent()
           console.log("col is :- ", await coltext)
       }

       const row= await page.$$("#productTable>tbody>tr")
       const rowfilter= await page.locator("#productTable>tbody>tr")
       console.log("Number of row :- ", await row.length)
       for(let i=0;i<row.length;i++){
           let rowtext = await row[i].textContent()
       }
       await page.waitForTimeout(3000);

       const final=rowfilter.filter({
        has: page.locator("td"),
        hasText: "Product 2"
       })
    
     await final.locator("input").check()
     await page.waitForTimeout(3000)

})