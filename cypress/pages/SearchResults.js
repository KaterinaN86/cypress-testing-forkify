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
        cy.log(this.getNumberOfPreviews());
    }
    clickRandomRecipePreview() {
        cy.log("Click on random recipe preview from search results.");
        const randomIndex = Math.floor(
            Math.random() * this.getNumberOfPreviews()
        );
        cy.log(this.maxIndex);
        cy.log(randomIndex);
    }
}
module.exports = new SearchResults();
