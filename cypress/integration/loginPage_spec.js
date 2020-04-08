'use strict';
/// <reference types="Cypress" />
const xUsernameInput = "//input[preceding-sibling::label[text() = 'Username']][1]";
const xPasswordInput = "//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input";
const xLoginButton = "//button[@label = 'Log In']";

describe('The EMBR application', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });
});

describe('Login Page', () => {
    it('has all three login items visible on the page', () => {
        cy.xpath(`${xUsernameInput}`).should('be.visible')
        cy.xpath(`${xPasswordInput}`).should('be.visible');
        cy.xpath(`${xLoginButton}`).should('be.visible');
    })
})

describe('Login Page', () => {
    it('can log in to application', () => {
        cy.visit('/');

        cy.xpath(`${xUsernameInput}`).type('ldaptest');
        cy.xpath(`${xPasswordInput}`).type('drowssap');
        cy.xpath(`${xLoginButton}`).click();
        cy.url().should('include', 'home')
        cy.contains('Welcome').should('contain.text', 'LDAP');
        //expect(window.localStorage.getItem('currentUser')).to.have.property("AccountName", "ldaptest");
    });
});