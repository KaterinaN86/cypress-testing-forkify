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
    getPageInfo() {
        return cy.xpath("//div[contains(@class,'btn--page')]").invoke("text");
    }

    clickRandomRecipePreview() {
        cy.log("Click on random recipe preview from search results.");
        this.getRecipes().then(($list) => {
            const randomIndex = Math.round(Math.random() * $list.length);
            cy.log("Generated index: " + randomIndex);
            cy.wrap($list[randomIndex]).click();
        });
    }

    getCurrentPageInfo() {
        this.getPageInfo().then(($textValue) => {
            let textArray = $textValue.split(" ");
            let currentPageNum = textArray[1];
            cy.log("Current page is " + currentPageNum);
        });
    }
}
module.exports = new SearchResults();
