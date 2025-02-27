import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  const loginButton = page.locator("//a[@id='login2']");

  await loginButton.click(); //page.click(loginButton);

  const usernameInput = page.locator("//input[@id='loginusername']");
  const passwordInput = page.locator("//input[@id='loginpassword']");

  await usernameInput.fill("pavanol"); //await page.locator("//input[@id='loginusername']").fill("value");
  await passwordInput.fill("test@123"); //await page.fill("//input[@id='loginpassword']","value");

  const loginToAccountButton = page.locator("//button[@onclick='logIn()']");

  await loginToAccountButton.click();

  const welcomeMessage = page.locator("//a[@id='nameofuser']");

  await expect(welcomeMessage).toBeVisible();
});
