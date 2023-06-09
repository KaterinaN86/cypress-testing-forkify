import homePage from "../../pages/HomePage.js";

/// <reference types="Cypress" />
describe("Test home page", () => {
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
    it("Should verify base URL, page title and document charset property.", () => {
        cy.log("Verifying base URL");
        //Accessing URL of the page that is currently active and verifying it using fixture.
        cy.url().should("eq", data.URL);
        cy.log("Verifying page title.");
        //Accessing document.title property of the page that is currently active.
        cy.title().should("include", data.pageTitle);
        cy.log("Verifying document charset property");
        //Accessing window document object and verifying charset property.
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
    });

    it("Should verify main container is displayed", () => {
        homePage.verifyMainContainerExists();
    });
    it("Should verify header is displayed", () => {
        homePage.verifyHeaderExists();
    });
});
