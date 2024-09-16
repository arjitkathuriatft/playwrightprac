const {test, expect, request} = require("@playwright/test");
const {APIUtils} = require('./APIUtils');

const loginPayload = {userEmail: "arjit.kathuria19@gmail.comm", userPassword: "Test@123"}
const createOrderPayload = {orders: [{country: "India", productOrderedId: "6581ca399fd99c85e8ee7f45"}]}
let token;

test.beforeAll( async() => 
{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload)
    const token = await apiUtils.getToken();
    console.log(`====` + token)
    const orderID = await apiUtils.createOrder(createOrderPayload)
    // console.log(JSON.stringify(orderID) + "==========")
    


})



    test("Verify login bypass and add order with api",async({page})=>
        
        {
            // -----No need to pass credential, get the token and pass in local storage----------
                await page.addInitScript(value => {
    
                window.localStorage.setItem('token', value)
    
                },token);
    
                // value become token 2nd parameter
                await page.goto("https://rahulshettyacademy.com/client");


    
      



    
        })