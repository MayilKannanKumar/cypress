describe("Home Page", () => {
    it("Home Page Loaded", () => {
        cy.visit("https://www.rotorooter.com/");
    });
    it("Check Find Local Plumber Label", () => {
        cy.visit("https://www.rotorooter.com/");
        cy.contains('Find Your Local Plumber');
        
    });
  });
  describe("Contact Us Page", () => {
    it("Contact Us Page Loaded", () => {
        cy.visit("https://www.rotorooter.com/");
        cy.get('a')
        .eq(1)
        .click({force: true});
        cy.url().should('include', '/contact-us');
        
    });
  });
  describe("Careers Page", () => {
    it("Careers Page Loaded", () => {
        cy.visit("https://www.rotorooter.com/");
        cy.get('a')
        .eq(0)
        .click({force: true});
        cy.url().should('include', '/careers');
    });
  });