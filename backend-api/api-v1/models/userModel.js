const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: Array,
      required: true,
    },
    shippingAddress: {
      address: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.comparePassword = async (password) => {
//   try {
//     console.log("password", password);
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// // Match user entered password to hashed password in database
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
