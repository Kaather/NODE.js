const cartsData = require("./carts.json");
const usersData = require("./users.json");

/**
 * @function getTotalPriceByUserId
 * @param {string} userId - L'identifiant de l'utilisateur
 * @returns {Object} - Un objet contenant le prix total et le prix total avec remise du panier de l'utilisateur, ainsi que son adresse e-mail si nécessaire
 */
function getTotalPriceByUserId(userId) {
  const userCart = cartsData.find(cart => cart.userId === userId);
  const user = usersData.find(user => user.id === userId);

  if (!userCart) {
    // Si l'utilisateur ne possède pas de panier, retourner son adresse e-mail s'il existe
    return { email: user ? user.email : null };
  }

  const totalPrice = userCart.items.reduce((acc, item) => acc + item.price, 0);
  const totalDiscountedPrice = userCart.items.reduce((acc, item) => acc + item.discountedPrice, 0);

  const result = { idPanier: userCart.id, total: totalPrice, totalDiscounted: totalDiscountedPrice };

  // Si le prix total dépasse 1000€, ajouter l'e-mail de l'utilisateur à l'objet résultant
  if (totalPrice > 1000) {
    result.email = user ? user.email : null;
  }

  return result;
}

module.exports = {
  getTotalPriceByUserId,
};
