const currentDateTime = new Date().toISOString().slice(0, -5) + "Z";

const person = {
  email: "ken_adex@yahoo.com",
  current_datetime: currentDateTime,
  github_url: "https://github.com/hi-heavens/basic-info",
};

module.exports = person;
