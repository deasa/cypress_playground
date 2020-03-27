describe('My first sample test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
    })
} )

describe('My first failing sample test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(false)
    })
})

describe('My first EMBR test', () => {
    it('Visits the embr app', () => {
        cy.visit('http://test.embr.biofiredx.net');
    });
});

describe('Login to application', () => {
    it('Logs in to EMBR', () => {
        cy.visit('http://test.embr.biofiredx.net');

        cy.xpath(`//input[preceding-sibling::label[text() = 'Username']][1]`).type('ldaptest');
        cy.xpath(`//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input`).type('drowssap');
    });
});