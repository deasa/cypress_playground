import { selectors } from "../homePageCommon.js";

describe('Home Page _ QA', function() {
    before(function() {
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules.json').as('getAllMbrs');
        cy.loginAsQa();
        cy.visit('/');
        cy.get(selectors.homePageTableBody).as('homeTable');
    });

    //TC-EMBRUI0410-01
    it('is accessible by qa', function() {
        cy.get('@homeTable').should('be.visible');
    });

    //TC-EMBRUI0410-01
    it('does not have the Create New MBR button', function() {
        cy.contains(selectors.createNewMbrButton).should('not.be.visible');
    });

    //TC-EMBRUI0410-01
    it('does not have the Import MBR button', function() {
        cy.contains(selectors.copyNewMbrFromFileButton).should('not.be.visible');
    });

    //TC-EMBRUI0640-01
    it('has pending status filter applied by default', function() {
        cy.get(selectors.statusFilterDropdown).find(selectors.statusFilterLabel).should('have.text', 'Pending');
    });
});