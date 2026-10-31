const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  console.log(await page.title());

});

test('First Playwright test', async ({ page }) => {

  await page.goto("https://www.google.com/");

  console.log(await page.title());

});