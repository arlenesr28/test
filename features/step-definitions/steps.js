const { Given, When, Then } = require('@cucumber/cucumber');
const { async } = require('rxjs');
const assert = require('assert');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async function (page) {
        await pages[page].open()
        expect(browser).toHaveTitle('ToolsQA');
    });

When(/^I login with (\w+) and (.+)$/, async function (username, password) {
    await LoginPage.login(username, password)
});

Then(/^I should be able to login successfully with (.*)$/, async function (username) {
    // await expect(SecurePage.headerUsername).toBeExisting();
    // await expect(SecurePage.headerUsername).toHaveTextContaining(username);
});

Then(/^I should see an error like this (.*)$/, async function (message) {
    await expect(SecurePage.invalidUser).toBeExisting();
    await expect(SecurePage.invalidUser).toHaveTextContaining(message);
});
