const Item = require("../database/models/Item");

module.exports = async (req, res, next) => {
  try {
    const data = await Item.find({
      $and: [{ available: true }, { totalQuantity: { $gt: 0 } }]
    });

    let brandArray = [];
    let categoryArray = [];

    if (!data.length) {
      return res.json({
        brand: [],
        category: [],
        minPrice: 0,
        maxPrice: 0
      });
    }

    let minPrice = parseFloat(data[0].pricePerItem.value);
    let maxPrice = parseFloat(data[0].pricePerItem.value);

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      const category = item.tags[0];
      const brand = item.tags[1];

      if (!categoryArray.includes(category)) {
        categoryArray.push(category);
      }

      if (brand !== "Unbranded" && brand !== "Unbranded ") {
        if (!brandArray.includes(brand)) {
          brandArray.push(brand);
        }
      }

      const currentPrice = parseFloat(item.pricePerItem.value);

      if (currentPrice < minPrice) minPrice = currentPrice;
      if (currentPrice > maxPrice) maxPrice = currentPrice;
    }

    res.json({
      brand: brandArray,
      category: categoryArray,
      minPrice,
      maxPrice
    });

  } catch (err) {
    console.error("Error in getFilters.js:", err);
    next(err); // pass error to Express error handler
  }
};
