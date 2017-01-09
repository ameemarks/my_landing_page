var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('style', function(){
  return gulp.src('app/scss/main.scss')
    .pipe(sourcemaps.init())     
    .pipe(autoprefixer())    
    .pipe(sass()) // Using gulp-sass; converts Sass to CSS with gulp-sass
    .pipe(sourcemaps.write('.'))    
    .pipe(gulp.dest('app/css'))
});

//dzięki temu taskowi będzie się odpalał tylko za pomocą komendy gulp, bez watch
gulp.task('watch', ['watch']);

gulp.task('watch', function () {
gulp.watch('app/**/*.scss', ['style']);
});

gulp.task('default', ['style', 'watch']);

//const concat = require('gulp-concat');

//gulp.task('default', () =>
  //  gulp.src('src/**/*.css')
    //    .pipe(sourcemaps.init())
      //  .pipe(autoprefixer())
        //.pipe(concat('all.css'))
 //       .pipe(sourcemaps.write('.'))
   //     .pipe(gulp.dest('dist'))
//);

//gulp.task('stylesheet', function() {        //potem w terminalu wywołuję gulp stylesheet i tworzy się to, co niżej
 //   return gulp.src('css/*.css')
   //     .pipe(concat('all.css'))
     //   .pipe(gulp.dest('build/css'))       //tworzy nazwę katalogu - to w nawiasie, w którym zapisze; zawsze musi mieć ścieżkę jako wartość
//        .pipe(min())
  //      .pipe(rename('style-min.css'))          //tworzy nową nazwę pliku
    //    .pipe(gulp.dest('build/css'))
      //  .pipe(zip())
//        .pipe(rename('style-min.cssgz'))
  //      .pipe(gulp.dest('build/css'))
//});

//gulp.task('default', ['css']);
