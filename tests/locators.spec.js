// const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test("Locatores", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  //click on ogin wutton --property
  //   await page.locator('id="login2').click();

  // Or  
  await page.click("id=login2");

  //Provide email
  //   await page.locator('id=loginusername').fill("deepen1")
  await page.fill("#loginusername", "deepen123");

  //   provide password
  //   await page.locator('#loginpassword').fill("deep124");
  //   await page.fill("#loginpassword", passd124);
  // using css
  await page.fill("input[id='loginpassword']", "passd124");

  // click on login button
  await page.click("//button[normalize-space()='Log in']");

  // verify presence of logout button
  const logOutButton = await page.locator("//a[normalize-space()='Log out']");
  await expect(logOutButton).toBeVisible();
  
  await page.close();
});
