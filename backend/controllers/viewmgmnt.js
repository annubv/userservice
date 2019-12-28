const db = require("../databases/userdata");
const users = db.users;

const home = (req, res) => {
  return res.render("index");
};

const userform = (req, res) => {
  return res.render("userform");
};

const edituserpage = (req, res) => {
  users
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(r => {
      return res.render("edituser", { r });
    })
    .catch(err => {
      console.log("Error!", err);
    });
};

const deluserpage = (req, res) => {
  users
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(r => {
      return res.render("deluser", { r });
    })
    .catch(err => {
      console.log("Error!", err);
    });
};

module.exports = { home, userform, edituserpage, deluserpage };
