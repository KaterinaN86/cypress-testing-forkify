/// <reference types="Cypress" />

class Recipe {
    getMessageContainer() {
        return cy.get("div.message");
    }

    getMessageElement() {
        return cy.get("#message-text");
    }

    getMainContainer() {
        return cy.get(".recipe");
    }

    getDirectionsButton() {
        return cy.get(".recipe__btn");
    }
    getMessageText() {
        this.getMessageElement().invoke("text").as("messageText");
        cy.get("@messageText").its("length").should("be.gt", 5);
    }

    getBookmarkButton() {
        return cy.get("button[class='btn--round btn--bookmark tooltip']");
    }

    getTitle() {
        return cy.get(".recipe__title > span");
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

    logRecipeTitle() {
        this.getTitle().then(($title) => {
            cy.log("Recipe title: " + $title.text());
        });
    }
    /**
     * Adds active recipe to bookmarks list. Before adding recipe a check needs to be performed to make sure it isn't already bookmarked.
     */
    addToBookmarks() {
        //Selecting bookmark image element.
        this.getBookmarkButton()
            .find("use")
            .should("have.attr", "href")
            .then(($href) => {
                //If href value of bookmark icon ends with fill, recipe is already bookmarked.
                if ($href.endsWith("-fill")) {
                    this.logRecipeTitle();
                    cy.log(`Recipe already bookmarked!`);
                }
                //Adding recipe to bookmarks.
                else {
                    this.getBookmarkButton().click();
                    this.logRecipeTitle();
                    cy.log("Recipe added to bookmarks.");
                }
            });
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
        //Clicking on button directions redirects user to another page.
        cy.log("Click on 'Directions' button.");
        this.getDirectionsButton().invoke("removeAttr", "target").forceClick();
        //Redirecting user back to base URL.
        cy.go("back");
        //Verifying URL.
        cy.url().should("include", "forkify");
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
