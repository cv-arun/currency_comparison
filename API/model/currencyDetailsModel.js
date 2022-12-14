const mongoose = require('mongoose')


const exchangeModel = mongoose.Schema({
    base: String,
    otherCurrency: [{
        code: String,
        value: Number
    }],
    updated:String
})

module.exports = mongoose.model('Exchange', exchangeModel)