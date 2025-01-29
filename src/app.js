const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Hello from server!",
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
