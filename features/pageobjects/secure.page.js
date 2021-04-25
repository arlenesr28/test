const Page = require('./page');

class SecurePage extends Page {

    get headerUsername () { return $('#userName-value') }
    get welcomeMessage () { return $('#userForm > div:nth-child(1) > h5') }
    get invalidUser () { return $('#name') }
}

module.exports = new SecurePage();
