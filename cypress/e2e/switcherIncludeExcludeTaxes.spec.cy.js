/// <reference types="cypress" />

describe('switcher taxes', () => {

  beforeEach(() => {

    cy.visit('/');

    cy.wait(5000);

    cy.contains('.needsclick', 'CONTINUE TO MTN SHOP DE')
      .click();

    /*cy.wait(20000);

    cy.get('[aria-label="Close form 3"]')
      .click();*/
  }); 
  
  it('should check if the price is different after clicking the switcher FIRST PRODUCT', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();
      
    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Grabo')
      .click();

    cy.assertPageUrl('/collections/grabo');

    cy.get('h1')
      .should('contain.text', 'GRABO - Elektro-Vakuumheber');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'GRABO PRO Elektro-Vakuumheber')
      .click();

    cy.assertPageUrl('/products/grabo-pro-lifter-20')
    cy.get('h1')
      .should('contain.text', 'GRABO PRO Elektro-Vakuumheber');
    cy.get('.gr-price__container')
      .should('exist');

    let savedNumericPart; // Define the variable in a higher scope

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });

    cy.get('#ex_vat')
      .click({ force: true });
    
    cy.wait(5000);

    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
    });

  });

  it('should check if the price is different after clicking the switcher SECOND PRODUCT', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();
      
    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Hansen')
      .click();

    cy.assertPageUrl('/collections/hansen-protection');

    cy.get('h1')
      .should('contain.text', 'Hansen Protection');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Hansen Protection SeaBreeze CTV Arbeitsanzug mit Socken 85386 (50 Stück)')
      .click();

    cy.assertPageUrl('/products/hansen-seabreeze-ctv-work-suit-with-socks-85386-50-pieces?variant=46681049956687')
    cy.get('h1')
      .should('contain.text', 'Hansen Protection SeaBreeze CTV Arbeitsanzug mit Socken 85386 (50 Stück)');
    cy.get('.gr-price__container')
      .should('exist');

    let savedNumericPart; // Define the variable in a higher scope

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });

    cy.get('#ex_vat')
      .click({ force: true });
    
    cy.wait(5000);

    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
    });

  });

  it('should check if the price is different after clicking the switcher THIRD PRODUCT', () => {

    cy.contains('.gr-header-menu__link', 'Marken')
      .click();
      
    cy.assertPageUrl('/pages/unsere-marken');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Petzl')
      .click();

    cy.assertPageUrl('/collections/petzl');

    cy.get('h1')
      .should('contain.text', 'Petzl');

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Petzl AVAO® BOD FAST Auffang- und Haltegurt')
      .click();

    cy.assertPageUrl('/products/petzl-avao-bod-fast?variant=40328900673702')
    cy.get('h1')
      .should('contain.text', 'Petzl AVAO® BOD FAST Auffang- und Haltegurt');
    cy.get('.gr-price__container')
      .should('exist');

    let savedNumericPart; // Define the variable in a higher scope

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });

    cy.get('#ex_vat')
      .click({ force: true });
    
    cy.wait(5000);

    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
    });
  });
});