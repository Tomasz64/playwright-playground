import { Locator, Page } from '@playwright/test';
import { verifyObjectVisiblity, verifyItemsInContainer } from '../helper_methods/helperMethods'

export class MainPage {
    readonly page: Page;
    readonly address: string = "http://www.uitestingplayground.com/";
    readonly websiteTitle: string = "UI Test Automation Playground";
    readonly tableItemsHeadersArr = ["Dynamic ID", "Class Attribute", "Hidden Layers", "Load Delay",
        "AJAX Data", "Client Side Delay", "Click", "Text Input", "Scrollbars", "Dynamic Table",
        "Verify Text", "Progress Bar", "Visibility", "Sample App", "Mouse Over", "Non-Breaking Space",
        "Overlapped Element", "Shadow DOM"];
    readonly tableItemsTextsArr = ["Make sure you are not recording dynamic IDs of elements", "Check that class attribute based XPath is well formed", "Verify that your test does not interact with elements invisible because of z-order",
        "Ensure that a test is capable of waiting for a page to load", "Some elements may appear on a page after loading data with AJAX request", "Some elements may appear after client-side time consuming JavaScript calculations",
        "Event based click on an element may not always work", "Entering text into an edit field may not have effect", "Scrolling an element into view may be a tricky task",
        "Verify cell value in a dynamic table", "Finding an element by displayed text has nuances", "Follow the progress of a lengthy process and continue upon completion",
        "Check if element is visible on screen", "Demo application with dynamically generated element attributes", "Placing mouse over an element may change DOM and make the element unavailable",
        "Non-breaking space looks like a normal one on screen. It may lead to confusion when building XPath", "Make element visible to enter text", "Look inside Shadow DOM component"];
    //Navigation Bar
    readonly logo: Locator
    readonly homeButton: Locator;
    readonly resourcesButton: Locator;
    readonly navBar: Locator;
    //End of Navigation Bar
    //Main content
    readonly title: Locator;
    readonly blockquote: Locator;
    readonly alertBox: Locator;
    readonly paragraph: Locator;
    readonly rubickCubeImage: Locator;
    readonly rubickCubeFooter: Locator;
    //End of Main Content
    //Table
    readonly table: Locator;
    readonly tableItemsHeaders: Locator;
    readonly tableItemsTexts: Locator;
    //End of Table

    constructor(page: Page) {
        this.page = page;

        //navbar
        this.logo = page.locator("//nav/a[@class='navbar-brand']", { hasText: 'UITAP' });
        this.homeButton = page.locator("//nav/div[@id='navbarSupportedContent']//a[@href='/home']", { hasText: 'Home' });
        this.resourcesButton = page.locator("//nav/div[@id='navbarSupportedContent']//a[@href='/resources']", { hasText: 'Resources' });
        this.navBar = page.locator("//nav[@class='navbar navbar-expand-lg navbar-light bg-light']");
        //end of navbar

        //main page//
        this.title = page.locator("#title");
        this.blockquote = page.locator("#citation");
        this.alertBox = page.locator("//div[@role='alert']", { hasText: "The purpose of this website is to provide a platform for sharpening UI test automation skills. Use it to practice with your test automation tool. Use it to learn test automation techniques." });
        this.paragraph = page.locator("//div[@class='col-sm']/p", { hasText: "Different automation pitfalls appearing in modern web applications are described and emulated below." });
        this.rubickCubeImage = page.locator("//img[@class='img-fluid']");
        this.rubickCubeFooter = page.locator("//div[@class='col-sm']//small", { hasText: "Rubik's Cube is licensed under CC 4.0 BY-NC" });
        //end of main page//

        //table//
        this.table = page.locator("//div[@class='container'");
        this.tableItemsHeaders = page.locator("//div[@class='container']//h3/a");
        this.tableItemsTexts = page.locator("//section[@id='overview']//div[@class='container']//div[@class='col-sm']//p");
        //end of table//
    }

    async verifyNavbar() {
        await verifyObjectVisiblity(this.navBar);
        await verifyObjectVisiblity(this.logo);
        await verifyObjectVisiblity(this.homeButton);
        await verifyObjectVisiblity(this.resourcesButton);
    }

    async verifyMainPage() {
        await verifyObjectVisiblity(this.title);
        await verifyObjectVisiblity(this.blockquote);
        await verifyObjectVisiblity(this.alertBox);
        await verifyObjectVisiblity(this.paragraph);
        await verifyObjectVisiblity(this.rubickCubeImage);
        await verifyObjectVisiblity(this.rubickCubeFooter);
    }

    async verifyHeadersInTable() {
        await verifyItemsInContainer(this.tableItemsHeaders, this.tableItemsHeadersArr);
    }

    async verifyTextsInTable() {
        await verifyItemsInContainer(this.tableItemsTexts, this.tableItemsTextsArr);
    }

    async verifyFooter() {
        //todo
    }

}