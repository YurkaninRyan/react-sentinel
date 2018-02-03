'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var PropTypes = _interopDefault(require('prop-types'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var requestCheck = window.requestIdleCallback || window.requestAnimationFrame;
var cancelCheck = window.cancelIdleCallback || window.cancelAnimationFrame;

var Sentinel = function (_PureComponent) {
  inherits(Sentinel, _PureComponent);

  function Sentinel(props) {
    classCallCheck(this, Sentinel);

    var _this = possibleConstructorReturn(this, (Sentinel.__proto__ || Object.getPrototypeOf(Sentinel)).call(this));

    _this.setLoopingFunctions = function (lowPriority) {
      // Low priority means use requestIdleCallback
      // fallback to requestAnimationFrame
      _this.requestCheck = lowPriority ? requestIdleCallback || requestAnimationFrame : requestAnimationFrame;

      _this.cancelCheck = lowPriority ? cancelIdleCallback || cancelAnimationFrame : cancelAnimationFrame;
    };

    _this.watchPID = null;
    _this.checkPID = null;

    _this.watch = function () {
      _this.watchPID = window.setTimeout(function () {
        _this.checkPID = requestCheck(_this.check);
      }, 0);
    };

    _this.check = function () {
      var observe = _this.props.observe;

      var updates = observe(_this.props);

      if (!updates) {
        return _this.watch();
      }
      var oldProps = Object.keys(_this.state);
      var newProps = Object.keys(updates);

      // first, naive check to see if lengths are different.
      // If that doesn't pass, shallow compare all the keys in both objects.
      var mismatch = oldProps.length !== newProps.length || oldProps.some(function (currPropKey) {
        return _this.state[currPropKey] !== updates[currPropKey];
      }) || newProps.some(function (currPropKey) {
        return updates[currPropKey] !== _this.state[currPropKey];
      });

      if (mismatch) {
        _this.setState(updates);
      }

      return _this.watch();
    };

    _this.setLoopingFunctions(props.lowPriority);
    return _this;
  }

  createClass(Sentinel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.watch();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.lowPriority === this.props.lowPriority) return;

      // Make a clean slate, since we will be changing functions.
      clearTimeout(this.watchPID);
      this.cancelCheck(this.checkPID);

      this.setLoopingFunctions(nextProps.lowPriority);
      this.watch();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.watchPID);
      cancelCheck(this.checkPID);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.render(this.state);
    }
  }]);
  return Sentinel;
}(react.PureComponent);

Sentinel.propTypes = {
  observe: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  lowPriority: PropTypes.bool
};

Sentinel.defaultProps = {
  lowPriority: false
};

module.exports = Sentinel;
