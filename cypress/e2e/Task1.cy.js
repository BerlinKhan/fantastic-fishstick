describe('Cowlar Task 1', () => {
  it('Fills out the form and verifies modal information', () => {
   
    // Changing the viewport as the website was not responsive on default view.
    cy.viewport(2048,1152)
    
    // Visit the URL
    cy.visit('https://demoqa.com/');
    // waiting 2 seconds to confirm the site loaded properly
    cy.wait(2000);
    

    // Clicking on the forms Buttom
    cy.contains('Forms').click();
    // waiting 2 seconds
    cy.wait(2000);

    // Clicking on Practice Form button from the left sidebar
    cy.contains('Practice Form').click();

    // Entering the data in the form
    cy.get('#firstName').type('Cowlar');
    cy.get('#lastName').type('Developer');
    cy.get('#userEmail').type('qaengineer@cowlar.com');

    // Clicking on radio button using the label 
    cy.get('label[for="gender-radio-1"]').click();

    //Entering the mentioned number
    cy.get('#userNumber').type('0123456789');

    // Entering and selecting "Computer Science" Subject
    cy.get('.subjects-auto-complete__input input').click().type('Computer Science{Enter}');

    // Clicking on checkbox "Music"
    cy.get('label[for="hobbies-checkbox-3"]').click();

    //typing adress
    cy.get('#currentAddress').type('Address 1');
  

     // Entering and selecting State"NCR"
     cy.get('#state').click().type('NCR{enter}');

     // Entering and selecting City "Delhi"
     cy.get('#city').click().type('Delhi{enter}');

    // Click on the Submit button
    cy.get('#submit').click();

    //waiting for 3 seconds
    cy.wait(3000);

    // Verifying that the information presented in the Modal is the same as provided
    cy.get('.modal-content').should('contain', 'Cowlar'); // Verify First Name
    cy.get('.modal-content').should('contain', 'Developer'); // Verify Last Namae
    cy.get('.modal-content').should('contain', 'qaengineer@cowlar.com');// Verify Email
    cy.get('.modal-content').should('contain', 'Male'); // Verify Gender
    cy.get('.modal-content').should('contain', '0123456789'); // Verify Mobile
    cy.get('.modal-content').should('contain', 'Computer Science'); // Verify Subjects
    cy.get('.modal-content').should('contain', 'Music'); // Verify Hobbies
    cy.get('.modal-content').should('contain', 'Address 1'); // Verify Current Address
    cy.get('.modal-content').should('contain', 'NCR'); // Verify State
    cy.get('.modal-content').should('contain', 'Delhi'); // Verify City
    
    cy.wait(2000)
    
    // Closing the Modal
    cy.get('#closeLargeModal').click();
  });
});
