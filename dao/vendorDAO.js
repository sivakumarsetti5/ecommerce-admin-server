var mongo = require('mongodb')
var ObjectId = mongo.ObjectId
const getDB = require("../common/getDB")


async function saveVendorDAO(data){
    const db = await getDB()
    var collection =db.collection('vendors')
    var result =await collection.insertOne(data)
    return result
}

async function updateVendorDAO(id,data){
    const db = await getDB()
    var collection =db.collection('vendors')
    var result =await collection.updateOne({_id:ObjectId.createFromHexString(id)},{$set:data})
    return result
}

async function getVendorDAO(){
    const db = await getDB()
    const collection = db.collection("vendors")
    const result = await collection.find({}).toArray()
    return result
}

async function deleteVendorDAO(id){
    const db = await getDB()
    const collection = db.collection("vendors")
    const result = await collection.deleteOne({_id:ObjectId.createFromHexString(id)})
    return result
}

module.exports = {saveVendorDAO,updateVendorDAO,getVendorDAO,deleteVendorDAO}