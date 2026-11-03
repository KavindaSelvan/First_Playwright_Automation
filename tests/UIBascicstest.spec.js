
const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator("#username");
    const signInBtn = page.locator("#signInBtn");
    const cardTitles= page.locator(".card-title")

    console.log(await page.title());

    // First attempt - Wrong username, correct password
    await userName.fill("rahulshetty");
    await page.locator("#password").fill("Learning@830$3mK2");
    await signInBtn.click();

    // Check error message
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    // Second attempt - Correct username, same password
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signInBtn.click();
    //console.log(await page.locator(".card-body").nth(0).textContent());
    //console.log(await page.locator(".card-body").nth(1).textContent());

    //console.log(await cardTitles.nth(0).textContent());
    //
    
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(cardTitles);


});

test('First Playwright test', async ({ page }) => {

    await page.goto("https://www.google.com/");

    console.log(await page.title());

});
