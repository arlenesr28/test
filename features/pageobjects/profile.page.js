const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

class ProfilePage extends Page {

    get txtboxSearch () { return $('#searchBox') }
    get linkProfile () { return $('#loading-label > a') }
    get btnDelete () { return $('#delete-record-undefined > svg > path') }
    get btnOkModal () { return $('#closeSmallModal-ok') }

    async search (publisher) {
        await (await this.txtboxSearch).click();
        await (await this.txtboxSearch).setValue(publisher);
        // await (await this.linkProfile).click();
        // await (await this.txtboxSearch).setValue(author);
        // await sleep(3000)
        // function sleep(ms) {
        //     return new Promise((resolve) => {
        //       setTimeout(resolve, ms);
        //     });
        //   } 
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

    async nextPage () {
        await (await this.btnNext).click()
    }
}

module.exports = new ProfilePage();