const Page = require('./page');

class ProfilePage extends Page {

    get txtboxSearch () { return $('#searchBox') }
    get linkProfile () { return $('#loading-label > a') }

    async search (author) {
        await (await this.txtboxSearch).click();
        await (await this.txtboxSearch).setValue(author);
        // await (await this.linkProfile).click();
        // await (await this.txtboxSearch).setValue(author);
        // await sleep(3000)
        // function sleep(ms) {
        //     return new Promise((resolve) => {
        //       setTimeout(resolve, ms);
        //     });
        //   } 
    }

    async nextPage () {
        await (await this.btnNext).click()
    }
}

module.exports = new ProfilePage();