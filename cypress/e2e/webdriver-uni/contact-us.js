import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
import contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />


describe("Test Contact Us form via WebdriveUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new Homepage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    beforeEach(() => {

        homepage_PO.visitHomepage();
        // cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();


        // cy.visit(Cypress.env('webdriveruni_homepage') + '/Contact-Us/contactus.html');
        //  cy.get('#contact-us').should('be.visible').invoke('removeAttr', 'target').click();
    });

    before(() => {
       cy.fixture('example').then((data) => {
          // this.data = data;
             globalThis.data = data;
       });
    });



    it("Should be able to submit a successful submission via contact us form", () => {

        cy.url().should('contain', 'contactus');
        cy.title().should('include', 'WebDriver | Contact Us');
        // cy.document().should('have.property', 'charset').and('eq','UTF-8');
        cy.document().should('have.property', 'charset', 'UTF-8')

        contact_Us_PO.contactForm_Submission(Cypress.env('first_name'),data.last_name,data.email,'LALALALALA','h1',
            'Thank You for your Message!');


        //cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name,data.email,'LALALALALA','h1','Thank You for your Message!')

        // cy.get('[name="first_name"]').should('be.visible').type(data.first_name);
        // cy.get('[name="last_name"]').should('be.visible').type(data.last_name);
        // cy.get('[name="email"]').should('be.visible').type(data.email, {delay: 0});
        // cy.get('[placeholder="Comments"]').should('be.visible').type('Lalalala')
        //
        // cy.get('[type="submit"]').should('be.visible').click();
        // // cy.contains('Thank You for your Message!').should('be.visible');
        // // cy.xpath('//div[h1]').should('contain.text','Thank You for your Message!')
        // cy.get('h1').should('have.text', 'Thank You for your Message!')

    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {

        contact_Us_PO.contactForm_Submission(data.first_name,data.last_name,' ','LALALALALA','body',
            'Error: Invalid email address');

        //cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name,' ','LALALALALA','body','Error: Invalid email address')
        // cy.get('[name="first_name"]').should('be.visible').type(data.first_name);
        // cy.get('[type="submit"]').should('be.visible').click();
        // cy.get('body').contains('Error: all fields are required');
        // //cy.xpath('//body[br]').should('contain', 'Error: all fields are required');

    });
});

