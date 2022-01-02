/// <reference types="cypress" />

// import dotenv = require('dotenv')

// dotenv.config()

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.only('Login Success', () => {
    cy.contains('Sign in')
      .click()
      .login(Cypress.env('username'), Cypress.env('password'))
      .get('a.logout')
      .contains('Sign out')
      .get('a.account')
      .contains('Tester Tom')
      .should('be.visible')
  })
})

it.only('Login Fail no password', () => {
  cy.contains('Sign in')
    .click()
    .login(Cypress.env('username'), '')
    .get('a.logout')
    .contains('Sign out')
    .get('a.account')
    .contains('Tester Tom')
    .should('be.visible')
})

});