const axios = require('axios');
const currencyModel = require('../model/currencyDetailsModel')

const helper = {
    apicall: (symbols, base) => {

        axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, { headers: { apikey: `${process.env.API_LEYER_KEY}` } })
            .then(async (data) => {

                console.log(data.data)
                let obj = data.data.rates
                let arr = []
                for (let x in obj) {
                    arr.push({ code: x, value: obj[x] })
                }
               
                const currency = await currencyModel.findOne({ base: data.data.base });
                currency ? currencyModel.findOneAndUpdate({ base: data.data.base }, { otherCurrency: arr }).then(data => {
                    console.log(data)
                }).catch(err => console.log(err)) :
                    currencyModel.create({
                        base: data.data.base,
                        otherCurrency: arr,
                        updated:new Date()
                    }).then(data => {
                        console.log(data)
                    }).catch(err => console.log(err))

            })
    },
    // getData: () => {
    //     return new Promise((resolve, reject) => {
    //         currencyModel.findOne().then(data => {
    //             data.otherCurrency= data.otherCurrency.sort((a,b)=>a.value-b.value)
    //             resolve(data)
    //         }).then(err => reject(err))
    //     })
    // },
    getData:()=>{
        return new Promise((resolve,reject)=>{
            currencyModel.findOneAndUpdate({},{updated:new Date()}).then(data=>{
                console.log(data)
                data.otherCurrency= data.otherCurrency.sort((a,b)=>b.value-a.value)
                resolve(data)
            }).then(err => reject(err))
        })
    }

}

module.exports = helper