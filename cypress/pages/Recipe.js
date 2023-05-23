/// <reference types="Cypress" />
class Recipe {
    getMessageContainer() {
        return cy.get("div.message");
    }

    getMessageElement() {
        return cy.get("#message-text");
    }

    getDirectionsButton() {
        return cy.get(".recipe__btn");
    }

    verifyMessageContainerExists() {
        expect(this.getMessageContainer()).to.exist;
    }
    verifyMessageElementExists() {
        expect(this.getMessageElement()).to.exist;
    }
    verifyMessageText() {
        //By calling the "then()" function the promise returned by Cypress is being handled and $value is yielded as a result.  Whenever there is a need to act on the subject yielded by the command chain add .then() to your command chain. When the previous command resolves, it will call your callback function with the yielded subject as the first argument ($value in this case).
        this.getMessageElement().then(($value) => {
            //Using cypress alias "wrapValue" to store message text.
            //Cypress method "wrap()" enables us to yield the element passed as a parameter ($value) so that Cypress commands can be chained further to perform operations. If the element is directly used Jquery commands are chained instead.
            cy.wrap($value.text()).as("wrapValue");
            //JQuery assertion.// //Using JQuery for message text assertion.
            // expect($value.text()).to.contain(
            //     "Start by searching for a recipe or an ingredient. Have fun!"
            // );
            cy.wrap($value).contains(
                "Start by searching for a recipe or an ingredient. Have fun!"
            );
        });
    }

    getMessageText() {
        this.getMessageElement().invoke("text").as("messageText");
        cy.get("@messageText").its("length").should("be.gt", 5);
    }

    verifyDirectionsButton() {
        cy.log("Verifying directions button");
        this.getDirectionsButton()
            .should("have.attr", "target", "_blank")
            .children()
            .filter("span")
            .should("have.text", "Directions");
    }
    clickDirectionsButton() {
        cy.log("Click on 'Directions' button.");
        this.getDirectionsButton().invoke("removeAttr", "target").forceClick();
        cy.go("back");
    }

    handleUncaughtException() {
        // this event will automatically be unbound when this
        // test ends because it's attached to 'cy'
        cy.on("uncaught:exception", (err, runnable) => {
            expect(err.message).to.include(
                "Cannot read properties of null (reading 'postMessage')"
            );
            // return false to prevent the error from
            // failing this test
            return false;
        });
    }
}
module.exports = new Recipe();
