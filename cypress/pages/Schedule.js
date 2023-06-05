class Schedule {
    getMainContainer() {
        return cy.get(".schedule");
    }
    verifyMainContainer() {
        cy.log(`Verifying weekly schedule main container.`);
        expect(this.getMainContainer()).to.exist;
        //Display main schedule container.
        this.getMainContainer().invoke("show");
        cy.log("Main schedule container is displayed.");
    }
}
module.exports = new Schedule();
