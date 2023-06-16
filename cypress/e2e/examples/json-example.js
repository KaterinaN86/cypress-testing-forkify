/// <reference types="cypress" />

describe('JSON Object', () => {
  it('Json Object Examples', () => {
    const exampleObject = { key: 'Tim', key2: 'Jones' };
    const exampleArrayOfValues = ['Sophie', 'Rose', 'Howard'];

    const exampleArrayOfObjects = [
      {
        key: '01',
        firstName: 'Jane',
        lastName: 'Doe',
      },
      {
        key: '02',
        firstName: 'Emma',
        lastName: 'Hill',
      },
      {
        key: '03',
        firstName: 'Helen',
        lastName: 'Jones',
      },
    ];

    const users = {
      firstName: 'Joe',
      lastName: 'Blogs',
      Age: 30,
      Students: [
        {
          firstName: 'Jim',
          lastName: 'Blogs2',
        },
        {
          firstName: 'Sarah',
          lastName: 'Parker',
        },
      ],
    };

    cy.log(exampleObject['key']); //Tim
    cy.log(exampleObject['key2']); //Jones
    cy.log(exampleObject.key2); //Jones

    cy.log(exampleArrayOfValues[0]); //Sophie
    cy.log(exampleArrayOfValues[1]); //Rose

    cy.log(users.Students[0].lastName); //Blogs2

    for (const obj of exampleArrayOfObjects) {
      if (obj.key === '01') {
        cy.log('Data for user with key 01');
        cy.log(obj.firstName);
        cy.log(obj.lastName);
      }
    }
  });
});
