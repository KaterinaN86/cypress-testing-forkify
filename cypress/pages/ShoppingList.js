class ShoppingList {
    getMainContainer() {
        return cy.get(".add-list-window");
    }
    getCloseButton() {
        return cy.get(".btn--close-list-modal");
    }
}
module.exports = new ShoppingList();
