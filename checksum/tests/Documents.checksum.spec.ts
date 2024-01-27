/* Checksum.ai autogenerated test */
import { test as base, expect } from "@playwright/test";
import { init, IChecksumPage } from "@checksum-ai/runtime";

const { test, defineChecksumTest, login } = init(base);

test.describe("Documents", () => {
  test.beforeEach(async ({ page }: { page: IChecksumPage }) => {
    await login(page);
  });

  test(
    defineChecksumTest("Navigate to documents", "U8dBP"),
    async ({ page }) => {
      await page.goto("https://staging.myworkpay.com/", {
        waitUntil: "domcontentloaded",
      });
      await page
        .checksumSelector("vQc4e")
        .checksumAI("Click on 'Documents' link")
        .getByRole("link", { name: "Documents" })
        .click();
      await expect(page).toHaveURL(/\/documents(\?.*)?(\#.*)?$/);
      await expect(
        page.getByText("Documents settings", { exact: true })
      ).toBeVisible();
      await expect(
        page.getByText("Search employees", { exact: true })
      ).toBeVisible();
      await expect(page.getByText("PK", { exact: true })).toBeVisible();
      await expect(page.getByText("VW", { exact: true })).toBeVisible();
    }
  );
});