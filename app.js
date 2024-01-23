const express = require('express');
const session = require('express-session');
const ejs = require('ejs');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/account');

const app = express();

app.use(session({ secret: 'node-oauth2', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);
app.use('/', accountRoutes);

// Set EJS as the view Engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', __dirname + '/views');

// Start the server
app.listen(4567, () => {
  console.log('Server started on port 4567');
});
