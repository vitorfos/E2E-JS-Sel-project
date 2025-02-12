# E2E-JS-Sel-project
Small Web E2E Test Automation framework created in order to better understand JavaScript working with Selenium.

# Selenium E2E Automation Project

This project is designed for end-to-end testing of web applications using Selenium WebDriver. It provides a structured approach to writing tests, organizing page objects, and managing WebDriver instances.

## Project Structure

```
selenium-e2e-automation
├── src
│   ├── tests
│   │   └── example.test.js
│   ├── pages
│   │   └── example.page.js
│   └── utils
│       └── webdriver.js
├── package.json
├── .babelrc
├── .eslintrc.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd selenium-e2e-automation
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure WebDriver:**
   Ensure you have the appropriate WebDriver installed for your browser (e.g., ChromeDriver for Google Chrome).

## Usage

To run the tests, use the following command:

```
npm test
```

## Example Test

The example test can be found in `src/tests/example.test.js`. It demonstrates how to set up test scenarios, including setup and teardown methods for the WebDriver.

## Contributing

Feel free to submit issues or pull requests to improve the project. Please ensure that your contributions adhere to the project's coding standards and guidelines.
