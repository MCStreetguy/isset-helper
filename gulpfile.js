const gulp = require('gulp');
const pump = require('pump');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const umd = require('gulp-umd');

exports['build-universal-module'] = (done) => {
  pump([
    gulp.src('./src/main.js'),
    umd({
      templateName: 'amdNodeWeb',
      exports: (file) => 'isset',
      namespace: (file) => 'isset',
    }),
    terser({
      keep_fnames: /^isset$/
    }),
    rename('module.umd.js'),
    gulp.dest('./dist/')
  ], done);
}

exports['build-for-web'] = (done) => {
  pump([
    gulp.src('./src/main.js'),
    replace(/^function/, 'window.isset = function'),
    terser({
      keep_fnames: /^isset$/
    }),
    rename('isset.min.js'),
    gulp.dest('./dist/')
  ], done);
}

exports['build'] = gulp.parallel(exports['build-universal-module'], exports['build-for-web']);
exports['watch'] = () => gulp.watch('./src/main.js', exports['build']);
exports['default'] = gulp.series(exports['build'], exports['watch']);
