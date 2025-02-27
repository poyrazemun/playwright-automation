/*  
- page.getByAltText() - locate usually the image by its text alternative
- page.getByPlaceHolder() - locate an input by placeholder
- page.getByRole() - locate by explicit and implicit accessibility attributes
- page.getByText() - locate by text content

- page.getByLabel() - locate a form control by associated label's text
- page.getByTitle() - locate an element by its title attribute
- page.getByTestId() - locate an element based on its data-testid attribute
*/

import { test, expect } from "@playwright/test";

test("Built-in Locators - AltText", async ({ page }) => {
  const mainUrl =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  await page.goto(mainUrl);

  const logo = page.getByAltText("company-branding");

  await expect(logo).toBeVisible();
});

test.only("Built-in Locators - PlaceHolder", async ({ page }) => {
  const mainUrl =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  await page.goto(mainUrl);

  const userName = "Admin";
  const password = "admin123";

  const usernameBox = page.getByPlaceholder("Username");
  const passwordBox = page.getByPlaceholder("Password");

  await usernameBox.fill(userName);
  await passwordBox.fill(password);

  //const loginButton = page.locator("//div//button");
  const loginButton = page.getByRole("button", { type: "submit" });

  await loginButton.click();

  await expect(page.getByText(" Upgrade")).toBeVisible();
});
