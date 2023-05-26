const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../helpers");

const phoneRegexp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for order"],
    },
    email: {
      type: String,
      required: [true, "Set email for order"],
    },
    phone: {
      type: String,
      match: phoneRegexp,
      required: [true, "Set phone for order"],
    },
    address: {
      type: String,
      required: [true, "Set address for order"],
    },

    items: {
      type: Schema.Types.Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: [true, "Set price for order"],
    },
  },
  { versionKey: false }
);

orderSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string().email().required().messages({
    "any.required": `missing required email field`,
  }),
  phone: Joi.string().regex(phoneRegexp).trim().required().messages({
    "any.required": `missing required phone field`,
  }),
  address: Joi.string().required().messages({
    "any.required": `missing required address field`,
  }),
  items: Joi.required().messages({
    "any.required": `missing required items  field`,
  }),
  totalPrice: Joi.required().messages({
    "any.required": `missing required items  field`,
  }),
});

const schemas = {
  addSchema,
};

const Order = model("order", orderSchema);

module.exports = {
  Order,
  schemas,
};
