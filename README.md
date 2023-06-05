# Project for testing [https://forkify-k-project.netlify.app/](https://forkify-k-project.netlify.app/) using Cypress automation framework

-   **Cypress** is a next generation front end testing tool built for the modern web, used for setting, writing, running and debugging tests. It is open source and runs on Windows, Linux, and macOS. It is often compared to Selenium, however, it runs inside the browser and it uses JavaScript and nodeJS. For this purpose it is needed to download and install node JS. Git also needs to be installed on our machine in order to be able to use Git Bash for running commands with Visual Studio Code terminal (this is a recommendation, another IDE can also be used).
-   **End to end testing** is a software testing method that evaluates the entire application from start to finish, in an environment that is similar to production. It checks the integration of the software's dependencies and the flow of data for all kinds of user tasks and processes. It occurs after integration testing and system integration testing, which test the individual components of a system. It is necessary to ensure that a complete system or application interacts correctly with different dependent systems and apps for a core enterprise business process. It is not a form of testing a completed product, but a way of assessing the working order of a complex product under real-world scenarios.
-   Cypress enables **all types of tests**: end-to-end tests, component tests, integration tests, unit tests.

## Cypress features:

1. **Time Travel**: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
2. **Debuggability**: offers readable errors and stack traces for fast debugging.
3. **Automatic Waiting**: cypress automatically waits for commands and assertions before moving on.
4. **Spies, Stubs, and Clocks**: features to verify and control the behavior of functions, server responses, or timers.
5. **Network Traffic Control**: control, stub, and test edge cases without involving a server.
6. **Consistent Results**: fast, consistent and reliable tests without Selenium or WebDriver.
7. **Screenshots and Videos**: screenshots taken automatically on failure, or videos of an entire test suite when run from the CLI. Screenshots and videos can be recorded to Cypress Cloud and stored with test results for zero-configuration debugging.
8. **Cross Browser Testing**: tests can run using Firefox and Chrome-family browsers (including Edge and Electron) locally and optimally in a Continuous Integration pipeline.
9. **Smart Orchestration**: by setting up to record to Cypress Cloud, a test suite can be parallelized, failed specs can rerun first with Spec Prioritization, and test runs can be canceled on failures with Auto Cancellation for tight feedback loops.
10. **Flake Detection**: enables discovering and diagnosing unreliable tests with Cypress Cloud's Flaky test management.

## Setting up our project

1.  Root project directory **cypress-testing-forkify** is created. This test project was built by using **Visual Studio Code** IDE which also needs to be installed.
2.  Initializing **package.json** file by using the following command via **Git Bash** terminal (Terminal -> New Terminal -> Select Bash on bottom right): `npm init`.
3.  Install cypress framework using this command: `npm install --save-dev cypress@12.13.0`. This will add **node_modules** directory in the project root directory. When copying this project this directory doesn't have to be transferred together with project content because it can easily be added in the same manner as described above.

    -   **Note:** Install latest version, it doesn't match the one in [https://www.udemy.com/course/cypress-io-master-class](https://www.udemy.com/course/cypress-io-master-class) but course is still easy to follow.

4.  Running **Cypress App**: `./node_modules/.bin/cypress open`. This will start cypress-automation-framework (master) page where we can select E2E tests from available two options. Selecting it will add all necessary configuration files. We can select to start the test runner with chrome tests and then create example specs (tests). In our project directory, this will add the cypress directory where we can find the specs in the e2e directory. Following Version 10, Cypress test runner is called the **Cypress App**. Cypress app provides easy way to execute tests, each file displayed on the app’s UI is a test, and can be run in the Cypress App by simply clicking on it.

-   In the **package.json** file commands for starting Cypress can be added by adding this line to the scripts section: `"cypress:open": "cypress open"`. This way, Cypress can be started by simply writing: `npm run cypress:open` in the Bash terminal.

-   When we visit a site while performing tests with cypress, the framework picks up on some additional information like XHR logs and can detect some errors on loading which is particularly useful for developers. In the Cypress App executed cypress commands are written in bold text. - Tests can be run in different browsers and selecting a browser is very simple by using the Cypress App.

    ![Browser selection in Cypress App](./cypress/fixtures/readme-images/browser-selection.png)

