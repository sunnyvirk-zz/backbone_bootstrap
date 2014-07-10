'use strict';

var BaseView = require('../../../src/js/custom/baseView');

describe('custom/baseView', sandbox(function () {

    var inst;

    describe('when instantiated', function () {

        beforeEach(function () {
            inst = new BaseView();
        });

        it('has an render', function () {
            inst.render.should.be.defined;
        });

    });

}));
