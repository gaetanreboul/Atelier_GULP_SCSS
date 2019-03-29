var gulp = require ('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    console.log('fonction de compilation du fichier sass lancée')
    return gulp.src('dev/scss/styles.scss')     // sur un fichier ciblé
    .pipe(sass())                             // à qui est imposé ce traitement
    .pipe(gulp.dest('dev/css'))              // puis sauvegardé dans une  
});

