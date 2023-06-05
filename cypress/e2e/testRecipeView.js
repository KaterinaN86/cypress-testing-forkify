/// <reference types="Cypress" />

import homePage from "../pages/HomePage.js";
import recipe from "../pages/Recipe.js";
import search from "../pages/Search.js";
import searchResults from "../pages/SearchResults.js";

describe("Test recipe details view", () => {
    //Cypress hook that refers to a function being called before executing test suite.
    before(function () {
        //Use the cy.fixture() method to pull data from fixture file
        cy.fixture("example").then(function (data) {
            globalThis.data = data;
        });
    });
    beforeEach(function () {
        // runs before each test in the it block
        cy.log("Open base URL");
        cy.visit("/");
    });
    it("Should verify main container is displayed", () => {
        homePage.verifyMainContainerExists();
    });
    it("Should verify message text is displayed", () => {
        recipe.verifyMessageElementExists();
    });
    it("Should print and verify recipe view message", () => {
        recipe.verifyMessageText();
        cy.log("Recipe view message verified!");
    });
    it("Should log message text in recipe details view and should verify length is greater than 5", () => {
        recipe.getMessageText();
    });
    it("Should click on random recipe preview and follow directions link.", () => {
        search.inputSearchQuery(data.searchQuery);
        search.clickSearchButton();
        searchResults.getCurrentPageInfo();
        searchResults.clickRandomRecipePreview();
        recipe.verifyDirectionsButton();
        recipe.handleUncaughtException();
        recipe.clickDirectionsButton();
    });
});
