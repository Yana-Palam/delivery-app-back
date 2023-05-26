const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../helpers");

const foodSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for contact"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    shopId: {
      type: String,
      required: [true, "ShopId is required"],
    },

    imgUrl: {
      type: String,
      required: [true, "ImageUrl is required"],
    },
  },
  { versionKey: false }
);

foodSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
});

const schemas = {
  addSchema,
};

const Food = model("food", foodSchema);

module.exports = {
  Food,
  schemas,
};
