const router = require('express').Router()
const Disease = require('../models/disease')
const africastalking = require('africastalking')


const AT = africastalking({username:'infostack',apiKey:'1f60428d00b9f30ff25d33b18d062fa4e65f90283ad6319a5c6839356d63f9f4'}).SMS


router.get('/', async(req, res) => {
    try {
        const d = await Disease.find()
        return res.status(200).send(d)
    } catch (err) {
        return res.status(400).send(err)
    }
})

router.post('/', async (req, res) => {
    const d = new Disease({
        name: req.body.name,
        phone:req.body.phone,
        symptoms: req.body.symptoms,
    })
    const ad = await Disease.find()
    if (ad.symptoms === ad.assummed_disease) {
        const sendSms = async () => {
            const output = await AT.send({
                to: ['+254759213531'],
                message: `hello ${ad.name}, your symptoms are${ad.assummed_disease}`,
                enqueue: true
            })
            console.log({ output })
            console.log("hello")
        
            
        }
        sendSms();
    }
    try {
        const s = await d.save()
        return res.status(200).send(s)
    } catch (err) {
        return res.status(400).send(err)
    }
    
})






module.exports = router