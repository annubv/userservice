var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  college: { type: String, required: true },
  branch: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  caddr: { type: String, required: true },
  paddr: { type: String, required: true },
  profileimage: {
    id: { type: String, default: "1" },
    url: { type: String, default: "images/defimg.jpg" }
  }
});

module.exports = mongoose.model("user", UserSchema);
