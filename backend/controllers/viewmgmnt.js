const user = require("../databases/models/users");

const home = (req, res) => {
  return res.redirect("/user");
};

const userform = (req, res) => {
  return res.render("userform");
};

const edituserpage = (req, res) => {
  user
    .findById(req.params.id)
    .then(r => {
      if (!r) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.render("edituser", { r });
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error Showing user with id " + req.params.id
      });
    });
};

const deluserpage = (req, res) => {
  user
    .findById(req.params.id)
    .then(r => {
      if (!r) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.render("deluser", { r });
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error Showing user with id " + req.params.id
      });
    });
};

module.exports = { home, userform, edituserpage, deluserpage };
