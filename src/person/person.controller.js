const person = require("./person.model");

exports.getPersonDetails = (req, res) => {
  try {
    return res.status(200).json({
      ...person,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "An error occurred while fetching person details",
    });
  }
};
