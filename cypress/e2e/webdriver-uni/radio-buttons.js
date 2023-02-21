

describe('Verify radio buttons via webdriveruni', () => {

    before( () => {
        cy.visit('www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').should('be.visible').invoke('removeAttr','target').click({force:true});
    })

    it('Check specific radio buttons', () => {

        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.get('#radio-buttons').find("[type='radio']").eq(2).check();

    });

    it('Validate the states of specific buttons', () => {

        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        cy.get("[value='lettuce']").check().should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked');
        cy.get("[value='cabbage']").should('be.disabled');


    });
});