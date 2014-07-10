'use strict';

module.exports = function (config) {

  config.set({

      basePath: __dirname,

      frameworks: ['jasmine', 'browserify'],

      files: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/underscore/underscore.js',
        'node_modules/backbone/backbone.js',
        'node_modules/sinon/pkg/sinon.js',
        'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
        'test/feunit/helpers/*.js',
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

      browsers: ['Chrome'],

      singleRun: true

  });
};
