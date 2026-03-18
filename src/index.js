const express = require("express");
const orders = require("./orders");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    company: "Nexus Corp",
    status: "running",
    version: process.env.APP_VERSION || "1.0.0",
    deployedAt: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.get("/api/metrics", (req, res) => {
  res.json({
    deploymentFrequency: "1x per month",
    leadTime: "43 days",
    changeFailureRate: "42%",
    mttr: "72 hours",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Nexus Corp app listening on port ${PORT}`);
  });
}

module.exports = app;
