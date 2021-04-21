// Example mongo query for all crimes within a certain radius
import { REACT_APP_MONGO_URI } from 'react-native-dotenv'

const MongoClient = require('mongodb').MongoClient
const uri = REACT_APP_MONGO_URI
console.log(uri)
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true })
client.connect(async (err) => {
    const collection = client.db("NiteLite").collection("streetlights")
    // perform actions on the collection object
    const radius = 5000
    const lng = -118.4179
    const lat = 33.9697
    const query = {
        location: {
            $geoNear: {
                near: [lng,lat],
                distanceField: "distance",
                uniqueDocs: true,
                query : {"_id" : "id1"},
                maxDistance : 2000
            },
        //   $near: {
        //     $geometry: { type: "Point", coordinates: [lng,lat] },
        //     $maxDistance: radius,
        //   },
        },
      }
    const options = {
        // sort matched documents in descending order by date
        sort: { location: 1, },
    }

    const query2 = {
            "location.coordinates": { $gt: -118.424, $lt: -118.418422 },
    }
    const numStreetlights = await collection.aggregate(query, options)
    // const cursor = await collection.aggregate([
    //     {
    //         $geoNear: {
    //             near: [lng,lat],
    //             distanceField: "distance",
    //             uniqueDocs: true,
    //             query : {"_id" : "id1"},
    //             maxDistance : 2000
    //         },
    //     }
    // ])
    // console.log(numStreetlights)
    await numStreetlights.forEach(console.dir)
    // console.log(collection.find(query, options).count)
    // console.log(await collection.find(query, options).count())

    client.close()
});
