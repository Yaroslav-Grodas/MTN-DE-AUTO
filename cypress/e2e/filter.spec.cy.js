/// <reference types="cypress" />


describe('filter functionality', () => {

  beforeEach(() => {

    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    /*cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();*/
  });

  it('should allow user to filter Brand', () => {

    cy.contains('.gr-header-menu__link', 'PSA und Sicherheitsausrüstung')
      .click( {force: true} );

    cy.get('#gr-btn-filters-show')
      .click( {force: true} );

    cy.get('.gr-filters')
      .should('exist');

    cy.wait(5000);

    cy.contains('h3', 'Marken')
      .should('exist');

    cy.contains('h3', 'Preis')
      .should('exist');

    cy.contains('h3', 'Farbe')
      .should('exist');

    cy.contains('h3', 'Kategorie')
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

  it.skip('should allow user to filter Price', () => {

  });

  it.skip('should allow user to filter Type', () => {

    cy.contains('.gr-header-menu__link', 'PSA und Sicherheitsausrüstung')
      .click( {force: true} );

    cy.get('#gr-btn-filters-show')
      .click();

    cy.get('.gr-filters')
      .should('exist');

    cy.wait(5000);

    cy.contains('.gr-checkbox-wrap', 'Aluring')
      .click({ force: true });

    cy.get('div.gr-search-popup.gr-hidden')
      .find('a.gr-filters-close')
      .click({ force: true });

    cy.wait(10000);

    cy.get('.gr-card-rich-product__details').each((productCard) => {
      // Use .as() to alias the productCard element
      cy.wrap(productCard).as('productCard');
    
      // Now you can continue with further commands on the aliased productCard
      cy.get('@productCard')
        .find('.gr-card-rich-product__heading')
        .invoke('text')
        .should('include', 'Aluring');
    });
  });

  it('should allow user to filter Kategorie', () => {

    cy.contains('.gr-header-menu__link', 'PSA und Sicherheitsausrüstung')
      .click( {force: true} );

    cy.get('#gr-btn-filters-show')
      .click( {force: true} );

    cy.get('.gr-filters')
      .should('exist');

    cy.wait(5000);

    cy.get('[data-name="Kategorie"]')
      //.find('button[data-filter-index="3"]')
      .click();

    cy.contains('.gr-checkbox-wrap', 'Handschuhe')
      .click({ force: true });

    cy.wait(5000)

    cy.get('div.gr-search-popup.gr-hidden')
      .find('a.gr-filters-close')
      .click({ force: true });

    cy.wait(10000);

    cy.get('.gr-card-rich-product__details').each((productCard) => {
        // Use .as() to alias the productCard element
        cy.wrap(productCard).as('productCard');
      
        // Now you can continue with further commands on the aliased productCard
        cy.get('@productCard')
          .find('.gr-card-rich-product__heading')
          .invoke('text')
          .should('include', 'Handschuhe');
    });
  });

  it('should allow user to filter Color', () => {

    cy.contains('.gr-header-menu__link', 'Arbeitskleidung')
      .click( {force: true} );

    cy.get('#gr-btn-filters-show')
      .click();

    cy.get('.gr-filters')
      .should('exist');

    cy.wait(5000);

    cy.get('[data-name="Army Grün"]')
      .click();

    cy.get('div.gr-search-popup.gr-hidden')
      .find('a.gr-filters-close')
      .click({ force: true });

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Blåkläder Garten Shorts')
      .click();

    cy.get('product-option')
      .should('contain', 'Army Grün');

  });
});

