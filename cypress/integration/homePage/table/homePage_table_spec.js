describe('Home Page Table', () => {
    before(function() {
        cy.loginAsAdmin();
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:elevenMBRs.json').as('getAllMbrs');
        cy
            .visit('/')
            .then(() => {
                cy.get("#EMBR_HomeTable tbody").as('homeTable');
            });
    });
    
    //TC-EMBRUI0605-03
    //TC-EMBRUI0605-05
    it('has all of the correct buttons', () => {
        cy.contains(/^Reset Filters$/).should('be.visible');
        cy.get("[class*='caret-left']").should('be.visible');
        cy.get("[class*='caret-right']").should('be.visible');
        cy.get("[class*='ui-paginator-first']").should('be.visible');
        cy.get("[class*='ui-paginator-last']").should('be.visible');
        cy.get("[class*='ui-paginator-pages']").find('a').should('have.length.greaterThan', 1);
    });
});