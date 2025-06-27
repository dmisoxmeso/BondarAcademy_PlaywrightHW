import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
  await page.locator
})

test('test1 - Update pet type', async ({page}) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')
});

test('test2 - Cancel pet type update', async ({page}) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')
});

test('test3 - Pet type name is req validation', async ({page}) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')
});