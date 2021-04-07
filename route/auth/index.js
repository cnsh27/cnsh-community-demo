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

auth.get('/logout', async (req, res) => {
  await req.logout();
  await req.session.destroy();
  await res.redirect('/');
});

module.exports = auth;