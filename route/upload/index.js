const express = require('express');
const passport = require('passport');
const upload = express.Router();


upload.get('/', (req, res) => {
    res.send('upload');
});

module.exports = upload;