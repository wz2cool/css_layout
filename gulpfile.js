var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    del = require('del'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task('clean', function () {
    return del(['dist', 'tmp']);
});

gulp.task('cleanTmp', function () {
    return del(['tmp']);
});

gulp.task('sass', function () {
    return gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('tmp'));
});

gulp.task('minifycss', function () {
    return gulp.src('tmp/*.css')      //压缩的文件
        .pipe(concat('layout.css'))
        .pipe(gulp.dest('dist'))   //输出文件夹
        .pipe(rename({ suffix: '.min' }))    //rename压缩后的文件夹
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('dist'));
});
gulp.task('default', ['clean', 'sass'], function () {
    gulp.start('minifycss');
    gulp.start('cleanTmp');
});