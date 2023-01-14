const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fileSchema = new Schema({
    file:{
        type : String
    },
    message: String,
})

module.exports = mongoose.model('File',fileSchema)
