var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    // Get .html and .njk diles in pages
    return gulp.src('app/pages/**/*.njk')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
    }))
    // output files in app folder
    .pipe(gulp.dest('app'))
});