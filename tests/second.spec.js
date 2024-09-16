const {test, expect} = require("@playwright/test");

test(' second interaction', async({page})=> {

    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    // --- if you can click with label text then you can click here
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    // get element by placeholder
    await page.getByPlaceholder("Password").fill("aaaa");

    // you can use any role here alert, button, anything
    // if tag is button or class has bn then it is button
    await page.getByRole("button", {name:'Submit'}).click();
    
    await page.getByText('Check me out if you Love IceCreams!').isVisible();

    // ---link name is shop
    await page.getByRole("link", {name: 'Shop'}).click();

    // we have not passed the name of name because there will be 1 button only
    await page.locator('app-card-list.row app-card').filter({hasText:'iPhone'}).getByRole("button").click();

})

    test("test Calendar validations",async({page})=>
    {
    
        const monthNumber = "6";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber,date,year];
        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        await page.locator(".react-date-picker__inputGroup").click();
        await page.locator(".react-calendar__navigation__label").click();
        await page.locator(".react-calendar__navigation__label").click();
        await page.getByText(year).click();
        await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
        await page.locator("//abbr[text()='"+date+"']").click();
        const inputs = await page.locator(".react-date-picker__inputGroup input");
        for (let index = 0; index <inputs.length; index++)
        {
            const value =inputs[index].getAttribute("value");
            expect(value).toEqual(expectedList[index]);
        }
    

    })

    test("Verify hidden Element",async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await page.goto("https://www.google.com")
        await page.goBack();
        await expect(page.locator('#displayed-text')).toBeVisible();
        await page.locator('#hide-textbox').click();
        await expect(page.locator('#displayed-text')).toBeHidden();

    
    })

    test("Verify alerts and mouse hover",async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

        // await page.pause();
        // ---this is how to will handle all alerts --- it will handle all the alerts
        page.on('dialog' ,dialog => dialog.accept());
        await page.locator('#confirmbtn').click();
        await page.locator('#alertbtn').click();

        // =====mouse hover
        await page.locator('#mousehover').hover();

        // --------Frame switch--------
        const framePage = page.frameLocator('#courses-iframe')
        // -----: visible is because there are multiple locator and out of them it is visible
        // now it's a new page and u can handle here
        await framePage.locator("li a[href='lifetime-access']:visible").click();





    
    })



    