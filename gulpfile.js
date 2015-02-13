(function () {
    'use strict';

    var gulp = require('gulp'),
        mocha = require('gulp-mocha'),
        jslint = require('gulp-jslint');

    gulp.task('jslint', function () {
        return gulp
            .src(['gulpfile.js', 'src/scripts/**/*.js', 'test/scripts/**/*.js'])
            .pipe(jslint({
                global: ['module', 'require', 'describe', 'it', 'expect']
            }));
    });

    gulp.task('test', ['jslint'], function () {
        return gulp
            .src(['test/bootstrap.js', 'test/scripts/**/*.js'])
            .pipe(mocha({ reporter: 'spec' }));
    });

    gulp.task('test-watch', function () {
        return gulp.watch(['src/scripts/**/*.js', 'test/scripts/**/*.js'], ['test']);
    });
}());

