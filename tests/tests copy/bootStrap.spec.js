const {test,expect}=require('@playwright/test')

test("bootstrap",async({page})=>{
   await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")
   await page.locator(".multiselect-selected-text").click();
   const allOption=await page.locator("//ul[@class='multiselect-container dropdown-menu']").textContent();
   await expect(await page.locator("//ul[@class='multiselect-container dropdown-menu']//li")).toHaveCount(14)
   const allValues=await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label");
   for(let i=0;i<allValues.length;i++){
        let value=await allValues[i].textContent()
        console.log(value)
        if(value.includes("Python") || value.includes("Java")){
              allValues[i].check()
        }
   }
   await page.waitForTimeout(3000)
})