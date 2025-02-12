class ExamplePage {
    constructor(driver) {
        this.driver = driver;
        this.exampleElement = 'selector-for-example-element'; // Replace with actual selector
    }

    async navigateToPage(url) {
        await this.driver.get(url);
    }

    async fillOutForm(data) {
        const element = await this.driver.findElement(this.exampleElement);
        await element.sendKeys(data);
    }

    async clickButton() {
        const button = await this.driver.findElement('selector-for-button'); // Replace with actual selector
        await button.click();
    }

    async getElementText() {
        const element = await this.driver.findElement(this.exampleElement);
        return await element.getText();
    }
}

module.exports = ExamplePage;