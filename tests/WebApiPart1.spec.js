import { test, expect,request} from '@playwright/test';
const loginPayLoad = {userEmail: "kavindaselvan.work@gmail.com", userPassword: "Kavinda_Work@01"};
let token;
test.beforeAll(async () => {

  const apiContext = await request.newContext();

  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayLoad
    }
  );

  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;
  console.log(token);

  
});

test.beforeEach ( ()=>
{

});



test.only('Client App login', async ({ page }) => {
 

  await page.addInitScript(value => {
          window.localStorage.setItem('token',value);
  }, token );
  
  const email = "";
  const productsName = "ZARA COAT 3";
  await page.goto("https://rahulshettyacademy.com/client/");
  const products = page.locator(".card-body");
  const count = await  products.count();
  for(let i=0; i< count ;++i)
  {
      if(await products.nth(i).locator("b").textContent() === productsName)
      {
        //add the Zara Coat3 to cart
        await products.nth(i).locator("text= Add to Cart").click();
        break;

      }
  }
 
  
});
