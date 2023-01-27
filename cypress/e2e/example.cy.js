// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("#app > div > div > main > div > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1)", "Golden");
  });
});
