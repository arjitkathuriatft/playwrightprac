const {test, expect, request} = require("@playwright/test");

const loginPayload = {userEmail: "arjit.kathuria19@gmail.com", userPassword: "Test@123"}
const createOrderPayload = {orders: [{country: "India", productOrderedId: "6581ca399fd99c85e8ee7f45"}]}
let token;

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
    console.log(orderNumber)



})


// test("Verify api hit request",async({page})=>
//     {

       
//         // await page.locator("#userEmail").fill(email);
//         // await page.locator("#userPassword").type("Iamking@000");
//         // await page.locator("[value='Login']").click();
//         // await page.waitForLoadState('networkidle');

//         // -----No need to pass credential, get the token and pass in local storage----------
//             await page.addInitScript(value => {

//             window.localStorage.setItem('token', value)

//             },token);

//             // value become token 2nd parameter
//             await page.goto("https://rahulshettyacademy.com/client");

//         const titles = await page.locator(".card-body b").allTextContents();
//         console.log(titles);

//     })

    test("Verify login bypass and add order with api",async({page})=>
        {
    
           
  
            // -----No need to pass credential, get the token and pass in local storage----------
                await page.addInitScript(value => {
    
                window.localStorage.setItem('token', value)
    
                },token);
    
                // value become token 2nd parameter
                await page.goto("https://rahulshettyacademy.com/client");


// you can view the logs here https://trace.playwright.dev/
// select your tpraject trace file from test results
//   In config ee have   trace: 'retain-on-failure', if it's failure then it will create on failure else
// you can do  trace: 'on' to view in all iteration in playwright config
// on call tab, console tab

    
        })

