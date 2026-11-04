
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 
  await page.goto("https://rahulshettyacademy.com/client/");

  const cardTitles = page.locator(".card-body b");
  await page.waitForTimeout(3000);

  await page.locator("#userEmail").fill("kavindaselvan.work@gmail.com");
  //await page.waitForTimeout(3000);
  await page.locator("#userPassword").fill("Kavinda_Work@01");
  //await page.waitForTimeout(3000);
  await page.locator("#login").click();
  //await page.waitForTimeout(3000);

  //await page.waitForLoadState('networkidle');//it used for idelize all networks in our webpage but it's flaky not encourage to use for

  await cardTitles.first().waitFor();
  await page.waitForTimeout(3000);
  console.log(await cardTitles.nth(0).textContent());
  console.log(await cardTitles.allTextContents());

});


