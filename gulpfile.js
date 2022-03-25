var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'exercises/34 - Click Outside',
      index: "click-outside.html"
    }
  });

  gulp.watch('./**/*.js').on("change", browserSync.reload);
  gulp.watch('./**/*.html').on("change", browserSync.reload);
});

gulp.task('default', gulp.series('serve'));