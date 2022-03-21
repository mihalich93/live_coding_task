import { test, expect } from '@playwright/test';
import { UcraftLoginPage } from '../pages/UcraftLoginPage';
import { UcraftSignUpPage } from '../pages/UcraftSignUpPage';

test('smoke test', async ({ page }) => {
  const ucraftLoginPage = new UcraftLoginPage(page)
  await ucraftLoginPage.goto()
  await ucraftLoginPage.expectEmailInputVisible()
  await ucraftLoginPage.expectPasswordInputVisible()
  await ucraftLoginPage.expectSignInButtonVisible()
});

test('attempt to login with empty credentials test', async ({ page }) => {
  const ucraftLoginPage = new UcraftLoginPage(page)
  await ucraftLoginPage.goto()
  await ucraftLoginPage.clickSignInButton()
  await ucraftLoginPage.expectEmailInputVisible()
  await ucraftLoginPage.expectPasswordIsRequiredMessageVisible()
});

test('perform sign up test', async ({ page }) => {
  const ucraftSignUpPage = new UcraftSignUpPage(page)
  await ucraftSignUpPage.goto()
  await ucraftSignUpPage.performSignUp("Tester", "test@test1.com", "12345678Test!")
  await ucraftSignUpPage.expectThankYouMessageVisible()
});