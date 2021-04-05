const express = require('express');
const home = express.Router();

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        req.isLogged = true;
        return next();
    }
    res.redirect('/');
}

home.get('/', (req, res) => {
    res.render('index', {
        isLogged: true
    });
});

home.get('/login', isLoggedIn, (req, res)=>{
    res.render('login', {
        isLogged: req.isLogged
    });
});

module.exports = home;