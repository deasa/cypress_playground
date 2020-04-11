'use strict';

describe('Home Page', () => {
    beforeEach(function() {
        cy.loginAsAdmin();
        console.log('hit home pages before each');
        //need to stub login here. There is a currentUser in the localStorage that we need to get. 
        //think we need to stub getallmbrs as well?
    })

    it('the home page is displayed', () => {
        cy.visit('/home');
        cy.get("a[routerlink='home']").should('be.visible');
    });
});