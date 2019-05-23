var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Servidor para observar os HTML/CSS/JS
gulp.task('serve', function () {
    browserSync.init({
        server: "./src",
        port: 2019
    });

    gulp.watch(["src/*.html", "src/css/*.css", "src/js/*.js"]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);