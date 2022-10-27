const { response } = require('express')
const helper = require('../helpers/mainHelper')

module.exports = {
    getData: (req, res, next) => {
        helper.getData().then(data=>{
            res.json(data)
        }).catch(err=>res.json(err))
    }
}