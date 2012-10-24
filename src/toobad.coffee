Date.now ?= -> new Date().valueOf()

Array.prototype.indexOf ?= (object) -> $.inArray(object, @)

window.console ?= log: ->