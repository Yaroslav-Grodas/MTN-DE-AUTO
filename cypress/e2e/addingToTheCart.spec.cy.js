/// <reference types="cypress" />




describe('Adding to the cart, checkout, removing', () => {

  beforeEach(() => {

    cy.visit('/');

    cy.wait(5000);
    
    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();
    
    /*cy.wait(20000);
    
    cy.get('[aria-label="Close form 3"]')
      .click();*/  
  });

  it('should check that cart is empty', () => {

    cy.get('.gr-icon-cart-empty')
      .click();

    cy.wait(2000);

    cy.get('h2')
      .should('contain.text', 'Ihr Warenkorb ist leer');

    cy.contains('.gr-btn--outline', 'Weiter shoppen')
      .should('exist');
  });

  it('should add product to the cart', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'AED')
      .click();

    cy.assertPageUrl('/collections/aed');

    cy.get('h1')
      .should('contain.text', 'AED');

    cy.wait('@gettingBrand')

    //cy.wait(10000);

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    cy.contains('.gr-card-rich-product__heading', 'AED Traversenklemme 20KG')
      .click();

    //cy.wait('@gettingProduct');

    //cy.wait(2000);

    cy.assertPageUrl('/products/aed-truss-clamp-20kg');
    
    cy.get('h1')
      .should('contain.text', 'AED Traversenklemme 20KG');
    cy.get('.gr-price__container')
      .should('exist');

    cy.intercept('GET', '/cart.json').as('addingToCart');


    cy.get('.product-form__submit')
      .click();

    cy.wait('@addingToCart');

    //cy.wait(2000);

    cy.get('.gr-count-bubble')
      .should('exist');

    cy.wait(2000);

    //cy.intercept('GET', '/cart.json').as('checkingCart');

    //cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen')
      //.click();
    //cy.wait('@checkingCart');
    //cy.wait(2000);
    //cy.url()
      //.should('include', '/cart');
    cy.contains('h2', 'Ihr Warenkorb')
      .should('exist');
    cy.contains('.rebuy-cart__checkout-button', ' Zur Kasse')
      .should('exist');
    cy.contains('.rebuy-cart__flyout-item-product-title', 'AED Traversenklemme 20KG')
      .should('exist');
    cy.contains('.rebuy-cart__flyout-subtotal-label', 'Zwischensumme (1 Artikel)')
      .should('exist');
    cy.get('.rebuy-cart__flyout-item-quantity')
      .should('exist');
    cy.get('.rebuy-cart__flyout-recommendations')
      .should('exist');
  });

  it('should proceed to checkout', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'Crewsaver')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/crewsaver');

    cy.get('h1')
      .should('contain.text', 'Crewsaver');

    cy.wait('@gettingBrand');

    //cy.wait(10000);

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    cy.contains('.gr-card-rich-product__heading', 'Crewsaver Seacrewsader 275N 3D feuerhemmende Schwimmweste 83220')
      .click();

    //cy.wait('@gettingProduct')

    //cy.wait(2000);

    cy.assertPageUrl('/products/hansen-seacrewsader-275n-3d-fire-retardant-life-jacket-83220?variant=46681051627855');

    cy.get('h1')
      .should('contain.text', 'Crewsaver Seacrewsader 275N 3D feuerhemmende Schwimmweste 83220');
    cy.get('.gr-price__container')
      .should('exist');

      

      Cypress.Commands.add('assertValueIncludesSavedValue', (otherValue, savedValue) => {
        const numericRegex = /£([\d,.]+)/g;
        const matches = numericRegex.exec(otherValue);
        if (matches && matches[1]) {
          const otherNumericPart = matches[1].replace(/[^0-9,.]/g, ''); // Extract numeric part with decimal point and commas
          console.log('Other Value:', otherNumericPart); // Log the other value in the console
          expect(otherNumericPart).to.include(savedValue, 'Saved numeric value is included in the other value');
        } else {
          console.error('No numeric value found in otherValue');
        }
      });
      
      cy.get('span.price-item--tax-include', { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then((value) => {
          const numericRegex = /£([\d,.]+)/g;
          const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            const savedValue = matches[1].replace(/[^0-9,.]/g, ''); // Extract numeric part with decimal point and commas
            console.log('Saved Value:', savedValue); // Log the saved value to the console
            return savedValue; // Return the value to be aliased
          } else {
            console.error('No numeric value found in savedValue');
          }
        })
        .as('savedTextValue'); // Alias the value as 'savedTextValue'
      cy.intercept('GET', '/cart.json').as('addingToCart');
      // Move the following part outside of the 'then' block
      cy.get('.product-form__submit').click().then(() => {
        cy.wait('@addingToCart');
        //cy.wait(5000);
        cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen')
          .click( {force: true} ).then(() => {
          cy.get('@savedTextValue').then((savedValue) => {
            cy.get('span.price--end-include-tax')
              .invoke('text')
              .then((otherValue) => {
                cy.assertValueIncludesSavedValue(otherValue, savedValue);
              });
          });
        });
      });
      
    cy.get('.rebuy-cart__checkout-button')
      .click();

    cy.wait(2000);

    cy.url()
      .should('include', '/checkouts');

    cy.contains('div', 'Express Checkout')
      .should('exist');

    cy.contains('div', 'Kontakt')
      .should('exist');

    cy.contains('div', 'Lieferadresse')
      .should('exist');

    cy.get('[href="https://shopmtn.de/cart"]')
      .should('exist');

    cy.contains('Crewsaver Seacrewsader 275N 3D feuerhemmende Schwimmweste 83220')
      .should('be.visible');

  });

  it('should remove product from the cart', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.intercept('GET', 'https://de.app.mountainproductions.com/api/get_data?shop=mtn-shop-de-test.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'Beneca')
      .click();

    cy.wait(2000);

    cy.assertPageUrl('/collections/beneca');

    cy.get('h1')
      .should('contain.text', 'Beneca');

    cy.wait('@gettingBrand');

    //cy.wait(10000);

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    cy.contains('.gr-card-rich-product__heading', 'Beneca 35 mm Spanngurt')
      .click();

    //cy.wait('@gettingProduct');

    //cy.wait(2000);

    cy.assertPageUrl('/products/beneca-spanngurt-35mm?variant=40567298228390');

    cy.get('h1')
      .should('contain.text', 'Beneca 35 mm Spanngurt');
    cy.get('.gr-price__container')
      .should('exist');

    cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.get('.product-form__submit')
      .click();

    cy.wait('@addingToCart')

    //cy.wait(2000);

    cy.get('.gr-count-bubble')
      .should('exist');

    cy.wait(2000);

    //cy.intercept('GET', '/cart.json').as('checkingCart');

    cy.contains('.gr-cart__checkout-btn', 'Warenkorb ansehen')
      .click( {force: true} );

    //cy.wait('@checkingCart');

    //cy.wait(2000);
  
    //cy.assertPageUrl('/cart');

    /*cy.contains('h1', 'Dein Warenkorb')
      .should('exist');
    cy.contains('#checkout', 'Auschecken')
      .should('exist');
    cy.contains('.shopify-section', 'Beneca 35 mm Spanngurt')
      .should('exist');
    cy.contains('.gr-link', 'Weiter shoppen')
      .should('exist');
    cy.get('.cart__dynamic-checkout-buttons')
      .should('exist');
    cy.get('.gr-cart-footer-subtotal-wrap')
      .should('exist');*/

    cy.contains('h2', 'Ihr Warenkorb')
      .should('exist');
    cy.contains('.rebuy-cart__checkout-button', ' Zur Kasse')
      .should('exist');
    cy.contains('.rebuy-cart__flyout-item-product-title', 'Beneca 35 mm Spanngurt')
      .should('exist');
    cy.contains('.rebuy-cart__flyout-subtotal-label', 'Zwischensumme (1 Artikel)')
      .should('exist');
    cy.get('.rebuy-cart__flyout-item-quantity')
      .should('exist');
    cy.get('.rebuy-cart__flyout-recommendations')
      .should('exist');

      /*cy.get('.gr-cart-item__del-btn').first().click( {force: true} );*/ 

    cy.get('.rebuy-cart__flyout-item-remove').click( {force: true} ); 

    cy.wait(4000);

    cy.get('.rebuy-cart__flyout-item-product-title')
      .should('not.exist');

    cy.contains('.ql-align-center', 'Ihr Warenkorb ist leer! ')
      .should('exist');

    cy.contains('.ql-align-center', ' Jetzt einkaufen!')
      .should('exist');

  });
});