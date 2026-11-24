// // class APIUtils
// // {
// //     constructor (apiContext)
// //     {
// //         this.apiContext = apiContext;
// //     }

// //     async getToken()
// //     {
// //         const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
// //             {
// //               data: loginPayLoad
// //             }
// //           );
        
// //           expect(loginResponse.ok()).toBeTruthy();
// //           const loginResponseJson = await loginResponse.json();
// //           token = loginResponseJson.token;
// //           console.log(token);
// //           return token;
// //     }

// //     async createOrder()
// //     {
    
// //          const orderResponse = await apiContext.post(
// //           "https://rahulshettyacademy.com/api/ecom/order/create-order",
// //           {
// //             data: orderPayLoad,
// //             headers: {
// //               'Authorization': token,
// //               'Content-Type': 'application/json'
// //             }
// //           }
// //         );
        
// //          expect(orderResponse.ok()).toBeTruthy();
// //          const orderResponseJson = await orderResponse.json();
// //          console.log(orderResponseJson);
// //          orderId = orderResponseJson.orders[0];
        
        
          
// //     }
// }