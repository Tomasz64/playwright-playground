import { expect, Locator, Page } from '@playwright/test';
import { verifyObjectVisiblity, verifyItemsInContainer } from '../helper_methods/helperMethods'

export class MainPage {
    readonly page: Page;
    readonly address: string = "http://www.uitestingplayground.com/";
    readonly websiteTitle: string = "UI Test Automation Playground";

    readonly tableItems = ["Dynamic ID", "Class Attribute", "Hidden Layers", "Load Delay",
    "AJAX Data", "Client Side Delay", "Click", "Text Input", "Scrollbars", "Dynamic Table",
    "Verify Text", "Progress Bar", "Visibility", "Sample App", "Mouse Over", "Non-Breaking Space",
    "Overlapped Element", "Shadow DOM"];

    //Navigation Bar
    readonly logo: Locator
    readonly homeButton: Locator;
    readonly resourcesButton: Locator;
    readonly navBar: Locator;
    //End of Navigation Bar

    readonly title: Locator;
    readonly blockquote: Locator;
    readonly alertBox: Locator;
    readonly paragraph: Locator;
    readonly rubickCubeImage: Locator;
    readonly rubickCubeFooter: Locator;
    readonly table: Locator;
    readonly tableItemHeaders: Locator;



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
        this.paragraph = page.locator("//div[@class='col-sm']/p", {hasText: "Different automation pitfalls appearing in modern web applications are described and emulated below."});
        this.rubickCubeImage = page.locator("//img[@class='img-fluid']");
        this.rubickCubeFooter = page.locator("//div[@class='col-sm']//small", {hasText: "Rubik's Cube is licensed under CC 4.0 BY-NC"});
        //end of main page//
        
        //table//
        this.table = page.locator("//div[@class='container'");
        this.tableItemHeaders = page.locator("//div[@class='container']//h3/a");
        //end of table//
    }

    async verifyNavbar() {
        await verifyObjectVisiblity(this.page, this.navBar);
        await verifyObjectVisiblity(this.page, this.logo);
        await verifyObjectVisiblity(this.page, this.homeButton);
        await verifyObjectVisiblity(this.page, this.resourcesButton);
    }

    async verifyMainPage() {
        await verifyObjectVisiblity(this.page, this.title);
        await verifyObjectVisiblity(this.page, this.blockquote);
        await verifyObjectVisiblity(this.page, this.alertBox);
        await verifyObjectVisiblity(this.page, this.paragraph);
        await verifyObjectVisiblity(this.page, this.rubickCubeImage);
        await verifyObjectVisiblity(this.page, this.rubickCubeFooter);
    }

    async verifyHeadersInTable(){
        await verifyItemsInContainer(this.page, this.tableItemHeaders, this.tableItems);
    }

}