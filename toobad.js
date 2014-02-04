(function() {
  var _base;

  if (Date.now == null) {
    Date.now = function() {
      return new Date().valueOf();
    };
  }

  if ((_base = Array.prototype).indexOf == null) {
    _base.indexOf = function(obj) {
      var i, _i, _ref;
      for (i = _i = 0, _ref = this.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (this[i] === obj) {
          return i;
        }
      }
      return -1;
    };
  }

  if (window.console == null) {
    window.console = {
      log: function() {}
    };
  }

}).call(this);
