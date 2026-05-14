const User = require("../database/models/User");

module.exports = async (req, res, next) => {
  try {
    const id = req.params.id;

    const existingUser = await User.findOne({ _id: id });

    if (existingUser) {
      res.json({ alreadyRegistered: true });
    } else {
      res.json({ alreadyRegistered: false });
    }
  } catch (error) {
    console.error("Error in isRegistered.js:", error);
    next(error);
  }
};
