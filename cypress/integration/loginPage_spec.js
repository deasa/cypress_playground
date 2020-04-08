'use strict';
const xUsernameInput = "//input[preceding-sibling::label[text() = 'Username']][1]";
const xPasswordInput = "//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input";
const xLoginButton = "//button[@label = 'Log In']";

describe('Login Page', () => {
    
    it('successfully loads', () => {
        cy.visit('/');
    });

    it('has all three login items visible on the page', () => {
        cy.xpath(`${xUsernameInput}`).should('be.visible')
        cy.xpath(`${xPasswordInput}`).should('be.visible');
        cy.xpath(`${xLoginButton}`).should('be.visible');
    });

    describe('Login Page _ login', () => {
        const validUserName = "ldaptest";
        const validPassword = "drowssap";

        beforeEach(() => {
            cy.reload(true);
        })

        it('can log in to application _ ldaptest', () => {
            cy.xpath(`${xUsernameInput}`).type(validUserName);
            cy.xpath(`${xPasswordInput}`).type(validPassword);
            cy.xpath(`${xLoginButton}`).click();
            cy.url().should('include', 'home');
            cy.contains('Welcome').should('contain.text', 'LDAP');
        });
        it('rejects invalid username', () => {
            cy.xpath(`${xUsernameInput}`).type('invalidUsername');
            cy.xpath(`${xPasswordInput}`).type(validPassword);
            cy.xpath(`${xLoginButton}`).click();
            //expect(cy.get('.errorMessage').to.have.text('Confirm credentials are correct');
            cy.get('.errorMessage').should('contain.text', 'Confirm credentials are correct');
        });
    });
});
