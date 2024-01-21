const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    clientID: '342587120388-p6h88upcbns1d0afhn2931meomvhi6qv.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback',
    scope: [ 'profile' ]
  },
  (accessToken, refreshToken, profile, done) => {
    // Code to handle user authentication and retrieval
    var user = {
      id: profile.id,
      name: profile.displayName
    };
    return done(null, user);
  }));

passport.serializeUser((user, done) => {
  // Code to serialize user data
  done(null, { id: user.id, name: user.name });
  // return done(null, user);
});

passport.deserializeUser((user, done) => {
  // Code to deserialize user data
  return done(null, user);
});

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/login', function(req, res, next) {
  res.render('login', { message: 'Hello, EJS!' });
});

// Initiates the Google OAuth 2.0 authentication flow
router.get('/auth/google', passport.authenticate('google'));

// Callback URL for handling the OAuth 2.0 response
router.get('/auth/google/callback', passport.authenticate('google', {
  successReturnToOrRedirect: '/account',
  failureRedirect: '/login'
}));

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
