const { getProductAvailability } = require("../products");

describe("products.js", () => {
  describe("getProductAvailability", () => {
    it("Doit retourner les informations de disponibilité des produits pour chaque catégorie", () => {
      const products = [
        { libelle: "iPhone 9", category: "smartphone", stock: 5 },
        { libelle: "iPhone X", category: "smartphone", stock: 30 },
        { libelle: "MacBook Pro9", category: "laptops", stock: 80 },
        { libelle: "Dell Inspiron", category: "laptops", stock: 15 },
      ];
      const availability = getProductAvailability(products);
      expect(availability).toEqual({
        smartphone: [
          { libelle: "iPhone 9", dispo: "low" },
          { libelle: "iPhone X", dispo: "medium" },
        ],
        laptops: [
          { libelle: "MacBook Pro9", dispo: "high" },
          { libelle: "Dell Inspiron", dispo: "medium" },
        ],
      });
    });

    it("Doit retourner une liste vide si aucun produit n'est fourni", () => {
      const availability = getProductAvailability([]);
      expect(availability).toEqual({});
    });
  });
});