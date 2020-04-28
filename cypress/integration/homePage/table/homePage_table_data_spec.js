describe('Home Page Table Data', function() {
    before(function() {
        cy.loginAsAdmin();
        cy.server();
        cy.fixture('allMBRsNoModules_placeholderMBR.json').as('placeholderMBR').then(function(json) {
            cy.route(/getAllMasterBatch/, json).as('getAllMbrs');
        })
        cy
            .visit('/')
            .then(function() {
                cy.get("#EMBR_HomeTable tbody").as('homeTable');
            });
    });

    //TC-EMBRUI0610-01
    it('displays data in the correct columns', function() {
        const mbr = this.placeholderMBR[0];
        cy.get("[class*='PartNumber']").should('have.text', mbr.PartNumber);
        cy.get("[class*='PartDescription']").should('have.text', mbr.PartDescription);
        cy.get("[class*='ProductionVersion']").should('have.text', mbr.ProductionVersion);
        cy.get("[class*=' Revision ']").should('have.text', mbr.Revision);
        cy.get("[class*='RevisionName']").should('have.text', mbr.RevisionName);
        cy.get("[class*='DocumentName']").should('have.text', mbr.DocumentName);
        cy.get("[class*='Status']").should('have.text', mbr.Status);
    });
});