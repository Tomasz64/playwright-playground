import { test, expect } from '@playwright/test';
import { DemoQaSite } from '../page/demosite.page';

test('Load website and verify title', async ({ page }) => {
    const website = new DemoQaSite(page);

    await website.goto();
    await website.verifyTitle("Testing Demo Site | Practice Website For Automation - Global SQA");

});
test('Verify table', async ({ page }) => {
    const website = new DemoQaSite(page);
    const tableHeaders = ['First Step', 'Second Step', 'Third Step', 'Last Step'];
    const tableItems = ['Tabs', 'Slider', 'ToolTip', 'AlertBox', 'DialogBox', 'ProgressBar', 'Frames', 'Windows', 'Accordion', 'DropDown',
        'AutoComplete', 'SelectElements', 'Sorting', 'Spinner', 'Toolbar', 'DatePicker', 'DragAndDrop', 'DraggableBox', 'SamplePage',
        'AngularJS Site', 'Content Mangement', 'E-CommerceSite', 'PhotographySite'];
    await website.goto();
    await website.verifyObjectVisibility('//div[@class="row price_table_holder col_4"]');
    await website.verifyTableElements('//li[@class="price_column_title"]', tableHeaders);
    await website.verifyTableElements('//ul/li[@class="price_footer"]/a', tableItems);
});