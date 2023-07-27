/// <reference types="cypress" />

it('Google Search', () => {

    cy.visit('https://google.com')

    cy.get('#APjFqb').type('cypress')
    cy.contains('Google Search').click()

})