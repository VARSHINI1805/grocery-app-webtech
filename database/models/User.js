const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Please provide your email"]
  },
  password: {
    type: String,
    required: [true, "Please provide your password"]
  },
  isAdmin: {
    type: Boolean,
    default: false 
  }
});

// Hash the password before saving the user
UserSchema.pre("save", function (next) {
  const user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Generate a hash
  const encrypted = bcrypt.hashSync(user.password);
  user.password = encrypted;
  next();
});

// Method to compare passwords (for login)
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

const User = mongoose.model("user", UserSchema);
module.exports = User;
