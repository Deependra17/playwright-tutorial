import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  const email = "dbohara@hamropatro.com";
  const password = "@November123";
  await page.goto("http://app-dev.hamrostack.com/");
  await page
    .locator(".order-2 > div > div:nth-child(2) > .outline-none")
    .click();
  await page.getByRole("button", { name: "लग इन गर्नुहोस्" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Sign in With Google" }).click();
  const page1 = await page1Promise;
  await page1.goto(
    "https://accounts.google.com/v3/signin/identifier?opparams=%253Fcontext_uri%253Dhttp%25253A%25252F%25252Fapp-dev.hamrostack.com&dsh=S-66101847%3A1744262098256697&client_id=27021292206-1iedinbvgo79q4elvue11dn15jaah7ja.apps.googleusercontent.com&ddm=1&o2v=1&redirect_uri=https%3A%2F%2Fhamropatro-android-test.firebaseapp.com%2F__%2Fauth%2Fhandler&response_type=code&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+profile&service=lso&state=AMbdmDktkvQnnwptcxpKaPs-2O7k-cNjsxIvniRsR2kzpdQnN_x2qln5mefmEpjz6NzLKxzf_NIl8qsZ8YaG51HAmXKx1uqjB_mDNzarsgyMoIYq70-c4KtAVJ90Y9Ad-6okVJQWDWQpiKWeKFtbX8ldspTPqAU1EfUow-rQrgpCrMgzd3BYPBgMJhhhwF9cTHBsOhqoB5pRyIVZvriAifQzK5Y4tOwEkgmIpQVqf927BJLJypIu_dYqSvkCPqmkwusnFw475hTOK3HC6D9JYe2aOIEyQnVQlPVlVtSbhMOHEQemcBSxXvhOtULiYU4C4c32g7DjSHGU4arL6U6sziYn&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPjeOx3AQyBqE7AIRqvFQgAAaizPqo47ZCSQRdUZA5tOOxSjyNi_60kVD0Usdz63xbuBZEDYoZYuEkXLWIAMN3pabepTwDi6wfhXLqZ5Dn5n8HNNVGkqV60xyLCHeddurFiPr3A8JeUWDxGyjKQB4t4whObmWhXNJCilz28ldj1Affyk7MBDk40DcCdSw9KC8tvoChmqevPILrhhPCPdnheSbCYOhaflR25k6240dGwjSzCiwcepb7jYBKOHKCOkfLEZcpBDzTBbDzErAQ1BSsvPZrRvnw8oYuILqcegC8Aedvd_8ytuOGLQ-SAfIiB-40LhrhdxQ7HJNI3401mIZGpL0bbviuc7EgRSbhAM8Uw8sHY1UY4zi1lbgreCQg733RZgRWwTZ-V2xg9_pIzyJ3kwB1rtmTiZSqZ4Gf-abHPIwD3z3SiIc6S0tKthhgMw2mdotMu5RDPdfRHWd1-5XNxMZmfv1Esx_owCDlH2XgmSVYYxdr0VPmynPhfAR6k7EBykXj6%26flowName%3DGeneralOAuthFlow%26as%3DS-66101847%253A1744262098256697%26client_id%3D27021292206-1iedinbvgo79q4elvue11dn15jaah7ja.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fhamropatro-android-test.firebaseapp.com&rart=ANgoxcc8BFGxkoaz6Facv7sdOUXWMHEhN-7vcdICoYNq_qIoATkS5Le7B04RPMtQdnuIHcte4NriMhW4YL55LsJw4soSTagmF3usVYBoZU3AZqgfLfhgIjg"
  );
  await page1.getByRole("textbox", { name: "Email or phone" }).click();
  await page1.getByRole("textbox", { name: "Email or phone" }).fill(email);
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.getByRole("textbox", { name: "Enter your password" }).click();
  await page1
    .getByRole("textbox", { name: "Enter your password" })
    .fill(password);
  await page1.getByRole("button", { name: "Next" }).click();
  //   await page.waitForEvent("http://app-dev.hamrostack.com/");
  await page.goto("http://app-dev.hamrostack.com/");
  await page
    .getByLabel("1 /")
    .getByRole("button", { name: "नोट्स राख्नुहोस्" })
    .getByRole("button")
    .click();
  await page.getByRole("textbox", { name: "शीर्षक" }).click();
  await page
    .getByRole("textbox", { name: "शीर्षक" })
    .fill("Note Added using playwright");
  await page.getByText("विवरण ०/१२००").click();
  await page
    .getByRole("textbox", { name: "विवरण" })
    .fill("This is a automated Note");
  await page.getByRole("button", { name: "Save" }).click();
  await page
    .getByLabel("1 /")
    .getByRole("button", { name: "Note Added using playwright" })
    .click();
  await page
    .getByRole("dialog")
    .getByText("Note Added using playwright")
    .click();
  await page.getByRole("button", { name: "Close sheet" }).click();
  await page.getByRole("button", { name: "profile_picture" }).nth(2).click();
  await page.getByRole("button", { name: "लग आउट गर्नुहोस्" }).click();
  await page.close();
});
