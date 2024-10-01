const getDB = require("../common/getDB")


async function saveVendorDAO(data){
    const db = await getDB()
    var collection =db.collection('vendors')
    var result =await collection.insertOne(data)
    return result
}

function updateVendorDAO(){

}

async function getVendorDAO(){
    const db = await getDB()
    const collection = db.collection("vendors")
    const result = await collection.find({}).toArray()
    return result
}

function deleteVendorDAO(){
    
}

module.exports = {saveVendorDAO,updateVendorDAO,getVendorDAO,deleteVendorDAO}