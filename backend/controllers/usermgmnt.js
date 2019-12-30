const db = require("../databases/userdata");
const users = db.users;

const allusers = (req, res) => {
  users.findAll().then(r => {
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
  users
    .create({
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
    .then(result => {
      console.log("Added" + result);
      return res.send(result);
    })
    .catch(err => console.log(err));
};

deluser = (req, res) => {
  users
    .destroy({ where: { id: req.params.id } })
    .then(u => {
      if (!u) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      res.send({ message: "User deleted successfully!" });
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
  users
    .update(
      { name, college, branch, gender, dob, phone, email, caddr, paddr },
      { where: { id: req.params.id } }
    )
    .then(result => {
      console.log(result);
      return res.send(true);
    })
    .catch(err => {
      console.log(err);
      return res.send(false);
    });
};

module.exports = { allusers, adduser, deluser, edituser };
