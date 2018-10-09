const gulp =    require('gulp'),
      pump =    require('pump'),
      header =  require('gulp-header'),
      plumber = require('gulp-plumber'),
      uglify =  require('gulp-uglify'),
      rename =  require('gulp-rename');

gulp.task('build-module', (finished) => {
    pump([
        gulp.src('./src/main.js'),
        plumber(),
        header('module.exports = '),
        uglify({
            keep_fnames: true
        }),
        rename('module.js'),
        gulp.dest('./dist/')
    ], finished);
});

gulp.task('build-web', (finished) => {
    pump([
        gulp.src('./src/main.js'),
        plumber(),
        header('window.isset = '),
        uglify(),
        rename('isset.min.js'),
        gulp.dest('./dist/')
    ], finished);
});

gulp.task('build', ['build-module', 'build-web']);

gulp.task('default', ['build'], () => {
    gulp.watch('./src/main.js', ['build']);
});