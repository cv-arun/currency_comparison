const { response } = require('express')
const helper = require('../helpers/mainHelper')

module.exports = {

    IsRunnig: (req, res, next) => {
        res.json({ msg: 'server running' })
        // res.send('hello')
    },
    getData: (req, res, next) => {
        helper.getData().then(data => {
            res.json(data)
        }).catch(err => res.json(err))
    }
}