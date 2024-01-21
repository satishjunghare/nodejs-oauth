const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    clientID: '342587120388-p6h88upcbns1d0afhn2931meomvhi6qv.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:4567/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Code to handle user authentication and retrieval
    console.log(profile);
  }));

passport.serializeUser((user, done) => {
  // Code to serialize user data
  console.log(user);
});

passport.deserializeUser((user, done) => {
  // Code to deserialize user data
});

module.exports = passport;