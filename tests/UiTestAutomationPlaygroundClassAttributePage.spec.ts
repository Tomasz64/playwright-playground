import { test } from '@playwright/test';
import { ClassAttribute } from '../page/classAttribute.page';
import { loadPage, verifyTitle } from '../helper_methods/helperMethods'

test('Load DynamicID page and verify title', async ({ page }) => {
    const webpage = new ClassAttribute(page);
    await loadPage(page, webpage.address);
    await verifyTitle(page, webpage.websiteTitle);
});

test('Verify DynamicID page contents', async ({ page }) => {
    const webpage = new ClassAttribute(page);
    await loadPage(page, webpage.address);
    await webpage.verifyContentVisibility();
    await webpage.verifyButtonsVisibility();
});

test('Verify Blue button alert generation', async ({ page }) => {
    const webpage = new ClassAttribute(page);
    await loadPage(page, webpage.address);
    await webpage.verifyButtonWithAlert();
});