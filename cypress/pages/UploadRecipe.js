class UploadRecipe {
    getMainContainer() {
        return cy.get(".add-recipe-window");
    }
    getHeadings() {
        return cy.get(".upload__heading");
    }
    verifyHeadings() {
        cy.log("Verifying number and content of main headings.");
        this.getHeadings().should("have.length", 2);
        this.getHeadings().each(($el, index, $list) => {
            if (index === 0) cy.wrap($el).should("have.text", "Recipe data");
            else cy.wrap($el).should("have.text", "Ingredients");
        });
    }
}
module.exports = new UploadRecipe();
