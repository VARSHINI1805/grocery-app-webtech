const Item = require("../database/models/Item");

module.exports = async (req, res) => {
  try {
    let { search, brand, category, minPrice, maxPrice } = req.params;

    // Base query
    let query = {
      available: true,
      totalQuantity: { $gt: 0 },
    };

    if (search !== "All") {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    
    let items = await Item.find(query);

   
    if (brand !== "All") {
      const brandArray = brand.split(",");
      items = items.filter(item => brandArray.includes(item.tags[1]));
    }

   
    if (category !== "All") {
      const categoryArray = category.split(",");
      items = items.filter(item => categoryArray.includes(item.tags[0]));
    }

    
    if (minPrice !== "All") {
      const min = parseFloat(minPrice);
      items = items.filter(item => parseFloat(item.pricePerItem.value) >= min);
    }

    
    if (maxPrice !== "All") {
      const max = parseFloat(maxPrice);
      items = items.filter(item => parseFloat(item.pricePerItem.value) <= max);
    }

    if (items.length) {
      res.json({ items });
    } else {
      res.json({ items: "No Items found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
