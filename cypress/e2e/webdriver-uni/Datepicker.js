


describe('Test Datepicker via webdriveruni', () => {
    it("Select date from the datepicker", () => {

        cy.visit('www.webdriveruniversity.com')
        cy.get('#datepicker').should('be.visible').invoke('removeAttr','target').click({force:true});
        cy.get('#datepicker').click();
        // let dates = new Date();
        // dates.setDate(dates.getDate()) //get current day
        // cy.log(dates.getDate())
        //
        // let date = new Date();
        // date.setDate(date.getDate() + 5)
        // cy.log(date.getDate())

        var date = new Date();
        date.setDate(date.getDate() + 444);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default",{month: "long"});
        var futureDay = date.getDate();

        cy.log("futureYear = "+ futureYear);
        cy.log("futureMonth = "+ futureMonth);
        cy.log("futureDay = "+ futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }
        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click();
        }
        selectMonthAndYear();
        selectFutureDay();

    });
});