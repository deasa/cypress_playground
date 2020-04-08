import('loginPage')

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
        let alteredState = false;

        beforeEach(() => {
            if (alteredState) {
                cy.reload(true);   
                alteredState = false;             
            }
        })

        it('can log in to application _ ldaptest', () => {
            EnterUsernamePassword(validUserName, validPassword);
            // cy.xpath(`${xUsernameInput}`).type(validUserName).should('have.value', validUserName);
            // cy.xpath(`${xPasswordInput}`).type(validPassword).should('have.value', validPassword);            
            ClickLogInButton();
            cy.url().should('include', 'home');
            cy.contains('Welcome').should('contain.text', 'LDAP');
            alteredState = true;
        });

        it('rejects invalid username', () => {
            EnterUsernamePassword('invalidUsername', validPassword);
            ClickLogInButton();
            //expect(cy.get('.errorMessage').to.have.text('Confirm credentials are correct');
            cy.get('.errorMessage').should('contain.text', 'Confirm credentials are correct');
        });

        it('rejects invalid password', () => {
            EnterUsernamePassword('invalidUsername', validPassword);
            ClickLogInButton();
            cy.get('.errorMessage').should('contain.text', 'Confirm credentials are correct');
        });
    });
});
