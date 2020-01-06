"use strict";

var _adaptor = _interopRequireDefault(require("./../adaptor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gulp = require('gulp');

const pump = require('pump');

const watch = require('gulp-watch');

const uglifyES = require('gulp-uglify-es').default;

const UGLIFY_OPTIONS = {
  compress: {}
};
gulp.task('debug', ['build'], () => watch('src/**/*.js', file => {
  const path = file.history[0];
  console.log('开始压缩：', path);
  return gulp.src(path).pipe(uglifyES(UGLIFY_OPTIONS)).pipe(gulp.dest('lib')).on('end', () => {
    console.log('压缩完成：', path);
  });
}));
gulp.task('build', cb => {
  console.log('开始压缩...');
  pump([gulp.src('src/**/*.js'), uglifyES(UGLIFY_OPTIONS), gulp.dest('lib')], () => {
    console.log('压缩完成！');
    cb && cb();
  });
});