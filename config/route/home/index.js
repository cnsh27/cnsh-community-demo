const express = require('express');
const home = express.Router();

home.get('/', (req, res) => {
    res.render('index');
});

home.get('/login', (req, res)=>{
    res.render('login');
});

module.exports = home;