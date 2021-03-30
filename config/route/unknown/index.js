const express = require('express');
const unknown = express.Router();

unknown.get('/', (req, res) => {
    res.render('index');
});

module.exports = unknown;