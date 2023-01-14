const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resSchema = new Schema({
    link : {
        type: String
    },
    rating :{
        type : Number,
        min : 0,
        max : 5
    }
})

module.exports = mongoose.model('Resources',resSchema)