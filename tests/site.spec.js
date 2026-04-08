
import { test, expect } from '@playwright/test';

test('головна сторінка відкривається', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/index.html');
  await expect(page.locator('h1.head_text')).toHaveText('Game Of Thrones');
});

test('галерея містить зображення', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/gallery.html');
  await expect(page.locator('#lightgallery img').first()).toBeVisible();
});

test('кнопка "Детальніше" відкриває текст персонажа', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/characters.html');
  await page.locator('button.btn-more').first().click();
  await expect(page.locator('#ned')).not.toHaveClass(/hidden/);
});
