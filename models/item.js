const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(" database connection succeded");
});
const userSchema = new Schema ({
    id:Number,
    email:String,
    password:String,
    role:String,

})

const ownerSchema = new Schema({
  name: String,
  userId: Number,
  profileImg: String,
  
});

const customerSchema = new Schema({
  name: String,
  userId: String,
  profileImg: String,

});
const ShopsSchema = new Schema({
  ownerId: String,
  location:String,
  contactInfo:Number,
  price:Number,
  openingHours:Number,
  capacity:Number,
  description:String,
  image:String

});
const AppointmentsSchema = new Schema({
  shopId: Number,
  timeSlot: Number,
  date: Number,
  customerId: Number,
  

});


const UserModel = mongoose.model("user", userSchema);
const OwnerModel = mongoose.model("owner", ownerSchema);
const CustomerModel = mongoose.model("customer", customerSchema);
const ShopsModel = mongoose.model("shops", ShopsSchema);
const AppointmentsModel = mongoose.model("appointment", AppointmentsSchema);




user1 = new UserModel({
  id:4,
  email:"String",
  password:"String",
  role:"String",
});
owner1 = new  OwnerModel({
  name: "String",
  userId: 2,
  profileImg: "String",
})
customer1 = new  CustomerModel({
  name: "String",
  userId: 2,
  profileImg: "String",
})
shops1 = new ShopsModel({
  ownerId: Number,
  location:"String",
  contactInfo:3,
  price:3,
  openingHours:3,
  capacity:2,
  description:"String",
  image:"String"
})

appointment1 = new  AppointmentsModel({
  shopId: 2,
  timeSlot: 1,
  date:2,
  customerId: 2,
})


    
user1.save((error,result)=>{
      if(error){
        console.log("errrrrror",error
        )
      }
      else{
      console.log("user done")
      }
      });


   owner1.save((error,result)=>{
      if(error){
       console.log("restaurants error",error
      )
      }
      else{
      console.log("owner done")
      }
      });

customer1.save((error,result)=>{
        if(error){
        console.log("user error",error
        )
        }
        else{
        console.log("customer done")
        }
        });


shops1.save((error,result)=>{
     if(error){
    console.log("cakeshops error",error
        )
        }
    else{
    console.log("shops done")
    }
    });


appointment1.save((error,result)=>{
    if(error){
     console.log("saloons error",error
        )
        }
    else{
    console.log("appointment done")
    }
    });


module.exports.UserModel = UserModel;
module.exports.OwnerModel=OwnerModel;
module.exports.CustomerModel=CustomerModel;
module.exports.ShopsModel=ShopsModel;
module.exports.AppointmentsModel=AppointmentsModel;



