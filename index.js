require("dotenv").config();
const express = require("express");
const getConfig = require("./config");
const galadmin = require("@galadrim/galadmin").default;

const app = express();
const PORT = process.env.PORT || 5001;

const productionConfig = getConfig("production");
const stagingConfig = getConfig("staging");

app.listen(PORT, () => {
  console.log(`Backoffice is running http://localhost:${PORT}`);
});

console.log(productionConfig);

app.use("/", galadmin(productionConfig));
app.use("/staging", galadmin(stagingConfig));
