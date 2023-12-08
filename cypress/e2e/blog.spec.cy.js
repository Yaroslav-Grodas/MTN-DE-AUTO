/// <reference types="cypress" />

describe('blog page', () => {
  it('should visit blog page and check the main parts', () => {
 
    cy.visit('/');

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    /*cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();*/

    cy.contains('.gr-footer__nav-link', 'BLOGS')
      .click();

    cy.assertPageUrl('/blogs/beitraege');
    
    cy.get('h1')
      .should('contain.text', 'Beiträge');

    cy.get('.gr-blog-search')
      .should('exist');

    cy.get('.gr-main-blog__tags-list')
      .should('exist');

    cy.get('div.gr-main-blog__articles')
      .find('a')
      .its('length')
      .should('be.gt', 1);

    cy.get('.gr-pagination')
      .should('exist');

    cy.contains('.gr-article-card__heading', 'Schutzhelme von Kask')
      .click();

    cy.get('h1')
      .should('contain.text', 'Schutzhelme von Kask');

    cy.get('.gr-author-info')
      .should('contain.text', 'Deniz Tombak');

    cy.get('.gr-sharing-wrap')
      .should('exist');

    cy.get('div.gr-additional-articles')
      .find('a')
      .its('length')
      .should('be.gt', 1);

    
  });
});