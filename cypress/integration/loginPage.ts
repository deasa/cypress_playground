'use strict';
const xUsernameInput = "//input[preceding-sibling::label[text() = 'Username']][1]";
const xPasswordInput = "//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input";
const xLoginButton = "//button[@label = 'Log In']";

void function EnterUsernamePassword(username: string, password: string) {
    cy.xpath(`${xUsernameInput}`).type(username).should('have.value', username);
    cy.xpath(`${xPasswordInput}`).type(password).should('have.value', password);
}

function ClickLogInButton(){
    cy.xpath(`${xLoginButton}`).click();
}