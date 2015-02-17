(function () {
    'use strict';

    var gulp = require('gulp'),
        mocha = require('gulp-spawn-mocha'),
        jslint = require('gulp-jslint'),
        babel = require('gulp-babel');

    gulp.task('jslint', function () {
        return gulp
            .src(['gulpfile.js', 'src/scripts/**/*.js', 'test/scripts/**/*.js'])
            .pipe(jslint({
                global: ['console', 'module', 'require', 'describe', 'it', 'expect']
            }));
    });

    gulp.task('test', function () {
        return gulp
            .src(['test/bootstrap.js', 'test/scripts/**/*.js'])
            .pipe(mocha({
                reporter: 'spec',
                compilers: 'js:babel/register'
            }));
    });

    gulp.task('test-watch', function () {
        return gulp.watch(['src/scripts/**/*.js', 'test/scripts/**/*.js'], ['test']);
    });

    gulp.task('babel', function () {
        return gulp
            .src(['src/scripts/**/*.js', 'test/scripts/**/*.js'])
            .pipe(babel())
            .pipe(gulp.dest('dist'));
    });

}());

