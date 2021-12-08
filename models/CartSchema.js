const moogoose = require('mongoose')

const CartSchema = new moogoose.Schema({
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

module.exports = moogoose.model('Cart',
CartSchema)