/// <reference types="cypress" />

describe('Increase and decrease quantity functionality', () => {

    beforeEach(() => {

      cy.visit('/');

      cy.wait(5000);
    
      cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
        .click();
    
      /*cy.wait(20000);
    
      cy.get('[aria-label="Close form 3"]')
        .click();*/  
    });

  it('should allow user to increase and decrease quantity FIRST PRODUCT', () => {
    

    cy.contains('.gr-header-menu__link', 'Marken')
      .click( {force: true} );

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.get('[aria-label="Close dialog 1"]')
      .click( {force: true} );

      cy.wait(2000)

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.get('[href="/collections/reutlinger"]').first()
      .click( {force: true} );

    cy.wait(2000);

    cy.assertPageUrl('/collections/reutlinger');

    cy.get('h1')
      .should('contain.text', 'Reutlinger');

    cy.wait('@gettingBrand');

    cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    cy.contains('.gr-card-rich-product__heading', 'Reutlinger Drahtseilhalter SV III ZW Gabel')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Reutlinger Drahtseilhalter SV III ZW Gabel');

    cy.wait('@gettingProduct');

    cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait('@addingToCart');
        cy.intercept('GET', '/cart.json').as('checkingCart');
        cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen').click( {force: true} )
      });

    cy.wait('@checkingCart');

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Reutlinger Drahtseilhalter SV III ZW Gabel');

    cy.get('.quantity__input')
      .invoke('val').as('initialQuantity')
      .then((initialQuantity) => {
        cy.log('Initial Quantity:', initialQuantity);
    
        // Click the button to increase the quantity
        cy.get('button[name="plus"]').last().click( {force: true} );

        cy.wait(3000);
    
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

            cy.get('button[name="minus"]').last().click( {force: true} );

            cy.wait(3000);

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
    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'Kuzar')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/kuzar');

    cy.get('h1')
      .should('contain.text', 'Kuzar');

    cy.wait('@gettingBrand');

    cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');


    cy.contains('.gr-card-rich-product__heading', 'Kuzar Line Array Lift K-50')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Kuzar Line Array Lift K-50');

    cy.wait('@gettingProduct');

    cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.contains('.product-form__submit', 'In den Warenkorb')
      .click()
      .then(() => {
        cy.wait('@addingToCart');
        cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen')
          .click( {force: true} );
      });

    cy.wait('@addingToCart');

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Kuzar Line Array Lift K-50');

    cy.get('.quantity__input')
      .invoke('val').as('initialQuantity')
      .then((initialQuantity) => {
        cy.log('Initial Quantity:', initialQuantity);
    
        // Click the button to increase the quantity
        cy.get('button[name="plus"]').last().click( {force: true} );

        cy.wait(3000);
    
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

            cy.get('button[name="minus"]').last().click( {force: true} );

            cy.wait(3000);

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

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.get('[href="/collections/pfaff-silberblau"]').first()
      .click( {force: true} );

    cy.wait(2000);

    cy.assertPageUrl('/collections/pfaff-silberblau');

    cy.get('h1')
      .should('contain.text', 'Pfaff-silberblau');

    cy.wait('@gettingBrand');

    cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    cy.contains('.gr-card-rich-product__heading', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)');

    cy.wait('@gettingProduct');

    cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait('@addingToCart');
        cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen')
          .click( {force: true} );
      });

    cy.wait('@addingToCart');

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)');

    cy.get('.quantity__input')
      .invoke('val').as('initialQuantity')
      .then((initialQuantity) => {
        cy.log('Initial Quantity:', initialQuantity);
    
        // Click the button to increase the quantity
        cy.get('button[name="plus"]').last().click( {force: true} );

        cy.wait(3000);
    
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

            cy.get('button[name="minus"]').last().click( {force: true} );

            cy.wait(3000);

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
