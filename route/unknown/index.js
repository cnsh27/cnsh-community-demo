const express = require('express');
const unknown = express.Router();

unknown.get('/', (req, res) => {
    res.render('unknown');
});

module.exports = unknown;