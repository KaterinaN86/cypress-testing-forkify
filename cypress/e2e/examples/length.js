/// <reference types="cypress" />

describe("Find length and store in variable for usage in different tests", () => {
    let length;
    beforeEach(() => {
        cy.visit("https://www.tradeling.com/ae-en/catalog/audio-studio");
    });
    //Counts dl elements with class 'chakra-stack.css-ioc31s' that contain dd elements with text 'United Arab Emirates'.
    it("When expected length is not known", () => {
        cy.get("dl.chakra-stack.css-ioc31s")
            .find('>dd:contains("United Arab Emirates")')
            .then(($value) => {
                length = $value.length;
            });
    });
    it("Printing length", () => {
        cy.log("*** length obtained is *** " + length);
    });
});
