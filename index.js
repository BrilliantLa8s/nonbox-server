'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

// Parse body as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set routes
app.use('/', require('./controllers/internals'));
app.use('/', require('./controllers/connect'));

// Serve API
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('nonbox server listening on port ' + server.address().port);
});
