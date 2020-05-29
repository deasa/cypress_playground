import { selectors } from "./homePageCommon.js";

describe('Home Page', function() {
    before(function() {
        cy.loginAsAdmin();
        cy.server();
        cy.route(/getAllMasterBatch/, 'fixture:allMBRsNoModules.json').as('getAllMbrs');
        cy
            .visit('/')
            .then(function() {
                cy.get("#EMBR_HomeTable tbody").as('homeTable');
            });
    });

    //TC-EMBRUI0405-01
    it('has the export, import, and create new buttons', function() {
        cy.contains(selectors.exportTableButton).should('be.visible');
        cy.contains(selectors.copyNewMbrFromFileButton).should('be.visible');
        cy.contains(selectors.createNewMbrButton).should('be.visible');
    });

    //TC-EMBRUI0415-01
    //TC-EMBRUI0875-01
    it('clicking on the new MBR button results in prompt and can be closed', function() {
        cy.contains(/^Create New MBR$/).click().then(function() {
            cy.get(selectors.createNewMbrDialogDiv).should('be.visible').as('dialog');
            cy.get(selectors.createNewMbrDialogCloseButton).click().should('not.exist');
        });
    });

    
});