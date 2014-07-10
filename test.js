'use strict';
var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();

app.get('/', function (req, res, next) {
    fs.readFile(path.join(__dirname, 'test', 'feunit', 'index.html'), function (err, contents) {
        if (err) {
            next(err);
        } else {
            res.set('Content-Type', 'text/html');
            res.send(200, contents);
        }
    });
});

app
    .set('port', process.env.PORT || 3003)
    .use(require('enchilada')({
        compress: false,
        src: path.join(__dirname, 'test'),
        cache: false,
        debug: true,
        routes: {},
        transforms: []
    }))
    .use(express.static(path.join(__dirname, 'node_modules')))
    .use(express.static(path.join(__dirname, 'src/js')))
    .use(express.static(path.join(__dirname, 'test', 'lib')));

app.listen(app.get('port'), function () {
    console.log('Test server listening on port ' + app.get('port'));
});
