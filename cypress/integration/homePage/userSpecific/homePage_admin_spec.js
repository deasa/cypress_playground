import { selectors } from "../homePageCommon.js";

describe('Home Page _ Admin', function() {
    before(function() {
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules.json').as('getAllMbrs');
        cy.loginAsAdmin();
        cy.visit('/');
        cy.get(selectors.homePageTableBody).as('homeTable');
    });

    //TC-EMBRUI0400-01
    it('is accessible by admin', function() {
        cy.get('@homeTable').should('be.visible');
    });

    //TC-EMBRUI0410-01
    it('has the Create New MBR button', function() {
        cy.contains(selectors.createNewMbrButton).should('be.visible');
    });

    //TC-EMBRUI0410-01
    it('has the Import MBR button', function() {
        cy.contains(selectors.copyNewMbrFromFileButton).should('be.visible');
    });

    //TC-EMBRUI0640-03
    it('has no status filter applied by default', function() {
        cy.get(selectors.statusFilterDropdown).find(selectors.statusFilterLabel).should('have.text', 'All');
    });
});