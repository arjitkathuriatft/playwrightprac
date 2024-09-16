const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);


}

//  it is not good approach to get all the pages one by one refernce better to take PO manger who has all the pages reference

getLoginPage()
{
    return this.loginPage;
}


getDashboardPage()
{
    return this.dashboardPage;
}

}
module.exports = {POManager};