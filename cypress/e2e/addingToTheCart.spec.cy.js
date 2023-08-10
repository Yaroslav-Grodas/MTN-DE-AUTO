/// <reference types="cypress" />




describe('Adding to the cart, checkout, removing', () => {

  beforeEach(() => {

    cy.visit('/');

    cy.wait(5000);
    
    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();
    
    cy.wait(20000);
    
    cy.get('[aria-label="Close form 3"]')
      .click();  
  });

  it('should check that cart is empty', () => {

    cy.get('a[href="/cart"]')
      .click();

    cy.get('h1')
      .should('contain.text', 'Ihr Warenkorb ist leer');

    cy.contains('.gr-link', 'Weiter shoppen')
      .should('exist');
  });

  it('should add product to the cart', () => {

    cy.get('a[href="/pages/unsere-marken"]')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'AED')
      .click();

    cy.assertPageUrl('/collections/aed');

    cy.get('h1')
      .should('contain.text', 'AED');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'GRÜNER TEPPICH IM AED-EXPO-STIL')
      .click();

    cy.assertPageUrl('/products/aed-expo-style-gruner-teppich?*');
    
    cy.get('h1')
      .should('contain.text', 'GRÜNER TEPPICH IM AED-EXPO-STIL');
    cy.get('.gr-price__container')
      .should('exist');

    cy.get('.product-form__submit')
      .click();

    cy.get('.gr-count-bubble')
      .should('exist');

    cy.get('a[href="/cart"]')
      .click();
    cy.url()
      .should('include', '/cart');
    cy.contains('h1', 'Dein Warenkorb')
      .should('exist');
    cy.contains('#checkout', 'Auschecken')
      .should('exist');
    cy.get('.shopify-section')
      .contains('GRÜNER TEPPICH IM AED-EXPO-STIL');
    cy.contains('.gr-link', 'Weiter shoppen')
      .should('exist');
    cy.get('.cart__dynamic-checkout-buttons')
      .should('exist');
    cy.get('.gr-cart-footer-subtotal-wrap')
      .should('exist');
  });

  it('should proceed to checkout', () => {

    cy.get('a[href="/pages/unsere-marken"]')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Crewsaver')
      .click();

    cy.assertPageUrl('/collections/crewsaver');

    cy.get('h1')
      .should('contain.text', 'Crewsaver');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Crewsaver Seacrewsader 275N 3D feuerhemmende Schwimmweste 83220')
      .click();

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
      
      // Move the following part outside of the 'then' block
      cy.get('.product-form__submit').click().then(() => {
        cy.wait(5000);
        cy.get('a[href="/cart"]').click().then(() => {
          cy.get('@savedTextValue').then((savedValue) => {
            cy.get('span.price--end-include-tax')
              .invoke('text')
              .then((otherValue) => {
                cy.assertValueIncludesSavedValue(otherValue, savedValue);
              });
          });
        });
      });
      
    cy.get('#checkout')
      .click();

    cy.url()
      .should('include', '/checkouts');

    cy.contains('div', 'Express Checkout')
      .should('exist');

    cy.contains('div', 'Kontakt')
      .should('exist');

    cy.contains('div', 'Lieferadresse')
      .should('exist');

    cy.contains('[type="submit"]', 'Weiter zum Versand')
      .should('exist');

    cy.contains('Crewsaver Seacrewsader 275N 3D feuerhemmende Schwimmweste 83220')
      .should('be.visible');

  });

  it('should remove product from the cart', () => {

    cy.get('a[href="/pages/unsere-marken"]')
      .click();

    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Bollé')
      .click();

    cy.assertPageUrl('/collections/bolle');

    cy.get('h1')
      .should('contain.text', 'Bollé');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Bollé COBRA Schutzbrillen (10 Stück)')
      .click();

    cy.assertPageUrl('/products/bolle-cobfspsi');

    cy.get('h1')
      .should('contain.text', 'Bollé COBRA Schutzbrillen (10 Stück)');
    cy.get('.gr-price__container')
      .should('exist');

    cy.get('.product-form__submit')
      .click();

    cy.get('.gr-count-bubble')
      .should('exist');

    cy.get('a[href="/cart"]')
      .click();
  
    cy.assertPageUrl('/cart');

    cy.contains('h1', 'Dein Warenkorb')
      .should('exist');
    cy.contains('#checkout', 'Auschecken')
      .should('exist');
    cy.get('.shopify-section')
      .contains('Bollé COBRA Schutzbrillen (10 Stück)');
    cy.contains('.gr-link', 'Weiter shoppen')
      .should('exist');
    cy.get('.cart__dynamic-checkout-buttons')
      .should('exist');
    cy.get('.gr-cart-footer-subtotal-wrap')
      .should('exist');

    cy.get('.gr-cart-item__del-btn')
      .click();

    cy.get('.gr-cart-item__link')
      .should('not.exist');

    cy.contains('h1', 'Ihr Warenkorb ist leer')
      .should('exist');

    cy.contains('.gr-link', 'Weiter shoppen')
      .should('exist');

  });
});