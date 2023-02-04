const mongoose = require('mongoose')

const diseaseSchema = mongoose.Schema({
    name:String,
    phone:String,
    symptoms: {
        type: String,
        required:true        
    },
    assumed_disease: [{
        malaria: ['cold', 'fever', 'vomiting', 'loss of weight'],
        sg: ['kujikuna', 'pains'],
        cholrea:['backpain','vomiting','sleepy']
    }]
})

const Disease = mongoose.model('Disease', diseaseSchema)

module.exports = Disease;