/// <reference types="Cypress" />
describe("Test Add recipe form", () => {
    //Happy path scenario where all data is entered in expected format
    it.only("Should be able to successfully upload recipe after correctly filling in required data.", () => {
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
        cy.get('[placeholder="* Enter cooking time (enter number)"]').type(
            "15"
        );
        cy.get(
            '[placeholder="* Enter number of servings (enter number)"]'
        ).type("7", {
            force: true,
        });
        //Using relative XPaths to select DOM elements in ingredient input section.
        //Adding ingredient 1
        cy.xpath('//input[@id="quantity"]').type("2");
        cy.xpath('//input[@id="unit"]').type("cans");
        //cy.xpath('//input[@id="description"]').type("chickpeas drained");
        //If there wasn't an id attribute an XPath axis can be used to select the corresponding input element by using it's relation to the label element.
        cy.xpath(
            '//label[text()="Description:"]/following-sibling::input'
        ).type("chickpeas drained");
        cy.get(".btn--submit").click();
        //Adding ingredient 2
        cy.xpath('//input[@id="quantity"]').type("2");
        cy.xpath('//input[@id="description"]').type("cucumbers chopped");
        cy.get(".btn--submit").click();
        //Adding ingredient 3
        cy.xpath('//input[@id="quantity"]').type("2");
        cy.xpath('//input[@id="unit"]').type("tablespoons");
        cy.xpath('//input[@id="description"]').type("olive oil");
        cy.get(".btn--submit").click();
        //Adding ingredient 4
        cy.xpath('//input[@id="quantity"]').type("2");
        cy.xpath('//input[@id="unit"]').type("tablespoons");
        cy.xpath('//input[@id="description"]').type("red wine vinegar");
        cy.get(".btn--submit").click();
        //Adding ingredient 5
        cy.xpath('//input[@id="quantity"]').type("1");
        cy.xpath('//input[@id="unit"]').type("teaspoon");
        cy.xpath('//input[@id="description"]').type("dried oregano");
        cy.get(".btn--submit").click();
        //Adding ingredient 6
        cy.xpath('//input[@id="quantity"]').type("0.5");
        cy.xpath('//input[@id="unit"]').type("teaspoon");
        cy.xpath('//input[@id="description"]').type("salt");
        cy.get(".btn--submit").click();
        //Adding ingredient 7
        cy.xpath('//input[@id="quantity"]').type("0.25");
        cy.xpath('//input[@id="unit"]').type("teaspoon");
        cy.xpath('//input[@id="description"]').type(
            "freshly ground black pepper"
        );
        cy.get(".btn--submit").click();
        //Adding ingredient 8
        cy.xpath('//input[@id="quantity"]').type("0.5");
        cy.xpath('//input[@id="unit"]').type("cup");
        cy.xpath('//input[@id="description"]').type(
            "pitted Kalamata olives halved"
        );
        cy.get(".btn--submit").click();
        //Adding ingredient 8
        cy.xpath('//input[@id="quantity"]').type("1.5");
        cy.xpath('//input[@id="unit"]').type("cup");
        cy.xpath('//input[@id="description"]').type("feta cheese");
        cy.get(".btn--submit").click();
        //Upload recipe
        cy.get(".upload__btn").click();
    });
    //Unhappy path scenario where servings number is missing
    it("Should not be able to successfully upload recipe missing servings data.", () => {
        //Open "forkify" site
        cy.visit("https://forkify-k-project.netlify.app/");
        //Click on add recipe button
        cy.get(".nav__btn--add-recipe").click();
        //Enter Recipe Data
        cy.get('[placeholder="* Enter recipe title"]').type(
            "Wax Beans With Mint"
        );
        cy.get('[placeholder="* Enter recipe URL"]').type(
            "https://www.simplyrecipes.com/recipes/wax_beans_with_mint/"
        );
        cy.get('[placeholder="* Enter recipe image"]').type(
            "https://www.simplyrecipes.com/thmb/6Pusa_F60eZ9wqyqR9Fy3rmOkEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mint-Wax-Beans-Lead-3-b94458255bbc493f8d6e871f559de347.jpg"
        );
        cy.get('[placeholder="* Enter recipe publisher"]').type(
            "https://www.simplyrecipes.com/"
        );
        cy.get('[placeholder="* Enter cooking time (enter number)"]').type(
            "15"
        );
        //Adding ingredient 1
        cy.xpath('//input[@id="quantity"]').type("8");
        cy.xpath('//input[@id="unit"]').type("ounces");
        cy.xpath('//input[@id="description"]').type("wax beans");
        cy.get(".btn--submit").click();
        //Adding ingredient 2
        cy.xpath('//input[@id="quantity"]').type("2");
        cy.xpath('//input[@id="unit"]').type("tablespoons");
        cy.xpath('//input[@id="description"]').type("olive oil");
        cy.get(".btn--submit").click();
        //Adding ingredient 3
        cy.xpath('//input[@id="quantity"]').type("1");
        cy.xpath('//input[@id="unit"]').type("can");
        cy.xpath('//input[@id="description"]').type("tomatoes");
        cy.get(".btn--submit").click();
        //Adding ingredient 4
        cy.xpath('//input[@id="quantity"]').type("0.5");
        cy.xpath('//input[@id="unit"]').type("teaspoon");
        cy.xpath('//input[@id="description"]').type("salt");
        cy.get(".btn--submit").click();
        //Adding ingredient 5
        cy.xpath('//input[@id="quantity"]').type("0.25");
        cy.xpath('//input[@id="unit"]').type("teaspoon");
        cy.xpath('//input[@id="description"]').type(
            "freshly ground black pepper"
        );
        cy.get(".btn--submit").click();
        //Upload recipe
        cy.get(".upload__btn").click();
    });
    //Unhappy path scenario where wrong format is used when filling in ingredient data.
    it("Should get message 'Wrong ingredient format! Please use correct format :)' when submitting ingredient data.", () => {
        //Open "forkify" site
        cy.visit("https://forkify-k-project.netlify.app/");
        //Click on add recipe button
        cy.get(".nav__btn--add-recipe").click();
        //Enter Recipe Data
        cy.get('[placeholder="* Enter recipe title"]').type(
            "Wax Beans With Mint"
        );
        cy.get('[placeholder="* Enter recipe URL"]').type(
            "https://www.simplyrecipes.com/recipes/wax_beans_with_mint/"
        );
        cy.get('[placeholder="* Enter recipe image"]').type(
            "https://www.simplyrecipes.com/thmb/6Pusa_F60eZ9wqyqR9Fy3rmOkEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mint-Wax-Beans-Lead-3-b94458255bbc493f8d6e871f559de347.jpg"
        );
        cy.get('[placeholder="* Enter recipe publisher"]').type(
            "https://www.simplyrecipes.com/"
        );
        cy.get('[placeholder="* Enter cooking time (enter number)"]').type(
            "15"
        );
        cy.get(
            '[placeholder="* Enter number of servings (enter number)"]'
        ).type("7", {
            force: true,
        });
        //Adding ingredient 1
        cy.xpath('//input[@id="quantity"]').type("2");
        cy.xpath('//input[@id="unit"]').type("cans");
        cy.xpath('//input[@id="description"]').type("chickpeas drained");
        cy.get(".btn--submit").click();
        //Adding ingredient 2
        cy.xpath('//input[@id="quantity"]').type("2");
        cy.xpath('//input[@id="description"]').type("cucumbers; chopped");
        cy.get(".btn--submit").click();
        //Adding ingredient 3
        cy.xpath('//input[@id="quantity"]').type("two");
        cy.xpath('//input[@id="unit"]').type("tablespoons");
        cy.xpath('//input[@id="description"]').type("olive oil");
        cy.get(".btn--submit").click();
        //Upload recipe
        cy.get(".upload__btn").click();
    });
});
