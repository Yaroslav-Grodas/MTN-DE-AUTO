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

    cy.contains('.gr-btn', 'Allgemeines')
      .click();

    cy.contains('.gr-accordion__title', 'Wieso sollte ich bei Ihnen bestellen?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    cy.contains('.gr-accordion__title', 'Gibt es Ermäßigungen?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    cy.contains('.gr-accordion__title', 'Ich finde das gesuchte Produkt nicht. Bedeutet das, Sie führen dieses nicht?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    

    cy.contains('.gr-btn', 'Versand & Rückgabe')
      .click();

    cy.contains('.gr-accordion__title', 'Kann ich aktuell mit Lieferverzögerungen rechnen?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    cy.contains('.gr-accordion__title', 'Wo kommt meine Bestellung her?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    cy.contains('.gr-accordion__title', 'Erhalte ich Informationen zur Sendungsverfolgung für meine Bestellung?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    cy.contains('.gr-accordion__title', 'Was ist, wenn ich meine Bestellung ändern muss?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    cy.contains('.gr-accordion__title', 'Ich möchte meinen Kauf zurückgeben. Was muss ich tun?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');



    cy.contains('.gr-btn', 'Größen')
      .click();

    cy.contains('.gr-accordion__title', 'Woher weiß ich welche Größe ich in Schuhen, Kleidung und Handschuhen brauche?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

    cy.contains('.gr-accordion__title', 'Kann ich ein Produkt umtauschen, wenn es mir nicht passt?')
      .click();

    cy.get('.gr-accordion__content')
      .should('exist')
      .should('not.be.empty');

  });
});