var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var path = require('path');

gulp.task('sass',function(){
	var src = path.join(__dirname,'scss/*.scss');
	var dest = path.join(__dirname,'css/');
	return gulp.src(src)
	.pipe(sass().on('error',sass.logError))
	.pipe(autoprefix())
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest(dest));
})

gulp.task('watch:sass',function(){
	gulp.watch(path.join(__dirname,'scss/*.scss'), ['sass']);
})
