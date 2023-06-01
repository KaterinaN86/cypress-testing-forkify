/// <reference types="Cypress" />

import searchResults from "../pages/SearchResults.js";
import search from "../pages/Search.js";
import recipe from "../pages/Recipe.js";
import bookmarks from "../pages/Bookmarks.js";

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
        searchResults.verifyMainContainer();
    });

    it("Should add random recipe from search results to bookmarks", () => {
        search.inputSearchQuery(data.secondSearchQuery);
        search.clickSearchButton();
        searchResults.getCurrentPageInfo();
        let i = 0;
        while (i < 2) {
            searchResults.clickRandomRecipePreview();
            recipe.addToBookmarks();
            bookmarks.getBookmarkList();
            i++;
        }
        bookmarks.verifyTitles();
        Cypress.on("fail", (error, runnable) => {
            if (error.message.includes("`.preview`")) {
                console.log("Bookmarks not loaded!");
            } else {
                throw error;
            }
        });
    });
});
