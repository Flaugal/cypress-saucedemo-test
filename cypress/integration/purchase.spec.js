describe('cart add', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('input#user-name').type('standard_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
    });
    it('verify than is possible Purchase a list of products added to the cart', () => {
       cy.get('button#add-to-cart-sauce-labs-backpack').click();
       cy.get('div#shopping_cart_container').click();
       cy.contains('div.cart_list','Sauce Labs Backpack').should('be.visible');
       cy.get('button#checkout').click();
       cy.get('input#first-name').type('Flavia')
       cy.get('input#last-name').type('Albornoz')
       cy.get('input#postal-code').type('12345')
       cy.get('input#continue').click();
       cy.contains('button#finish','Finish').click();
       cy.get('div.checkout_complete_container').should('be.visible');
    });
});