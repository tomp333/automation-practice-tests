/// <reference types="cypress" />

describe("Purchase items Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Add few elements to the cart and purchase them", () => {
    cy.contains("Sign in")
      .click()
      .login(Cypress.env("username"), Cypress.env("password"))
      .search("skirt")
      .get("div.ac_results > ul > li")
      .first()
      .click()
      .get("#add_to_cart")
      .continueShopping()
      .get("a")
      .contains("T-shirts")
      .click({ force: true })
      .get("a")
      .contains("Add to cart")
      .first()
      .click()
      .continueShopping()
      .get("a")
      .contains("Dresses")
      .click({ force: true })
      .get("a")
      .contains("Add to cart")
      .first()
      .click()
      .continueShopping()
      .get("a")
      .contains("Women")
      .click({ force: true })
      .get("a")
      .contains("Add to cart")
      .first()
      .click()
      .get("a.btn-default[title='Proceed to checkout']") //TODO - Think how you can change it so maybe there could be one command to proceed to checkout
      .click()
      .proceedToCheckout()
      .proceedToCheckout()
      .get("#cgv")
      .click()
      .proceedToCheckout()
      .get("a:contains('Pay by check')")
      .click()
      .confirmOrder()
      .get("p.alert.alert-success")
      .first()
      .should("contain", "Your order on My Store is complete.");
  });
});
