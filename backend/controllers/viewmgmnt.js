const home = (req, res) => {
  return res.render("index");
};

const userform = (req, res) => {
  return res.render("userform");
};

module.exports = { home, userform };
