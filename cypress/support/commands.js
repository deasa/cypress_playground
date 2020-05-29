Cypress.Commands.add('loginAsAdmin', function() {
    loginAs('ldaptest', 'drowssap')
});

Cypress.Commands.add('loginAsSupervisor', function() {
    loginAs("ldaptest2", "drowssap");
})

Cypress.Commands.add('loginAsQa', function() {
    loginAs("ldaptest3", "drowssap");
})

Cypress.Commands.add('loginAsGeneric', function() {
    loginAs("ldapCyber", "drowssap");
})

Cypress.Commands.add('getJwtToken', function(uname, pword) {
    console.log('getting jwt token for ' + uname + ' : ' + pword)
    cy.request('POST', 'http://test.manufacturingservice.biofiredx.net//EmbrEsig/VerifyAndGenerateJwt', {Username: uname, Password: pword}).then(function(response) {
        console.log('got token: ' + response.body.Item)
        return response.body.Item
    })
})

function loginAs(username, password){
    console.log('logging in as ' + username + ' : ' + password)
    cy.getJwtToken(username, password).then(function(token) {
        window.localStorage.setItem('currentUser', JSON.stringify(token))
    })
}