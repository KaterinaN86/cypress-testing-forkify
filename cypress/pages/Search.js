class Search {
    getInputTextField() {
        return cy.get(".search__field");
    }
    getSearchButton() {
        return cy.get(".search__btn");
    }
    inputSearchQuery(text) {
        cy.log("Enter query text for performing search operation.");
        this.getInputTextField().type(text);
        cy.screenshot();
    }
    verifySearchButton() {
        expect(this.getSearchButton()).to.exist;
        cy.log("Search button verified");
    }

    clickSearchButton() {
        cy.log("Click on search button.");
        //Overwriting default command timeout by setting the timeout property when calling 'click' method.
        this.getSearchButton().click({ timeout: 3000 });
        //Example of handling a promise so we can control order of execution.
        this.getSearchButton().then(($searchButton) => {
            cy.debug();
            console.log(`Clicked on button with text: ${$searchButton.text()}`);
            //Timeouts can also be defined when using assertions.
            cy.wrap($searchButton).contains("Search", { timeout: 3000 });
        });
        cy.get(".preview");
    }
}
module.exports = new Search();
