class APIUtils{

    constructor(apiContext, loginPayload){
        // we parametrised it so tha we can pass it from test
        this.apiContext =apiContext
        this.loginPayload = loginPayload
        
    }

    async getToken(){
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data:this.loginPayload
            })
            const loginJson = await loginResponse.json();
             const token =  loginJson.token
             console.log('token is' + token)
            return token

    }

    async createOrder(createOrderPayload){

    
            const addOrderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
                data:createOrderPayload,
                headers: {
                    'Authorization': await this.getToken(),
                    'Content-Type': 'application/json'
                }
            })
           
            const orderJson = await addOrderResponse.json();
            const orderNumber = orderJson.orders[0]
            console.log(orderNumber)
       
    }
}

module.exports = {APIUtils}