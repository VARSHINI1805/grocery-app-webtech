const transaction = require("../database/models/Transaction");
const Item = require("../database/models/Item");

module.exports = async (req, res) => {
  try {
    const address = req.body.address;
    console.log(address);

    const userId = req.session.userId;
    const CartItems = req.session.cart.items;
    const CartPrice = req.session.cart.price;
    const currentDate = new Date();

    req.session.cart = ""; 

    if (CartPrice > 0) {
      
      const newTransaction = await transaction.create({
        userId,
        items: CartItems,
        timestamp: currentDate,
        totalPrice: CartPrice,
        deliveryAddress: address
      });

      
      for (let i = 0; i < CartItems.length; i++) {
        const item = CartItems[i];
        await Item.updateOne(
          { _id: item.itemId },
          { $inc: { totalQuantity: -item.quantity } }
        );
      }

      
      res.render("transactionCompleted", {
        userId,
        CartItems,
        currentDate,
        CartPrice,
        address
      });

    } else {
      
      res.render("transactionCompleted", { alreadyPurchased: 1 });
    }
  } catch (error) {
    console.error("Transaction Error:", error);
    res.status(500).send("Something went wrong while processing the transaction.");
  }
};
