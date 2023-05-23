/// <reference types="Cypress" />

import searchResutls from "../pages/SearchResults.js";
import search from "../pages/Search.js";

describe("Test search form", () => {
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

    it("Should verify main container", () => {
        cy.log("Verifying main search results container.");
        searchResutls.verifyMainContainer();
    });

    it("Should log current page number and click on random recipe", () => {
        search.inputSearchQuery(data.secondSearchQuery);
        search.clickSearchButton();
        searchResutls.getCurrentPageInfo();
        cy.log("Click on random recipe preview.");
        searchResutls.clickRandomRecipePreview();
    });
});
