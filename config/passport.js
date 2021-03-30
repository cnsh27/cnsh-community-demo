const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/User');

const callbackURL = `https://cnsh-community-demo2.herokuapp.com/auth/google/callback`;

module.exports = () => {
    passport.serializeUser(function (user, done){
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done){
        User.findById(id, (err, user) => {
            if(err) throw err;
            return done(null, user);
        });
        return done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: callbackURL
    },
        (accessToken, refreshToken, profile, done) => {
            User.findById(profile.id, (err, user) => {
                if(err) throw err;
                return done(null, user);
            });
            // const user = {
            //     userID: "sjfjaiejwo32kfjd0",
            //     username: "chamwhy",
            //     description: "안녕하세요"
            // };
            
        }
    ));
}
