import { expect, Locator, Page } from '@playwright/test'

export class UcraftLoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly emailIsRequiredMessage: Locator;
    readonly passwordIsRequiredMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator("//*[@id='email']")
        this.passwordInput = page.locator("//*[@id='password']")
        this.signInButton = page.locator("//*[@type='submit']")
        this.emailIsRequiredMessage = page.locator("//*[@id='email']/../../..//div[@role='alert']")
        this.passwordIsRequiredMessage = page.locator("//*[@id='password']/../../../..//div[@role='alert']")
    }

    async goto() {
        await this.page.goto('https://accounts.ucraft.ai/sign-in')
    }

    async clickSignInButton() {
        await this.signInButton.click()
    }

    async expectEmailInputVisible() {
        await expect(this.emailInput).toBeVisible()
    }

    async expectPasswordInputVisible() {
        await expect(this.passwordInput).toBeVisible()
    }

    async expectSignInButtonVisible() {
        await expect(this.signInButton).toBeVisible()
    }

    async expectEmailIsRequiredMessageVisible() {
        await expect(this.emailIsRequiredMessage).toBeVisible()
    }

    async expectPasswordIsRequiredMessageVisible() {
        await expect(this.passwordIsRequiredMessage).toBeVisible()
    }
}