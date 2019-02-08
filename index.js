const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'testing deploy' });
});

const { PORT } = process.env;

app.listen(PORT || 5000);
