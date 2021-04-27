// const getConstructionScore = (origin, destination) => {
    const MongoClient = require('mongodb').MongoClient
    const uri = "mongodb+srv://snagendran:EOcJhkCgpeJP3Z0h@cluster0.eo6ns.mongodb.net/NiteLite?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    client.connect(async (err) => {
        const collection = client.db("NiteLite").collection("construction")
        const origin = {lng: -118.467548, lat: 34.033586}
        const destination = {lng: -118.467549, lat: 34.033587}
        const query = {
            $and: [
                {"location.coordinates": { $gt: origin.lng, $lt: destination.lng }},
                {"location.coordinates": { $gt: origin.lat, $lt: destination.lat }}
            ]
        }
        const options = {
            sort: { location: 1, },
        }

        const numConstructionZones = await collection.countDocuments(query, options)
        console.log(numConstructionZones)

        // const numConstructionZones = await collection.find(query, options)
        // await numConstructionZones.forEach(console.log)
        // return numConstructionZones

        client.close()
    });
// }

// export default {getConstructionScore};