// const { Schema, model } = require("mongoose");
// const bcrypt = require("bcryptjs");

// const SALT_WORK_FACTOR = 10;

// const joiContactSchema = require("../validation");

// const userSchema = Schema(
//   {
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//     },
//     subscription: {
//       type: String,
//       enum: ["starter", "pro", "business"],
//       default: "starter",
//     },
//     token: {
//       type: String,
//       default: null,
//     },
//   },
//   { visrionKey: false, timestamps: true }
// );

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
//   next();
// });

// userSchema.methods.isValidPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// // const Contact = model("contact", contactSchema);
// const User = model("contact", userSchema);

// // module.exports = { Contact, joiContactSchema };
// module.exports = { User, joiContactSchema };
