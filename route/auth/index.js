const express = require('express');
const passport = require('passport');
const auth = express.Router();



auth.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

auth.get('/google/callback', 
  passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = auth;