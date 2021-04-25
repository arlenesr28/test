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

Then(/^I should be logged in$/, async function () {
    console.log('YES!!!!');
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

When(/^I am on the Book Store Page and click on a book$/, async function () {
    //await expect(BookStorePage.linkBookTitle).toBeExisting();
    await BookStorePage.clickBook()
});

Then(/^I see all the Information and Add the book to my collection$/, async function () {
    await BookStorePage.addToMyCollection();
    //await expect(BookStorePage.btnAddCollection).toBeExisting();
});
