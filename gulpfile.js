'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'sass:watch']);

gulp.task('sass', function() {
    return gulp.src('./imgplay/jquery.imgplay.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./imgplay'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./imgplay/jquery.imgplay.scss', ['sass']);
});
