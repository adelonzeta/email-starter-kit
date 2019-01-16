const gulp      = require('gulp')
const inlineCSS = require('gulp-inline-css')
const siphon    = require('siphon-media-query')
const replace   = require('gulp-replace')
const htmlmin   = require('gulp-htmlmin')
const fs        = require('fs')
require('dotenv').load()

function Inliner() {
  const css = fs.readFileSync('build/css/styles.css').toString()
  const mqCss = siphon(css)

  return gulp.src('build/**/*.html')
    .pipe(inlineCSS({
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    }))
    .pipe(replace('<!-- <style> -->', `<style>${mqCss}</style>`))
    .pipe(replace('src="', `src="${process.env.ASSETS_URL}/`))
    .pipe(replace('rel="icon" href="', `rel="icon" href="${process.env.ASSETS_URL}/`))
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('build'))
}

module.exports = Inliner