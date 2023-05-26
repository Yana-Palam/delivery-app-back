const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../helpers");

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
  },
  { versionKey: false }
);

shopSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
});

const schemas = {
  addSchema,
};

const Shop = model("shop", shopSchema);

module.exports = {
  Shop,
  schemas,
};
