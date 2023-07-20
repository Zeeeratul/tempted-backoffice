const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const getConfig = require("./config");
const galadmin = require("@galadrim/galadmin").default;

const app = express();
const PORT = process.env.PORT || 5001;

console.log({ envPassword: process.env.PASSWORD });

const productionConfig = getConfig("production");
const stagingConfig = getConfig("staging");

app.listen(PORT, () => {
  console.log(`Backoffice is running http://localhost:${PORT}`);
});

app.use("/", galadmin(productionConfig));
app.use("/staging", galadmin(stagingConfig));
