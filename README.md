# Project for testing [https://forkify-k-project.netlify.app/](https://forkify-k-project.netlify.app/) using Cypress automation framework

- **Cypress** is a next generation front end testing tool built for the modern web, used for setting, writing, running and debugging tests. It is open source and runs on Windows, Linux, and macOS. It is often compared to Selenium, however, it runs inside the browser and it uses JavaScript and nodeJS. For this purpose it is needed to download and install node JS. Git also needs to be installed on our machine in order to be able to use Git Bash for running commands with Visual Studio Code terminal (this is a recommendation, another IDE can also be used).
- **End to end testing** is a software testing method that evaluates the entire application from start to finish, in an environment that is similar to production. It checks the integration of the software's dependencies and the flow of data for all kinds of user tasks and processes. It occurs after integration testing and system integration testing, which test the individual components of a system. It is necessary to ensure that a complete system or application interacts correctly with different dependent systems and apps for a core enterprise business process. It is not a form of testing a completed product, but a way of assessing the working order of a complex product under real-world scenarios.
- Cypress enables **all types of tests**: end-to-end tests, component tests, integration tests, unit tests.

## Cypress features:

1. Time Travel: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
2. Debuggability: offers readable errors and stack traces for fast debugging.
3. Automatic Waiting: cypress automatically waits for commands and assertions before moving on.
4. Spies, Stubs, and Clocks: features to verify and control the behavior of functions, server responses, or timers.
5. Network Traffic Control: control, stub, and test edge cases without involving a server.
6. Consistent Results: fast, consistent and reliable tests without Selenium or WebDriver.
7. Screenshots and Videos: screenshots taken automatically on failure, or videos of an entire test suite when run from the CLI. Screenshots and videos can be recorded to Cypress Cloud and stored with test results for zero-configuration debugging.
8. Cross Browser Testing: tests can run using Firefox and Chrome-family browsers (including Edge and Electron) locally and optimally in a Continuous Integration pipeline.
9. Smart Orchestration: by setting up to record to Cypress Cloud, a test suite can be parallelized, failed specs can rerun first with Spec Prioritization, and test runs can be canceled on failures with Auto Cancellation for tight feedback loops.
10. Flake Detection: enables discovering and diagnosing unreliable tests with Cypress Cloud's Flaky test management.

## Setting up our project

1. Root project directory **cypress-testing-forkify** is created. This test project was built by using **Visual Studio Code** IDE which also needs to be installed.
2. Initializing **package.json** file by using the following command via **Git Bash** terminal (Terminal -> New Terminal -> Select Bash on bottom right): `npm init`.
3. Install cypress framework using this command: `npm install --save-dev cypress@12.6.0`. This will add **node_modules** directory in the project root directory. When copying this project this directory doesn't have to be transferred together with project content because it can easily be added in the same manner as described above.

   - **Note:** Installed version matches one used in Udemy tutorial [https://www.udemy.com/course/cypress-io-master-class](https://www.udemy.com/course/cypress-io-master-class).

4. Running **Cypress App**: `./node_modules/.bin/cypress open`. This will start cypress-automation-framework (master) page where we can select E2E tests from available two options. Selecting it will add all necessary configuration files. We can select to start the test runner with chrome tests and then create example specs (tests). In our project directory, this will add the cypress directory where we can find the specs in the e2e directory. Following Version 10, Cypress test runner is called the **Cypress App**. Cypress app provides easy way to execute tests, each file displayed on the app’s UI is a test, and can be run in the Cypress App by simply clicking on it.

   - **Note:** In the example tests/specs the extension **cy.js** is used. To use another extension we need to modify file: **cypress.config.js** by adding line:

     ```
     specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
     ```

     The stars are wild cards (any folder \*_, any file _). We add this line to the e2e block.

## Project structure

- Tests (specs) can be found in directory **cypress/e2e** (formally called **integration**).
- **Fixtures** directory is used to store data providers, files containing data that can be used as input for tests.
- Common commands that are very likely to be used in multiple tests are stored in the **support** directory, more precisely in the **commands.js** file. This prevents repeating code.
- In that same directory is the **e2e.js** file where we can add external plugins that can be used in our framework. An example of that is adding the **XPath** plugin by adding line: `require("cypress-xpath");` to the file content.
- If there are files downloaded while certain tests are executed they will be stored in the **downloads** folder.
- Configuration properties are defined in the **cypress.config.js** file. Example:

  ![Overwriting settings in the cypress.config.js file](./cypress/fixtures/readme-images/config-overwriting.png)

- Following execution, **json reports** can be saved in the **results** directory.
- In the **screenshot** directory images of executed tests are stored.
- Cypress also has the capability to record text execution and videos are saved in the corresponding **videos** directory.

- **add-recipe.js** file contains tests regarding **add recipe** form.
