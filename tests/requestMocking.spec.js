const {test, expect, request} = require("@playwright/test");

const loginPayload = {userEmail: "arjit.kathuria19@gmail.com", userPassword: "Test@123"}
const createOrderPayload = {orders: [{country: "India", productOrderedId: "6581ca399fd99c85e8ee7f45"}]}
let token;
const fakepayload = {data:[],message:"No Orders"}

test.beforeAll( async() => 
{

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginPayload
    })
    await expect(loginResponse.ok()).toBeTruthy();
    const loginJson = await loginResponse.json();
     token =  loginJson.token
    console.log(token)

    const addOrderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
        data:createOrderPayload,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
   
    await expect(addOrderResponse.ok()).toBeTruthy();
    const orderJson = await addOrderResponse.json();
    const orderNumber = orderJson.orders[0]
    console.log(orderNumber + '=========')


})

test('verify order and mock it', async({page})=> {
    await page.addInitScript(value => {
    
        window.localStorage.setItem('token', value)

        },token);
    await page.goto("https://rahulshettyacademy.com/client");
    // --after clicking on orders first check whic api it is calling-------
    // it is calling  https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6673ca6eae2afd4c0b056b63
    // route this with fake response
    // route take 2 argument 1st what you want to route 2nd how you want to route

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6673ca6eae2afd4c0b056b63",
    async route=>
        {
            let body = JSON.stringify(fakepayload);
            // covert java script object into json object
            const response = await page.request.fetch(route.request())
            route.fulfill(
                [
                    response,
                    body
                    // ---whatever you need to modify pass that only rest all the things will be by default of original
                ]
            )
            // --api response -fake response we will pass-> then browser

        }

    )
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.pause();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    // ---there are soo many order just mock it bus pasing the request payload as empty and see the magic



})

test('@QW Security test request intercept', async ({ page }) => {
 
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("arjit.kathuria19@gmail.com");
    await page.locator("#userPassword").type("Test@123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
 
    await page.locator("button[routerlink*='myorders']").click();
    // ----interceptpt the request with wrong order id and see behaviour----------
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
 
 
})

test.only('Route abort', async ({ page }) => {
    
    page.on('request', request => console.log(request.url()))
    page.on('response', response=> console.log(response.url(),response.status()))
    // // ---listner on request action is print the url
 
    const email = "arjit.kathuria19@gmail.com";

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Test@123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    const card = await page.locator('.card')
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


    }

 
})
 

