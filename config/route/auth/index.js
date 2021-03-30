const express = require('express');
const passport = require('passport');
const auth = express.Router();

auth.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

auth.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        
        res.redirect('/');
    }
);

module.exports = auth;