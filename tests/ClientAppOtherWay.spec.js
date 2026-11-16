
import { test, expect } from '@playwright/test';

test.only('Client App login', async ({ page }) => {
 
  const productsName = "ZARA COAT 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.getByPlaceholder("enter@example.com").fill("kavindaselvan.work@gmail.com");
 
  await page.getByPlaceholder("enter your password").fill("Kavinda_Work@01");
  await page.getByRole('button',{name: login}).click();

  await page.waitForLoadState('networkidle');
  await page.locator(".card body b").allTextContents();

  await page.locator(".card-body").filter({hasText:" ZARA COAT 3"}).getByRole("button",{name:"Add to Cart"}).click();
  
  //await page.pause();

   await page.locator("div li").first().waitFor();
   await expect(page.getByText(" ZARA COAT 3")).toBeVisible();

   await page.getByRole("button",{name:"Checkout"}).click();

   await page.getByPlaceholder("Select Country").pressSequentially("ind");

   await page.getByRole("button",{name:"India"}).nth(1).click();

   await page.getByText("PLACE ORDER").click();

   await expect(page.getByText("Thankyou for your order.")).toBeVisible();
  

});


