'use strict';

var winston = require('winston');

var custom = {
    levels: {
        info: 0,
        warn: 1,
        error: 2
    },
    colors: {
        info: 'green',
        warn: 'yellow',
        error: 'red'
    }
};

var transports = [];

transports.push(new (winston.transports.Console)({
    timestamp: true,
    colorize: true,
    levels: custom.levels
}));

winston.addColors(custom.colors);

module.exports = new (winston.Logger)({
    transports: transports
});
