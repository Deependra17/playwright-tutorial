import { test, expect } from "@playwright/test";

/* In Built Locators

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test("BuitInLocaotrs", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //getByAltText
  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  //getByPlaceholder
  await page.getByPlaceholder("UserName").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  //getByRole
  await page.getByRole("button", { type: "submit" }).click();

  //getByText
  const userName = await page
    .locator('//p[@class="oxd-userdropdown-name"]')
    .textContent();
  await expect(await page.getByText(userName)).toBeVisible();
  console.log(userName);

  //getByLable ---> 
   
});
