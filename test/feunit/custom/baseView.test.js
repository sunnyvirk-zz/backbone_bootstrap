'use strict';

var BaseView = require('../../../src/js/custom/baseView');

describe('custom/baseView', function () {

    var inst;

    describe('when instantiated', function () {

        beforeEach(function () {
            inst = new BaseView();
        });

        it('has an render', function () {
            expect(inst.render).toBeDefined();
        });

    });

});
