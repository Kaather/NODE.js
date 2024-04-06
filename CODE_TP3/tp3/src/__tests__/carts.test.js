const { getTotalPriceByUserId } = require("../carts");

describe("carts.js", () => {
  describe("getTotalPriceByUserId", () => {
    it("should return the total price of the user's cart if it exists", () => {
      const userId = "U001";
      const expectedTotalPrice = 2500;
      const expectedTotalDiscountedPrice = 2200;

      const result = getTotalPriceByUserId(userId);

      expect(result.total).toEqual(expectedTotalPrice);
      expect(result.totalDiscounted).toEqual(expectedTotalDiscountedPrice);
    });

    it("should return the user's email if no cart exists", () => {
      const userId = "U003";
      const expectedEmail = "user3@example.com";

      const result = getTotalPriceByUserId(userId);

      // Modification de l'assertion pour vérifier si l'e-mail est présent dans le résultat
      expect(result.email).toEqual(expectedEmail);
    });

    it("should return the user's email if the total price exceeds 1000€", () => {
      const userId = "U002";
      const expectedTotalPrice = 1200;
      const expectedTotalDiscountedPrice = 1100;
      const expectedEmail = "user2@example.com";

      const result = getTotalPriceByUserId(userId);

      expect(result.total).toEqual(expectedTotalPrice);
      expect(result.totalDiscounted).toEqual(expectedTotalDiscountedPrice);
      expect(result.email).toEqual(expectedEmail);
    });
  });
});
