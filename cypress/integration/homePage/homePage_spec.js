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
            });
    });

    //TC-EMBRUI0405-01
    it('has the export, import, and create new buttons', function() {
        cy.contains(/^Create New MBR$/).should('be.visible');
        cy.contains(/^Create New MBR from File$/).should('be.visible');
        cy.contains(/^Export Table/).should('be.visible');
    });

    //TC-EMBRUI0415-01
    //TC-EMBRUI0875-01
    it('clicking on the new MBR button results in prompt and can be closed', () => {
        cy.contains(/^Create New MBR$/).click().then(() => {
            cy.get("p-dialog > div").should('be.visible').as('dialog');
            cy.get("span.pi.pi-times").click().should('not.exist');
        });
    });

    
});