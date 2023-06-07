const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "i8r8jg",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json",
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        //Setting that defines the type of files that are considered as specs (tests).
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        screenshotOnRunFailure: true,
        trashAssetsBeforeRuns: true,
        baseUrl: "https://forkify-k-project.netlify.app/",
        chromeWebSecurity: false,
        experimentalModifyObstructiveThirdPartyCode: true,
        pageLoadTimeout: 12000,
        defaultCommandTimeout: 10000,
        env: {
            automationStoreUrl: "https://automationteststore.com/",
            webdriverUniUrl: "http://webdriveruniversity.com/",
        },
    },
});
