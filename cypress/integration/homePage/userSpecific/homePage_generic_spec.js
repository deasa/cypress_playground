describe('Home Page _ generic', () => {
    before(() => {
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules.json').as('getAllMbrs');
        cy.loginAsGeneric();
        cy.visit('/');
        cy.get("#EMBR_HomeTable tbody").as('homeTable');
    });

    it('is accessible by generic user', () => {
        cy.get('@homeTable').should('be.visible');
    });

    it('does not have the Create New MBR button', () => {
        cy.contains(/^Create New MBR$/).should('not.be.visible');
    });

    it('does not have the Import MBR button', () => {
        cy.contains(/^Create New MBR from File$/).should('not.be.visible');
    });

    it('has active status filter applied by default', () => {
        cy.get('p-multiselect div[title]').should('have.attr', 'title', 'Active');
    });
});