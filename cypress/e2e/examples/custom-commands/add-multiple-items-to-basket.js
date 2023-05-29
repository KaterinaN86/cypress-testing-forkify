/// <reference types="cypress" />
describe("Add multiple items to basket.", () => {
    //Using data fixture and alias to retrieve data from a file.
    before(() => {
        cy.fixture("products").as("productsData");
    });
    //Steps that need to be performed before every test.
    beforeEach(
        `Open "automationteststore" home page and navigate to "Hair Care" products page.`,
        () => {
            cy.visit(Cypress.env("automationStoreUrl"));
            //Accessing an anchor element with href attribute value containing "product/category&path=']".
            cy.get("a[href*='product/category&path=']")
                .contains("Hair Care")
                .click();
        }
    );
    it("Add multiple items to basket.", () => {
        //Using the fixture alias to access product name data.
        cy.get("@productsData").then((data) => {
            //Looping over the array of product names.
            for (let product of data.productName) {
                //Adding product to basket.
                cy.addToCart(product);
            }
            cy.log("Display shopping cart content.");
            cy.xpath("//ul[@class='nav topcart pull-left']").click();
        });
    });

    it("Should open webdriveruniversity page", () => {
        cy.origin(Cypress.env("webdriverUniUrl"), () => {
            cy.visit("/");
        });
    });
});
