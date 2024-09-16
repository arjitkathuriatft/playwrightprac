const {test} = require('@playwright/test')
const {LoginPage} = require('../pageobjectmodel/LoginPage')
const {POManager} = require('../pageobjectmodel/POManager')
// --correctway json -> string->javascript object
const testdata = JSON.parse(JSON.stringify(require('../pageobjectmodel/tesData.json')))

test('verify login page object', async({page})=> {

    const url = "https://rahulshettyacademy.com/client";
    const loginPage = new LoginPage(page)
    const username = testdata.username;
    const password = testdata.password
    await loginPage.login(url, username, password)


}),

test('verify multiple pages using PO manager', async({page})=> {

    const url = "https://rahulshettyacademy.com/client";
    const poManger = new POManager(page);
    // ---you can get any page like this with simple 1 import
    const loginPage = poManger.getLoginPage();
    const username = 'arjit.kathuria19@gmail.com';
    const password = 'Test@123'
    await loginPage.login(url, username, password)


})