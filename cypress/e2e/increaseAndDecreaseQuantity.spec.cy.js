/// <reference types="cypress" />

describe('Increase and decrease quantity functionality', () => {

    beforeEach(() => {

      cy.visit('/');

      cy.wait(5000);
    
      cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
        .click();
    
      cy.wait(20000);
    
      cy.get('[aria-label="Close form 3"]')
        .click();  
    });

  it('should allow user to increase and decrease quantity FIRST PRODUCT', () => {
    

    cy.get('a[href="/pages/unsere-marken"]')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Tigrip')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/tigrip');

    cy.get('h1')
      .should('contain.text', 'Tigrip');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Tigrip® Permanent-Lasthebemagnet TPM')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Tigrip® Permanent-Lasthebemagnet TPM');

    cy.wait(2000);

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get('a[href="/cart"]').click( {force: true} )
      });

    cy.wait(2000);

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Tigrip® Permanent-Lasthebemagnet TPM');

    cy.get('.quantity__input')
      .invoke('val').as('initialQuantity')
      .then((initialQuantity) => {
        cy.log('Initial Quantity:', initialQuantity);
    
        // Click the button to increase the quantity
        cy.get('button[name="plus"]').click();
    
        // Get the updated quantity
        cy.get('.quantity__input')
          .invoke('val').as('updatedQuantity')
          .then((updatedQuantity) => {
            cy.log('Updated Quantity:', updatedQuantity);
    
            // Assert that the updated quantity is exactly one greater than the initial quantity
            const parsedInitialQuantity = parseInt(initialQuantity);
            const parsedUpdatedQuantity = parseInt(updatedQuantity);
            expect(parsedUpdatedQuantity).to.equal(parsedInitialQuantity + 1);

            ///cy.wait(5000);

            cy.get('button[name="minus"]').click();

            // Get the updated quantity after decrease
            cy.get('.quantity__input').invoke('val').as('decreasedQuantity')
              .then((decreasedQuantity) => {
                cy.log('Decreased Quantity:', decreasedQuantity);

                // Assert that the decreased quantity is exactly one less than the initial quantity
                const parsedDecreasedQuantity = parseInt(decreasedQuantity);
                expect(parsedDecreasedQuantity).to.equal(parsedInitialQuantity);
            });
        });
    });
  });

  it('should allow user to increase and decrease quantity SECOND PRODUCT', () => {
    cy.get('a[href="/pages/unsere-marken"]')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Kuzar')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/kuzar');

    cy.get('h1')
      .should('contain.text', 'Kuzar');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Kuzar Line Array Lift K-50')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Kuzar Line Array Lift K-50');

    cy.wait(2000);

    cy.contains('.product-form__submit', 'In den Warenkorb legen')
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get('a[href="/cart"]').click({force: true})
      });

    cy.wait(2000);

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Kuzar Line Array Lift K-50');

    cy.get('.quantity__input')
      .invoke('val').as('initialQuantity')
      .then((initialQuantity) => {
        cy.log('Initial Quantity:', initialQuantity);
    
        // Click the button to increase the quantity
        cy.get('button[name="plus"]').click();
    
        // Get the updated quantity
        cy.get('.quantity__input')
          .invoke('val').as('updatedQuantity')
          .then((updatedQuantity) => {
            cy.log('Updated Quantity:', updatedQuantity);
    
            // Assert that the updated quantity is exactly one greater than the initial quantity
            const parsedInitialQuantity = parseInt(initialQuantity);
            const parsedUpdatedQuantity = parseInt(updatedQuantity);
            expect(parsedUpdatedQuantity).to.equal(parsedInitialQuantity + 1);

            ///cy.wait(5000);

            cy.get('button[name="minus"]').click();

            // Get the updated quantity after decrease
            cy.get('.quantity__input').invoke('val').as('decreasedQuantity')
              .then((decreasedQuantity) => {
                cy.log('Decreased Quantity:', decreasedQuantity);

                // Assert that the decreased quantity is exactly one less than the initial quantity
                const parsedDecreasedQuantity = parseInt(decreasedQuantity);
                expect(parsedDecreasedQuantity).to.equal(parsedInitialQuantity);
            });
        });
    });
  });

  it('should allow user to increase and decrease quantity THIRD PRODUCT', () => {

    cy.get('a[href="/pages/unsere-marken"]')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Pfaff-silberblau')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/pfaff-silberblau');

    cy.get('h1')
      .should('contain.text', 'Pfaff-silberblau');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)');

    cy.wait(2000);

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get('a[href="/cart"]').click( {force: true} )
      });

    cy.wait(2000);

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)');

    cy.get('.quantity__input')
      .invoke('val').as('initialQuantity')
      .then((initialQuantity) => {
        cy.log('Initial Quantity:', initialQuantity);
    
        // Click the button to increase the quantity
        cy.get('button[name="plus"]').click();
    
        // Get the updated quantity
        cy.get('.quantity__input')
          .invoke('val').as('updatedQuantity')
          .then((updatedQuantity) => {
            cy.log('Updated Quantity:', updatedQuantity);
    
            // Assert that the updated quantity is exactly one greater than the initial quantity
            const parsedInitialQuantity = parseInt(initialQuantity);
            const parsedUpdatedQuantity = parseInt(updatedQuantity);
            expect(parsedUpdatedQuantity).to.equal(parsedInitialQuantity + 1);

            ///cy.wait(5000);

            cy.get('button[name="minus"]').click();

            // Get the updated quantity after decrease
            cy.get('.quantity__input').invoke('val').as('decreasedQuantity')
              .then((decreasedQuantity) => {
                cy.log('Decreased Quantity:', decreasedQuantity);

                // Assert that the decreased quantity is exactly one less than the initial quantity
                const parsedDecreasedQuantity = parseInt(decreasedQuantity);
                expect(parsedDecreasedQuantity).to.equal(parsedInitialQuantity);
            });
        });
    });
  });
});
