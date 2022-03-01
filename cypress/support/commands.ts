/// <reference types="cypress" />

Cypress.Commands.add("signUp", (email) => {
  return cy
    .get("a.login")
    .click()
    .get("#email_create")
    .clear()
    .type(email)
    .get("#SubmitCreate")
    .click();
});

Cypress.Commands.add("login", (username, password) => {
  return cy
    .get("#email")
    .type(username)
    .get("#passwd")
    .type(password)
    .get("#SubmitLogin")
    .click();
});

Cypress.Commands.add("logout", () => {
  return cy.get("a.logout").contains("Sign out").should("be.visible").click();
});

Cypress.Commands.add("checkErrorMessage", (message) => {
  return cy.get("div.alert.alert-danger > ol > li").should("contain", message);
});

Cypress.Commands.add("search", (query) => {
  return cy.get("#searchbox").type(query).type("{enter}");
});

Cypress.Commands.add("proceedToCheckout", () => {
  return cy
    .get("p.cart_navigation > * > span")
    .contains("Proceed to checkout")
    .first()
    .click({ force: true });
});

Cypress.Commands.add("continueShopping", () => {
  return cy
    .get("span:contains('Continue shopping')")
    .first()
    .click({ force: true });
});

Cypress.Commands.add("confirmOrder", () => {
  return cy
    .get("p.cart_navigation > * > span")
    .contains("I confirm my order")
    .click();
});
