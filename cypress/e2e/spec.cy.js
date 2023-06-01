describe('Console Output Test', () => {
  it('should capture console output in a variable', () => {
    cy.visit('https://www.invicti.com')
    cy.wait(60000)
  })
})