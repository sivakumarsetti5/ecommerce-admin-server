const {saveVendorDAO, getVendorDAO, updateVendorDAO, deleteVendorDAO} = require("../dao/vendorDAO")

async function saveVendorService(req){
    const data = req.body.data
    const result =await saveVendorDAO(data)
    return result
}

async function updateVendorService(req){
    const data = req.body.data
    const id = req.query.id
    const result = await updateVendorDAO(id,data)
    return result
}

async function getVendorService(req){
    const result = await getVendorDAO()
    return result
}

async function deleteVendorService(req){
    const{id}=req.params
    const result = await deleteVendorDAO(id)
    return result
}

module.exports = {saveVendorService,updateVendorService,getVendorService,deleteVendorService}
