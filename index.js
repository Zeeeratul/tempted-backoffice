// require("dotenv").config();
const express = require("express");
// const getConfig = require("./config");
// const galadmin = require("@galadrim/galadmin");

const app = express();
const PORT = process.env.PORT || 5001;

// const productionConfig = getConfig("production");
// const stagingConfig = getConfig("staging");

app.listen(PORT, () => {
  console.log(`Backoffice is running http://localhost:${PORT}`);
});

// console.log(galadmin);

// app.use("/", galadmin(productionConfig));
// app.use("/staging", galadmin(stagingConfig));

app.get("/", (req, res) => {
  res.json("Hello world !");
});
