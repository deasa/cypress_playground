'use strict';

describe('Login Page', function() {
    beforeEach(function() {
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules.json').as('getAllMbrs');
        cy.visit('/');
        cy.get('input[pinputtext]').as('usernameInput');
        cy.get('input[ppassword]').as('passwordInput');
        cy.get("button[label='Log In']").as('loginButton');
    });

    it('successfully loads', function() {
        cy.get('@usernameInput').should('be.visible');
    });

    it('has all three login items visible on the page', function() {
        cy.get('@usernameInput').should('be.visible')
        cy.get('@passwordInput').should('be.visible');
        cy.get('@loginButton').should('be.visible');
    });

    describe('Login Page _ login', function() {
        const validUserName = "ldaptest";
        const validPassword = "drowssap";

        it('can log in to application _ ldaptest', function() {
            cy.get('@usernameInput').type(validUserName);
            cy.get('@passwordInput').type(validPassword);
            cy.get('@loginButton').click();
            cy.wait('@getAllMbrs', {timeout: 60000});
            cy.url().should('include', 'home');
            cy.contains('Welcome').should('contain.text', 'LDAP');
        });

        it('rejects invalid username', function() {
            cy.get('@usernameInput').type('badUsername');
            cy.get('@passwordInput').type(validPassword);
            cy.get('@loginButton').click();
            cy.get('.errorMessage').should('contain.text', 'Confirm credentials are correct');
        });

        it('rejects invalid password', function() {
            cy.get('@usernameInput').type(validUserName);
            cy.get('@passwordInput').type('badPassword');
            cy.get('@loginButton').click();
            cy.get('.errorMessage').should('contain.text', 'Confirm credentials are correct');
        });

        it('log in button not enabled until after username and password are entered', function() {
            cy.get('@loginButton').should('be.disabled');
            cy.get('@usernameInput').type(validUserName);
            cy.get('@loginButton').should('be.disabled');
            cy.get('@passwordInput').type(validPassword);
            cy.get('@loginButton').should('not.be.disabled');
            cy.get('@usernameInput').clear();
            cy.get('@loginButton').should('be.disabled');
        });
    });
});
