/// <reference types="cypress" />

describe('Store Create Account - Scenarios', () => {
    it('Should make login successfully', () => {
        cy.visit(Cypress.env('BASE_URL'))
        
        cy.get('.login')
        .click()

        cy.get('#email')
        .type(Cypress.env('EMAIL'))

        cy.get('#passwd')
        .type(Cypress.env('PASSWORD'))

        cy.get('#SubmitLogin')
        .click()

        cy.get('#center_column')
        .children()
        .eq(1)
        .should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    }) 
})