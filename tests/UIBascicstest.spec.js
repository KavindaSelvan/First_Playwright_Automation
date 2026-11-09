
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

test('UI Controls', async ({ page }) => {
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    const userName = page.locator("#username");
    const signInBtn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");

    await userName.fill("rahulshettyacademy");
    
    await page.locator("#password").fill("Learning@830$3mK2");
    
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await dropdown.selectOption("consult");

    await page.locator("#terms").click();
    console.log(await page.locator("#terms").isChecked());
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    console.log(await page.locator("#terms").isChecked());
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("class","blinkingText");
    
    // await signInBtn.click();
    // await page.pause();// it use like a debugger
    
});



test('Child window handle', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Listen for new page
        documentLink.click()
    ]);

    // Get text from new page
      const text = await newPage.locator(".red").textContent();
      const arrayText = text.split("@");
      const domain = arrayText[1].split(" ")[0];
      // console.log(domain);
      await page.locator("#username").fill(domain);
      console.log(await page.locator("#username").inputValue()); 

});


