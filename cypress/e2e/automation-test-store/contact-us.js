

describe("Test Contact Us form via Automation test store", () => {

    before( () => {
       // cy.viewport(550, 750)
        cy.fixture("userDetails").as("user");
    })

    it("Should be able to submit a successful submission via contact us form", () => {

        cy.visit('https://automationteststore.com/');
        // cy.get('.info_links_footer > :nth-child(5) > a').should('be.visible').click();
        //  cy.xpath("//a[contains(@href,'contact')]").should('be.visible').click();
        cy.get("a[href$='contact']").should('be.visible').click().then(function(ElementName){
            cy.log("Element name is:" + ElementName.text());
        });
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').should('be.visible').type(user.first_name);
            cy.get('#ContactUsFrm_email').should('be.visible').type(user.email);
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').should('be.visible').type('Learning Cypress');
        //cy.get('.col-md-6 > .btn').should('be.visible').click();
        cy.get("button[title='Submit']").should('be.visible').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("Test has completed!");


    });
});