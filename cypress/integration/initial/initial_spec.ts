/// <reference types="cypress" />

context('Intial', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('Sign Up Test', () => {
    cy.get('img.logo.img-responsive').should(
      'have.src',
      'http://automationpractice.com/img/logo.jpg'
    )
  })
})
