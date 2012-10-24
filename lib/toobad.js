(function() {
  var _base, _ref, _ref1, _ref2;

  if ((_ref = Date.now) == null) {
    Date.now = function() {
      return new Date().valueOf();
    };
  }

  if ((_ref1 = (_base = Array.prototype).indexOf) == null) {
    _base.indexOf = function(obj) {
      var i, _i, _ref2;
      for (i = _i = 0, _ref2 = this.length; 0 <= _ref2 ? _i < _ref2 : _i > _ref2; i = 0 <= _ref2 ? ++_i : --_i) {
        if (this[i] === obj) {
          return i;
        }
      }
      return -1;
    };
  }

  if ((_ref2 = window.console) == null) {
    window.console = {
      log: function() {}
    };
  }

}).call(this);
