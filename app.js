require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
const compress = require("compression");
const logger = require("morgan");
const cors = require("cors");
const ejs = require("ejs");
const session = require("express-session");
const mainroutes = require(__dirname + "/backend/routes/mainroutes");

const app = express();

/* MongoDB Configuration */

var mongoose = require("mongoose");
var mongoDB = process.env.MONGO || "mongodb://localhost:27017/userservice";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/* Middleware Setup */

app.use(express.static(__dirname + "/client/css"));
app.use(express.static(__dirname + "/client/assets"));

app.use(cors());
app.use(compress());
app.use(logger("dev"));
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(logger("dev"));
app.use(
  session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "afsfw123dsa",
    cookie: { maxAge: 100000000, sameSite: true }
  })
);
app.use("/", mainroutes);
app.engine("html", ejs.renderFile);
app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("App Running at " + "http://localhost:" + app.get("port"));
});

module.exports = app;
