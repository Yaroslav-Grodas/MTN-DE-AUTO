/// <reference types="cypress" />

describe('career page', () => {

  it('should allow user to visit career page', () => {

    cy.visit('https://shopmtn.de/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();

    cy.contains('.gr-footer__nav-link', 'KARRIERE')
      .click();

    cy.url()
      .should('include', '/aktuelle-stellenausschreibungen');

    cy.get('h1')
      .should('contain.text', 'Aktuelle Stellenausschreibungen');

    cy.get('.gr-main-page__content')
      .should('exist');

    cy.get('a[href="mailto:info@shopmtn.de"]')
      .should('contain.text', 'info@shopmtn.de');

  });

});