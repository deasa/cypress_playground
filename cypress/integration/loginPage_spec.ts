//import * as LoginPage from './loginPage';

import { LoginPage } from "./loginPage";

describe('Login Page', () => {

    it('successfully loads', () => {
        cy.visit('/');
    });

    it('has all three login items visible on the page', () => {
        cy.get("input[pinputtext]").should('be.visible');
        cy.get("input[ppassword]").should('be.visible');
        cy.get("button[label='Log In']").should('be.visible');
    });

    describe('Login Page _ login', () => {
        const validUserName = "ldaptest";
        const validPassword = "drowssap";

        beforeEach(() => {
            cy.reload(true);           
        })

        it('can log in to application _ ldaptest', () => {
            LoginPage.EnterUsernamePassword(validUserName, validPassword);           
            LoginPage.ClickLogInButton();
            cy.url().should('include', 'home');
            cy.contains('Welcome').should('contain.text', 'LDAP');
        });

        it('rejects invalid username', () => {
            LoginPage.EnterUsernamePassword('invalidUsername', validPassword);
            LoginPage.ClickLogInButton();
            cy.get('.errorMessage').should('contain.text', 'Confirm credentials are correct');
        });

        it('rejects invalid password', () => {
            LoginPage.EnterUsernamePassword('invalidUsername', validPassword);
            LoginPage.ClickLogInButton();
            cy.get('.errorMessage').should('contain.text', 'Confirm credentials are correct');
        });
    });
});
