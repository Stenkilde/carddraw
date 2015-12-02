var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
 
gulp.task('serve', function() {
  connect.server();
});

gulp.task('styles', function() {
    gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/'));
});



gulp.task('default',function() {
    gulp.watch('styles/**/*.scss',['styles']);
    connect.server();
});