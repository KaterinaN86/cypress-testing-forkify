const { defineConfig } = require('cypress');

//This section is added in order to enable working with multiple configuration files.
const fs = require('fs-extra');
const path = require('path');
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split');

function getConfigurationByFile(file) {
  //'\\' is used because of path definition in node.js (https://nodejs.org/api/path.html)
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);
  //If given config file does not exist in specified directory, log this to the console.
  if (!fs.existsSync(pathToConfigFile)) {
    console.log('No custom config file found.');
    return {};
  }
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: 'i8r8jg',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || '';
      //if (file !== '') return getConfigurationByFile(file);

      cypressSplit(on, config);
      //return config;
      return getConfigurationByFile(file);
    },
    //Setting that defines the type of files that are considered as specs (tests).
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    screenshotOnRunFailure: true,
    video: false,
    trashAssetsBeforeRuns: true,
    baseUrl: 'https://forkify-k-project.netlify.app/',
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    pageLoadTimeout: 12000,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 0,
      openMode: 1,
    },
    env: {
      automationStoreUrl: 'https://automationteststore.com/',
      webdriverUniUrl: 'http://webdriveruniversity.com/',
    },
  },
});
