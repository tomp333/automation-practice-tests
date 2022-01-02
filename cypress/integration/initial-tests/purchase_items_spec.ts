/// <reference types="cypress" />

describe('Purchase items Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Buy first element from bestsellers', () => {
    cy.get('a.product-name')
      .first()
      .click()
      .get('a.button-plus')
      .click()
      .get("a[name='Blue']")
      .first()
      .click()
      .get("button[name='Submit']")
      .click()
      .get("a.btn-default[title='Proceed to checkout']")
      .debug()
      .click()
      .get('p.cart_navigation > * > span')
      .contains('Proceed to checkout')
      .first()
      .click()
      .get('#email')
      .login(Cypress.env('username'), Cypress.env('password'))
      .get('p.cart_navigation > * > span')
      .contains('Proceed to checkout')
      .first()
      .click({ force: true })
      .get('#cgv')
      .click()
      .get('p.cart_navigation > * > span')
      .contains('Proceed to checkout')
      .click()
      .get('a.bankwire')
      .click()
      .get('p.cart_navigation > * > span')
      .contains('I confirm my order')
      .click()
      .get('p.cheque-indent > strong.dark')
      .first()
      .should('contain', 'Your order on My Store is complete.')
  })
})