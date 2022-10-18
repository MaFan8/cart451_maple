const express = require("express");
const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);
require("dotenv").config();
const mongoose = require("mongoose");

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/varsToMongo',handleGetVars);


const url = process.env.MONGODB_URI;
console.log(url);

//access model
// const AirBnbModel = require("./DBSchema.js");
const RamenModel = require("./DBSchema2.js");


// connect to db
mongoose.connect(url);
let db = mongoose.connection;
db.once("open", async function(){

console.log("are here");

// // test if i can query my database
// AirBnbModel.find({reviewer_name:"Ian"}).then((result)=>{
//   console.log(result);
// })

// test if i can query my database
// RamenModel.find({Country:"Taiwan"}).then((result)=>{
//   console.log(result);
// })

// How many ramens made in us
// let nResCount = await RamenModel.countDocuments({Country: "United States"});
// console.log(nResCount);

// load num of high results
// let nHighRateCount = await RamenModel.countDocuments({Stars: {$gte: "4.5"}});
// console.log(nHighRateCount);

// load all results with ratings of higher than 4.5 
// RamenModel.find({Stars: {$gte: "4.5"}}).then((result)=>{
//   console.log(result);
// });

// const result = RamenModel.findOne({}, "_id").explain("Variety");
// console.log(result);



});



// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));
app.use("/client", clientRoute);
//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}

/// use this VERB for getting posted data... 9
app.post('/postForm',handlePost);
 
// the callback
function handlePost(request,response){
  console.log(request.body);
  response.send("SUCCESS POST");



}

//EXAMPLE of  user making a query ... 10
async function  handleGetVars  (request,response,next){
  console.log(request.url);
  console.log(request.query.paramOne);
  response.send("SUCCESS GET");
}

