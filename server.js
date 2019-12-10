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
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we are connected");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));
const reservationsModel = require("./models/item.js").reservationsModel;
const hallsModel = require("./models/item.js").hallsModel;
const ShopsModel = require("./models/item.js").ShopsModel;

app.get("/", (req, res) => {
  res.send("end");
});
app.get("/reservations", (req, res) => {
  console.log("data");
  reservationsModel.find({}).then(reservationsModel => {
    console.log(reservationsModel);
    res.json(reservationsModel);
  });
});
app.get("/halls", (req, res) => {
  hallsModel.find({}).then(hallsModel => {
    res.json(hallsModel);
  })
})
app.get("/shops", (req, res) => {
  ShopsModel.find({ description: "hall" }).then(ShopsModel => {
    res.json(ShopsModel);
  });
});
////////Basima part:
app.get("/id", function(req, res) {
  var d = req.query.id;
  console.log(d);
  console.log("Request Type:", req.method);
  ShopsModel.findOne({ id: d }, (err, data) => {
    if (err) {
      console.log("Err", err);
    }
    console.log(data);
    res.status(200).send(data);
  });
  //next();
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server started on port " + port);
});
