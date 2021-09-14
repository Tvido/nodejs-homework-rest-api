const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { visrionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
});

const Order = model("order", orderSchema);

module.exports = { Order, joiSchema };
