require('dotenv').config();

const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const MongoStore = require('connect-mongo');


const route = require('./route');
const passportconfig = require('./config/passport');
const connectDB = require('./config/db');

const app = express();

connectDB(mongoose);

passportconfig(passport);



/* app setting */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");
app.use(express.static(require('path').join(__dirname, 'public')));

const options = {
  mongoUrl: process.env.MONGO_URL+'/session',
};

app.use(session({
    store: MongoStore.create(options),
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
      httpOnly: true,
      secure: false
    }
}));  

app.use(passport.initialize());
app.use(passport.session());

app.use(route);

module.exports = app;