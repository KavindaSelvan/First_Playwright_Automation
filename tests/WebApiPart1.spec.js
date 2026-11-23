import { test, expect,request} from '@playwright/test';
const loginPayLoad = {userEmail: "kavindaselvan.work@gmail.com", userPassword: "Kavinda_Work@01"};
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
let token;
let orderId;
test.beforeAll(async () => {

  //Login API
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayLoad
    }
  );

  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;
  console.log(token);
 
  //Order API
 const orderResponse = await apiContext.post(
  "https://rahulshettyacademy.com/api/ecom/order/create-order",
  {
    data: orderPayLoad,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  }
);

 expect(orderResponse.ok()).toBeTruthy();
 const orderResponseJson = await orderResponse.json();
 console.log(orderResponseJson);
 orderId = orderResponseJson.orders[0];
});

  

test.beforeEach ( ()=>
{

});



test.only('Client App login', async ({ page }) => {

  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  const productsName = "ZARA COAT 3";

  await page.goto("https://rahulshettyacademy.com/client/");

  const products = page.locator(".card-body");

  await expect(products.first()).toBeVisible();

  const count = await products.count();

  let productFound = false;

  for (let i = 0; i < count; i++) {

    if (
      (await products.nth(i).locator("b").textContent())?.trim() === productsName
    ) {
      // Add ZARA COAT 3 to cart
      await products.nth(i).getByText("Add to Cart").click();

      productFound = true;
      break;
    }
  }

  expect(productFound).toBeTruthy();

});