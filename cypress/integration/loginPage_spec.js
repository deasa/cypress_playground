/// <reference types="Cypress" />

describe('The EMBR application', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });
});

describe('Items On Login Page', () => {
    it('All three login items are visible on the page', () => {

    })
})

describe('Login Page Test', () => {
    it('Logs in to EMBR', () => {
        cy.visit('/');

        cy.xpath(`//input[preceding-sibling::label[text() = 'Username']][1]`).type('ldaptest');
        cy.xpath(`//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input`).type('drowssap');
        cy.xpath(`//button[@label = 'Log In']`).click();
        cy.url().should('include', 'home')
    });
});