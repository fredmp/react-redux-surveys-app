require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models');
require('./services/passport');

const { PORT, MONGO_URI, COOKIE_KEY } = process.env;

mongoose.connect(MONGO_URI);

const app = express();

const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days

app.use(
  cookieSession({
    maxAge,
    keys: [COOKIE_KEY],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

app.listen(PORT || 5000);
