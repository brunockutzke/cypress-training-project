/// <reference types="cypress" />

describe('Store Home Page - Scenarios', () => {
    it('Visiting Store Home Page', () => {
        cy.visit(Cypress.env('BASE_URL'))
    })

    it('Perform a simple search', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.get('#search_query_top').type('shirt')
        cy.get('.ac_results')
        .should('be.visible')
        .children()
        .click()
    })


})