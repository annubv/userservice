const db = require("../databases/userdata");
const users = db.users;

const allusers = (req, res) => {
  users.findAll().then(r => {
    console.log("Allusers: ", r);
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
  console.log({
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

module.exports = { allusers, adduser };
