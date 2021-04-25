const { Given, When, Then } = require('@cucumber/cucumber');
const { async } = require('rxjs');
const assert = require('assert');

const LoginPage = require('../pageobjects/login.page');
const BookStorePage = require('../pageobjects/bookstore.page');

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

When(/^I scrolldown to BookStore and click$/, async function () {
    browser.fullscreenWindow()
    await BookStorePage.bookstore()
    await expect(BookStorePage.btnBookStore).toBeExisting();
    await BookStorePage.bookstoreClick()
});

Then(/^I search for (.*)$/, async function (publisher) {
    await expect(BookStorePage.txtboxSearch).toBeExisting();
    await BookStorePage.search(publisher);
});
