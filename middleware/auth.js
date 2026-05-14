const User = require("../database/models/User");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.redirect("/"); // Redirect if user not found
    }
    next(); // Proceed to the next middleware if user exists
  } catch (error) {
    console.error("Error finding user:", error);
    res.redirect("/"); // Redirect in case of an error
  }
};