5. Overriding default settings

    Default settings can be overridden by editing the - **Note:** In the example tests/specs the extension **cy.js** is used. To use another extension we need to modify file: **cypress.config.js** by adding line:

    ```
      specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    ```

    The stars are wild cards (any folder \*_, any file _). We add this line to the e2e block. In this file settings regarding timeouts can also be defined.

In the main panel of the Cypress App there is Settings tab on the menu. All of the settings that can be modified are displayed here, and the ones that have been changed are highlighted as shown in the image below:

![Cypress settings section in Cypress App](./cypress/fixtures/readme-images/override-settings.png)

-   **Note**: To exclude group of files, so that they are not executed as tests, **excludeSpecPattern** settings is defined in the **cypress.config.js** file:

![Excluding a group of tests](./cypress/fixtures/readme-images/cypress-config-example.png)

## Project structure

-   Tests (specs) can be found in directory **cypress/e2e** (formally called **integration**).
-   **Fixtures** directory is used to store data providers, files containing data that can be used as input for tests.
-   Common commands that are very likely to be used in multiple tests are stored in the **support** directory, more precisely in the **commands.js** file. This prevents repeating code.
-   In that same directory is the **e2e.js** file where we can add external plugins that can be used in our framework. An example of that is adding the **XPath** plugin by adding line: `require("cypress-xpath");` to the file content.
-   If there are files downloaded while certain tests are executed they will be stored in the **downloads** folder.
-   As discussed previously, configuration properties are defined in the **cypress.config.js** file. Example:

    ![Overwriting settings in the cypress.config.js file](./cypress/fixtures/readme-images/config-overwriting.png)

As shown in the image above, the baseURL of the application under test can also be defined in this file, by adding line:

```
baseUrl: "https://forkify-k-project.netlify.app/"
```

