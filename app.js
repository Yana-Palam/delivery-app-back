const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const shopsRouter = require("./routes/api/shops");
const foodsRouter = require("./routes/api/foods");
const ordersRouter = require("./routes/api/orders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/foods", foodsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
