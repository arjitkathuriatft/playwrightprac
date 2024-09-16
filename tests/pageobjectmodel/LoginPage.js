class LoginPage{

    constructor(page){
        this.singnInButton =  page.locator("#login");
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.page = page;

    }

    async login(url,username, password){
        console.log(url)
        await this.page.goto(url)
        await this.userName.fill(username);
        await this.password.fill(password)  
        await this.singnInButton.click();
    }

    
}

module.exports = {LoginPage};