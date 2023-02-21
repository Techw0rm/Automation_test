describe("Alias and invoke", () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
    })

    it("Validate a specific hair care product", () => {

        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.greaterThan', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    });


    it('Validate home page products', () => {

        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');

    });

    it('Calculate total of normal and sale products', () => {

        // cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each((el, index) => {
        //     cy.log(el.text());
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        var itemPriceTotal = 0

        cy.get('@itemPrice').then($linkText => {
          var itemPrice = $linkText.split('$');
          var i;
          for(i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i]);
            itemPriceTotal = Number(itemPrice[i]) + Number(itemPriceTotal);
          }
          cy.log("Non sale items total: "+ (itemPriceTotal))

        })
        var onSaleTotal = 0;
        var totalValue = 0;
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemPrice = $linkText.split('$');
            var i;
            for (i=0; i<saleItemPrice.length;i++){
                cy.log(saleItemPrice[i]);
                onSaleTotal += Number(saleItemPrice[i]);

            }
            cy.log("On sale items total: "+ (onSaleTotal))
        })

        .then(() => {
            totalValue = Number(onSaleTotal) + Number(itemPriceTotal);
            cy.log("Total value = "+ (totalValue));
            expect(totalValue).to.equal(669);
        });


    });

});
