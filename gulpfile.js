let gulp = require("gulp");
let less = require("gulp-less");
let cleanCSS = require("gulp-clean-css");
let rename = require("gulp-rename");

gulp.task('less', function () {
  return gulp.src('windmill.less')
    .pipe(less())
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify', function () {
  return gulp.src('dist/windmill.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', function () {
  gulp.watch('./**.less', ['less']);
  gulp.watch('_modules/**.less', ['less']);
  gulp.watch('dist/windmill.css', ['minify']);
});