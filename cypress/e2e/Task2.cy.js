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
        cy.wait(2000);

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

        //Verify the current height and width of Box 1
        cy.get('#resizableBoxWithRestriction')
        .should('have.css', 'width', '200px') // Verify width
        .should('have.css', 'height', '200px'); // Verify height

        //Resize Box 1 by dragging the bottom right corner.
        cy.get("#resizableBoxWithRestriction > .react-resizable-handle")
        .trigger("mousedown", { button: 0 })
        .trigger("mousemove", { clientX: 600, clientY: 800})
        .wait(2000) //wait for 2 seconds
        .trigger("mousemove", { clientX: 1200, clientY: 800}) //Making sure box1 is Resizable
        .trigger("mouseup", { force: true });

        // Verify  maximum height(300px) and width(500px)
        cy.get('#resizableBoxWithRestriction')
        .should('have.css', 'height', '300px')
        .should('have.css', 'width', '500px')

        cy.wait(2000); //wait for 2s

        //Resizing the box to minimum width and height
        cy.get("#resizableBoxWithRestriction > .react-resizable-handle")
        .trigger("mousedown", { button: 0 })
        .trigger("mousemove", { clientX: 150, clientY: 150})
        .trigger("mouseup", { force: true });

        //Verifying minmum width and height
        cy.get('#resizableBoxWithRestriction')
        .should('have.css', 'height', '150px')
        .should('have.css', 'width', '150px')

        cy.wait(2000) //wait for 2 s

        //Making sure Box 2 is resizeable.
        cy.get('#resizable > .react-resizable-handle')
        .trigger("mousedown", { button: 0 })
        .trigger("mousemove", { clientX: 1000, clientY: 800})
        .wait(2000) //wait for 2s to confirm the box size changed
        .trigger("mousemove", { clientX: 1500, clientY: 800})
        .trigger("mouseup", { force: true }); 



    })
})