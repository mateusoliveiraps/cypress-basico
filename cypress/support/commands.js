Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Mateus')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('mateusoliveiraps@gmail.com')
    cy.get('#open-text-area').type('Gostaria apenas de dar um feedback')
    cy.contains('button', 'Enviar').click()
})