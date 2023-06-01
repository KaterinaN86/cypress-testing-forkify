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
    }
    verifySearchButton() {
        expect(this.getSearchButton()).to.exist;
        cy.log("Search button verified");
    }
    clickSearchButton() {
        cy.log("Click on search button.");
        this.getSearchButton().click();
        //Example of handling a promise so we can control order of execution.
        this.getSearchButton().then(($searchButton) => {
            console.log(`Clicked on button with text: ${$searchButton.text()}`);
        });
        cy.log("Search results preview.");
        cy.get(".preview");
    }
}
module.exports = new Search();
