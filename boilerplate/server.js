// server.js
const startCluster = require("egg-cluster").startCluster;

startCluster({
  baseDir: __dirname,
  env: process.env.NODE_ENV,
  port: 7001,
  workers: 2,
});
