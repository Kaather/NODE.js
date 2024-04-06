const productsData = require("./products.json");
const usersData = require("./users.json");

/**
 * @function getUserPreferences
 * @param {string} userId - L'identifiant de l'utilisateur
 * @param {Date} currentDate - La date actuelle
 * @returns {Array|Object} - Selon les préférences de l'utilisateur
 */
function getUserPreferences(userId, currentDate) {
  const user = usersData.find(user => user.id === userId);
  if (!user) {
    throw new Error(`L'utilisateur avec l'ID ${userId} n'existe pas.`);
  }

  const userAge = currentDate.getFullYear() - new Date(user.birthDate).getFullYear();
  const userPreferences = [];

  if (userAge >= 0 && userAge < 18) {
    throw new Error("Le site n'est pas ouvert aux mineurs.");
  } else if (userAge >= 18 && userAge <= 25) {
    // Liste des 10 produits avec la plus grande économie
    const sortedProducts = productsData
      .map(product => ({
        ...product,
        saving: product.price - product.discountedPrice
      }))
      .sort((a, b) => b.saving - a.saving)
      .slice(0, 10);
    userPreferences.push(...sortedProducts);
  } else if (userAge >= 26 && userAge <= 50) {
    // Liste des produits avec une note supérieure à 4.7
    const ratedProducts = productsData.filter(product => product.rating > 4.7);
    userPreferences.push(...ratedProducts);
  } else if (userAge > 50) {
    // Liste des produits de la catégorie "smartphone"
    const smartphoneProducts = productsData.filter(product => product.category === "smartphone");
    userPreferences.push(...smartphoneProducts);
  }

  // Vérification de l'anniversaire
  const userBirthday = new Date(user.birthDate);
  const userBirthdayThisYear = new Date(currentDate.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());
  if (userBirthdayThisYear.getTime() === currentDate.getTime()) {
    userPreferences.push({ email: user.email });
  }

  return userPreferences;
}

module.exports = {
  getUserPreferences,
};
