describe('Create a group', () => {
  it('passes', () => {
    cy.visit('https://auth.bixchat.xyz/')
    cy.get('#fname').type("hansani@bixchat.xyz")
    cy.get(':nth-child(3) > .UsernameInput > .input-container').type("Abc@1234")
    cy.get('.submit-button').click()
    cy.wait(8000)

    cy.get('.channel-wrapper').click()
    cy.wait(5000)
    cy.get(':nth-child(2) > .singleContact > .selected-radio').click()
    cy.get(':nth-child(3) > .singleContact > .selected-radio').click()
    cy.get(':nth-child(4) > .singleContact > .selected-radio').click()
    cy.get(':nth-child(5) > .singleContact > .selected-radio').click()
    cy.wait(5000)

    cy.get('.next-btn').click()
    cy.wait(5000)

    cy.get("input[type=file]").attachFile("image1.jpg")
    cy.wait(3000)

    cy.get('.doneBtn').click()
    cy.wait(3000)

    cy.get('.group-input > input').type("Test Group")
    cy.wait(3000)

    cy.get('.group-input-1').type("Test Group Description")
    cy.wait(3000)

    cy.get('.cancel-btn').click()
    cy.wait(8000)


    

})

})