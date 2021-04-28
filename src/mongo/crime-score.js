const getCrimeScore = (origin, destination) => {
    // const MongoClient = require('mongodb').MongoClient
    // const uri = "mongodb+srv://snagendran:EOcJhkCgpeJP3Z0h@cluster0.eo6ns.mongodb.net/NiteLite?retryWrites=true&w=majority"
    // const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    // client.connect(async (err) => {
    //     const collection = client.db("NiteLite").collection("crimes")
    //     // [lng,lat]
    //     const origin = {lng: -118.4179, lat: 33.9697}
    //     const destination = {lng: -118.4180, lat: 33.9698}
    //     const query = {
    //         $and: [
    //             {"location.coordinates": { $gt: origin.lng, $lt: destination.lng }},
    //             {"location.coordinates": { $gt: origin.lat, $lt: destination.lat }}
    //         ]
    //     }
    //     const options = {
    //         sort: { location: 1, },
    //     }
    //     const numCrimes = await collection.countDocuments(query, options)
    //     console.log(numCrimes)
    //     // return numCrimes
    //     client.close()
    // });
    return 7.8
}
export default getCrimeScore;