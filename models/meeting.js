const mongoose = require('mongoose')
const student = require('./student')
const Schema = mongoose.Schema
const Student = require('./student')

const meetSchema = new Schema({
    link:{
        type : String,
        required : true
    },
    date:{
        type : Date, //'yyyy-mm-dd'
        required : true
    },
    time:{
        type : String,
        required : true
    },
    student : {type : Schema.Types.ObjectId, ref:'Student'},
    approved : Boolean
})

module.exports = mongoose.model('Meet', meetSchema)