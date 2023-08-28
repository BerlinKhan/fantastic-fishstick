describe('Cypress Form Test', () => {
  it('Fills out the form and verifies modal information', () => {
    // Changing the viewport as the website was not responsive on default view.
    cy.viewport(2048,1152)
    
    // Visit the specified URL
    cy.visit('https://demoqa.com/');
    cy.wait(2000);
    

    // Click on the Forms Button
    cy.contains('Forms').scrollIntoView().click();
    cy.wait(2000);

    // Click on Practice Form button from the left sidebar
    cy.contains('Practice Form').click();

    // Enter the form data
    cy.get('#firstName').type('Cowlar');
    cy.get('#lastName').type('Developer');
    cy.get('#userEmail').type('qaengineer@cowlar.com');

    // Click on the Gender radio button using the label
    cy.get('label[for="gender-radio-1"]').click();

    cy.get('#userNumber').type('0123456789');

    // Enter Subjects
    // Target the input element inside the complex structure
    cy.get('.subjects-auto-complete__input input').click().type('Computer Science{Enter}');

    // Click on Hobbies checkbox using the label
    cy.get('label[for="hobbies-checkbox-3"]').click();

    cy.get('#currentAddress').type('Address 1');
   // Select the desired state from the dropdown
    // Click to open the dropdown



     // Select State
     cy.get('#state').click().type('NCR{enter}');

     // Select City
     cy.get('#city').click().type('Delhi{enter}');

    // Click on the Submit button
    cy.get('#submit').click();

    cy.wait(3000);

    // Verify modal information
    cy.get('.modal-content').should('contain', 'Cowlar');
    cy.get('.modal-content').should('contain', 'Developer');
    cy.get('.modal-content').should('contain', 'qaengineer@cowlar.com');
    cy.get('.modal-content').should('contain', 'Male'); // Verify Gender
    cy.get('.modal-content').should('contain', '0123456789'); // Verify Mobile
    cy.get('.modal-content').should('contain', 'Computer Science'); // Verify Subjects
    cy.get('.modal-content').should('contain', 'Music'); // Verify Hobbies
    cy.get('.modal-content').should('contain', 'Address 1'); // Verify Current Address
    cy.get('.modal-content').should('contain', 'NCR'); // Verify State
    cy.get('.modal-content').should('contain', 'Delhi'); // Verify City

    // Close the Modal
    cy.get('#closeLargeModal').click();
  });
});
