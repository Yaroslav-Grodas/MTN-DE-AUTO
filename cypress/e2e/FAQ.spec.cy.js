/// <reference types="cypress" />

describe('FAQ page', () => {

  it('should allow user to visit FAQ page', () => {

    cy.visit('https://shopmtn.de/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();

    cy.contains('.gr-footer__nav-link', 'FAQ')
      .click();

    cy.url()
      .should('include', '/faqs');

    cy.get('h1')
      .should('contain.text', 'FAQs');

    cy.get('.gr-main-page__content')
      .should('exist');

    cy.get('#GeneralTab')
      .click();

    cy.wait(2000);

    cy.get('.FAQaccordion')
      .should('contain.text', ' Wieso sollte ich bei Ihnen bestellen?');

    cy.get('[id="Shipping&Returns"]')
      .click();


    cy.get('.FAQaccordion')
      .should('contain.text', ' Kann ich aktuell mit Lieferverzögerungen rechnen?');

    cy.wait(2000);

    cy.get('#Sizing')
      .click();

    cy.wait(2000);

    cy.get('.FAQaccordion')
      .should('contain.text', ' Woher weiß ich welche Größe ich in Schuhen, Kleidung und Handschuhen brauche? ');
  });
});