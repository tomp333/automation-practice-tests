/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// cypress/plugins/index.ts

/// <reference types="cypress" />

//TODO - clean up

/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {}
 
// import dotenv = require('dotenv')
// dotenv.config()

// module.exports = (on, config) => {
//   // copy any needed variables from process.env to config.env
//   config.env.username = process.env.USERNAME

//   // do not forget to return the changed config object!
//   return config
// }

// // integration/spec.js
// it('has username to use', () => {
//   expect(Cypress.env('username')).to.be.a('string')
// })