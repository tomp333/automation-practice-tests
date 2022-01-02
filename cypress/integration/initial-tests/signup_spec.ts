/// <reference types="cypress" />


const currDatesUtcStr = new Date()
  .toISOString()
  .replace(':', '-')
  .replace(':', '-')

  describe('Sign Up Tests', () => {
  beforeEach(() => {
    // cy.fixture('user-data.json').as('data')

    cy.visit('/')
  })

  //TODO - probably remove
  // it('Check front page logo', () => {
  //   cy.get('img.logo.img-responsive')
  //     .first()
  //     .invoke('attr', 'src')
  //     .should('eq', 'http://automationpractice.com/img/logo.jpg')
  // })

  before( ()=>{
    cy.fixture('user-data').as('data')
  })

  it('Sign Up Test Success', function() {
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
      .type(this.data.firstname)
      .get('#customer_lastname')
      .clear()
      .type(this.data.lastname)
      .get('#passwd')
      .clear()
      .type('@123asdasP8*#!klj')
      .get('#days')
      .first()
      .select(this.data.birthDay)
      .get('#months')
      .select(this.data.birthMonth)
      .get('#years')
      .select(this.data.birthYear)
      .get('#firstname')
      .clear()
      .type(this.data.firstname)
      .get('#lastname')
      .clear()
      .type(this.data.lastname)
      .get('#company')
      .clear()
      .type(this.data.company)
      .get('#address1')
      .clear()
      .type(this.data.address.line1)
      .get('#city')
      .clear()
      .type(this.data.address.city)
      .get('#id_state')
      .select(this.data.address.state)
      .get('#postcode')
      .clear()
      .type(this.data.address.postcode)
      .get('#other')
      .clear()
      .type('TEST Additional information')
      .get('#phone')
      .clear()
      .type(this.data.phone)
      .get('#phone_mobile')
      .clear()
      .type(this.data.mobile)
      .get('#alias')
      .clear()
      .type(singUpEmail.slice(0, 30))
      .get('#submitAccount')
      .click()
  })

  it('Sign Up Test Fail', () => {
    const singUpEmail = `test+${currDatesUtcStr}@test.com`
    cy.get('a.login')
      .click()
      .get('#email_create')
      .clear()
      .type(singUpEmail)
      .get('#SubmitCreate')
      .click()
      .checkErrorMessage(
        'An account using this email address has already been registered. Please enter a valid password or request a new one.'
      )
  })
})
