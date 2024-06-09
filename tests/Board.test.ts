import { test, expect } from "@playwright/test";

test("Board test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const keyBoardButtonH = await page.waitForSelector(
    '[data-testid="keyboardButton-H"]'
  );

  await keyBoardButtonH.click();

  const textGuessed = await page.waitForSelector(
    '[data-testid="text-guessed"]'
  );

  const textGuessedContent = await textGuessed.textContent();

  expect(textGuessedContent![0]).toBe("H");
});
