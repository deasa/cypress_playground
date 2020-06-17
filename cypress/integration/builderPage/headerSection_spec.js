// import { selectors } from "../..//homePageCommon.js";

describe("The header section", () => {
  before(function () {
    cy.loginAsAdmin();
  });

  beforeEach(function () {
    cy.server();
    cy.route(
      /GetMasterBatchRecordById\/9999/,
      "fixture:builderPageTestMBR.json"
    );
    cy.route(/GetAllValidAttributeNamesByCategory/).as(
      "getAttributesByCategory"
    );
  });
});
