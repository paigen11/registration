// first we import our dependencies…
import express from 'express';
var Cors = require('cors');
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import router from './routes/routes';

// and create our instances
const app = express();
// const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3000
const API_PORT = process.env.API_PORT || 3000;

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));


//db config --set URI from mLab
mongoose.connect("mongodb://db:27017/users").then(
// mongoose.connect("mongodb://test:test1234@ds119446.mlab.com:19446/users").then(
    () => {console.log('Database is connected')},
    err => {console.log(`Cannot connect to DB ${err}`)}
);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error'));

// now we can set the route path & initialize the API
router.get('/api', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;