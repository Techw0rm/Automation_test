

describe("Verifying variables, cypress commands and jquery commands", () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
    })

    it("Navigating to specific product pages", () => {

        // cy.visit('https://automationteststore.com/');
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // makeupLink.click();
        // skincareLink.click();
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();

    });

    it("AAAAA", () => {

        // cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();

        // WILL FAIL WITHOUT THEN
        // const header = cy.get('h1 .maintext');
        // cy.log(header.text());
        cy.get('h1 .maintext').then(($headerText) => {
            const headertext = $headerText.text();
            cy.log('Found header text: ' + headertext);
            expect(headertext).is.eq('Makeup');
        });

    })

    it.only('Validate properties of the Contact Us page', () => {

        cy.get("a[href$='contact']").should('be.visible').click();
        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name');
        //JQuery Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
           const FirstNameText = text.find('#field_11').text();
           expect(FirstNameText).to.contain('First name');

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
            });

        });

    });

})