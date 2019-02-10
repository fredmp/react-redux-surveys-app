require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('./models');
require('./services/passport');

const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI);

const app = express();

require('./routes')(app);

app.listen(PORT || 5000);
