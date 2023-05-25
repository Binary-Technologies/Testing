describe('Add member', () => {
  it('passes', () => {
    cy.visit('https://auth.bixchat.xyz/')
    cy.get('#fname').type("hansani@bixchat.xyz")
    cy.get(':nth-child(3) > .UsernameInput > .input-container').type("Abc@1234")
    cy.get('.submit-button').click()
    cy.wait(8000)

    cy.get('.bottom-container > :nth-child(1').click()
    cy.wait(2000)

    cy.get('.ChatNavbar').click()
    cy.wait(5000)

    cy.get('.add-members').click()
    cy.wait(3000)

    cy.get(':nth-child(3) > .singleContact > .selected-radio').click()
    cy.get(':nth-child(4) > .singleContact > .selected-radio').click()

    cy.get(' .next-btn').click()

})

})