const express = require("express");
const usermgmnt = require("../controllers/usermgmnt");
const viewmgmnt = require("../controllers/viewmgmnt");

const router = express.Router();

router.route("/").get(viewmgmnt.home); //Homepage
router.route("/user").get(usermgmnt.allusers); //Shows list of all users
router.route("/user/register").get(viewmgmnt.userform); //Form Page
router.route("user/:id").get();

router.route("/user").post(usermgmnt.adduser); // To add a user
router.route("/user/:id").post(usermgmnt.deluser); //To delete a user
router.route("/edituser/:id").post(usermgmnt.edituser); //To edit a user

module.exports = router;
