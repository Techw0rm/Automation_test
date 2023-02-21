

describe("Validate webriveruni homepage links", () => {
    it.only("Confirm links redirect to the correct pages", () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us').should('be.visible').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.url().should('include', 'http://www.webdriveruniversity.com/');

        cy.reload()

        // cy.reload(true); //reload without using cache

        cy.go('forward');
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.get('#login-portal').should('be.visible').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'Login-Portal');
        cy.go('back');


        cy.get('#to-do-list').should('be.visible').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'To-Do-List');
        cy.go('back');


    });
});

