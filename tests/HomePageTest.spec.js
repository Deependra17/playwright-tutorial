const { test, expect } = require("@playwright/test");

test("verify title on home page", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log("page title is:", pageTitle);

  await expect(page).toHaveTitle("STORE");

  const pageURL = page.url();
  console.log("This is the current page URL: ", pageURL);

  await expect(page).toHaveURL("https://demoblaze.com/index.html");

  await page.close();
});
//Note : Make sure you use 'await' for asynchronous calls
