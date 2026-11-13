import { test, expect } from '@playwright/test';

test.only('Playwright Special locators ', async ({ page }) => {
 
  await page.goto("https://rahulshettyacademy.com/angularpractice/");   //getByLabel
  await page.getByLabel("Check me out if you Love IceCreams!").click();  //selectOption
  await page.getByLabel("Student").check();                             //check
  await page.getByLabel("Gender").selectOption("Female");                
  await page.getByPlaceholder("Password").fill("Kavinda_Work@01");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
  await page.getByRole("link",{name : "shop"}).click();
  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
 
});