"use strict";

const selectors = {
  usernameInput: "input[pinputtext]",
  passwordInput: "input[ppassword]",
  loginButton: "button[label='Log In']",
  errorMessage: "label[class='errorMessage']",
};

describe("Login Page", function () {
  beforeEach(function () {
    cy.server();
    cy.route(/getAllMasterBatch/, "fixture:allMBRsNoModules.json").as(
      "getAllMbrs"
    );
    cy.route(/VerifyAndGenerateJwt/).as("generateJwt");
    cy.visit("/");
    cy.get(selectors.usernameInput).as("usernameInput");
    cy.get(selectors.passwordInput).as("passwordInput");
    cy.get(selectors.loginButton).as("loginButton");
  });

  it("successfully loads", function () {
    cy.get("@usernameInput").should("be.visible");
  });

  it("has all three login items visible on the page", function () {
    cy.get("@usernameInput").should("be.visible");
    cy.get("@passwordInput").should("be.visible");
    cy.get("@loginButton").should("be.visible");
  });

  describe("Login Page _ login", function () {
    const validUserName = "ldaptest";
    const validPassword = "drowssap";

    it("can log in to application _ ldaptest", function () {
      cy.get("@usernameInput").type(validUserName);
      cy.get("@passwordInput").type(validPassword);
      cy.get("@loginButton").click();
      cy.wait("@getAllMbrs", { timeout: 60000 });
      cy.url().should("include", "home");
      cy.contains("Welcome").should("contain.text", "LDAP");
    });

    it("rejects invalid username", function () {
      cy.get("@usernameInput").type("badUsername");
      cy.get("@passwordInput").type(validPassword);
      cy.get("@loginButton").click();
      cy.get(selectors.errorMessage).should(
        "contain.text",
        "Failed to verify e-signature"
      );
    });

    it("rejects invalid password", function () {
      cy.get("@usernameInput").type(validUserName);
      cy.get("@passwordInput").type("badPassword");
      cy.get("@loginButton").click();
      cy.get(selectors.errorMessage).should(
        "contain.text",
        "Failed to verify e-signature"
      );
    });

    it("log in button not enabled until after username and password are entered", function () {
      cy.get("@loginButton").should("be.disabled");
      cy.get("@usernameInput").type(validUserName);
      cy.get("@loginButton").should("be.disabled");
      cy.get("@passwordInput").type(validPassword);
      cy.get("@loginButton").should("not.be.disabled");
      cy.get("@usernameInput").clear();
      cy.get("@loginButton").should("be.disabled");
    });

    //todo: write tests for logging in as all user types (using the API is adequate to prove access). That way I can bypass the UI in my other tests.
  });
});
