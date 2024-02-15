/* Checksum.ai autogenerated test */
import { test as base, expect } from "@playwright/test";
import { init, IChecksumPage } from "@checksum-ai/runtime";

const { test, defineChecksumTest, login } = init(base);

test.describe("Example test", () => {
  test.beforeEach(async ({ page }: { page: IChecksumPage }) => {
    await login(page);
  });

  test(
    defineChecksumTest("Navigate to home page", "GPzdp"),
    async ({ page }) => {
      await page.goto("/");
    }
  );
});
