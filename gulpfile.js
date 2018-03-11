//Now I re-modify my gulpfile to add imports and tasks for minifying, joining of CSS and JS files.

var gulp = require("gulp");
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
gulp.task("minify-html", function(){
     
     gulp.src("client/index.html")
    .pipe(minifyHtml())
    .pipe(gulp.dest('.'));
 
     gulp.src("client/views/*.html")
     .pipe(minifyHtml())
     .pipe(gulp.dest('build/views'));		
		
});

gulp.task("merge-minify-js-css", function(){
	
	

      gulp.src("client/bower_components/**/*")
	.pipe(uglify())
	.pipe(gulp.dest("build/bower_components"));				     	
      gulp.src("client/scripts/**/*")
     .pipe(uglify())
     .pipe(gulp.dest("build/scripts"));
      gulp.src("client/css/**/*")
     .pipe(minifyCss())
     .pipe(gulp.dest("build/css"));
});


gulp.task("default", ["minify-html", "merge-minify-js-css"]);

