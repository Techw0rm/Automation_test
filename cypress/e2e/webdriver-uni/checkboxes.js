describe('Verify checkboxes via webdriveruni', () => {

    beforeEach(() => {
        // cy.log(Cypress.env("name"));
        cy.navigateTo_webdriverUni_Checkbox_page();
        //cy.navigateTo_webdriverUni_Homepage();
        //cy.get('#dropdown-checkboxes-radiobuttons').should('be.visible').invoke('removeAttr','target').click({force:true});
    });


    it('Check and validate checkboxes', () => {

        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');cy
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check().should('be.checked');

    });

    it('Uncheck and validate checkboxes', () => {
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });


    it('Check multiple checkboxes', () => {

        //cy.get('[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked');
        cy.get('[type="checkbox"]').each(element => {
            cy.wrap(element).check().should('be.checked');
        })

    });


});