var gulp = require('gulp'); //build process
var gutil = require('gulp-util'); //console loging output of the build process
var source = require('vinyl-source-stream'); //handling text files from one source to another
var browserify = require('browserify'); //figure out the load order of files
var watchify = require('watchify'); //re-run the gulp file whenever there is a change
var reactify = require('reactify'); //convert from jsx to javascript

gulp.task('default', function(){
  //bundler is responsible running browserify on our code
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'], //starting point of our build process
    transform: [reactify], // tells broserify while it figures out our dependencies, it needs to transform our jsx using reactify
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file){
    if(file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };

  build();
  bundler.on('update', build);

});
