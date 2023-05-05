# Project for testing [https://forkify-k-project.netlify.app/](https://forkify-k-project.netlify.app/) using Cypress automation framework

- Cypress is a next generation front end testing tool built for the modern web. It is open source and runs on Windows, Linux, and macOS. It is often compared to Selenium, however, it runs inside the browser and it uses JavaScript and nodeJS. For this purpose it is needed to download and install node JS. Git also needs to be installed on our machine in order to be able to use Git Bash for running commands with Visual Studio Code terminal (this is a recommendation, another IDE can also be used).

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

1. First, a folder that is going to be the root of the project is created.

## Tests (specs) can be found in directory **cypress/e2e**

- **add-recipe.js** file contains tests regarding **add recipe** form.
