const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// app.use(express.static(__dirname + "/client/dist"));
// app.use(express.static(__dirname + "/node_modules"));
// app.use(express.static(__dirname+"/client/src/components"))
// //Config DB
const URI = require("./config/keys").mongoURI;
console.log(URI);
mongoose.connect(URI, { useNewUrlParser: true });

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//  console.log(" database connection succeded");
// });
app.use(bodyParser.json());

const reservationsModel = require("./models/item.js").reservationsModel;
const hallsModel = require("./models/item.js").hallsModel;

app.get("/", (req, res) => {res.send("end")})
app.get("/reservations", (req, res) => {
    console.log("data")
    reservationsModel.find({})
       .then(reservationsModel =>{console.log(reservationsModel)
         res.json(reservationsModel)
    });
   })
app.get("/halls", (req, res) => {
  hallsModel.find({}).then(hallsModel => {
    res.json(hallsModel);
  });
});


// // 1. Set up your server to make calls to PayPal

// // 1a. Import the SDK package
// const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

// // 1b. Import the PayPal SDK client that was created in `Set up Server-Side SDK`.
// /**
//  *
//  * PayPal HTTP client dependency
//  */
// // const payPalClient = require('../Common/payPalClient');

// // 2. Set up your server to receive a call from the client
// module.exports = async function handleRequest(req, res) {

//   // 2a. Get the order ID from the request body
//   const orderID = req.body.orderID;

//   // 3. Call PayPal to get the transaction details
//   let request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID);

//   let order;
//   try {
//     order = await payPalClient.client().execute(request);
//   } catch (err) {

//     // 4. Handle any errors from the call
//     console.error(err);
//     return res.send(500);
//   }

//   // 5. Validate the transaction details are as expected
//   if (order.result.purchase_units[0].amount.value !== '220.00') {
//     return res.send(400);
//   }

//   // 6. Save the transaction in your database
//   // await database.saveTransaction(orderID);

//   // 7. Return a successful response to the client
//   return res.send(200);
// }
// const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
// request.headers["PayPal-Partner-Attribution-Id"] = "PARTNER_ID_ASSIGNED_BY_YOUR_PARTNER_MANAGER";

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server started on port " + port);
});
