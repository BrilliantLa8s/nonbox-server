'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// Parse body as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', require('./controllers'));

require('./lib/bluetooth');

// Serve API
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('nonbox server listening on port ' + server.address().port);
});
