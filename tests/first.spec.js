const {test, expect} = require("@playwright/test");

// test('my first test', async({browser})=>{
// const context =  await browser.newContext();
// const page = await context.newPage();
// await page.goto('https://rahulshettyacademy.com/loginpagePractise/')


// }),

test('direct browser interaction', async({page})=> {

const username = page.locator('#username');
const password = page.locator('#password');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log( await page.title());
await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
await username.type("Hello")
await page.locator("#signInBtn").click();
console.log(await page.locator('div[class = "alert alert-danger col-md-12"]').textContent());
 await expect(page.locator("div[class = 'alert alert-danger col-md-12']")).toContainText("username")
//  ---it will delte old data hence more usable
await username.fill("rahulshettyacademy")
await password.fill("learning");
await page.locator('#signInBtn').click();
// ---it will wait for all network calls------
await page.waitForLoadState('networkidle')
// better way for wait it will wait for 1st one
await page.locator('h4.card-title>a').waitFor()
// this is the recommended approacch it will wait for last one
await page.locator('h4.card-title>a').last().waitFor()
// ---here 4 element issue
console.log( await page.locator('h4.card-title>a').first().textContent());
// or use nth element start from 0 to last index-1
console.log( await page.locator('h4.card-title>a').nth(1).textContent());
console.log( await page.locator('h4.card-title>a').allTextContents());
console.log( await page.locator('h4.card-title>a').allInnerTexts());


}),

test('verify dropdown and pause to debug', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // pass value here in select Option 
    await page.locator('select.form-control').selectOption('consult')
    // await page.pause();
    await page.locator('checkmark').nth(1).click();


})

test('verify checkbox and checkbox assertion', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    await page.locator('#terms').click();
//  check if it is checked or not--assert
await expect(page.locator('#terms')).toBeChecked();
// ---for check you need to click for uncheck there is method call uncheck
await page.locator('#terms').uncheck();
// --here action is inside that's why await is inside
// / await use where we are performing actions

expect(await page.locator('#terms').isChecked()).toBeFalsy();

// assert attribute value
const checkbox =   page.locator('#terms');
console.log(await checkbox.getAttribute('name'));
await checkbox.waitFor()
const newWindowLink =  page.locator('.blinkingText');
await expect(newWindowLink).toHaveAttribute('class','blinkingText')
await expect(checkbox).toHaveAttribute('name','terms');


}),

test('verify window handling', async({browser})=>{
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    const newWindowLink =  page.locator('.blinkingText');
     console.log(await page.title());

    //  you need to handle promise for window switch
    // weneed both step in parallel if I write 1 step and then next it won't work because window is opened
    // and it is waiting for thet event

    // new Page is return type Promis tales array of steps to perporm parallly and comes out once all step fullfilld


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        newWindowLink.click(),
    ])
 
    
    console.log(await newPage.title())

    const str = "abcd@xyz"

    const a = str.split('@')
    const b = a[1]
    console.log(a);
    console.log(b);

// npx playwright test --debug

// We can run in debug mode as well and we can find locator as  well using explore in debug mode

// ---------How to record and play
// npx playwright codegen https://www.abc.com, it will start execution from here and you can click anything iw will show
// you all the code you can compy and paste it

// if you want to see the traces screenshot of every step then you can go to https://trace.playwright.dev/
// browse the zip drom test result automation and paste it in the url https://trace.playwright.dev/

// ----Run in UI mode

// npx playright test --ui
// You will get the UI and run from there 

})



test.only('verify text equal and then click', async({page})=>{

    const email = "arjit.kathuria19@gmail.com";

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Test@123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    // console.log(titles);

    const card = await page.locator('.card')
    // page.pause();

    for(let i=0; i< await card.count(); i++){
        // locator chaining with nth type
        // b is tag name here
        console.log(await card.nth(i).locator('b').textContent())
        console.log(await card.nth(i).locator('.text-muted').textContent())
        // ---get the element by text
        console.log(await card.nth(i).locator('text= Add To Cart').textContent() + "=====")

        if(await card.nth(i).locator('b').textContent()=== 'ZARA COAT 3'){
            console.log('Found it')
            await card.nth(i).locator('text= Add To Cart').click();
        }
        else
        console.log('Not Found')

        const cart = await page.locator(".hamberger-btn + ul>li:nth-of-type(4)>button")
        await cart.click();
        // ---tag name having text you can use locator  like taht
        // .isVisible will fail because it will use auto wait by default hence this is an issue that's why we have 
        // use wait for
        await page.locator(".cart li").waitFor();
        expect(await page.locator("h3:has-text('ZARA COAT 3')").isVisible()).toBeTruthy();

        await page.locator(".subtotal.cf button").click();


        // await page.pause()

        // ---if you want to type sequentialy use
        // await page.locator("").pressSequentially('text')

        // -----To verify Text use

        // await expect(page.locator("")).toHaveText("---");
       
        // page.locator('').textConten.include('abc')

        


    }
    





})