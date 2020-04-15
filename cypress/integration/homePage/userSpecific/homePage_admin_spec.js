describe('Home Page _ Admin', () => {
    before(() => {
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules.json').as('getAllMbrs');
        cy.loginAsAdmin();
        cy.visit('/');
        cy.get("#EMBR_HomeTable tbody").as('homeTable');
    });

    it('is accessible by admin', () => {
        cy.get('@homeTable').should('be.visible');
    });

    it('has the Create New MBR button', () => {
        cy.contains(/^Create New MBR$/).should('be.visible');
    });

    it('has the Import MBR button', () => {
        cy.contains(/^Create New MBR from File$/).should('be.visible');
    });

    it('has no status filter applied by default', () => {
        cy.get('p-multiselect div[title]').should('have.attr', 'title', 'All');
    });
});