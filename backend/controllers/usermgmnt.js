const user = require("../databases/models/users");

const allusers = (req, res) => {
  user.find().then(r => {
    console.log("Allusers: ", r);
    /*  return res.send(r); */
    return res.render("allusers", { r });
  });
};

const adduser = (req, res) => {
  const {
    name,
    college,
    branch,
    gender,
    dob,
    phone,
    email,
    caddr,
    paddr
  } = req.body;

  var user_instance = new user({
    name,
    college,
    branch,
    gender,
    dob,
    phone,
    email,
    caddr,
    paddr
  });
  user_instance.save(err => {
    if (err) {
      console.log("Error occured in creating user: " + err);
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    } else {
      return res.redirect("/user");
    }
  });
};

deluser = (req, res) => {
  user
    .findByIdAndRemove(req.params.id)
    .then(u => {
      if (!u) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.redirect("/user");
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete User with id " + req.params.id
      });
    });
};

const edituser = (req, res) => {
  const {
    name,
    college,
    branch,
    gender,
    dob,
    phone,
    email,
    caddr,
    paddr
  } = req.body;
  user
    .findByIdAndUpdate(req.params.id, {
      name,
      college,
      branch,
      gender,
      dob,
      phone,
      email,
      caddr,
      paddr
    })
    .then(u => {
      if (!u) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.redirect("/user");
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.id
      });
    });
};

module.exports = { allusers, adduser, deluser, edituser };
