//enable express
const express = require('express');
const ejs = require('ejs');
const cors = require('cors');
const app = express();

// set port
const port = process.env.PORT || 3000;

// set routes const
const routes = require('./routes');

// enable rate limiter
const limit = require('./middleware/ratelimit.js');

app.use(limit);

// set path to views
app.set('views', './views');

// Set the view engine
app.set('view engine', 'ejs');

app.options('*', cors());

app.use(routes);

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
