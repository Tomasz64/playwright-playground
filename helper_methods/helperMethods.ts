import { expect, Locator, Page } from "@playwright/test";

export async function loadPage(page: Page, address: string) {
    await page.goto(address);
}

export async function verifyTitle(page: Page, title: string) {
    await expect(page).toHaveTitle(title);
}

export async function verifyObjectVisiblity(locator: Locator) {
    await expect(locator).toBeVisible();
}

export async function verifyItemsInContainer(locator: Locator, text: string[]) {
    const element_count = await locator.count();
    for (let i = 0; i < element_count; i++) {
        const element = locator.nth(i);
        await expect(element).toBeVisible();
        await expect(element).toContainText(text[i])
    }
}

export async function clickObject(locator: Locator) {
    await locator.click();
}

export async function closeAlertPrompt(page: Page, alertText: String) {
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain(alertText);
        await dialog.accept();
    });
}