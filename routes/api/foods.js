const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/foods");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listFoods));

module.exports = router;
