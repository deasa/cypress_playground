import { selectors } from "../homePageCommon.js";

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
        cy.get(selectors.partNumberCell).should('have.text', mbr.PartNumber);
        cy.get(selectors.partDescriptionCell).should('have.text', mbr.PartDescription);
        cy.get(selectors.productionVersionCell).should('have.text', mbr.ProductionVersion);
        cy.get(selectors.revisionNumberCell).should('have.text', mbr.Revision);
        cy.get(selectors.revisionNameCell).should('have.text', mbr.RevisionName);
        cy.get(selectors.documentNameCell).should('have.text', mbr.DocumentName);
        cy.get(selectors.statusCell).should('have.text', mbr.Status);
    });
});