const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  profile_pic: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
