// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('navigateTo_webdriverUni_Homepage', () => {
    cy.visit('/');
   // cy.visit(Cypress.env('webdriveruni_homepage'));

});

Cypress.Commands.add('navigateTo_webdriverUni_Checkbox_page', () => {
    cy.visit('/' + "/Dropdown-Checkboxes-RadioButtons/index.html");

});

Cypress.Commands.add('selectProduct', productName => {

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.wrap($el).click();
        };
    });
});

Cypress.Commands.add('addProductToBasket', productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text() === productName) {
            cy.log($el.text());
            cy.get('.productcart').eq(index).click();
        };
    });
})

Cypress.Commands.add('webdriverUni_ContactForm_Submission', (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').should('be.visible').type(firstName);
    cy.get('[name="last_name"]').should('be.visible').type(lastName);
    cy.get('[name="email"]').should('be.visible').type(email, {delay: 0});
    cy.get('[placeholder="Comments"]').should('be.visible').type(comment);

    cy.get('[type="submit"]').should('be.visible').click();
    cy.get($selector).contains(textToLocate);

})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })