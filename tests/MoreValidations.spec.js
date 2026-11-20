import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';

test.only('Popup Validation', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com/m");
    // await page.goBack();
    // await page.goForward();
  
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    page.on('dialog',dialog => dialog.accept());    //page.on('dialog',dialog => dialog.accept()); 
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
  

});
