/// <reference types="cypress" />

describe('Your Logo Store - Contact Us', () => {
    it('Should validate message sending', () => {
        cy.visit('http://automationpractice.com/index.php')
        
        cy.get('#contact-link')
        .click()

        cy.get('#id_contact')
        .select('Webmaster')

        /* cy.get('#email')
        .type(Cypress.env('EMAIL'))

        cy.get('#id_order')
        .type('123')

        cy.get('#message')
        .type('Teste')
        
        cy.get('#submitMessage')
        .click() */
    }) 
})