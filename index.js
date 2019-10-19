
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
      
const crawl = (lat, lng) => {
    const googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyClLCfnSJ_BXOX3CdQ25HivWRMyK7yKqss',
        Promise: Promise,
    });
    return googleMapsClient.places({
        location:{
            latitude: lat,
            longitude:lng
        },
        radius: 500,
        type: "bus_station"
    }).asPromise();
}

async function myTest() {
    try {

        await database.connect;
        const processedData = []

        const listPoints = [{
            lat:"10.7333542314",
            lng:"106.5653151974"
        },{
            lat:"10.8009117",
            lng:"106.7419111"
        },{
            lat:"10.8014289",
            lng:"106.7445998"
        },{
            lat:"10.77675",
            lng:"106.602489"
        }];
        for(let point  of listPoints){
            const data = await crawl(point.lat, point.lng);
            console.log(data.json.results.length)
            
            for (let raw of data.json.results) {
                const obj = {
                    placeId: raw.id,
                    name: raw.name,
                    address: raw.formatted_address,
                    location: raw.geometry.location,
                    type: raw.types
                }
                PlaceModel.create(obj);
                processedData.push(obj);
            }
        }
        console.log(processedData)
    } catch (error) {
        console.log(error);
    }
    // database.disconnect;
}
myTest();

