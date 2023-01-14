const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = require('./student')
const Meet = require('./meeting')

const advisorSchema = new Schema({
    username : {
        type: String,
        // required: true,
		unique: true,
    },
    password :{
        type: String,
		// required: true,
		minlength: 6,
    },
    understud : [{type : Schema.Types.ObjectId, ref:'Student'}],
    meeting : [{type : Schema.Types.ObjectId, ref:'Meet'}]
})

module.exports = mongoose.model('Advisor',advisorSchema)