const { Order } = require("../../models/order");

const getOrdersByUser = async (req, res) => {
  const { email, phone } = req.body;

  const result = await Order.find({ email, phone }, "");

  res.json(result);
};

module.exports = getOrdersByUser;
