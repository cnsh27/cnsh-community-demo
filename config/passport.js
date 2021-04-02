const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/User');

const callbackURL = `/auth/googleefef/callback`;

module.exports = (passport) => {
    passport.serializeUser(function (user, done){
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done){
        User.findById(id, (err, user) => {
            return done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: callbackURL
    },
        async (accessToken, refreshToken, profile, done) => {
            const newUser = {
                gID: profile.id,
                name: profile.displayName,
                isStudent: false,
                articles: []
            }
            try{
                let user = await User.findOne({ gID: profile.id })

                if (user) {
                    done(null, user);
                } else {
                    user = await User.create(newUser);
                    done(null, user);
                }
            } catch(err){
                console.error(err);   
            }
            // const user = {
            //     userID: "sjfjaiejwo32kfjd0",
            //     username: "chamwhy",
            //     description: "안녕하세요"
            // };
            
        }
    ));
}
