const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('browser-sync');
const connectSSI = require('connect-ssi');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const pug = require('gulp-pug');
const csscomb = require('gulp-csscomb');
const cmq = require('gulp-combine-media-queries');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

//pug task
gulp.task('pug', () => {
const option = { pretty: true };
gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
    .pipe(plumber({errorHandler:notify.onError('Error: <%= error.message %>')}))
    .pipe(pug(option))
    .pipe(gulp.dest('./dist/'));
});

//SCSS task
gulp.task('sass', function() {
return gulp
    .src('./src/scss/**/*.scss') //入力元
    .pipe(plumber())
    .pipe(
    sass({outputStyle: 'expanded'}).on('error',sass.logError))
    .pipe(csscomb())
    .pipe(cmq())
    .pipe(autoprefixer({
        browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css/')) //出力先
    .pipe(
    browser.reload({stream:true}))
    .pipe(notify('Scssをコンパイルしました！'));
});

gulp.task('js', () => {
  // webpackStreamの第2引数にwebpackを渡す
  return webpackStream(webpackConfig, webpack).pipe(gulp.dest('./dist/js/'));
});

//IMG task
gulp.task('images', function() {
gulp.src(['./src/images/**/*', '!./src/images/_**/*'])
    .pipe(imagemin({use:[pngquant()]}))
    .pipe(gulp.dest('./dist/images/'));
});

//ブラウザ表示 task
gulp.task('server', function() {
    browser({
    server: {
        baseDir: './dist/',
        middleware: [
            connectSSI({
                baseDir: __dirname + '/dist/',
                ext: '.html'
            })
        ]},
    open: 'external'
    });
});

//デフォルト
gulp.task('default', ['server', 'pug', 'sass', 'js', 'images', 'watch']);

//監視 task
gulp.task('watch', () => {
    gulp.watch(['./src/scss/**'], () => {
        gulp.start(['sass']);
    });
    gulp.watch(['./src/pug/**'], () => {
        gulp.start(['pug']);
    });
    gulp.watch(['./src/ts/**'], () => {
        gulp.start(['js']);
    });
    gulp.watch(['./src/images/**'], () => {
        gulp.start(['images']);
    });
});