-   Following execution, **json reports** can be saved in the **results** directory.
-   In the **screenshots** directory images of executed tests are stored. Documentation with detailed explanation can be found here: [https://docs.cypress.io/guides/references/configuration#Screenshots](https://docs.cypress.io/guides/references/configuration#Screenshots).

    -   **Note**: to take a test screenshot Cypress method **screenshot()** needs to be used individually or on a specific element. After the test is successfully executed, screenshot of the selected element can be found in the **screenshots** directory:

    ![Path of screenshots directory](./cypress/fixtures/readme-images/screenshots-dir.png)

    -   In method **inputSearchQuery** of class **cypress/pages/Search.js** the **screenshot** method is called and a screenshot is taken right after query text is typed inside the search text field.

    ```
        inputSearchQuery(text) {
        cy.log("Enter query text for performing search operation.");
        this.getInputTextField().type(text);
        cy.screenshot();
        }
    ```

    Cypress can also take screenshots of tests on failure. By setting the **screenshotOnRunFailure** property to **true** in the **cypress.config.json** file this option is enabled and screenshot will be taken on failure only when the test is executed by running the **cypress run** command using npm via the bash command terminal. For example, if we add **2** at the end of the text **Search** in the following assertion ` cy.wrap($searchButton).contains("Search2", { timeout: 3000 });` and then run the test by using: `npm run triggerSearchTest-chrome` a screenshot will be saved after the test has failed.

    Another useful option is **trashAssetsBeforeRuns** which will delete previous screenshots before saving new ones.

-   Cypress also has the capability to record text execution and videos are saved in the corresponding **videos** directory.

## Using **Mocha**

-   Cypress framework is a JavaScript-based end-to-end testing framework built on Mocha – a feature-rich JavaScript test framework running on **Node.js** ( an open-source, cross-platform, asynchronous event-driven JavaScript runtime that executes code outside of the browser) and in the browser, making asynchronous testing simple and convenient. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub, Mocha comes pre bundled with two function calls:

    -   **describe()**: used to group tests in Mocha, basically groups a series of tests together. This function takes two arguments: the name of the test group and the callback function (function accessible by another function, called after the first function has successfully finished executing).
    -   **it()**: a way to describe each individual test case which is nested inside the describe block. **it()** should be described in a way that makes sense for the given test case.

## Basic Cypress commands

To be able to use Cypress commands it is necessary to specify the file will be referencing Cypress:

```
/// <reference types="Cypress" />
```

After adding reference, Visual Studio Code enables easy access to all Cypress commands used to write tests, like **get()** for accessing DOM elements by using selectors or **visit()** for accessing a specific URL.

![Using Cypress commands](./cypress/fixtures/readme-images/cypress-commands.png)

## Web elements and selectors

-   The **DOM (Document Object Model)** defines a standard for accessing documents, more precisely a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document. If web content is written in Java Script for example, it is the interface between that code and the HTML documents that are rendered in or by the browser. A tree-like structure made out of nodes is generated for HTML documents, called the **DOM tree**. The DOM tree represents the elements as nodes and there is a hierarchy (for example, element HTML is the parent of head and body which are siblings). So basically, web elements are accessed by using the generated nodes in the DOM tree structure.
-   In Cypress, web elements are accessed by using selectors. When a test is run using the Cypress App a tool for automatically defining selectors is available. First, the tool is activated and then by clicking on a specific element a selector is generated:

    ![Cypress App selector generating](./cypress/fixtures/readme-images/generating-selectors.png)

    This selector is then used to access the specified element: `cy.get('#contact-us > .thumbnail').click();`.

### Using options with **click()**

-   Sometimes an element is visible in the DOM but can not be accessed because of a certain setting. In this case, certain options need to be passed together with the click command. If an element is not accessible the **force** option is used which forces the action and disables the waiting for actionability property: `cy.get('textarea.feedback-input').type('Enter comment here', {force:true})`.

-   In the script **cypress/e2e/search-recipe.js** a test suite is written for testing the **Search** feature of the demo app.

    -   The first test describes a happy path where a list of recipe previews is shown in the search results area of the page.
    -   The second test describes an unhappy path where a search when query text **yellow** is entered gives no results. Corresponding message is also displayed to the user.

-   **Note**: By using the \*\*only\*\* command Mocha is directed to execute only that test. To execute all test cases in test suite, remove **only** after **it()** command in the first test of the suite. The **skip** commands will cause Cypress to ignore that test case. More about Mocha bundled libraries can be found here [https://docs.cypress.io/guides/references/bundled-libraries#Mocha](https://docs.cypress.io/guides/references/bundled-libraries#Mocha).

### Selectors

To easily define correct selectors Chrome plugin **Ranorex celocity** can be added to the browser. When using Ranorex Celocity in Chrome, an element can be selected using the **select element** tool (right-click -> inspect) and inspecting the element a type or attribute can be used, like so: `a > ul`. This means that an unordered list element will be selected that is embedded in an anchor element. In the Forkify app, `div > h4` can be used to select all recipes that appear in search results. After that, several selector options are offered in the **List of selectors** area. To select a specific heading of a recipe in search results, following XPath: `(//h4[text()="Mediterranean Chickpea Salad"])` can be used.

![Using Ranorex Celocity addon in Chrome](./cypress/fixtures/readme-images/ranorex-celocity.png)

-   **Note**: it is highly advisable to add custom attributes (like name, id, specific class and so on) when creating web elements so they are easily accessed when testing.

-   Generated selectors are not robust enough because they often don't use specific attributes for the element that needs to be selected. For example, the following generated selector: `cy.get(".info_links_footer > :nth-child(5) > a")` can easily select the wrong element if the order of elements in the DOM is modified.

-   A **class selector** is a name preceded by a full stop (“.”), example: **.subcategories**.
    -   **Note**: a class selector is a typical CSS selector. When using CSS selector the **\$** symbol stands for **ends-with**, the **\^** symbol stands for **starts-with** and the **\*** stands for **contains**. For example: `a[class^="twitter"]` will select an anchor element with class attribute starting with **twitter** and selector `button[class$="add-recipe"]` will select button element with class attribute ending in **add-recipe** while selector `a[href*='product/category&path=']` selects anchor element with href attribute that contains text **product/category&path=**.
-   An **ID selector** is a name preceded by the hash character (“#”), example **#homepageHeader**. Documentation on CSS selectors: [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) and here [https://www.tutorialspoint.com/xpath/index.htm](https://www.tutorialspoint.com/xpath/index.htm).
    -   **Note**: While ID is used to identify only one element, a class can be used to identify more than one element. A combination of these selectors can also be used, as shown in example above: `'#contact-us > .thumbnail'`. This way, a child element, with class attribute ".thumbnail", of of the element with id "contact-us" is selected.
-   **XPath** selectors. Full documentation can be found here [https://www.w3schools.com/xml/xpath_syntax.asp](https://www.w3schools.com/xml/xpath_syntax.asp). These selectors usually start with **//** which means they are relative and all elements will be selected no matter where they are in the document. For absolute XPath **/** is used and elements are selected starting from the root of the document. The star symbol (**\***) represents a wild card. The **@** symbol is used to access an attribute: `//input[@id="quantity"]`. - An XPath expression often contains functions, like for example the string function **text()**: `//p[text()="Start by searching for a recipe or an ingredient. Have fun!"]`, **contains()**: `//div[contains(@class,"search")]` or **starts-with()**: `//input[starts-with(@placeholder,"Search")]`.
-   **XPath Axes** [https://www.w3schools.com/xml/xpath_axes.asp](https://www.w3schools.com/xml/xpath_axes.asp) are also very useful when writing XPath expressions. An axis is used to locate nodes relative to the current node on the tree. Basically, relations between nodes in the DOM tree can be used to select an element, for example: `//input[@id="description"]/following-sibling::textarea`.

### Example using **XPath** plugin for VS Code

-   In order to use **XPath** selectors in Cypress a plugin [https://www.npmjs.com/package/@cypress/xpath](https://www.npmjs.com/package/@cypress/xpath) needs to be added in VS Code, using command: `npm install --save-dev @cypress/xpath`.
-   Inside the **e2e.js** file (Located inside the support folder), simply add: `require('@cypress/xpath')`;
-   In the script **cypress/e2e/add-recipe.js** a test suite is written for testing the **Add Recipe** feature of the demo app.

    -   The first test describes a happy path where all data is entered in the correct format. After uploading entered data corresponding message of successful recipe upload is displayed.
    -   The next two tests describe unhappy paths where not all data is entered and data is entered in invalid format. In the first case, user is notified about missing data and in the second a message is displayed stating that format used to enter ingredient data is invalid.
    -   The last tests case describes a happy path for deleting the recipe the user has entered. This test case is added to avoid duplicate data anytime the suite is executed.

### Referencing windows to perform document assertion

More on this topic can be found in the Cypress documentation [https://docs.cypress.io/api/commands/document#Syntax](https://docs.cypress.io/api/commands/document#Syntax). In the **cypress/e2e/testHomePage.js** suite there is an example for referencing windows an document assertion:

```
it("Should verify base URL, page title and document charset property.", () => {
cy.log("Verifying base URL");
//Accessing URL of the page that is currently active and verifying it using fixture.
cy.url().should("eq", data.URL);
cy.log("Verifying page title.");
//Accessing document.title property of the page that is currently active.
cy.title().should("include", data.pageTitle);
cy.log("Verifying document charset property");
//Accessing window document object and verifying charset property.
cy.document().should("have.property", "charset").and("eq", "UTF-8");
});
```

## Cypress limitations

Cypress changes its own host URL to match that of your applications. With the exception of cy.origin, Cypress requires that the URLs navigated to have the same superdomain for the entirety of a single test.

If you attempt to visit two different superdomains, the cy.origin command must be used to wrap Cypress commands of the second visited domain. Otherwise, Cypress commands will timeout after the navigation and will eventually error. This is because the commands that were expected to run on the second domain are actually being run on the first domain.

-   **Note: ** set these properties in the **e2e** block of the **cypress.config.js** file:

```
chromeWebSecurity: false,
experimentalModifyObstructiveThirdPartyCode: true
```

When clicking on a link element that leads to another superdomain the **target** attribute can be removed and the test will pass: `this.getDirectionsButton().invoke("removeAttr", "target").click()`. The **origin** command has also been added in order to be able to write tests that can access more than one URL with different origin [https://docs.cypress.io/api/commands/origin#Syntax](https://docs.cypress.io/api/commands/origin#Syntax).
In conclusion, if a link for accessing a different URL is available, it can be accessed by removing the target attribute. Otherwise, the cy.origin command can be used:

```
    it('Origin command', () => {
       cy.origin('webdriveruniversity.com', () => {
           cy.visit("/");
       })

       cy.origin('automationteststore.com', () => {
           cy.visit("/");
       })

```

## Promises in Cypress and the **wrap()** method.

Cypress runs asynchronously and promises are handled in the background. However, when the order of executions needs to be defined explicitly, **then()** can be used to handle promises. This topic is explained in detail here [https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Subject-Management](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Subject-Management).

-   **Note**: Class **cypress/pages/Search.js** contains a method that has an example of using **then()** method to handle a promise and control order of execution. Class **cypress/pages/SearchResults.js** contains examples of using promises to access values like the length of the yielded list of elements abd methods that clicks on a random element of the yielded list, that also requires using the **then()**method.

Cypress **wrap()** method is also often used to handle promisers, more precisely it is used to yield the object passed into 'wrap()'. If the object is a promise, it will yield its resolved value. It can be used with objects:

```
//Invoke the function on the subject in wrap and return the new value
const getName = () => {
  return 'Jane Lane'
}
cy.wrap({ name: getName }).invoke('name').should('eq', 'Jane Lane') // true
```

and also to wrap elements to continue the commands chain of execution:

```
cy.get('form').within(($form) => {
  // ... more commands

  cy.wrap($form).should('have.class', 'form-container')
})
```

You can wrap promises returned by the application code. Cypress commands will automatically wait for the promise to resolve before continuing with the yielded value to the next command or assertion. See [https://docs.cypress.io/examples/recipes#Logging-In](https://docs.cypress.io/examples/recipes#Logging-In) for the full example.

```
const myPromise = new Promise((resolve, reject) => {
  // we use setTimeout(...) to simulate async code.
  setTimeout(() => {
    resolve({
      type: 'success',
      message: 'It worked!',
    })
  }, 2500)
})

it('should wait for promises to resolve', () => {
  cy.wrap(myPromise).its('message').should('eq', 'It worked!')
})
```

## Invoke and alias

Invoke a function on the previously yielded subject.
If you want to get a property that is not a function on the previously yielded subject, use .its().
If you chain further commands off of .invoke(), it will be called multiple times. If you only want the method to be called once, end your chain with .invoke() and start fresh with cy afterwards.

```
cy.get('.input').invoke('val').should('eq', 'foo') // Invoke the 'val' function
cy.get('.modal').invoke('show') // Invoke the jQuery 'show' function
cy.wrap({ animate: fn }).invoke('animate') // Invoke the 'animate' function
```

-   In this first example a function **fn** is declared. Cypress method **wrap()** is then used to enable chaining. The invoke method yields the result of **foo** (which is a wrapper for **fn**) and at the end an assertion is made to confirm the result equals **bar**.

```
const fn = () => {
  return 'bar'
}

cy.wrap({ foo: fn }).invoke('foo').should('eq', 'bar') // true
```

-   Invoke can also be used with properties that are also functions:

```
cy.get('div.container')
  .should('be.hidden') // element is hidden
  .invoke('show') // call jquery method 'show' on the '.container'
  .should('be.visible') // element is visible now
  .find('input') // drill down into a child "input" element
  .type('Cypress is great') // and type text
```

-   **Note**: see **e2e/examples/alias-invoke.js** for more examples.

## Page Object Model pattern in Cypress and other practices for more efficient code

Page Object Model is a design pattern in the automation world which has been famous for its **easy maintenance** approach and **avoiding code duplication**. A page object is a class that represents a page in the web application. Under this model, the overall web application breaks down into logical pages. Each page of the web application generally corresponds to one class, but can even map to multiple classes also, depending on the classification of the pages. This Page class will contain all the locators of the WebElements of that web page and will also contain methods that can perform operations on those WebElements.

-   In the **cypress/pages** directory, example classes: **Bookmarks**, **HomePage**, **Header**, **Recipe**, **Search**, **SearchResults**, **Schedule**, **UploadRecipe**, **ShoppingList** are included.
-   The tests using these classes (pages) are: **testHeader**, **testSearch**, **testHomePage.js**, **testRecipeView.js** and **testSearchResults** correspondingly.

In order to be able to use the methods defined in separate classes in a specific test suite the module that contains that class needs to be imported. For example, in the **cypress/e2e/testSearchResults.js** test suite several classes are used and are imported with he following commands:

```
import searchResults from "../pages/SearchResults.js";
import search from "../pages/Search.js";
import recipe from "../pages/Recipe.js";
import bookmarks from "../pages/Bookmarks.js";
```

### **Cypress hooks**

Some test suites in this project contain **Cypress Hooks** ([https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks)) which are constructs used for performing a particular set of actions just **before/after each test case** or **before/after all the test cases** in the test suite. Usually when writing Cypress tests resetting the state after a test or test suite is not even necessary. Cypress already automatically enforces test isolation by clearing state before each test. Using **after** and **afterEach** should be done only when necessary to avoid trying to clean up state that is already cleaned up by Cypress automatically. A state cleanup is only required is if the operations that one test runs affect another test downstream. In conclusion, shared code should be run before tests and state cleanup is performed only when absolutely necessary.

-   **Note**: When writing tests the state of the application under test should always be taken into consideration. Tests should always be able to be run independently from one another and still pass. So creating tests with chained actions and assertions is better than crating several micro tests. For example, filling out a form, or entering a query and displaying some results is better done in one combined test together with assertions.

### **Cypress fixtures**

Cypress fixtures are used to load a fixed set of data located in a file.
Cypress **fixture** `cypress/fixtures/example.json` ([https://docs.cypress.io/api/commands/fixture#Syntax](https://docs.cypress.io/api/commands/fixture#Syntax)) is also used to store test data in **JSON** format, that is referenced in the tests enabling data-driven testing (same test can be performed several times using different tests of data, giving varying results).

-   **Note**: A good practice is to use fixtures with Cypress aliases.

### **Cypress custom commands**

Often certain logic needs to be executed several times in a test suite. It's good practice to load that logic in a custom command that can be called multiple times. Custom commands are defined in the **cypress/support/commands.js** file. Below is an example of a custom command for method **forceClick()**. This method can be used anytime there is a need to set the **force** property to true while performing click action. Default position is center, but can be specified otherwise on call.

```
Cypress.Commands.add(
    "forceClick",
    { prevSubject: "element" },
    (element, position = "center") => {
        return cy.wrap(element).click(position, { force: true });
    }
);
```

Documentation on Cypress custom commands: [https://docs.cypress.io/api/cypress-api/custom-commands#Syntax](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax).

-   **Note:** an example for using Cypress fixtures, aliases, custom commands and iterating over an array can be found in script: **cypress/e2e/examples/custom-commands/add-multiple-items-to-basket.js**.

### **Environment (global) variables**

Environment variables are also known as global because the value stored in such variable is accessible across different tests. Environment variables are declared in the **cypress.config.js** file:

![Declaring environment variables in cypress.config.js file](./cypress/fixtures/readme-images/environment-variables.png)

More on this topic can be found here: [https://docs.cypress.io/guides/guides/environment-variables.html#Setting](https://docs.cypress.io/guides/guides/environment-variables.html#Setting).

Environment variables can also be defined via command line:

```
./node_modules/.bin/cypress run --browser chrome --headed --spec cypress/e2e/webdriver-uni/contact-us.js --env first_name=Tim
```

## Handling alerts

Cypress automatically handles alerts, however events can still be handled to add logic to our tests [https://docs.cypress.io/api/cypress-api/catalog-of-events#Event-Types](https://docs.cypress.io/api/cypress-api/catalog-of-events#Event-Types).

-   Example for manually handling an alert:

```
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
```

-   **Note**: If there is a need to manually confirm od cancel an alert, event **window:confirm** is used as it provides the possibility of returning **false** when using the **then()** method to handle the event.
-   Handling events is also very useful for handling uncaught exceptions. An example can be found in the **cypress/pages/Recipe.js** class where method **handleUncaughtException()** is defined.
-   Alerts can also be handled by using a **stub**, as shown in \*\*cypress/e2e/examples/alerts/alerts-challenge.js\*\* [https://docs.cypress.io/api/commands/stub#Syntax](https://docs.cypress.io/api/commands/stub#Syntax)

## Mouse actions

-   An example can be found in script: **cypress/e2e/examples/mouse-actions.js**. In the example, mouse actions are performed by using the **trigger()** method [https://docs.cypress.io/api/commands/trigger#Syntax](https://docs.cypress.io/api/commands/trigger#Syntax). Most commonly used mouse actions include:

    1.  Scroll into view
    2.  Drag & Drop
    3.  Double click
    4.  Click and hold

### **Cypress real events**

This plugin is used in several tests to solve the issue with simulated cypress events, like **click**, **hover** and similar. Because event property `event.isTrusted` will be false by default, in some situations Cypress in unable to simulate the events in test scenarios. Full documentation can be found here: [https://github.com/dmtrKovalenko/cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events).

-   **Example test scenario that uses real events plugin**

    A positive test scenario is simulated. First, app header content is verified and after that random element from the menu is clicked. File **cyperss/e2e/testHeader.js** contains test suite. Test suite also uses class **cypress/pages/Header.js**.

## DOM traversal

-   An example that demonstrates most commonly used Cypress methods to traverse elements in the DOM can be found in script **cypress/e2e/examples/traversing-elements.js**. These methods are used to access an element based on its position in the DOM tree.

## Working with iframe

Even though Cypress does not provide native access to an embedded iframe (because it is a cross origin frame) elements it is still possible to use a workaround. More on working with embedded iframe can be found in the Cypress documentation [https://docs.cypress.io/guides/guides/web-security#Cross-origin-iframes](https://docs.cypress.io/guides/guides/web-security#Cross-origin-iframes). A workaround where the iframe element is accessed via the **contents()** method and the \<body\> tag can be found in **cypress/e2e/examples/iframe.js**.

## Checkboxes and radio buttons

To use Cypress methods for selection options listed with check boxes or radio buttons an element must be an `<input>` with type `check box` or `radio button` [https://docs.cypress.io/api/commands/check#Syntax](https://docs.cypress.io/api/commands/check#Syntax). Options can be checked by using specified value, type (for example: `[type="radio"]`), methods commonly used for DOM traversal like **first**, **next** and so on, selector **n-th child**

```
 cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
```

Method **should** is used for assertion with values **be.checked** or **not.be.checked** and so on.

-   **Example**: Find the checked option and verify it.

```
cy.get('#pick-fruit :checked').should('be.checked').and('have.value', 'apple')
```

The same methods can be used to test radio buttons. In the following example, a group of radio buttons is selected and from that group the button with index 1 is selected:

```
cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
```

State validation can easily be performed by using the **should()** method combined with the options like **not.be.checked**, **be.checked**, **be.unchecked**, **be.disabled**, **not.be.disabled**, **have.value**.

## Dropdown lists/menus

The method is very similar to working with checkboxes and radio buttons. Instead of **check()**, the **select()** method is used to select an `<option>` within a `<select>` element. Documentation can be found here [https://docs.cypress.io/api/commands/select](https://docs.cypress.io/api/commands/select).

```
//Selecting the <select> element by id and the <option> element by value.
cy.get('#dropdowm-menu-1').select('c#')
//Verifying selected option value.
cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
//Selecting by <option> test content and performing verification.
cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
```

## Autocomplete (Suggested) lists

In order to select an option from the list of suggestions method **each()** is used. File **cypress/e2e/examples/autocomplete-list.js** is an example of a test suite that uses this type of lists.

## Mouse actions

Working with mouse events requires using the **trigger()** method [https://docs.cypress.io/api/commands/trigger#Syntax](https://docs.cypress.io/api/commands/trigger#Syntax). File **cypress/e2e/examples/mouse-actions.js** contains test suite with mouse actions examples.

## Browser navigation

For this purpose methods **go()** and **reload()** are used. Syntax is explained in detail in Cypress documentation [https://docs.cypress.io/api/commands/go#Syntax](https://docs.cypress.io/api/commands/go#Syntax), [https://docs.cypress.io/api/commands/reload](https://docs.cypress.io/api/commands/reload). Arguments **back** and **forward** are typically used with method **go()** and after navigating to different page assertion of document URL can be performed using **should()** method.

```
    clickDirectionsButton() {
        //Clicking on button directions redirects user to another page.
        cy.log("Click on 'Directions' button.");
        this.getDirectionsButton().invoke("removeAttr", "target").forceClick();
        //Redirecting user back to base URL.
        cy.go("back");
        //Verifying URL.
        cy.url().should("include", "forkify");
    }
```

## Configuring and handling timeouts

### **URL timeouts**

Every time `cy.visit()` is used the default **pageLoadTimeout** property is applied (this can be defined in **cypress.config.js**). In order to explicitly set URL timeout the **timeout** property can be set when passing the options object in the **visit()** method [https://docs.cypress.io/api/commands/visit](https://docs.cypress.io/api/commands/visit).

```
    //Cypress hook used to call a function before each test is executed.
    beforeEach(function () {
        // runs before each test in the it block
        cy.log("Open base URL");
        //Explicitly set pageLoadTimeout
        cy.visit("/", { timeout: 5000 });
    })
```

### **Overwriting _defaultCommandTimeout_ setting**

A default command timeout is the time Cypress will give a certain command to execute before it is considered to have failed. It can be defined explicitly so that it will overwrite the default Cypress property displayed in the **Settings** panel of the Cypress App.

```
//Explicitly set commandTimeout
Cypress.config("defaultCommandTimeout", 3000);
```

Depending on where the command is used the default command timeout can be overwritten for the whole test suite or a specific test. If the line above is added right after the describe block is opened it will overwrite the default command timeout for the entire test suite. A specific timeout can also be applied in a command chain so that way it will affect only the execution of that specific chain of commands.

```
    clickSearchButton() {
        cy.log("Click on search button.");
        //Overwriting default command timeout by setting the timeout property when  calling 'click' method.
        this.getSearchButton().click({ timeout: 3000 });
        //Example of handling a promise so we can control order of execution.
        this.getSearchButton().then(($searchButton) => {
            console.log(`Clicked on button with text: ${$searchButton.text()}`);
            //Timeouts can also be defined when using assertions.
            cy.wrap($searchButton).contains("Search", { timeout: 3000 });
        });
        cy.log("Loading search results preview.");
        cy.get(".preview");
    }
}
```

### **Using the _pause_ and _wait_ commands**

Whenever there is a need to pause the test in execution the `cy.pause()` method can be called. While the test is paused interaction with the user interface is enabled via the Cypress App. In the app there are also options for resuming or continuing to the next step of the test in execution. Documentation can be found here [https://docs.cypress.io/api/commands/pause](https://docs.cypress.io/api/commands/pause).

![Declaring environment variables in cypress.config.js file](./cypress/fixtures/readme-images/pause.png)

Cypress also offers the **wait()** method for defining fixed timeouts. This type of timeout is not always recommended because when used too often it will drastically increase execution time for a test suite. To learn more follow link to documentation [https://docs.cypress.io/api/commands/wait#Syntax](https://docs.cypress.io/api/commands/wait#Syntax)

## Debugging

To enter debug mode the method `cy.debug()` can be used or simply the **debugger** keyword. When using the debugger the same logic for working with asynchronous commands and promises applies.
Using the **pause** command is also a very good way to debug a test because of the option to interact with the UI and execute the test step by step.
Another approach when debugging is to use the console with the help of browser developer tools and log the values of variables or results of certain executed commands.
Errors in Cypress also contain information about the cause of the test test failure, like error message. By using that message the cause of failure can be detected and the error can be handled. For example, this block is added to the
last test in the **cypress/e2e/testSearchResults.js** test suite to prevent test failure when an element is not rendered on time:

```
    //To prevent test failure if recipe previews are not rendered on time, this block is added. It will be executed when recipe previews are not rendered.
        Cypress.on("fail", (error, runnable) => {
            if (error.message.includes("`.preview`")) {
                console.log("Bookmarks not loaded!");
            }
            //If there was another reason for test failure, an error is still thrown.
            else {
                throw error;
            }
        })
```

-   **Note**: Debugger command will also pause the test and special options are available in the Cypress App for working with tests in debug mode. When running the test, developer tools also need to be opened (right click -> Inspect). In the following example method **clickSearchButton** in class **cypres/pages/Search.js** has been modified and **debug** method is called right before clicking the **Search** button:

    ![Declaring environment variables in cypress.config.js file](./cypress/fixtures/readme-images/debug-mode.png)

    ```
            this.getSearchButton().then(($searchButton) => {
            cy.debug();
            console.log(`Clicked on button with text: ${$searchButton.text()}`);
            //Timeouts can also be defined when using assertions.
            cy.wrap($searchButton).contains("Search", { timeout: 3000 });
        });
    ```

    More on this topic can be found here [https://docs.cypress.io/guides/guides/debugging#Using-debugger](https://docs.cypress.io/guides/guides/debugging#Using-debugger).
