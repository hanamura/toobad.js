module.exports = (grunt) ->
	grunt.initConfig
		coffee:
			main:
				src: 'src/*.coffee'
				dest: 'toobad.js'

		uglify:
			main:
				src: 'toobad.js'
				dest: 'toobad.min.js'

		watch:
			files: 'src/*.coffee'
			tasks: 'default'

	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.registerTask 'default', [
		'coffee:main',
		'uglify:main',
	]
