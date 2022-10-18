const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.DBURL)
console.log(process.env.DBURL)