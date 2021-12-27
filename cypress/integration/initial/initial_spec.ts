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

  it.only('Sign Up Test Success', () => {
    const currDatesUtcStr = new Date()
      .toISOString()
      .replace(':', '-')
      .replace(':', '-')
    console.log(currDatesUtcStr)

    const singUpEmail = `test+${currDatesUtcStr}@test.com`

    cy.get('a.login')
      .click()
      .get('#email_create')
      .clear()
      .type(singUpEmail)
      .get('#SubmitCreate')
      .click()
      .get('h1.page-heading')
      .should('have.text', 'Create an account')
      .get('h3.page-subheading')
      .first()
      .should('have.text', 'Your personal information')
      .get('#id_gender1')
      .click()
      .get('#customer_firstname')
      .clear()
      .type('Tester')
      .get('#customer_lastname')
      .clear()
      .type('Tom')
      .get('#passwd')
      .clear()
      .type('@123asdasP8*#!klj')
      .get('#days')
      .first()
      .select('1')
      .get('#months')
      .select('January')
      .get('#years')
      .select('1970')
      .get('#firstname')
      .clear()
      .type('Tester')
      .get('#lastname')
      .clear()
      .type('Tom')
      .get('#company')
      .clear()
      .type('Testing Hard')
      .get('#address1')
      .clear()
      .type('433 Harris St, Goodwater')
      .get('#city')
      .clear()
      .type('Perth')
      .get('#id_state')
      .select('Alabama')
      .get('#postcode')
      .clear()
      .type('35072')
      .get('#other')
      .clear()
      .type('TEST Additional information')
      .get('#phone')
      .clear()
      .type('251-217-0111')
      .get('#phone_mobile')
      .clear()
      .type('+11234567890')
      .get('#alias')
      .clear()
      .type(singUpEmail.slice(0, 30))
      .get('#submitAccount')
      .click()
  })
})
