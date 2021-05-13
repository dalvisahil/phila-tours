var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create();

gulp.task("watch", function(){
    browserSync.init({
        notify: false,
        server:{
            baseDir: "app"
        }
    });
    watch("./app/index.html", function(){
        browserSync.reload();
    });
    watch("./app/assets/styles/**/*.css", gulp.series("css", "cssInject"));
    watch("./app/assets/scripts/**/*.js", gulp.series("scripts", "reloadBrowser"));
});

gulp.task("cssInject", function(){
    return gulp.src("./app/css/style.css").pipe(browserSync.stream()); 
});

gulp.task("reloadBrowser", function(){
   browserSync.reload(); 
});