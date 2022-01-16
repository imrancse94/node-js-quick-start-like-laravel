require('dotenv').config()
const mongoose = require("mongoose");
var connectionString = `mongodb://`;

if(process.env.DB_USERNAME && process.env.DB_PASSWORD) {
    connectionString += `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@:`;
}
connectionString += `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const client = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  //useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {

}).catch(err => {
  console.log(err);
});

console.log('connectionString',connectionString)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
module.exports = db;