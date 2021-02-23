// Example mongo query for all crimes within a 

const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://snagendran:EOcJhkCgpeJP3Z0h@cluster0.eo6ns.mongodb.net/NiteLite?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true })
client.connect(async (err) => {
    const collection = client.db("NiteLite").collection("streetlights")
    // perform actions on the collection object
    const query = { "location.coordinates": {$gt: -118.42399942004097} }
    const options = {
        // sort matched documents in descending order by date
        sort: { dateOccurred: -1 },
    }
    const cursor = collection.find(query, options)
    await cursor.forEach(console.dir)

    client.close()
});
