describe('Home Page Table', () => {
    before(function() {
        cy.loginAsAdmin();
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules_elevenMBRs.json').as('getAllMbrs');
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

    //TC-EMBRUI0605-01
    //TC-EMBRUI0605-02
    //TC-EMBRHL2015-01
    it('has the correct filters', () => {
        cy.get("[id='globalFilterInput']").should('be.visible');
        cy.get("[id='PartNumber']").should('be.visible');
        cy.get("[id='PartDescription']").should('be.visible');
        cy.get("[id='ProductionVersion']").should('be.visible');
        cy.get("[id='Revision']").should('be.visible');
        cy.get("[id='RevisionName']").should('be.visible');
        cy.get("[id='DocumentName']").should('be.visible');
        cy.get("p-multiselect div[title]").should('be.visible');
    })

    //TC-EMBRUI0610-01
    it('has the correct columns', () => {
        cy.contains(/^ Part $/).should('be.visible');
        cy.contains("Part Name").should('be.visible');
        cy.contains("Production Version").should('be.visible');
        cy.contains("MBR Revision").should('be.visible');
        cy.contains("MBR Name").should('be.visible');
        cy.contains("Document ID").should('be.visible');
        cy.contains("Status").should('be.visible');
        cy.contains("Actions").should('be.visible');
    })
});