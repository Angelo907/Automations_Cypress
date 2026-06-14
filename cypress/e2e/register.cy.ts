describe('Register', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("Registro con checkboxes", () => {
    cy.log("Web automation")
    cy.get(".right-panel-title").should("be.visible")
    .and("have.text", "Web Automation en Blass Academy")
    cy.contains("Generics").click()
    cy.contains("Register").click()
    cy.get(".blass-title").contains("Register").should("be.visible")
    cy.get("[data-test='videojuegos']").as("juegos")
    cy.get("@juegos").should("not.be.checked")
    cy.get("@juegos").check()
    cy.get("@juegos").should("be.checked")
    cy.get("[data-test='semanal']").as("semanal")
    cy.get("@semanal").should("not.be.checked")
    cy.get("@semanal").check()
    cy.get("@semanal").should("be.checked")
  });

  it("Registro validaciones de varios elementos", () => {
    cy.log("Web automation")
    cy.get(".right-panel-title").should("be.visible")
    .and("have.text", "Web Automation en Blass Academy")
    cy.contains("Generics").click()
    cy.contains("Register").click()
    cy.get(".blass-title").contains("Register").should("be.visible")
    //verificando cantidad de radios
    cy.get("[name='frecuencia']").as("frecuencias").should("have.length",3)
    cy.get("@frecuencias").each(($el) => {
        cy.wrap($el).should("be.visible").and("be.enabled")
        cy.get("@frecuencias").should("not.be.checked")
    });
  });
});
