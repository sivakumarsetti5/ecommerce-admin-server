const {saveVendorDAO, getVendorDAO} = require("../dao/vendorDAO")

async function saveVendorService(req){
    const data = req.body.data
    const result =await saveVendorDAO(data)
    return result
}

function updateVendorService(req){
    
}

async function getVendorService(req){
    const result = await getVendorDAO()
    return result
}

function deleteVendorService(req){
    
}

module.exports = {saveVendorService,updateVendorService,getVendorService,deleteVendorService}
