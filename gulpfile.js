"use strict";

const gulp = require('gulp');
const { src, dest, series, parallel, watch } = gulp;
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
    return src(path.images.dest, { allowEmpty: true, read: false })
        .pipe(clean());
}

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}

// Задача для обработки HTML
function html() {
    return src(path.html.src)
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(dest(path.html.dest))
        .pipe(browsersync.stream());
}

// Задача для обработки стилей
async function styles() {
    const autoprefixer = await import('gulp-autoprefixer');

    return src(path.styles.src)
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(sass({ silent: true }).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer.default({
            cascade: false,
            overrideBrowserslist: ["> 0.5%", "last 3 versions"]
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.styles.dest))
        .pipe(browsersync.stream());
}

// Задача для обработки скриптов
async function scripts() {
    return src(path.scripts.src, { sourcemaps: true })
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.scripts.dest))
        .pipe(browsersync.stream());
}

const img = series(cleanImages, async function img() {
    return src(path.images.src, { encoding: false })
        .pipe(newer(path.images.dest))
        .pipe(dest(path.images.dest));
});

// Отслеживание изменений
function watcher() {
    browsersync.init({
        server: {
            baseDir: './dist/'
        }
    });
    watch(path.html.dest).on('change', browsersync.reload);
    watch(path.html.src, html);
    watch(path.styles.src, styles);
    watch(path.scripts.src, scripts);
    watch(path.images.src, img);
}

// Задача билд
const build = series(html, parallel(styles, scripts, img));
const dev = series(build, parallel(watcher));

exports.styles = styles;
exports.scripts = scripts;
exports.img = img;
exports.html = html;
exports.watch = watcher;
exports.build = build;
exports.dev = dev;
exports.default = dev;
