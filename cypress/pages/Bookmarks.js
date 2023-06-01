import recipe from "../pages/Recipe";
class Bookmarks {
    getMainContainer() {
        return cy.get(".bookmarks");
    }
    getBookmarkList() {
        return cy.get(".bookmarks__list");
    }
    verifyErrorMessage(message) {
        cy.get(".bookmarks__list").find(".error").as("errorDiv");
        cy.get("@errorDiv")
            .find("#error-message-p-element")
            .then(($value) => {
                cy.log("Bookmarks not added yet! Verifying error message.");
                expect($value.text()).to.equal(message);
            });
    }
    /**
     * Verifies titles in bookmarks list. List is displayed when user hovers over bookmarks button in menu.
     */
    verifyTitles() {
        //Select bookmark element
        cy.get("#bookmarksMenuEl")
            //Using "real events" to hover over the bookmarks header element. This way the content with recipe previews gets rendered in the bookmarks section of the header.
            .realHover()
            .forceClick()
            .get(".bookmarks__list")
            .find(".preview", { timeout: 3000 }) //Timeout can be set as a property of the options object passed when find method is called.
            //looping over each recipe preview object.
            .each(($el, index, $list) => {
                expect(this.getMainContainer()).to.exist;
                cy.wrap($el)
                    //Selecting the element with a link to the recipe.
                    .find(".preview__link")
                    .should("have.attr", "href")
                    .and("include", "#")
                    .then((href) => {
                        //Using the recipe ID, data for the corresponding recipe is rendered.
                        cy.visit(Cypress.config("baseUrl") + href);
                        expect(recipe.getMainContainer()).to.exist;
                        cy.log(
                            "Recipe title in preview should match recipe title for active recipe."
                        );
                        recipe.getTitle().then(($value) => {
                            expect($el.text()).to.contain($value.text());
                        });
                    });
            });
    }
}
module.exports = new Bookmarks();
