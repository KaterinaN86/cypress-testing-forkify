import search from '../../pages/Search.js';

/// <reference types="Cypress" />

describe('Test search form', () => {
  //Cypress hook that refers to a function being called before executing test suite.
  before(function () {
    cy.fixture('example').then(function (data) {
      //Using globalThis to be able to access variable data from anywhere in the code, no mather the scope.
      globalThis.data = data;
    });
  });
  //Cypress hook used to call a function before each test is executed.
  beforeEach(function () {
    // runs before each test in the it block
    cy.log('Open base URL');
    cy.visit('/');
  });
  it('Should verify search button', () => {
    search.verifySearchButton();
  });
  it('Should enter query text', () => {
    search.inputSearchQuery('pasta');
    search.clickSearchButton();
  });
});
