describe('cart add', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('input#user-name').type('standard_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
    });
    it('verify than is possible add elemnts to cart', () => {
       cy.get('button#add-to-cart-sauce-labs-backpack').click();
       cy.get('div#shopping_cart_container').click();
       cy.contains('div.cart_list','Sauce Labs Backpack').should('be.visible');
    });
    it('verify than is possible add more elemts to cart', () => {
      cy.get('button#add-to-cart-sauce-labs-fleece-jacket').click();
      cy.get('div#shopping_cart_container').click();
      cy.contains('div.cart_list','Sauce Labs Fleece Jacket').should('be.visible');
    });
});