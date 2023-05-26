const { Shop } = require("../../models/shop");

const listShops = async (req, res) => {
  const result = await Shop.find({});
  res.json(result);
};

module.exports = listShops;
