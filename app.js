require('dotenv').config();

const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const cors = require('cors');
const passport = require('passport');
const route = require('./config/route');
const passportconfig = require('./config/passport');



app.use(cors());
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(require('path').join(__dirname, 'public')));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    store: new FileStore(),
    cookie: {
      httpOnly: true,
      secure: false
    }
}));
app.use(passport.initialize());
app.use(passport.session());

passportconfig();


app.use(route);

module.exports = app;