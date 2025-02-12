const { Builder, By, until } = require('selenium-webdriver');

let driver;

async function initializeDriver() {
    driver = await new Builder().forBrowser('chrome').build();
    return driver;
}

async function quitDriver() {
    if (driver) {
        await driver.quit();
    }
}

async function navigateTo(url) {
    if (driver) {
        await driver.get(url);
    }
}

async function waitForElement(selector) {
    if (driver) {
        const element = await driver.wait(until.elementLocated(By.css(selector)), 10000);
        return element;
    }
}

module.exports = {
    initializeDriver,
    quitDriver,
    navigateTo,
    waitForElement,
};