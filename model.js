const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let placeSchema = new Schema({
    placeId: String,
    name: String,
    address: String,
    location: {
        lat: String,
        lng: String,
    },
    type: [String],
})
const Place = mongoose.model('Place', placeSchema);
module.exports = Place