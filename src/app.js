const cors = require("cors");
const express = require("express");
const personRoute = require("./person/person.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", personRoute);

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
