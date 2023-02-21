

describe('Test File upload via webdriveruni',() => {
    beforeEach(() => {
        cy.visit('www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});

    })
    it('Upload a file...',() => {
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');
        cy.get('#submit-button').click();
    });

    it('Upload no file...',() => {
        cy.get('#submit-button').click();
    })
})