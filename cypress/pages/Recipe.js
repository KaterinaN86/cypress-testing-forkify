/// <reference types="Cypress" />
class Recipe {
    getMessageContainer() {
        return cy.get("div.message");
    }

    getMessageElement() {
        return cy.xpath('//p[@id="message-text"]');
    }

    verifyMessageContainerExists() {
        expect(this.getMessageContainer()).to.exist;
    }
    verifyMessageElementExists() {
        expect(this.getMessageElement()).to.exist;
    }
    verifyMessageText() {
        this.getMessageElement().then(($value) => {
            const textValue = $value.text();
            cy.wrap(textValue).as("wrapValue");
        });
        cy.log(this.wrapValue);
    }
}
module.exports = new Recipe();
