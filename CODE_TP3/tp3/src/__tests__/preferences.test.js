const { getUserPreferences } = require("../preferences");

describe("getUserPreferences", () => {
  const currentDate = new Date("2024-03-15");

  it("throws an error for users under 18 years old", () => {
    expect(() => getUserPreferences("U001", currentDate)).toThrow("Le site n'est pas ouvert aux mineurs.");
  });

  it("returns the list of products with the highest savings for users aged between 18 and 25", () => {
    const expectedProducts = [
      { id: 2, name: "Product 2", category: "smartphone", price: 1200, discountedPrice: 1100, rating: 4.9, saving: 100 }
    ];
    expect(getUserPreferences("U002", currentDate)).toEqual(expectedProducts);
  });

  it("returns the list of products with a rating above 4.7 for users aged between 26 and 50", () => {
    const expectedProducts = [
      { id: 1, name: "Product 1", category: "smartphone", price: 1000, discountedPrice: 900, rating: 4.8 }
    ];
    expect(getUserPreferences("U003", currentDate)).toEqual(expectedProducts);
  });

  it("returns the list of smartphone products for users over 50 years old", () => {
    const expectedProducts = [
      { id: 1, name: "Product 1", category: "smartphone", price: 1000, discountedPrice: 900, rating: 4.8 },
      { id: 2, name: "Product 2", category: "smartphone", price: 1200, discountedPrice: 1100, rating: 4.9 }
    ];
    expect(getUserPreferences("U004", currentDate)).toEqual(expectedProducts);
  });

  it("returns the user's email if it's their birthday", () => {
    const expectedEmail = "user3@example.com";
    expect(getUserPreferences("U003", new Date("2024-12-31"))).toContainEqual({ email: expectedEmail });
  });
});
