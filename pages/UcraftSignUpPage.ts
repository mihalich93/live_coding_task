import { expect, Locator, Page } from '@playwright/test'

export class UcraftSignUpPage {

    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signUpButton: Locator;
    readonly thankYouMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.locator("//*[@id='firstName']")
        this.emailInput = page.locator("//*[@id='email']")
        this.passwordInput = page.locator("//*[@id='password']")
        this.signUpButton = page.locator("//*[@type='submit']")
        this.thankYouMessage = page.locator("//*[text()='Thank You!']")
    }

    async goto() {
        await this.page.goto(`${process.env.BASE_URL}/sign-up`)
    }

    async clickSignUpButton() {
        await this.signUpButton.click()
    }

    async performSignUp(fullName: string, email:string, password: string) {
        await this.fullNameInput.type(fullName)
        await this.emailInput.type(email)
        await this.passwordInput.type(password)
        await this.signUpButton.click()
    }

    async expectThankYouMessageVisible() {
        await expect(this.thankYouMessage).toBeVisible()
    }
}