import { test, expect } from "@playwright/test";

test("Soft Assertions", async ({ page }) => {
  const mainUrl = "https://www.demoblaze.com/";

  await page.goto(mainUrl);

  //Hard Assertions
  //await expect(page).toHaveTitle("STOREE");
  //await expect(page).toHaveURL(mainUrl);
  //await expect(page.locator("//a[@id='nava']//img")).toBeVisible();

  //Soft Assertions

  await expect.soft(page).toHaveTitle("STOREE");
  await expect.soft(page).toHaveURL(mainUrl);
  await expect.soft(page.locator("//a[@id='nava']//img")).toBeVisible();
});
