import { test, expect } from '@playwright/test';
import { DemoQaSite } from '../page/demosite.page';

test('load website and veirify table visibility', async ({ page }) => {
    const website = new DemoQaSite(page);
   
    await website.goto();
    await website.verifyTitle("Testing Demo Site | Practice Website For Automation - Global SQA");
});