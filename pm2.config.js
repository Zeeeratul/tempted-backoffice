module.exports = {
  apps: [
    {
      name: "Backoffice",
      script: "index.js",
      node_args: "-r dotenv/config",
    },
  ],
};
