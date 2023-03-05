import { Locator, Page } from '@playwright/test';
import { verifyObjectVisiblity, clickObject } from '../helper_methods/helperMethods'

export class DynamicIdPage {
    readonly page: Page;
    readonly address: string = "http://www.uitestingplayground.com/dynamicid";
    readonly websiteTitle: string = "Dynamic ID";
    //Main content
    readonly title: Locator;
    readonly paragraph: Locator;
    readonly scenario: Locator;
    readonly scenarioList: Locator;
    readonly scenarioOne: Locator;
    readonly scenarioTwo: Locator;
    readonly playground: Locator;
    readonly button: Locator;
    //End of Main Content

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator("//div[@class='container']/h3", { hasText: "Dynamic ID" });
        this.paragraph = page.locator("//div[@class='container']/p", { hasText: "Modern applications often generate dynamic IDs for elements. In this case ID is not a reliable attribute for using in element selector. By default many UI automation tools record IDs and this results in tests broken from the very beginning. An automation tool needs a way to instruct it to skip dynamic IDs when XPath is generated for an element." });
        this.scenario = page.locator("//div[@class='container']/h4", { hasText: "Scenario" });
        this.scenarioList = page.locator("//div[@class='container']//ul");
        this.scenarioOne = page.locator("//div[@class='container']//ul/li", { hasText: "Record button click." });
        this.scenarioTwo = page.locator("//div[@class='container']//ul/li", { hasText: "Then execute Your test to make sure that ID is not used for button identification." });
        this.playground = page.locator("//div[@class='container']/h4", { hasText: "Playground" });
        this.button = page.locator("//button[@type='button']", { hasText: "Button with Dynamic ID" });
    }

    async verifyDynamicIDPage() {
        await verifyObjectVisiblity(this.title);
        await verifyObjectVisiblity(this.paragraph);
        await verifyObjectVisiblity(this.scenario);
        await verifyObjectVisiblity(this.scenarioList);
        await verifyObjectVisiblity(this.scenarioOne);
        await verifyObjectVisiblity(this.scenarioTwo);
        await verifyObjectVisiblity(this.playground);
        await verifyObjectVisiblity(this.button);
    }

    async clickDynamicIDButton() {
        await clickObject(this.button);
    }


}