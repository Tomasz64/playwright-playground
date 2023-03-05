import { Locator, Page } from '@playwright/test';
import { verifyObjectVisiblity, clickObject, closeAlertPrompt } from '../helper_methods/helperMethods'

export class ClassAttribute {
    readonly page: Page;
    readonly address: string = "http://www.uitestingplayground.com/classattr";
    readonly websiteTitle: string = "Class Attribute";

    readonly mainContent: Locator;
    readonly buttonBlue: Locator;
    readonly buttonGreen: Locator;
    readonly buttonYellow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainContent = page.locator("//section//div[@class='container']");
        this.buttonBlue = page.locator("//div[@class='container']/button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]");
        this.buttonGreen = page.locator("//div[@class='container']/button[contains(concat(' ', normalize-space(@class), ' '), ' btn-success ')]");
        this.buttonYellow = page.locator("//div[@class='container']/button[contains(concat(' ', normalize-space(@class), ' '), ' btn-warning ')]");

    }

    async verifyContentVisibility() {
        await verifyObjectVisiblity(this.mainContent);
    }

    async verifyButtonsVisibility() {
        await verifyObjectVisiblity(this.buttonBlue);
        await verifyObjectVisiblity(this.buttonGreen);
        await verifyObjectVisiblity(this.buttonYellow);
    }

    async verifyButtonWithAlert() {
        await verifyObjectVisiblity(this.buttonBlue);
        await clickObject(this.buttonBlue);
        await closeAlertPrompt(this.page, "Primary button pressed");
    }
}
