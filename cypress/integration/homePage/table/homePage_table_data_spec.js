describe('Home Page Table Data', () => {
    before(function() {
        cy.loginAsAdmin();
        cy.server();
        cy.fixture('allMBRsNoModules_placeholderMBR.json').as('placeholderMBR').then(function(json) {
            cy.route(/getAllMasterBatch/, json).as('getAllMbrs');
        })
        cy
            .visit('/')
            .then(() => {
                cy.get("#EMBR_HomeTable tbody").as('homeTable');
            });
    });

    //TC-EMBRUI0610-01
    it('displays data in the correct columns', () => {
        cy.fixture('allMBRsNoModules_placeholderMBR.json').then((mbrsJson) => {
            cy.get("[class*='PartNumber']").should('have.text', mbrsJson[0].PartNumber);
            cy.get("[class*='PartDescription']").should('have.text', mbrsJson[0].PartDescription);
            cy.get("[class*='ProductionVersion']").should('have.text', mbrsJson[0].ProductionVersion);
            cy.get("[class*=' Revision ']").should('have.text', mbrsJson[0].Revision);
            cy.get("[class*='RevisionName']").should('have.text', mbrsJson[0].RevisionName);
            cy.get("[class*='DocumentName']").should('have.text', mbrsJson[0].DocumentName);
            cy.get("[class*='Status']").should('have.text', mbrsJson[0].Status);
        })
    });
});