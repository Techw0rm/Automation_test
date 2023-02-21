

describe('Test mouse actions', () => {
    it('Scroll element into view', () => {

        cy.visit('www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().should('be.visible').invoke('removeAttr','target').click({force:true});

    });

    it('I should be able to drag and drop a draggble item', () => {

        cy.visit('www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().should('be.visible').invoke('removeAttr','target').click({force:true});

        cy.get('#draggable').trigger('mousedown',{which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true});
    });

    it.only('I should be able to perform a double mouse click', () => {

        cy.visit('www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().should('be.visible').invoke('removeAttr','target').click({force:true});

        // cy.get('#double-click').dblclick().then( elem => {
        //     cy.wrap(elem).should("class",'div-double-click double')
        //})

        cy.get('#double-click').dblclick().should('have.attr','class','div-double-click double')

        // cy.get('#double-click').dblclick().then((element) => {
        //     expect(element).to.have.css('background-color', 'rgb(147, 203, 90)')
        // });

    });

    it('I should be able to hold down the left mouse click button on a given elem', () => {

        cy.visit('www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().should('be.visible').invoke('removeAttr','target').click({force:true});

        cy.get('#click-box').trigger('mousedown',{which: 1}).then((element) => {
            expect(element).to.have.css('background-color','rgb(0, 255, 0)')
        })

    });

});