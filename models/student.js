const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Resources = require('./resources')
const File = require('./file')
const Advisor = require('./advisor')


const studentSchema = new Schema({
    username : {
        type: String,
		unique: true,
    },
    email :{
        type: String,
		unique: true,
    },
    password :{
        type: String,
		minlength: 6,
    },
    resources : [{type : Schema.Types.ObjectId, ref:'Resources'}],
    file : [{type : Schema.Types.ObjectId, ref:'File'}]
})

module.exports = mongoose.model('Student',studentSchema)