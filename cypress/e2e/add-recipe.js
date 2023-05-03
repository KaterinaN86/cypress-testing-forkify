/// <reference types="Cypress" />
describe("Test Add recipe form", () => {
  //Happy path scenario where all data is entered in expected format
  it("Should be able to successfully upload recipe after correctly filling in required data.", () => {
    //Open "forkify" site
    cy.visit("https://forkify-k-project.netlify.app/");
    //Click on add recipe button
    cy.get(".nav__btn--add-recipe").click();
    //Enter Recipe Data
    cy.get('[placeholder="* Enter recipe title"]').type(
      "Mediterranean Chickpea Salad"
    );
    cy.get('[placeholder="* Enter recipe URL"]').type(
      "https://www.simplyrecipes.com/mediterranean-chickpea-salad-recipe-5197333"
    );
    cy.get('[placeholder="* Enter recipe image"]').type(
      "https://www.simplyrecipes.com/thmb/630qn4om590CyPU9oJPCIc0UDDw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mediterranean-Chickpea-Salad-LEAD-1-513acdc46f50442ca25d30e9d931b650.jpg"
    );
    cy.get('[placeholder="* Enter recipe publisher"]').type(
      "https://www.simplyrecipes.com/"
    );
    cy.get('[placeholder="* Enter cooking time (enter number)"]').type("15");
    cy.get('[placeholder="* Enter number of servings (enter number)"]').type(
      "7",
      {
        force: true,
      }
    );
    //Adding ingredient 1
    cy.xpath('//input[@id="quantity"]').type("2");
    cy.xpath('//input[@id="unit"]').type("tablespoons");
    cy.xpath('//input[@id="description"]').type("olive oil");
    cy.get(".btn--submit").click();

    //Adding ingredient 2
    cy.xpath('//input[@id="quantity"]').type("2");
    cy.xpath('//input[@id="unit"]').type("tablespoons");
    cy.xpath('//input[@id="description"]').type("red wine vinegar");
    cy.get(".btn--submit").click();
  });
});
