import { selectors } from "../homePageCommon.js";

describe('Home Page Table', function() {
    before(function() {
        cy.loginAsAdmin();
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules_elevenMBRs.json').as('getAllMbrs');
        cy.visit('/')
    });

    //TC-EMBRUI0605-03
    //TC-EMBRUI0605-05
    it('has all of the correct buttons', function() {
        cy.contains(/^Reset Filters$/).should('be.visible');
        cy.get(selectors.prevPage).should('be.visible');
        cy.get(selectors.nextPage).should('be.visible');
        cy.get(selectors.firstPage).should('be.visible');
        cy.get(selectors.lastPage).should('be.visible');
        cy.get(selectors.pageNums).find('a').should('have.length.greaterThan', 1);
    });

    //TC-EMBRUI0605-01
    //TC-EMBRUI0605-02
    //TC-EMBRHL2015-01
    it('has the correct filters', function() {
        cy.get(selectors.globalFilter).should('be.visible');
        cy.get(selectors.partNumberFilter).should('be.visible');
        cy.get(selectors.partDescriptionFilter).should('be.visible');
        cy.get(selectors.productionVersionFilter).should('be.visible');
        cy.get(selectors.revisionNumFilter).should('be.visible');
        cy.get(selectors.revisionNameFilter).should('be.visible');
        cy.get(selectors.documentNameFilter).should('be.visible');
        cy.get(selectors.statusFilterDropdown).should('be.visible');
    })

    //TC-EMBRUI0610-01
    it('has the correct columns', function() {
        cy.contains(selectors.partNumberColHeader).should('be.visible');
        cy.contains(selectors.partNameColHeader).should('be.visible');
        cy.contains(selectors.productionVersionColHeader).should('be.visible');
        cy.contains(selectors.revisionNumberColHeader).should('be.visible');
        cy.contains(selectors.revisionNameColHeader).should('be.visible');
        cy.contains(selectors.documentNameColHeader).should('be.visible');
        cy.contains(selectors.statusColHeader).should('be.visible');
        cy.contains(selectors.actionsColHeader).should('be.visible');
    })

    //TC-EMBRUI0630-02
    //TC-EMBRHL2010-01
    //TC-EMBRHL2010-02
    it('has the correct status column filter dropdown values', function() {
        cy.get(selectors.statusFilterDropdown).click().then(function() {
            cy.contains('Draft').should('be.visible');
            cy.contains('Pending').should('be.visible');
            cy.contains('Rejected').should('be.visible');
            cy.contains('Active').should('be.visible');
            cy.contains('Inactive').should('be.visible');
        })
    })
});