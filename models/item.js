const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(" database connection succeded");
});
const userSchema = new Schema({
  id: Number,
  email: String,
  password: String,
  role: String
});

const ownerSchema = new Schema({
  name: String,
  userId: Number,
  profileImg: String
});

const customerSchema = new Schema({
  name: String,
  userId: String,
  profileImg: String
});
const ShopsSchema = new Schema({
  ownerId: String,
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  openingHours: Number,
  capacity: Number,
  description: String,
  image: String
});
const AppointmentsSchema = new Schema({
  shopId: Number,
  timeSlot: Number,
  date: Number,
  customerId: Number
});

const UserModel = mongoose.model("user", userSchema);
const OwnerModel = mongoose.model("owner", ownerSchema);
const CustomerModel = mongoose.model("customer", customerSchema);
const ShopsModel = mongoose.model("shops", ShopsSchema);
const AppointmentsModel = mongoose.model("appointment", AppointmentsSchema);

module.exports.UserModel = UserModel;
module.exports.OwnerModel = OwnerModel;
module.exports.CustomerModel = CustomerModel;
module.exports.ShopsModel = ShopsModel;
module.exports.AppointmentsModel = AppointmentsModel;
