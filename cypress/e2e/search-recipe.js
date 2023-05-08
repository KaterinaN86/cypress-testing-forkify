/// <reference types="Cypress" />
describe("Test Add recipe form", () => {
    it.only("Should display search results after keyword input in required field", () => {
        //Open "forkify" site
        cy.visit("https://forkify-k-project.netlify.app/");
        //Select text input field for recipe search. Input query text in recipe search field.
        cy.get(".search__field").type("pasta");
        //Click search button.
        cy.get(".search__btn").click();
        //Select preview elements displayed after performed search. This is added so all of the content of the search-results div element is displayed before the screenshot is taken.
        cy.get(".preview__link");
        // Take screenshot of displayed results.
        cy.get(".search-results").screenshot();
    });
});
