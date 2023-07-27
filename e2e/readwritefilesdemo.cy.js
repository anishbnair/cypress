
before(() => {

    cy.fixture('example.json').as('test_data')

})

it('Read files using Fixture', () => {

    cy.fixture('example.json').then((data) => {

        cy.log(data.name)
        cy.log(data.email)

    })

    // cy.log(this.test_data.name)

})


it('Read file using readFile()', () => {

    cy.readFile('./cypress/fixtures/example.json').then((data) => {

        cy.log(data.name)
    })

})


it('Write file demo', () => {

    cy.writeFile('sample.txt', 'Hello, I am Anish\n')
    cy.writeFile('I am learning Cypress', {flag: 'a+'})

})

