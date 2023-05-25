describe('Save a zap user', () => {
  it('passes', () => {
    cy.visit('https://auth.bixchat.xyz/')
    cy.get('#fname').type("hansani@bixchat.xyz")
    cy.get(':nth-child(3) > .UsernameInput > .input-container').type("Abc@1234")
    cy.get('.submit-button').click()
    cy.wait(9000)

    
    cy.get('.bottom-container > :nth-child(8)').click()

    cy.get('.ChatNavbar').click()
    cy.wait(5000)

    cy.get('.bottom-content-wrapper-save').click()

    cy.get(':nth-child(1) > .InputStyles > .value-container > .edit-image').click()

    cy.get('.InputStyles > .input-container > input').clear()

    cy.get('.InputStyles > .input-container > input').type("Dilkifirstname")


   cy.get('.edit-image').click()
    
   cy.get(':nth-child(2) > .InputStyles > .input-container > input').clear()

  cy.get(':nth-child(2) > .InputStyles > .input-container > input').type("Dilkilastname")

  
   cy.get('.save').click()

})

})