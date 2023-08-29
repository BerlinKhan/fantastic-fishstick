describe('Cowlar Task 2', ()=>{

    it('Resizabale boxes', ()=>{
        // Changing the viewport as the website was not responsive on default view.
        cy.viewport(2048,1152);

        // Visit the URL
        cy.visit('https://demoqa.com/')

        // Verifying that it displays “TOOLS QA” page.
        cy.get('header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg');
        
        //Click on Interactions Card/Button
        cy.get('.category-cards > :nth-child(5)').click();

        // Verifying Interaction Page should be displayed
        cy.get('.playgound-header').should('be.visible')

        // Verify the sidebar tabs
        cy.contains('Elements');
        cy.contains('Forms');
        cy.contains('Alerts, Frame & Windows');
        cy.contains('Widgets');
        cy.contains('Interactions');
        cy.contains('Book Store Application'); 

        //Click on Resizable Tab under Interactions section
        cy.contains('Resizable').click();

        // Verifying that it display Resizable on top.
        cy.get('.playgound-header').should('contain','Resizable');
    })
})