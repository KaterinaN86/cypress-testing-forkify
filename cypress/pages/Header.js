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

    verifyLogo() {
        this.getLogo().then(($img) => {
            expect($img).to.have.attr("src", "/logo.9272a069.png");
        });
        cy.log("App logo verified!");
    }

    verifyMainContainer() {
        expect(this.getMainContainer()).to.exist;
        cy.log("Main container verified!");
    }

    verifyNavItems(items) {
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

    clickRandomNavItemElement(items) {
        let randomIndex = Math.floor(Math.random() * items.length);
        cy.log("Generated index: " + randomIndex);
        cy.log("Click on random element from nav menu.");
        this.getNavItemElements().each(($el, index, $list) => {
            randomIndex = 0;
            if (index === randomIndex) {
                cy.wrap($el).find(".nav__btn").click({ timeout: 5000 });
                cy.log("Selected: " + items[randomIndex] + " from nav menu.");
                //Verify content for clicked item is displayed.
                this.verifyContentAfterClick(randomIndex);
            }
        });
    }

    verifyContentAfterClick(index) {
        let haveMatched = true;
        switch (index) {
            case 0: {
                cy.log("Upload recipe");
                uploadRecipe.getMainContainer();
                uploadRecipe.verifyHeadings();
                break;
            }
            case 1: {
                cy.log("Bookmarks");
                expect(bookmarks.getMainContainer()).to.exist;
                break;
            }
            case 2: {
                cy.log("Weekly schedule");
                expect(schedule.getMainContainer()).to.exist;
                break;
            }
            case 3: {
                cy.log("Shopping list");
                expect(shoppingList.getMainContainer()).to.exist;
                break;
            }
            default: {
                let haveMatched = false;
            }
        }
        if (haveMatched) {
            cy.get(".overlay").forceClick("topLeft");
        }
    }
}
module.exports = new Header();
