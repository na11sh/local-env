var gulp = require("gulp");
var ejs = require("gulp-ejs");
var prettify = require('gulp-prettify');
var sass = require("gulp-sass");

gulp.task("default", ["copy", "ejs", "sass", "prettify"]);

gulp.task("copy", function() {
    return gulp.src("/vagrant/src/gulp-sample/**/*")
    .pipe(gulp.dest("."));
});

gulp.task("ejs", ["copy"], function() {
    return gulp.src(["src/**/*.ejs", '!' + "src/**/_*.ejs"])
    .pipe(ejs())
    .pipe(gulp.dest("build"));
});

gulp.task("sass", ["ejs"], function() {
    return gulp.src("sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"));
});

gulp.task("prettify", ["sass"], function() {
    return gulp.src("build/**/*.html")
    .pipe(prettify({
        indent_size: 2,
        end_with_newline: true
    }))
    .pipe(gulp.dest("build"));
});
