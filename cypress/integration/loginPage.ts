'use strict';
const xUsernameInput = "//input[preceding-sibling::label[text() = 'Username']][1]";
const xPasswordInput = "//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input";
const xLoginButton = "//button[@label = 'Log In']";

export function PageIsLoaded(){
    return cy.xpath(`${xUsernameInput}`).then($elm => {
            return $elm.is(':visible');
        }) 
        && 
        cy.xpath(`${xPasswordInput}`).then($elm => {
            return $elm.is(':visible');
        });
    //cy.xpath(`${xLoginButton}`).should('be.visible');
}

export function EnterUsernamePassword(username: string, password: string) {
    cy.xpath(`${xUsernameInput}`).type(username).should('have.value', username);
    cy.xpath(`${xPasswordInput}`).type(password).should('have.value', password);
}

export function ClickLogInButton(){
    cy.xpath(`${xLoginButton}`).click();
}

export function Login(username: string = "ldaptest", password: string = "drowssap"){
    EnterUsernamePassword(username, password);
    ClickLogInButton();
}