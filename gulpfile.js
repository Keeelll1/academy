"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const newer = require('gulp-newer');
const browsersync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');

// Пути до папки dist
const path = {
    styles: {
        src: ['src/styles/**/*.sass', 'src/styles/**/*.scss'], 
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'dist/images'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist'
    }
}

function cleanImages() {
    return gulp.src(path.images.dest, { allowEmpty: true, read: false })
        .pipe(clean());
}

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}

// Задача для минимализации HTML
function html() {
    return gulp.src(path.html.src)
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(gulp.dest(path.html.dest))
        .pipe(browsersync.stream());
}

// Задача для обработки стилей
async function styles() {
    const autoprefixer = await import('gulp-autoprefixer');

    return gulp.src(path.styles.src)
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(sass({ silent: true }).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer.default({
            cascade: false,
            overrideBrowserslist: ["> 0.5%", "last 3 versions"]
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.styles.dest))
        .pipe(browsersync.stream());
}

// Задача для обработки скриптов
async function scripts() {

    return gulp.src(path.scripts.src, { sourcemaps: true })
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.scripts.dest))
        .pipe(browsersync.stream());
}

async function img() {
    const imagemin = (await import('gulp-imagemin')).default;

    return gulp.src(path.images.src)
        .pipe(newer(path.images.dest))
        .pipe(imagemin())
        .pipe(gulp.dest(path.images.dest));
}


// Отслеживание изменений
function watch() {
    browsersync.init({
        server: {
            baseDir: './dist/'
        }
    })
    gulp.watch(path.html.dest).on('change', browsersync.reload)
    gulp.watch(path.html.src, html);
    gulp.watch(path.styles.src, styles);
    gulp.watch(path.scripts.src, scripts);
    gulp.watch(path.images.src, img);
}

// Задача билд
const build = gulp.series(html, gulp.parallel(styles, scripts, img));
const dev = gulp.series(build, gulp.parallel(watch));

exports.styles = styles;
exports.scripts = scripts;
exports.img = img;
exports.html = html;
exports.watch = watch;
exports.build = build;
exports.dev = dev;
exports.default = dev;