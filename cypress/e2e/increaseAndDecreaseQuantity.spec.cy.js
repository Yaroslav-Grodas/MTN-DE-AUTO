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

    /*cy.get('[aria-label="Close dialog 1"]')
      .click( {force: true} );*/

      cy.wait(2000)

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.get('[href="/collections/reutlinger"]').first()
      .click( {force: true} );

    cy.wait(2000);

    cy.assertPageUrl('/collections/reutlinger');

    cy.get('h1')
      .should('contain.text', 'Reutlinger');

    cy.wait('@gettingBrand');

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    cy.contains('.gr-card-rich-product__heading', 'Reutlinger Drahtseilhalter SV III ZW Gabel')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Reutlinger Drahtseilhalter SV III ZW Gabel');

    //cy.wait('@gettingProduct');

    cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait('@addingToCart');
        //cy.intercept('GET', '/cart.json').as('checkingCart');
        cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen').click( {force: true} )
      });

    //cy.wait('@checkingCart');

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Reutlinger Drahtseilhalter SV III ZW Gabel');

      function extractLastDigitFromString(text) {
        const regex = /(\d+)\D*$/;
        const match = text.match(regex);
        return match ? parseInt(match[1]) : NaN;
      }
      
      cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
        .invoke('text')
        .then((initialQuantityText) => {
          const initialQuantity = extractLastDigitFromString(initialQuantityText);
      
          cy.log('Initial Quantity Text:', initialQuantityText); // Log the initial quantity text
      
          // Check if initialQuantity is a valid number
          if (!isNaN(initialQuantity)) {
            // Click the button to increase the quantity
            cy.get('.fa-plus').click({ force: true });
            cy.wait(3000);
      
            // Get the updated quantity
            cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
              .invoke('text')
              .then((updatedQuantityText) => {
                const updatedQuantity = extractLastDigitFromString(updatedQuantityText);
      
                cy.log('Updated Quantity Text:', updatedQuantityText); // Log the updated quantity text
      
                // Check if updatedQuantity is a valid number
                if (!isNaN(updatedQuantity)) {
                  // Assert that the updated quantity is exactly one greater than the initial quantity
                  expect(updatedQuantity).to.equal(initialQuantity + 1);
                } else {
                  throw new Error('Updated Quantity is NaN');
                }
      
                // Click the button to decrease the quantity
                cy.get('.fa-minus').click({ force: true });
                cy.wait(3000);
      
                // Get the decreased quantity
                cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                  .invoke('text')
                  .then((decreasedQuantityText) => {
                    const decreasedQuantity = extractLastDigitFromString(decreasedQuantityText);
      
                    cy.log('Decreased Quantity Text:', decreasedQuantityText); // Log the decreased quantity text
      
                    // Check if decreasedQuantity is a valid number
                    if (!isNaN(decreasedQuantity)) {
                      // Assert that the decreased quantity is exactly one less than the initial quantity
                      expect(decreasedQuantity).to.equal(initialQuantity);
                    } else {
                      throw new Error('Decreased Quantity is NaN');
                    }
                  });
              });
          } else {
            throw new Error('Initial Quantity is NaN');
          }
        });
  });

  it('should allow user to increase and decrease quantity SECOND PRODUCT', () => {
    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'GRABO - Elektro-Vakuumheber')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/grabo');

    cy.get('h1')
      .should('contain.text', 'GRABO - Elektro-Vakuumheber');

    cy.wait('@gettingBrand');

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');


    cy.contains('.gr-card-rich-product__heading', 'GRABO Nemo Elektro-Saugheber')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'GRABO Nemo Elektro-Saugheber');

    //cy.wait('@gettingProduct');

    //cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.contains('.product-form__submit', 'In den Warenkorb')
      .click()
      .then(() => {
        //cy.wait('@addingToCart');
        cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen')
          .click( {force: true} );
      });

    //cy.wait('@addingToCart');

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'GRABO Nemo Elektro-Saugheber');

      function extractLastDigitFromString(text) {
        const regex = /(\d+)\D*$/;
        const match = text.match(regex);
        return match ? parseInt(match[1]) : NaN;
      }
      
      cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
        .invoke('text')
        .then((initialQuantityText) => {
          const initialQuantity = extractLastDigitFromString(initialQuantityText);
      
          cy.log('Initial Quantity Text:', initialQuantityText); // Log the initial quantity text
      
          // Check if initialQuantity is a valid number
          if (!isNaN(initialQuantity)) {
            // Click the button to increase the quantity
            cy.get('.fa-plus').click({ force: true });
            cy.wait(3000);
      
            // Get the updated quantity
            cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
              .invoke('text')
              .then((updatedQuantityText) => {
                const updatedQuantity = extractLastDigitFromString(updatedQuantityText);
      
                cy.log('Updated Quantity Text:', updatedQuantityText); // Log the updated quantity text
      
                // Check if updatedQuantity is a valid number
                if (!isNaN(updatedQuantity)) {
                  // Assert that the updated quantity is exactly one greater than the initial quantity
                  expect(updatedQuantity).to.equal(initialQuantity + 1);
                } else {
                  throw new Error('Updated Quantity is NaN');
                }
      
                // Click the button to decrease the quantity
                cy.get('.fa-minus').click({ force: true });
                cy.wait(3000);
      
                // Get the decreased quantity
                cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                  .invoke('text')
                  .then((decreasedQuantityText) => {
                    const decreasedQuantity = extractLastDigitFromString(decreasedQuantityText);
      
                    cy.log('Decreased Quantity Text:', decreasedQuantityText); // Log the decreased quantity text
      
                    // Check if decreasedQuantity is a valid number
                    if (!isNaN(decreasedQuantity)) {
                      // Assert that the decreased quantity is exactly one less than the initial quantity
                      expect(decreasedQuantity).to.equal(initialQuantity);
                    } else {
                      throw new Error('Decreased Quantity is NaN');
                    }
                  });
              });
          } else {
            throw new Error('Initial Quantity is NaN');
          }
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

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    cy.contains('.gr-card-rich-product__heading', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)')
      .click();

    cy.wait(2000);

    cy.get('h1')
      .should('contain.text', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)');

    //cy.wait('@gettingProduct');

    //cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        //cy.wait('@addingToCart');
        cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen')
          .click( {force: true} );
      });

    //cy.wait('@addingToCart');

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Pfaff ATEX PROLINE Handgabelhubwagen in Edelstahlausführung (HU 20-115 VATP)');

      function extractLastDigitFromString(text) {
        const regex = /(\d+)\D*$/;
        const match = text.match(regex);
        return match ? parseInt(match[1]) : NaN;
      }
      
      cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
        .invoke('text')
        .then((initialQuantityText) => {
          const initialQuantity = extractLastDigitFromString(initialQuantityText);
      
          cy.log('Initial Quantity Text:', initialQuantityText); // Log the initial quantity text
      
          // Check if initialQuantity is a valid number
          if (!isNaN(initialQuantity)) {
            // Click the button to increase the quantity
            cy.get('.fa-plus').click({ force: true });
            cy.wait(3000);
      
            // Get the updated quantity
            cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
              .invoke('text')
              .then((updatedQuantityText) => {
                const updatedQuantity = extractLastDigitFromString(updatedQuantityText);
      
                cy.log('Updated Quantity Text:', updatedQuantityText); // Log the updated quantity text
      
                // Check if updatedQuantity is a valid number
                if (!isNaN(updatedQuantity)) {
                  // Assert that the updated quantity is exactly one greater than the initial quantity
                  expect(updatedQuantity).to.equal(initialQuantity + 1);
                } else {
                  throw new Error('Updated Quantity is NaN');
                }
      
                // Click the button to decrease the quantity
                cy.get('.fa-minus').click({ force: true });
                cy.wait(3000);
      
                // Get the decreased quantity
                cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                  .invoke('text')
                  .then((decreasedQuantityText) => {
                    const decreasedQuantity = extractLastDigitFromString(decreasedQuantityText);
      
                    cy.log('Decreased Quantity Text:', decreasedQuantityText); // Log the decreased quantity text
      
                    // Check if decreasedQuantity is a valid number
                    if (!isNaN(decreasedQuantity)) {
                      // Assert that the decreased quantity is exactly one less than the initial quantity
                      expect(decreasedQuantity).to.equal(initialQuantity);
                    } else {
                      throw new Error('Decreased Quantity is NaN');
                    }
                  });
              });
          } else {
            throw new Error('Initial Quantity is NaN');
          }
        });
  });
});
