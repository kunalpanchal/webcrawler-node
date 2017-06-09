'use strict';

require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
require('./config/express')(app);
require('./config/routes')(app);

app.listen(port);
console.log('Express app started in ' + app.get('env') + ' mode on port ' + port);