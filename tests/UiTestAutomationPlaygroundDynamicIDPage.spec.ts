import { test } from '@playwright/test';
import { DynamicIdPage } from '../page/dynamicId.page';
import {loadPage, verifyTitle} from '../helper_methods/helperMethods'

test('Load DynamicID page and verify title', async ({ page }) => {
    const webpage = new DynamicIdPage(page);

    await loadPage(page, webpage.address);
    await verifyTitle(page, webpage.websiteTitle);
});

test('Verify DynamicID page contents', async ({ page }) => {
   const webpage = new DynamicIdPage(page);
   
   await loadPage(page, webpage.address);
   await webpage.verifyDynamicIDPage();
});

test('Click DynamicID button', async ({ page }) => {
    const webpage = new DynamicIdPage(page);

    await loadPage(page, webpage.address);
    await webpage.clickDynamicIDButton();
});