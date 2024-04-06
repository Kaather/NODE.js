function getProductAvailability(products) {
  const availability = {};

  products.forEach(product => {
    const category = product.category;
    const stock = product.stock;

    const availabilityStatus =
      stock < 10 ? "low" : stock <= 50 ? "medium" : "high";

    if (!availability[category]) {
      availability[category] = [];
    }

    availability[category].push({ libelle: product.libelle, dispo: availabilityStatus });
  });

  return availability;
}

module.exports = {
  getProductAvailability,
};
