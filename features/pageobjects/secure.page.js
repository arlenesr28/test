const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get headerUsername () { return $('#userName-value') }
    get welcomeMessage () { return $('#userForm > div:nth-child(1) > h5') }
    get invalidUser () { return $('#name') }
}

module.exports = new SecurePage();
