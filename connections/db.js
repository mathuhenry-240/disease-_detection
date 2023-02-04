const dotenv = require('dotenv')
var mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.DB_url)
    .then(() => console.log(`db conected`))
    .catch((e)=>console.log(`failed to connect ${e.toString()}`))
