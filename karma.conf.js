'use strict';

module.exports = function (config) {

  config.set({

      basePath: __dirname,

      frameworks: ['mocha', 'browserify'],

      files: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/underscore/underscore.js',
        'node_modules/backbone/backbone.js',
        'node_modules/chai/chai.js',
        'node_modules/chai-jquery/chai-jquery.js',
        'node_modules/sinon/pkg/sinon.js',
        'node_modules/sinon-chai/lib/sinon-chai.js',
        'test/lib/sinon-sandbox.js',
        'test/lib/mocha.config.js',

        'test/feunit/**/*.test.js',
        'src/js/**/*.js'
      ],

      preprocessors: {
        'test/feunit/**/*.test.js': ['browserify'],
        'src/js/**/*.js': ['browserify']
      },

      reporters: ['progress'],

      reportSlowerThan: 200,

      browserNoActivityTimeout: 30000,

      port: 9876,

      colors: true,

      logLevel: config.LOG_INFO,

      autoWatch: false,

      browsers: ['Chrome', 'Firefox'],

      singleRun: true

  });
};
