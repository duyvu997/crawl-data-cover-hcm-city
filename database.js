const mongoose = require('mongoose');

const urlCloud= 'mongodb+srv://ngocduy799:maimaiyem250912@pizzaorderclouddb-bvcbc.mongodb.net/rent-hosue?retryWrites=true&w=majority';
const local = "mongodb://localhost:27017/google-maps-places-data";
const url = urlCloud;

mongoose.connect(url, {
    useNewUrlParser: true
});
mongoose.set('useFindAndModify', false);

// mongoose.disconnect();
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection to DB error'));

db.once('open', function () {
    console.log('Database connected successfull !!! ');
    module.exports = db;
});
