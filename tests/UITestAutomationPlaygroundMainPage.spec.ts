import { test } from '@playwright/test';
import { MainPage } from '../page/main.page';
import { loadPage, verifyTitle } from '../helper_methods/helperMethods'
test('Load website and verify title', async ({ page }) => {
    const webpage = new MainPage(page);
    await loadPage(page, webpage.address);
    await verifyTitle(page, webpage.websiteTitle);

});
test('Navbar verification', async ({ page }) => {
    const webpage = new MainPage(page);
    await loadPage(page, webpage.address);
    await webpage.verifyNavbar();

});

test('Main page verification', async ({ page }) => {
    const webpage = new MainPage(page);
    await loadPage(page, webpage.address);
    await webpage.verifyMainPage();
    await webpage.verifyHeadersInTable();
    await webpage.verifyTextsInTable();
    //await webpage.verifyFooter(); //needs to be implemented

});
