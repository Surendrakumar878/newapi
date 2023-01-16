let mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config()
const connection=mongoose.connect(process.env.CONNECTION)

module.express={
    connection
}
// "mongodb://localhost:27017/ecomDB
// mongodb+srv://surendra:UUKT2sUmkDRJcOEp@cluster0.oihbpyz.mongodb.net/?retryWrites=true&w=majority