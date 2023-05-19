class SearchResults {
    getMainContainer() {
        return cy.get(".search-results");
    }
    getRecipes() {
        return cy.xpath("//ul[@class='results']").find(".preview");
    }
    verifyMainContainer() {
        expect(this.getMainContainer()).to.exist;
    }
    verifyRecipesList() {
        cy.log(
            "Confirm that there is at least one recipe displayed after performed search"
        );
        expect(this.getRecipes()).to.exist;
    }
    verifyRecipesListPageLength() {
        cy.log("Logging number of displayed recipe previews on first page.");
        cy.log(this.getRecipes().its("length"));
    }
}
module.exports = new SearchResults();
