// Example mongo query for all crimes within a certain radius
import { REACT_APP_MONGO_URI } from 'react-native-dotenv'

const MongoClient = require('mongodb').MongoClient
const uri = REACT_APP_MONGO_URI
console.log(uri)
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
