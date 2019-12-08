const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(" database connection succeded");
});
const userSchema = new Schema ({
    name:String,
    email:String,
    password:String,
    role:String,

})

const ownerSchema = new Schema({
  name: String,
  shopName: String,
  email: String,
  password: String,
  location: String,
  category:String
});

const customerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number
});
const ShopsSchema = new Schema({
  name: String,
  description:String,

});
const itemSchema = new Schema({
  name: String,
  location: String,
  contactInfo: Number,
  price: Number,
  owner: String,
  description:String,

});


const UserModel = mongoose.model("user", userSchema);
const OwnerModel = mongoose.model("owner", ownerSchema);
const CustomerModel = mongoose.model("customer", customerSchema);
const ShopsModel = mongoose.model("shops", ShopsSchema);
const ItemModel = mongoose.model("item", itemSchema);




user1 = new UserModel({
  name:"String",
  email:"String",
  password:"String",
  role:"String",
});
owner1 = new  OwnerModel({
  name: "String",
  shopName: "String",
  email: "String",
  password: "String",
  location: "String",
  category:"String"
})
customer1 = new  CustomerModel({
  name: "String",
  email: "String",
  password: "String",
  mobile: 3
})
shops1 = new ShopsModel({
  name: "String",
  description:"String",
})
item1 = new  ItemModel({
  name: "String",
  location: "String",
  contactInfo: 4,
  price: 5,
  owner: "String",
  description:"String",
})


    
// user1.save((error,result)=>{
//       if(error){
//         console.log("errrrrror",error
//         )
//       }
//       else{
//       console.log("user done")
//       }
//       });


//    owner1.save((error,result)=>{
//       if(error){
//        console.log("restaurants error",error
//       )
//       }
//       else{
//       console.log("owner done")
//       }
//       });

// customer1.save((error,result)=>{
//         if(error){
//         console.log("user error",error
//         )
//         }
//         else{
//         console.log("customer done")
//         }
//         });


// shops1.save((error,result)=>{
//      if(error){
//     console.log("cakeshops error",error
//         )
//         }
//     else{
//     console.log("shops done")
//     }
//     });


// item1.save((error,result)=>{
//     if(error){
//      console.log("saloons error",error
//         )
//         }
//     else{
//     console.log("item done")
//     }
//     });


module.exports.UserModel = UserModel;
module.exports.OwnerModel=OwnerModel;
module.exports.CustomerModel=CustomerModel;
module.exports.ShopsModel=ShopsModel;
module.exports.ItemModel=ItemModel;



