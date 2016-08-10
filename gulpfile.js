var gulp        = require("gulp"),
    less        = require('gulp-less'), 
    concat      = require('gulp-concat'),    //- js 文件合并
    minifycss   = require('gulp-minify-css'),   //- 压缩css代码
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    connect     = require('gulp-connect'),           //- 本地Server服务
    webpack     = require('gulp-webpack');

gulp.task('webpack', () => {
    return gulp.src('./src/app.js')
               .pipe(webpack({
                    entry: ["./src/app.js"],
                    output: {
                        path: __dirname,
                        filename: "bundle.js"
                    },
                    module: {
                        loaders: [
                            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
                            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
                            { test: /\.css$/, loader: "style!css" }
                        ]
                    },
                    resolve:{
                        extensions:['','.js','.json']
                    }
               }))
               .pipe(uglify())
               .pipe(gulp.dest('./dist/js/'))
               .pipe(connect.reload());
});

//less
gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
              .pipe(concat('bundle.css'))
              .pipe(less())
              .pipe(rename({ suffix: '.min' }))
              .pipe(minifycss())
              .pipe(gulp.dest('./dist/style/'))
              .pipe(connect.reload());
});


// web 服务器
gulp.task('webserver',() => {
    return connect.server({ livereload:true });
});


gulp.task('watch', () => {
    gulp.watch([ './src/**/**/*.js'],['webpack'])
    gulp.watch([ './src/less/**/*.less'],['less']) 
})


gulp.task('b', ['webpack', 'less', 'watch','webserver'])

