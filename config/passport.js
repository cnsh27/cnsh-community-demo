const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/User');

const callbackURL = process.env.NODE_ENV == 'develop' ? `http://localhost:3000/auth/google/callback` : `https://cnsh-community-demo2.herokuapp.com/auth/google/callback`;

module.exports = (passport) => {
    passport.serializeUser(function (user, done){
        console.log('serializeUser', user);
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done){
        console.log('deserializeUser', id);
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
            console.log('profile', profile);
            const newUser = {
                gID: profile.id,
                nickname: profile.displayName,
                name: profile.displayName,
                isSchool: profile._json.hd == 'cnsh.hs.kr',
                email: profile._json.email
            }

            try{
                let user = await User.findOne({gID:profile.id});

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
