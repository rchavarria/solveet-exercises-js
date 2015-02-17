(function () {
    'use strict';

    var gulp = require('gulp'),
        mocha = require('gulp-spawn-mocha'),
        jshint = require('gulp-jshint'),
        babel = require('gulp-babel');

    gulp.task('jshint', function () {
        return gulp
            .src(['gulpfile.js', 'src/scripts/**/*.js', 'test/scripts/**/*.js'])
            .pipe(jshint({
                globals: ['console', 'module', 'require', 'describe', 'it', 'expect'],
                esnext: true
            }))
            .pipe(jshint.reporter('jshint-stylish'));
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

