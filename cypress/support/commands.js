Cypress.Commands.add('loginAsAdmin', function() {
    loginAs("Admin");
});

Cypress.Commands.add('loginAsSupervisor', function() {
    loginAs("Supervisor");
})

Cypress.Commands.add('loginAsQa', function() {
    loginAs("DocumentControl");
})

Cypress.Commands.add('loginAsGeneric', function() {
    loginAs("");
})

function loginAs(userType){
    console.log('logging in as ' + userType)
    let d = new Date;
    let nowDate = d.toISOString();
    cy.readFile('cypress/fixtures/ldapuser.json').then((str) => {
        str.Item["_dateGenerated"] = nowDate;
        str.Item["_accessLevel"] = userType;
        window.localStorage.setItem('currentUser', JSON.stringify(str.Item));
    });
}

Cypress.Commands.add('printToConsole', function() {
    // console.log('YOU HIT A CUSTOM COMMAND!!!');
    console.log(window.localStorage.getItem('currentUser'));
});
