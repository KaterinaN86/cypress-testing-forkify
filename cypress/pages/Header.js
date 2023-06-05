import uploadRecipe from "../pages/UploadRecipe.js";
import bookmarks from "../pages/Bookmarks.js";
import schedule from "../pages/Schedule.js";
import shoppingList from "../pages/ShoppingList.js";
class Header {
    getMainContainer() {
        return cy.get(".header");
    }
    getLogo() {
        return cy.get(".header__logo");
    }
    getSearchForm() {
        return cy.get("form.search");
    }
    getNavContainer() {
        return cy.get(".nav");
    }
    //Default command timeout can also be overwritten for a specific get method call.
    getNavItemElements() {
        return cy.get(".nav__item", { timeout: 5000 });
    }

    getBookmarksButton() {
        return cy.get("#bookmarksMenuEl");
    }

    verifyLogo() {
        cy.log("Verifying app logo.");
        this.getLogo().then(($img) => {
            expect($img).to.have.attr("src", "/logo.9272a069.png");
        });
        cy.log("App logo verified!");
    }

    verifyMainContainer() {
        cy.log("Verifying header main container");
        expect(this.getMainContainer()).to.exist;
        cy.log("Main container verified!");
    }
    /**
     * Selects all elements from menu and verifies text.
     * @param {Array of String objects} items, data from cypress fixture "nav-items.json".
     */
    verifyNavItems(items) {
        cy.log(`Verify nav menu elements text matches test data.`);
        //Select all menu elements and loop over list
        this.getNavItemElements().each(($el, index, $list) => {
            //wrapping each element so command chain can continue
            cy.wrap($el)
                //select span child element
                .find("span")
                //access span text value
                .then(($spanEl) => {
                    //perform assertion using fixture data passed as argument.
                    expect($spanEl.text()).to.equal(items[index]);
                });
        });
    }

    clickRandomNavItemElement(data) {
        let randomIndex = Math.floor(Math.random() * data.navItem.length);
        cy.log("Generated index: " + randomIndex);
        cy.log("Click on random element from nav menu.");
        this.getNavItemElements().each(($el, index, $list) => {
            if (index === randomIndex) {
                cy.wrap($el).find(".nav__btn").as("menuBtn");
                cy.get("@menuBtn").realHover().click({ release: false });
                //Take a screenshot after clicking on random element.
                cy.screenshot();
                cy.log(
                    "Selected: " + data.navItem[randomIndex] + " from nav menu."
                );
                //Verify content for clicked item is displayed.
                this.verifyContentAfterClick(index, data);
            }
        });
    }
    /**
     * Helper method that verifies selected menu element has triggered expected action.
     * @param {int} index of the selected element from the menu.
     * @param {Object} data read using fixtures, used to verify error message in bookmarks.
     */
    verifyContentAfterClick(index, data) {
        //Helper variable used to indicate weather any option has been selected.
        let haveMatched = true;
        switch (index) {
            case 0: {
                uploadRecipe.getMainContainer().invoke("show");
                uploadRecipe.verifyHeadings();
                break;
            }
            case 1: {
                bookmarks.verifyBookmarksContainer();
                bookmarks.verifyErrorMessage(data.bookmarksMessage);
                break;
            }
            case 2: {
                schedule.verifyMainContainer();
                break;
            }
            case 3: {
                //Verify and display shopping list window.
                shoppingList.verifyMainContainer();
                //Close shopping list window.
                shoppingList.getCloseButton().forceClick();
                break;
            }
            default: {
                //If none of the cases described was executed.
                cy.log(`No menu element has been selected!`);
                haveMatched = false;
            }
        }
        //Close upload recipe modal window.
        if (haveMatched && index === 0) {
            //Select the overlay element and click on it to close modal window.
            cy.get(".overlay").forceClick("topLeft");
        }
    }
}
module.exports = new Header();
