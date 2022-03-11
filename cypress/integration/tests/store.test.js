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

    it('Add a product to cart', () => {
        
        cy.visit(Cypress.env('BASE_URL'))
        
        cy.get('.quick-view')
        .eq(0)
        .click({force:true})
        
        cy.get('#add_to_cart')
        .click({force:true})
        
        cy.get('.button-container')
        .children()
        .eq(1)
        .click({force:true})
    })

})