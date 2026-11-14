import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

test('Playwright Special locators ', async ({ page }) => {
 
  await page.goto("https://rahulshettyacademy.com/angularpractice/");   //getByLabel,getByPlaceholder,getByRole,selectOption,etByText,check,filter
  await page.getByLabel("Check me out if you Love IceCreams!").click(); 
  await page.getByLabel("Student").check();                            
  await page.getByLabel("Gender").selectOption("Female");                
  await page.getByPlaceholder("Password").fill("Kavinda_Work@01");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

  //5Seconds default timeout for expect for expect assertions --{timeout:10000} Step Level //2nd method
  await expect (page.getByText("Success! The Form has been submitted successfully!.")).isVisible({ timeout:10000 });

  await page.getByRole("link",{name : "shop"}).click();
  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
 
});

test.only('Playwright Test Level Time out', async ({ page }) => {


  const slowExpect = expect.configure({timeout :9000}); //first method
  await page.goto("https://rahulshettyacademy.com/angularpractice/");  
  await page.getByLabel("Check me out if you Love IceCreams!").click(); 
  await page.getByLabel("Student").check();                            
  await page.getByLabel("Gender").selectOption("Female");                
  await page.getByPlaceholder("Password").fill("Kavinda_Work@01");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

  //5Seconds default timeout for expect for expect assertions --{timeout:10000} Step Level 
  await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).isVisible();

  await page.getByRole("link",{name : "shop"}).click();
  await slowExpect(page.locator(".my-4")).first().toHaveText("Shop");
  //2more
  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
 
});

//3 ways of timeout 