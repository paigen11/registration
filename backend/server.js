// first we import our dependencies…
import express from 'express';
var Cors = require('cors');
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import deleteRouter from './routes/deleteRoute';
import registerRouter from './routes/registerUserRoute';
import loginRouter from './routes/loginUserRoute';
import userInfoRouter from './routes/getUserInfoRoute';
import updateUserRouter from './routes/updateUserRoute';

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
mongoose.connect("mongodb://test:test1234@db:27017/users").then(
// mongoose.connect("mongodb://test:test1234@ds119446.mlab.com:19446/users").then(
    () => {console.log('Database is connected')},
    err => {console.log(`Cannot connect to DB ${err}`)}
);

// Use our routers configuration when we call /api
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', userInfoRouter);
app.use('/', updateUserRouter);
app.use('/', deleteRouter);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;