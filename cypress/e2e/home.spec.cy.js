/// <reference types="cypress" />

describe('template spec', () => {
  it('should visit home page and check all main elements', () => {
    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();

    cy.get('.gr-announcement-bar__wrapper')
      .contains('Sie möchten ein individuelles Angebot? Hier klicken & Anfrage senden. ');

    cy.get('.gr-search-form')
      .should('exist');

    cy.get('.gr-logo')
      .click();
    cy.assertPageUrl('/');

    cy.get('.gr-header-btn--account')
      .click();
    cy.assertPageUrl('/account/login');

    cy.get('.gr-logo')
      .click();

    cy.get('[href="/cart"]')
      .click();
    cy.assertPageUrl('/cart')

    cy.get('.gr-logo')
      .click();

    cy.get('.gr-inc-switcher')
      .should('exist');

    cy.get('.gr-header-menu')
      .contains('a', 'Industrietechnik und -maschinen');
    cy.get('.gr-header-menu')
      .contains('a', 'PSA & Sicherheitsausrüstung');
    cy.get('.gr-header-menu')
      .contains('a', 'Veranstaltungstechnik');
    cy.get('.gr-header-menu')
      .contains('a', 'Arbeitskleidung');
    cy.get('.gr-header-menu')
      .contains('a', 'Marken');

    cy.get('.gr-slide__wrapper-image')
      .should('exist');

    cy.contains('h2', 'Bestseller')
      .should('exist');

    cy.get('.gr-slider-showcase')
      .should('exist');

    cy.contains('h2', 'Unsere Marken')
      .should('exist');

    cy.contains('h2', 'ÜBER UNS')
      .should('exist');

    cy.contains('.gr-btn', 'Individuelles Angebot anfordern')
      .should('exist')

    cy.get('.gr-logo')
      .click();

    cy.get('.gr-footer__business-card')
      .find('a.gr-footer__logo-wrapper')
      .should('exist');
    cy.get('.gr-footer__business-card')
      .find('.gr-footer__address', { timeout: 10000 }) // Increase the timeout if needed
      .should('exist');
    cy.get('.gr-footer__business-card')
      .find('a[href="https://forms.monday.com/forms/bd3fd18444c5de13e467f7448d2f7b38?r=use1"]')
      .should('exist');

    cy.get('.gr-footer__navigation')
      .contains('a', 'ÜBER UNS');
    cy.get('.gr-footer__navigation')
      .contains('a', 'IMPRESSUM');
    cy.get('.gr-footer__navigation')
      .contains('a', 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN');
    cy.get('.gr-footer__navigation')
      .contains('a', 'DATENSCHUTZERKLÄRUNG');
    cy.get('.gr-footer__navigation')
      .contains('a', 'ZAHLUNG & VERSAND');
    cy.get('.gr-footer__navigation')
      .contains('a', 'WIDERRUFSRECHT');
    cy.get('.gr-footer__navigation')
      .contains('a', 'VERPACKUNGSHINWEISE');
    cy.get('.gr-footer__navigation')
      .contains('a', 'KARRIERE');
    cy.get('.gr-footer__navigation')
      .contains('a', 'ANGEBOTSANFRAGE');
    cy.get('.gr-footer__navigation')
      .contains('a', 'KUNDENKONTO');
    cy.get('.gr-footer__navigation')
      .contains('a', 'BLOGS');
    cy.get('.gr-footer__navigation')
      .contains('a', 'FEEDBACK');
    cy.get('.gr-footer__navigation')
      .contains('a', 'FAQ');
    cy.get('.gr-footer__navigation')
      .contains('a', 'KONTAKTAUFNAHME');
  
    cy.get('.gr-footer__actions')
      .find('.gr-footer__title')
      .should('contain.text', 'NEWSLETTER');

    cy.get('.gr-footer__actions')
      .find('.klaviyo_form_trigger')
      .should('exist');

    cy.get('.icon-facebook')
      .should('exist');
    cy.get('.icon-instagram')
      .should('exist');
    cy.get('.icon-twitter')
      .should('exist');
    cy.get('.icon-youtube')
      .should('exist');
    cy.get('.icon-mail')
      .should('exist');

    cy.get('a[href="https://www.facebook.com/mtnshopde"]')
      .should('exist');
    cy.get('a[href="https://www.instagram.com/mtnshopde/"]')
      .should('exist');
    cy.get('a[href="https://twitter.com/mtnshopde"]')
      .should('exist');
    cy.get('a[href="https://www.youtube.com/channel/UCgO36nA9fDa5kUotQLqvfrw"]')
      .should('exist');
    cy.get('a[href="mailto:info@shopmtn.de"]')
      .should('exist');

    cy.get('.gr-footer__branch-list')
      .should('exist');
    
    
  });
});