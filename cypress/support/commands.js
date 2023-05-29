// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
    "forceClick",
    { prevSubject: "element" },
    (element, position = "center") => {
        return cy.wrap(element).click(position, { force: true });
    }
);
//Select product from list by product name.
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click();
        }
    });
});
//Select product from list by product name and add product to cart.
Cypress.Commands.add("addToCart", (productName) => {
    //Looping over the list of products.
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //The condition will be met only when the name of the product matches the one passed as an argument.
        if ($el.text() === productName) {
            //First, all the "add to cart" elements are selected and then only the one with the matching index is clicked
            cy.get(".productcart").eq(index).click();
        }
    });
});
