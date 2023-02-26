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

    async verifyObjectVisibility(element: string){
        await expect(this.page.locator(`${element}`)).toBeVisible()
    }

    async verifyTableElements(selector: string, text: string[]){
        const elements = await this.page.locator(selector);
        const element_count = await elements.count();
        for (let i = 0; i < element_count; i++){
            const element = elements.nth(i);
            await expect(element).toBeVisible();
            await expect(element).toContainText(text[i])
        }
    }
}