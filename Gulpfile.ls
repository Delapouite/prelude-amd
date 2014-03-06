require! [
	'path'
	'gulp'
]
concat = require 'gulp-concat'
header = require 'gulp-header'
livescript = require 'gulp-livescript'
map = require 'map-stream'

parse = ->
	map (file, cb) !->
		contents = file.contents.toString 'utf8'
		filename = path.basename file.path, '.ls'

		if filename != 'index'
			lines = for line in contents.split '\n'
				if line
					'  ' + line.replace 'module.exports = ', ''
				else
					line
			lines.unshift filename + ' = do ->\n'
		else
			lines = contents.split('\n').slice 7
			lines.pop!
			lines.pop!
			lines.push 'prelude'

		file.contents = new Buffer lines.join '\n'
		cb null, file

gulp.task 'default', !->
	gulp.src 'prelude/*.ls'
	.pipe parse!
	.pipe concat 'prelude.ls'
	.pipe header '<- define\n'
	.pipe livescript!
	.pipe gulp.dest 'dist'
