const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(" database connection succeded");
});
const reservationsSchema = new Schema({
  id: Number
});
const userinfo = new Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  creditCard: Number
});
const restaurants = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});
const cakeShop = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});
const saloons = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});
const flowersShops = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});
const dressesShops = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});
const menShops = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});
const halls = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});
const extra = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String
});

const reservationsModel = mongoose.model("Item", reservationsSchema);
const UserinfoModel = mongoose.model("userinfo", userinfo);
const restaurantsModel = mongoose.model("restaurants", restaurants);
const cakeShopModel = mongoose.model("cakeShop", cakeShop);
const saloonsModel = mongoose.model("saloons", saloons);
const flowersShopsModel = mongoose.model("flowersShops", flowersShops);
const dressesShopsModel = mongoose.model("dressesShops", dressesShops);
const menShopsModel = mongoose.model("menShops", menShops);
const hallsModel = mongoose.model("halls", halls);
const extraModel = mongoose.model("extra", extra);

module.exports.reservationsModel = reservationsModel;
module.exports.UserinfoModel = UserinfoModel;
module.exports.reservationsModel = restaurantsModel;
module.exports.cakeShopModel = cakeShopModel;
module.exports.saloonsModel = saloonsModel;
module.exports.flowersShopsModel = flowersShopsModel;
module.exports.dressesShopsModel = dressesShopsModel;
module.exports.menShopsModel = menShopsModel;
module.exports.hallsModel = hallsModel;
module.exports.extraModel = extraModel;
