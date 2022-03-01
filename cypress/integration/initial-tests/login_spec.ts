/// <reference types="cypress" />

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login and logout success", () => {
    cy.contains("Sign in")
      .click()
      .login(Cypress.env("username"), Cypress.env("password"))
      .get("a.account")
      .contains("Tester Tom")
      .should("be.visible")
      .logout()
      .get("a.login")
      .contains("Sign in")
      .should("be.visible");
  });

  it("Login fail for wrong email", () => {
    cy.contains("Sign in")
      .click()
      .login("wrong@", "!@#$ADFAWE%RQ@#")
      .checkErrorMessage("Invalid email address.");
  });
});
