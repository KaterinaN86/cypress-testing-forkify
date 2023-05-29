/// <reference types="Cypress" />

import header from "../pages/Header.js";

describe("Test app header", () => {
    //Cypress hook that refers to a function being called before executing test suite.
    before(function () {
        cy.fixture("nav-items").then(function (data) {
            //Using globalThis to be able to access variable data from anywhere in the code, no mather the scope.
            globalThis.data = data;
        });
    });
    //Cypress hook used to call a function before each test is executed.
    beforeEach(function () {
        // runs before each test in the it block
        cy.log("Open base URL");
        //Explicitly set pageLoadTimeout
        cy.visit("/", { timeout: 5000 });
    });
    it("Should verify main container", () => {
        cy.log("Verifying header main container");
        header.verifyMainContainer();
    });
    it("Should verify app logo", () => {
        cy.log("Verifying app logo.");
        header.verifyLogo();
    });
    it("Should verify nav elements text", () => {
        header.verifyNavItems(data.navItem);
    });
    it("Should click random nav menu element.", () => {
        header.clickRandomNavItemElement(data.navItem);
    });
});
