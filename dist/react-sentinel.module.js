import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



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

  function Sentinel() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Sentinel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Sentinel.__proto__ || Object.getPrototypeOf(Sentinel)).call.apply(_ref, [this].concat(args))), _this), _this.watchPID = null, _this.checkPID = null, _this.state = {}, _this.watch = function () {
      _this.watchPID = window.setTimeout(function () {
        _this.checkPID = requestCheck(_this.check);
      }, 0);
    }, _this.check = function () {
      var updates = watchToProps(_this.props, findRootDecoratedComponentReference(_this.decoratedComponentReference), _this.state);

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

      _this.watch();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Sentinel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
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
      return React.createElement(
        'div',
        null,
        'hello world'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(WrappedComponent, _extends({ ref: function ref(component) {
          _this2.decoratedComponentReference = component;
        } }, this.props, this.state));
    }
  }]);
  return Sentinel;
}(PureComponent);

export default Sentinel;
