'use strict';
const xUsernameInput = "//input[preceding-sibling::label[text() = 'Username']][1]";
const xPasswordInput = "//input[preceding-sibling::label[text() = 'Username']][1]/following-sibling::input";
const xLoginButton = "//button[@label = 'Log In']";

export class LoginPage {
    constructor() {
        
    }
    // static PageIsLoaded(): boolean{
    //     return cy.get('input[pinputtext]').then($elm => {
    //             return $elm.is(':visible');
    //         })
    //         && 
    //         cy.get('input[ppassword]').then($elm => {
    //             return $elm.is(':visible');
    //         });
        //cy.xpath(`${xLoginButton}`).should('be.visible');
    // }
    static EnterUsernamePassword(username: string, password: string) {
        cy.get('input[pinputtext]').type(username).should('have.value', username);
        cy.get('input[ppassword]').type(password).should('have.value', password);
    }

    static ClickLogInButton(){
        cy.get("button[label='Log In']").click();
    }

    static Login(username: string = "ldaptest", password: string = "drowssap"){
        this.EnterUsernamePassword(username, password);
        this.ClickLogInButton();
    }
}

// export 

// export function ClickLogInButton(){
//     cy.xpath(`${xLoginButton}`).click();
// }

// export function Login(username: string = "ldaptest", password: string = "drowssap"){
//     EnterUsernamePassword(username, password);
//     ClickLogInButton();
// }