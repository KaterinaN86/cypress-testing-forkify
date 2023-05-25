/// <reference types="cypress" />
describe("Iterate over elements", () => {
    beforeEach(
        `Open "automationteststore" home page and navigate to "Hair Care" products page.`,
        () => {
            cy.visit("https://automationteststore.com/");
            //Accessing an anchor element with href attribute value containing "product/category&path=']".
            cy.get("a[href*='product/category&path=']")
                .contains("Hair Care")
                .click();
        }
    );
    it("Log information of all hair care products", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text());
        });
    });
    it("Add specific product to basket", () => {
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //     if($el.text().includes('Curls to straight Shampoo')) {
        //         cy.wrap($el).click()
        //     }
        // });
        cy.selectProduct("Curls to straight Shampoo");
    });
    it("Add another specific product to basket", () => {
        cy.selectProduct("Seaweed conditioner");
    });
});
