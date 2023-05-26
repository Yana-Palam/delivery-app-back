const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/orders");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/order");

const router = express.Router();

router.post(
  "/",

  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addOrder)
);

router.post(
  "/history",

  ctrlWrapper(ctrl.getOrdersByUser)
);

module.exports = router;
