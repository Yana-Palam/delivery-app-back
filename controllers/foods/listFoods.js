const { Food } = require("../../models/food");

const listFoods = async (req, res) => {
  const result = await Food.find({});
  res.json(result);
};

module.exports = listFoods;
