const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const SALT_WORK_FACTOR = 10;

// const joiContactSchema = require("../validation");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { visrionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
//   next();
// });

userSchema.methods.setPassword = async function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // return await bcrypt.compare(password, this.password);
};

userSchema.methods.comparePassword = async function (password) {
  this.password = bcrypt.hashSync(password, this.password);
  // return await bcrypt.compare(password, this.password);
};

// const Contact = model("contact", contactSchema);
const User = model("user", joiSchema);

// module.exports = { Contact, joiContactSchema };
module.exports = { User, userSchema };
