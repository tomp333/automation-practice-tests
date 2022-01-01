/// <reference types="cypress" />

// import dotenv = require('dotenv')

// dotenv.config()

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login Success', () => {
    cy.contains('Sign in')
      .click()
      .get('#email')
      .type(Cypress.env('username'))
      .get('#passwd')
      .type(Cypress.env('password'))
      .get('#SubmitLogin')
      .click()
      .get('a.logout')
      .contains('Sign out')
      .get('a.account')
      .contains('Tester Tom')
      .should('be.visible')
  })
})
