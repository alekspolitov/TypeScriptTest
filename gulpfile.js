var gulp = require("gulp"),
    browserify = require('browserify'),
    debowerify = require('debowerify'),
    tsify = require('tsify'),
    exorcist = require('exorcist'),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util'),
    ts = require('gulp-typescript'),
    iife = require("gulp-iife"),
    wrap = require("gulp-wrap"),
    path = require("path"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps');

var config = {
    paths: {
        ts: ["./*.ts", "typings/**/*.ts", "!node_modules/**/*.ts"],
        jsresult: 'main.js',
        app: __dirname,
        pub: __dirname
    }
};

gulp.task('compile-ts', function () {
    var opts = {
        basedir: config.paths.app,
        debug: true
    };

    var b = browserify(opts)
        .add(config.paths.app + '/main.ts')
        .external('jquery')
        .plugin(tsify, {
            removeComments: true,
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
gulp.task('compile-project', function () {
    var opts = {
        basedir: config.paths.app,
        debug: true
    };
    var streamFinished = function () {
        gutil.log('End stream');
    };
    var entry = config.paths.app + '/main.ts';
    var fileName = path.basename(entry, path.extname(entry)) + ".js";

    var project = ts.createProject('tsconfig.json', {
        outFile: fileName
    });

    var tsResult = project.src()
        .pipe(ts(project))
        .pipe(wrap({ src: 'template.txt' }))
        .pipe(gulp.dest(config.paths.pub))
        .pipe(rename({ suffix: '.debug' }))
        .pipe(gulp.dest(config.paths.pub))
        .pipe(uglify())
        .pipe(rename(fileName))
        .pipe(gulp.dest(config.paths.pub))
        .on('end', streamFinished);
});

gulp.task('compile-typescript', function () {
    var streamFinished = function () {
        gutil.log('End stream');
    };
    var entry = config.paths.app + '/main.ts';
    var fileName = path.basename(entry, path.extname(entry)) + ".js";
    return gulp.src(entry)
        .pipe(ts({
            target: "ES5",
            noImplicitAny: false,
            moduleResolution: "node",
            outFile: fileName,
            removeComments: true,
            experimentalDecorators: true
        }))
        .pipe(wrap({ src: 'template.txt' }))
        .pipe(rename({ suffix: '.debug' }))
        .pipe(gulp.dest(config.paths.pub))
        .pipe(uglify())
        .pipe(rename(fileName))
        .pipe(gulp.dest(config.paths.pub))
        .on('end', streamFinished);


    //.pipe(wrap('(function($){\n"use strict";\n<%= contents %>\n})(jQuery);'))
    //.pipe(rename(fileName))

});

gulp.task('empty', function () {

});

gulp.task('compile-tsc', function () {
    var opts = {
        ignore: config.paths.ignore
    };
    var streamFinished = function () {
        gutil.log('End stream');
    };

    return glob(config.paths.ts, opts, function (err, files) {
        var tasks = files.map(function (entry) {
            gutil.log('Compiling file: ' + entry);
            var fileName = path.basename(entry, path.extname(entry)) + ".js";
            return gulp.src(entry)
                .pipe(ts({
                    noImplicitAny: false,
                    outFile: fileName,
                    removeComments: true,

                }))
                .pipe(wrap({ src: 'template.txt' }))
                .pipe(rename({ suffix: '.debug' }))
                .pipe(gulp.dest(config.paths.pub))
                .pipe(uglify())
                .pipe(rename(fileName))
                .pipe(gulp.dest(config.paths.pub));
        });
        return es.merge.apply(null, tasks)
            .on('end', streamFinished);
    });
});
gulp.task('future-ts', function () {
    gulp.src('tsconfig.json')
        .pipe(typescript.resolveProjects())
        .pipe(sourcemaps.init())
        .pipe(typescript({ noExternalResolve: true }))
        .pipe(sourcemaps.write())
});

gulp.task("watch", function () {
    gulp.watch(config.paths.ts, ["compile-ts"]);
});

gulp.task('default', ['compile-ts', 'watch']);