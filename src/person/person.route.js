const express = require("express");
const { getPersonDetails } = require("./person.controller");

const router = express.Router();

router.get("/person", getPersonDetails);

module.exports = router;
