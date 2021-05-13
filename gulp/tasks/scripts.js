var gulp = require("gulp"),
    webpack = require("webpack");

gulp.task("scripts", function(callback){
    webpack(require("../../webpack.config.js"), function(err, stats){
        if(err){
            console.log(err.toString());
        }else{
            console.log("Successful!");
        }
        
        //console.log("Completed webpack activity! Your js have been bundled!");
        callback();
        //As the tasks of gulp are asynchronous, we always add return. There is one more method: task's callback function takes a function name as parameter; that function has to be called.
    });
});