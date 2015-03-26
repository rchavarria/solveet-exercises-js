(function () {

    var gulp = require('gulp'),
        mocha = require('gulp-spawn-mocha'),
        eslint = require('gulp-eslint'),
        babel = require('gulp-babel');

    gulp.task('eslint', function () {
        return gulp
            .src([ 'gulpfile.js', 'src/scripts/**/*.js', 'test/scripts/**/*.js' ])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failOnError());
    });

    gulp.task('test', [ 'eslint' ], function () {
        return gulp
            .src([ 'test/bootstrap.js', 'test/scripts/**/*.js' ])
            .pipe(mocha({
                reporter: 'spec',
                compilers: 'js:babel/register'
            }));
    });

    gulp.task('test-watch', function () {
        return gulp.watch([ 'src/scripts/**/*.js', 'test/scripts/**/*.js' ], [ 'test' ]);
    });

    gulp.task('babel', function () {
        return gulp
            .src([ 'src/scripts/**/*.js', 'test/scripts/**/*.js' ])
            .pipe(babel())
            .pipe(gulp.dest('dist'));
    });

}());

