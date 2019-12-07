const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log(" database connection succeded");
});
const reservationsSchema = new Schema ({
    hallsImg:String,
    saloonsImg:String,
    flowersImg:String,
    tuxedosImg:String,
    dressesImg:String,
    cakeImg:String,
    restaurantsImg:String,
    extraImg:String
});
const userinfo= new Schema({
    name : String,
    email:String,
    password:String,
    location : String,
    creditCard:Number
})
const restaurants= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})
const cakeShop= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})
const saloons= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})
const flowersShops= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})
const dressesShops= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})
const menShops= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})
const halls= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})
const extra= new Schema({
    name : String,
    location:String,
    contactInfo:Number,
    price : Number,
    owner:String
})



const reservationsModel = mongoose.model("Items", reservationsSchema);
const UserinfoModel = mongoose.model("userinfo", userinfo);
const restaurantsModel = mongoose.model("restaurants", restaurants);
const cakeShopModel = mongoose.model("cakeShop", cakeShop);
const saloonsModel = mongoose.model("saloons", saloons);
const flowersShopsModel = mongoose.model("flowersShops", flowersShops);
const dressesShopsModel = mongoose.model("dressesShops", dressesShops);
const menShopsModel = mongoose.model("menShops", menShops);
const hallsModel = mongoose.model("halls", halls);
const extraModel = mongoose.model("extra", extra);




reservation1 = new reservationsModel({
    hallsImg:"String",
    saloonsImg:"String",
    flowersImg:"String",
    tuxedosImg:"String",
    dressesImg:"String",
    cakeImg:"String",
    restaurantsImg:"String",
    extraImg:"String"  
});
userinfo1 = new  UserinfoModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
restaurants1 = new  restaurantsModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
cakeShop1 = new  cakeShopModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
saloons1 = new  saloonsModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
flowersShops1 = new  flowersShopsModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
dressesShops1 = new  dressesShopsModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
menShops1 = new  menShopsModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
hall1 = new  hallsModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})
extra1 = new  extraModel({
    name : "String",
    location:"String",
    contactInfo:1,
    price : 2,
    owner:"String"
})

    
// reservation1.save((error,result)=>{
//       if(error){
//         console.log("errrrrror",error
//         )
//       }
//       else{
//       console.log("reservation done")
//       }
//       });


// userinfo1.save((error,result)=>{
//         if(error){
//         console.log("user error",error
//         )
//         }
//         else{
//         console.log("user done")
//         }
//         });


// restaurants1.save((error,result)=>{
//     if(error){
//      console.log("restaurants error",error
//     )
//     }
//     else{
//     console.log("restaurants done")
//     }
//     });


// cakeShop1.save((error,result)=>{
//      if(error){
//     console.log("cakeshops error",error
//         )
//         }
//     else{
//     console.log("cakeshops done")
//     }
//     });


// saloons1.save((error,result)=>{
//     if(error){
//      console.log("saloons error",error
//         )
//         }
//     else{
//     console.log("saloons done")
//     }
//     });
                    
// flowersShops1.save((error,result)=>{
//     if(error){
//     console.log("flowers error",error
//     )
//     }
//     else{
//     console.log("flowers done")
//     }
//     });

// dressesShops1.save((error,result)=>{
//     if(error){
//      console.log("dresses error",error
//         )
//         }
//         else{
//         console.log("dresses done")
//         }
//         });

// menShops1.save((error,result)=>{
//     if(error){
//     console.log("menshops error",error
//     )
//     }
//     else{
//     console.log("menshops done")
//     }
//     });
// hall1.save((error,result)=>{
//     if(error){
//     console.log("hall error",error
//      )
//     }
//     else{
//     console.log("hall done")
//     }
//     });

//  extra1.save((error,result)=>{
//     if(error){
//     console.log("extra error",error
//      )
//     }

    
//     else{
//     console.log("extra done")
//     }
//     });
      


module.exports.reservationsModel = reservationsModel;
module.exports.UserinfoModel=UserinfoModel;
module.exports.restaurantsModel=restaurantsModel;
module.exports.cakeShopModel=cakeShopModel;
module.exports.saloonsModel=saloonsModel;
module.exports.flowersShopsModel=flowersShopsModel;
module.exports.dressesShopsModel=dressesShopsModel;
module.exports.menShopsModel=menShopsModel;
module.exports.hallsModel=hallsModel;
module.exports.extraModel=extraModel;


