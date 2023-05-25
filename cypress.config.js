const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        //Setting that defines the type of files that are considered as specs (tests).
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        screenshotOnRunFailure: true,
        baseUrl: "https://forkify-k-project.netlify.app/",
        chromeWebSecurity: false,
        experimentalModifyObstructiveThirdPartyCode: true,
    },
});
