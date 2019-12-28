const sq = require("sequelize");

const db = new sq({
  dialect: "sqlite",
  storage: "./backend/databases/database.sqlite"
});

const users = db.define("users", {
  name: {
    type: sq.STRING,
    allowNull: false
  },
  email: {
    type: sq.STRING,
    allowNull: false,
    unique: true
  },
  college: {
    type: sq.STRING,
    allowNull: false
  },
  branch: {
    type: sq.STRING,
    allowNull: false
  },
  gender: {
    type: sq.STRING,
    allowNull: false
  },
  dob: {
    type: sq.DATE,
    allowNull: false
  },
  phone: {
    type: sq.STRING,
    allowNull: false
  },
  caddr: {
    type: sq.STRING,
    allowNull: false
  },
  paddr: {
    type: sq.STRING,
    allowNull: false
  }
});

db.sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch(err => {
    console.log("Error Occured: " + err);
  });

module.exports = {
  users
};
