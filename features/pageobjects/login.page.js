const { retry } = require('async');
const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

class LoginPage extends Page {
    /**
     * Login
     */
    get inputUsername () { return $('#userName' )}
    get inputPassword () { return $('#password' )}
    get btnLogin () { return $('#login' )}

    /**
     * Logout button
     */
    get btnLogout () {return $('#submit' )}

    /**
     * New User
     */
    get btnNewUser () { return $('#newUser') }
    get inputFistName () { return $('#firstname' )}
    get inputLastName () { return $('#lastname' )}
    get btnReCaptcha () { return $('#recaptcha-anchor > div.recaptcha-checkbox-border') }
    get btnRegister () { return $('#register') }

    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnLogin).click();
    }

    async logout () {
        await (await this.btnLogout).click();
    }

    async createNewUser (firstName, lastName, username, password) {
        await (await this.inputFistName).setValue(firstName);
        await (await this.inputLastName).setValue(lastName);
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        //await expect(this.btnReCaptcha).toBeExisting();
        //await (await this.btnReCaptcha).click();
        await (await this.btnRegister).click();
        browser.acceptAlert();
    }

    async newuserbtn () {
        await (await this.btnNewUser).click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
