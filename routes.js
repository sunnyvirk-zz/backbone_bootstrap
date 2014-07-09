'use strict';

var index = require('./routes/index');

module.exports = {
    initialize: function (app) {
        app.get('/', index.index);
    }
};
