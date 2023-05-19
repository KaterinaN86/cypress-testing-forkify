/// <reference types="Cypress" />

import searchResutls from "../pages/SearchResults.js";
import search from "../pages/Search.js";

describe("Test search form", () => {
    let length;
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

    it("Should log recipes list length", () => {
        search.inputSearchQuery("potato");
        search.clickSearchButton();
        searchResutls.verifyRecipesList();
        searchResutls.getRecipes().then(($list) => {
            length = $list.length;
        });

        //searchResutls.verifyRecipesListPageLength();
        //searchResutls.clickRandomRecipePreview();
    });
    it("Printing length", () => {
        cy.log("*** length obtained is *** " + length);
    });
});
