import { test, expect } from "@playwright/test";

//bu assertionlarin negatifi de olur. Yani mesela expect(page).not.toHaveURL("BLABLA");

test("AssertionsTest", async ({ page }) => {
  const siteURL = "https://demo.nopcommerce.com/register";

  await page.goto(siteURL);
  await expect(page).toHaveURL(siteURL);
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  const logo = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();

  const searchBox = page.locator("//input[@id='small-searchterms']");
  await expect(searchBox).toBeEnabled(); //there is also .toBeDisabled() method!

  const newsletterCheckbox = page.locator("//input[@id='Newsletter']");
  await expect(newsletterCheckbox).toBeChecked();

  //check if element has some attribute or not
  const registerButton = page.locator("//button[@id='register-button']");
  await expect(registerButton).toHaveAttribute("type", "submit");

  const headerOfThePage = page.locator("//div//h1");
  await expect(headerOfThePage).toHaveText("Register");
  await expect(headerOfThePage).toContainText("gister"); //partial check

  //check if some input has some value

  const firstName = "Omer Fatih";
  const firstNameInputBox = page.locator("//input[@id='FirstName']");
  await firstNameInputBox.fill(firstName);
  await expect(firstNameInputBox).toHaveValue(firstName);
});

test.only("Assertion Dropdown Menu option amount", async ({ page }) => {
  const siteURL = "https://demo.nopcommerce.com/digital-downloads";

  await page.goto(siteURL);

  const displayDropdownMenu = page.locator(
    "//select[@id='products-pagesize']//option"
  );
  await expect(displayDropdownMenu).toHaveCount(3);
});
