const { src, dest, series } = require('gulp')

const MISSING_MAP = './missing-map.css'
const EMPTY_MAP = './empty-map.css'
const NOTY = './node_modules/noty/lib/noty.css'

function missingMap() {
	return src(MISSING_MAP, { sourcemaps: true })
		.pipe(dest('./dist', { sourcemaps: '.' }))
}

function emptyMap() {
	return src(EMPTY_MAP, { sourcemaps: true })
		.pipe(dest('./dist', { sourcemaps: '.' }))
}

// an example in the wild; the sourcemap comes from grunt-sass
function noty() {
	return src(NOTY, { sourcemaps: true })
		.pipe(dest('./dist', { sourcemaps: '.' }))
}

exports.missingMap = missingMap
exports.emptyMap = emptyMap
exports.noty = noty
exports.default = series(missingMap, emptyMap)
