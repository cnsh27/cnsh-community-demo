const express = require('express');
const classRoute = express.Router();
const middleware = require('../../config/middleware');

classRoute.get('/', middleware.isLoggedIn, (req, res) => {
    res.render('class', { isLogged: req.isLogged });
});

module.exports = classRoute;