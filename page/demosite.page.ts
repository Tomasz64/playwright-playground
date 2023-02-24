import { expect, Locator, Page } from '@playwright/test';

export class DemoQaSite {
    readonly page: Page;
    readonly address: string = "https://www.globalsqa.com/demo-site/";
    readonly table: Locator;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.address);
    }

    async verifyTitle(titleText: string ) {
        await expect(this.page).toHaveTitle(titleText);
    }




}