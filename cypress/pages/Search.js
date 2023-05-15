class Search {
    getInputTextField() {
        return cy.get(".search__field");
    }
    getSearchButton() {
        return cy.get(".search__btn");
    }

    inputSearchQuery(text) {
        cy.log("Entering search operation query text.");
        this.getInputTextField().type(text);
    }
    verifySearchButton() {
        expect(this.getSearchButton()).to.exist;
        cy.log("Search button verified");
    }
    clickSearchButton() {
        this.getSearchButton().click();
        this.getSearchButton().then(($searchButton) => {
            console.log(`Clicked on button with text: ${$searchButton.text()}`);
        });
        cy.log("Search results preview.");
        cy.get(".preview");
    }
}
module.exports = new Search();
