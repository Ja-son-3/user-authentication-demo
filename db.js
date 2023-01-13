require('dotenv').config()
const Mongoose = require("mongoose")
let dbConnectionStr = process.env.DB_STRING
const RemoteDB = dbConnectionStr
const connectDB = async () => {
  Mongoose.connect(RemoteDB)
  .then(client => {
    console.log("MongoDB Connected")
  })
}
module.exports = connectDB