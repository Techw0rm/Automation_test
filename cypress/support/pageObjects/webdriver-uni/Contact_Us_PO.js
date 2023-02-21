class Contact_Us_PO {

    contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {

        cy.get('[name="first_name"]').should('be.visible').type(firstName);
        cy.get('[name="last_name"]').should('be.visible').type(lastName);
        cy.get('[name="email"]').should('be.visible').type(email, {delay: 0});
        cy.get('[placeholder="Comments"]').should('be.visible').type(comment);
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get($selector).contains(textToLocate, {timeout: 2000});
        // cy.screenshot();
        // cy.screenshot('Make a contact us form submission');

    }

}

export default Contact_Us_PO;