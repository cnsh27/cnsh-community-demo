const express = require('express');
const unknown = express.Router();
const middleware = require('../../config/middleware');

unknown.get('/', middleware.isLoggedIn, (req, res) => {
    res.render('unknown', { isLogged: req.isLogged });
});

module.exports = unknown;