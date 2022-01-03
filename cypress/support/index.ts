import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      signUp(email): Chainable<JQuery<HTMLElement>>
      login(username: string, password: string): Chainable<JQuery<HTMLElement>>
      checkErrorMessage(message: string): Chainable<JQuery<HTMLElement>>
      search(query: string): Chainable<JQuery<HTMLElement>>
      proceedToCheckout(): Chainable<JQuery<HTMLElement>>
      continueShopping(): Chainable<JQuery<HTMLElement>>
      confirmOrder(): Chainable<JQuery<HTMLElement>>
      logout(): Chainable<JQuery<HTMLElement>>
    }
  }
}
