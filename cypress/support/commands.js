Cypress.Commands.add('loginAsAdmin', function() {
    loginAs("Admin", "Admin");
});

Cypress.Commands.add('loginAsSupervisor', function() {
    loginAs("Supervisor", "Supervisor");
})

Cypress.Commands.add('loginAsQa', function() {
    loginAs("DocumentControl", "QA");
})

Cypress.Commands.add('loginAsGeneric', function() {
    loginAs("", "Generic");
})

function loginAs(userType, userName){
    console.log('logging in as ' + userType)
    let d = new Date;
    let nowDate = d.toISOString();
    cy.readFile('cypress/fixtures/ldapuser.json').then(function(str) {
        str.Item["_dateGenerated"] = nowDate;
        str.Item["_accessLevel"] = userType;
        str.Item.UserName = userName;
        window.localStorage.setItem('currentUser', JSON.stringify(str.Item));
    });
}

Cypress.Commands.add('printToConsole', function() {
    // console.log('YOU HIT A CUSTOM COMMAND!!!');
    console.log(window.localStorage.getItem('currentUser'));
});
