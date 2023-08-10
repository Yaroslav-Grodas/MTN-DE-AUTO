/// <reference types="cypress" />

describe('search functionality', () => {

  const product = {
    nameFirst: 'Petzl WILLIAM Karabiner',
    nameSecond: '3M Peltor™ X5 Gehörschutz, SNR=37dB', 
    nameThird: 'Kuzar Line Array Hängepunkt Aufsatz AGR-1',
    nameFourth: 'CM Birnenglied', 
    nameFifth: 'Blåkläder Softshell Jacke 4749',
    nameSixth: 'KONG - Riggingplatte 4RIG - orange', 
    nameSeventh: 'Tourslider Kettenzuggleiter',
    nameEighth: 'Yale RLSP Ratschlastspanner', 
  }

  before(() => {

    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();
  });  

  it('should allow user to search different products', () => {

    cy.get('#Search-In-Modal')
      .type(product.nameFirst);

    cy.get('[data-js="productTitle"]')
      .should('contain', product.nameFirst)
      .click();

    cy.wait(4000);

    

    cy.contains('span', product.nameFirst)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFirst);

    cy.get('.gr-logo-wrapper')
      .click();

    
    
    cy.get('#Search-In-Modal')
      .type(product.nameSecond);

    cy.get('[data-js="productTitle"]')
      .should('contain', product.nameSecond)
      .click();
      
    cy.wait(4000);

    

    cy.contains('span', product.nameSecond)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSecond);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameThird);

    cy.get('.gr-link')
      .contains(product.nameThird)
      .click();

    cy.wait(4000);

    

    cy.contains('span', product.nameThird)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameThird);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameFourth);

    cy.get('[data-js="productTitle"]')
      .should('contain', product.nameFourth)
      .click();

    cy.wait(4000);

    

    cy.contains('span', product.nameFourth).should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFourth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameFifth);

    cy.get('[data-js="productTitle"]')
      .should('contain', product.nameFifth)
      .click();

    cy.wait(4000);

    

    cy.contains('span', product.nameFifth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFifth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameSixth);

    cy.get('.gr-link')
      .contains(product.nameSixth)
      .click();

    cy.wait(4000);

    

    cy.contains('span', product.nameSixth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSixth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameSeventh);

    cy.get('.gr-link')
      .contains(product.nameSeventh)
      .click();

    cy.wait(4000);

    

    cy.contains('span', product.nameSeventh)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSeventh);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameEighth);

    cy.get('.gr-link')
      .contains(product.nameEighth)
      .click();

    cy.wait(4000);

    

    cy.contains('span', product.nameEighth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameEighth);

    cy.get('.gr-logo-wrapper')
      .click();
  }); 
});