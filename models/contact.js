const { Schema, model } = require("mongoose");

const joiContactSchema = require("../validation");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    // owner: {
    // type: SchemaTypes.ObjectId,
    // ref: "user",
    // },
  },
  { visrionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = { Contact, joiContactSchema };
