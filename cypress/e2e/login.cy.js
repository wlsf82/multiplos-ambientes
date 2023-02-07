describe('Logs in', () => {
  beforeEach(() => cy.visit('/login'))
  
  it('successfully', () => {
    cy.login()
  
    cy.contains('h1', 'Your Notes')
      .should('be.visible')
  })
})
