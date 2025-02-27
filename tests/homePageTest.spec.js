import { test, expect } from "@playwright/test";

test("Home Page URL", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await expect(page).toHaveURL("https://www.demoblaze.com/");
});

test("Home Page Title", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await expect(page).toHaveTitle("STORE");
});
