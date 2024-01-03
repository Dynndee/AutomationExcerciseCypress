// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// creating custom command for Iframe and other iframes 
// just call getIframe and itt will return Iframe locator

Cypress.Commands.add('getIframe', (iframe)=>{

    return cy.get(iframe) 
    .its('0.contentDocument.body')  
    .should('be.visible')   
    .then(cy.wrap);


})

Cypress.Commands.add("loginapp", (email,password)=>{

    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get("button[class='button-1 login-button']").click();

})

//cypress command for clicking on link using link label instead of locators


Cypress.Commands.add('clickLink', (label)=>{

    cy.get('a').contains(label).click();
     

})


// file upload

import 'cypress-file-upload';

// Import commands.js using ES2015 syntax:
import './commands';

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


require ('@4tw/cypress-drag-drop')  // file upload


