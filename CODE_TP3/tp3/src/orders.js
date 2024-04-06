const ordersData = require("./orders.json");

/**
 * @function
 * @param {string} productId - L'identifiant du produit
 * @returns {Array|string} - La liste des identifiants des utilisateurs ayant acheté le produit ou un message d'erreur si aucun utilisateur n'a acheté le produit
 */
function getUsersByProductId(productId) {
  const usersWithProduct = ordersData.reduce((acc, order) => {
    if (order.products.includes(productId)) {
      acc.push(order.userId);
    }
    return acc;
  }, []);

  if (usersWithProduct.length === 0) {
    return "Ce produit n'est présent dans aucun panier";
  }

  return usersWithProduct;
}

module.exports = {
  getUsersByProductId,
};
