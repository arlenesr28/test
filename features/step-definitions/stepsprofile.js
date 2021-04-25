const { Given, When, Then } = require('@cucumber/cucumber');
const { async } = require('rxjs');
const assert = require('assert');

const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');
const { link } = require('fs-extra');

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

Then(/^I search for (.*)$/, async function (publisher) {
    await expect(ProfilePage.txtboxSearch).toBeExisting();
    await ProfilePage.search(publisher);
});

Then(/^I delete the first book$/, async function () {
    await expect(ProfilePage.btnDelete).toBeExisting();
    await ProfilePage.deleteBook();
});

Then(/^I delete all the Books$/, async function () {
    await expect(ProfilePage.btnDeleteAllBooks).toBeExisting();
    await ProfilePage.deleteAllBooks();
});
