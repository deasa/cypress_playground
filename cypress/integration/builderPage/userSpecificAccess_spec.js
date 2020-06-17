describe("The builder page", () => {
  beforeEach(() => {
    cy.server()
      .route(
        /GetMasterBatchRecordById\/9999/,
        "fixture:builderPageTestMBR.json"
      )
      .route(/GetAllValidAttributeNamesByCategory/)
      .as("getAttributesByCategory")
      .route(/UserSettings/)
      .as("userSettings");
  });
  it("allows access for admin users", () => {
    cy.loginAsAdmin();
    cy.visit("/builder/9999");
    cy.wait("@getAttributesByCategory");
    cy.get("#PartNumber").should("have.text", "Bodacious");
  });

  it("denies access for qa users", () => {
    cy.loginAsQa();
    cy.visit("/builder/9999");
    cy.wait("@userSettings");
    cy.url().should("include", "login");
    //todo think of a better way to prove that access was denied. Maybe checking that we are on the login page is not the best way, because the devs could implement an access denied page?
  });

  it("denies access for generic users", () => {
    cy.loginAsGeneric();
    cy.visit("/builder/9999");
    cy.wait("@userSettings");
    cy.url().should("include", "login");
  });

  it("denies access for supervisor users", () => {
    cy.loginAsSupervisor();
    cy.visit("/builder/9999");
    cy.wait("@userSettings");
    cy.url().should("include", "login");
  });
});
