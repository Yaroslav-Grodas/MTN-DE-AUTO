/// <reference types="cypress" />

describe('calculate shipping', () => {

  beforeEach(() => {

    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    /*cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();*/
  });  

  it('should allow user to calculate shipping of the product FIRST case', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Beneca')
      .click();

    cy.assertPageUrl('/collections/beneca');

    cy.get('h1')
      .should('contain.text', 'Beneca');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Beneca 50 mm einteiliger Spanngurt')
      .click();

    cy.get('h1')
      .should('contain.text', 'Beneca 50 mm einteiliger Spanngurt');

    cy.wait(2000);

    cy.contains('.gr-summary__heading', 'Versandkostenrechner')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('Deutschland');

    cy.get('#gr_shipping_calculator_zip')
      .type('10115');

    cy.contains('.gr-shipping-calc__submit', 'Versandkosten berechnen')
      .click();

    cy.get('.gr-shipping-calc__response')
      .should('exist');
     
  });

  it('should allow user to calculate shipping of the product SECOND case', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Edelweiss')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/edelweiss');;

    cy.get('h1')
      .should('contain.text', 'Edelweiss');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'EDELWEISS Alukarabiner O3 oval trilock')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'EDELWEISS Alukarabiner O3 oval trilock');

    cy.wait(2000);

    cy.contains('.gr-summary__heading', 'Versandkostenrechner')
      .click();

    cy.wait(2000);

    cy.get('#gr_shipping_calculator_country')
      .select('Belgien');

    cy.get('#gr_shipping_calculator_zip')
      .type('3831');

    cy.contains('.gr-shipping-calc__submit', 'Versandkosten berechnen')
      .click();

    cy.wait(2000);

    cy.get('.gr-shipping-calc__response')
      .should('exist');

  });

  it('should allow user to calculate shipping of the product THIRD case', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Hansen')
      .click();

    cy.assertPageUrl('/collections/hansen-protection');

    cy.get('h1')
      .should('contain.text', 'Hansen');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Hansen Protection Ersatz-Schrittgurt für Leisure Life Jacken 82964')
      .click();

    cy.get('h1')
      .should('contain.text', 'Hansen Protection Ersatz-Schrittgurt für Leisure Life Jacken 82964');

    cy.wait(2000);

    cy.contains('.gr-summary__heading', 'Versandkostenrechner')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('Niederlande');

    cy.get('#gr_shipping_calculator_zip')
      .type('3067 TT');

    cy.contains('.gr-shipping-calc__submit', 'Versandkosten berechnen')
      .click();

    cy.get('.gr-shipping-calc__response')
      .should('exist');

  });

  it('should allow user to calculate shipping of the product FOURTH case', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Safetex')
      .click();

    cy.assertPageUrl('/collections/safetex');

    cy.get('h1')
      .should('contain.text', 'Safetex');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Safetex Rundschlinge SX schwarz - 10 Stück')
      .click();

    cy.get('h1')
      .should('contain.text', 'Safetex Rundschlinge SX schwarz - 10 Stück');

    cy.wait(2000);

    cy.contains('.gr-summary__heading', 'Versandkostenrechner')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('Österreich');

    cy.get('#gr_shipping_calculator_zip')
      .type('4821');

    cy.contains('.gr-shipping-calc__submit', 'Versandkosten berechnen')
      .click();

    cy.get('.gr-shipping-calc__response')
      .should('exist');

  });

  it('negative scenarios in the shipping calculation', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Crewsaver')
      .click();

    cy.assertPageUrl('/collections/crewsaver');

    cy.get('h1')
      .should('contain.text', 'Crewsaver');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Crewsaver Premier Kinderschwimmweste 83205')
      .click();

    cy.get('h1')
      .should('contain.text', 'Crewsaver Premier Kinderschwimmweste 83205');

    cy.wait(2000);

    cy.contains('.gr-summary__heading', 'Versandkostenrechner')
      .click();

    cy.get('#gr_shipping_calculator_zip')
      .type('kkk');

    cy.contains('.gr-shipping-calc__submit', 'Versandkosten berechnen')
      .click();

    cy.get('.gr-shipping-calc__hint')
      .should('contain.text', 'Bitte Land auswählen');

    cy.wait(2000);

    cy.get('#gr_shipping_calculator_country')
      .select('Österreich');

    cy.contains('.gr-shipping-calc__submit', 'Versandkosten berechnen')
      .click();
    
    cy.contains('.gr-shipping-title', 'Error:')
      .should('exist');

    

    
  });
});