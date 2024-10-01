var mongodb = require('mongodb')
const getDB = require('../common/getDB')

async function loginDAO(data){
    try{
        //connect with DB
        var db =  await getDB()
        var collection = db.collection('admin')
        var result =  await collection.find(data).toArray()
        return result
        //No sql - server - install db s/w - run - db - collections - documents
        //sql - server - install db s/w - run -db - tables - rows
        
    }
    catch(ex){
    }
    finally{
    }
}

module.exports = loginDAO