class ShoppingList {
    getMainContainer() {
        return cy.get(".add-list-window");
    }
    getCloseButton() {
        return cy.get(".btn--close-list-modal");
    }
    verifyMainContainer() {
        cy.log(`Verify shopping list window main container.`);
        this.getMainContainer().invoke("show");
        cy.log("Main container is displayed.");
        expect(this.getMainContainer()).to.exist;
    }
}
module.exports = new ShoppingList();
