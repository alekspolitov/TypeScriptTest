var gulp 		= require("gulp"),
	browserify 	= require('browserify'),
	debowerify 	= require('debowerify'),
	tsify 		= require('tsify'),
	exorcist 	= require('exorcist'),
	source 		= require('vinyl-source-stream'),
	gutil 		= require('gulp-util');

var config = {
	paths: {
		ts: ["./*.ts", "typings/**/*.ts", "!node_modules/**/*.ts"],
		jsresult: 'main.js',
		app: __dirname,
		pub: __dirname
	}
};

gulp.task('compile-ts', function() {
	var opts = {
		basedir: config.paths.app,
		debug: true
	};
	
	var b = browserify(opts)
		.add(config.paths.app + '/main.ts')
		.ignore('jquery')
		.ignore('angular')
		.plugin(tsify, {
			noImplicitAny: true,
			target: 'es5'
		})
		.transform(debowerify);

	return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(exorcist(config.paths.pub + '/app.js.map'))
		.pipe(source('app.js'))
		.pipe(gulp.dest(config.paths.pub));

});

gulp.task('empty', function(){
	
});

gulp.task('future-ts',  function(){
	gulp.src('tsconfig.json')
	  .pipe(typescript.resolveProjects())
	  .pipe(sourcemaps.init())
	  .pipe(typescript({ noExternalResolve: true }))
	  .pipe(sourcemaps.write())
});

gulp.task("watch", function() {
	gulp.watch(config.paths.ts, ["compile-ts"]);
});

gulp.task('default', ['compile-ts','watch']);