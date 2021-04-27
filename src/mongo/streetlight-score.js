// Example mongo query for all crimes within a certain radius
// import { REACT_APP_MONGO_URI } from 'react-native-dotenv'

const getStreetlightScore = (origin, destination) => {
    const MongoClient = require('mongodb').MongoClient
    const uri = "mongodb+srv://snagendran:EOcJhkCgpeJP3Z0h@cluster0.eo6ns.mongodb.net/NiteLite?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true })

    console.log("ORIGIN: ", origin)
    console.log("DESTINATION: ", destination)

    client.connect(async (err) => {
        const collection = client.db("NiteLite").collection("streetlights")
        const radius = 5000
        // const origin = {lng: -118.4179, lat: 33.9697}
        // const destination = {lng: -118.4180, lat: 33.9698}
        const query = {
            // "location.coordinates": { $gt: -118.424, $lt: -118.418422 }
            $and: [
                {"location.coordinates": { $gt: origin.lng, $lt: destination.lng }},
                {"location.coordinates": { $gt: origin.lat, $lt: destination.lat }}
            ]
        }
        const options = {
            sort: { location: 1, },
            // limit: 10
        }

        const numStreetlights = await collection.countDocuments(query, options)
        console.log(numStreetlights)
        // const numStreetlights = await collection.find(query, options)
        // await numStreetlights.forEach(console.log)
        // return numStreetlights

        client.close()
    });
}

export default getStreetlightScore;