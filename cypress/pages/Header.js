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
}
module.exports = new Header();
