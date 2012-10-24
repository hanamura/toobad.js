(function() {
  var _base, _ref, _ref1, _ref2;

  if ((_ref = Date.now) == null) {
    Date.now = function() {
      return new Date().valueOf();
    };
  }

  if ((_ref1 = (_base = Array.prototype).indexOf) == null) {
    _base.indexOf = function(object) {
      return $.inArray(object, this);
    };
  }

  if ((_ref2 = window.console) == null) {
    window.console = {
      log: function() {}
    };
  }

}).call(this);
