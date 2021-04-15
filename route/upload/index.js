const express = require('express');
const passport = require('passport');
const uploadAPI = express.Router();
const multer = require('multer');

const uploadProfile = multer({ dest: 'upload/avartar/' });
const uploadImg = multer({ dest: 'upload/img' });

uploadAPI.post('/profile', uploadProfile.single(), (req, res) => {
    res.send('uploadAPI');
});

uploadAPI.post('/img', uploadImg.array(), (req, res) => {
    
});

module.exports = uploadAPI;