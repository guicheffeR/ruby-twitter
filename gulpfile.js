var gulp = require( 'gulp' ) ,
	rename = require( 'gulp-rename' ),
  uglify = require( 'gulp-uglify' ),
	compass = require( 'gulp-compass' ),
  minifyCSS = require( 'gulp-minify-css' ),
  cssmin = require( 'gulp-cssmin' ) ;


gulp.task( 'compass' , function() {
  gulp.src( './static/1.0/css/base.scss' )
    /*.pipe( minifyCSS( { keepSpecialComments : '*' } ) )*/
    .pipe( compass( {
      config_file: './config.rb',
      css: 'static/1.0/css',
      sass: 'static/1.0/css'
    } ) )
    /*.pipe( rename( 'base.min.css' ) )*/
    .pipe( gulp.dest( './static/1.0/css/' ) ) ;
});

gulp.task( 'uglify', function() {
  gulp.src( './static/1.0/js/common.js' )
    .pipe( uglify() )
		.pipe( rename( 'common.min.js' ) )
    .pipe( gulp.dest( './static/1.0/js/' ) ) ;
} ) ;

gulp.task( 'watch', function() {
	gulp.watch( './static/1.0/js/common.js', ['uglify'] ) ;
  gulp.watch( './static/1.0/css/base.scss', ['compass'] ) ;
} ) ;