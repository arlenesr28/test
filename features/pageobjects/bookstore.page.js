const Page = require('./page');

class BookStorePage extends Page {

    get btnBookStore () { return $(`#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(6)`) }
    get txtboxSearch () { return $('#searchBox') }
    get linkBookTitle () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(2) > div') }
    get btnAddCollection () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.profile-wrapper > div.mt-2.fullButtonWrap.row > div.text-right.fullButton') }
    get btnBackBookStore () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.profile-wrapper > div.mt-2.fullButtonWrap.row > div.text-left.fullButton') }
    get dropdownRow () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.select-wrap.-pageSizeOptions > select') }
    get optOne () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.select-wrap.-pageSizeOptions > select > option:nth-child(1)') }
    get btnNext () { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-next > button') }

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

    async backBOokStore () {
        await (await this.btnBackBookStore).scrollIntoView();
        await (await this.btnBackBookStore).waitForDisplayed();
        await sleep(3000)
        function sleep(ms) {
            return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
          } 
        await (await this.btnBackBookStore).click();
    }

    async changeRowNumber () {
        await (await this.dropdownRow).scrollIntoView();
        await (await this.dropdownRow).waitForDisplayed();
        await (await this.dropdownRow).click();
        await (await this.optOne).click()
    }

    async nextPage () {
        await (await this.btnNext).click()
    }
}

module.exports = new BookStorePage();