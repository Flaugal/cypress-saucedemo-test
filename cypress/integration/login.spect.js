describe('login page', () => {
    it('Verify we can login using valid credentials', () => {
      cy.visit('/');
      cy.get('input#user-name').type('standar_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
      cy.get('div#shopping_cart_container').should('be.visible');
    });   
});