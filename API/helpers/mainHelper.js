const axios = require('axios');
const currencyModel = require('../model/currencyDetailsModel')

const helper = {
    apicall: (symbols, base) => {

        axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, { headers: { apikey: `${process.env.API_LEYER_KEY}` } })
            .then(async (data) => {

                console.log(data.data)
                const currency = await currencyModel.findOne({ base: data.data.base });
                currency ? currencyModel.findOneAndUpdate({ base: data.data.base }, { otherCurrency: data.data.rates }).then(data => {
                    console.log(data)
                }).catch(err => console.log(err)) :
                    currencyModel.create({
                        base: data.data.base,
                        otherCurrency: data.data.rates
                    }).then(data => {
                        console.log(data)
                    }).catch(err => console.log(err))

            })
    },
    getData: () => {
        return new Promise((resolve, reject) => {
            currencyModel.findOne().then(data => {
                resolve(data)
            }).then(err=>reject(err))
        })
    }

}

module.exports = helper