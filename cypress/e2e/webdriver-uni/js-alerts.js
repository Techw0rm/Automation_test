

describe("Handle js alerts", () => {
    it("Confirm js alerts contains the correct text", () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').should('be.visible').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'Popup-Alerts');

        cy.get('#button1').click();

        cy.on('window:alert',(msg) => {
            expect(msg).to.equal('I am an alert box!')
        });
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').should('be.visible').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'Popup-Alerts');

        cy.get('#button4').click();
        cy.on('window:confirm',() =>{
            return true;
        });

        cy.get('#confirm-alert-text').contains('You pressed OK!');

    });

    it("Validate js confirm alert box works correctly when clicking cancel", () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').should('be.visible').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'Popup-Alerts');

        cy.reload();

        cy.get('#button4').click();
        cy.on('window:confirm',() => {
           return false;
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    });

    it("Validate js confirm alert box using a stub", () => {

        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').should('be.visible').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'Popup-Alerts');

        const stub = cy.stub();
        cy.on("window:confirm", stub);

        // cy.get('#button4').click().then(() => {
        //     expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        // }).then(() => {
        //     return true;
        // }).then(() => {
        //     cy.get('#confirm-alert-text').contains('You pressed OK!');
        // });

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {

        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        });  //NOT WORKING FOR SOME REASON


    });

});