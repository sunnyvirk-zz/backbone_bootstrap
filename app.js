'use strict';

var path = require('path');

var express = require('express');

var log = require('./lib/logger');

var routes = require('./routes');

var app = express();

app.disable('x-powered-by');

app.locals.basedir = __dirname + '/views/';

app
    .set('env', process.env.NODE_ENV || 'development')
    .set('port', process.env.PORT || 3030)
    .set('name', 'Backbone Bootstrap')
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'jade')
    .use(express.static(path.join(__dirname, 'public/')));

routes.initialize(app);

app.listen(app.get('port'), function () {
    log.info(app.get('name'), 'listening on port', app.get('port'));
});
