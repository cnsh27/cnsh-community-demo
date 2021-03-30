const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const callbackURL = `http://localhost:${process.env.PORT || 3000}/auth/google/callback`;

module.exports = () => {
    passport.serializeUser(function (user, done){
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done){
        const user = {
            userID: id,
            username: "chamwhy",
            description: "안녕하세요"
        };
        return done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: callbackURL
    },
        (accessToken, refreshToken, profile, done) => {
            const user = {
                userID: "sjfjaiejwo32kfjd0",
                username: "chamwhy",
                description: "안녕하세요"
            };
            return done(null, user);
        }
    ));
}
