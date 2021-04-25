const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

class ProfilePage extends Page {

    get txtboxSearch () { return $('#searchBox') }
    get linkProfile () { return $('#loading-label > a') }
    get btnDelete () { return $('#delete-record-undefined > svg > path') }
    get btnOkModal () { return $('#closeSmallModal-ok') }
    get btnDeleteAllBooks () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.mt-2.buttonWrap.row > div.text-right.button.di') }

    async search (publisher) {
        await (await this.txtboxSearch).click();
        await (await this.txtboxSearch).setValue(publisher);
    }

    async deleteBook() {
        function sleep(ms) {
            return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
          } 
        await (await this.btnDelete).click();
        await sleep(3000)
        await (await this.btnOkModal).click()
        browser.acceptAlert();
        await sleep(3000)
    }

    async deleteAllBooks () {
        await (await this.btnDeleteAllBooks).scrollIntoView();
        await (await this.btnDeleteAllBooks).waitForDisplayed();
        await (await this.btnDeleteAllBooks).click();
        await (await this.btnOkModal).click()
        browser.acceptAlert();
    }
}

module.exports = new ProfilePage();