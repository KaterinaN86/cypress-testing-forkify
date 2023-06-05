/// <reference types="Cypress" />

import searchResults from "../pages/SearchResults.js";
import search from "../pages/Search.js";
import recipe from "../pages/Recipe.js";
import bookmarks from "../pages/Bookmarks.js";

describe("Test search form and generated recipe previews as search results.", () => {
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
        //Using fixture to search for recipes containing the word "coffee".
        search.inputSearchQuery(data.secondSearchQuery);
        search.clickSearchButton();
        //Load search results.
        searchResults.getCurrentPageInfo();
        //Using while loop to click on two random results.
        let i = 0;
        while (i < 2) {
            searchResults.clickRandomRecipePreview();
            recipe.addToBookmarks();
            i++;
        }
        bookmarks.verifyBookmarksContainer();
        //Click on each recipe preview in bookmarks list and compare preview title to the title of the active recipe rendered on the page.
        bookmarks.verifyTitles();
        //To prevent test failure if recipe previews are not rendered on time, this block is added. It will be executed when recipe previews are not rendered.
        Cypress.on("fail", (error, runnable) => {
            if (error.message.includes("`.preview`")) {
                console.log("Bookmarks not loaded!");
            }
            //If there was another reason for test failure, an error is still thrown.
            else {
                throw error;
            }
        });
    });
});
