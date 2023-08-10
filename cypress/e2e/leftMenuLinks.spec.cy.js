/// <reference types="cypress" />

describe('career page, right of withdrawal, packaging notes, payment, data protection, general terms, inprint, about us (left link menu)', () => {

  beforeEach(() => {

    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();

  });

  it('should allow user to visit career page', () => {

    cy.contains('.gr-footer__nav-link', 'KARRIERE')
      .click();

    cy.assertPageUrl('/pages/aktuelle-stellenausschreibungen');

    cy.get('h1')
      .should('contain.text', 'Aktuelle Stellenausschreibungen');

    cy.get('.gr-main-page__content')
      .should('exist');

    cy.get('a[href="mailto:info@shopmtn.de"]')
      .should('contain.text', 'info@shopmtn.de');

  });

  it('should allow user to visit withdrawal page', () => {

    cy.contains('.gr-footer__nav-link', 'WIDERRUFSRECHT')
      .click();

    cy.assertPageUrl('/policies/refund-policy');

    cy.get('h1')
      .should('contain.text', 'Widerrufsrecht');

    cy.get('.shopify-policy__body')
      .should('exist');

  });

  it('should allow user to visit packaging notes page', () => {

    cy.contains('.gr-footer__nav-link', 'VERPACKUNGSHINWEISE')
      .click();

    cy.assertPageUrl('/pages/verpackungshinweise');

    cy.get('h1')
      .should('contain.text', 'Verpackungshinweise');

    cy.get('.gr-main-page__content')
      .should('exist');
  });

  it('should allow user to visit payment page', () => {
 
    cy.contains('.gr-footer__nav-link', 'ZAHLUNG & VERSAND')
      .click();

    cy.assertPageUrl('/policies/shipping-policy');

    cy.get('h1')
      .should('contain.text', 'Versand');

    cy.get('.shopify-policy__body')
      .should('exist');
  });

  it('should allow user to visit data protection page', () => {

    cy.contains('.gr-footer__nav-link', 'DATENSCHUTZERKLÄRUNG')
      .click();

    cy.assertPageUrl('/policies/privacy-policy');

    cy.get('h1')
      .should('contain.text', 'Datenschutzerklärung');

    cy.get('.shopify-policy__body')
      .should('exist');
  });

  it('should allow user to visit general terms page', () => {

    cy.contains('.gr-footer__nav-link', 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN')
      .click();

    cy.assertPageUrl('/policies/terms-of-service');

    cy.get('h1')
      .should('contain.text', 'AGB')

    cy.get('.shopify-policy__body')
      .should('exist');
  });

  it('should allow user to visit imprint page', () => {

    cy.contains('.gr-footer__nav-link', 'IMPRESSUM')
      .click();

    cy.assertPageUrl('/policies/legal-notice');

    cy.get('h1')
      .should('contain.text', 'Impressum');

    cy.get('.shopify-policy__body')
      .should('exist');
  });

  it('should allow user to visit about us page', () => {

    cy.contains('.gr-footer__nav-link', 'ÜBER UNS')
      .click();

    cy.assertPageUrl('/pages/ueber-uns');

    cy.get('h1')
      .should('contain.text', 'Über uns');

    cy.get('img')
      .should('exist')

    cy.get('.gr-main-page__content')
      .should('exist');  
  });

});