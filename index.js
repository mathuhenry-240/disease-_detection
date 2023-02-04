const app = require('express')()
const http = require('http').Server(app)
const cors = require('cors')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
require('./connections/db')

dotenv.config()

app.use(cors({origin:true, credentials:true}))
app.use(bodyparser.json())

const sdd = require('./routes/disease')




app.use('/disease',sdd)




app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}\n http://localhost:${process.env.PORT}/`))