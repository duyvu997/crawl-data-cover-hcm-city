
const PlaceModel = require("./model");
const database = require("./database");
// var defaultBounds = new google.maps.LatLngBounds(
//     new google.maps.LatLng(-33.8902, 151.1759),
//     new google.maps.LatLng(-33.8474, 151.2631));
var bounds = {
    north: 106.6511948,
    east: 10.757297,
    south: 106.6911948,
    west: 10.767297
} 
      
const crawl = (lat, lon) => {
    const googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyClLCfnSJ_BXOX3CdQ25HivWRMyK7yKqss',
        Promise: Promise,
    });
    return googleMapsClient.places({
        location:point:{
            
        },
        radius: 500,
        type: "bank"
    }).asPromise();
}

async function myTest(lat, lon) {
    try {

        await database.connect;
        const processedData = []
        const data = await crawl(lat, lon);
        console.log(data.json.results.length)
        for (let raw of data.json.results) {
            const obj = {
                name: raw.name,
                address: raw.formatted_address,
                location: raw.geometry.location,
                type: raw.types
            }
            PlaceModel.create(obj);
            processedData.push(obj);
        }
        console.log(processedData)
    } catch (error) {
        console.log(error);
    }
    // database.disconnect;
}
myTest();

