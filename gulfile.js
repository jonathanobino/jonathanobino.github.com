var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var path = require('path');

gulp.task('sass',function(){
	var src = path.join(__dirname,'scss/*.scss');
	var dest = __dirname;
	return gulp.src(src)
	.pipe(sass().on('error',sass.logError))
	.pipe(autoprefix())
	.pipe(gulp.dest(dest));
})

gulp.task('watch:sass',function(){
	gulp.watch(path.join(__dirname,'scss/*.scss'), ['sass']);
})
