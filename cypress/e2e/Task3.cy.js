describe("Cowlar Task 3", () => {

    it("Intercept API and Verify Response", () => {
        // Changing the viewport as the website was not responsive on default view.
        cy.viewport(2048,1152);

        // Visit the URL
        cy.visit('https://demoqa.com/');
        cy.wait(2000); //wait for 2s

        // Verifying that it displays “TOOLS QA” page.
        cy.get('header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg');

        //Click on Book Store Application Card/Button
        cy.contains('Book Store Application').click();
        //VERIFYING that Book Store Page should be displayed
        cy.get('.playgound-header').contains('Book Store').should('be.visible');
        
        //clicking on book store button under book store application
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click();
        //VERIFYING that Book Store Page should be displayed
        cy.get('.playgound-header').contains('Book Store').should('be.visible');

        //Intercepting th API before clicking on book
        cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574').as('bookDetails');

        //Click on book
        cy.contains('Understanding ECMAScript 6').click();
        
        // Intercepting API and verifying its response
        cy.wait('@bookDetails').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body).to.deep.equal({
                "isbn": "9781593277574",
                "title": "Understanding ECMAScript 6",
                "subTitle": "The Definitive Guide for JavaScript Developers",
                "author": "Nicholas C. Zakas",
                "publish_date": "2016-09-03T00:00:00.000Z",
                "publisher": "No Starch Press",
                "pages": 352,
                "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
                "website": "https://leanpub.com/understandinges6/read"
                });
            });
        
        cy.wait(2000);
        //Making sure specific book details are displayed
        cy.get('#ISBN-wrapper > .col-md-9 > #userName-value').should('contain','9781593277574');
        cy.get('#title-wrapper > .col-md-9 > #userName-value').should('contain','Understanding ECMAScript 6');
        cy.get('#author-wrapper > .col-md-9 > #userName-value').should('contain','Nicholas C. Zakas');
    });
});

  