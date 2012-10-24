Date.now ?= -> new Date().valueOf()

Array.prototype.indexOf ?= (obj) ->
	for i in [0...@length]
		if @[i] == obj
			return i
	-1

window.console ?= log: ->