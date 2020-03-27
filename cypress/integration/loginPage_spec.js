describe('EMBR Smoke Test', () => {
    it('Visits the embr app', () => {
        cy.visit('http://test.embr.biofiredx.net');
    });
});

describe('Login Page Test', () => {
    it('Logs in to EMBR', () => {
        cy.visit('http://test.embr.biofiredx.net');

        cy.xpath(`//input[preceding-sibling::label[text() = 'Username']][1]`).type('ldaptest');
        cy.xpath(`//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input`).type('drowssap');
        cy.xpath(`//button[@label = 'Log In']`).click();
        cy.url().should('include', 'home')
    });
});