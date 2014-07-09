(function () {
    'use strict';

    var xhr = sinon.useFakeXMLHttpRequest();

    mocha.setup('bdd');
    mocha.globals(['jQuery*', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval']);
    window.should = chai.should();
    window.expect = chai.expect;

    $('body').prepend('<div id="test-body" style="height: 0; overflow: hidden"></div>');

    after(function () {
        $('#test-body').empty();
        xhr.restore();
    });

})();
