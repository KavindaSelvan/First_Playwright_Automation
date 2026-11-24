class APIUtils
{
    constructor(apiContext)
    {
        this.apiContext = apiContext;
    }

    async getToken()
    {
        const loginResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: loginPayLoad
            }
        );

        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        this.token = loginResponseJson.token;
        console.log(this.token);
        return this.token;
    }

    async createOrder()
    {
        const orderResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                }
            }
        );

        expect(orderResponse.ok()).toBeTruthy();
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        this.orderId = orderResponseJson.orders[0];
    }

    // New part: Return the created order ID
    getOrderId()
    {
        return this.orderId;
    }
}

// Export the class to use in other files
module.exports = { APIUtils };