const { getPhoneNumbersOver50 } = require("../users");

describe("users.js", () => {
  describe("getPhoneNumbersOver50", () => {
    it("Doit retourner une liste vide si aucun utilisateur n'a plus de 50 ans", () => {
      const users = [
        { name: "Alice", age: 45, phoneNumber: "123-456-7890" },
        { name: "Bob", age: 50, phoneNumber: "987-654-3210" },
      ];
      const res = getPhoneNumbersOver50(users);
      expect(res).toEqual([]);
    });

    it("Doit retourner une liste de numéros de téléphone des utilisateurs de plus de 50 ans", () => {
      const users = [
        { name: "Alice", age: 55, phoneNumber: "123-456-7890" },
        { name: "Bob", age: 60, phoneNumber: "987-654-3210" },
      ];
      const res = getPhoneNumbersOver50(users);
      expect(res).toEqual(["123-456-7890", "987-654-3210"]);
    });

    it("Doit retourner une liste vide si aucun utilisateur n'a plus de 50 ans dans les données", () => {
      const users = [
        { name: "Alice", age: 45, phoneNumber: "123-456-7890" },
        { name: "Bob", age: 50, phoneNumber: "987-654-3210" },
      ];
      const res = getPhoneNumbersOver50(users);
      expect(res).toEqual([]);
    });

    it("Doit retourner une liste vide si aucun utilisateur n'est fourni", () => {
      const res = getPhoneNumbersOver50([]);
      expect(res).toEqual([]);
    });
  });
});
