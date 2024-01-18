describe("React page load", () => {
   beforeEach(() => {
      cy.visit("http://localhost:3000");
   });
   
	it("should display and rotate React logo", () => {
		cy.get("[data-cy=logo]").should("be.visible");
   });
   
   it('should display a link containing learn react', () => {
      cy.contains("a", "Learn React").should("be.visible");
   });
});
