const { getUsersByProductId } = require("../orders");

describe("orders.js", () => {
  describe("getUsersByProductId", () => {
    it("Doit retourner une liste d'utilisateurs ayant acheté le produit s'il existe des utilisateurs", () => {
      const productId = "P123";
      const expectedUsers = ["U001", "U002"];

      const result = getUsersByProductId(productId);

      expect(result).toEqual(expectedUsers);
    });

    it("Doit retourner un message d'erreur si aucun utilisateur n'a acheté le produit", () => {
      const productId = "P999";
      const expectedMessage = "Ce produit n'est présent dans aucun panier";

      const result = getUsersByProductId(productId);

      expect(result).toEqual(expectedMessage);
    });
  });
});
