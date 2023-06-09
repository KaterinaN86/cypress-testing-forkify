/// <reference types="Cypress" />
describe("Test recipe search operation", () => {
    //Happy path test case, results in list of recipe previews displayed in search-result area after API call made using query text "pasta".
    it.only("Should display search results after keyword input in required field", () => {
        //Open "forkify" site
        cy.visit("/");
        //Select text input field for recipe search. Input query text in recipe search field.
        cy.get(".search__field").type("salad");
        //Click search button.
        cy.get(".search__btn").click();
        //Select preview elements displayed after performed search. This is added so all of the content of the search-results div element is displayed before the screenshot is taken.
        cy.get(".preview__link");
        // Take screenshot of displayed results.
        cy.get(".search-results").screenshot();
    });
    //Unhappy path tests case. No results are found after performed search call to API.
    it.only("Should display info message after unsuccessful search.", () => {
        //Open "forkify" site
        cy.visit("https://forkify-k-project.netlify.app/");
        //Select text input field for recipe search. Input query text in recipe search field.
        cy.get(".search__field").type("yellow");
        //Click search button.
        cy.get(".search__btn").click();
        //Explicitly set commandTimeout
        Cypress.config("defaultCommandTimeout", 3000);
        //Select message element displayed after performed search and take screenshot. No recipes previews are shown because API call using query text gave no results.
        cy.get(
            "p:contains(No recipe was found! Please try again...)"
        ).screenshot();
    });
});
