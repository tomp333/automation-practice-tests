/// <reference types="cypress" />

const currDatesUtcStr = new Date()
  .toISOString()
  .replace(':', '-')
  .replace(':', '-')

const goToSignUpForm = email => {
  return cy
    .get('a.login')
    .click()
    .get('#email_create')
    .clear()
    .type(email)
    .get('#SubmitCreate')
    .click()
}

const fillSignUpForm = (
  firstname,
  lastname,
  password,
  birthDay,
  birthMonth,
  birthYear,
  company,
  line1,
  city,
  state,
  postcode,
  additional,
  phone,
  mobile,
  alias
) => {
  cy.get('#id_gender1')
    .click()
    .get('#customer_firstname')
    .clear()
    .type(firstname)
    .get('#customer_lastname')
    .clear()
    .type(lastname)
    .get('#passwd')
    .clear()
    .type(password)
    .get('#days')
    .first()
    .select(birthDay)
    .get('#months')
    .select(birthMonth)
    .get('#years')
    .select(birthYear)
    .get('#firstname')
    .clear()
    .type(firstname)
    .get('#lastname')
    .clear()
    .type(lastname)
    .get('#company')
    .clear()
    .type(company)
    .get('#address1')
    .clear()
    .type(line1)
    .get('#city')
    .clear()
    .type(city)
    .get('#id_state')
    .select(state)
    .get('#postcode')
    .clear()
    .type(postcode)
    .get('#other')
    .clear()
    .type(additional)
    .get('#phone')
    .clear()
    .type(phone)
    .get('#phone_mobile')
    .clear()
    .type(mobile)
    .get('#alias')
    .clear()
    .type(alias)
    .get('#submitAccount')
    .click()
}

describe('Sign Up Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  before(() => {
    cy.fixture('user-data').as('data')
    cy.wrap(`test+${currDatesUtcStr}@test.com`).as('singUpEmail')
  })

  it('Sign up test success', function () {
    goToSignUpForm(this.singUpEmail)
      .get('h1.page-heading')
      .should('have.text', 'Create an account')
      .get('h3.page-subheading')
      .first()
      .should('have.text', 'Your personal information')
      .then(() => {
        fillSignUpForm(
          this.data.firstname,
          this.data.lastname,
          '@123asdasP8*#!klj',
          this.data.birthDay,
          this.data.birthMonth,
          this.data.birthYear,
          this.data.company,
          this.data.address.line1,
          this.data.address.city,
          this.data.address.state,
          this.data.address.postcode,
          'Test additional data',
          this.data.phone,
          this.data.mobile,
          this.singUpEmail.slice(0, 30)
        )
      })
      .get('p.info-account')
      .first()
      .should(
        'contain',
        'Welcome to your account. Here you can manage all of your personal information and orders.'
      )
  })

  it('Sign up test fail for already registered user', function () {
    goToSignUpForm(this.singUpEmail).checkErrorMessage(
      'An account using this email address has already been registered. Please enter a valid password or request a new one.'
    )
  })
})
