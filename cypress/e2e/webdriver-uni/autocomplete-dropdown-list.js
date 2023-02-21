

describe('Verify Autocomplete dropdown lists via webdriveruni', () => {
    it('Select specific product via autocomplete list', () => {

        cy.visit('www.webdriveruniversity.com');
        cy.get('#autocomplete-textfield').should('be.visible').invoke('removeAttr','target').click({force:true});

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el,index,list) => {
            const prod = $el.text();
            const prodToSelect = 'Avacado';

            if(prod === prodToSelect){
                cy.wrap($el).click();
                cy.get('#submit-button').click();
                cy.url().should('include',prodToSelect);
            }

        })
            .then(() => {
                cy.get('#myInput').type('G')
                cy.get('#myInputautocomplete-list > *').each((el) => {
                    const prod = "Grapes";
                    if (el.text() === prod){
                        //el.click();
                        el.trigger('click');
                        cy.get('#submit-button').click();
                        cy.url().should('include',prod);
                    }
                })

            })
    });

});