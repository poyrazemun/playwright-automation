import { test, expect } from "@playwright/test";

test("LocatorMultipleElements", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  const links = await page.$$("a"); //match the all links yani findElements methodu gibi

  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }
});
