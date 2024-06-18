const {test, expect, request} = require("@playwright/test");

const loginPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}

test.beforeAll( async() => 
{

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginPayload
    })
    await expect(loginResponse.ok()).toBeTruthy();
    const loginJson = await loginResponse.json();
    const token =  loginJson.token
    console.log(token)
    console.log('Hi')



})


test("Verify api hit request",async({page})=>
    {
        console.log('bye')
    })