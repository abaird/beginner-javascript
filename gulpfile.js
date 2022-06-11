const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const { reload } = browserSync;

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: 'playground/',
      index: 'apis.html',
    },
  });

  gulp.watch('./**/*.js').on('change', browserSync.reload);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));
