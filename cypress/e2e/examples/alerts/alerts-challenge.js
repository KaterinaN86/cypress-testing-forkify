/// <reference types="cypress" />

describe("Perform action regarding alerts.", () => {
    beforeEach(`Should click on ${"POPUP & ALERTS"} link.`, () => {
        cy.log("Open base URL");
        cy.visit("http://www.webdriveruniversity.com/");
        cy.log(`click on ${"POPUP & ALERTS"} link.`);
        cy.get(`#popup-alerts`)
            .invoke("removeAttr", "target")
            .click({ force: true });
    });
    it("Should verify popups and alerts URL.", () => {
        cy.log("Verifying URL");
        cy.url().should("contain", "Popup-Alerts");
    });
    it(`Should be able to click "cancel" option on alert popup`, () => {
        cy.get(`#button4`).forceClick();
        cy.on("window:confirm", (str) => {
            return false;
        });
        cy.get(`#confirm-alert-text`).should("contain", `You pressed Cancel!`);
    });
    it("Validate js confirm alert box using a stub", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts")
            .invoke("removeAttr", "target")
            .click({ force: true });

        const stub = cy.stub();
        //We can imagine the stub as a type of storage that stores the result of the event that gets fired.
        cy.on("window:confirm", stub);
        //Chaining by using promises and handling the callback functions.
        cy.get("#button4")
            .click()
            .then(() => {
                //Accessing the event by using the "getCall()" method. 0 is passed because there is only one stub currently.
                //An assertion is made to make sure the correct popup alert is displayed.
                expect(stub.getCall(0)).to.be.calledWith("Press a button!");
            })
            .then(() => {
                //Click the "OK" button on the popup.
                return true;
            })
            .then(() => {
                //Assert the displayed message after handling the alert.
                cy.get("#confirm-alert-text").contains("You pressed OK!");
            });
    });
});
