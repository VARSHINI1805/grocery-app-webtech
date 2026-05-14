const bcrypt = require("bcrypt-nodejs");
const user = require("../database/models/User");

module.exports = async (req, res) => {
  try {
    console.log(req.body);
    const { _id, password } = req.body;

    const existingUser = await user.findOne({ _id }); // 👈 fixed this

    if (existingUser) {
      // bcrypt-nodejs still uses callback
      bcrypt.compare(password, existingUser.password, (error, same) => {
        if (error) {
          console.log(error);
          return res.redirect("/login");
        }

        if (same) {
          req.session.userId = existingUser._id;
          return res.redirect("/");
        } else {
          return res.redirect("/login");
        }
      });
    } else {
      return res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
    return res.redirect("/login");
  }
};
