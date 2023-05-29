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
            //Math.random() generates random number from 0 to 1, not including 1. That number is multiplied by tne number of elements. Math.floor() will round the result to the smaller number -> 3,6 is "floored" to 3.
            const randomIndex = Math.floor(Math.random() * $list.length);
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
