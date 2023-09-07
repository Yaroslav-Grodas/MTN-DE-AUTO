/// <reference types="cypress" />

describe('contact form and request for quote form', () => {

  beforeEach(() => {
    
    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    /*cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();*/
  });

  it('should allow user to visit contact form', () => {
  
    cy.contains('.gr-footer__nav-link', 'KONTAKTAUFNAHME')
      .click();

    cy.assertPageUrl('/pages/kontakt');

    cy.get('h1')
      .should('contain.text', 'Kontakt');

    cy.get('.gr-main-page__content')
      .should('exist');

    cy.get('.section-gr-contact-form')
      .should('exist');

  });

  it('should allow user to visit reqest for quote page', () => {
 
    cy.contains('.gr-footer__nav-link', 'ANGEBOTSANFRAGE')
      .click();

    cy.assertPageUrl('/pages/angebotsanfrage');

    cy.get('h1')
      .should('contain.text', 'Angebotsanfrage');

    cy.get('.gr-main-page__content')
      .should('exist');

    cy.get('.section-gr-contact-form')
      .should('exist');
  });
});