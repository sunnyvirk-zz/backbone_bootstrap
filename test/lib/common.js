'use strict';

global.sinon = require('sinon');
require('./sinon-sandbox');
global.should = require('chai')
    .use(require('sinon-chai'))
    .should();
