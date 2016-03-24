'use strict';

var argv = require('yargs').argv;
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['sass', 'lint', 'uglify', 'watch']);

gulp.task('sass', function() {
    return gulp.src('./imgplay/jquery.imgplay.scss')
        .pipe(sass({outputStyle: (argv.production ? 'compressed' : 'nested')}).on('error', sass.logError))
        .pipe(gulp.dest('./imgplay'));
});

gulp.task('uglify', function() {
    return gulp.src('./imgplay/jquery.imgplay.js')
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulpif(argv.production, rename({suffix: '.min'})))
        .pipe(gulp.dest('./imgplay'));
});

gulp.task('lint', function() {
    return gulp.src('./imgplay/jquery.imgplay.js')
        .pipe(eslint({
            'rules': {
                'quotes': [1, 'single'],
                'semi': [1, 'always']
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function() {
    if(!argv.production) { 
        gulp.watch('./imgplay/jquery.imgplay.scss', ['sass']);
        gulp.watch('./imgplay/jquery.imgplay.js', ['lint']);
    }
});
