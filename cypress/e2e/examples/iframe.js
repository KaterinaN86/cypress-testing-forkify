/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        //Opening the base URL.
        cy.visit("http://www.webdriveruniversity.com");
        //Clicking on the "IFRAME" element that opens the referenced iframe element.
        cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
        //Using a callback to access the document that contains the iframe element.
        cy.get("#frame").then(($iframe) => {
            //Accessing the body od the document.
            const body = $iframe.contents().find("body");
            //Using an alias to save that element.
            cy.wrap(body).as("iframe");
        });
        //Accessing button "Find out more" by using the previously defined alias and clicking the button.
        cy.get("@iframe").find("#button-find-out-more").click();
        //When the button is clicked a modal window appears and the modal element is saved by using an alias.
        cy.get("@iframe").find("#myModal").as("modal");
        //Verifying the text displayed in the modal.
        cy.get("@modal").should(($expectedText) => {
            const text = $expectedText.text();
            expect(text).to.include(
                "Welcome to webdriveruniversity.com we sell a wide range of electrical goods"
            );
        });
        //Click the modal "Close" button.
        cy.get("@modal").contains("Close").click();
    });
});
