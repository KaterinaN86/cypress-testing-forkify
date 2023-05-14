import homePage from "../pages/HomePage.js";

/// <reference types="Cypress" />
describe("Test home page", () => {
    //Cypress hook that refers to a function being called before executing test suite.
    before(function () {
        cy.fixture("example").then(function (data) {
            //Using globalThis to be able to access variable data from anywhere in the code, no mather the scope.
            globalThis.data = data;
        });
    });
    beforeEach(function () {
        // runs before each test in the it block
        cy.log("Open base URL");
        cy.visit("/");
    });
    it("Should verify base URL", () => {
        cy.log("Verifying base URL");
        cy.url().should("eq", data.URL);
    });
    it("Should verify page title", () => {
        cy.log("Verifying page title.");
        cy.title().should("include", data.pageTitle);
    });
    it("Should verify charset document property", () => {
        cy.log("Verifying document charset property");
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
    });
    it("Should verify main container is displayed", () => {
        homePage.verifyMainContainerExists();
    });
    it("Should verify header is displayed", () => {
        homePage.verifyHeaderExists();
    });
});
