'use strict';
const homeTable = "#EMBR_HomeTable tbody";

describe('Home Page', () => {
    before(function() {
        cy.loginAsAdmin();
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules.json').as('getAllMbrs');
        cy
            .visit('/')
            .then(() => {
                cy.get("#EMBR_HomeTable tbody").as('homeTable');
            })
    })

    it('clicking on the new MBR button results in prompt', () => {
        cy.contains(/^Create New MBR$/).click().then(() => {
            cy.get("p-dialog > div").should('be.visible').type('{esc}').should('not.exist');
        });
    });

    
});