class HomePage {
    getMainContainer() {
        return cy.get("div.container");
    }
    getRecipeDetailsContainer() {
        return cy.xpath('//div[@class="recipe"]');
    }
    getHeader() {
        return cy.get(".header");
    }
    getSearchResults() {
        return cy.get("div.search-results");
    }

    verifyMainContainerExists() {
        expect(this.getMainContainer()).to.exist;
    }
    verifyHeaderExists() {
        expect(this.getHeader()).to.exist;
    }
}
module.exports = new HomePage();
