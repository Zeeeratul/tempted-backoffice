require("dotenv").config();
const express = require("express");
const getConfig = require("./config");

const app = express();
const PORT = process.env.PORT || 4000;

const productionConfig = getConfig("production");
const stagingConfig = getConfig("staging");

const galadmin = require("@galadrim/galadmin").default;

app.listen(PORT, () => {
  console.log(`Backoffice is running http://localhost:${PORT}`);
});

app.use("/", galadmin(productionConfig));
// app.use("/staging", galadmin(stagingConfig));
