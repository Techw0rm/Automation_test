

describe('Interact with dropdown lists via webdriveruni', () => {
    it('Select specific values via select dropdown lists am facut modificare', () => {

        cy.visit('www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').should('be.visible').invoke('removeAttr','target').click({force:true});
        cy.get('#dropdowm-menu-1').select('C#').should('contain.value','c');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng');
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery');

        cy.get('#dropdowm-menu-2').select('maven').should('contain.text','Maven');
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng');

    });

});