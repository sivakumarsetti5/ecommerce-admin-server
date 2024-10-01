var express = require('express')
const {saveVendorService, getVendorService} = require('../service/vendorService')
var router = express.Router()

router.post('/save',async function(req,res,next){
    var result = await saveVendorService(req)
    res.send(result)
    
// http://localhost:2020/vendor/save    
})

router.get('/get',async function(req,res,next){
    const result = await getVendorService()
    res.send(result)
})

router.put('/update',function(req,res,next){
    
})

router.delete('/delete',function(req,res,next){
    
})

module.exports = router