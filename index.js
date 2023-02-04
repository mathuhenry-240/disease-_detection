const express = require('express')
const app = express()
const africastalking = require('africastalking')
const dotenv = require('dotenv')

dotenv.config()

const AT = africastalking({username:'infostack',apiKey:'1f60428d00b9f30ff25d33b18d062fa4e65f90283ad6319a5c6839356d63f9f4'}).SMS

const sendSms = async () => {
    const output = await AT.send({
        to: ['+254758987514','+254725037444'],
        message: 'hello world, build with  me',
        enqueue:true
    })
    console.log({ output })
    console.log("hello")

    
} 
sendSms();

console.log('hello')




app.listen(process.env.PORT, ()=>console.log(`server is running on port ${process.env.PORT}`))