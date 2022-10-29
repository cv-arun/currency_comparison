
const express = require('express')
const router = express.Router();
const helper=require('../helpers/mainHelper')
const controller=require('../controllers/mainController')



router.get('/',controller.IsRunnig)
router.get('/getUpdate',controller.getData)




setInterval(()=>{
    let simbols='INR,EUR,MVR,ALL,CVE'
    let base='USD'
helper.apicall(simbols,base)
},1000*60*60)


module.exports = router