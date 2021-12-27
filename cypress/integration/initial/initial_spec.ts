/// <reference types="cypress" />

context('Sign Up Tests', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('Check front page logo', () => {
    cy.get('img.logo.img-responsive')
      .first()
      .invoke('attr', 'src')
      .should('eq', 'http://automationpractice.com/img/logo.jpg')
  })

  it('Sign Up Test', () => {
    const currDatesUtcStr = new Date()
      .toISOString()
      .replace(':', '-')
      .replace(':', '-')
    console.log(currDatesUtcStr)

    cy.get('a.login')
      .click()
      .get('#email_create')
      .type(`test+${currDatesUtcStr}@test.com`)
      .get('#SubmitCreate')
      .click()

    cy.get('a.login')
      .click()
      .get('#email_create')
      .type(`test+${currDatesUtcStr}{@test.com`)
      .get('#SubmitCreate')
      .click()
      .get('#create_account_error > ol > li')
      .first()
      .should(
        'have.text',
        'An account using this email address has already been registered. Please enter a valid password or request a new one. '
      )

    //create_account_error
  })
})
