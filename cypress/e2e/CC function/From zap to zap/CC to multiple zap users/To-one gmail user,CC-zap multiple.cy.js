describe('To-one gmail user,CC-zap multiple', () => {
  it('passes', () => {
    cy.visit('https://auth.bixchat.xyz/')
    cy.get('#fname').type("hansani@bixchat.xyz")
    cy.get(':nth-child(3) > .UsernameInput > .input-container').type("Abc@1234")
    cy.get('.submit-button').click()

    //To
    cy.wait(8000)
    cy.get('.PrimaryButton').click()
    cy.get('.MultiEmail > input').type("kavindigurbv@gmail.com").click()
    cy.wait(3000)


    //CC
    cy.get('.sending-top-container-right').click()

    cy.get('.sending-top-container-cc-left > :nth-child(2) > .MultiEmail > input').type("dilki")
    cy.wait(3000)
    cy.get('.search-item').contains('dilki@bixchat.xyz').click()

    cy.get('.sending-top-container-cc-left > :nth-child(2) > .MultiEmail > input').type("kavindi")
    cy.wait(3000)
    cy.get('.search-item').contains('kavindi@bixchat.xyz').click()
    
    cy.get('.sending-top-container-cc-left > :nth-child(2) > .MultiEmail > input').type("shaakira")
    cy.wait(3000)
    cy.get('.search-item').contains('shaakira@bixchat.xyz').click()
    cy.wait(3000)

    //Message
    cy.get('.message-container > input').type("To-one gmail user,CC-zap multiple")
    cy.get('.ql-editor').type('Dear [Client\'s Name],\n\nThank you for providing the project update. I\'m delighted to hear about the progress being made. It\'s reassuring to know that everything is on track. If there are any areas where I can offer additional support or if you have any concerns, please don\'t hesitate to let me know. I look forward to continued collaboration and a successful outcome.\n\nBest regards,\n\n[Your Name]');
    
    cy.wait(2000)

    // cy.get("input[type=file]")
    // .attachFile("image1.jpg")
    // .attachFile("image2.jpg")
    // .attachFile("doc1.pdf")
    // .attachFile("doc1.xlsx")

    // cy.wait(4000)

    cy.get('.send-btn-newmessage').click()


})

})