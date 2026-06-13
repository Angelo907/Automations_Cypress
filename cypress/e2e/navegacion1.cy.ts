describe('Navegacion', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it.only('Navegacion 1:Login', () => {
    cy.log("Web automation")
    cy.get('.right-panel-title').should('be.visible')
    .and('have.text', 'Web Automation en Blass Academy')
    cy.contains('Generics').click()
    cy.contains('Login').click()
    cy.get('.blass-title').contains('Login').should('be.visible')
    cy.get("[data-test='username-input']").type('Angelo')
    cy.get("[data-test='password-input']").type('Hola')
    cy.get("[data-test='submit-button']").click()
    cy.get("[role='alert']").should("be.visible")
    .and("have.text", "Usuario o clave incorrectos. Intente de nuevo.")
  });

  it('Navegacion 2', () => {
    cy.visit('login')
    cy.log("Estoy en la pagina del login")
    cy.get('[data-test="username-input"]')
  });
});