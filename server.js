const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
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

app.get("/halls", (req, res) => {
  hallsModel.find({}).then(hallsModel => {
    res.json(hallsModel);
  });
});

app.get("/imgs/:id", (req, res) => {
  reservationsModel
    .find({})
    .then(reservationsModel => res.json(reservationsModel));
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server started on port " + port);
});
