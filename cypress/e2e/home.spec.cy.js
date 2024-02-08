/// <reference types="cypress" />

describe('template spec', () => {
  it('should visit home page and check all main elements', () => {
    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    /*cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();*/

    /*cy.contains('.gr-announcement-bar__wrapper', 'Sie möchten ein individuelles Angebot? Hier klicken und Anfrage senden. ')
      .should('exist');*/

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

    cy.get('.gr-icon-cart-empty')
      .click();
    cy.contains('#SmartCart_title', 'Ihr Warenkorb.')
      .should('exist');
    cy.get('.rebuy-cart__flyout-close')
      .click( {force: true} );  

    cy.get('.gr-logo')
      .click();

    cy.get('.gr-inc-switcher')
      .should('exist');

    cy.contains('.gr-header-menu', 'Industrietechnik und -maschinen')
      .should('exist');
    cy.contains('.gr-header-menu', 'PSA und Sicherheitsausrüstung')
      .should('exist');
    cy.contains('.gr-header-menu', 'Veranstaltungstechnik')
      .should('exist');
    cy.contains('.gr-header-menu', 'ANGEBOTE')
      .should('exist');
    cy.contains('.gr-header-menu', 'Marken')
      .should('exist');

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

    cy.contains('.gr-footer__navigation', 'ÜBER UNS')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'IMPRESSUM')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'DATENSCHUTZERKLÄRUNG')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'ZAHLUNG & VERSAND')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'WIDERRUFSRECHT')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'VERPACKUNGSHINWEISE')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'KARRIERE')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'ANGEBOTSANFRAGE')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'KUNDENKONTO')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'BLOGS')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'FEEDBACK')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'FAQ')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'KONTAKTAUFNAHME')
      .should('exist');

    cy.contains('.gr-footer__nav', 'MTN SHOP')
      .find('li')
      .should('have.length', 8);

    cy.contains('.gr-footer__nav', 'HILFE & SERVICE')
      .find('li')
      .should('have.length', 6);
      
    cy.get('.gr-footer__actions')
      .find('.gr-footer__title')
      .should('contain.text', 'FOLGEN SIE UNS AUF SOCIAL MEDIA!');

    cy.get('.gr-footer__actions')
      .find('.klaviyo_form_trigger')
      .should('exist');

    cy.get('.icon-facebook')
      .should('exist');
    cy.get('.icon-instagram')
      .should('exist');
    cy.get('.icon-xcorp')
      .should('exist');
    cy.get('.icon-youtube')
      .should('exist');
    cy.get('.icon-mail--s')
      .should('exist');

    cy.get('a[href="https://www.facebook.com/mtnshopde"]')
      .should('exist');
    cy.get('a[href="https://www.instagram.com/mtnshopde/"]')
      .should('exist');
    cy.get('a[href="https://twitter.com/mtnshopde"]')
      .should('exist');
    cy.get('a[href="https://www.youtube.com/@mtnshopde79"]')
      .should('exist');
    cy.get('a[href="mailto:info@shopmtn.de"]')
      .should('exist');

    cy.get('.gr-footer__branch-list')
      .should('exist');
    
    
  });
});