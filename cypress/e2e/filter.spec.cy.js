/// <reference types="cypress" />


describe('filter functionality', () => {

  beforeEach(() => {

    cy.visit('https://shopmtn.de/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();
  });

  it.only('should allow user to filter Brand', () => {

    cy.contains('.gr-header-menu__link', 'Sicherheitsausrüstung & PSAgA')
      .click();

    cy.get('#gr-btn-filters-show')
      .click();

    cy.get('.gr-filters')
      .should('exist');

    cy.wait(5000);

    cy.contains('h3', 'Marken')
      .should('exist');

    cy.contains('h3', 'Preis')
      .should('exist');

    cy.contains('h3', 'Farbe')
      .should('exist');

    cy.contains('h3', 'Typ')
      .should('exist');

    cy.contains('h3', 'Spezifikationen')
      .should('exist');

    cy.contains('.gr-checkbox-wrap', 'KASK')
      .click();

    cy.contains('.gr-inc-switcher', 'exkl. MwSt.') /*body*/ 
      .click({ force: true });  /*'center', */

    cy.wait(20000);

    cy.get('.gr-card-rich-product__details').each((productCard) => {
        cy.wrap(productCard).should('contain.text', 'Kask');
    });
      
      
      
  
  });

  it('should allow user to filter Price', () => {

  });

  it('should allow user to filter Type', () => {

  });

  it('should allow user to filter Specification', () => {

  });

  it('should allow user to filter Color', () => {

  });
});
