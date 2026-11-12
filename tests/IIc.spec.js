import { test, expect } from '@playwright/test';

test.only('Playwright Special locators ', async ({ page }) => {
 
  await page.goto("https://rahulshettyacademy.com/angularpractice/");   //getByLabel
  await page.getByLabel("Check me out if you Love IceCreams!").click();  //selectOption
  await page.getByLabel("Student").check();                             //check
  await page.getByLabel("Gender").selectOption("Female");
 
  await page.pause();
 
});