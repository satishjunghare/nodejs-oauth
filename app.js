const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./authRoutes');

const app = express();

app.use(session({ secret: 'node-oauth2', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);

// Start the server
app.listen(4567, () => {
  console.log('Server started on port 4567');
});
