'use strict';

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    scss = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    rimraf = require('rimraf');

var paths = {
    templates: ['views/includes/**/*.jade'],
    scss: ['src/scss/**/*.scss'],
    js: ['src/js/app.js'],
    compiledTemplates: 'public/templates',
    compiledCSS: 'public/css',
    compiledJS: 'public/js'
};

gulp.task('cleanTemplates', function (next) {
    rimraf(paths.compiledTemplates, next);
});

gulp.task('cleanCSS', function (next) {
    rimraf(paths.compiledCSS, next);
});

gulp.task('cleanJS', function (next) {
    rimraf(paths.compiledJS, next);
});

gulp.task('clean', ['cleanCSS', 'cleanTemplates', 'cleanJS']);

gulp.task('templates', ['cleanTemplates'], function () {
    return gulp.src(paths.templates)
        .pipe(jade({ client: true }))
        .pipe(gulp.dest(paths.compiledTemplates));
});

gulp.task('css', ['cleanCSS'], function () {
    gulp.src(paths.scss)
        .pipe(scss())
        .pipe(minify())
        .pipe(gulp.dest(paths.compiledCSS));
});

gulp.task('js', ['cleanJS'], function () {
    gulp.src(paths.js)
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.compiledJS));
});

gulp.task('watch', function () {
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.scss, ['scss']);
});

gulp.task('default', ['css', 'templates', 'js', 'watch']);
