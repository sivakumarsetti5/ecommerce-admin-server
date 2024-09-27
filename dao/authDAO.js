var mongodb = require('mongodb')

async function loginDAO(data){
    try{
        //connect with DB
        var url = 'mongodb+srv://siva:siva@cluster0.kuldp.mongodb.net/'
        var mongoClient =mongodb.MongoClient
        var server = await mongoClient.connect(url)
        var db = server.db("7am")
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