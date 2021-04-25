const Page = require('./page');

class BookStorePage extends Page {

    get btnBookStore () { return $(`#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(6)`) }
    get txtboxSearch () { return $('#searchBox') }
    get linkBookTitle () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(2) > div') }
    get btnAddCollection () { return $('#addNewRecordButton') }

    async bookstore () {
        await (await this.btnBookStore).scrollIntoView();
        await (await this.btnBookStore).waitForDisplayed();
    }

    async bookstoreClick () {
        await (await this.btnBookStore).click();
    }

    async search (publisher) {
        await (await this.txtboxSearch).click();
        await (await this.txtboxSearch).setValue(publisher);
    }

    async clickBook () {
        await (await this.linkBookTitle).click();
    }

    async addToMyCollection () {
        await (await this.btnAddCollection).scrollIntoView();
        await (await this.btnAddCollection).waitForDisplayed();
        await (await this.btnAddCollection).click();
        browser.acceptAlert();
    }
}

module.exports = new BookStorePage();