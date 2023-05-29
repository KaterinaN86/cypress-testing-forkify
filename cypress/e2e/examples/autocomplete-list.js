/// <reference types="cypress" />

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        //Open autocomplete page.
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#autocomplete-textfield")
            .invoke("removeAttr", "target")
            .click({ force: true });

        //Typing 'A' in the input field will cause autofill suggestions to show.
        cy.get("#myInput").type("A");
        //Loop over list of suggestions.
        cy.get("#myInputautocomplete-list > *")
            .each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = "Avacado";
                //Click on suggested word if it matches "Avocado"
                if (prod === productToSelect) {
                    $el.trigger("click");
                    cy.get("#submit-button").click();
                    //Verify page URL contains selected suggestion.
                    cy.url().should("include", productToSelect);
                }
            })
            //Process is repeated but instead of 'Avocado', the clicked suggestion is 'Grapes.'
            .then(() => {
                cy.get("#myInput").clear();
                cy.get("#myInput").type("G");
                cy.get("#myInputautocomplete-list > *").each(
                    ($option, index, $list) => {
                        const productToSelect = "Grapes";
                        const prod = $option.text();
                        if (prod === productToSelect) {
                            $option.trigger("click");

                            cy.get("#submit-button").click();
                            cy.url().should("include", productToSelect);
                        }
                    }
                );
            });
    });
});
