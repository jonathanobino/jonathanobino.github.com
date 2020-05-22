var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var path = require('path');

gulp.task('default',function(){
	var src = path.join(__dirname,'scss/*.scss');
	var dest = path.join(__dirname,'./css');
	return gulp.src(src)
	.pipe(sass().on('error',sass.logError))
	.pipe(autoprefix())
	.pipe(cleanCss({compatibility: 'ie8'}))
	.pipe(gulp.dest(dest));
})

gulp.task('watch:sass',function(){
	gulp.watch(path.join(__dirname,'scss/*.scss'), ['sass']);
})
