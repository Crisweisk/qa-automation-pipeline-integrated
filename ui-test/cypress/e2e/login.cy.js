describe('Login Test - OrangeHRM', () => {
    it('should log in successfully and land on dashboard', () => {
      cy.visit('/web/index.php/auth/login')
  
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
  
      cy.get('h6').contains('Dashboard', { timeout: 10000 }).should('be.visible')

    })
  })
  