/// <reference types="Cypress" />

import homePage from "../pages/HomePage.js";
import recipe from "../pages/Recipe.js";

describe("Test recipe details view", () => {
    //Cypress hook that refers to a function being called before executing test suite.
    before(function () {
        //Use the cy.fixture() method to pull data from fixture file
        cy.fixture("app-data").then(function (data) {
            this.data = data;
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
    it("Should print recipe view message", () => {
        recipe.verifyMessageText();
    });
});