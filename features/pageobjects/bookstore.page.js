const Page = require('./page');

class BookStorePage extends Page {

    get btnBookStore () { return $(`#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(6)`) }
    get txtboxSearch () { return $('#searchBox') }


    async bookstore () {
        await (await this.btnBookStore).scrollIntoView();
        await (await this.btnBookStore).waitForDisplayed();
        //await (await this.btnBookStore).click();
    }

    async bookstoreClick () {
        await (await this.btnBookStore).click();
    }

    async search (publisher) {
        await (await this.txtboxSearch).click();
        await (await this.txtboxSearch).setValue(publisher);
    }
}

module.exports = new BookStorePage();