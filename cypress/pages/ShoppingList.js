class ShoppingList {
    getMainContainer() {
        return cy.get(".add-list-window");
    }
}
module.exports = new ShoppingList();
