(function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var emptyObject = {};

	var emptyObject_1 = emptyObject;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	var r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
	r?Symbol.for("react.forward_ref"):60112;var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);invariant_1(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e);}
	var E={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||E;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function G(){}
	G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||E;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return {$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
	function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return {result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
	function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0;}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c);}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
	h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++);}
	function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,emptyFunction_1.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a));}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b);}
	var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b);},count:function(a){return null==a?0:S(a,"",emptyFunction_1.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,emptyFunction_1.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return {current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
	_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
	b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l;}return {$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
	assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default?Z.default:Z;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var react_development = createCommonjsModule(function (module) {
	});

	var react = createCommonjsModule(function (module) {

	{
	  module.exports = react_production_min;
	}
	});
	var react_1 = react.Children;
	var react_2 = react.Component;
	var react_3 = react.PureComponent;
	var react_4 = react.PropTypes;
	var react_5 = react.createElement;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	var ExecutionEnvironment_1 = ExecutionEnvironment;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
	function getActiveElement(doc) /*?DOMElement*/{
	  doc = doc || (typeof document !== 'undefined' ? document : undefined);
	  if (typeof doc === 'undefined') {
	    return null;
	  }
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}

	var getActiveElement_1 = getActiveElement;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */

	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty$1.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	var shallowEqual_1 = shallowEqual;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  var doc = object ? object.ownerDocument || object : document;
	  var defaultView = doc.defaultView || window;
	  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	var isNode_1 = isNode;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */



	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode_1(object) && object.nodeType == 3;
	}

	var isTextNode_1 = isTextNode;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */



	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode_1(outerNode)) {
	    return false;
	  } else if (isTextNode_1(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	var containsNode_1 = containsNode;

	function A$1(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);invariant_1(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c);}react?void 0:A$1("227");
	function ia(a,b,c,d,e,f,g,h,k){this._hasCaughtError=!1;this._caughtError=null;var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n);}catch(r){this._caughtError=r,this._hasCaughtError=!0;}}
	var B$1={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){ia.apply(B$1,arguments);},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){B$1.invokeGuardedCallback.apply(this,arguments);if(B$1.hasCaughtError()){var n=B$1.clearCaughtError();B$1._hasRethrowError||(B$1._hasRethrowError=!0,B$1._rethrowError=n);}},rethrowCaughtError:function(){return ka.apply(B$1,arguments)},hasCaughtError:function(){return B$1._hasCaughtError},clearCaughtError:function(){if(B$1._hasCaughtError){var a=
	B$1._caughtError;B$1._caughtError=null;B$1._hasCaughtError=!1;return a}A$1("198");}};function ka(){if(B$1._hasRethrowError){var a=B$1._rethrowError;B$1._rethrowError=null;B$1._hasRethrowError=!1;throw a;}}var la=null,ma={};
	function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:A$1("96",a);if(!oa[c]){b.extractEvents?void 0:A$1("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?A$1("99",h):void 0;pa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&qa(k[e],g,h);e=!0;}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:A$1("98",d,a);}}}}
	function qa(a,b,c){ra[a]?A$1("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies;}var oa=[],pa={},ra={},sa={};function ta(a){la?A$1("101"):void 0;la=Array.prototype.slice.call(a);na();}function ua(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?A$1("102",c):void 0,ma[c]=d,b=!0);}b&&na();}
	var va={plugins:oa,eventNameDispatchConfigs:pa,registrationNameModules:ra,registrationNameDependencies:sa,possibleRegistrationNames:null,injectEventPluginOrder:ta,injectEventPluginsByName:ua},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);B$1.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null;}
	function Aa(a,b){null==b?A$1("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var Ca=null;
	function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}var Ga={injectEventPluginOrder:ta,injectEventPluginsByName:ua};
	function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;c&&"function"!==typeof c?A$1("231",b,typeof c):void 0;
	return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?A$1("95"):void 0,B$1.rethrowCaughtError());}function Ja(a,b,c,d){for(var e=null,f=0;f<oa.length;f++){var g=oa[f];g&&(g=g.extractEvents(a,b,c,d))&&(e=Aa(e,g));}Ia(e,!1);}var Ka={injection:Ga,getListener:Ha,runEventsInBatch:Ia,runExtractedEventsInBatch:Ja},La=Math.random().toString(36).slice(2),C$1="__reactInternalInstance$"+La,Ma="__reactEventHandlers$"+La;
	function Na(a){if(a[C$1])return a[C$1];for(;!a[C$1];)if(a.parentNode)a=a.parentNode;else return null;a=a[C$1];return 5===a.tag||6===a.tag?a:null}function Oa(a){if(5===a.tag||6===a.tag)return a.stateNode;A$1("33");}function Pa(a){return a[Ma]||null}var Qa={precacheFiberNode:function(a,b){b[C$1]=a;},getClosestInstanceFromNode:Na,getInstanceFromNode:function(a){a=a[C$1];return !a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:Oa,getFiberCurrentPropsFromNode:Pa,updateFiberProps:function(a,b){a[Ma]=b;}};
	function F$1(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ra(a,b,c){for(var d=[];a;)d.push(a),a=F$1(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c);}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a);}function Ta(a){a&&a.dispatchConfig.phasedRegistrationNames&&Ra(a._targetInst,Sa,a);}
	function Ua(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?F$1(b):null;Ra(b,Sa,a);}}function Va(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a));}function Xa(a){a&&a.dispatchConfig.registrationName&&Va(a._targetInst,null,a);}function Ya(a){Ba(a,Ta);}
	function Za(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,g=0,h=e;h;h=F$1(h))g++;h=0;for(var k=f;k;k=F$1(k))h++;for(;0<g-h;)e=F$1(e),g--;for(;0<h-g;)f=F$1(f),h--;for(;g--;){if(e===f||e===f.alternate)break a;e=F$1(e);f=F$1(f);}e=null;}else e=null;f=e;for(e=[];c&&c!==f;){g=c.alternate;if(null!==g&&g===f)break;e.push(c);c=F$1(c);}for(c=[];d&&d!==f;){g=d.alternate;if(null!==g&&g===f)break;c.push(d);d=F$1(d);}for(d=0;d<e.length;d++)Va(e[d],"bubbled",a);for(a=c.length;0<a--;)Va(c[a],"captured",b);}
	var $a={accumulateTwoPhaseDispatches:Ya,accumulateTwoPhaseDispatchesSkipTarget:function(a){Ba(a,Ua);},accumulateEnterLeaveDispatches:Za,accumulateDirectDispatches:function(a){Ba(a,Xa);}};function ab(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
	var bb={animationend:ab("Animation","AnimationEnd"),animationiteration:ab("Animation","AnimationIteration"),animationstart:ab("Animation","AnimationStart"),transitionend:ab("Transition","TransitionEnd")},cb={},db={};ExecutionEnvironment_1.canUseDOM&&(db=document.createElement("div").style,"AnimationEvent"in window||(delete bb.animationend.animation,delete bb.animationiteration.animation,delete bb.animationstart.animation),"TransitionEvent"in window||delete bb.transitionend.transition);
	function eb(a){if(cb[a])return cb[a];if(!bb[a])return a;var b=bb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in db)return cb[a]=b[c];return a}var fb=eb("animationend"),gb=eb("animationiteration"),hb=eb("animationstart"),ib=eb("transitionend"),jb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kb=null;
	function lb(){!kb&&ExecutionEnvironment_1.canUseDOM&&(kb="textContent"in document.documentElement?"textContent":"innerText");return kb}var G$1={_root:null,_startText:null,_fallbackText:null};function mb(){if(G$1._fallbackText)return G$1._fallbackText;var a,b=G$1._startText,c=b.length,d,e=nb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);G$1._fallbackText=e.slice(a,1<d?1-d:void 0);return G$1._fallbackText}function nb(){return "value"in G$1._root?G$1._root.value:G$1._root[lb()]}
	var ob="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),pb={type:null,target:null,currentTarget:emptyFunction_1.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
	function H$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?emptyFunction_1.thatReturnsTrue:emptyFunction_1.thatReturnsFalse;this.isPropagationStopped=emptyFunction_1.thatReturnsFalse;return this}
	objectAssign(H$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=emptyFunction_1.thatReturnsTrue);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=emptyFunction_1.thatReturnsTrue);},persist:function(){this.isPersistent=emptyFunction_1.thatReturnsTrue;},isPersistent:emptyFunction_1.thatReturnsFalse,
	destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<ob.length;a++)this[ob[a]]=null;}});H$1.Interface=pb;H$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;qb(c);return c};qb(H$1);
	function rb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function sb(a){a instanceof this?void 0:A$1("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}function qb(a){a.eventPool=[];a.getPooled=rb;a.release=sb;}var tb=H$1.extend({data:null}),ub=H$1.extend({data:null}),vb=[9,13,27,32],wb=ExecutionEnvironment_1.canUseDOM&&"CompositionEvent"in window,xb=null;ExecutionEnvironment_1.canUseDOM&&"documentMode"in document&&(xb=document.documentMode);
	var yb=ExecutionEnvironment_1.canUseDOM&&"TextEvent"in window&&!xb,zb=ExecutionEnvironment_1.canUseDOM&&(!wb||xb&&8<xb&&11>=xb),Ab=String.fromCharCode(32),Bb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
	captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Cb=!1;
	function Db(a,b){switch(a){case "keyup":return -1!==vb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function Eb(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var Fb=!1;function Gb(a,b){switch(a){case "compositionend":return Eb(b);case "keypress":if(32!==b.which)return null;Cb=!0;return Ab;case "textInput":return a=b.data,a===Ab&&Cb?null:a;default:return null}}
	function Hb(a,b){if(Fb)return "compositionend"===a||!wb&&Db(a,b)?(a=mb(),G$1._root=null,G$1._startText=null,G$1._fallbackText=null,Fb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return zb?null:b.data;default:return null}}
	var Ib={eventTypes:Bb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(wb)b:{switch(a){case "compositionstart":e=Bb.compositionStart;break b;case "compositionend":e=Bb.compositionEnd;break b;case "compositionupdate":e=Bb.compositionUpdate;break b}e=void 0;}else Fb?Db(a,c)&&(e=Bb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Bb.compositionStart);e?(zb&&(Fb||e!==Bb.compositionStart?e===Bb.compositionEnd&&Fb&&(f=mb()):(G$1._root=d,G$1._startText=nb(),Fb=!0)),e=tb.getPooled(e,b,c,d),f?e.data=
	f:(f=Eb(c),null!==f&&(e.data=f)),Ya(e),f=e):f=null;(a=yb?Gb(a,c):Hb(a,c))?(b=ub.getPooled(Bb.beforeInput,b,c,d),b.data=a,Ya(b)):b=null;return null===f?b:null===b?f:[f,b]}},Jb=null,Kb={injectFiberControlledHostComponent:function(a){Jb=a;}},Lb=null,Mb=null;function Nb(a){if(a=xa(a)){Jb&&"function"===typeof Jb.restoreControlledState?void 0:A$1("194");var b=wa(a.stateNode);Jb.restoreControlledState(a.stateNode,a.type,b);}}function Ob(a){Lb?Mb?Mb.push(a):Mb=[a]:Lb=a;}
	function Pb(){return null!==Lb||null!==Mb}function Qb(){if(Lb){var a=Lb,b=Mb;Mb=Lb=null;Nb(a);if(b)for(a=0;a<b.length;a++)Nb(b[a]);}}var Rb={injection:Kb,enqueueStateRestore:Ob,needsStateRestore:Pb,restoreStateIfNeeded:Qb};function Sb(a,b){return a(b)}function Tb(a,b,c){return a(b,c)}function Ub(){}var Vb=!1;function Wb(a,b){if(Vb)return a(b);Vb=!0;try{return Sb(a,b)}finally{Vb=!1,Pb()&&(Ub(),Qb());}}
	var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!Xb[a.type]:"textarea"===b?!0:!1}function Zb(a){a=a.target||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}
	function $b(a,b){if(!ExecutionEnvironment_1.canUseDOM||b&&!("addEventListener"in document))return !1;a="on"+a;b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function ac(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function bc(a){var b=ac(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function cc(a){a._valueTracker||(a._valueTracker=bc(a));}function dc(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=ac(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
	var ec=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I$1="function"===typeof Symbol&&Symbol.for,fc=I$1?Symbol.for("react.element"):60103,gc=I$1?Symbol.for("react.portal"):60106,hc=I$1?Symbol.for("react.fragment"):60107,ic=I$1?Symbol.for("react.strict_mode"):60108,jc=I$1?Symbol.for("react.profiler"):60114,mc=I$1?Symbol.for("react.provider"):60109,nc=I$1?Symbol.for("react.context"):60110,oc=I$1?Symbol.for("react.async_mode"):60111,pc=I$1?Symbol.for("react.forward_ref"):60112,qc=I$1?Symbol.for("react.timeout"):
	60113,rc="function"===typeof Symbol&&Symbol.iterator;function sc(a){if(null===a||"undefined"===typeof a)return null;a=rc&&a[rc]||a["@@iterator"];return "function"===typeof a?a:null}
	function tc(a){var b=a.type;if("function"===typeof b)return b.displayName||b.name;if("string"===typeof b)return b;switch(b){case oc:return "AsyncMode";case nc:return "Context.Consumer";case hc:return "ReactFragment";case gc:return "ReactPortal";case jc:return "Profiler("+a.pendingProps.id+")";case mc:return "Context.Provider";case ic:return "StrictMode";case qc:return "Timeout"}if("object"===typeof b&&null!==b)switch(b.$$typeof){case pc:return a=b.render.displayName||b.render.name||"",""!==a?"ForwardRef("+
	a+")":"ForwardRef"}return null}function vc(a){var b="";do{a:switch(a.tag){case 0:case 1:case 2:case 5:var c=a._debugOwner,d=a._debugSource;var e=tc(a);var f=null;c&&(f=tc(c));c=d;e="\n    in "+(e||"Unknown")+(c?" (at "+c.fileName.replace(/^.*[\\\/]/,"")+":"+c.lineNumber+")":f?" (created by "+f+")":"");break a;default:e="";}b+=e;a=a.return;}while(a);return b}
	var wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},yc={};function zc(a){if(yc.hasOwnProperty(a))return !0;if(xc.hasOwnProperty(a))return !1;if(wc.test(a))return yc[a]=!0;xc[a]=!0;return !1}
	function Ac(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}function Bc(a,b,c,d){if(null===b||"undefined"===typeof b||Ac(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}
	function J$1(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;}var K$1={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K$1[a]=new J$1(a,0,!1,a,null);});
	[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K$1[b]=new J$1(b,1,!1,a[1],null);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K$1[a]=new J$1(a,2,!1,a.toLowerCase(),null);});["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(a){K$1[a]=new J$1(a,2,!1,a,null);});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K$1[a]=new J$1(a,3,!1,a.toLowerCase(),null);});["checked","multiple","muted","selected"].forEach(function(a){K$1[a]=new J$1(a,3,!0,a.toLowerCase(),null);});["capture","download"].forEach(function(a){K$1[a]=new J$1(a,4,!1,a.toLowerCase(),null);});
	["cols","rows","size","span"].forEach(function(a){K$1[a]=new J$1(a,6,!1,a.toLowerCase(),null);});["rowSpan","start"].forEach(function(a){K$1[a]=new J$1(a,5,!1,a.toLowerCase(),null);});var Cc=/[\-:]([a-z])/g;function Dc(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Cc,
	Dc);K$1[b]=new J$1(b,1,!1,a,null);});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Cc,Dc);K$1[b]=new J$1(b,1,!1,a,"http://www.w3.org/1999/xlink");});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Cc,Dc);K$1[b]=new J$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace");});K$1.tabIndex=new J$1("tabIndex",1,!1,"tabindex",null);
	function Ec(a,b,c,d){var e=K$1.hasOwnProperty(b)?K$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Bc(b,c,e,d)&&(c=null),d||null===e?zc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
	function Fc(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Gc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Hc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function Ic(a,b){b=b.checked;null!=b&&Ec(a,"checked",b,!1);}
	function Jc(a,b){Ic(a,b);var c=Hc(b.value);if(null!=c)if("number"===b.type){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);b.hasOwnProperty("value")?Kc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Kc(a,b.type,Hc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function Lc(a,b){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue"))""===a.value&&(a.value=""+a._wrapperState.initialValue),a.defaultValue=""+a._wrapperState.initialValue;b=a.name;""!==b&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==b&&(a.name=b);}function Kc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}
	function Hc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}var Mc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Nc(a,b,c){a=H$1.getPooled(Mc.change,a,b,c);a.type="change";Ob(c);Ya(a);return a}var Oc=null,Pc=null;function Qc(a){Ia(a,!1);}function Rc(a){var b=Oa(a);if(dc(b))return a}
	function Sc(a,b){if("change"===a)return b}var Tc=!1;ExecutionEnvironment_1.canUseDOM&&(Tc=$b("input")&&(!document.documentMode||9<document.documentMode));function Uc(){Oc&&(Oc.detachEvent("onpropertychange",Vc),Pc=Oc=null);}function Vc(a){"value"===a.propertyName&&Rc(Pc)&&(a=Nc(Pc,a,Zb(a)),Wb(Qc,a));}function Wc(a,b,c){"focus"===a?(Uc(),Oc=b,Pc=c,Oc.attachEvent("onpropertychange",Vc)):"blur"===a&&Uc();}function Xc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Rc(Pc)}
	function Yc(a,b){if("click"===a)return Rc(b)}function Zc(a,b){if("input"===a||"change"===a)return Rc(b)}
	var $c={eventTypes:Mc,_isInputEventSupported:Tc,extractEvents:function(a,b,c,d){var e=b?Oa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Sc:Yb(e)?Tc?f=Zc:(f=Xc,g=Wc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Yc);if(f&&(f=f(a,b)))return Nc(f,c,d);g&&g(a,e,b);"blur"===a&&null!=b&&(a=b._wrapperState||e._wrapperState)&&a.controlled&&"number"===e.type&&Kc(e,"number",e.value);}},ad=H$1.extend({view:null,
	detail:null}),bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=bd[a])?!!b[a]:!1}function dd(){return cd}
	var ed=ad.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:dd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}}),fd=ed.extend({pointerId:null,width:null,height:null,pressure:null,tiltX:null,tiltY:null,pointerType:null,isPrimary:null}),gd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},
	mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},hd={eventTypes:gd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||
	e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,n=void 0;if("mouseout"===a||"mouseover"===a)g=ed,h=gd.mouseLeave,k=gd.mouseEnter,n="mouse";else if("pointerout"===a||"pointerover"===a)g=fd,h=gd.pointerLeave,k=gd.pointerEnter,n="pointer";a=null==f?e:Oa(f);e=null==b?e:Oa(b);h=g.getPooled(h,f,c,d);h.type=n+"leave";h.target=a;h.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=n+"enter";c.target=e;c.relatedTarget=a;Za(h,
	c,f,b);return [h,c]}};function id(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function jd(a){2!==id(a)?A$1("188"):void 0;}
	function kd(a){var b=a.alternate;if(!b)return b=id(a),3===b?A$1("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return jd(e),a;if(g===d)return jd(e),b;g=g.sibling;}A$1("188");}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}g?
	void 0:A$1("189");}}c.alternate!==d?A$1("190"):void 0;}3!==c.tag?A$1("188"):void 0;return c.stateNode.current===c?a:b}function ld(a){a=kd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
	function md(a){a=kd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}var nd=H$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),od=H$1.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),pd=ad.extend({relatedTarget:null});
	function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
	var rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
	116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td=ad.extend({key:function(a){if(a.key){var b=rd[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?sd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:dd,charCode:function(a){return "keypress"===
	a.type?qd(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),ud=ed.extend({dataTransfer:null}),vd=ad.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:dd}),wd=H$1.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xd=ed.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in
	a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),yd=[["abort","abort"],[fb,"animationEnd"],[gb,"animationIteration"],[hb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
	["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
	["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ib,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],zd={},Ad={};function Bd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};zd[a]=b;Ad[c]=b;}
	[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],
	["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Bd(a,!0);});yd.forEach(function(a){Bd(a,!1);});
	var Cd={eventTypes:zd,isInteractiveTopLevelEventType:function(a){a=Ad[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Ad[a];if(!e)return null;switch(a){case "keypress":if(0===qd(c))return null;case "keydown":case "keyup":a=td;break;case "blur":case "focus":a=pd;break;case "click":if(2===c.button)return null;case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=ed;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
	ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=vd;break;case fb:case gb:case hb:a=nd;break;case ib:a=wd;break;case "scroll":a=ad;break;case "wheel":a=xd;break;case "copy":case "cut":case "paste":a=od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=fd;break;default:a=H$1;}b=a.getPooled(e,b,c,d);Ya(b);return b}},Dd=Cd.isInteractiveTopLevelEventType,
	Ed=[];function Fd(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c.return;)c=c.return;c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=Na(c);}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],Ja(a.topLevelType,b,a.nativeEvent,Zb(a.nativeEvent));}var Gd=!0;function Id(a){Gd=!!a;}function L$1(a,b){if(!b)return null;var c=(Dd(a)?Jd:Kd).bind(null,a);b.addEventListener(a,c,!1);}
	function Ld(a,b){if(!b)return null;var c=(Dd(a)?Jd:Kd).bind(null,a);b.addEventListener(a,c,!0);}function Jd(a,b){Tb(Kd,a,b);}function Kd(a,b){if(Gd){var c=Zb(b);c=Na(c);null===c||"number"!==typeof c.tag||2===id(c)||(c=null);if(Ed.length){var d=Ed.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d;}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Wb(Fd,a);}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Ed.length&&Ed.push(a);}}}
	var Md={get _enabled(){return Gd},setEnabled:Id,isEnabled:function(){return Gd},trapBubbledEvent:L$1,trapCapturedEvent:Ld,dispatchEvent:Kd},Nd={},Od=0,Pd="_reactListenersID"+(""+Math.random()).slice(2);function Qd(a){Object.prototype.hasOwnProperty.call(a,Pd)||(a[Pd]=Od++,Nd[a[Pd]]={});return Nd[a[Pd]]}function Rd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Sd(a,b){var c=Rd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Rd(c);}}function Td(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&"text"===a.type||"textarea"===b||"true"===a.contentEditable)}
	var Ud=ExecutionEnvironment_1.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Vd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Wd=null,Xd=null,Yd=null,Zd=!1;
	function $d(a,b){if(Zd||null==Wd||Wd!==getActiveElement_1())return null;var c=Wd;"selectionStart"in c&&Td(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return Yd&&shallowEqual_1(Yd,c)?null:(Yd=c,a=H$1.getPooled(Vd.select,Xd,a,b),a.type="select",a.target=Wd,Ya(a),a)}
	var ae={eventTypes:Vd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Qd(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0;}f=!e;}if(f)return null;e=b?Oa(b):window;switch(a){case "focus":if(Yb(e)||"true"===e.contentEditable)Wd=e,Xd=b,Yd=null;break;case "blur":Yd=Xd=Wd=null;break;case "mousedown":Zd=!0;break;case "contextmenu":case "mouseup":return Zd=!1,$d(c,d);case "selectionchange":if(Ud)break;
	case "keydown":case "keyup":return $d(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa.getFiberCurrentPropsFromNode;xa=Qa.getInstanceFromNode;ya=Qa.getNodeFromInstance;Ga.injectEventPluginsByName({SimpleEventPlugin:Cd,EnterLeaveEventPlugin:hd,ChangeEventPlugin:$c,SelectEventPlugin:ae,BeforeInputEventPlugin:Ib});var be=void 0;
	be="object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()};var ce=void 0,de=void 0;
	if(ExecutionEnvironment_1.canUseDOM){var ee=[],fe=0,ge={},he=-1,ie=!1,je=!1,ke=0,le=33,me=33,ne={didTimeout:!1,timeRemaining:function(){var a=ke-be();return 0<a?a:0}},oe=function(a,b){if(ge[b])try{a(ne);}finally{delete ge[b];}},pe="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===pe&&(ie=!1,0!==ee.length)){if(0!==ee.length&&(a=be(),!(-1===he||he>a))){he=-1;ne.didTimeout=!0;for(var b=0,c=ee.length;b<c;b++){var d=ee[b],e=d.timeoutTime;-1!==
	e&&e<=a?oe(d.scheduledCallback,d.callbackId):-1!==e&&(-1===he||e<he)&&(he=e);}}for(a=be();0<ke-a&&0<ee.length;)a=ee.shift(),ne.didTimeout=!1,oe(a.scheduledCallback,a.callbackId),a=be();0<ee.length&&!je&&(je=!0,requestAnimationFrame(qe));}},!1);var qe=function(a){je=!1;var b=a-ke+me;b<me&&le<me?(8>b&&(b=8),me=b<le?le:b):le=b;ke=a+me;ie||(ie=!0,window.postMessage(pe,"*"));};ce=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=be()+b.timeout);if(-1===he||-1!==c&&c<he)he=c;fe++;b=fe;ee.push({scheduledCallback:a,
	callbackId:b,timeoutTime:c});ge[b]=!0;je||(je=!0,requestAnimationFrame(qe));return b};de=function(a){delete ge[a];};}else{var re=0,se={};ce=function(a){var b=re++,c=setTimeout(function(){a({timeRemaining:function(){return Infinity},didTimeout:!1});});se[b]=c;return b};de=function(a){var b=se[a];delete se[a];clearTimeout(b);};}function te(a){var b="";react.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a);});return b}
	function ue(a,b){a=objectAssign({children:void 0},b);if(b=te(b.children))a.children=b;return a}function ve(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function we(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple};}function xe(a,b){null!=b.dangerouslySetInnerHTML?A$1("91"):void 0;return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ye(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?A$1("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:A$1("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c};}
	function ze(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue);}function Ae(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b);}var Be={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function Ce(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function De(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Ce(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var Ee=void 0,Fe=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==Be.svg||"innerHTML"in a)a.innerHTML=b;else{Ee=Ee||document.createElement("div");Ee.innerHTML="<svg>"+b+"</svg>";for(b=Ee.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function Ge(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var He={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
	stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(a){Ie.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);He[b]=He[a];});});
	function Je(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||He.hasOwnProperty(e)&&He[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var Ke=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function Le(a,b,c){b&&(Ke[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?A$1("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?A$1("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:A$1("61")),null!=b.style&&"object"!==typeof b.style?A$1("62",c()):void 0);}
	function Me(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var Ne=emptyFunction_1.thatReturns("");
	function Oe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Qd(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ld("scroll",a);break;case "focus":case "blur":Ld("focus",a);Ld("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":$b(e,!0)&&Ld(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===jb.indexOf(e)&&L$1(e,a);}c[e]=!0;}}}
	function Pe(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===Be.html&&(d=Ce(a));d===Be.html?"script"===a?(a=c.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function Qe(a,b){return (9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
	function Re(a,b,c,d){var e=Me(b,c);switch(b){case "iframe":case "object":L$1("load",a);var f=c;break;case "video":case "audio":for(f=0;f<jb.length;f++)L$1(jb[f],a);f=c;break;case "source":L$1("error",a);f=c;break;case "img":case "image":case "link":L$1("error",a);L$1("load",a);f=c;break;case "form":L$1("reset",a);L$1("submit",a);f=c;break;case "details":L$1("toggle",a);f=c;break;case "input":Gc(a,c);f=Fc(a,c);L$1("invalid",a);Oe(d,"onChange");break;case "option":f=ue(a,c);break;case "select":we(a,c);f=objectAssign({},c,{value:void 0});
	L$1("invalid",a);Oe(d,"onChange");break;case "textarea":ye(a,c);f=xe(a,c);L$1("invalid",a);Oe(d,"onChange");break;default:f=c;}Le(b,f,Ne);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?Je(a,k,Ne):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Fe(a,k)):"children"===h?"string"===typeof k?("textarea"!==b||""!==k)&&Ge(a,k):"number"===typeof k&&Ge(a,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ra.hasOwnProperty(h)?null!=k&&Oe(d,
	h):null!=k&&Ec(a,h,k,e));}switch(b){case "input":cc(a);Lc(a,c);break;case "textarea":cc(a);Ae(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?ve(a,!!c.multiple,b,!1):null!=c.defaultValue&&ve(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=emptyFunction_1);}}
	function Se(a,b,c,d,e){var f=null;switch(b){case "input":c=Fc(a,c);d=Fc(a,d);f=[];break;case "option":c=ue(a,c);d=ue(a,d);f=[];break;case "select":c=objectAssign({},c,{value:void 0});d=objectAssign({},d,{value:void 0});f=[];break;case "textarea":c=xe(a,c);d=xe(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=emptyFunction_1);}Le(b,d,Ne);b=a=void 0;var g=null;for(a in c)if(!d.hasOwnProperty(a)&&c.hasOwnProperty(a)&&null!=c[a])if("style"===a){var h=c[a];for(b in h)h.hasOwnProperty(b)&&(g||
	(g={}),g[b]="");}else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(ra.hasOwnProperty(a)?f||(f=[]):(f=f||[]).push(a,null));for(a in d){var k=d[a];h=null!=c?c[a]:void 0;if(d.hasOwnProperty(a)&&k!==h&&(null!=k||null!=h))if("style"===a)if(h){for(b in h)!h.hasOwnProperty(b)||k&&k.hasOwnProperty(b)||(g||(g={}),g[b]="");for(b in k)k.hasOwnProperty(b)&&h[b]!==k[b]&&(g||(g={}),g[b]=k[b]);}else g||(f||(f=[]),f.push(a,g)),
	g=k;else"dangerouslySetInnerHTML"===a?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(a,""+k)):"children"===a?h===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(a,""+k):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(ra.hasOwnProperty(a)?(null!=k&&Oe(e,a),f||h===k||(f=[])):(f=f||[]).push(a,k));}g&&(f=f||[]).push("style",g);return f}
	function Te(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Ic(a,e);Me(c,d);d=Me(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?Je(a,h,Ne):"dangerouslySetInnerHTML"===g?Fe(a,h):"children"===g?Ge(a,h):Ec(a,g,h,d);}switch(c){case "input":Jc(a,e);break;case "textarea":ze(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ve(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?
	ve(a,!!e.multiple,e.defaultValue,!0):ve(a,!!e.multiple,e.multiple?[]:"",!1));}}
	function Ue(a,b,c,d,e){switch(b){case "iframe":case "object":L$1("load",a);break;case "video":case "audio":for(d=0;d<jb.length;d++)L$1(jb[d],a);break;case "source":L$1("error",a);break;case "img":case "image":case "link":L$1("error",a);L$1("load",a);break;case "form":L$1("reset",a);L$1("submit",a);break;case "details":L$1("toggle",a);break;case "input":Gc(a,c);L$1("invalid",a);Oe(e,"onChange");break;case "select":we(a,c);L$1("invalid",a);Oe(e,"onChange");break;case "textarea":ye(a,c),L$1("invalid",a),Oe(e,"onChange");}Le(b,
	c,Ne);d=null;for(var f in c)if(c.hasOwnProperty(f)){var g=c[f];"children"===f?"string"===typeof g?a.textContent!==g&&(d=["children",g]):"number"===typeof g&&a.textContent!==""+g&&(d=["children",""+g]):ra.hasOwnProperty(f)&&null!=g&&Oe(e,f);}switch(b){case "input":cc(a);Lc(a,c);break;case "textarea":cc(a);Ae(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=emptyFunction_1);}return d}function Ve(a,b){return a.nodeValue!==b}
	var We={createElement:Pe,createTextNode:Qe,setInitialProperties:Re,diffProperties:Se,updateProperties:Te,diffHydratedProperties:Ue,diffHydratedText:Ve,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Jc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;
	c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Pa(d);e?void 0:A$1("90");dc(d);Jc(d,e);}}}break;case "textarea":ze(a,c);break;case "select":b=c.value,null!=b&&ve(a,!!c.multiple,b,!1);}}},Xe=null,Ye=null;function Ze(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
	function $e(a,b){return "textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html}var af=be,bf=ce,cf=de;function df(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function ef(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}var ff=[],gf=-1;function hf(a){return {current:a}}
	function M$1(a){0>gf||(a.current=ff[gf],ff[gf]=null,gf--);}function N$1(a,b){gf++;ff[gf]=a.current;a.current=b;}var jf=hf(emptyObject_1),O$1=hf(!1),kf=emptyObject_1;function lf(a){return mf(a)?kf:jf.current}
	function nf(a,b){var c=a.type.contextTypes;if(!c)return emptyObject_1;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function mf(a){return 2===a.tag&&null!=a.type.childContextTypes}function of(a){mf(a)&&(M$1(O$1,a),M$1(jf,a));}function pf(a){M$1(O$1,a);M$1(jf,a);}
	function qf(a,b,c){jf.current!==emptyObject_1?A$1("168"):void 0;N$1(jf,b,a);N$1(O$1,c,a);}function rf(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:A$1("108",tc(a)||"Unknown",e);return objectAssign({},b,c)}function sf(a){if(!mf(a))return !1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||emptyObject_1;kf=jf.current;N$1(jf,b,a);N$1(O$1,O$1.current,a);return !0}
	function tf(a,b){var c=a.stateNode;c?void 0:A$1("169");if(b){var d=rf(a,kf);c.__reactInternalMemoizedMergedChildContext=d;M$1(O$1,a);M$1(jf,a);N$1(jf,d,a);}else M$1(O$1,a);N$1(O$1,b,a);}
	function uf(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null;}
	function vf(a,b,c){var d=a.alternate;null===d?(d=new uf(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
	function wf(a,b,c){var d=a.type,e=a.key;a=a.props;if("function"===typeof d)var f=d.prototype&&d.prototype.isReactComponent?2:0;else if("string"===typeof d)f=5;else switch(d){case hc:return xf(a.children,b,c,e);case oc:f=11;b|=3;break;case ic:f=11;b|=2;break;case jc:return d=new uf(15,a,e,b|4),d.type=jc,d.expirationTime=c,d;case qc:f=16;b|=2;break;default:a:{switch("object"===typeof d&&null!==d?d.$$typeof:null){case mc:f=13;break a;case nc:f=12;break a;case pc:f=14;break a;default:A$1("130",null==d?
	d:typeof d,"");}f=void 0;}}b=new uf(f,a,e,b);b.type=d;b.expirationTime=c;return b}function xf(a,b,c,d){a=new uf(10,a,d,b);a.expirationTime=c;return a}function yf(a,b,c){a=new uf(6,a,null,b);a.expirationTime=c;return a}function zf(a,b,c){b=new uf(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function Af(a,b,c){b=new uf(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:c,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null};return b.stateNode=a}var Bf=null,Cf=null;function Df(a){return function(b){try{return a(b)}catch(c){}}}
	function Ef(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);Bf=Df(function(a){return b.onCommitFiberRoot(c,a)});Cf=Df(function(a){return b.onCommitFiberUnmount(c,a)});}catch(d){}return !0}function Ff(a){"function"===typeof Bf&&Bf(a);}function Gf(a){"function"===typeof Cf&&Cf(a);}var Hf=!1;
	function If(a){return {expirationTime:0,baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Jf(a){return {expirationTime:a.expirationTime,baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
	function Kf(a){return {expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Lf(a,b,c){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);if(0===a.expirationTime||a.expirationTime>c)a.expirationTime=c;}
	function Mf(a,b,c){var d=a.alternate;if(null===d){var e=a.updateQueue;var f=null;null===e&&(e=a.updateQueue=If(a.memoizedState));}else e=a.updateQueue,f=d.updateQueue,null===e?null===f?(e=a.updateQueue=If(a.memoizedState),f=d.updateQueue=If(d.memoizedState)):e=a.updateQueue=Jf(f):null===f&&(f=d.updateQueue=Jf(e));null===f||e===f?Lf(e,b,c):null===e.lastUpdate||null===f.lastUpdate?(Lf(e,b,c),Lf(f,b,c)):(Lf(e,b,c),f.lastUpdate=b);}
	function Nf(a,b,c){var d=a.updateQueue;d=null===d?a.updateQueue=If(a.memoizedState):Of(a,d);null===d.lastCapturedUpdate?d.firstCapturedUpdate=d.lastCapturedUpdate=b:(d.lastCapturedUpdate.next=b,d.lastCapturedUpdate=b);if(0===d.expirationTime||d.expirationTime>c)d.expirationTime=c;}function Of(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Jf(b));return b}
	function Pf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return objectAssign({},d,e);case 2:Hf=!0;}return d}
	function Qf(a,b,c,d,e){Hf=!1;if(!(0===b.expirationTime||b.expirationTime>e)){b=Of(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,n=f;null!==k;){var r=k.expirationTime;if(r>e){if(null===g&&(g=k,f=n),0===h||h>r)h=r;}else n=Pf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next;}r=null;for(k=b.firstCapturedUpdate;null!==k;){var w=k.expirationTime;if(w>e){if(null===r&&(r=k,null===
	g&&(f=n)),0===h||h>w)h=w;}else n=Pf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next;}null===g&&(b.lastUpdate=null);null===r?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===r&&(f=n);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=r;b.expirationTime=h;a.memoizedState=n;}}
	function Rf(a,b){"function"!==typeof a?A$1("191",a):void 0;a.call(b);}
	function Sf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);a=b.firstEffect;for(b.firstEffect=b.lastEffect=null;null!==a;){var d=a.callback;null!==d&&(a.callback=null,Rf(d,c));a=a.nextEffect;}a=b.firstCapturedEffect;for(b.firstCapturedEffect=b.lastCapturedEffect=null;null!==a;)b=a.callback,null!==b&&(a.callback=null,Rf(b,c)),a=a.nextEffect;}
	function Tf(a,b){return {value:a,source:b,stack:vc(b)}}var Uf=hf(null),Vf=hf(null),Wf=hf(0);function Xf(a){var b=a.type._context;N$1(Wf,b._changedBits,a);N$1(Vf,b._currentValue,a);N$1(Uf,a,a);b._currentValue=a.pendingProps.value;b._changedBits=a.stateNode;}function Yf(a){var b=Wf.current,c=Vf.current;M$1(Uf,a);M$1(Vf,a);M$1(Wf,a);a=a.type._context;a._currentValue=c;a._changedBits=b;}var Zf={},$f=hf(Zf),ag=hf(Zf),bg=hf(Zf);function cg(a){a===Zf?A$1("174"):void 0;return a}
	function dg(a,b){N$1(bg,b,a);N$1(ag,a,a);N$1($f,Zf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:De(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=De(b,c);}M$1($f,a);N$1($f,b,a);}function eg(a){M$1($f,a);M$1(ag,a);M$1(bg,a);}function fg(a){ag.current===a&&(M$1($f,a),M$1(ag,a));}function hg(a,b,c){var d=a.memoizedState;b=b(c,d);d=null===b||void 0===b?d:objectAssign({},d,b);a.memoizedState=d;a=a.updateQueue;null!==a&&0===a.expirationTime&&(a.baseState=d);}
	var lg={isMounted:function(a){return (a=a._reactInternalFiber)?2===id(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ig();d=jg(d,a);var e=Kf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Mf(a,e,d);kg(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ig();d=jg(d,a);var e=Kf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Mf(a,e,d);kg(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ig();c=jg(c,a);var d=Kf(c);d.tag=2;void 0!==
	b&&null!==b&&(d.callback=b);Mf(a,d,c);kg(a,c);}};function mg(a,b,c,d,e,f){var g=a.stateNode;a=a.type;return "function"===typeof g.shouldComponentUpdate?g.shouldComponentUpdate(c,e,f):a.prototype&&a.prototype.isPureReactComponent?!shallowEqual_1(b,c)||!shallowEqual_1(d,e):!0}
	function ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&lg.enqueueReplaceState(b,b.state,null);}
	function og(a,b){var c=a.type,d=a.stateNode,e=a.pendingProps,f=lf(a);d.props=e;d.state=a.memoizedState;d.refs=emptyObject_1;d.context=nf(a,f);f=a.updateQueue;null!==f&&(Qf(a,f,e,d,b),d.state=a.memoizedState);f=a.type.getDerivedStateFromProps;"function"===typeof f&&(hg(a,f,e),d.state=a.memoizedState);"function"===typeof c.getDerivedStateFromProps||"function"===typeof d.getSnapshotBeforeUpdate||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||(c=d.state,"function"===typeof d.componentWillMount&&
	d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount(),c!==d.state&&lg.enqueueReplaceState(d,d.state,null),f=a.updateQueue,null!==f&&(Qf(a,f,e,d,b),d.state=a.memoizedState));"function"===typeof d.componentDidMount&&(a.effectTag|=4);}var pg=Array.isArray;
	function qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag?A$1("110"):void 0,d=c.stateNode);d?void 0:A$1("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs===emptyObject_1?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}"string"!==typeof a?A$1("148"):void 0;c._owner?void 0:A$1("254",a);}return a}
	function rg(a,b){"textarea"!==a.type&&A$1("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
	function sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=vf(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
	2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=yf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=qg(a,b,c),d.return=a,d;d=wf(c,a.mode,d);d.ref=qg(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
	zf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function r(a,b,c,d,f){if(null===b||10!==b.tag)return b=xf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function w(a,b,c){if("string"===typeof b||"number"===typeof b)return b=yf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case fc:return c=wf(b,a.mode,c),c.ref=qg(a,null,b),c.return=a,c;case gc:return b=zf(b,a.mode,c),b.return=a,b}if(pg(b)||sc(b))return b=xf(b,a.mode,c,null),b.return=
	a,b;rg(a,b);}return null}function P(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case fc:return c.key===e?c.type===hc?r(a,b,c.props.children,d,e):k(a,b,c,d):null;case gc:return c.key===e?n(a,b,c,d):null}if(pg(c)||sc(c))return null!==e?null:r(a,b,c,d,null);rg(a,c);}return null}function kc(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
	if("object"===typeof d&&null!==d){switch(d.$$typeof){case fc:return a=a.get(null===d.key?c:d.key)||null,d.type===hc?r(b,a,d.props.children,e,d.key):k(b,a,d,e);case gc:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(pg(d)||sc(d))return a=a.get(c)||null,r(b,a,d,e,null);rg(b,d);}return null}function Hd(e,g,h,k){for(var u=null,x=null,t=g,q=g=0,n=null;null!==t&&q<h.length;q++){t.index>q?(n=t,t=null):n=t.sibling;var l=P(e,t,h[q],k);if(null===l){null===t&&(t=n);break}a&&t&&null===l.alternate&&b(e,
	t);g=f(l,g,q);null===x?u=l:x.sibling=l;x=l;t=n;}if(q===h.length)return c(e,t),u;if(null===t){for(;q<h.length;q++)if(t=w(e,h[q],k))g=f(t,g,q),null===x?u=t:x.sibling=t,x=t;return u}for(t=d(e,t);q<h.length;q++)if(n=kc(t,e,q,h[q],k))a&&null!==n.alternate&&t.delete(null===n.key?q:n.key),g=f(n,g,q),null===x?u=n:x.sibling=n,x=n;a&&t.forEach(function(a){return b(e,a)});return u}function E(e,g,h,k){var t=sc(h);"function"!==typeof t?A$1("150"):void 0;h=t.call(h);null==h?A$1("151"):void 0;for(var u=t=null,n=g,x=
	g=0,y=null,l=h.next();null!==n&&!l.done;x++,l=h.next()){n.index>x?(y=n,n=null):y=n.sibling;var r=P(e,n,l.value,k);if(null===r){n||(n=y);break}a&&n&&null===r.alternate&&b(e,n);g=f(r,g,x);null===u?t=r:u.sibling=r;u=r;n=y;}if(l.done)return c(e,n),t;if(null===n){for(;!l.done;x++,l=h.next())l=w(e,l.value,k),null!==l&&(g=f(l,g,x),null===u?t=l:u.sibling=l,u=l);return t}for(n=d(e,n);!l.done;x++,l=h.next())l=kc(n,e,x,l.value,k),null!==l&&(a&&null!==l.alternate&&n.delete(null===l.key?x:l.key),g=f(l,g,x),null===
	u?t=l:u.sibling=l,u=l);a&&n.forEach(function(a){return b(e,a)});return t}return function(a,d,f,h){"object"===typeof f&&null!==f&&f.type===hc&&null===f.key&&(f=f.props.children);var k="object"===typeof f&&null!==f;if(k)switch(f.$$typeof){case fc:a:{var n=f.key;for(k=d;null!==k;){if(k.key===n)if(10===k.tag?f.type===hc:k.type===f.type){c(a,k.sibling);d=e(k,f.type===hc?f.props.children:f.props,h);d.ref=qg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling;}f.type===hc?(d=xf(f.props.children,
	a.mode,h,f.key),d.return=a,a=d):(h=wf(f,a.mode,h),h.ref=qg(a,d,f),h.return=a,a=h);}return g(a);case gc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling;}d=zf(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
	a,a=d):(c(a,d),d=yf(f,a.mode,h),d.return=a,a=d),g(a);if(pg(f))return Hd(a,d,f,h);if(sc(f))return E(a,d,f,h);k&&rg(a,f);if("undefined"===typeof f)switch(a.tag){case 2:case 1:h=a.type,A$1("152",h.displayName||h.name||"Component");}return c(a,d)}}var tg=sg(!0),ug=sg(!1),vg=null,wg=null,xg=!1;function yg(a,b){var c=new uf(5,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}
	function zg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return !1}}function Ag(a){if(xg){var b=wg;if(b){var c=b;if(!zg(a,b)){b=df(c);if(!b||!zg(a,b)){a.effectTag|=2;xg=!1;vg=a;return}yg(vg,c);}vg=a;wg=ef(b);}else a.effectTag|=2,xg=!1,vg=a;}}
	function Bg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;vg=a;}function Cg(a){if(a!==vg)return !1;if(!xg)return Bg(a),xg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!$e(b,a.memoizedProps))for(b=wg;b;)yg(a,b),b=df(b);Bg(a);wg=vg?df(a.stateNode):null;return !0}function Dg(){wg=vg=null;xg=!1;}function Q$1(a,b,c){Eg(a,b,c,b.expirationTime);}function Eg(a,b,c,d){b.child=null===a?ug(b,null,c,d):tg(b,a.child,c,d);}
	function Fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function Gg(a,b,c,d,e){Fg(a,b);var f=0!==(b.effectTag&64);if(!c&&!f)return d&&tf(b,!1),R$1(a,b);c=b.stateNode;ec.current=b;var g=f?null:c.render();b.effectTag|=1;f&&(Eg(a,b,null,e),b.child=null);Eg(a,b,g,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&tf(b,!0);return b.child}
	function Hg(a){var b=a.stateNode;b.pendingContext?qf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&qf(a,b.context,!1);dg(a,b.containerInfo);}
	function Ig(a,b,c,d){var e=a.child;null!==e&&(e.return=a);for(;null!==e;){switch(e.tag){case 12:var f=e.stateNode|0;if(e.type===b&&0!==(f&c)){for(f=e;null!==f;){var g=f.alternate;if(0===f.expirationTime||f.expirationTime>d)f.expirationTime=d,null!==g&&(0===g.expirationTime||g.expirationTime>d)&&(g.expirationTime=d);else if(null!==g&&(0===g.expirationTime||g.expirationTime>d))g.expirationTime=d;else break;f=f.return;}f=null;}else f=e.child;break;case 13:f=e.type===a.type?null:e.child;break;default:f=
	e.child;}if(null!==f)f.return=e;else for(f=e;null!==f;){if(f===a){f=null;break}e=f.sibling;if(null!==e){e.return=f.return;f=e;break}f=f.return;}e=f;}}
	function Jg(a,b,c){var d=b.type._context,e=b.pendingProps,f=b.memoizedProps,g=!0;if(O$1.current)g=!1;else if(f===e)return b.stateNode=0,Xf(b),R$1(a,b);var h=e.value;b.memoizedProps=e;if(null===f)h=1073741823;else if(f.value===e.value){if(f.children===e.children&&g)return b.stateNode=0,Xf(b),R$1(a,b);h=0;}else{var k=f.value;if(k===h&&(0!==k||1/k===1/h)||k!==k&&h!==h){if(f.children===e.children&&g)return b.stateNode=0,Xf(b),R$1(a,b);h=0;}else if(h="function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,
	h):1073741823,h|=0,0===h){if(f.children===e.children&&g)return b.stateNode=0,Xf(b),R$1(a,b)}else Ig(b,d,h,c);}b.stateNode=h;Xf(b);Q$1(a,b,e.children);return b.child}function R$1(a,b){null!==a&&b.child!==a.child?A$1("153"):void 0;if(null!==b.child){a=b.child;var c=vf(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=vf(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null;}return b.child}
	function Kg(a,b,c){if(0===b.expirationTime||b.expirationTime>c){switch(b.tag){case 3:Hg(b);break;case 2:sf(b);break;case 4:dg(b,b.stateNode.containerInfo);break;case 13:Xf(b);}return null}switch(b.tag){case 0:null!==a?A$1("155"):void 0;var d=b.type,e=b.pendingProps,f=lf(b);f=nf(b,f);d=d(e,f);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof?(f=b.type,b.tag=2,b.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,f=f.getDerivedStateFromProps,"function"===
	typeof f&&hg(b,f,e),e=sf(b),d.updater=lg,b.stateNode=d,d._reactInternalFiber=b,og(b,c),a=Gg(a,b,!0,e,c)):(b.tag=1,Q$1(a,b,d),b.memoizedProps=e,a=b.child);return a;case 1:return e=b.type,c=b.pendingProps,O$1.current||b.memoizedProps!==c?(d=lf(b),d=nf(b,d),e=e(c,d),b.effectTag|=1,Q$1(a,b,e),b.memoizedProps=c,a=b.child):a=R$1(a,b),a;case 2:e=sf(b);if(null===a)if(null===b.stateNode){var g=b.pendingProps,h=b.type;d=lf(b);var k=2===b.tag&&null!=b.type.contextTypes;f=k?nf(b,d):emptyObject_1;g=new h(g,f);b.memoizedState=null!==
	g.state&&void 0!==g.state?g.state:null;g.updater=lg;b.stateNode=g;g._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=d,k.__reactInternalMemoizedMaskedChildContext=f);og(b,c);d=!0;}else{h=b.type;d=b.stateNode;k=b.memoizedProps;f=b.pendingProps;d.props=k;var n=d.context;g=lf(b);g=nf(b,g);var r=h.getDerivedStateFromProps;(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
	(k!==f||n!==g)&&ng(b,d,f,g);Hf=!1;var w=b.memoizedState;n=d.state=w;var P=b.updateQueue;null!==P&&(Qf(b,P,f,d,c),n=b.memoizedState);k!==f||w!==n||O$1.current||Hf?("function"===typeof r&&(hg(b,r,f),n=b.memoizedState),(k=Hf||mg(b,k,f,w,n,g))?(h||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||("function"===typeof d.componentWillMount&&d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount()),"function"===typeof d.componentDidMount&&
	(b.effectTag|=4)):("function"===typeof d.componentDidMount&&(b.effectTag|=4),b.memoizedProps=f,b.memoizedState=n),d.props=f,d.state=n,d.context=g,d=k):("function"===typeof d.componentDidMount&&(b.effectTag|=4),d=!1);}else h=b.type,d=b.stateNode,f=b.memoizedProps,k=b.pendingProps,d.props=f,n=d.context,g=lf(b),g=nf(b,g),r=h.getDerivedStateFromProps,(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
	(f!==k||n!==g)&&ng(b,d,k,g),Hf=!1,n=b.memoizedState,w=d.state=n,P=b.updateQueue,null!==P&&(Qf(b,P,k,d,c),w=b.memoizedState),f!==k||n!==w||O$1.current||Hf?("function"===typeof r&&(hg(b,r,k),w=b.memoizedState),(r=Hf||mg(b,f,k,n,w,g))?(h||"function"!==typeof d.UNSAFE_componentWillUpdate&&"function"!==typeof d.componentWillUpdate||("function"===typeof d.componentWillUpdate&&d.componentWillUpdate(k,w,g),"function"===typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(k,w,g)),"function"===typeof d.componentDidUpdate&&
	(b.effectTag|=4),"function"===typeof d.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),b.memoizedProps=k,b.memoizedState=w),d.props=k,d.state=w,d.context=g,d=r):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||
	f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),d=!1);return Gg(a,b,d,e,c);case 3:Hg(b);e=b.updateQueue;if(null!==e)if(d=b.memoizedState,d=null!==d?d.element:null,Qf(b,e,b.pendingProps,null,c),e=b.memoizedState.element,e===d)Dg(),a=R$1(a,b);else{d=b.stateNode;if(d=(null===a||null===a.child)&&d.hydrate)wg=ef(b.stateNode.containerInfo),vg=b,d=xg=!0;d?(b.effectTag|=2,b.child=ug(b,null,e,c)):(Dg(),Q$1(a,b,e));a=b.child;}else Dg(),a=R$1(a,b);return a;case 5:a:{cg(bg.current);e=cg($f.current);d=De(e,
	b.type);e!==d&&(N$1(ag,b,b),N$1($f,d,b));null===a&&Ag(b);e=b.type;k=b.memoizedProps;d=b.pendingProps;f=null!==a?a.memoizedProps:null;if(!O$1.current&&k===d){if(k=b.mode&1&&!!d.hidden)b.expirationTime=1073741823;if(!k||1073741823!==c){a=R$1(a,b);break a}}k=d.children;$e(e,d)?k=null:f&&$e(e,f)&&(b.effectTag|=16);Fg(a,b);1073741823!==c&&b.mode&1&&d.hidden?(b.expirationTime=1073741823,b.memoizedProps=d,a=null):(Q$1(a,b,k),b.memoizedProps=d,a=b.child);}return a;case 6:return null===a&&Ag(b),b.memoizedProps=b.pendingProps,
	null;case 16:return null;case 4:return dg(b,b.stateNode.containerInfo),e=b.pendingProps,O$1.current||b.memoizedProps!==e?(null===a?b.child=tg(b,null,e,c):Q$1(a,b,e),b.memoizedProps=e,a=b.child):a=R$1(a,b),a;case 14:return e=b.type.render,c=b.pendingProps,d=b.ref,O$1.current||b.memoizedProps!==c||d!==(null!==a?a.ref:null)?(e=e(c,d),Q$1(a,b,e),b.memoizedProps=c,a=b.child):a=R$1(a,b),a;case 10:return c=b.pendingProps,O$1.current||b.memoizedProps!==c?(Q$1(a,b,c),b.memoizedProps=c,a=b.child):a=R$1(a,b),a;case 11:return c=
	b.pendingProps.children,O$1.current||null!==c&&b.memoizedProps!==c?(Q$1(a,b,c),b.memoizedProps=c,a=b.child):a=R$1(a,b),a;case 15:return c=b.pendingProps,b.memoizedProps===c?a=R$1(a,b):(Q$1(a,b,c.children),b.memoizedProps=c,a=b.child),a;case 13:return Jg(a,b,c);case 12:a:if(d=b.type,f=b.pendingProps,k=b.memoizedProps,e=d._currentValue,g=d._changedBits,O$1.current||0!==g||k!==f){b.memoizedProps=f;h=f.unstable_observedBits;if(void 0===h||null===h)h=1073741823;b.stateNode=h;if(0!==(g&h))Ig(b,d,g,c);else if(k===f){a=
	R$1(a,b);break a}c=f.children;c=c(e);b.effectTag|=1;Q$1(a,b,c);a=b.child;}else a=R$1(a,b);return a;default:A$1("156");}}function Lg(a){a.effectTag|=4;}var Pg=void 0,Qg=void 0,Rg=void 0;Pg=function(){};Qg=function(a,b,c){(b.updateQueue=c)&&Lg(b);};Rg=function(a,b,c,d){c!==d&&Lg(b);};
	function Sg(a,b){var c=b.pendingProps;switch(b.tag){case 1:return null;case 2:return of(b),null;case 3:eg(b);pf(b);var d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Cg(b),b.effectTag&=-3;Pg(b);return null;case 5:fg(b);d=cg(bg.current);var e=b.type;if(null!==a&&null!=b.stateNode){var f=a.memoizedProps,g=b.stateNode,h=cg($f.current);g=Se(g,e,f,c,d);Qg(a,b,g,e,f,c,d,h);a.ref!==b.ref&&(b.effectTag|=128);}else{if(!c)return null===b.stateNode?
	A$1("166"):void 0,null;a=cg($f.current);if(Cg(b))c=b.stateNode,e=b.type,f=b.memoizedProps,c[C$1]=b,c[Ma]=f,d=Ue(c,e,f,a,d),b.updateQueue=d,null!==d&&Lg(b);else{a=Pe(e,c,d,a);a[C$1]=b;a[Ma]=c;a:for(f=b.child;null!==f;){if(5===f.tag||6===f.tag)a.appendChild(f.stateNode);else if(4!==f.tag&&null!==f.child){f.child.return=f;f=f.child;continue}if(f===b)break;for(;null===f.sibling;){if(null===f.return||f.return===b)break a;f=f.return;}f.sibling.return=f.return;f=f.sibling;}Re(a,e,c,d);Ze(e,c)&&Lg(b);b.stateNode=
	a;}null!==b.ref&&(b.effectTag|=128);}return null;case 6:if(a&&null!=b.stateNode)Rg(a,b,a.memoizedProps,c);else{if("string"!==typeof c)return null===b.stateNode?A$1("166"):void 0,null;d=cg(bg.current);cg($f.current);Cg(b)?(d=b.stateNode,c=b.memoizedProps,d[C$1]=b,Ve(d,c)&&Lg(b)):(d=Qe(c,d),d[C$1]=b,b.stateNode=d);}return null;case 14:return null;case 16:return null;case 10:return null;case 11:return null;case 15:return null;case 4:return eg(b),Pg(b),null;case 13:return Yf(b),null;case 12:return null;case 0:A$1("167");
	default:A$1("156");}}function Tg(a,b){var c=b.source;null===b.stack&&null!==c&&vc(c);null!==c&&tc(c);b=b.value;null!==a&&2===a.tag&&tc(a);try{b&&b.suppressReactErrorLogging||console.error(b);}catch(d){d&&d.suppressReactErrorLogging||console.error(d);}}function Ug(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Vg(a,c);}else b.current=null;}
	function Wg(a){"function"===typeof Gf&&Gf(a);switch(a.tag){case 2:Ug(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(c){Vg(a,c);}break;case 5:Ug(a);break;case 4:Xg(a);}}function Yg(a){return 5===a.tag||3===a.tag||4===a.tag}
	function Zg(a){a:{for(var b=a.return;null!==b;){if(Yg(b)){var c=b;break a}b=b.return;}A$1("160");c=void 0;}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:A$1("161");}c.effectTag&16&&(Ge(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Yg(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
	if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h);}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?f.parentNode.insertBefore(g,f):f.appendChild(g)):b.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===
	e.sibling;){if(null===e.return||e.return===a)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}}
	function Xg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?A$1("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return;}c=!0;}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Wg(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return;}g.sibling.return=g.return;g=g.sibling;}e?
	(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode);}else if(4===b.tag?d=b.stateNode.containerInfo:Wg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1);}b.sibling.return=b.return;b=b.sibling;}}
	function $g(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&(c[Ma]=d,Te(c,f,e,a,d));}break;case 6:null===b.stateNode?A$1("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 15:break;case 16:break;default:A$1("163");}}function ah(a,b,c){c=Kf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){bh(d);Tg(a,b);};return c}
	function ch(a,b,c){c=Kf(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===dh?dh=new Set([this]):dh.add(this);var c=b.value,d=b.stack;Tg(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""});});return c}
	function eh(a,b,c,d,e,f){c.effectTag|=512;c.firstEffect=c.lastEffect=null;d=Tf(d,c);a=b;do{switch(a.tag){case 3:a.effectTag|=1024;d=ah(a,d,f);Nf(a,d,f);return;case 2:if(b=d,c=a.stateNode,0===(a.effectTag&64)&&null!==c&&"function"===typeof c.componentDidCatch&&(null===dh||!dh.has(c))){a.effectTag|=1024;d=ch(a,b,f);Nf(a,d,f);return}}a=a.return;}while(null!==a)}
	function fh(a){switch(a.tag){case 2:of(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return eg(a),pf(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return fg(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 4:return eg(a),null;case 13:return Yf(a),null;default:return null}}var gh=af(),hh=2,ih=gh,jh=0,kh=0,lh=!1,S$1=null,mh=null,T$1=0,nh=-1,oh=!1,U$1=null,ph=!1,qh=!1,dh=null;
	function rh(){if(null!==S$1)for(var a=S$1.return;null!==a;){var b=a;switch(b.tag){case 2:of(b);break;case 3:eg(b);pf(b);break;case 5:fg(b);break;case 4:eg(b);break;case 13:Yf(b);}a=a.return;}mh=null;T$1=0;nh=-1;oh=!1;S$1=null;qh=!1;}
	function sh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){b=Sg(b,a,T$1);var e=a;if(1073741823===T$1||1073741823!==e.expirationTime){var f=0;switch(e.tag){case 3:case 2:var g=e.updateQueue;null!==g&&(f=g.expirationTime);}for(g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f;}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
	(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{qh=!0;break}}else{a=fh(a,oh,T$1);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512);if(null!==d)return d;if(null!==c)a=c;else break}}return null}
	function th(a){var b=Kg(a.alternate,a,T$1);null===b&&(b=sh(a));ec.current=null;return b}
	function uh(a,b,c){lh?A$1("243"):void 0;lh=!0;if(b!==T$1||a!==mh||null===S$1)rh(),mh=a,T$1=b,nh=-1,S$1=vf(mh.current,null,T$1),a.pendingCommitExpirationTime=0;var d=!1;oh=!c||T$1<=hh;do{try{if(c)for(;null!==S$1&&!vh();)S$1=th(S$1);else for(;null!==S$1;)S$1=th(S$1);}catch(f){if(null===S$1)d=!0,bh(f);else{null===S$1?A$1("271"):void 0;c=S$1;var e=c.return;if(null===e){d=!0;bh(f);break}eh(a,e,c,f,oh,T$1,ih);S$1=sh(c);}}break}while(1);lh=!1;if(d)return null;if(null===S$1){if(qh)return a.pendingCommitExpirationTime=b,a.current.alternate;oh?A$1("262"):
	void 0;0<=nh&&setTimeout(function(){var b=a.current.expirationTime;0!==b&&(0===a.remainingExpirationTime||a.remainingExpirationTime<b)&&wh(a,b);},nh);xh(a.current.expirationTime);}return null}
	function Vg(a,b){var c;a:{lh&&!ph?A$1("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===dh||!dh.has(d))){a=Tf(b,a);a=ch(c,a,1);Mf(c,a,1);kg(c,1);c=void 0;break a}break;case 3:a=Tf(b,a);a=ah(c,a,1);Mf(c,a,1);kg(c,1);c=void 0;break a}c=c.return;}3===a.tag&&(c=Tf(b,a),c=ah(a,c,1),Mf(a,c,1),kg(a,1));c=void 0;}return c}
	function yh(){var a=2+25*(((ig()-2+500)/25|0)+1);a<=jh&&(a=jh+1);return jh=a}function jg(a,b){a=0!==kh?kh:lh?ph?1:T$1:b.mode&1?zh?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1):1;zh&&(0===Ah||a>Ah)&&(Ah=a);return a}
	function kg(a,b){for(;null!==a;){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a.return)if(3===a.tag){var c=a.stateNode;!lh&&0!==T$1&&b<T$1&&rh();var d=c.current.expirationTime;lh&&!ph&&mh===c||wh(c,d);Bh>Ch&&A$1("185");}else break;a=a.return;}}function ig(){ih=af()-gh;return hh=(ih/10|0)+2}
	function Dh(a){var b=kh;kh=2+25*(((ig()-2+500)/25|0)+1);try{return a()}finally{kh=b;}}function Eh(a,b,c,d,e){var f=kh;kh=1;try{return a(b,c,d,e)}finally{kh=f;}}var Fh=null,V$1=null,Gh=0,Hh=-1,W$1=!1,X$1=null,Y$1=0,Ah=0,Ih=!1,Jh=!1,Kh=null,Lh=null,Z$1=!1,Mh=!1,zh=!1,Nh=null,Ch=1E3,Bh=0,Oh=1;function Ph(a){if(0!==Gh){if(a>Gh)return;cf(Hh);}var b=af()-gh;Gh=a;Hh=bf(Qh,{timeout:10*(a-2)-b});}
	function wh(a,b){if(null===a.nextScheduledRoot)a.remainingExpirationTime=b,null===V$1?(Fh=V$1=a,a.nextScheduledRoot=a):(V$1=V$1.nextScheduledRoot=a,V$1.nextScheduledRoot=Fh);else{var c=a.remainingExpirationTime;if(0===c||b<c)a.remainingExpirationTime=b;}W$1||(Z$1?Mh&&(X$1=a,Y$1=1,Rh(a,1,!1)):1===b?Sh():Ph(b));}
	function Th(){var a=0,b=null;if(null!==V$1)for(var c=V$1,d=Fh;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===V$1?A$1("244"):void 0;if(d===d.nextScheduledRoot){Fh=V$1=d.nextScheduledRoot=null;break}else if(d===Fh)Fh=e=d.nextScheduledRoot,V$1.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V$1){V$1=c;V$1.nextScheduledRoot=Fh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot;}else{if(0===a||e<a)a=e,b=d;if(d===V$1)break;
	c=d;d=d.nextScheduledRoot;}}c=X$1;null!==c&&c===b&&1===a?Bh++:Bh=0;X$1=b;Y$1=a;}function Qh(a){Uh(0,!0,a);}function Sh(){Uh(1,!1,null);}function Uh(a,b,c){Lh=c;Th();if(b)for(;null!==X$1&&0!==Y$1&&(0===a||a>=Y$1)&&(!Ih||ig()>=Y$1);)ig(),Rh(X$1,Y$1,!Ih),Th();else for(;null!==X$1&&0!==Y$1&&(0===a||a>=Y$1);)Rh(X$1,Y$1,!1),Th();null!==Lh&&(Gh=0,Hh=-1);0!==Y$1&&Ph(Y$1);Lh=null;Ih=!1;Vh();}function Wh(a,b){W$1?A$1("253"):void 0;X$1=a;Y$1=b;Rh(a,b,!1);Sh();Vh();}
	function Vh(){Bh=0;if(null!==Nh){var a=Nh;Nh=null;for(var b=0;b<a.length;b++){var c=a[b];try{c._onComplete();}catch(d){Jh||(Jh=!0,Kh=d);}}}if(Jh)throw a=Kh,Kh=null,Jh=!1,a;}function Rh(a,b,c){W$1?A$1("245"):void 0;W$1=!0;c?(c=a.finishedWork,null!==c?Xh(a,c,b):(a.finishedWork=null,c=uh(a,b,!0),null!==c&&(vh()?a.finishedWork=c:Xh(a,c,b)))):(c=a.finishedWork,null!==c?Xh(a,c,b):(a.finishedWork=null,c=uh(a,b,!1),null!==c&&Xh(a,c,b)));W$1=!1;}
	function Xh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===Nh?Nh=[d]:Nh.push(d),d._defer)){a.finishedWork=b;a.remainingExpirationTime=0;return}a.finishedWork=null;ph=lh=!0;c=b.stateNode;c.current===b?A$1("177"):void 0;d=c.pendingCommitExpirationTime;0===d?A$1("261"):void 0;c.pendingCommitExpirationTime=0;ig();ec.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var e=b.firstEffect;}else e=b;else e=b.firstEffect;Xe=Gd;var f=getActiveElement_1();if(Td(f)){if("selectionStart"in
	f)var g={start:f.selectionStart,end:f.selectionEnd};else a:{var h=window.getSelection&&window.getSelection();if(h&&0!==h.rangeCount){g=h.anchorNode;var k=h.anchorOffset,n=h.focusNode;h=h.focusOffset;try{g.nodeType,n.nodeType;}catch(Wa){g=null;break a}var r=0,w=-1,P=-1,kc=0,Hd=0,E=f,t=null;b:for(;;){for(var x;;){E!==g||0!==k&&3!==E.nodeType||(w=r+k);E!==n||0!==h&&3!==E.nodeType||(P=r+h);3===E.nodeType&&(r+=E.nodeValue.length);if(null===(x=E.firstChild))break;t=E;E=x;}for(;;){if(E===f)break b;t===g&&
	++kc===k&&(w=r);t===n&&++Hd===h&&(P=r);if(null!==(x=E.nextSibling))break;E=t;t=E.parentNode;}E=x;}g=-1===w||-1===P?null:{start:w,end:P};}else g=null;}g=g||{start:0,end:0};}else g=null;Ye={focusedElem:f,selectionRange:g};Id(!1);for(U$1=e;null!==U$1;){f=!1;g=void 0;try{for(;null!==U$1;){if(U$1.effectTag&256){var u=U$1.alternate;k=U$1;switch(k.tag){case 2:if(k.effectTag&256&&null!==u){var y=u.memoizedProps,D=u.memoizedState,ja=k.stateNode;ja.props=k.memoizedProps;ja.state=k.memoizedState;var hi=ja.getSnapshotBeforeUpdate(y,
	D);ja.__reactInternalSnapshotBeforeUpdate=hi;}break;case 3:case 5:case 6:case 4:break;default:A$1("163");}}U$1=U$1.nextEffect;}}catch(Wa){f=!0,g=Wa;}f&&(null===U$1?A$1("178"):void 0,Vg(U$1,g),null!==U$1&&(U$1=U$1.nextEffect));}for(U$1=e;null!==U$1;){u=!1;y=void 0;try{for(;null!==U$1;){var q=U$1.effectTag;q&16&&Ge(U$1.stateNode,"");if(q&128){var z=U$1.alternate;if(null!==z){var l=z.ref;null!==l&&("function"===typeof l?l(null):l.current=null);}}switch(q&14){case 2:Zg(U$1);U$1.effectTag&=-3;break;case 6:Zg(U$1);U$1.effectTag&=-3;$g(U$1.alternate,
	U$1);break;case 4:$g(U$1.alternate,U$1);break;case 8:D=U$1,Xg(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null);}U$1=U$1.nextEffect;}}catch(Wa){u=!0,y=Wa;}u&&(null===U$1?A$1("178"):void 0,Vg(U$1,y),null!==U$1&&(U$1=U$1.nextEffect));}l=Ye;z=getActiveElement_1();q=l.focusedElem;u=l.selectionRange;if(z!==q&&containsNode_1(document.documentElement,q)){Td(q)&&(z=u.start,l=u.end,void 0===l&&(l=z),"selectionStart"in q?(q.selectionStart=z,q.selectionEnd=Math.min(l,q.value.length)):window.getSelection&&(z=window.getSelection(),
	y=q[lb()].length,l=Math.min(u.start,y),u=void 0===u.end?l:Math.min(u.end,y),!z.extend&&l>u&&(y=u,u=l,l=y),y=Sd(q,l),D=Sd(q,u),y&&D&&(1!==z.rangeCount||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==D.node||z.focusOffset!==D.offset)&&(ja=document.createRange(),ja.setStart(y.node,y.offset),z.removeAllRanges(),l>u?(z.addRange(ja),z.extend(D.node,D.offset)):(ja.setEnd(D.node,D.offset),z.addRange(ja)))));z=[];for(l=q;l=l.parentNode;)1===l.nodeType&&z.push({element:l,left:l.scrollLeft,
	top:l.scrollTop});q.focus();for(q=0;q<z.length;q++)l=z[q],l.element.scrollLeft=l.left,l.element.scrollTop=l.top;}Ye=null;Id(Xe);Xe=null;c.current=b;for(U$1=e;null!==U$1;){e=!1;q=void 0;try{for(z=d;null!==U$1;){var gg=U$1.effectTag;if(gg&36){var lc=U$1.alternate;l=U$1;u=z;switch(l.tag){case 2:var ba=l.stateNode;if(l.effectTag&4)if(null===lc)ba.props=l.memoizedProps,ba.state=l.memoizedState,ba.componentDidMount();else{var ri=lc.memoizedProps,si=lc.memoizedState;ba.props=l.memoizedProps;ba.state=l.memoizedState;
	ba.componentDidUpdate(ri,si,ba.__reactInternalSnapshotBeforeUpdate);}var Mg=l.updateQueue;null!==Mg&&(ba.props=l.memoizedProps,ba.state=l.memoizedState,Sf(l,Mg,ba,u));break;case 3:var Ng=l.updateQueue;if(null!==Ng){y=null;if(null!==l.child)switch(l.child.tag){case 5:y=l.child.stateNode;break;case 2:y=l.child.stateNode;}Sf(l,Ng,y,u);}break;case 5:var ti=l.stateNode;null===lc&&l.effectTag&4&&Ze(l.type,l.memoizedProps)&&ti.focus();break;case 6:break;case 4:break;case 15:break;case 16:break;default:A$1("163");}}if(gg&
	128){l=void 0;var uc=U$1.ref;if(null!==uc){var Og=U$1.stateNode;switch(U$1.tag){case 5:l=Og;break;default:l=Og;}"function"===typeof uc?uc(l):uc.current=l;}}var ui=U$1.nextEffect;U$1.nextEffect=null;U$1=ui;}}catch(Wa){e=!0,q=Wa;}e&&(null===U$1?A$1("178"):void 0,Vg(U$1,q),null!==U$1&&(U$1=U$1.nextEffect));}lh=ph=!1;"function"===typeof Ff&&Ff(b.stateNode);b=c.current.expirationTime;0===b&&(dh=null);a.remainingExpirationTime=b;}function vh(){return null===Lh||Lh.timeRemaining()>Oh?!1:Ih=!0}
	function bh(a){null===X$1?A$1("246"):void 0;X$1.remainingExpirationTime=0;Jh||(Jh=!0,Kh=a);}function xh(a){null===X$1?A$1("246"):void 0;X$1.remainingExpirationTime=a;}function Yh(a,b){var c=Z$1;Z$1=!0;try{return a(b)}finally{(Z$1=c)||W$1||Sh();}}function Zh(a,b){if(Z$1&&!Mh){Mh=!0;try{return a(b)}finally{Mh=!1;}}return a(b)}function $h(a,b){W$1?A$1("187"):void 0;var c=Z$1;Z$1=!0;try{return Eh(a,b)}finally{Z$1=c,Sh();}}function ai(a){var b=Z$1;Z$1=!0;try{Eh(a);}finally{(Z$1=b)||W$1||Uh(1,!1,null);}}
	function bi(a,b,c,d,e){var f=b.current;if(c){c=c._reactInternalFiber;var g;b:{2===id(c)&&2===c.tag?void 0:A$1("170");for(g=c;3!==g.tag;){if(mf(g)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}(g=g.return)?void 0:A$1("171");}g=g.stateNode.context;}c=mf(c)?rf(c,g):g;}else c=emptyObject_1;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Kf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Mf(f,e,d);kg(f,d);return d}
	function ci(a){var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?A$1("188"):A$1("268",Object.keys(a)));a=ld(b);return null===a?null:a.stateNode}function di(a,b,c,d){var e=b.current,f=ig();e=jg(f,e);return bi(a,b,c,e,d)}function ei(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}
	function fi(a){var b=a.findFiberByHostInstance;return Ef(objectAssign({},a,{findHostInstanceByFiber:function(a){a=ld(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))}
	var gi={updateContainerAtExpirationTime:bi,createContainer:function(a,b,c){return Af(a,b,c)},updateContainer:di,flushRoot:Wh,requestWork:wh,computeUniqueAsyncExpiration:yh,batchedUpdates:Yh,unbatchedUpdates:Zh,deferredUpdates:Dh,syncUpdates:Eh,interactiveUpdates:function(a,b,c){if(zh)return a(b,c);Z$1||W$1||0===Ah||(Uh(Ah,!1,null),Ah=0);var d=zh,e=Z$1;Z$1=zh=!0;try{return a(b,c)}finally{zh=d,(Z$1=e)||W$1||Sh();}},flushInteractiveUpdates:function(){W$1||0===Ah||(Uh(Ah,!1,null),Ah=0);},flushControlled:ai,flushSync:$h,
	getPublicRootInstance:ei,findHostInstance:ci,findHostInstanceWithNoPortals:function(a){a=md(a);return null===a?null:a.stateNode},injectIntoDevTools:fi};function ii(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:gc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}Kb.injectFiberControlledHostComponent(We);
	function ji(a){this._expirationTime=yh();this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0;}ji.prototype.render=function(a){this._defer?void 0:A$1("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new ki;bi(a,b,null,c,d._onCommit);return d};ji.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
	ji.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:A$1("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?A$1("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this;}this._defer=!1;Wh(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children);}else this._next=
	null,this._defer=!1;};ji.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0, a[b])();}};function ki(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this);}ki.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
	ki.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?A$1("191",c):void 0;c();}}};function li(a,b,c){this._internalRoot=Af(a,b,c);}li.prototype.render=function(a,b){var c=this._internalRoot,d=new ki;b=void 0===b?null:b;null!==b&&d.then(b);di(a,c,null,d._onCommit);return d};
	li.prototype.unmount=function(a){var b=this._internalRoot,c=new ki;a=void 0===a?null:a;null!==a&&c.then(a);di(null,b,null,c._onCommit);return c};li.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new ki;c=void 0===c?null:c;null!==c&&e.then(c);di(b,d,a,e._onCommit);return e};
	li.prototype.createBatch=function(){var a=new ji(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a);}return a};function mi(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Sb=gi.batchedUpdates;Tb=gi.interactiveUpdates;Ub=gi.flushInteractiveUpdates;
	function ni(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new li(a,!1,b)}
	function oi(a,b,c,d,e){mi(c)?void 0:A$1("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=ei(f._internalRoot);g.call(a);};}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);}else{f=c._reactRootContainer=ni(c,d);if("function"===typeof e){var h=e;e=function(){var a=ei(f._internalRoot);h.call(a);};}Zh(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);});}return ei(f._internalRoot)}
	function pi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;mi(b)?void 0:A$1("200");return ii(a,b,null,c)}
	var qi={createPortal:pi,findDOMNode:function(a){return null==a?null:1===a.nodeType?a:ci(a)},hydrate:function(a,b,c){return oi(null,a,b,!0,c)},render:function(a,b,c){return oi(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?A$1("38"):void 0;return oi(a,b,c,!1,d)},unmountComponentAtNode:function(a){mi(a)?void 0:A$1("40");return a._reactRootContainer?(Zh(function(){oi(null,null,a,!1,function(){a._reactRootContainer=null;});}),!0):!1},unstable_createPortal:function(){return pi.apply(void 0,
	arguments)},unstable_batchedUpdates:Yh,unstable_deferredUpdates:Dh,flushSync:$h,unstable_flushControlled:ai,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Ka,EventPluginRegistry:va,EventPropagators:$a,ReactControlledComponent:Rb,ReactDOMComponentTree:Qa,ReactDOMEventListener:Md},unstable_createRoot:function(a,b){return new li(a,!0,null!=b&&!0===b.hydrate)}};fi({findFiberByHostInstance:Na,bundleType:0,version:"16.4.0",rendererPackageName:"react-dom"});
	var vi={default:qi},wi=vi&&qi||vi;var reactDom_production_min=wi.default?wi.default:wi;

	var reactDom_development = createCommonjsModule(function (module) {
	});

	var reactDom = createCommonjsModule(function (module) {

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = reactDom_production_min;
	}
	});
	var reactDom_1 = reactDom.render;

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	var warning$2 = function() {};

	var warning_1$1 = warning$2;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant_1(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var invariant$2 = function(condition, format, a, b, c, d, e, f) {

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	var invariant_1$1 = invariant$2;

	function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	var resolvePathname$1 = /*#__PURE__*/Object.freeze({
		default: resolvePathname
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return valueEqual(item, b[index]);
	    });
	  }

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	}

	var valueEqual$1 = /*#__PURE__*/Object.freeze({
		default: valueEqual
	});

	var PathUtils = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};

	var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
	  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
	};

	var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	};

	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;


	  var path = pathname || '/';

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};
	});

	unwrapExports(PathUtils);
	var PathUtils_1 = PathUtils.addLeadingSlash;
	var PathUtils_2 = PathUtils.stripLeadingSlash;
	var PathUtils_3 = PathUtils.hasBasename;
	var PathUtils_4 = PathUtils.stripBasename;
	var PathUtils_5 = PathUtils.stripTrailingSlash;
	var PathUtils_6 = PathUtils.parsePath;
	var PathUtils_7 = PathUtils.createPath;

	var _resolvePathname = ( resolvePathname$1 && resolvePathname ) || resolvePathname$1;

	var _valueEqual = ( valueEqual$1 && valueEqual ) || valueEqual$1;

	var LocationUtils = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);



	var _valueEqual2 = _interopRequireDefault(_valueEqual);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};
	});

	unwrapExports(LocationUtils);
	var LocationUtils_1 = LocationUtils.locationsAreEqual;
	var LocationUtils_2 = LocationUtils.createLocation;

	var createTransitionManager_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _warning2 = _interopRequireDefault(warning_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(fn) {
	    var isActive = true;

	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };

	    listeners.push(listener);

	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	exports.default = createTransitionManager;
	});

	unwrapExports(createTransitionManager_1);

	var DOMUtils = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};
	});

	unwrapExports(DOMUtils);
	var DOMUtils_1 = DOMUtils.canUseDOM;
	var DOMUtils_2 = DOMUtils.addEventListener;
	var DOMUtils_3 = DOMUtils.removeEventListener;
	var DOMUtils_4 = DOMUtils.getConfirmation;
	var DOMUtils_5 = DOMUtils.supportsHistory;
	var DOMUtils_6 = DOMUtils.supportsPopStateOnHashChange;
	var DOMUtils_7 = DOMUtils.supportsGoWithoutReloadUsingHash;
	var DOMUtils_8 = DOMUtils.isExtraneousPopstateEvent;

	var createBrowserHistory_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _warning2 = _interopRequireDefault(warning_1$1);



	var _invariant2 = _interopRequireDefault(invariant_1$1);







	var _createTransitionManager2 = _interopRequireDefault(createTransitionManager_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	};

	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(DOMUtils.canUseDOM, 'Browser history needs a DOM');

	  var globalHistory = window.history;
	  var canUseHistory = (0, DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, DOMUtils.supportsPopStateOnHashChange)();

	  var _props$forceRefresh = props.forceRefresh,
	      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
	      _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var basename = props.basename ? (0, PathUtils.stripTrailingSlash)((0, PathUtils.addLeadingSlash)(props.basename)) : '';

	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;


	    var path = pathname + search + hash;

	    (0, _warning2.default)(!basename || (0, PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, PathUtils.stripBasename)(path, basename);

	    return (0, LocationUtils.createLocation)(path, state, key);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, DOMUtils.isExtraneousPopstateEvent)(event)) return;

	    handlePop(getDOMLocation(event.state));
	  };

	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };

	  var forceNextPop = false;

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allKeys.indexOf(fromLocation.key);

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];

	  // Public interface

	  var createHref = function createHref(location) {
	    return basename + (0, PathUtils.createPath)(location);
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	          nextKeys.push(location.key);
	          allKeys = nextKeys;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

	        window.location.href = href;
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);

	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

	        window.location.replace(href);
	      }
	    });
	  };

	  var go = function go(n) {
	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createBrowserHistory;
	});

	var createHistory = unwrapExports(createBrowserHistory_1);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for putting history on context.
	 */

	var Router = function (_React$Component) {
	  _inherits(Router, _React$Component);

	  function Router() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Router);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props.history.location.pathname)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Router.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        history: this.props.history,
	        route: {
	          location: this.props.history.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Router.prototype.computeMatch = function computeMatch(pathname) {
	    return {
	      path: '/',
	      url: '/',
	      params: {},
	      isExact: pathname === '/'
	    };
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    var _props = this.props,
	        children = _props.children,
	        history = _props.history;


	    invariant_1$1(children == null || react.Children.count(children) === 1, 'A <Router> may have only one child element');

	    // Do this here so we can setState when a <Redirect> changes the
	    // location in componentWillMount. This happens e.g. when doing
	    // server rendering using a <StaticRouter>.
	    this.unlisten = history.listen(function () {
	      _this2.setState({
	        match: _this2.computeMatch(history.location.pathname)
	      });
	    });
	  };

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    warning_1$1(this.props.history === nextProps.history, 'You cannot change <Router history>');
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unlisten();
	  };

	  Router.prototype.render = function render() {
	    var children = this.props.children;

	    return children ? react.Children.only(children) : null;
	  };

	  return Router;
	}(react.Component);

	Router.propTypes = {
	  history: propTypes.object.isRequired,
	  children: propTypes.node
	};
	Router.contextTypes = {
	  router: propTypes.object
	};
	Router.childContextTypes = {
	  router: propTypes.object.isRequired
	};

	// Written in this round about way for babel-transform-imports

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */

	var BrowserRouter = function (_React$Component) {
	  _inherits$1(BrowserRouter, _React$Component);

	  function BrowserRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck$1(this, BrowserRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHistory(_this.props), _temp), _possibleConstructorReturn$1(_this, _ret);
	  }

	  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
	    warning_1$1(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
	  };

	  BrowserRouter.prototype.render = function render() {
	    return react.createElement(Router, { history: this.history, children: this.props.children });
	  };

	  return BrowserRouter;
	}(react.Component);

	BrowserRouter.propTypes = {
	  basename: propTypes.string,
	  forceRefresh: propTypes.bool,
	  getUserConfirmation: propTypes.func,
	  keyLength: propTypes.number,
	  children: propTypes.node
	};

	var createHashHistory_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _warning2 = _interopRequireDefault(warning_1$1);



	var _invariant2 = _interopRequireDefault(invariant_1$1);







	var _createTransitionManager2 = _interopRequireDefault(createTransitionManager_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + (0, PathUtils.stripLeadingSlash)(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: PathUtils.stripLeadingSlash,
	    decodePath: PathUtils.addLeadingSlash
	  },
	  slash: {
	    encodePath: PathUtils.addLeadingSlash,
	    decodePath: PathUtils.addLeadingSlash
	  }
	};

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var createHashHistory = function createHashHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(DOMUtils.canUseDOM, 'Hash history needs a DOM');

	  var globalHistory = window.history;
	  var canGoWithoutReload = (0, DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$hashType = props.hashType,
	      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

	  var basename = props.basename ? (0, PathUtils.stripTrailingSlash)((0, PathUtils.addLeadingSlash)(props.basename)) : '';

	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;


	  var getDOMLocation = function getDOMLocation() {
	    var path = decodePath(getHashPath());

	    (0, _warning2.default)(!basename || (0, PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, PathUtils.stripBasename)(path, basename);

	    return (0, LocationUtils.createLocation)(path);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var forceNextPop = false;
	  var ignorePath = null;

	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;

	      if (!forceNextPop && (0, LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === (0, PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;

	      handlePop(location);
	    }
	  };

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf((0, PathUtils.createPath)(toLocation));

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allPaths.lastIndexOf((0, PathUtils.createPath)(fromLocation));

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  // Ensure the hash is encoded properly before doing anything else.
	  var path = getHashPath();
	  var encodedPath = encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  var initialLocation = getDOMLocation();
	  var allPaths = [(0, PathUtils.createPath)(initialLocation)];

	  // Public interface

	  var createHref = function createHref(location) {
	    return '#' + encodePath(basename + (0, PathUtils.createPath)(location));
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);

	        var prevIndex = allPaths.lastIndexOf((0, PathUtils.createPath)(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	        nextPaths.push(path);
	        allPaths = nextPaths;

	        setState({ action: action, location: location });
	      } else {
	        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

	        setState();
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf((0, PathUtils.createPath)(history.location));

	      if (prevIndex !== -1) allPaths[prevIndex] = path;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createHashHistory;
	});

	var createHistory$1 = unwrapExports(createHashHistory_1);

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */

	var HashRouter = function (_React$Component) {
	  _inherits$2(HashRouter, _React$Component);

	  function HashRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck$2(this, HashRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHistory$1(_this.props), _temp), _possibleConstructorReturn$2(_this, _ret);
	  }

	  HashRouter.prototype.componentWillMount = function componentWillMount() {
	    warning_1$1(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
	  };

	  HashRouter.prototype.render = function render() {
	    return react.createElement(Router, { history: this.history, children: this.props.children });
	  };

	  return HashRouter;
	}(react.Component);

	HashRouter.propTypes = {
	  basename: propTypes.string,
	  getUserConfirmation: propTypes.func,
	  hashType: propTypes.oneOf(['hashbang', 'noslash', 'slash']),
	  children: propTypes.node
	};

	var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isModifiedEvent = function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	};

	/**
	 * The public API for rendering a history-aware <a>.
	 */

	var Link = function (_React$Component) {
	  _inherits$3(Link, _React$Component);

	  function Link() {
	    var _temp, _this, _ret;

	    _classCallCheck$3(this, Link);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) _this.props.onClick(event);

	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && // ignore right clicks
	      !_this.props.target && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();

	          var history = _this.context.router.history;
	          var _this$props = _this.props,
	              replace = _this$props.replace,
	              to = _this$props.to;


	          if (replace) {
	            history.replace(to);
	          } else {
	            history.push(to);
	          }
	        }
	    }, _temp), _possibleConstructorReturn$3(_this, _ret);
	  }

	  Link.prototype.render = function render() {
	    var _props = this.props,
	        replace = _props.replace,
	        to = _props.to,
	        innerRef = _props.innerRef,
	        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

	    invariant_1$1(this.context.router, 'You should not use <Link> outside a <Router>');

	    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

	    return react.createElement('a', _extends$1({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
	  };

	  return Link;
	}(react.Component);

	Link.propTypes = {
	  onClick: propTypes.func,
	  target: propTypes.string,
	  replace: propTypes.bool,
	  to: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired,
	  innerRef: propTypes.oneOfType([propTypes.string, propTypes.func])
	};
	Link.defaultProps = {
	  replace: false
	};
	Link.contextTypes = {
	  router: propTypes.shape({
	    history: propTypes.shape({
	      push: propTypes.func.isRequired,
	      replace: propTypes.func.isRequired,
	      createHref: propTypes.func.isRequired
	    }).isRequired
	  }).isRequired
	};

	var createMemoryHistory_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _warning2 = _interopRequireDefault(warning_1$1);







	var _createTransitionManager2 = _interopRequireDefault(createTransitionManager_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};

	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? (0, LocationUtils.createLocation)(entry, undefined, createKey()) : (0, LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
	  });

	  // Public interface

	  var createHref = PathUtils.createPath;

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;

	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      history.entries[history.index] = location;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

	    var action = 'POP';
	    var location = history.entries[nextIndex];

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };

	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createMemoryHistory;
	});

	var createHistory$2 = unwrapExports(createMemoryHistory_1);

	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that stores location in memory.
	 */

	var MemoryRouter = function (_React$Component) {
	  _inherits$4(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck$4(this, MemoryRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$4(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHistory$2(_this.props), _temp), _possibleConstructorReturn$4(_this, _ret);
	  }

	  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
	    warning_1$1(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
	  };

	  MemoryRouter.prototype.render = function render() {
	    return react.createElement(Router, { history: this.history, children: this.props.children });
	  };

	  return MemoryRouter;
	}(react.Component);

	MemoryRouter.propTypes = {
	  initialEntries: propTypes.array,
	  initialIndex: propTypes.number,
	  getUserConfirmation: propTypes.func,
	  keyLength: propTypes.number,
	  children: propTypes.node
	};

	// Written in this round about way for babel-transform-imports

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	var compilePath = function compilePath(pattern, options) {
	  var cacheKey = '' + options.end + options.strict + options.sensitive;
	  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

	  if (cache[pattern]) return cache[pattern];

	  var keys = [];
	  var re = pathToRegexp_1(pattern, keys, options);
	  var compiledPattern = { re: re, keys: keys };

	  if (cacheCount < cacheLimit) {
	    cache[pattern] = compiledPattern;
	    cacheCount++;
	  }

	  return compiledPattern;
	};

	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (typeof options === 'string') options = { path: options };

	  var _options = options,
	      _options$path = _options.path,
	      path = _options$path === undefined ? '/' : _options$path,
	      _options$exact = _options.exact,
	      exact = _options$exact === undefined ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === undefined ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

	  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
	      re = _compilePath.re,
	      keys = _compilePath.keys;

	  var match = re.exec(pathname);

	  if (!match) return null;

	  var url = match[0],
	      values = match.slice(1);

	  var isExact = pathname === url;

	  if (exact && !isExact) return null;

	  return {
	    path: path, // the path pattern used to match
	    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
	    isExact: isExact, // whether or not we matched exactly
	    params: keys.reduce(function (memo, key, index) {
	      memo[key.name] = values[index];
	      return memo;
	    }, {})
	  };
	};

	var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isEmptyChildren = function isEmptyChildren(children) {
	  return react.Children.count(children) === 0;
	};

	/**
	 * The public API for matching a single path and rendering.
	 */

	var Route = function (_React$Component) {
	  _inherits$5(Route, _React$Component);

	  function Route() {
	    var _temp, _this, _ret;

	    _classCallCheck$5(this, Route);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props, _this.context.router)
	    }, _temp), _possibleConstructorReturn$5(_this, _ret);
	  }

	  Route.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends$2({}, this.context.router, {
	        route: {
	          location: this.props.location || this.context.router.route.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Route.prototype.computeMatch = function computeMatch(_ref, router) {
	    var computedMatch = _ref.computedMatch,
	        location = _ref.location,
	        path = _ref.path,
	        strict = _ref.strict,
	        exact = _ref.exact,
	        sensitive = _ref.sensitive;

	    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

	    invariant_1$1(router, 'You should not use <Route> or withRouter() outside a <Router>');

	    var route = router.route;

	    var pathname = (location || route.location).pathname;

	    return path ? matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
	  };

	  Route.prototype.componentWillMount = function componentWillMount() {
	    warning_1$1(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

	    warning_1$1(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

	    warning_1$1(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
	  };

	  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	    warning_1$1(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    warning_1$1(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

	    this.setState({
	      match: this.computeMatch(nextProps, nextContext.router)
	    });
	  };

	  Route.prototype.render = function render() {
	    var match = this.state.match;
	    var _props = this.props,
	        children = _props.children,
	        component = _props.component,
	        render = _props.render;
	    var _context$router = this.context.router,
	        history = _context$router.history,
	        route = _context$router.route,
	        staticContext = _context$router.staticContext;

	    var location = this.props.location || route.location;
	    var props = { match: match, location: location, history: history, staticContext: staticContext };

	    return component ? // component prop gets first priority, only called if there's a match
	    match ? react.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
	    match ? render(props) : null : children ? // children come last, always called
	    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? react.Children.only(children) : null : null;
	  };

	  return Route;
	}(react.Component);

	Route.propTypes = {
	  computedMatch: propTypes.object, // private, from <Switch>
	  path: propTypes.string,
	  exact: propTypes.bool,
	  strict: propTypes.bool,
	  sensitive: propTypes.bool,
	  component: propTypes.func,
	  render: propTypes.func,
	  children: propTypes.oneOfType([propTypes.func, propTypes.node]),
	  location: propTypes.object
	};
	Route.contextTypes = {
	  router: propTypes.shape({
	    history: propTypes.object.isRequired,
	    route: propTypes.object.isRequired,
	    staticContext: propTypes.object
	  })
	};
	Route.childContextTypes = {
	  router: propTypes.object.isRequired
	};

	// Written in this round about way for babel-transform-imports

	var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */
	var NavLink = function NavLink(_ref) {
	  var to = _ref.to,
	      exact = _ref.exact,
	      strict = _ref.strict,
	      location = _ref.location,
	      activeClassName = _ref.activeClassName,
	      className = _ref.className,
	      activeStyle = _ref.activeStyle,
	      style = _ref.style,
	      getIsActive = _ref.isActive,
	      ariaCurrent = _ref.ariaCurrent,
	      rest = _objectWithoutProperties$1(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

	  return react.createElement(Route, {
	    path: (typeof to === 'undefined' ? 'undefined' : _typeof$1(to)) === 'object' ? to.pathname : to,
	    exact: exact,
	    strict: strict,
	    location: location,
	    children: function children(_ref2) {
	      var location = _ref2.location,
	          match = _ref2.match;

	      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

	      return react.createElement(Link, _extends$3({
	        to: to,
	        className: isActive ? [className, activeClassName].filter(function (i) {
	          return i;
	        }).join(' ') : className,
	        style: isActive ? _extends$3({}, style, activeStyle) : style,
	        'aria-current': isActive && ariaCurrent
	      }, rest));
	    }
	  });
	};

	NavLink.propTypes = {
	  to: Link.propTypes.to,
	  exact: propTypes.bool,
	  strict: propTypes.bool,
	  location: propTypes.object,
	  activeClassName: propTypes.string,
	  className: propTypes.string,
	  activeStyle: propTypes.object,
	  style: propTypes.object,
	  isActive: propTypes.func,
	  ariaCurrent: propTypes.oneOf(['page', 'step', 'location', 'true'])
	};

	NavLink.defaultProps = {
	  activeClassName: 'active',
	  ariaCurrent: 'true'
	};

	function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */

	var Prompt = function (_React$Component) {
	  _inherits$6(Prompt, _React$Component);

	  function Prompt() {
	    _classCallCheck$6(this, Prompt);

	    return _possibleConstructorReturn$6(this, _React$Component.apply(this, arguments));
	  }

	  Prompt.prototype.enable = function enable(message) {
	    if (this.unblock) this.unblock();

	    this.unblock = this.context.router.history.block(message);
	  };

	  Prompt.prototype.disable = function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  };

	  Prompt.prototype.componentWillMount = function componentWillMount() {
	    invariant_1$1(this.context.router, 'You should not use <Prompt> outside a <Router>');

	    if (this.props.when) this.enable(this.props.message);
	  };

	  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  };

	  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.disable();
	  };

	  Prompt.prototype.render = function render() {
	    return null;
	  };

	  return Prompt;
	}(react.Component);

	Prompt.propTypes = {
	  when: propTypes.bool,
	  message: propTypes.oneOfType([propTypes.func, propTypes.string]).isRequired
	};
	Prompt.defaultProps = {
	  when: true
	};
	Prompt.contextTypes = {
	  router: propTypes.shape({
	    history: propTypes.shape({
	      block: propTypes.func.isRequired
	    }).isRequired
	  }).isRequired
	};

	// Written in this round about way for babel-transform-imports

	var parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = parsePath(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends$4({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	};

	var locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
	};

	var canUseDOM$1 = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$7(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for updating the location programmatically
	 * with a component.
	 */

	var Redirect = function (_React$Component) {
	  _inherits$7(Redirect, _React$Component);

	  function Redirect() {
	    _classCallCheck$7(this, Redirect);

	    return _possibleConstructorReturn$7(this, _React$Component.apply(this, arguments));
	  }

	  Redirect.prototype.isStatic = function isStatic() {
	    return this.context.router && this.context.router.staticContext;
	  };

	  Redirect.prototype.componentWillMount = function componentWillMount() {
	    invariant_1$1(this.context.router, 'You should not use <Redirect> outside a <Router>');

	    if (this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidMount = function componentDidMount() {
	    if (!this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var prevTo = createLocation(prevProps.to);
	    var nextTo = createLocation(this.props.to);

	    if (locationsAreEqual(prevTo, nextTo)) {
	      warning_1$1(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
	      return;
	    }

	    this.perform();
	  };

	  Redirect.prototype.perform = function perform() {
	    var history = this.context.router.history;
	    var _props = this.props,
	        push = _props.push,
	        to = _props.to;


	    if (push) {
	      history.push(to);
	    } else {
	      history.replace(to);
	    }
	  };

	  Redirect.prototype.render = function render() {
	    return null;
	  };

	  return Redirect;
	}(react.Component);

	Redirect.propTypes = {
	  push: propTypes.bool,
	  from: propTypes.string,
	  to: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired
	};
	Redirect.defaultProps = {
	  push: false
	};
	Redirect.contextTypes = {
	  router: propTypes.shape({
	    history: propTypes.shape({
	      push: propTypes.func.isRequired,
	      replace: propTypes.func.isRequired
	    }).isRequired,
	    staticContext: propTypes.object
	  }).isRequired
	};

	// Written in this round about way for babel-transform-imports

	var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$8(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var normalizeLocation = function normalizeLocation(object) {
	  var _object$pathname = object.pathname,
	      pathname = _object$pathname === undefined ? '/' : _object$pathname,
	      _object$search = object.search,
	      search = _object$search === undefined ? '' : _object$search,
	      _object$hash = object.hash,
	      hash = _object$hash === undefined ? '' : _object$hash;


	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var addBasename = function addBasename(basename, location) {
	  if (!basename) return location;

	  return _extends$8({}, location, {
	    pathname: PathUtils_1(basename) + location.pathname
	  });
	};

	var stripBasename$1 = function stripBasename(basename, location) {
	  if (!basename) return location;

	  var base = PathUtils_1(basename);

	  if (location.pathname.indexOf(base) !== 0) return location;

	  return _extends$8({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	};

	var createLocation$1 = function createLocation(location) {
	  return typeof location === 'string' ? PathUtils_6(location) : normalizeLocation(location);
	};

	var createURL = function createURL(location) {
	  return typeof location === 'string' ? location : PathUtils_7(location);
	};

	var staticHandler = function staticHandler(methodName) {
	  return function () {
	    invariant_1$1(false, 'You cannot %s with <StaticRouter>', methodName);
	  };
	};

	var noop = function noop() {};

	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */

	var StaticRouter = function (_React$Component) {
	  _inherits$8(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck$8(this, StaticRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
	      return PathUtils_1(_this.props.basename + createURL(path));
	    }, _this.handlePush = function (location) {
	      var _this$props = _this.props,
	          basename = _this$props.basename,
	          context = _this$props.context;

	      context.action = 'PUSH';
	      context.location = addBasename(basename, createLocation$1(location));
	      context.url = createURL(context.location);
	    }, _this.handleReplace = function (location) {
	      var _this$props2 = _this.props,
	          basename = _this$props2.basename,
	          context = _this$props2.context;

	      context.action = 'REPLACE';
	      context.location = addBasename(basename, createLocation$1(location));
	      context.url = createURL(context.location);
	    }, _this.handleListen = function () {
	      return noop;
	    }, _this.handleBlock = function () {
	      return noop;
	    }, _temp), _possibleConstructorReturn$8(_this, _ret);
	  }

	  StaticRouter.prototype.getChildContext = function getChildContext() {
	    return {
	      router: {
	        staticContext: this.props.context
	      }
	    };
	  };

	  StaticRouter.prototype.componentWillMount = function componentWillMount() {
	    warning_1$1(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
	  };

	  StaticRouter.prototype.render = function render() {
	    var _props = this.props,
	        basename = _props.basename,
	        context = _props.context,
	        location = _props.location,
	        props = _objectWithoutProperties$2(_props, ['basename', 'context', 'location']);

	    var history = {
	      createHref: this.createHref,
	      action: 'POP',
	      location: stripBasename$1(basename, createLocation$1(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler('go'),
	      goBack: staticHandler('goBack'),
	      goForward: staticHandler('goForward'),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };

	    return react.createElement(Router, _extends$8({}, props, { history: history }));
	  };

	  return StaticRouter;
	}(react.Component);

	StaticRouter.propTypes = {
	  basename: propTypes.string,
	  context: propTypes.object.isRequired,
	  location: propTypes.oneOfType([propTypes.string, propTypes.object])
	};
	StaticRouter.defaultProps = {
	  basename: '',
	  location: '/'
	};
	StaticRouter.childContextTypes = {
	  router: propTypes.object.isRequired
	};

	// Written in this round about way for babel-transform-imports

	function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$9(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for rendering the first <Route> that matches.
	 */

	var Switch = function (_React$Component) {
	  _inherits$9(Switch, _React$Component);

	  function Switch() {
	    _classCallCheck$9(this, Switch);

	    return _possibleConstructorReturn$9(this, _React$Component.apply(this, arguments));
	  }

	  Switch.prototype.componentWillMount = function componentWillMount() {
	    invariant_1$1(this.context.router, 'You should not use <Switch> outside a <Router>');
	  };

	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    warning_1$1(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    warning_1$1(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };

	  Switch.prototype.render = function render() {
	    var route = this.context.router.route;
	    var children = this.props.children;

	    var location = this.props.location || route.location;

	    var match = void 0,
	        child = void 0;
	    react.Children.forEach(children, function (element) {
	      if (!react.isValidElement(element)) return;

	      var _element$props = element.props,
	          pathProp = _element$props.path,
	          exact = _element$props.exact,
	          strict = _element$props.strict,
	          sensitive = _element$props.sensitive,
	          from = _element$props.from;

	      var path = pathProp || from;

	      if (match == null) {
	        child = element;
	        match = path ? matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
	      }
	    });

	    return match ? react.cloneElement(child, { location: location, computedMatch: match }) : null;
	  };

	  return Switch;
	}(react.Component);

	Switch.contextTypes = {
	  router: propTypes.shape({
	    route: propTypes.object.isRequired
	  }).isRequired
	};
	Switch.propTypes = {
	  children: propTypes.node,
	  location: propTypes.object
	};

	// Written in this round about way for babel-transform-imports

	// Written in this round about way for babel-transform-imports

	var hoistNonReactStatics = createCommonjsModule(function (module, exports) {
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	(function (global, factory) {
	    module.exports = factory();
	}(commonjsGlobal, (function () {
	    
	    var REACT_STATICS = {
	        childContextTypes: true,
	        contextTypes: true,
	        defaultProps: true,
	        displayName: true,
	        getDefaultProps: true,
	        getDerivedStateFromProps: true,
	        mixins: true,
	        propTypes: true,
	        type: true
	    };
	    
	    var KNOWN_STATICS = {
	        name: true,
	        length: true,
	        prototype: true,
	        caller: true,
	        callee: true,
	        arguments: true,
	        arity: true
	    };
	    
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var getPrototypeOf = Object.getPrototypeOf;
	    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	    
	    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	            
	            if (objectPrototype) {
	                var inheritedComponent = getPrototypeOf(sourceComponent);
	                if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	                }
	            }
	            
	            var keys = getOwnPropertyNames(sourceComponent);
	            
	            if (getOwnPropertySymbols) {
	                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	            }
	            
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                    try { // Avoid failures from read-only properties
	                        defineProperty(targetComponent, key, descriptor);
	                    } catch (e) {}
	                }
	            }
	            
	            return targetComponent;
	        }
	        
	        return targetComponent;
	    };
	})));
	});

	// Written in this round about way for babel-transform-imports

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css = ".github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out; }\n\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0); }\n  20%, 60% {\n    transform: rotate(-25deg); }\n  40%, 80% {\n    transform: rotate(10deg); } }\n\n@media (max-width: 500px) {\n  .github-corner:hover .octo-arm {\n    animation: none; }\n  .github-corner .octo-arm {\n    animation: octocat-wave 560ms ease-in-out; } }\n\n.github-corner {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n";
	styleInject(css);

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

	var GithubCorner = function (_Component) {
	  inherits(GithubCorner, _Component);

	  function GithubCorner() {
	    classCallCheck(this, GithubCorner);
	    return possibleConstructorReturn(this, (GithubCorner.__proto__ || Object.getPrototypeOf(GithubCorner)).apply(this, arguments));
	  }

	  createClass(GithubCorner, [{
	    key: 'render',
	    value: function render() {
	      return react.createElement(
	        'div',
	        null,
	        react.createElement(
	          'a',
	          { href: 'https://github.com/YurkaninRyan/react-sentinel', className: 'github-corner', 'aria-label': 'View source on Github' },
	          react.createElement(
	            'svg',
	            {
	              width: '80',
	              height: '80',
	              viewBox: '0 0 250 250',
	              style: {
	                fill: '#2a9d8f', color: '#fff', position: 'absolute', top: 0, border: 0, right: 0
	              },
	              'aria-hidden': 'true'
	            },
	            react.createElement('path', { d: 'M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' }),
	            react.createElement('path', { d: 'M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2', fill: 'currentColor', style: { transformOrigin: '130px 106px' }, className: 'octo-arm' }),
	            react.createElement('path', { d: 'M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z', fill: 'currentColor', className: 'octo-body' })
	          )
	        )
	      );
	    }
	  }]);
	  return GithubCorner;
	}(react_2);

	var css$1 = ".Navbar {\n  width: 100%;\n  display: flex;\n  padding: 8px 74px 8px 8px;\n  align-items: center;\n  background-color: #fdfdfd;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .Navbar ul {\n    margin: 0; }\n\n.Navbar__name {\n  font-weight: 700;\n  padding: 0 8px 0 0;\n  margin: 0 8px 0 0;\n  border-right: 1px solid #cecece; }\n\n.Navbar__links {\n  display: flex; }\n\n.Navbar__link {\n  font-size: .8rem;\n  font-weight: 500;\n  text-decoration: underline;\n  color: #F4828C;\n  cursor: pointer;\n  user-select: none;\n  margin: 0 8px 0 0; }\n";
	styleInject(css$1);

	var Navbar = function (_Component) {
	  inherits(Navbar, _Component);

	  function Navbar() {
	    classCallCheck(this, Navbar);
	    return possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	  }

	  createClass(Navbar, [{
	    key: 'render',
	    value: function render() {
	      return react.createElement(
	        'div',
	        { className: 'Navbar' },
	        react.createElement(
	          'div',
	          { className: 'Navbar__name' },
	          'Sentinel'
	        ),
	        react.createElement(
	          'ul',
	          { className: 'Navbar__links' },
	          react.createElement(
	            'li',
	            null,
	            react.createElement(
	              Link,
	              { className: 'Navbar__link', to: '/element-query-example' },
	              'Element Query Example'
	            )
	          ),
	          react.createElement(
	            'li',
	            null,
	            react.createElement(
	              Link,
	              { className: 'Navbar__link', to: '/animation-example' },
	              'Animation Example'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return Navbar;
	}(react_2);

	var Sentinel = function (_Component) {
	  inherits(Sentinel, _Component);

	  function Sentinel(_ref) {
	    var lowPriority = _ref.lowPriority,
	        initial = _ref.initial;
	    classCallCheck(this, Sentinel);

	    var _this = possibleConstructorReturn(this, (Sentinel.__proto__ || Object.getPrototypeOf(Sentinel)).call(this));

	    _initialiseProps.call(_this);

	    _this.setLoopingFunctions(lowPriority);
	    _this.state = initial;
	    return _this;
	  }

	  createClass(Sentinel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.watch();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(_ref2) {
	      var previousLowPriority = _ref2.lowPriority;
	      var lowPriority = this.props.lowPriority;

	      if (lowPriority === previousLowPriority) return;

	      // Make a clean slate, since we will be changing functions.
	      this.stop();
	      this.setLoopingFunctions(lowPriority);
	      this.watch();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stop();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.render(this.state);
	    }
	  }]);
	  return Sentinel;
	}(react_2);

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this.setLoopingFunctions = function (lowPriority) {
	    /**
	     *  SAFARI COMPAT:
	     *  requestIdleCallback doesn't exist, so we need to check for it on window.
	     */
	    var observe = lowPriority ? window.requestIdleCallback || window.requestAnimationFrame : window.requestAnimationFrame;

	    var kill = lowPriority ? window.cancelIdleCallback || window.cancelAnimationFrame : window.cancelAnimationFrame;

	    /**
	     *  FIREFOX COMPAT
	     *  Chrome doesn't seem to mind not binding window, however
	     *  FF throws up
	     */
	    _this2.observe = observe.bind(window);
	    _this2.kill = kill.bind(window);
	  };

	  this.watch = function () {
	    _this2.observer = _this2.observe(_this2.deriveUpdatesByObserving);
	  };

	  this.stop = function () {
	    // No-op, there is no observation happening.
	    if (!_this2.observer) {
	      return;
	    }

	    _this2.kill(_this2.observer);
	    _this2.observer = null;
	  };

	  this.deriveUpdatesByObserving = function () {
	    var _props = _this2.props,
	        observe = _props.observe,
	        interval = _props.interval;

	    var updates = observe(_this2.state);

	    if (!updates) {
	      return interval ? window.setTimeout(_this2.watch, interval) : _this2.watch();
	    }

	    var oldProps = Object.keys(_this2.state);
	    var newProps = Object.keys(updates);

	    // first, naive check to see if lengths are different.
	    // If that doesn't pass, shallow compare all the keys in both objects.
	    var mismatch = oldProps.length !== newProps.length || oldProps.some(function (currPropKey) {
	      return _this2.state[currPropKey] !== updates[currPropKey];
	    }) || newProps.some(function (currPropKey) {
	      return updates[currPropKey] !== _this2.state[currPropKey];
	    });

	    if (mismatch) {
	      _this2.setState(updates);
	    }

	    return interval ? window.setTimeout(_this2.watch, interval) : _this2.watch();
	  };
	};


	Sentinel.propTypes = {
	  observe: propTypes.func.isRequired,
	  render: propTypes.func.isRequired,
	  lowPriority: propTypes.bool,
	  interval: propTypes.number,

	  // eslint-disable-next-line react/forbid-prop-types
	  initial: propTypes.object
	};

	Sentinel.defaultProps = {
	  lowPriority: false,
	  initial: {},
	  interval: null
	};

	var classCallCheck$1 = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass$1 = function () {
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

	var _extends$b = Object.assign || function (target) {
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

	var inherits$1 = function (subClass, superClass) {
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

	var possibleConstructorReturn$1 = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var toConsumableArray$1 = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	var styles = {
	  base: {
	    position: 'absolute',
	    userSelect: 'none',
	    MsUserSelect: 'none'
	  },
	  top: {
	    width: '100%',
	    height: '10px',
	    top: '-5px',
	    left: '0px',
	    cursor: 'row-resize'
	  },
	  right: {
	    width: '10px',
	    height: '100%',
	    top: '0px',
	    right: '-5px',
	    cursor: 'col-resize'
	  },
	  bottom: {
	    width: '100%',
	    height: '10px',
	    bottom: '-5px',
	    left: '0px',
	    cursor: 'row-resize'
	  },
	  left: {
	    width: '10px',
	    height: '100%',
	    top: '0px',
	    left: '-5px',
	    cursor: 'col-resize'
	  },
	  topRight: {
	    width: '20px',
	    height: '20px',
	    position: 'absolute',
	    right: '-10px',
	    top: '-10px',
	    cursor: 'ne-resize'
	  },
	  bottomRight: {
	    width: '20px',
	    height: '20px',
	    position: 'absolute',
	    right: '-10px',
	    bottom: '-10px',
	    cursor: 'se-resize'
	  },
	  bottomLeft: {
	    width: '20px',
	    height: '20px',
	    position: 'absolute',
	    left: '-10px',
	    bottom: '-10px',
	    cursor: 'sw-resize'
	  },
	  topLeft: {
	    width: '20px',
	    height: '20px',
	    position: 'absolute',
	    left: '-10px',
	    top: '-10px',
	    cursor: 'nw-resize'
	  }
	};

	var Resizer = (function (props) {
	  return react_5(
	    'div',
	    {
	      className: props.className,
	      style: _extends$b({}, styles.base, styles[props.direction], props.replaceStyles || {}),
	      onMouseDown: function onMouseDown(e) {
	        props.onResizeStart(e, props.direction);
	      },
	      onTouchStart: function onTouchStart(e) {
	        props.onResizeStart(e, props.direction);
	      }
	    },
	    props.children
	  );
	});

	var userSelectNone = {
	  userSelect: 'none',
	  MozUserSelect: 'none',
	  WebkitUserSelect: 'none',
	  MsUserSelect: 'none'
	};

	var userSelectAuto = {
	  userSelect: 'auto',
	  MozUserSelect: 'auto',
	  WebkitUserSelect: 'auto',
	  MsUserSelect: 'auto'
	};

	var clamp$1 = function clamp(n, min, max) {
	  return Math.max(Math.min(n, max), min);
	};
	var snap = function snap(n, size) {
	  return Math.round(n / size) * size;
	};

	var endsWith = function endsWith(str, searchStr) {
	  return str.substr(str.length - searchStr.length, searchStr.length) === searchStr;
	};

	var getStringSize = function getStringSize(n) {
	  if (endsWith(n.toString(), 'px')) return n.toString();
	  if (endsWith(n.toString(), '%')) return n.toString();
	  return n + 'px';
	};

	var definedProps = ['style', 'className', 'grid', 'bounds', 'size', 'defaultSize', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'lockAspectRatio', 'lockAspectRatioExtraWidth', 'lockAspectRatioExtraHeight', 'enable', 'handleStyles', 'handleClasses', 'handleWrapperStyle', 'handleWrapperClass', 'children', 'onResizeStart', 'onResize', 'onResizeStop', 'handleComponent'];

	var baseClassName = '__resizable_base__';

	var Resizable = function (_React$Component) {
	  inherits$1(Resizable, _React$Component);

	  function Resizable(props) {
	    classCallCheck$1(this, Resizable);

	    var _this = possibleConstructorReturn$1(this, (Resizable.__proto__ || Object.getPrototypeOf(Resizable)).call(this, props));

	    _this.state = {
	      isResizing: false,
	      resizeCursor: 'auto',
	      width: typeof (_this.propsSize && _this.propsSize.width) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.width,
	      height: typeof (_this.propsSize && _this.propsSize.height) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.height,
	      direction: 'right',
	      original: {
	        x: 0,
	        y: 0,
	        width: 0,
	        height: 0
	      }
	    };

	    _this.updateExtendsProps(props);
	    _this.onResizeStart = _this.onResizeStart.bind(_this);
	    _this.onMouseMove = _this.onMouseMove.bind(_this);
	    _this.onMouseUp = _this.onMouseUp.bind(_this);

	    if (typeof window !== 'undefined') {
	      window.addEventListener('mouseup', _this.onMouseUp);
	      window.addEventListener('mousemove', _this.onMouseMove);
	      window.addEventListener('mouseleave', _this.onMouseUp);
	      window.addEventListener('touchmove', _this.onMouseMove);
	      window.addEventListener('touchend', _this.onMouseUp);
	    }
	    return _this;
	  }

	  createClass$1(Resizable, [{
	    key: 'updateExtendsProps',
	    value: function updateExtendsProps(props) {
	      this.extendsProps = Object.keys(props).reduce(function (acc, key) {
	        if (definedProps.indexOf(key) !== -1) return acc;
	        acc[key] = props[key];
	        return acc;
	      }, {});
	    }
	  }, {
	    key: 'getParentSize',
	    value: function getParentSize() {
	      var base = this.base;

	      if (!base) return { width: window.innerWidth, height: window.innerHeight };
	      // INFO: To calculate parent width with flex layout
	      var wrapChanged = false;
	      var wrap = this.parentNode.style.flexWrap;
	      var minWidth = base.style.minWidth;
	      if (wrap !== 'wrap') {
	        wrapChanged = true;
	        this.parentNode.style.flexWrap = 'wrap';
	        // HACK: Use relative to get parent padding size
	      }
	      base.style.position = 'relative';
	      base.style.minWidth = '100%';
	      var size = {
	        width: base.offsetWidth,
	        height: base.offsetHeight
	      };
	      base.style.position = 'absolute';
	      if (wrapChanged) this.parentNode.style.flexWrap = wrap;
	      base.style.minWidth = minWidth;
	      return size;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var size = this.size;

	      this.setState({
	        width: this.state.width || size.width,
	        height: this.state.height || size.height
	      });
	      var parent = this.parentNode;
	      if (!(parent instanceof HTMLElement)) return;
	      if (this.base) return;
	      var element = document.createElement('div');
	      element.style.width = '100%';
	      element.style.height = '100%';
	      element.style.position = 'absolute';
	      element.style.transform = 'scale(0, 0)';
	      element.style.left = '-2147483647px';
	      element.style.flex = '0';
	      if (element.classList) {
	        element.classList.add(baseClassName);
	      } else {
	        element.className += baseClassName;
	      }
	      parent.appendChild(element);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(next) {
	      this.updateExtendsProps(next);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (typeof window !== 'undefined') {
	        window.removeEventListener('mouseup', this.onMouseUp);
	        window.removeEventListener('mousemove', this.onMouseMove);
	        window.removeEventListener('mouseleave', this.onMouseUp);
	        window.removeEventListener('touchmove', this.onMouseMove);
	        window.removeEventListener('touchend', this.onMouseUp);
	        var parent = this.parentNode;
	        var base = this.base;

	        if (!base || !parent) return;
	        if (!(parent instanceof HTMLElement) || !(base instanceof Node)) return;
	        parent.removeChild(base);
	      }
	    }
	  }, {
	    key: 'calculateNewSize',
	    value: function calculateNewSize(newSize, kind) {
	      var propsSize = this.propsSize && this.propsSize[kind];
	      return this.state[kind] === 'auto' && this.state.original[kind] === newSize && (typeof propsSize === 'undefined' || propsSize === 'auto') ? 'auto' : newSize;
	    }
	  }, {
	    key: 'onResizeStart',
	    value: function onResizeStart(event, direction) {
	      var clientX = 0;
	      var clientY = 0;
	      if (event.nativeEvent instanceof MouseEvent) {
	        clientX = event.nativeEvent.clientX;
	        clientY = event.nativeEvent.clientY;

	        // When user click with right button the resize is stuck in resizing mode
	        // until users clicks again, dont continue if right click is used.
	        // HACK: MouseEvent does not have `which` from flow-bin v0.68.
	        if (event.nativeEvent.which === 3) {
	          return;
	        }
	      } else if (event.nativeEvent instanceof TouchEvent) {
	        clientX = event.nativeEvent.touches[0].clientX;
	        clientY = event.nativeEvent.touches[0].clientY;
	      }
	      if (this.props.onResizeStart) {
	        this.props.onResizeStart(event, direction, this.resizable);
	      }

	      // Fix #168
	      if (this.props.size) {
	        if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
	          this.setState({ height: this.props.size.height });
	        }
	        if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
	          this.setState({ width: this.props.size.width });
	        }
	      }

	      this.setState({
	        original: {
	          x: clientX,
	          y: clientY,
	          width: this.size.width,
	          height: this.size.height
	        },
	        isResizing: true,
	        resizeCursor: window.getComputedStyle(event.target).cursor,
	        direction: direction
	      });
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(event) {
	      if (!this.state.isResizing) return;
	      var clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
	      var clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
	      var _state = this.state,
	          direction = _state.direction,
	          original = _state.original,
	          width = _state.width,
	          height = _state.height;
	      var _props = this.props,
	          lockAspectRatio = _props.lockAspectRatio,
	          lockAspectRatioExtraHeight = _props.lockAspectRatioExtraHeight,
	          lockAspectRatioExtraWidth = _props.lockAspectRatioExtraWidth;
	      var _props2 = this.props,
	          maxWidth = _props2.maxWidth,
	          maxHeight = _props2.maxHeight,
	          minWidth = _props2.minWidth,
	          minHeight = _props2.minHeight;

	      // TODO: refactor

	      var parentSize = this.getParentSize();
	      if (maxWidth && typeof maxWidth === 'string' && endsWith(maxWidth, '%')) {
	        var _ratio = Number(maxWidth.replace('%', '')) / 100;
	        maxWidth = parentSize.width * _ratio;
	      }
	      if (maxHeight && typeof maxHeight === 'string' && endsWith(maxHeight, '%')) {
	        var _ratio2 = Number(maxHeight.replace('%', '')) / 100;
	        maxHeight = parentSize.height * _ratio2;
	      }
	      if (minWidth && typeof minWidth === 'string' && endsWith(minWidth, '%')) {
	        var _ratio3 = Number(minWidth.replace('%', '')) / 100;
	        minWidth = parentSize.width * _ratio3;
	      }
	      if (minHeight && typeof minHeight === 'string' && endsWith(minHeight, '%')) {
	        var _ratio4 = Number(minHeight.replace('%', '')) / 100;
	        minHeight = parentSize.height * _ratio4;
	      }
	      maxWidth = typeof maxWidth === 'undefined' ? undefined : Number(maxWidth);
	      maxHeight = typeof maxHeight === 'undefined' ? undefined : Number(maxHeight);
	      minWidth = typeof minWidth === 'undefined' ? undefined : Number(minWidth);
	      minHeight = typeof minHeight === 'undefined' ? undefined : Number(minHeight);

	      var ratio = typeof lockAspectRatio === 'number' ? lockAspectRatio : original.width / original.height;
	      var newWidth = original.width;
	      var newHeight = original.height;
	      if (/right/i.test(direction)) {
	        newWidth = original.width + (clientX - original.x);
	        if (lockAspectRatio) newHeight = (newWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
	      }
	      if (/left/i.test(direction)) {
	        newWidth = original.width - (clientX - original.x);
	        if (lockAspectRatio) newHeight = (newWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
	      }
	      if (/bottom/i.test(direction)) {
	        newHeight = original.height + (clientY - original.y);
	        if (lockAspectRatio) newWidth = (newHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
	      }
	      if (/top/i.test(direction)) {
	        newHeight = original.height - (clientY - original.y);
	        if (lockAspectRatio) newWidth = (newHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
	      }

	      if (this.props.bounds === 'parent') {
	        var parent = this.parentNode;
	        if (parent instanceof HTMLElement) {
	          var parentRect = parent.getBoundingClientRect();
	          var parentLeft = parentRect.left;
	          var parentTop = parentRect.top;

	          var _resizable$getBoundin = this.resizable.getBoundingClientRect(),
	              _left = _resizable$getBoundin.left,
	              _top = _resizable$getBoundin.top;

	          var boundWidth = parent.offsetWidth + (parentLeft - _left);
	          var boundHeight = parent.offsetHeight + (parentTop - _top);
	          maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
	          maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
	        }
	      } else if (this.props.bounds === 'window') {
	        if (typeof window !== 'undefined') {
	          var _resizable$getBoundin2 = this.resizable.getBoundingClientRect(),
	              _left2 = _resizable$getBoundin2.left,
	              _top2 = _resizable$getBoundin2.top;

	          var _boundWidth = window.innerWidth - _left2;
	          var _boundHeight = window.innerHeight - _top2;
	          maxWidth = maxWidth && maxWidth < _boundWidth ? maxWidth : _boundWidth;
	          maxHeight = maxHeight && maxHeight < _boundHeight ? maxHeight : _boundHeight;
	        }
	      } else if (this.props.bounds instanceof HTMLElement) {
	        var targetRect = this.props.bounds.getBoundingClientRect();
	        var targetLeft = targetRect.left;
	        var targetTop = targetRect.top;

	        var _resizable$getBoundin3 = this.resizable.getBoundingClientRect(),
	            _left3 = _resizable$getBoundin3.left,
	            _top3 = _resizable$getBoundin3.top;

	        if (!(this.props.bounds instanceof HTMLElement)) return;
	        var _boundWidth2 = this.props.bounds.offsetWidth + (targetLeft - _left3);
	        var _boundHeight2 = this.props.bounds.offsetHeight + (targetTop - _top3);
	        maxWidth = maxWidth && maxWidth < _boundWidth2 ? maxWidth : _boundWidth2;
	        maxHeight = maxHeight && maxHeight < _boundHeight2 ? maxHeight : _boundHeight2;
	      }

	      var computedMinWidth = typeof minWidth === 'undefined' ? 10 : minWidth;
	      var computedMaxWidth = typeof maxWidth === 'undefined' || maxWidth < 0 ? newWidth : maxWidth;
	      var computedMinHeight = typeof minHeight === 'undefined' ? 10 : minHeight;
	      var computedMaxHeight = typeof maxHeight === 'undefined' || maxHeight < 0 ? newHeight : maxHeight;

	      if (lockAspectRatio) {
	        var extraMinWidth = (computedMinHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
	        var extraMaxWidth = (computedMaxHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
	        var extraMinHeight = (computedMinWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
	        var extraMaxHeight = (computedMaxWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
	        var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
	        var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
	        var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
	        var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
	        newWidth = clamp$1(newWidth, lockedMinWidth, lockedMaxWidth);
	        newHeight = clamp$1(newHeight, lockedMinHeight, lockedMaxHeight);
	      } else {
	        newWidth = clamp$1(newWidth, computedMinWidth, computedMaxWidth);
	        newHeight = clamp$1(newHeight, computedMinHeight, computedMaxHeight);
	      }
	      if (this.props.grid) {
	        newWidth = snap(newWidth, this.props.grid[0]);
	      }
	      if (this.props.grid) {
	        newHeight = snap(newHeight, this.props.grid[1]);
	      }

	      var delta = {
	        width: newWidth - original.width,
	        height: newHeight - original.height
	      };

	      if (width && typeof width === 'string' && endsWith(width, '%')) {
	        var percent = newWidth / parentSize.width * 100;
	        newWidth = percent + '%';
	      }

	      if (height && typeof height === 'string' && endsWith(height, '%')) {
	        var _percent = newHeight / parentSize.height * 100;
	        newHeight = _percent + '%';
	      }

	      this.setState({
	        width: this.calculateNewSize(newWidth, 'width'),
	        height: this.calculateNewSize(newHeight, 'height')
	      });

	      if (this.props.onResize) {
	        this.props.onResize(event, direction, this.resizable, delta);
	      }
	    }
	  }, {
	    key: 'onMouseUp',
	    value: function onMouseUp(event) {
	      var _state2 = this.state,
	          isResizing = _state2.isResizing,
	          direction = _state2.direction,
	          original = _state2.original;

	      if (!isResizing) return;
	      var delta = {
	        width: this.size.width - original.width,
	        height: this.size.height - original.height
	      };
	      if (this.props.onResizeStop) {
	        this.props.onResizeStop(event, direction, this.resizable, delta);
	      }
	      if (this.props.size) {
	        this.setState(this.props.size);
	      }
	      this.setState({ isResizing: false, resizeCursor: 'auto' });
	    }
	  }, {
	    key: 'updateSize',
	    value: function updateSize(size) {
	      this.setState({ width: size.width, height: size.height });
	    }
	  }, {
	    key: 'renderResizer',
	    value: function renderResizer() {
	      var _this2 = this;

	      var _props3 = this.props,
	          enable = _props3.enable,
	          handleStyles = _props3.handleStyles,
	          handleClasses = _props3.handleClasses,
	          handleWrapperStyle = _props3.handleWrapperStyle,
	          handleWrapperClass = _props3.handleWrapperClass,
	          handleComponent = _props3.handleComponent;

	      if (!enable) return null;
	      var resizers = Object.keys(enable).map(function (dir) {
	        if (enable[dir] !== false) {
	          return react_5(
	            Resizer,
	            {
	              key: dir,
	              direction: dir,
	              onResizeStart: _this2.onResizeStart,
	              replaceStyles: handleStyles && handleStyles[dir],
	              className: handleClasses && handleClasses[dir]
	            },
	            handleComponent && handleComponent[dir] ? react_5(handleComponent[dir]) : null
	          );
	        }
	        return null;
	      });

	      // #93 Wrap the resize box in span (will not break 100% width/height)
	      return react_5(
	        'span',
	        { className: handleWrapperClass, style: handleWrapperStyle },
	        resizers
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var userSelect = this.state.isResizing ? userSelectNone : userSelectAuto;
	      return react_5(
	        'div',
	        _extends$b({
	          ref: function ref(c) {
	            if (c) {
	              _this3.resizable = c;
	            }
	          },
	          style: _extends$b({
	            position: 'relative'
	          }, userSelect, this.props.style, this.sizeStyle, {
	            maxWidth: this.props.maxWidth,
	            maxHeight: this.props.maxHeight,
	            minWidth: this.props.minWidth,
	            minHeight: this.props.minHeight,
	            boxSizing: 'border-box'
	          }),
	          className: this.props.className
	        }, this.extendsProps),
	        this.state.isResizing && react_5('div', {
	          style: {
	            height: '100%',
	            width: '100%',
	            backgroundColor: 'rgba(0,0,0,0)',
	            cursor: '' + (this.state.resizeCursor || 'auto'),
	            opacity: '0',
	            position: 'fixed',
	            zIndex: '9999',
	            top: '0',
	            left: '0',
	            bottom: '0',
	            right: '0'
	          }
	        }),
	        this.props.children,
	        this.renderResizer()
	      );
	    }
	  }, {
	    key: 'parentNode',
	    get: function get$$1() {
	      return this.resizable.parentNode;
	    }
	  }, {
	    key: 'propsSize',
	    get: function get$$1() {
	      return this.props.size || this.props.defaultSize;
	    }
	  }, {
	    key: 'base',
	    get: function get$$1() {
	      var parent = this.parentNode;
	      if (!parent) return undefined;
	      return [].concat(toConsumableArray$1(parent.children)).find(function (n) {
	        if (n instanceof HTMLElement) {
	          return n.classList.contains(baseClassName);
	        }
	        return undefined;
	      });
	    }
	  }, {
	    key: 'size',
	    get: function get$$1() {
	      var width = 0;
	      var height = 0;
	      if (typeof window !== 'undefined') {
	        width = this.resizable.offsetWidth;
	        height = this.resizable.offsetHeight;
	      }
	      return { width: width, height: height };
	    }
	  }, {
	    key: 'sizeStyle',
	    get: function get$$1() {
	      var _this4 = this;

	      var size = this.props.size;

	      var getSize = function getSize(key) {
	        if (typeof _this4.state[key] === 'undefined' || _this4.state[key] === 'auto') return 'auto';
	        if (_this4.propsSize && _this4.propsSize[key] && endsWith(_this4.propsSize[key].toString(), '%')) {
	          if (endsWith(_this4.state[key].toString(), '%')) return _this4.state[key].toString();
	          var parentSize = _this4.getParentSize();
	          var value = Number(_this4.state[key].toString().replace('px', ''));
	          var percent = value / parentSize[key] * 100;
	          return percent + '%';
	        }
	        return getStringSize(_this4.state[key]);
	      };
	      var width = size && typeof size.width !== 'undefined' && !this.state.isResizing ? getStringSize(size.width) : getSize('width');
	      var height = size && typeof size.height !== 'undefined' && !this.state.isResizing ? getStringSize(size.height) : getSize('height');
	      return { width: width, height: height };
	    }
	  }]);
	  return Resizable;
	}(react_2);

	Resizable.defaultProps = {
	  onResizeStart: function onResizeStart() {},
	  onResize: function onResize() {},
	  onResizeStop: function onResizeStop() {},
	  enable: {
	    top: true,
	    right: true,
	    bottom: true,
	    left: true,
	    topRight: true,
	    bottomRight: true,
	    bottomLeft: true,
	    topLeft: true
	  },
	  style: {},
	  grid: [1, 1],
	  lockAspectRatio: false,
	  lockAspectRatioExtraWidth: 0,
	  lockAspectRatioExtraHeight: 0
	};

	var css$2 = ".DumbCard {\n  background: #fdfdfd;\n  border-radius: 2px;\n  height: 100%;\n  position: relative;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  display: flex;\n  padding: 16px 16px 16px 32px;\n  position: relative; }\n  .DumbCard.is-small {\n    font-size: 20px; }\n  .DumbCard.is-medium {\n    font-size: 28px;\n    font-weight: 500; }\n  .DumbCard.is-large {\n    font-size: 36px;\n    padding: 24px 24px 24px 48px; }\n\n.DumbCard__content {\n  display: flex;\n  flex: 1; }\n\n.DumbCard__side-banner {\n  width: 16px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #2a9d8f; }\n  .is-large .DumbCard__side-banner {\n    width: 24px; }\n";
	styleInject(css$2);

	var DumbCard = function (_Component) {
	  inherits(DumbCard, _Component);

	  function DumbCard() {
	    classCallCheck(this, DumbCard);
	    return possibleConstructorReturn(this, (DumbCard.__proto__ || Object.getPrototypeOf(DumbCard)).apply(this, arguments));
	  }

	  createClass(DumbCard, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          size = _props.size,
	          children = _props.children;


	      return react.createElement(
	        'div',
	        { className: 'DumbCard is-' + size },
	        react.createElement(
	          'div',
	          { className: 'DumbCard__content' },
	          react.createElement('div', { className: 'DumbCard__side-banner' }),
	          children
	        )
	      );
	    }
	  }]);
	  return DumbCard;
	}(react_2);


	DumbCard.propTypes = {
	  size: propTypes.string,
	  children: propTypes.element.isRequired
	};

	DumbCard.defaultProps = {
	  size: 'large'
	};

	var css$3 = ".Emoji {\n  transform: translateY(10%);\n  display: inline-block; }\n";
	styleInject(css$3);

	var Emoji = function (_PureComponent) {
	  inherits(Emoji, _PureComponent);

	  function Emoji() {
	    classCallCheck(this, Emoji);
	    return possibleConstructorReturn(this, (Emoji.__proto__ || Object.getPrototypeOf(Emoji)).apply(this, arguments));
	  }

	  createClass(Emoji, [{
	    key: 'render',
	    value: function render() {
	      var icon = this.props.icon;

	      return react.createElement(
	        'span',
	        { className: 'Emoji' },
	        icon
	      );
	    }
	  }]);
	  return Emoji;
	}(react_3);


	Emoji.propTypes = {
	  icon: propTypes.string.isRequired
	};

	var css$4 = ".ResizeableResponsiveCard {\n  margin: 0 16px 16px 0; }\n\n.ResizeableResponsiveCard__content {\n  display: flex;\n  flex-direction: column;\n  white-space: pre-wrap; }\n\n.ResizeableResponsiveCard__title {\n  font-size: 1em;\n  line-height: 1;\n  margin-bottom: .75em;\n  margin-top: 0;\n  font-weight: 500; }\n\n.ResizeableResponsiveCard__subtitle {\n  font-size: .8em;\n  line-height: 1;\n  margin-bottom: .5em;\n  margin-top: 0;\n  font-style: italic; }\n\n.ResizeableResponsiveCard__tidbit {\n  font-size: .6em;\n  line-height: 1.1;\n  margin-top: .5em; }\n  .ResizeableResponsiveCard__tidbit.is-bold {\n    font-weight: 600; }\n\n.ResizeableResponsiveCard__resizer {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 10%;\n  width: 10%; }\n  .ResizeableResponsiveCard__resizer:before {\n    content: \"\";\n    position: absolute;\n    bottom: 4px;\n    right: 4px;\n    top: 0;\n    left: 0;\n    background-color: white;\n    z-index: 1;\n    pointer-events: none; }\n  .ResizeableResponsiveCard__resizer:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #dbd5de; }\n";
	styleInject(css$4);

	var LargeContent = function LargeContent(_ref) {
	  var width = _ref.width;
	  return react.createElement(
	    react.Fragment,
	    null,
	    react.createElement(
	      'h1',
	      { className: 'ResizeableResponsiveCard__title' },
	      'Looping and setting props made easy ',
	      react.createElement(Emoji, { icon: '\uD83C\uDF89' })
	    ),
	    react.createElement(
	      'h2',
	      { className: 'ResizeableResponsiveCard__subtitle' },
	      'Current Width: ',
	      width,
	      'px'
	    ),
	    react.createElement(
	      'p',
	      { className: 'ResizeableResponsiveCard__tidbit' },
	      'You can use Sentinel for basically any usecase you would want to use requestAnimationFrame for. Including Element Queries, and even Animations.'
	    ),
	    react.createElement(
	      'p',
	      { className: 'ResizeableResponsiveCard__tidbit is-bold' },
	      'You can drag from the bottom right to make me larger or smaller!'
	    )
	  );
	};

	var MediumContent = function MediumContent(_ref2) {
	  var width = _ref2.width;
	  return react.createElement(
	    react.Fragment,
	    null,
	    react.createElement(
	      'h1',
	      { className: 'ResizeableResponsiveCard__title' },
	      'Efficient out of the box ',
	      react.createElement(Emoji, { icon: '\uD83C\uDF89' })
	    ),
	    react.createElement(
	      'h2',
	      { className: 'ResizeableResponsiveCard__subtitle' },
	      'Current Width: ',
	      width,
	      'px'
	    ),
	    react.createElement(
	      'p',
	      { className: 'ResizeableResponsiveCard__tidbit' },
	      'Sentinel will automatically shallow compare what you return, and will only update the wrapped component if something actually changes.'
	    ),
	    react.createElement(
	      'p',
	      { className: 'ResizeableResponsiveCard__tidbit' },
	      'if requestAnimationFrame is too heavy for you, setting the ',
	      react.createElement(
	        'code',
	        null,
	        'lowPriority'
	      ),
	      ' prop will loop using requestIdleCallback!'
	    )
	  );
	};

	var SmallContent = function SmallContent(_ref3) {
	  var width = _ref3.width;
	  return react.createElement(
	    react.Fragment,
	    null,
	    react.createElement(
	      'h1',
	      { className: 'ResizeableResponsiveCard__title' },
	      'Thats it, just trying to keep it simple here.'
	    ),
	    react.createElement(
	      'h2',
	      { className: 'ResizeableResponsiveCard__subtitle' },
	      'Current Width: ',
	      width,
	      'px'
	    ),
	    react.createElement(
	      'p',
	      { className: 'ResizeableResponsiveCard__tidbit is-bold' },
	      'There are definitely other ways of doing Element Queries and Animations.'
	    ),
	    react.createElement(
	      'p',
	      { className: 'ResizeableResponsiveCard__tidbit' },
	      'I often found myself writing requestAnimationFrame loops and hated it, so I decided to make it easier for myself and share it with all of you'
	    )
	  );
	};

	var ResizeableResponsiveCard = function (_Component) {
	  inherits(ResizeableResponsiveCard, _Component);

	  function ResizeableResponsiveCard() {
	    var _ref4;

	    var _temp, _this, _ret;

	    classCallCheck(this, ResizeableResponsiveCard);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref4 = ResizeableResponsiveCard.__proto__ || Object.getPrototypeOf(ResizeableResponsiveCard)).call.apply(_ref4, [this].concat(args))), _this), _this.getSize = function () {
	      var width = _this.container.offsetWidth;
	      if (width < 300) {
	        return {
	          size: 'small',
	          width: width
	        };
	      }

	      if (width < 425) return { size: 'medium', width: width };

	      return { size: 'large', width: width };
	    }, _this.permissions = {
	      top: false,
	      right: false,
	      bottom: false,
	      left: false,
	      topRight: false,
	      bottomRight: true,
	      bottomLeft: false,
	      topLeft: false
	    }, _this.renderCard = function (_ref5) {
	      var size = _ref5.size,
	          width = _ref5.width;
	      return react.createElement(
	        DumbCard,
	        { size: size },
	        react.createElement(
	          'div',
	          { className: 'ResizeableResponsiveCard__content' },
	          size === 'small' && react.createElement(SmallContent, { width: width }),
	          size === 'medium' && react.createElement(MediumContent, { width: width }),
	          size === 'large' && react.createElement(LargeContent, { width: width })
	        )
	      );
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(ResizeableResponsiveCard, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var startSize = this.props.startSize;

	      return react.createElement(
	        'div',
	        { className: 'ResizeableResponsiveCard', ref: function ref(el) {
	            return _this2.container = el;
	          } },
	        react.createElement(
	          Resizable,
	          {
	            lockAspectRatio: true,
	            defaultSize: { width: startSize, height: startSize },
	            enable: this.permissions,
	            minWidth: 232
	          },
	          react.createElement(Sentinel, { observe: this.getSize, render: this.renderCard }),
	          react.createElement('div', { className: 'ResizeableResponsiveCard__resizer' })
	        )
	      );
	    }
	  }]);
	  return ResizeableResponsiveCard;
	}(react_2);


	ResizeableResponsiveCard.propTypes = {
	  startSize: propTypes.number
	};

	ResizeableResponsiveCard.defaultProps = {
	  startSize: 365
	};

	LargeContent.propTypes = { width: propTypes.number.isRequired };
	MediumContent.propTypes = { width: propTypes.number.isRequired };
	SmallContent.propTypes = { width: propTypes.number.isRequired };

	var css$5 = ".ElementQueryExample {\n  min-height: 100vh;\n  width: 100vw;\n  padding: 24px; }\n\n.ElementQueryExample__header {\n  margin-bottom: 24px; }\n\n.ElementQueryExample__title {\n  margin-top: 0;\n  font-size: 2rem;\n  line-height: 2.2rem;\n  font-weight: 600;\n  margin-bottom: 8px; }\n\n.ElementQueryExample__tidbit {\n  margin-top: 0;\n  font-size: .8rem;\n  max-width: 30em;\n  margin-bottom: 8px; }\n\n.ElementQueryExample__content {\n  display: flex;\n  flex-flow: wrap; }\n\n.ElementQueryExample__button {\n  font-size: .7rem;\n  padding: .5em 1em;\n  color: #444;\n  border: 1px solid #999;\n  border: transparent;\n  background-color: #E6E6E6;\n  text-decoration: none;\n  border-radius: 2px;\n  cursor: pointer;\n  margin: 8px 8px 8px 0;\n  font-weight: 500; }\n  .ElementQueryExample__button:active, .ElementQueryExample__button:focus {\n    outline: 0; }\n  .ElementQueryExample__button:disabled {\n    pointer-events: none; }\n  .ElementQueryExample__button.is-cta {\n    background-color: #F4828C;\n    color: #ffffff; }\n";
	styleInject(css$5);

	var ElementQueryExample = function (_Component) {
	  inherits(ElementQueryExample, _Component);

	  function ElementQueryExample() {
	    classCallCheck(this, ElementQueryExample);

	    var _this = possibleConstructorReturn(this, (ElementQueryExample.__proto__ || Object.getPrototypeOf(ElementQueryExample)).call(this));

	    _this.getBodyWidth = function () {
	      return { width: document.body.offsetWidth };
	    };

	    _this.getCards = function () {
	      var numberOfCards = _this.state.numberOfCards;

	      var cards = [];

	      for (var i = 0; i < numberOfCards; i += 1) {
	        cards.push(react.createElement(ResizeableResponsiveCard, { key: i }));
	      }

	      return cards;
	    };

	    _this.addCard = function () {
	      return _this.setState(function (state) {
	        return { numberOfCards: state.numberOfCards + 1 };
	      });
	    };

	    _this.removeCard = function () {
	      return _this.setState(function (state) {
	        return { numberOfCards: state.numberOfCards - 1 };
	      });
	    };

	    _this.renderElementQueryExample = function (_ref) {
	      var width = _ref.width;
	      return react.createElement(
	        'div',
	        { className: 'ElementQueryExample' },
	        react.createElement(
	          'div',
	          { className: 'ElementQueryExample__header' },
	          react.createElement(
	            'h2',
	            { className: 'ElementQueryExample__title' },
	            'Element Query Example'
	          ),
	          react.createElement(
	            'p',
	            { className: 'ElementQueryExample__tidbit' },
	            'Element queries allow you to work based on properties of any given node. With only media queries, you could only work with the fact that your browser window is currently ',
	            width,
	            'px ',
	            react.createElement(Emoji, { icon: '\uD83D\uDE29' })
	          ),
	          react.createElement(
	            'div',
	            { className: 'ElementQueryExample__buttons' },
	            react.createElement(
	              'button',
	              { className: 'ElementQueryExample__button is-cta', onClick: _this.addCard },
	              'Add a card'
	            ),
	            _this.state.numberOfCards ? react.createElement(
	              'button',
	              { className: 'ElementQueryExample__button', onClick: _this.removeCard },
	              'Remove a card'
	            ) : null
	          )
	        ),
	        react.createElement(
	          'div',
	          { className: 'ElementQueryExample__content' },
	          _this.getCards(),
	          react.createElement(ResizeableResponsiveCard, { startSize: 425 }),
	          react.createElement(ResizeableResponsiveCard, { startSize: 325 }),
	          react.createElement(ResizeableResponsiveCard, { startSize: 240 })
	        )
	      );
	    };

	    _this.state = { numberOfCards: 0 };
	    return _this;
	  }

	  createClass(ElementQueryExample, [{
	    key: 'render',
	    value: function render() {
	      return react.createElement(Sentinel, { observe: this.getBodyWidth, render: this.renderElementQueryExample });
	    }
	  }]);
	  return ElementQueryExample;
	}(react_2);

	var css$6 = ".AnimatingSquare {\n  height: 100px;\n  width: 100px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  .AnimatingSquare:nth-child(1n) {\n    background-color: #593650; }\n  .AnimatingSquare:nth-child(2n) {\n    background-color: #557359; }\n  .AnimatingSquare:nth-child(3n) {\n    background-color: #D9D2C5; }\n  .AnimatingSquare:nth-child(4n) {\n    background-color: #D9BB96; }\n  .AnimatingSquare:nth-child(5n) {\n    background-color: #BF6860; }\n";
	styleInject(css$6);

	var AnimatingSquare = function (_Component) {
	  inherits(AnimatingSquare, _Component);

	  function AnimatingSquare() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, AnimatingSquare);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AnimatingSquare.__proto__ || Object.getPrototypeOf(AnimatingSquare)).call.apply(_ref, [this].concat(args))), _this), _this.animate = function (_ref2) {
	      var scale = _ref2.scale,
	          rotate = _ref2.rotate,
	          shrinking = _ref2.shrinking;

	      var needsToShrinkMore = shrinking && scale > 0;
	      var needsToStartShrinking = !shrinking && scale >= 1;

	      if (needsToStartShrinking || needsToShrinkMore) {
	        return {
	          scale: scale - 0.01,
	          rotate: rotate + 9,
	          shrinking: true
	        };
	      }

	      return {
	        scale: scale + 0.01,
	        rotate: rotate + 9,
	        shrinking: false
	      };
	    }, _this.initial = { scale: 0, rotate: 0 }, _this.renderSquare = function (_ref3) {
	      var scale = _ref3.scale,
	          rotate = _ref3.rotate;

	      var style = { transform: 'scale(' + scale + ') rotateZ(' + rotate + 'deg)' };
	      return react.createElement('div', {
	        className: 'AnimatingSquare',
	        style: style
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(AnimatingSquare, [{
	    key: 'render',
	    value: function render() {
	      var priority = this.props.priority;


	      return react.createElement(Sentinel, {
	        initial: this.initial,
	        lowPriority: !priority,
	        observe: this.animate,
	        render: this.renderSquare
	      });
	    }
	  }]);
	  return AnimatingSquare;
	}(react_2);


	AnimatingSquare.propTypes = { priority: propTypes.bool.isRequired };

	var css$7 = ".AnimationExample {\n  min-height: 100vh;\n  width: 100vw;\n  padding: 24px; }\n\n.AnimationExample__header {\n  margin-bottom: 24px; }\n\n.AnimationExample__title {\n  margin-top: 0;\n  font-size: 2rem;\n  line-height: 2.2rem;\n  font-weight: 600;\n  margin-bottom: 8px; }\n\n.AnimationExample__tidbit {\n  margin-top: 0;\n  font-size: .8rem;\n  max-width: 30em;\n  margin-bottom: 8px; }\n\n.AnimationExample__content {\n  display: flex;\n  flex-flow: wrap; }\n\n.AnimationExample__button {\n  font-size: .7rem;\n  padding: .5em 1em;\n  color: #444;\n  border: 1px solid #999;\n  border: transparent;\n  background-color: #E6E6E6;\n  text-decoration: none;\n  border-radius: 2px;\n  cursor: pointer;\n  margin: 8px 8px 8px 0;\n  font-weight: 500; }\n  .AnimationExample__button:active, .AnimationExample__button:focus {\n    outline: 0; }\n  .AnimationExample__button:disabled {\n    pointer-events: none; }\n  .AnimationExample__button.is-cta {\n    background-color: #F4828C;\n    color: #ffffff; }\n";
	styleInject(css$7);

	var AnimationExample = function (_Component) {
	  inherits(AnimationExample, _Component);

	  function AnimationExample() {
	    classCallCheck(this, AnimationExample);

	    var _this = possibleConstructorReturn(this, (AnimationExample.__proto__ || Object.getPrototypeOf(AnimationExample)).call(this));

	    _this.getBodyWidth = function () {
	      return { width: document.body.offsetWidth };
	    };

	    _this.getSquares = function () {
	      var _this$state = _this.state,
	          numberOfSquares = _this$state.numberOfSquares,
	          priority = _this$state.priority;

	      var squares = [];

	      for (var i = 0; i < numberOfSquares; i += 1) {
	        squares.push(react.createElement(AnimatingSquare, { key: i, priority: priority }));
	      }

	      return squares;
	    };

	    _this.addSquare = function () {
	      return _this.setState(function (state) {
	        return { numberOfSquares: state.numberOfSquares + 1 };
	      });
	    };

	    _this.removeSquare = function () {
	      return _this.setState(function (state) {
	        return { numberOfSquares: state.numberOfSquares - 1 };
	      });
	    };

	    _this.togglePriority = function () {
	      return _this.setState(function (state) {
	        return { priority: !state.priority };
	      });
	    };

	    _this.state = { numberOfSquares: 0, priority: true };
	    return _this;
	  }

	  createClass(AnimationExample, [{
	    key: 'render',
	    value: function render() {
	      var priority = this.state.priority;


	      return react.createElement(
	        'div',
	        { className: 'AnimationExample' },
	        react.createElement(
	          'div',
	          { className: 'AnimationExample__header' },
	          react.createElement(
	            'h2',
	            { className: 'AnimationExample__title' },
	            'Animation Example Demo'
	          ),
	          react.createElement(
	            'p',
	            { className: 'AnimationExample__tidbit' },
	            'Since its all requestAnimationFrame under the hood, you could use React Sentinel to create performant animations! If you switch to low priority, the animations may stop sporadically, but the UI thread shouldnt drop frames!'
	          ),
	          react.createElement(
	            'div',
	            { className: 'AnimationExample__buttons' },
	            react.createElement(
	              'button',
	              { className: 'AnimationExample__button is-cta', onClick: this.addSquare },
	              'Add a square'
	            ),
	            this.state.numberOfSquares ? react.createElement(
	              'button',
	              { className: 'AnimationExample__button', onClick: this.removeSquare },
	              'Remove a square'
	            ) : null,
	            react.createElement(
	              'button',
	              { className: 'AnimationExample__button', onClick: this.togglePriority },
	              'Switch to ',
	              priority ? 'low' : 'high',
	              ' priority'
	            )
	          )
	        ),
	        react.createElement(
	          'div',
	          { className: 'AnimationExample__content' },
	          react.createElement(AnimatingSquare, { priority: priority }),
	          react.createElement(AnimatingSquare, { priority: priority }),
	          this.getSquares()
	        )
	      );
	    }
	  }]);
	  return AnimationExample;
	}(react_2);

	var css$8 = "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n";
	styleInject(css$8);

	var css$9 = "/*! Typebase.less v0.1.0 | MIT License */\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: serif;\n  font-size: 137.5%;\n  -webkit-font-smoothing: antialiased; }\n\n/* Copy & Lists */\np {\n  line-height: .9rem;\n  margin-top: 1.5rem;\n  margin-bottom: 0; }\n\nul,\nol {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem; }\n\nul li,\nol li {\n  line-height: 1.5rem; }\n\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-top: 0;\n  margin-bottom: 0; }\n\nblockquote {\n  line-height: 1.5rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem; }\n\n/* Headings */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  /* Change heading typefaces here */\n  font-family: sans-serif;\n  margin-top: 1.5rem;\n  margin-bottom: 0;\n  line-height: 1.5rem; }\n\nh1 {\n  font-size: 4.242rem;\n  line-height: 4.5rem;\n  margin-top: 3rem; }\n\nh2 {\n  font-size: 2.828rem;\n  line-height: 3rem;\n  margin-top: 3rem; }\n\nh3 {\n  font-size: 1.414rem; }\n\nh4 {\n  font-size: 0.707rem; }\n\nh5 {\n  font-size: 0.4713333333333333rem; }\n\nh6 {\n  font-size: 0.3535rem; }\n\n/* Tables */\ntable {\n  margin-top: 1.5rem;\n  border-spacing: 0px;\n  border-collapse: collapse; }\n\ntable td,\ntable th {\n  padding: 0;\n  line-height: 33px; }\n\n/* Code blocks */\ncode {\n  vertical-align: bottom;\n  font-family: Menlo,Monaco,\"Courier New\",Courier,monospace;\n  background-color: #d3d3d352;\n  color: #e16883;\n  padding: 2px;\n  font-size: .9em; }\n\n/* Leading paragraph text */\n.lead {\n  font-size: 1.414rem; }\n\n/* Hug the block above you */\n.hug {\n  margin-top: 0; }\n";
	styleInject(css$9);

	var css$a = ".App {\n  min-height: 100vh;\n  width: 100vw;\n  background-color: #addcca;\n  color: #444; }\n";
	styleInject(css$a);

	var App = function (_Component) {
	  inherits(App, _Component);

	  function App() {
	    classCallCheck(this, App);
	    return possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return react.createElement(
	        'div',
	        { className: 'App' },
	        react.createElement(Navbar, null),
	        react.createElement(GithubCorner, null),
	        react.createElement(
	          Switch,
	          null,
	          react.createElement(Route, { path: '/element-query-example', component: ElementQueryExample }),
	          react.createElement(Route, { path: '/animation-example', component: AnimationExample }),
	          react.createElement(Redirect, { to: '/element-query-example' })
	        )
	      );
	    }
	  }]);
	  return App;
	}(react_2);

	reactDom_1(react.createElement(
	  HashRouter,
	  null,
	  react.createElement(App, null)
	), document.querySelectorAll('main')[0]);

}());
