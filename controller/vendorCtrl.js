var express = require('express')
const {saveVendorService, getVendorService, updateVendorService} = require('../service/vendorService')
var router = express.Router()

router.post('/save',async function(req,res,next){
    var result = await saveVendorService(req)
    res.send(result)
    
// http://localhost:2020/vendor/save    
})

router.get('/get',async function(req,res,next){
    const result = await getVendorService()
    res.send(result)
// http://localhost:2020/vendor/get    
})

router.put('/update',async function(req,res,next){
    try{
    const result = await updateVendorService(req)
    res.send(result)
    }
    catch(ex){
        res.send(ex?.message)
    } 
// http://localhost:2020/vendor/update?id={...........}
})

router.delete('/delete',function(req,res,next){
    
})

module.exports = router