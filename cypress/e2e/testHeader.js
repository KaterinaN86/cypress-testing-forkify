/// <reference types="Cypress" />

import header from "../pages/Header.js";

describe("Test app header", () => {
    //Cypress hook that refers to a function being called before executing test suite.
    before(function () {
        cy.fixture("example").then(function (data) {
            //Using globalThis to be able to access variable data from anywhere in the code, no mather the scope.
            globalThis.data = data;
        });
    });
    //Cypress hook used to call a function before each test is executed.
    beforeEach(function () {
        // runs before each test in the it block
        cy.log("Open base URL");
        cy.visit("/");
    });
    it("Should verify main container", () => {
        cy.log("Verifying header main container");
        header.verifyMainContainer();
    });
    it("Should verify app logo", () => {
        cy.log("Verifying app logo.");
        header.verifyLogo();
    });
});
