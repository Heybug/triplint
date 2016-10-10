var gulp = require('gulp'),
    // jshint = require('gulp-jshint'),
    cleanCSS = require('gulp-clean-css'),
    less = require('gulp-less'),
    path = require('path'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename');
    gulpCopy = require('gulp-file-copy');


gulp.task('dist', ['less', 'minify-css', 'copy'], function(){
});
// 编译less
gulp.task('less', function () {
    return gulp.src(['src/less/*.less', '!src/less/variable.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        // .pipe(gulp.dest('dist/css'))
        .pipe(gulp.dest('src/css'));
});

gulp.task('copy', function () {
    var start = './src/**';
    return gulp.src(start)
        .pipe(gulp.dest('dist'));
});

// 压缩css
gulp.task('minify-css', ['less'], function () {
    return gulp.src(['!src/css/variable.css', 'src/css/*.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(gulp.dest('dist/css'));
});

// 合并
gulp.task('concat', ['minify-css'], function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'));
});

// 检查js
/*gulp.task('lint', function () {
 gulp.src('src/js/js.js')
 .pipe(jshint())
 .pipe(jshint.reporter('default'));
 });*/

// 监视
gulp.task('watch', ['less', 'minify-css'], function () {
    gulp.watch('src/less/*.less', ['less', 'minify-css']);
});

// 默认task
gulp.task('default', ['watch'], function () {
    // 将你的默认的任务代码放在这
});
