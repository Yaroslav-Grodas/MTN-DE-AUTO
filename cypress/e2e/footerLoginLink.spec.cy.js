/// <reference types="cypress" />

describe('footer login link', () => {

  it('should allow user to use footer login ling to login or register account', () => {

    cy.visit('https://shopmtn.de/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();

    cy.contains('.gr-footer__nav-link', 'KUNDENKONTO')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get('h1')
      .should('contain.text', 'Login');

    cy.get('#login')
      .should('exist');

    cy.get('a[href="/account/register"]')
      .should('exist')
      .click();

    cy.url()
      .should('include', '/account/register');

    cy.get('h1')
      .should('contain.text', 'Konto erstellen');

    cy.findByPlaceholder('Vorname')
      .should('exist');

    cy.findByPlaceholder('Nachname')
      .should('exist');

    cy.findByPlaceholder('E-Mail')
      .should('exist');

    cy.findByPlaceholder('Passwort')
      .should('exist');

    cy.contains('.gr-btn', 'Erstellen')
      .should('exist');

    cy.contains('a[href="/account/login"]', 'Login')
      .should('exist');
  });  
});