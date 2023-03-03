import { expect, Locator, Page} from "@playwright/test";

export async function loadPage(page: Page, address: string) {
    await page.goto(address);
}

export async function verifyTitle(page: Page, title: string) {
    await expect(page).toHaveTitle(title);
}

export async function verifyObjectVisiblity(page: Page, locator: Locator){
    await expect(locator).toBeVisible();
}

export async function verifyItemsInContainer(page: Page, locator: Locator, text: string[]){
    const element_count = await locator.count();
    for (let i = 0; i < element_count; i++){
        const element = locator.nth(i);
        await expect(element).toBeVisible();
        await expect(element).toContainText(text[i])
    }
}