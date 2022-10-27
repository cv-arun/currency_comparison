const mongoose=require('mongoose')


const exchangeModel=mongoose.Schema({
    base:String,
    otherCurrency:{
        INR:Number,
        EUR:Number,
        MVR:Number,
        ALL:Number,
        CVE:Number,
    }
})

module.exports=mongoose.model('Exchange',exchangeModel)