var express = require('express')
const {saveVendorService, getVendorService, updateVendorService, deleteVendorService} = require('../service/vendorService')
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

router.delete('/delete/:id',async function(req,res,next){
    try{
        const result = await deleteVendorService(req)
        res.send(result)
        }
        catch(ex){
            res.send(ex?.message)
        } 
// http://localhost:2020/vendor/delete?{id}        
})

module.exports = router