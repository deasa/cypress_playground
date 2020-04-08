import * as LoginPage from './loginPage';

describe('Login Page', () => {
    
    it('successfully loads', () => {
        cy.visit('/');
    });

    it('has all three login items visible on the page', () => {
        // cy.xpath(`${xUsernameInput}`).should('be.visible')
        // cy.xpath(`${xPasswordInput}`).should('be.visible');
        // cy.xpath(`${xLoginButton}`).should('be.visible');
    });

    describe('Login Page _ login', () => {
        const validUserName = "ldaptest";
        const validPassword = "drowssap";
        let alteredState = false;

        beforeEach(() => {
            console.log("Is the login page initially loaded? " + LoginPage.PageIsLoaded)
            if (alteredState) {
                cy.reload(true);   
                alteredState = false;             
            }
        })

        it('can log in to application _ ldaptest', () => {
            LoginPage.EnterUsernamePassword(validUserName, validPassword);           
            LoginPage.ClickLogInButton();
            cy.url().should('include', 'home');
            cy.contains('Welcome').should('contain.text', 'LDAP');
            alteredState = true;
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
