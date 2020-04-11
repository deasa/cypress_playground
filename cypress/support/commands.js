Cypress.Commands.add('loginAsAdmin', function() {
    cy.clearLocalStorage();
    let d = new Date;
    let nowDate = d.toISOString();
    let data = cy.fixture('ldapuser').then((user) => {
        user._dateGenerated = nowDate;
        user._accessLevel = "Admin"
    });
    console.log(data);
    window.localStorage.setItem('currentUser', data);
});

Cypress.Commands.add('printToConsole', function() {
    console.log('YOU HIT A CUSTOM COMMAND!!!');
});
