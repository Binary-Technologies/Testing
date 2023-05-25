describe('send new message_with one attachment_one receiver_internal', () => {
  it('passes', () => {
    cy.visit('https://auth.bixchat.xyz/')
    cy.get('#fname').type("hansani@bixchat.xyz")
    cy.get(':nth-child(3) > .UsernameInput > .input-container').type("Abc@1234")
    cy.get('.submit-button').click()

    cy.wait(8000)
    cy.get('.PrimaryButton').click()
    cy.get('.MultiEmail > input').type("dilki")
    cy.wait(3000)
    cy.get('.search-item').contains('dilki@bixchat.xyz').click()
    cy.get('.message-container > input').type("Send new message_with one attachment_one receiver_internal")
    cy.get('.ql-editor').type('Dear [Client\'s Name],\n\nThank you for providing the project update. I\'m delighted to hear about the progress being made. It\'s reassuring to know that everything is on track. If there are any areas where I can offer additional support or if you have any concerns, please don\'t hesitate to let me know. I look forward to continued collaboration and a successful outcome.\n\nBest regards,\n\n[Your Name]');
    
    cy.wait(2000)

    // cy.get("input[type=file]").attachFile("image1.jpg")

    // cy.wait(2000)

    cy.get('.send-btn-newmessage').click()


})

})