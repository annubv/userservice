const express = require("express");
const usermgmnt = require("../controllers/usermgmnt");
const viewmgmnt = require("../controllers/viewmgmnt");

const router = express.Router();

router.route("/").get(viewmgmnt.home);
router.route("/user").get(usermgmnt.allusers);
router.route("/user/register").get(viewmgmnt.userform);

router.route("/user").post(usermgmnt.adduser);

router.route("/user/:id").post(usermgmnt.deluser);

module.exports = router;
