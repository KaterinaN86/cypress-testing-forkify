/// <reference types="cypress" />

describe("Test mouse actions", () => {
    before(
        "Scroll checkboxes and radio buttons element into view and click it.",
        () => {
            cy.visit(Cypress.env("webdriverUniUrl"));
            cy.get("#dropdown-checkboxes-radiobuttons")
                .scrollIntoView()
                .invoke("removeAttr", "target")
                .click({ force: true });
        }
    );

    it("Should uncheck and verify option 3 checkbox.", () => {
        //Verify Option 3 is checked in the checkboxes section and uncheck it
        cy.get("#checkboxes :checked")
            .should("have.value", "option-3")
            .uncheck();
        //Using assertion to verify option-3 is unchecked.
        //Selects div element with all checkboxes
        cy.get("#checkboxes")
            //Yields input element with value 'option-3'
            .find('[value="option-3"]')
            //Verifies element is not checked.
            .should("not.be", "checked");
    });
    it.only("Should check multiple checkboxes.", () => {
        //Selecting all the checkboxes.
        cy.get('input[type="checkbox"]')
            .check(["option-1", "option-2", "option-3", "option-4"])
            .should("be.checked");
    });
});
