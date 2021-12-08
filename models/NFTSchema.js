const moogoose = require('mongoose')

const NTFSchema = new moogoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = moogoose.model('NTF',
NTFSchema)