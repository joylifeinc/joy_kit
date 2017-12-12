import { Component, createElement } from 'react';
import { css } from 'glamor';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import { Portal } from 'react-portal';
import { Link } from 'react-router-dom';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var titleWrapperRules = css({
    '> div': {
        paddingBottom: '12px'
    }
});
var titleRules = css({
    fontWeight: '800'
});
var subTitleRules = css({
    paddingLeft: '4px',
    color: '#817f7f'
});
var ActionHeader = function (_a) {
    var title = _a.title, titleOption = _a.titleOption, subtitle = _a.subtitle;
    return (createElement("div", __assign({}, titleWrapperRules),
        createElement("div", null,
            createElement("span", __assign({}, titleRules), title),
            createElement("span", __assign({}, subTitleRules), titleOption)),
        createElement("div", null, subtitle)));
};

var TEXT = {
    color: '#100f0d'
};
var COLORS = {
    BLACK_PRIMARY: '#100f0d',
    BLACK_SECONDARY: '#121212',
    BLUE_PRIMARY: '#4A90E2',
    GRAY_PRIMARY: '#E9E9E9',
    GRAY_SECONDARY: '#E8E8E8'
};

var buttonRules = {
    standard: {
        color: '#FFF',
        backgroundColor: '#121212',
        border: 'none',
        borderRadius: '40px',
        ':hover': {
            backgroundColor: '#383838',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease',
            boxShadow: '0px 2px 5px #888888'
        }
    },
    primary: {
        color: '#FFF',
        backgroundColor: COLORS.BLUE_PRIMARY,
        border: 'none',
        borderRadius: '40px',
        ':hover': {
            filter: 'brightness(120%)',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease',
            boxShadow: '0px 2px 5px #888888'
        }
    },
    secondary: {
        color: TEXT.color,
        backgroundColor: COLORS.GRAY_PRIMARY,
        border: 'none',
        borderRadius: '40px',
        ':hover': {
            background: '#f1efef',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease',
            boxShadow: '0px 2px 5px #888888'
        }
    },
    success: {
        color: '#FFF',
        backgroundColor: 'green',
        border: 'none',
        borderRadius: '40px',
        ':hover': {
            filter: 'brightness(120%)',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease',
            boxShadow: '0px 2px 5px #888888'
        }
    },
    security: {
        color: '#FFF',
        backgroundColor: '#121212',
        border: 'none',
        borderRadius: '40px',
        ':hover': {
            backgroundColor: '#fa615b',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease',
            boxShadow: '0px 2px 5px #888888'
        }
    },
    link: {
        color: '#121212',
        fontSize: '12px',
        padding: '0 5px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: 'none',
        borderRadius: '40px',
        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: '#6DADFF'
        }
    },
    outline: {
        color: COLORS.BLUE_PRIMARY,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: '1px solid #cccccc',
        borderRadius: '3px',
        ':hover': {
            color: '#6DADFF',
            borderColor: '#6DADFF'
        }
    }
};
var disabledRules = function (disabled, type) {
    return disabled
        ? {
            color: 'black',
            backgroundColor: type !== 'link' ? '#D0D0D0' : 'none',
            ':hover': {
                color: 'black',
                border: 'none',
                backgroundColor: type !== 'link' ? '#D0D0D0' : 'none',
                filter: 'none',
                transform: 'translateY(0px)',
                transition: 'none',
                boxShadow: 'none'
            },
            cursor: 'not-allowed'
        }
        : null;
};
var iconRules = function (icon, noChildren) {
    return icon
        ? {
            paddingLeft: noChildren ? '0' : '15px',
            marginRight: noChildren ? '0' : '10px'
        }
        : null;
};
var noChildrenRules = function (noChildren) {
    return noChildren
        ? css({
            padding: '15px',
            minWidth: '0'
        })
        : null;
};
var iconOnlyRules = function (noChildren) {
    return noChildren
        ? css({
            marginRight: '0'
        })
        : css({
            marginRight: '15px'
        });
};
var buttonStyleRules = function (type, uppercase, disabled, icon, backgroundColorOverride, colorOverride, noChildren) {
    return css(buttonRules[type], { textTransform: uppercase ? 'uppercase' : null }, iconRules(icon, noChildren), {
        cursor: 'pointer',
        fontSize: '10px',
        fontWeight: '600',
        letterSpacing: '1.5px',
        lineHeight: '40px',
        minWidth: '130px',
        padding: '0 25px',
        outline: 'none',
        textAlign: 'center',
        transition: 'background-color .2s ease',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, {
        backgroundColor: backgroundColorOverride ? backgroundColorOverride : null,
        ':hover': backgroundColorOverride
            ? {
                backgroundColor: backgroundColorOverride,
                filter: 'brightness(120%)',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease',
                boxShadow: '0px 2px 5px #888888'
            }
            : null,
        color: colorOverride ? colorOverride : null
    }, disabledRules(disabled, type));
};
var Button = function (_a) {
    var children = _a.children, handleOnClick = _a.handleOnClick, type = _a.type, _b = _a.uppercase, uppercase = _b === void 0 ? true : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, icon = _a.icon, backgroundColorOverride = _a.backgroundColorOverride, colorOverride = _a.colorOverride, styleOverride = _a.styleOverride;
    return (createElement("button", __assign({ disabled: disabled }, buttonStyleRules(type ? type : 'standard', uppercase, disabled, icon, backgroundColorOverride, colorOverride, !children), noChildrenRules(!children), css(styleOverride), { onClick: handleOnClick }),
        icon ? (createElement("img", __assign({}, iconRules, iconOnlyRules(!children), { src: icon }))) : null,
        children));
};

var navItemRules = css({
    color: COLORS.BLUE_PRIMARY,
    cursor: 'pointer'
});
var CommandBarNavItem = function (_a) {
    var children = _a.children, content = _a.content, handleOnClick = _a.handleOnClick;
    return (createElement("span", __assign({}, navItemRules, { onClick: handleOnClick }), children ? children : content));
};

var commandBarRules = css({
    alignItems: 'center',
    background: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
});
var titleRules$1 = css({
    color: TEXT.color,
    left: 40,
    fontSize: 15,
    position: 'absolute'
});
var navRules = css({
    '> *:not(:last-child)': {
        marginRight: 100
    }
});
var actionRules = css({
    position: 'absolute',
    right: 40
});
var renderNavItems = function (navItems) {
    if (navItems instanceof Array) {
        return navItems.map(function (_a) {
            var content = _a.content, key = _a.key, handleOnClick = _a.handleOnClick;
            return (createElement(CommandBarNavItem, { key: key, content: content, handleOnClick: handleOnClick }));
        });
    }
    return navItems;
};
var Container = function (_a) {
    var contentRight = _a.contentRight, nav = _a.nav, title = _a.title;
    return (createElement("div", __assign({ className: "command-bar" }, commandBarRules),
        createElement("div", __assign({ className: "command-bar__title" }, titleRules$1), title),
        createElement("div", __assign({ className: "command-bar__nav" }, navRules), renderNavItems(nav)),
        contentRight && (createElement("div", __assign({ className: "command-bar__action" }, actionRules), contentRight))));
};
var CommandBar = {
    Container: Container,
    NavItem: CommandBarNavItem
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var velocity = createCommonjsModule(function (module) {
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

(function(window) {
	if (window.jQuery) {
		return;
	}

	/* jQuery base. */
	var $ = function(selector, context) {
		return new $.fn.init(selector, context);
	};

	/********************
	 Private Methods
	 ********************/

	/* jQuery */
	$.isWindow = function(obj) {
		/* jshint eqeqeq: false */
		return obj && obj === obj.window;
	};

	/* jQuery */
	$.type = function(obj) {
		if (!obj) {
			return obj + "";
		}

		return typeof obj === "object" || typeof obj === "function" ?
				class2type[toString.call(obj)] || "object" :
				typeof obj;
	};

	/* jQuery */
	$.isArray = Array.isArray || function(obj) {
		return $.type(obj) === "array";
	};

	/* jQuery */
	function isArraylike(obj) {
		var length = obj.length,
				type = $.type(obj);

		if (type === "function" || $.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	/***************
	 $ Methods
	 ***************/

	/* jQuery: Support removed for IE<9. */
	$.isPlainObject = function(obj) {
		var key;

		if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
			return false;
		}

		try {
			if (obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}
		} catch (e) {
			return false;
		}

		for (key in obj) {
		}

		return key === undefined || hasOwn.call(obj, key);
	};

	/* jQuery */
	$.each = function(obj, callback, args) {
		var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike(obj);

		if (args) {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			}

		} else {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			}
		}

		return obj;
	};

	/* Custom */
	$.data = function(node, key, value) {
		/* $.getData() */
		if (value === undefined) {
			var getId = node[$.expando],
					store = getId && cache[getId];

			if (key === undefined) {
				return store;
			} else if (store) {
				if (key in store) {
					return store[key];
				}
			}
			/* $.setData() */
		} else if (key !== undefined) {
			var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

			cache[setId] = cache[setId] || {};
			cache[setId][key] = value;

			return value;
		}
	};

	/* Custom */
	$.removeData = function(node, keys) {
		var id = node[$.expando],
				store = id && cache[id];

		if (store) {
			// Cleanup the entire store if no keys are provided.
			if (!keys) {
				delete cache[id];
			} else {
				$.each(keys, function(_, key) {
					delete store[key];
				});
			}
		}
	};

	/* jQuery */
	$.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length,
				deep = false;

		if (typeof target === "boolean") {
			deep = target;

			target = arguments[i] || {};
			i++;
		}

		if (typeof target !== "object" && $.type(target) !== "function") {
			target = {};
		}

		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			if ((options = arguments[i])) {
				for (name in options) {
					if (!options.hasOwnProperty(name)) {
						continue;
					}
					src = target[name];
					copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $.isArray(src) ? src : [];

						} else {
							clone = src && $.isPlainObject(src) ? src : {};
						}

						target[name] = $.extend(deep, clone, copy);

					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		return target;
	};

	/* jQuery 1.4.3 */
	$.queue = function(elem, type, data) {
		function $makeArray(arr, results) {
			var ret = results || [];

			if (arr) {
				if (isArraylike(Object(arr))) {
					/* $.merge */
					(function(first, second) {
						var len = +second.length,
								j = 0,
								i = first.length;

						while (j < len) {
							first[i++] = second[j++];
						}

						if (len !== len) {
							while (second[j] !== undefined) {
								first[i++] = second[j++];
							}
						}

						first.length = i;

						return first;
					})(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					[].push.call(ret, arr);
				}
			}

			return ret;
		}

		if (!elem) {
			return;
		}

		type = (type || "fx") + "queue";

		var q = $.data(elem, type);

		if (!data) {
			return q || [];
		}

		if (!q || $.isArray(data)) {
			q = $.data(elem, type, $makeArray(data));
		} else {
			q.push(data);
		}

		return q;
	};

	/* jQuery 1.4.3 */
	$.dequeue = function(elems, type) {
		/* Custom: Embed element iteration. */
		$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
			type = type || "fx";

			var queue = $.queue(elem, type),
					fn = queue.shift();

			if (fn === "inprogress") {
				fn = queue.shift();
			}

			if (fn) {
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				fn.call(elem, function() {
					$.dequeue(elem, type);
				});
			}
		});
	};

	/******************
	 $.fn Methods
	 ******************/

	/* jQuery */
	$.fn = $.prototype = {
		init: function(selector) {
			/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
			if (selector.nodeType) {
				this[0] = selector;

				return this;
			} else {
				throw new Error("Not a DOM node.");
			}
		},
		offset: function() {
			/* jQuery altered code: Dropped disconnected DOM node checking. */
			var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};

			return {
				top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
				left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
			};
		},
		position: function() {
			/* jQuery */
			function offsetParentFn(elem) {
				var offsetParent = elem.offsetParent;

				while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || document;
			}

			/* Zepto */
			var elem = this[0],
					offsetParent = offsetParentFn(elem),
					offset = this.offset(),
					parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();

			offset.top -= parseFloat(elem.style.marginTop) || 0;
			offset.left -= parseFloat(elem.style.marginLeft) || 0;

			if (offsetParent.style) {
				parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
				parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
			}

			return {
				top: offset.top - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
	};

	/**********************
	 Private Variables
	 **********************/

	/* For $.data() */
	var cache = {};
	$.expando = "velocity" + (new Date().getTime());
	$.uuid = 0;

	/* For $.queue() */
	var class2type = {},
			hasOwn = class2type.hasOwnProperty,
			toString = class2type.toString;

	var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	for (var i = 0; i < types.length; i++) {
		class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	}

	/* Makes $(node) possible, without having to call init. */
	$.fn.init.prototype = $.fn;

	/* Globalize Velocity onto the window, and assign its Utilities property. */
	window.Velocity = {Utilities: $};
})(window);

/******************
 Velocity.js
 ******************/

(function(factory) {
	{
		module.exports = factory();
		/* AMD module. */
	}
}(function() {
	return function(global, window, document, undefined) {

		/***************
		 Summary
		 ***************/

		/*
		 - CSS: CSS stack that works independently from the rest of Velocity.
		 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
		 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
		 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
		 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
		 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
		 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
		 - completeCall(): Handles the cleanup process for each Velocity call.
		 */

		/*********************
		 Helper Functions
		 *********************/

		/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
		var IE = (function() {
			if (document.documentMode) {
				return document.documentMode;
			} else {
				for (var i = 7; i > 4; i--) {
					var div = document.createElement("div");

					div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

					if (div.getElementsByTagName("span").length) {
						div = null;

						return i;
					}
				}
			}

			return undefined;
		})();

		/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
		var rAFShim = (function() {
			var timeLast = 0;

			return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
				var timeCurrent = (new Date()).getTime(),
						timeDelta;

				/* Dynamically set delay on a per-tick basis to match 60fps. */
				/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
				timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
				timeLast = timeCurrent + timeDelta;

				return setTimeout(function() {
					callback(timeCurrent + timeDelta);
				}, timeDelta);
			};
		})();

		var performance = (function() {
			var perf = window.performance || {};

			if (typeof perf.now !== "function") {
				var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();

				perf.now = function() {
					return (new Date()).getTime() - nowOffset;
				};
			}
			return perf;
		})();

		/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
		function compactSparseArray(array) {
			var index = -1,
					length = array ? array.length : 0,
					result = [];

			while (++index < length) {
				var value = array[index];

				if (value) {
					result.push(value);
				}
			}

			return result;
		}

		/**
		 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
		 * (technically, since host objects have been implementation-dependent,
		 * at least before ES2015, IE hasn't needed to work this way).
		 * Also works on strings, fixes IE < 9 to allow an explicit undefined
		 * for the 2nd argument (as in Firefox), and prevents errors when
		 * called on other DOM objects.
		 */
		var _slice = (function() {
			var slice = Array.prototype.slice;

			try {
				// Can't be used with DOM elements in IE < 9
				slice.call(document.documentElement);
				return slice;
			} catch (e) { // Fails in IE < 9

				// This will work for genuine arrays, array-like objects, 
				// NamedNodeMap (attributes, entities, notations),
				// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
				// and will not fail on other DOM objects (as do DOM elements in IE < 9)
				return function(begin, end) {
					var len = this.length;

					if (typeof begin !== "number") {
						begin = 0;
					}
					// IE < 9 gets unhappy with an undefined end argument
					if (typeof end !== "number") {
						end = len;
					}
					// For native Array objects, we use the native slice function
					if (this.slice) {
						return slice.call(this, begin, end);
					}
					// For array like object we handle it ourselves.
					var i,
							cloned = [],
							// Handle negative value for "begin"
							start = (begin >= 0) ? begin : Math.max(0, len + begin),
							// Handle negative value for "end"
							upTo = end < 0 ? len + end : Math.min(end, len),
							// Actual expected size of the slice
							size = upTo - start;

					if (size > 0) {
						cloned = new Array(size);
						if (this.charAt) {
							for (i = 0; i < size; i++) {
								cloned[i] = this.charAt(start + i);
							}
						} else {
							for (i = 0; i < size; i++) {
								cloned[i] = this[start + i];
							}
						}
					}
					return cloned;
				};
			}
		})();

		/* .indexOf doesn't exist in IE<9 */
		var _inArray = (function() {
			if (Array.prototype.includes) {
				return function(arr, val) {
					return arr.includes(val);
				};
			}
			if (Array.prototype.indexOf) {
				return function(arr, val) {
					return arr.indexOf(val) >= 0;
				};
			}
			return function(arr, val) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] === val) {
						return true;
					}
				}
				return false;
			};
		});

		function sanitizeElements(elements) {
			/* Unwrap jQuery/Zepto objects. */
			if (Type.isWrapped(elements)) {
				elements = _slice.call(elements);
				/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
			} else if (Type.isNode(elements)) {
				elements = [elements];
			}

			return elements;
		}

		var Type = {
			isNumber: function(variable) {
				return (typeof variable === "number");
			},
			isString: function(variable) {
				return (typeof variable === "string");
			},
			isArray: Array.isArray || function(variable) {
				return Object.prototype.toString.call(variable) === "[object Array]";
			},
			isFunction: function(variable) {
				return Object.prototype.toString.call(variable) === "[object Function]";
			},
			isNode: function(variable) {
				return variable && variable.nodeType;
			},
			/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
			/* NOTE: HTMLFormElements also have a length. */
			isWrapped: function(variable) {
				return variable
						&& variable !== window
						&& Type.isNumber(variable.length)
						&& !Type.isString(variable)
						&& !Type.isFunction(variable)
						&& !Type.isNode(variable)
						&& (variable.length === 0 || Type.isNode(variable[0]));
			},
			isSVG: function(variable) {
				return window.SVGElement && (variable instanceof window.SVGElement);
			},
			isEmptyObject: function(variable) {
				for (var name in variable) {
					if (variable.hasOwnProperty(name)) {
						return false;
					}
				}

				return true;
			}
		};

		/*****************
		 Dependencies
		 *****************/

		var $,
				isJQuery = false;

		if (global.fn && global.fn.jquery) {
			$ = global;
			isJQuery = true;
		} else {
			$ = window.Velocity.Utilities;
		}

		if (IE <= 8 && !isJQuery) {
			throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		} else if (IE <= 7) {
			/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
			jQuery.fn.velocity = jQuery.fn.animate;

			/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
			return;
		}

		/*****************
		 Constants
		 *****************/

		var DURATION_DEFAULT = 400,
				EASING_DEFAULT = "swing";

		/*************
		 State
		 *************/

		var Velocity = {
			/* Container for page-wide Velocity state data. */
			State: {
				/* Detect mobile devices to determine if mobileHA should be turned on. */
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
				isAndroid: /Android/i.test(navigator.userAgent),
				isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
				isChrome: window.chrome,
				isFirefox: /Firefox/i.test(navigator.userAgent),
				/* Create a cached element for re-use when checking for CSS property prefixes. */
				prefixElement: document.createElement("div"),
				/* Cache every prefix match to avoid repeating lookups. */
				prefixMatches: {},
				/* Cache the anchor used for animating window scrolling. */
				scrollAnchor: null,
				/* Cache the browser-specific property names associated with the scroll anchor. */
				scrollPropertyLeft: null,
				scrollPropertyTop: null,
				/* Keep track of whether our RAF tick is running. */
				isTicking: false,
				/* Container for every in-progress call to Velocity. */
				calls: [],
				delayedElements: {
					count: 0
				}
			},
			/* Velocity's custom CSS stack. Made global for unit testing. */
			CSS: {/* Defined below. */},
			/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
			Utilities: $,
			/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
			Redirects: {/* Manually registered by the user. */},
			Easings: {/* Defined below. */},
			/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
			Promise: window.Promise,
			/* Velocity option defaults, which can be overriden by the user. */
			defaults: {
				queue: "",
				duration: DURATION_DEFAULT,
				easing: EASING_DEFAULT,
				begin: undefined,
				complete: undefined,
				progress: undefined,
				display: undefined,
				visibility: undefined,
				loop: false,
				delay: false,
				mobileHA: true,
				/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
				_cacheValues: true,
				/* Advanced: Set to false if the promise should always resolve on empty element lists. */
				promiseRejectEmpty: true
			},
			/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
			init: function(element) {
				$.data(element, "velocity", {
					/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
					isSVG: Type.isSVG(element),
					/* Keep track of whether the element is currently being animated by Velocity.
					 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
					isAnimating: false,
					/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					computedStyle: null,
					/* Tween data is cached for each animation on the element so that data can be passed across calls --
					 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
					tweensContainer: null,
					/* The full root property values of each CSS hook being animated on this element are cached so that:
					 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
					 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
					rootPropertyValueCache: {},
					/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
					transformCache: {}
				});
			},
			/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
			hook: null, /* Defined below. */
			/* Velocity-wide animation time remapping for testing purposes. */
			mock: false,
			version: {major: 1, minor: 5, patch: 0},
			/* Set to 1 or 2 (most verbose) to output debug info to console. */
			debug: false,
			/* Use rAF high resolution timestamp when available */
			timestamp: true,
			/* Pause all animations */
			pauseAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to paused */
						activeCall[5] = {
							resume: false
						};
					}
				});

				/* Pause timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					pauseDelayOnElement(element, currentTime);
				});
			},
			/* Resume all animations */
			resumeAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to resumed if it was paused */
						if (activeCall[5]) {
							activeCall[5].resume = true;
						}
					}
				});
				/* Resume timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					resumeDelayOnElement(element, currentTime);
				});
			}
		};

		/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
		if (window.pageYOffset !== undefined) {
			Velocity.State.scrollAnchor = window;
			Velocity.State.scrollPropertyLeft = "pageXOffset";
			Velocity.State.scrollPropertyTop = "pageYOffset";
		} else {
			Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
			Velocity.State.scrollPropertyLeft = "scrollLeft";
			Velocity.State.scrollPropertyTop = "scrollTop";
		}

		/* Shorthand alias for jQuery's $.data() utility. */
		function Data(element) {
			/* Hardcode a reference to the plugin name. */
			var response = $.data(element, "velocity");

			/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
			return response === null ? undefined : response;
		}

		/**************
		 Delay Timer
		 **************/

		function pauseDelayOnElement(element, currentTime) {
			/* Check for any delay timers, and pause the set timeouts (while preserving time data)
			 to be resumed when the "resume" command is issued */
			var data = Data(element);
			if (data && data.delayTimer && !data.delayPaused) {
				data.delayRemaining = data.delay - currentTime + data.delayBegin;
				data.delayPaused = true;
				clearTimeout(data.delayTimer.setTimeout);
			}
		}

		function resumeDelayOnElement(element, currentTime) {
			/* Check for any paused timers and resume */
			var data = Data(element);
			if (data && data.delayTimer && data.delayPaused) {
				/* If the element was mid-delay, re initiate the timeout with the remaining delay */
				data.delayPaused = false;
				data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
			}
		}



		/**************
		 Easing
		 **************/

		/* Step easing generator. */
		function generateStep(steps) {
			return function(p) {
				return Math.round(p * steps) * (1 / steps);
			};
		}

		/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		function generateBezier(mX1, mY1, mX2, mY2) {
			var NEWTON_ITERATIONS = 4,
					NEWTON_MIN_SLOPE = 0.001,
					SUBDIVISION_PRECISION = 0.0000001,
					SUBDIVISION_MAX_ITERATIONS = 10,
					kSplineTableSize = 11,
					kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
					float32ArraySupported = "Float32Array" in window;

			/* Must contain four arguments. */
			if (arguments.length !== 4) {
				return false;
			}

			/* Arguments must be numbers. */
			for (var i = 0; i < 4; ++i) {
				if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
					return false;
				}
			}

			/* X values must be in the [0, 1] range. */
			mX1 = Math.min(mX1, 1);
			mX2 = Math.min(mX2, 1);
			mX1 = Math.max(mX1, 0);
			mX2 = Math.max(mX2, 0);

			var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

			function A(aA1, aA2) {
				return 1.0 - 3.0 * aA2 + 3.0 * aA1;
			}
			function B(aA1, aA2) {
				return 3.0 * aA2 - 6.0 * aA1;
			}
			function C(aA1) {
				return 3.0 * aA1;
			}

			function calcBezier(aT, aA1, aA2) {
				return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
			}

			function getSlope(aT, aA1, aA2) {
				return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
			}

			function newtonRaphsonIterate(aX, aGuessT) {
				for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
					var currentSlope = getSlope(aGuessT, mX1, mX2);

					if (currentSlope === 0.0) {
						return aGuessT;
					}

					var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
					aGuessT -= currentX / currentSlope;
				}

				return aGuessT;
			}

			function calcSampleValues() {
				for (var i = 0; i < kSplineTableSize; ++i) {
					mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
				}
			}

			function binarySubdivide(aX, aA, aB) {
				var currentX, currentT, i = 0;

				do {
					currentT = aA + (aB - aA) / 2.0;
					currentX = calcBezier(currentT, mX1, mX2) - aX;
					if (currentX > 0.0) {
						aB = currentT;
					} else {
						aA = currentT;
					}
				} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

				return currentT;
			}

			function getTForX(aX) {
				var intervalStart = 0.0,
						currentSample = 1,
						lastSample = kSplineTableSize - 1;

				for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
					intervalStart += kSampleStepSize;
				}

				--currentSample;

				var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
						guessForT = intervalStart + dist * kSampleStepSize,
						initialSlope = getSlope(guessForT, mX1, mX2);

				if (initialSlope >= NEWTON_MIN_SLOPE) {
					return newtonRaphsonIterate(aX, guessForT);
				} else if (initialSlope === 0.0) {
					return guessForT;
				} else {
					return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
				}
			}

			var _precomputed = false;

			function precompute() {
				_precomputed = true;
				if (mX1 !== mY1 || mX2 !== mY2) {
					calcSampleValues();
				}
			}

			var f = function(aX) {
				if (!_precomputed) {
					precompute();
				}
				if (mX1 === mY1 && mX2 === mY2) {
					return aX;
				}
				if (aX === 0) {
					return 0;
				}
				if (aX === 1) {
					return 1;
				}

				return calcBezier(getTForX(aX), mY1, mY2);
			};

			f.getControlPoints = function() {
				return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
			};

			var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
			f.toString = function() {
				return str;
			};

			return f;
		}

		/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
		var generateSpringRK4 = (function() {
			function springAccelerationForState(state) {
				return (-state.tension * state.x) - (state.friction * state.v);
			}

			function springEvaluateStateWithDerivative(initialState, dt, derivative) {
				var state = {
					x: initialState.x + derivative.dx * dt,
					v: initialState.v + derivative.dv * dt,
					tension: initialState.tension,
					friction: initialState.friction
				};

				return {dx: state.v, dv: springAccelerationForState(state)};
			}

			function springIntegrateState(state, dt) {
				var a = {
					dx: state.v,
					dv: springAccelerationForState(state)
				},
						b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
						c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
						d = springEvaluateStateWithDerivative(state, dt, c),
						dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
						dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

				state.x = state.x + dxdt * dt;
				state.v = state.v + dvdt * dt;

				return state;
			}

			return function springRK4Factory(tension, friction, duration) {

				var initState = {
					x: -1,
					v: 0,
					tension: null,
					friction: null
				},
						path = [0],
						time_lapsed = 0,
						tolerance = 1 / 10000,
						DT = 16 / 1000,
						have_duration, dt, last_state;

				tension = parseFloat(tension) || 500;
				friction = parseFloat(friction) || 20;
				duration = duration || null;

				initState.tension = tension;
				initState.friction = friction;

				have_duration = duration !== null;

				/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
				if (have_duration) {
					/* Run the simulation without a duration. */
					time_lapsed = springRK4Factory(tension, friction);
					/* Compute the adjusted time delta. */
					dt = time_lapsed / duration * DT;
				} else {
					dt = DT;
				}

				while (true) {
					/* Next/step function .*/
					last_state = springIntegrateState(last_state || initState, dt);
					/* Store the position. */
					path.push(1 + last_state.x);
					time_lapsed += 16;
					/* If the change threshold is reached, break. */
					if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
						break;
					}
				}

				/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
				 computed path and returns a snapshot of the position according to a given percentComplete. */
				return !have_duration ? time_lapsed : function(percentComplete) {
					return path[ (percentComplete * (path.length - 1)) | 0 ];
				};
			};
		}());

		/* jQuery easings. */
		Velocity.Easings = {
			linear: function(p) {
				return p;
			},
			swing: function(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
			spring: function(p) {
				return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
			}
		};

		/* CSS3 and Robert Penner easings. */
		$.each(
				[
					["ease", [0.25, 0.1, 0.25, 1.0]],
					["ease-in", [0.42, 0.0, 1.00, 1.0]],
					["ease-out", [0.00, 0.0, 0.58, 1.0]],
					["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
					["easeInSine", [0.47, 0, 0.745, 0.715]],
					["easeOutSine", [0.39, 0.575, 0.565, 1]],
					["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
					["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
					["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
					["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
					["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
					["easeOutCubic", [0.215, 0.61, 0.355, 1]],
					["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
					["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
					["easeOutQuart", [0.165, 0.84, 0.44, 1]],
					["easeInOutQuart", [0.77, 0, 0.175, 1]],
					["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
					["easeOutQuint", [0.23, 1, 0.32, 1]],
					["easeInOutQuint", [0.86, 0, 0.07, 1]],
					["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
					["easeOutExpo", [0.19, 1, 0.22, 1]],
					["easeInOutExpo", [1, 0, 0, 1]],
					["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
					["easeOutCirc", [0.075, 0.82, 0.165, 1]],
					["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
				], function(i, easingArray) {
			Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
		});

		/* Determine the appropriate easing type given an easing input. */
		function getEasing(value, duration) {
			var easing = value;

			/* The easing option can either be a string that references a pre-registered easing,
			 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
			if (Type.isString(value)) {
				/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
				if (!Velocity.Easings[value]) {
					easing = false;
				}
			} else if (Type.isArray(value) && value.length === 1) {
				easing = generateStep.apply(null, value);
			} else if (Type.isArray(value) && value.length === 2) {
				/* springRK4 must be passed the animation's duration. */
				/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
				 function generated with default tension and friction values. */
				easing = generateSpringRK4.apply(null, value.concat([duration]));
			} else if (Type.isArray(value) && value.length === 4) {
				/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
				easing = generateBezier.apply(null, value);
			} else {
				easing = false;
			}

			/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
			 if the Velocity-wide default has been incorrectly modified. */
			if (easing === false) {
				if (Velocity.Easings[Velocity.defaults.easing]) {
					easing = Velocity.defaults.easing;
				} else {
					easing = EASING_DEFAULT;
				}
			}

			return easing;
		}

		/*****************
		 CSS Stack
		 *****************/

		/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
		 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
		/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
		var CSS = Velocity.CSS = {
			/*************
			 RegEx
			 *************/

			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
			},
			/************
			 Lists
			 ************/

			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
				units: [
					"%", // relative
					"em", "ex", "ch", "rem", // font relative
					"vw", "vh", "vmin", "vmax", // viewport relative
					"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
					"deg", "grad", "rad", "turn", // angles
					"s", "ms" // time
				],
				colorNames: {
					"aliceblue": "240,248,255",
					"antiquewhite": "250,235,215",
					"aquamarine": "127,255,212",
					"aqua": "0,255,255",
					"azure": "240,255,255",
					"beige": "245,245,220",
					"bisque": "255,228,196",
					"black": "0,0,0",
					"blanchedalmond": "255,235,205",
					"blueviolet": "138,43,226",
					"blue": "0,0,255",
					"brown": "165,42,42",
					"burlywood": "222,184,135",
					"cadetblue": "95,158,160",
					"chartreuse": "127,255,0",
					"chocolate": "210,105,30",
					"coral": "255,127,80",
					"cornflowerblue": "100,149,237",
					"cornsilk": "255,248,220",
					"crimson": "220,20,60",
					"cyan": "0,255,255",
					"darkblue": "0,0,139",
					"darkcyan": "0,139,139",
					"darkgoldenrod": "184,134,11",
					"darkgray": "169,169,169",
					"darkgrey": "169,169,169",
					"darkgreen": "0,100,0",
					"darkkhaki": "189,183,107",
					"darkmagenta": "139,0,139",
					"darkolivegreen": "85,107,47",
					"darkorange": "255,140,0",
					"darkorchid": "153,50,204",
					"darkred": "139,0,0",
					"darksalmon": "233,150,122",
					"darkseagreen": "143,188,143",
					"darkslateblue": "72,61,139",
					"darkslategray": "47,79,79",
					"darkturquoise": "0,206,209",
					"darkviolet": "148,0,211",
					"deeppink": "255,20,147",
					"deepskyblue": "0,191,255",
					"dimgray": "105,105,105",
					"dimgrey": "105,105,105",
					"dodgerblue": "30,144,255",
					"firebrick": "178,34,34",
					"floralwhite": "255,250,240",
					"forestgreen": "34,139,34",
					"fuchsia": "255,0,255",
					"gainsboro": "220,220,220",
					"ghostwhite": "248,248,255",
					"gold": "255,215,0",
					"goldenrod": "218,165,32",
					"gray": "128,128,128",
					"grey": "128,128,128",
					"greenyellow": "173,255,47",
					"green": "0,128,0",
					"honeydew": "240,255,240",
					"hotpink": "255,105,180",
					"indianred": "205,92,92",
					"indigo": "75,0,130",
					"ivory": "255,255,240",
					"khaki": "240,230,140",
					"lavenderblush": "255,240,245",
					"lavender": "230,230,250",
					"lawngreen": "124,252,0",
					"lemonchiffon": "255,250,205",
					"lightblue": "173,216,230",
					"lightcoral": "240,128,128",
					"lightcyan": "224,255,255",
					"lightgoldenrodyellow": "250,250,210",
					"lightgray": "211,211,211",
					"lightgrey": "211,211,211",
					"lightgreen": "144,238,144",
					"lightpink": "255,182,193",
					"lightsalmon": "255,160,122",
					"lightseagreen": "32,178,170",
					"lightskyblue": "135,206,250",
					"lightslategray": "119,136,153",
					"lightsteelblue": "176,196,222",
					"lightyellow": "255,255,224",
					"limegreen": "50,205,50",
					"lime": "0,255,0",
					"linen": "250,240,230",
					"magenta": "255,0,255",
					"maroon": "128,0,0",
					"mediumaquamarine": "102,205,170",
					"mediumblue": "0,0,205",
					"mediumorchid": "186,85,211",
					"mediumpurple": "147,112,219",
					"mediumseagreen": "60,179,113",
					"mediumslateblue": "123,104,238",
					"mediumspringgreen": "0,250,154",
					"mediumturquoise": "72,209,204",
					"mediumvioletred": "199,21,133",
					"midnightblue": "25,25,112",
					"mintcream": "245,255,250",
					"mistyrose": "255,228,225",
					"moccasin": "255,228,181",
					"navajowhite": "255,222,173",
					"navy": "0,0,128",
					"oldlace": "253,245,230",
					"olivedrab": "107,142,35",
					"olive": "128,128,0",
					"orangered": "255,69,0",
					"orange": "255,165,0",
					"orchid": "218,112,214",
					"palegoldenrod": "238,232,170",
					"palegreen": "152,251,152",
					"paleturquoise": "175,238,238",
					"palevioletred": "219,112,147",
					"papayawhip": "255,239,213",
					"peachpuff": "255,218,185",
					"peru": "205,133,63",
					"pink": "255,192,203",
					"plum": "221,160,221",
					"powderblue": "176,224,230",
					"purple": "128,0,128",
					"red": "255,0,0",
					"rosybrown": "188,143,143",
					"royalblue": "65,105,225",
					"saddlebrown": "139,69,19",
					"salmon": "250,128,114",
					"sandybrown": "244,164,96",
					"seagreen": "46,139,87",
					"seashell": "255,245,238",
					"sienna": "160,82,45",
					"silver": "192,192,192",
					"skyblue": "135,206,235",
					"slateblue": "106,90,205",
					"slategray": "112,128,144",
					"snow": "255,250,250",
					"springgreen": "0,255,127",
					"steelblue": "70,130,180",
					"tan": "210,180,140",
					"teal": "0,128,128",
					"thistle": "216,191,216",
					"tomato": "255,99,71",
					"turquoise": "64,224,208",
					"violet": "238,130,238",
					"wheat": "245,222,179",
					"whitesmoke": "245,245,245",
					"white": "255,255,255",
					"yellowgreen": "154,205,50",
					"yellow": "255,255,0"
				}
			},
			/************
			 Hooks
			 ************/

			/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
			 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
			/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
			 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
			Hooks: {
				/********************
				 Registration
				 ********************/

				/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
				/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
				templates: {
					"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
					"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
					"backgroundPosition": ["X Y", "0% 0%"],
					"transformOrigin": ["X Y Z", "50% 50% 0px"],
					"perspectiveOrigin": ["X Y", "50% 50%"]
				},
				/* A "registered" hook is one that has been converted from its template form into a live,
				 tweenable property. It contains data to associate it with its root property. */
				registered: {
					/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
					 which consists of the subproperty's name, the associated root property's name,
					 and the subproperty's position in the root's value. */
				},
				/* Convert the templates into individual hooks then append them to the registered object above. */
				register: function() {
					/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
					 currently set to "transparent" default to their respective template below when color-animated,
					 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
					 which is almost always set closer to black than white. */
					for (var i = 0; i < CSS.Lists.colors.length; i++) {
						var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
						CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
					}

					var rootProperty,
							hookTemplate,
							hookNames;

					/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
					 Thus, we re-arrange the templates accordingly. */
					if (IE) {
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

							if (hookNames[0] === "Color") {
								/* Reposition both the hook's name and its default value to the end of their respective strings. */
								hookNames.push(hookNames.shift());
								defaultValues.push(defaultValues.shift());

								/* Replace the existing template for the hook's root property. */
								CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
							}
						}
					}

					/* Hook registration. */
					for (rootProperty in CSS.Hooks.templates) {
						if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
							continue;
						}
						hookTemplate = CSS.Hooks.templates[rootProperty];
						hookNames = hookTemplate[0].split(" ");

						for (var j in hookNames) {
							if (!hookNames.hasOwnProperty(j)) {
								continue;
							}
							var fullHookName = rootProperty + hookNames[j],
									hookPosition = j;

							/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
							 and the hook's position in its template's default value string. */
							CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
						}
					}
				},
				/*****************************
				 Injection and Extraction
				 *****************************/

				/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
				/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
				getRoot: function(property) {
					var hookData = CSS.Hooks.registered[property];

					if (hookData) {
						return hookData[0];
					} else {
						/* If there was no hook match, return the property name untouched. */
						return property;
					}
				},
				getUnit: function(str, start) {
					var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

					if (unit && _inArray(CSS.Lists.units, unit)) {
						return unit;
					}
					return "";
				},
				fixColors: function(str) {
					return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
						if (CSS.Lists.colorNames.hasOwnProperty($2)) {
							return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
						}
						return $1 + $2;
					});
				},
				/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
				 the targeted hook can be injected or extracted at its standard position. */
				cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
					/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
					if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
						rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
					}

					/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
					 default to the root's default value as defined in CSS.Hooks.templates. */
					/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
					 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
					if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
						rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
					}

					return rootPropertyValue;
				},
				/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
				extractValue: function(fullHookName, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1];

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
						return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				},
				/* Inject the hook's value into its root property's value. This is used to piece back together the root property
				 once Velocity has updated one of its individually hooked values through tweening. */
				injectValue: function(fullHookName, hookValue, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1],
								rootPropertyValueParts,
								rootPropertyValueUpdated;

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
						 then reconstruct the rootPropertyValue string. */
						rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
						rootPropertyValueParts[hookPosition] = hookValue;
						rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

						return rootPropertyValueUpdated;
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				}
			},
			/*******************
			 Normalizations
			 *******************/

			/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
			 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
			Normalizations: {
				/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
				 the targeted element (which may need to be queried), and the targeted property value. */
				registered: {
					clip: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return "clip";
								/* Clip needs to be unwrapped and stripped of its commas during extraction. */
							case "extract":
								var extracted;

								/* If Velocity also extracted this value, skip extraction. */
								if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
									extracted = propertyValue;
								} else {
									/* Remove the "rect()" wrapper. */
									extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

									/* Strip off commas. */
									extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
								}

								return extracted;
								/* Clip needs to be re-wrapped during injection. */
							case "inject":
								return "rect(" + propertyValue + ")";
						}
					},
					blur: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								var extracted = parseFloat(propertyValue);

								/* If extracted is NaN, meaning the value isn't already extracted. */
								if (!(extracted || extracted === 0)) {
									var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

									/* If the filter string had a blur component, return just the blur value and unit type. */
									if (blurComponent) {
										extracted = blurComponent[1];
										/* If the component doesn't exist, default blur to 0. */
									} else {
										extracted = 0;
									}
								}

								return extracted;
								/* Blur needs to be re-wrapped during injection. */
							case "inject":
								/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
								if (!parseFloat(propertyValue)) {
									return "none";
								} else {
									return "blur(" + propertyValue + ")";
								}
						}
					},
					/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
					opacity: function(type, element, propertyValue) {
						if (IE <= 8) {
							switch (type) {
								case "name":
									return "filter";
								case "extract":
									/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
									 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
									var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

									if (extracted) {
										/* Convert to decimal value. */
										propertyValue = extracted[1] / 100;
									} else {
										/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
										propertyValue = 1;
									}

									return propertyValue;
								case "inject":
									/* Opacified elements are required to have their zoom property set to a non-zero value. */
									element.style.zoom = 1;

									/* Setting the filter property on elements with certain font property combinations can result in a
									 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
									 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
									if (parseFloat(propertyValue) >= 1) {
										return "";
									} else {
										/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
										return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
									}
							}
							/* With all other browsers, normalization is not required; return the same values that were passed in. */
						} else {
							switch (type) {
								case "name":
									return "opacity";
								case "extract":
									return propertyValue;
								case "inject":
									return propertyValue;
							}
						}
					}
				},
				/*****************************
				 Batched Registrations
				 *****************************/

				/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
				register: function() {

					/*****************
					 Transforms
					 *****************/

					/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
					 so that they can be referenced in a properties map by their individual names. */
					/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
					 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
					 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
					 once when multiple transform subproperties are being animated simultaneously. */
					/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
					 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
					 from being normalized for these browsers so that tweening skips these properties altogether
					 (since it will ignore them as being unsupported by the browser.) */
					if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
						/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
						 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
						CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
					}

					for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
						/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
						 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
						(function() {
							var transformName = CSS.Lists.transformsBase[i];

							CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
								switch (type) {
									/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
									case "name":
										return "transform";
										/* Transform values are cached onto a per-element transformCache object. */
									case "extract":
										/* If this transform has yet to be assigned a value, return its null value. */
										if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
											/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
											return /^scale/i.test(transformName) ? 1 : 0;
											/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
											 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
										}
										return Data(element).transformCache[transformName].replace(/[()]/g, "");
									case "inject":
										var invalid = false;

										/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
										 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
										/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
										switch (transformName.substr(0, transformName.length - 1)) {
											/* Whitelist unit types for each transform. */
											case "translate":
												invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
												break;
												/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
											case "scal":
											case "scale":
												/* Chrome on Android has a bug in which scaled elements blur if their initial scale
												 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
												 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
												if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
													propertyValue = 1;
												}

												invalid = !/(\d)$/i.test(propertyValue);
												break;
											case "skew":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
											case "rotate":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
										}

										if (!invalid) {
											/* As per the CSS spec, wrap the value in parentheses. */
											Data(element).transformCache[transformName] = "(" + propertyValue + ")";
										}

										/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
										return Data(element).transformCache[transformName];
								}
							};
						})();
					}

					/*************
					 Colors
					 *************/

					/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
					 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
					for (var j = 0; j < CSS.Lists.colors.length; j++) {
						/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
						 (Otherwise, all functions would take the final for loop's colorName.) */
						(function() {
							var colorName = CSS.Lists.colors[j];

							/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
							CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return colorName;
										/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
									case "extract":
										var extracted;

										/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
										if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
											extracted = propertyValue;
										} else {
											var converted,
													colorNames = {
														black: "rgb(0, 0, 0)",
														blue: "rgb(0, 0, 255)",
														gray: "rgb(128, 128, 128)",
														green: "rgb(0, 128, 0)",
														red: "rgb(255, 0, 0)",
														white: "rgb(255, 255, 255)"
													};

											/* Convert color names to rgb. */
											if (/^[A-z]+$/i.test(propertyValue)) {
												if (colorNames[propertyValue] !== undefined) {
													converted = colorNames[propertyValue];
												} else {
													/* If an unmatched color name is provided, default to black. */
													converted = colorNames.black;
												}
												/* Convert hex values to rgb. */
											} else if (CSS.RegEx.isHex.test(propertyValue)) {
												converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
												/* If the provided color doesn't match any of the accepted color formats, default to black. */
											} else if (!(/^rgba?\(/i.test(propertyValue))) {
												converted = colorNames.black;
											}

											/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
											 repeated spaces (in case the value included spaces to begin with). */
											extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
										}

										/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
											extracted += " 1";
										}

										return extracted;
									case "inject":
										/* If we have a pattern then it might already have the right values */
										if (/^rgb/.test(propertyValue)) {
											return propertyValue;
										}

										/* If this is IE<=8 and an alpha component exists, strip it off. */
										if (IE <= 8) {
											if (propertyValue.split(" ").length === 4) {
												propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
											}
											/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										} else if (propertyValue.split(" ").length === 3) {
											propertyValue += " 1";
										}

										/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
										 on all values but the fourth (R, G, and B only accept whole numbers). */
										return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
								}
							};
						})();
					}

					/**************
					 Dimensions
					 **************/
					function augmentDimension(name, element, wantInner) {
						var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

						if (isBorderBox === (wantInner || false)) {
							/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
							var i,
									value,
									augment = 0,
									sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
									fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

							for (i = 0; i < fields.length; i++) {
								value = parseFloat(CSS.getPropertyValue(element, fields[i]));
								if (!isNaN(value)) {
									augment += value;
								}
							}
							return wantInner ? -augment : augment;
						}
						return 0;
					}
					function getDimension(name, wantInner) {
						return function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return name;
								case "extract":
									return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
								case "inject":
									return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
							}
						};
					}
					CSS.Normalizations.registered.innerWidth = getDimension("width", true);
					CSS.Normalizations.registered.innerHeight = getDimension("height", true);
					CSS.Normalizations.registered.outerWidth = getDimension("width");
					CSS.Normalizations.registered.outerHeight = getDimension("height");
				}
			},
			/************************
			 CSS Property Names
			 ************************/

			Names: {
				/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
				 Camelcasing is used to normalize property names between and across calls. */
				camelCase: function(property) {
					return property.replace(/-(\w)/g, function(match, subMatch) {
						return subMatch.toUpperCase();
					});
				},
				/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
				SVGAttribute: function(property) {
					var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

					/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
					if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
						SVGAttributes += "|transform";
					}

					return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
				},
				/* Determine whether a property should be set with a vendor prefix. */
				/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
				 If the property is not at all supported by the browser, return a false flag. */
				prefixCheck: function(property) {
					/* If this property has already been checked, return the cached value. */
					if (Velocity.State.prefixMatches[property]) {
						return [Velocity.State.prefixMatches[property], true];
					} else {
						var vendors = ["", "Webkit", "Moz", "ms", "O"];

						for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
							var propertyPrefixed;

							if (i === 0) {
								propertyPrefixed = property;
							} else {
								/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
								propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
									return match.toUpperCase();
								});
							}

							/* Check if the browser supports this property as prefixed. */
							if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
								/* Cache the match. */
								Velocity.State.prefixMatches[property] = propertyPrefixed;

								return [propertyPrefixed, true];
							}
						}

						/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
						return [property, false];
					}
				}
			},
			/************************
			 CSS Property Values
			 ************************/

			Values: {
				/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
				hexToRgb: function(hex) {
					var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
							longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
							rgbParts;

					hex = hex.replace(shortformRegex, function(m, r, g, b) {
						return r + r + g + g + b + b;
					});

					rgbParts = longformRegex.exec(hex);

					return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
				},
				isCSSNullValue: function(value) {
					/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
					 Thus, we check for both falsiness and these special strings. */
					/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
					 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
					/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
					return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
				},
				/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
				getUnitType: function(property) {
					if (/^(rotate|skew)/i.test(property)) {
						return "deg";
					} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
						/* The above properties are unitless. */
						return "";
					} else {
						/* Default to px for all other properties. */
						return "px";
					}
				},
				/* HTML elements default to an associated display type when they're not set to display:none. */
				/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
				getDisplayType: function(element) {
					var tagName = element && element.tagName.toString().toLowerCase();

					if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
						return "inline";
					} else if (/^(li)$/i.test(tagName)) {
						return "list-item";
					} else if (/^(tr)$/i.test(tagName)) {
						return "table-row";
					} else if (/^(table)$/i.test(tagName)) {
						return "table";
					} else if (/^(tbody)$/i.test(tagName)) {
						return "table-row-group";
						/* Default to "block" when no match is found. */
					} else {
						return "block";
					}
				},
				/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
				addClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.add(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							element.className += (element.className.length ? " " : "") + className;
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
						}
					}
				},
				removeClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.remove(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
							element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
						}
					}
				}
			},
			/****************************
			 Style Getting & Setting
			 ****************************/

			/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
				/* Get an element's computed property value. */
				/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
				 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
				 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
				function computePropertyValue(element, property) {
					/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
					 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
					 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
					 We subtract border and padding to get the sum of interior + scrollbar. */
					var computedValue = 0;

					/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
					 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
					 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
					 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
					if (IE <= 8) {
						computedValue = $.css(element, property); /* GET */
						/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
						 associated element so that it does not need to be refetched upon every GET. */
					} else {
						/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
						 toggle display to the element type's default value. */
						var toggleDisplay = false;

						if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
							toggleDisplay = true;
							CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
						}

						var revertDisplay = function() {
							if (toggleDisplay) {
								CSS.setPropertyValue(element, "display", "none");
							}
						};

						if (!forceStyleLookup) {
							if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
								revertDisplay();

								return contentBoxHeight;
							} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
								revertDisplay();

								return contentBoxWidth;
							}
						}

						var computedStyle;

						/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
						 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
						if (Data(element) === undefined) {
							computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If the computedStyle object has yet to be cached, do so now. */
						} else if (!Data(element).computedStyle) {
							computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If computedStyle is cached, use it. */
						} else {
							computedStyle = Data(element).computedStyle;
						}

						/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
						 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
						 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
						if (property === "borderColor") {
							property = "borderTopColor";
						}

						/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
						 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
						if (IE === 9 && property === "filter") {
							computedValue = computedStyle.getPropertyValue(property); /* GET */
						} else {
							computedValue = computedStyle[property];
						}

						/* Fall back to the property's style value (if defined) when computedValue returns nothing,
						 which can happen when the element hasn't been painted. */
						if (computedValue === "" || computedValue === null) {
							computedValue = element.style[property];
						}

						revertDisplay();
					}

					/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
					 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
					 effect as being set to 0, so no conversion is necessary.) */
					/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
					 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
					 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
					if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
						var position = computePropertyValue(element, "position"); /* GET */

						/* For absolute positioning, jQuery's $.position() only returns values for top and left;
						 right and bottom will have their "auto" value reverted to 0. */
						/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
						 Not a big deal since we're currently in a GET batch anyway. */
						if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
							/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
							computedValue = $(element).position()[property] + "px"; /* GET */
						}
					}

					return computedValue;
				}

				var propertyValue;

				/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
				 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
				if (CSS.Hooks.registered[property]) {
					var hook = property,
							hookRoot = CSS.Hooks.getRoot(hook);

					/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
					 query the DOM for the root property's value. */
					if (rootPropertyValue === undefined) {
						/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
						rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
					}

					/* If this root has a normalization registered, peform the associated normalization extraction. */
					if (CSS.Normalizations.registered[hookRoot]) {
						rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
					}

					/* Extract the hook's value. */
					propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

					/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
					 normalize the property's name and value, and handle the special case of transforms. */
					/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
					 numerical and therefore do not require normalization extraction. */
				} else if (CSS.Normalizations.registered[property]) {
					var normalizedPropertyName,
							normalizedPropertyValue;

					normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

					/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
					 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
					 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
					 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
					if (normalizedPropertyName !== "transform") {
						normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

						/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
						if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
							normalizedPropertyValue = CSS.Hooks.templates[property][1];
						}
					}

					propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
				}

				/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
				if (!/^[\d-]/.test(propertyValue)) {
					/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
					 their HTML attribute values instead of their CSS style values. */
					var data = Data(element);

					if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
						/* Since the height/width attribute values must be set manually, they don't reflect computed values.
						 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
						if (/^(height|width)$/i.test(property)) {
							/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
							try {
								propertyValue = element.getBBox()[property];
							} catch (error) {
								propertyValue = 0;
							}
							/* Otherwise, access the attribute value directly. */
						} else {
							propertyValue = element.getAttribute(property);
						}
					} else {
						propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
					}
				}

				/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
				 convert CSS null-values to an integer of value 0. */
				if (CSS.Values.isCSSNullValue(propertyValue)) {
					propertyValue = 0;
				}

				if (Velocity.debug >= 2) {
					console.log("Get " + property + ": " + propertyValue);
				}

				return propertyValue;
			},
			/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
				var propertyName = property;

				/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
				if (property === "scroll") {
					/* If a container option is present, scroll the container instead of the browser window. */
					if (scrollData.container) {
						scrollData.container["scroll" + scrollData.direction] = propertyValue;
						/* Otherwise, Velocity defaults to scrolling the browser window. */
					} else {
						if (scrollData.direction === "Left") {
							window.scrollTo(propertyValue, scrollData.alternateValue);
						} else {
							window.scrollTo(scrollData.alternateValue, propertyValue);
						}
					}
				} else {
					/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
					 Thus, for now, we merely cache transforms being SET. */
					if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
						/* Perform a normalization injection. */
						/* Note: The normalization logic handles the transformCache updating. */
						CSS.Normalizations.registered[property]("inject", element, propertyValue);

						propertyName = "transform";
						propertyValue = Data(element).transformCache[property];
					} else {
						/* Inject hooks. */
						if (CSS.Hooks.registered[property]) {
							var hookName = property,
									hookRoot = CSS.Hooks.getRoot(property);

							/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
							rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

							propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
							property = hookRoot;
						}

						/* Normalize names and values. */
						if (CSS.Normalizations.registered[property]) {
							propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
							property = CSS.Normalizations.registered[property]("name", element);
						}

						/* Assign the appropriate vendor prefix before performing an official style update. */
						propertyName = CSS.Names.prefixCheck(property)[0];

						/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
						 Try/catch is avoided for other browsers since it incurs a performance overhead. */
						if (IE <= 8) {
							try {
								element.style[propertyName] = propertyValue;
							} catch (error) {
								if (Velocity.debug) {
									console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
								}
							}
							/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
							/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
						} else {
							var data = Data(element);

							if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
								/* Note: For SVG attributes, vendor-prefixed property names are never used. */
								/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
								element.setAttribute(property, propertyValue);
							} else {
								element.style[propertyName] = propertyValue;
							}
						}

						if (Velocity.debug >= 2) {
							console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
						}
					}
				}

				/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
				return [propertyName, propertyValue];
			},
			/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
			/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
			flushTransformCache: function(element) {
				var transformString = "",
						data = Data(element);

				/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
				 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
				if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
					/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
					 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
					var getTransformFloat = function(transformProperty) {
						return parseFloat(CSS.getPropertyValue(element, transformProperty));
					};

					/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
					 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
					var SVGTransforms = {
						translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
						skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
						/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
						 (this behavior mimics the result of animating all these properties at once on HTML elements). */
						scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
						/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
						 defining the rotation's origin point. We ignore the origin values (default them to 0). */
						rotate: [getTransformFloat("rotateZ"), 0, 0]
					};

					/* Iterate through the transform properties in the user-defined property map order.
					 (This mimics the behavior of non-SVG transform animation.) */
					$.each(Data(element).transformCache, function(transformName) {
						/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
						 properties so that they match up with SVG's accepted transform properties. */
						if (/^translate/i.test(transformName)) {
							transformName = "translate";
						} else if (/^scale/i.test(transformName)) {
							transformName = "scale";
						} else if (/^rotate/i.test(transformName)) {
							transformName = "rotate";
						}

						/* Check that we haven't yet deleted the property from the SVGTransforms container. */
						if (SVGTransforms[transformName]) {
							/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
							transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

							/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
							 re-insert the same master property if we encounter another one of its axis-specific properties. */
							delete SVGTransforms[transformName];
						}
					});
				} else {
					var transformValue,
							perspective;

					/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
					$.each(Data(element).transformCache, function(transformName) {
						transformValue = Data(element).transformCache[transformName];

						/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
						if (transformName === "transformPerspective") {
							perspective = transformValue;
							return true;
						}

						/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
						if (IE === 9 && transformName === "rotateZ") {
							transformName = "rotate";
						}

						transformString += transformName + transformValue + " ";
					});

					/* If present, set the perspective subproperty first. */
					if (perspective) {
						transformString = "perspective" + perspective + " " + transformString;
					}
				}

				CSS.setPropertyValue(element, "transform", transformString);
			}
		};

		/* Register hooks and normalizations. */
		CSS.Hooks.register();
		CSS.Normalizations.register();

		/* Allow hook setting in the same fashion as jQuery's $.css(). */
		Velocity.hook = function(elements, arg2, arg3) {
			var value;

			elements = sanitizeElements(elements);

			$.each(elements, function(i, element) {
				/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/* Get property value. If an element set was passed in, only return the value for the first element. */
				if (arg3 === undefined) {
					if (value === undefined) {
						value = CSS.getPropertyValue(element, arg2);
					}
					/* Set property value. */
				} else {
					/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
					var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

					/* Transform properties don't automatically set. They have to be flushed to the DOM. */
					if (adjustedSet[0] === "transform") {
						Velocity.CSS.flushTransformCache(element);
					}

					value = adjustedSet;
				}
			});

			return value;
		};

		/*****************
		 Animation
		 *****************/

		var animate = function() {
			var opts;

			/******************
			 Call Chain
			 ******************/

			/* Logic for determining what to return to the call stack when exiting out of Velocity. */
			function getChain() {
				/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
				 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
				if (isUtility) {
					return promiseData.promise || null;
					/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
				} else {
					return elementsWrapped;
				}
			}

			/*************************
			 Arguments Assignment
			 *************************/

			/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
			 objects are defined on a container object that's passed in as Velocity's sole argument. */
			/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
			var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
					/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
					isUtility,
					/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
					 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
					elementsWrapped,
					argumentIndex;

			var elements,
					propertiesMap,
					options;

			/* Detect jQuery/Zepto elements being animated via the $.fn method. */
			if (Type.isWrapped(this)) {
				isUtility = false;

				argumentIndex = 0;
				elements = this;
				elementsWrapped = this;
				/* Otherwise, raw elements are being animated via the utility function. */
			} else {
				isUtility = true;

				argumentIndex = 1;
				elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
			}

			/***************
			 Promises
			 ***************/

			var promiseData = {
				promise: null,
				resolver: null,
				rejecter: null
			};

			/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
			 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
			 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
			 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
			/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
			 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
			 grouped together for the purposes of resolving and rejecting a promise. */
			if (isUtility && Velocity.Promise) {
				promiseData.promise = new Velocity.Promise(function(resolve, reject) {
					promiseData.resolver = resolve;
					promiseData.rejecter = reject;
				});
			}

			if (syntacticSugar) {
				propertiesMap = arguments[0].properties || arguments[0].p;
				options = arguments[0].options || arguments[0].o;
			} else {
				propertiesMap = arguments[argumentIndex];
				options = arguments[argumentIndex + 1];
			}

			elements = sanitizeElements(elements);

			if (!elements) {
				if (promiseData.promise) {
					if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
						promiseData.rejecter();
					} else {
						promiseData.resolver();
					}
				}
				return;
			}

			/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
			 single raw DOM element is passed in (which doesn't contain a length property). */
			var elementsLength = elements.length,
					elementsIndex = 0;

			/***************************
			 Argument Overloading
			 ***************************/

			/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
			 Overloading is detected by checking for the absence of an object being passed into options. */
			/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
			if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
				/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
				var startingArgumentPosition = argumentIndex + 1;

				options = {};

				/* Iterate through all options arguments */
				for (var i = startingArgumentPosition; i < arguments.length; i++) {
					/* Treat a number as a duration. Parse it out. */
					/* Note: The following RegEx will return true if passed an array with a number as its first item.
					 Thus, arrays are skipped from this check. */
					if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
						options.duration = arguments[i];
						/* Treat strings and arrays as easings. */
					} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
						options.easing = arguments[i];
						/* Treat a function as a complete callback. */
					} else if (Type.isFunction(arguments[i])) {
						options.complete = arguments[i];
					}
				}
			}

			/*********************
			 Action Detection
			 *********************/

			/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
			 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
			 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
			 instead of a properties map. */
			var action;

			switch (propertiesMap) {
				case "scroll":
					action = "scroll";
					break;

				case "reverse":
					action = "reverse";
					break;

				case "pause":

					/*******************
					 Action: Pause
					 *******************/

					var currentTime = (new Date()).getTime();

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						pauseDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {

						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Set call to paused */
										activeCall[5] = {
											resume: false
										};

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since pause creates no new tweens, exit out of Velocity. */
					return getChain();

				case "resume":

					/*******************
					 Action: Resume
					 *******************/

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						resumeDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {
						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Skip any calls that have never been paused */
								if (!activeCall[5]) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Flag a pause object to be resumed, which will occur during the next tick. In
										 addition, the pause object will at that time be deleted */
										activeCall[5].resume = true;

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since resume creates no new tweens, exit out of Velocity. */
					return getChain();

				case "finish":
				case "finishAll":
				case "stop":
					/*******************
					 Action: Stop
					 *******************/

					/* Clear the currently-active delay on each targeted element. */
					$.each(elements, function(i, element) {
						if (Data(element) && Data(element).delayTimer) {
							/* Stop the timer from triggering its cached next() function. */
							clearTimeout(Data(element).delayTimer.setTimeout);

							/* Manually call the next() function so that the subsequent queue items can progress. */
							if (Data(element).delayTimer.next) {
								Data(element).delayTimer.next();
							}

							delete Data(element).delayTimer;
						}

						/* If we want to finish everything in the queue, we have to iterate through it
						 and call each function. This will make them active calls below, which will
						 cause them to be applied via the duration setting. */
						if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
							/* Iterate through the items in the element's queue. */
							$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
								/* The queue array can contain an "inprogress" string, which we skip. */
								if (Type.isFunction(item)) {
									item();
								}
							});

							/* Clearing the $.queue() array is achieved by resetting it to []. */
							$.queue(element, Type.isString(options) ? options : "", []);
						}
					});

					var callsToStop = [];

					/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
					 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
					 is stopped, the next item in its animation queue is immediately triggered. */
					/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
					 or a custom queue string can be passed in. */
					/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
					 regardless of the element's current queue state. */

					/* Iterate through every active call. */
					$.each(Velocity.State.calls, function(i, activeCall) {
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
								 clear calls associated with the relevant queue. */
								/* Call stopping logic works as follows:
								 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
								 - options === undefined --> stop current queue:"" call and all queue:false calls.
								 - options === false --> stop only queue:false calls.
								 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {
										/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
										 due to the queue-clearing above. */
										if (options === true || Type.isString(options)) {
											/* Iterate through the items in the element's queue. */
											$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
												/* The queue array can contain an "inprogress" string, which we skip. */
												if (Type.isFunction(item)) {
													/* Pass the item's callback a flag indicating that we want to abort from the queue call.
													 (Specifically, the queue will resolve the call's associated promise then abort.)  */
													item(null, true);
												}
											});

											/* Clearing the $.queue() array is achieved by resetting it to []. */
											$.queue(element, Type.isString(options) ? options : "", []);
										}

										if (propertiesMap === "stop") {
											/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
											 changed to reflect the final value that the elements were actually tweened to. */
											/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
											 object. Also, queue:false animations can't be reversed. */
											var data = Data(element);
											if (data && data.tweensContainer && queueName !== false) {
												$.each(data.tweensContainer, function(m, activeTween) {
													activeTween.endValue = activeTween.currentValue;
												});
											}

											callsToStop.push(i);
										} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
											/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
											 they finish upon the next rAf tick then proceed with normal call completion logic. */
											activeCall[2].duration = 1;
										}
									}
								});
							});
						}
					});

					/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
					 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
					if (propertiesMap === "stop") {
						$.each(callsToStop, function(i, j) {
							completeCall(j, true);
						});

						if (promiseData.promise) {
							/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
							promiseData.resolver(elements);
						}
					}

					/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
					return getChain();

				default:
					/* Treat a non-empty plain object as a literal properties map. */
					if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
						action = "start";

						/****************
						 Redirects
						 ****************/

						/* Check if a string matches a registered redirect (see Redirects above). */
					} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
						opts = $.extend({}, options);

						var durationOriginal = opts.duration,
								delayOriginal = opts.delay || 0;

						/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
						if (opts.backwards === true) {
							elements = $.extend(true, [], elements).reverse();
						}

						/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
						$.each(elements, function(elementIndex, element) {
							/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
							if (parseFloat(opts.stagger)) {
								opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
							} else if (Type.isFunction(opts.stagger)) {
								opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
							}

							/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
							 the duration of each element's animation, using floors to prevent producing very short durations. */
							if (opts.drag) {
								/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
								opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

								/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
								 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
								 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
								opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
							}

							/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
							 reduce the opts checking logic required inside the redirect. */
							Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
						});

						/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
						 (The performance overhead up to this point is virtually non-existant.) */
						/* Note: The jQuery call chain is kept intact by returning the complete element set. */
						return getChain();
					} else {
						var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

						if (promiseData.promise) {
							promiseData.rejecter(new Error(abortError));
						} else if (window.console) {
							console.log(abortError);
						}

						return getChain();
					}
			}

			/**************************
			 Call-Wide Variables
			 **************************/

			/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
			 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
			 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
			 conversion metrics across Velocity animations that are not immediately consecutively chained. */
			var callUnitConversionData = {
				lastParent: null,
				lastPosition: null,
				lastFontSize: null,
				lastPercentToPxWidth: null,
				lastPercentToPxHeight: null,
				lastEmToPx: null,
				remToPx: null,
				vwToPx: null,
				vhToPx: null
			};

			/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
			 Velocity.State.calls array that is processed during animation ticking. */
			var call = [];

			/************************
			 Element Processing
			 ************************/

			/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
			 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
			 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
			 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 `elementArrayIndex` allows passing index of the element in the original array to value functions.
			 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
			 */
			function processElement(element, elementArrayIndex) {

				/*************************
				 Part I: Pre-Queueing
				 *************************/

				/***************************
				 Element-Wide Variables
				 ***************************/

				var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
						opts = $.extend({}, Velocity.defaults, options),
						/* A container for the processed data associated with each property in the propertyMap.
						 (Each property in the map produces its own "tween".) */
						tweensContainer = {},
						elementUnitConversionData;

				/******************
				 Element Init
				 ******************/

				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/******************
				 Option: Delay
				 ******************/

				/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
				/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
				 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
				if (parseFloat(opts.delay) && opts.queue !== false) {
					$.queue(element, opts.queue, function(next) {
						/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
						 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
						 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

						/* Temporarily store delayed elements to facilite access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								next();
							};
						})(callIndex);


						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(next, parseFloat(opts.delay)),
							next: delayComplete
						};
					});
				}

				/*********************
				 Option: Duration
				 *********************/

				/* Support for jQuery's named durations. */
				switch (opts.duration.toString().toLowerCase()) {
					case "fast":
						opts.duration = 200;
						break;

					case "normal":
						opts.duration = DURATION_DEFAULT;
						break;

					case "slow":
						opts.duration = 600;
						break;

					default:
						/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
						opts.duration = parseFloat(opts.duration) || 1;
				}

				/************************
				 Global Option: Mock
				 ************************/

				if (Velocity.mock !== false) {
					/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
					 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
					if (Velocity.mock === true) {
						opts.duration = opts.delay = 1;
					} else {
						opts.duration *= parseFloat(Velocity.mock) || 1;
						opts.delay *= parseFloat(Velocity.mock) || 1;
					}
				}

				/*******************
				 Option: Easing
				 *******************/

				opts.easing = getEasing(opts.easing, opts.duration);

				/**********************
				 Option: Callbacks
				 **********************/

				/* Callbacks must functions. Otherwise, default to null. */
				if (opts.begin && !Type.isFunction(opts.begin)) {
					opts.begin = null;
				}

				if (opts.progress && !Type.isFunction(opts.progress)) {
					opts.progress = null;
				}

				if (opts.complete && !Type.isFunction(opts.complete)) {
					opts.complete = null;
				}

				/*********************************
				 Option: Display & Visibility
				 *********************************/

				/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
				/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
				if (opts.display !== undefined && opts.display !== null) {
					opts.display = opts.display.toString().toLowerCase();

					/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
					if (opts.display === "auto") {
						opts.display = Velocity.CSS.Values.getDisplayType(element);
					}
				}

				if (opts.visibility !== undefined && opts.visibility !== null) {
					opts.visibility = opts.visibility.toString().toLowerCase();
				}

				/**********************
				 Option: mobileHA
				 **********************/

				/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
				 on animating elements. HA is removed from the element at the completion of its animation. */
				/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
				/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
				opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

				/***********************
				 Part II: Queueing
				 ***********************/

				/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
				 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
				/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
				 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
				function buildQueue(next) {
					var data, lastTweensContainer;

					/*******************
					 Option: Begin
					 *******************/

					/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
					if (opts.begin && elementsIndex === 0) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.begin.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}

					/*****************************************
					 Tween Data Construction (for Scroll)
					 *****************************************/

					/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
					if (action === "scroll") {
						/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
						var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
								scrollOffset = parseFloat(opts.offset) || 0,
								scrollPositionCurrent,
								scrollPositionCurrentAlternate,
								scrollPositionEnd;

						/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
						 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
						if (opts.container) {
							/* Ensure that either a jQuery object or a raw DOM element was passed in. */
							if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
								/* Extract the raw DOM element from the jQuery wrapper. */
								opts.container = opts.container[0] || opts.container;
								/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
								 (due to the user's natural interaction with the page). */
								scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

								/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
								 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
								 the scroll container's current scroll position. */
								scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
								/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
							} else {
								opts.container = null;
							}
						} else {
							/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
							 the appropriate cached property names (which differ based on browser type). */
							scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
							/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
							scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

							/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
							 and therefore end values do not need to be compounded onto current values. */
							scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
						}

						/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
						tweensContainer = {
							scroll: {
								rootPropertyValue: false,
								startValue: scrollPositionCurrent,
								currentValue: scrollPositionCurrent,
								endValue: scrollPositionEnd,
								unitType: "",
								easing: opts.easing,
								scrollData: {
									container: opts.container,
									direction: scrollDirection,
									alternateValue: scrollPositionCurrentAlternate
								}
							},
							element: element
						};

						if (Velocity.debug) {
							console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
						}

						/******************************************
						 Tween Data Construction (for Reverse)
						 ******************************************/

						/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
						 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
						 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
						/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
						/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
						 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
						 as reverting to the element's values as they were prior to the previous *Velocity* call. */
					} else if (action === "reverse") {
						data = Data(element);

						/* Abort if there is no prior animation data to reverse to. */
						if (!data) {
							return;
						}

						if (!data.tweensContainer) {
							/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
							$.dequeue(element, opts.queue);

							return;
						} else {
							/*********************
							 Options Parsing
							 *********************/

							/* If the element was hidden via the display option in the previous call,
							 revert display to "auto" prior to reversal so that the element is visible again. */
							if (data.opts.display === "none") {
								data.opts.display = "auto";
							}

							if (data.opts.visibility === "hidden") {
								data.opts.visibility = "visible";
							}

							/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
							 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
							data.opts.loop = false;
							data.opts.begin = null;
							data.opts.complete = null;

							/* Since we're extending an opts object that has already been extended with the defaults options object,
							 we remove non-explicitly-defined properties that are auto-assigned values. */
							if (!options.easing) {
								delete opts.easing;
							}

							if (!options.duration) {
								delete opts.duration;
							}

							/* The opts object used for reversal is an extension of the options object optionally passed into this
							 reverse call plus the options used in the previous Velocity call. */
							opts = $.extend({}, data.opts, opts);

							/*************************************
							 Tweens Container Reconstruction
							 *************************************/

							/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
							lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

							/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
							for (var lastTween in lastTweensContainer) {
								/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
								if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
									var lastStartValue = lastTweensContainer[lastTween].startValue;

									lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
									lastTweensContainer[lastTween].endValue = lastStartValue;

									/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
									 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
									 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
									if (!Type.isEmptyObject(options)) {
										lastTweensContainer[lastTween].easing = opts.easing;
									}

									if (Velocity.debug) {
										console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
									}
								}
							}

							tweensContainer = lastTweensContainer;
						}

						/*****************************************
						 Tween Data Construction (for Start)
						 *****************************************/

					} else if (action === "start") {

						/*************************
						 Value Transferring
						 *************************/

						/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
						 while the element was in the process of being animated by Velocity, then this current call is safe to use
						 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
						 process whenever possible in order to avoid requerying the DOM. */
						/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
						 then the DOM is queried for the element's current values as a last resort. */
						/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

						data = Data(element);

						/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
						 to transfer over end values to use as start values. If it's set to true and there is a previous
						 Velocity call to pull values from, do so. */
						if (data && data.tweensContainer && data.isAnimating === true) {
							lastTweensContainer = data.tweensContainer;
						}

						/***************************
						 Tween Data Calculation
						 ***************************/

						/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
						/* Property map values can either take the form of 1) a single value representing the end value,
						 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
						 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
						 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
						var parsePropertyValue = function(valueData, skipResolvingEasing) {
							var endValue, easing, startValue;

							/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
							if (Type.isFunction(valueData)) {
								valueData = valueData.call(element, elementArrayIndex, elementsLength);
							}

							/* Handle the array format, which can be structured as one of three potential overloads:
							 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
							if (Type.isArray(valueData)) {
								/* endValue is always the first item in the array. Don't bother validating endValue's value now
								 since the ensuing property cycling logic does that. */
								endValue = valueData[0];

								/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
								 start value since easings can only be non-hex strings or arrays. */
								if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
									startValue = valueData[1];
									/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
								} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
									easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

									/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
									startValue = valueData[2];
								} else {
									startValue = valueData[1] || valueData[2];
								}
								/* Handle the single-value format. */
							} else {
								endValue = valueData;
							}

							/* Default to the call's easing if a per-property easing type was not defined. */
							if (!skipResolvingEasing) {
								easing = easing || opts.easing;
							}

							/* If functions were passed in as values, pass the function the current element as its context,
							 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
							if (Type.isFunction(endValue)) {
								endValue = endValue.call(element, elementArrayIndex, elementsLength);
							}

							if (Type.isFunction(startValue)) {
								startValue = startValue.call(element, elementArrayIndex, elementsLength);
							}

							/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
							return [endValue || 0, easing, startValue];
						};

						var fixPropertyValue = function(property, valueData) {
							/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
							var rootProperty = CSS.Hooks.getRoot(property),
									rootPropertyValue = false,
									/* Parse out endValue, easing, and startValue from the property's data. */
									endValue = valueData[0],
									easing = valueData[1],
									startValue = valueData[2],
									pattern;

							/**************************
							 Start Value Sourcing
							 **************************/

							/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
							 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
							 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
							/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
							 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
							if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
								if (Velocity.debug) {
									console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
								}
								return;
							}

							/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
							 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
							 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
							if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
								startValue = 0;
							}

							/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
							 for all of the current call's properties that were *also* animated in the previous call. */
							/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
							if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
								if (startValue === undefined) {
									startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
								}

								/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
								 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
								 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
								rootPropertyValue = data.rootPropertyValueCache[rootProperty];
								/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
							} else {
								/* Handle hooked properties. */
								if (CSS.Hooks.registered[property]) {
									if (startValue === undefined) {
										rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
										/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
										 getPropertyValue() will extract the hook from rootPropertyValue. */
										startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
										/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
										 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
										 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
										 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
									} else {
										/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
										rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
									}
									/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
								} else if (startValue === undefined) {
									startValue = CSS.getPropertyValue(element, property); /* GET */
								}
							}

							/**************************
							 Value Data Extraction
							 **************************/

							var separatedValue,
									endValueUnitType,
									startValueUnitType,
									operator = false;

							/* Separates a property value into its numeric value and its unit type. */
							var separateValue = function(property, value) {
								var unitType,
										numericValue;

								numericValue = (value || "0")
										.toString()
										.toLowerCase()
										/* Match the unit type at the end of the value. */
										.replace(/[%A-z]+$/, function(match) {
											/* Grab the unit type. */
											unitType = match;

											/* Strip the unit type off of value. */
											return "";
										});

								/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
								if (!unitType) {
									unitType = CSS.Values.getUnitType(property);
								}

								return [numericValue, unitType];
							};

							if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
								pattern = "";
								var iStart = 0, // index in startValue
										iEnd = 0, // index in endValue
										aStart = [], // array of startValue numbers
										aEnd = [], // array of endValue numbers
										inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
										inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
										inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

								startValue = CSS.Hooks.fixColors(startValue);
								endValue = CSS.Hooks.fixColors(endValue);
								while (iStart < startValue.length && iEnd < endValue.length) {
									var cStart = startValue[iStart],
											cEnd = endValue[iEnd];

									if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
										var tStart = cStart, // temporary character buffer
												tEnd = cEnd, // temporary character buffer
												dotStart = ".", // Make sure we can only ever match a single dot in a decimal
												dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

										while (++iStart < startValue.length) {
											cStart = startValue[iStart];
											if (cStart === dotStart) {
												dotStart = ".."; // Can never match two characters
											} else if (!/\d/.test(cStart)) {
												break;
											}
											tStart += cStart;
										}
										while (++iEnd < endValue.length) {
											cEnd = endValue[iEnd];
											if (cEnd === dotEnd) {
												dotEnd = ".."; // Can never match two characters
											} else if (!/\d/.test(cEnd)) {
												break;
											}
											tEnd += cEnd;
										}
										var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
												uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

										iStart += uStart.length;
										iEnd += uEnd.length;
										if (uStart === uEnd) {
											// Same units
											if (tStart === tEnd) {
												// Same numbers, so just copy over
												pattern += tStart + uStart;
											} else {
												// Different numbers, so store them
												pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
												aStart.push(parseFloat(tStart));
												aEnd.push(parseFloat(tEnd));
											}
										} else {
											// Different units, so put into a "calc(from + to)" and animate each side to/from zero
											var nStart = parseFloat(tStart),
													nEnd = parseFloat(tEnd);

											pattern += (inCalc < 5 ? "calc" : "") + "("
													+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
													+ " + "
													+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd
													+ ")";
											if (nStart) {
												aStart.push(nStart);
												aEnd.push(0);
											}
											if (nEnd) {
												aStart.push(0);
												aEnd.push(nEnd);
											}
										}
									} else if (cStart === cEnd) {
										pattern += cStart;
										iStart++;
										iEnd++;
										// Keep track of being inside a calc()
										if (inCalc === 0 && cStart === "c"
												|| inCalc === 1 && cStart === "a"
												|| inCalc === 2 && cStart === "l"
												|| inCalc === 3 && cStart === "c"
												|| inCalc >= 4 && cStart === "("
												) {
											inCalc++;
										} else if ((inCalc && inCalc < 5)
												|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
											inCalc = 0;
										}
										// Keep track of being inside an rgb() / rgba()
										if (inRGB === 0 && cStart === "r"
												|| inRGB === 1 && cStart === "g"
												|| inRGB === 2 && cStart === "b"
												|| inRGB === 3 && cStart === "a"
												|| inRGB >= 3 && cStart === "("
												) {
											if (inRGB === 3 && cStart === "a") {
												inRGBA = 1;
											}
											inRGB++;
										} else if (inRGBA && cStart === ",") {
											if (++inRGBA > 3) {
												inRGB = inRGBA = 0;
											}
										} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
												|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
											inRGB = inRGBA = 0;
										}
									} else {
										inCalc = 0;
										// TODO: changing units, fixing colours
										break;
									}
								}
								if (iStart !== startValue.length || iEnd !== endValue.length) {
									if (Velocity.debug) {
										console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
									}
									pattern = undefined;
								}
								if (pattern) {
									if (aStart.length) {
										if (Velocity.debug) {
											console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
										}
										startValue = aStart;
										endValue = aEnd;
										endValueUnitType = startValueUnitType = "";
									} else {
										pattern = undefined;
									}
								}
							}

							if (!pattern) {
								/* Separate startValue. */
								separatedValue = separateValue(property, startValue);
								startValue = separatedValue[0];
								startValueUnitType = separatedValue[1];

								/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
								separatedValue = separateValue(property, endValue);
								endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
									operator = subMatch;

									/* Strip the operator off of the value. */
									return "";
								});
								endValueUnitType = separatedValue[1];

								/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
								startValue = parseFloat(startValue) || 0;
								endValue = parseFloat(endValue) || 0;

								/***************************************
								 Property-Specific Value Conversion
								 ***************************************/

								/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
								if (endValueUnitType === "%") {
									/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */
									if (/^(fontSize|lineHeight)$/.test(property)) {
										/* Convert % into an em decimal value. */
										endValue = endValue / 100;
										endValueUnitType = "em";
										/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
									} else if (/^scale/.test(property)) {
										endValue = endValue / 100;
										endValueUnitType = "";
										/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
									} else if (/(Red|Green|Blue)$/i.test(property)) {
										endValue = (endValue / 100) * 255;
										endValueUnitType = "";
									}
								}
							}

							/***************************
							 Unit Ratio Calculation
							 ***************************/

							/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
							 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
							 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
							 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
							 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
							 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
							/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
							 setting values with the target unit type then comparing the returned pixel value. */
							/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
							 of batching the SETs and GETs together upfront outweights the potential overhead
							 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
							/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
							var calculateUnitRatios = function() {

								/************************
								 Same Ratio Checks
								 ************************/

								/* The properties below are used to determine whether the element differs sufficiently from this call's
								 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
								 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
								 this is done to minimize DOM querying. */
								var sameRatioIndicators = {
									myParent: element.parentNode || document.body, /* GET */
									position: CSS.getPropertyValue(element, "position"), /* GET */
									fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
								},
										/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
										samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
										/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
										sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

								/* Store these ratio indicators call-wide for the next element to compare against. */
								callUnitConversionData.lastParent = sameRatioIndicators.myParent;
								callUnitConversionData.lastPosition = sameRatioIndicators.position;
								callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

								/***************************
								 Element-Specific Units
								 ***************************/

								/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
								 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
								var measurement = 100,
										unitRatios = {};

								if (!sameEmRatio || !samePercentRatio) {
									var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

									Velocity.init(dummy);
									sameRatioIndicators.myParent.appendChild(dummy);

									/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
									 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
									/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
									$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, "hidden");
									});
									Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
									Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
									Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

									/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
									$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
									});
									/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
									Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

									/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
									unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

									sameRatioIndicators.myParent.removeChild(dummy);
								} else {
									unitRatios.emToPx = callUnitConversionData.lastEmToPx;
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
								}

								/***************************
								 Element-Agnostic Units
								 ***************************/

								/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
								 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
								 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
								 so we calculate it now. */
								if (callUnitConversionData.remToPx === null) {
									/* Default to browsers' default fontSize of 16px in the case of 0. */
									callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
								}

								/* Similarly, viewport units are %-relative to the window's inner dimensions. */
								if (callUnitConversionData.vwToPx === null) {
									callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
									callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
								}

								unitRatios.remToPx = callUnitConversionData.remToPx;
								unitRatios.vwToPx = callUnitConversionData.vwToPx;
								unitRatios.vhToPx = callUnitConversionData.vhToPx;

								if (Velocity.debug >= 1) {
									console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
								}
								return unitRatios;
							};

							/********************
							 Unit Conversion
							 ********************/

							/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
							if (/[\/*]/.test(operator)) {
								endValueUnitType = startValueUnitType;
								/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
								 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
								 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
								 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
								/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
							} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
								/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
								/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
								 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
								 which remains past the point of the animation's completion. */
								if (endValue === 0) {
									endValueUnitType = startValueUnitType;
								} else {
									/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
									 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
									elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

									/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
									/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
									var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

									/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
									 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
									switch (startValueUnitType) {
										case "%":
											/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
											 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
											 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
											startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* px acts as our midpoint in the unit conversion process; do nothing. */
											break;

										default:
											startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
									}

									/* Invert the px ratios to convert into to the target unit. */
									switch (endValueUnitType) {
										case "%":
											startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* startValue is already in px, do nothing; we're done. */
											break;

										default:
											startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
									}
								}
							}

							/*********************
							 Relative Values
							 *********************/

							/* Operator logic must be performed last since it requires unit-normalized start and end values. */
							/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
							 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
							 50 points is added on top of the current % value. */
							switch (operator) {
								case "+":
									endValue = startValue + endValue;
									break;

								case "-":
									endValue = startValue - endValue;
									break;

								case "*":
									endValue = startValue * endValue;
									break;

								case "/":
									endValue = startValue / endValue;
									break;
							}

							/**************************
							 tweensContainer Push
							 **************************/

							/* Construct the per-property tween object, and push it to the element's tweensContainer. */
							tweensContainer[property] = {
								rootPropertyValue: rootPropertyValue,
								startValue: startValue,
								currentValue: startValue,
								endValue: endValue,
								unitType: endValueUnitType,
								easing: easing
							};
							if (pattern) {
								tweensContainer[property].pattern = pattern;
							}

							if (Velocity.debug) {
								console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
							}
						};

						/* Create a tween out of each property, and append its associated data to tweensContainer. */
						for (var property in propertiesMap) {

							if (!propertiesMap.hasOwnProperty(property)) {
								continue;
							}
							/* The original property name's format must be used for the parsePropertyValue() lookup,
							 but we then use its camelCase styling to normalize it for manipulation. */
							var propertyName = CSS.Names.camelCase(property),
									valueData = parsePropertyValue(propertiesMap[property]);

							/* Find shorthand color properties that have been passed a hex string. */
							/* Would be quicker to use CSS.Lists.colors.includes() if possible */
							if (_inArray(CSS.Lists.colors, propertyName)) {
								/* Parse the value data for each shorthand. */
								var endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2];

								if (CSS.RegEx.isHex.test(endValue)) {
									/* Convert the hex strings into their RGB component arrays. */
									var colorComponents = ["Red", "Green", "Blue"],
											endValueRGB = CSS.Values.hexToRgb(endValue),
											startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

									/* Inject the RGB component tweens into propertiesMap. */
									for (var i = 0; i < colorComponents.length; i++) {
										var dataArray = [endValueRGB[i]];

										if (easing) {
											dataArray.push(easing);
										}

										if (startValueRGB !== undefined) {
											dataArray.push(startValueRGB[i]);
										}

										fixPropertyValue(propertyName + colorComponents[i], dataArray);
									}
									/* If we have replaced a shortcut color value then don't update the standard property name */
									continue;
								}
							}
							fixPropertyValue(propertyName, valueData);
						}

						/* Along with its property data, store a reference to the element itself onto tweensContainer. */
						tweensContainer.element = element;
					}

					/*****************
					 Call Push
					 *****************/

					/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
					 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
					if (tweensContainer.element) {
						/* Apply the "velocity-animating" indicator class. */
						CSS.Values.addClass(element, "velocity-animating");

						/* The call array houses the tweensContainers for each element being animated in the current call. */
						call.push(tweensContainer);

						data = Data(element);

						if (data) {
							/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
							if (opts.queue === "") {

								data.tweensContainer = tweensContainer;
								data.opts = opts;
							}

							/* Switch on the element's animating flag. */
							data.isAnimating = true;
						}

						/* Once the final element in this call's element set has been processed, push the call array onto
						 Velocity.State.calls for the animation tick to immediately begin processing. */
						if (elementsIndex === elementsLength - 1) {
							/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
							 Anything on this call container is subjected to tick() processing. */
							Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

							/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
							if (Velocity.State.isTicking === false) {
								Velocity.State.isTicking = true;

								/* Start the tick loop. */
								tick();
							}
						} else {
							elementsIndex++;
						}
					}
				}

				/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
				if (opts.queue === false) {
					/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
					 we manually inject the delay property here with an explicit setTimeout. */
					if (opts.delay) {

						/* Temporarily store delayed elements to facilitate access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								buildQueue();
							};
						})(callIndex);

						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
							next: delayComplete
						};
					} else {
						buildQueue();
					}
					/* Otherwise, the call undergoes element queueing as normal. */
					/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
				} else {
					$.queue(element, opts.queue, function(next, clearQueue) {
						/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
						 so it's fine if this is repeatedly triggered for each element in the associated call.) */
						if (clearQueue === true) {
							if (promiseData.promise) {
								promiseData.resolver(elements);
							}

							/* Do not continue with animation queueing. */
							return true;
						}

						/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
						 See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						buildQueue(next);
					});
				}

				/*********************
				 Auto-Dequeuing
				 *********************/

				/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
				 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
				 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
				 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
				 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
				/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
				 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
				/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
				 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
				if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
					$.dequeue(element);
				}
			}

			/**************************
			 Element Set Iteration
			 **************************/

			/* If the "nodeType" property exists on the elements variable, we're animating a single element.
			 Place it in an array so that $.each() can iterate over it. */
			$.each(elements, function(i, element) {
				/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
				if (Type.isNode(element)) {
					processElement(element, i);
				}
			});

			/******************
			 Option: Loop
			 ******************/

			/* The loop option accepts an integer indicating how many times the element should loop between the values in the
			 current call's properties map and the element's property values prior to this call. */
			/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
			 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
			 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
			opts = $.extend({}, Velocity.defaults, options);
			opts.loop = parseInt(opts.loop, 10);
			var reverseCallsCount = (opts.loop * 2) - 1;

			if (opts.loop) {
				/* Double the loop count to convert it into its appropriate number of "reverse" calls.
				 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
				for (var x = 0; x < reverseCallsCount; x++) {
					/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
					 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
					 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
					var reverseOptions = {
						delay: opts.delay,
						progress: opts.progress
					};

					/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
					 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
					if (x === reverseCallsCount - 1) {
						reverseOptions.display = opts.display;
						reverseOptions.visibility = opts.visibility;
						reverseOptions.complete = opts.complete;
					}

					animate(elements, "reverse", reverseOptions);
				}
			}

			/***************
			 Chaining
			 ***************/

			/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
			return getChain();
		};

		/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
		Velocity = $.extend(animate, Velocity);
		/* For legacy support, also expose the literal animate method. */
		Velocity.animate = animate;

		/**************
		 Timing
		 **************/

		/* Ticker function. */
		var ticker = window.requestAnimationFrame || rAFShim;

		/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
		 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
		 devices to avoid wasting battery power on inactive tabs. */
		/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
		if (!Velocity.State.isMobile && document.hidden !== undefined) {
			var updateTicker = function() {
				/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
				if (document.hidden) {
					ticker = function(callback) {
						/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
						return setTimeout(function() {
							callback(true);
						}, 16);
					};

					/* The rAF loop has been paused by the browser, so we manually restart the tick. */
					tick();
				} else {
					ticker = window.requestAnimationFrame || rAFShim;
				}
			};

			/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
			updateTicker();

			/* And then run check again every time visibility changes */
			document.addEventListener("visibilitychange", updateTicker);
		}

		/************
		 Tick
		 ************/

		/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
		function tick(timestamp) {
			/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
			 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
			 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
			 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
			 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
			 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
			if (timestamp) {
				/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
				 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
				 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
				var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

				/********************
				 Call Iteration
				 ********************/

				var callsLength = Velocity.State.calls.length;

				/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
				 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
				 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
				if (callsLength > 10000) {
					Velocity.State.calls = compactSparseArray(Velocity.State.calls);
					callsLength = Velocity.State.calls.length;
				}

				/* Iterate through each active call. */
				for (var i = 0; i < callsLength; i++) {
					/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
					if (!Velocity.State.calls[i]) {
						continue;
					}

					/************************
					 Call-Wide Variables
					 ************************/

					var callContainer = Velocity.State.calls[i],
							call = callContainer[0],
							opts = callContainer[2],
							timeStart = callContainer[3],
							firstTick = !!timeStart,
							tweenDummyValue = null,
							pauseObject = callContainer[5],
							millisecondsEllapsed = callContainer[6];



					/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
					 We assign timeStart now so that its value is as close to the real animation start time as possible.
					 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
					 between that time and now would cause the first few frames of the tween to be skipped since
					 percentComplete is calculated relative to timeStart.) */
					/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
					 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
					 same style value as the element's current value. */
					if (!timeStart) {
						timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
					}

					/* If a pause object is present, skip processing unless it has been set to resume */
					if (pauseObject) {
						if (pauseObject.resume === true) {
							/* Update the time start to accomodate the paused completion amount */
							timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

							/* Remove pause object after processing */
							callContainer[5] = null;
						} else {
							continue;
						}
					}

					millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

					/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
					 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
					 Accordingly, we ensure that percentComplete does not exceed 1. */
					var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);

					/**********************
					 Element Iteration
					 **********************/

					/* For every call, iterate through each of the elements in its set. */
					for (var j = 0, callLength = call.length; j < callLength; j++) {
						var tweensContainer = call[j],
								element = tweensContainer.element;

						/* Check to see if this element has been deleted midway through the animation by checking for the
						 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
						if (!Data(element)) {
							continue;
						}

						var transformPropertyExists = false;

						/**********************************
						 Display & Visibility Toggling
						 **********************************/

						/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
						 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
						if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
							if (opts.display === "flex") {
								var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

								$.each(flexValues, function(i, flexValue) {
									CSS.setPropertyValue(element, "display", flexValue);
								});
							}

							CSS.setPropertyValue(element, "display", opts.display);
						}

						/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}

						/************************
						 Property Iteration
						 ************************/

						/* For every element, iterate through each property. */
						for (var property in tweensContainer) {
							/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
							if (tweensContainer.hasOwnProperty(property) && property !== "element") {
								var tween = tweensContainer[property],
										currentValue,
										/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
										 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
										easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

								/******************************
								 Current Value Calculation
								 ******************************/

								if (Type.isString(tween.pattern)) {
									var patternReplace = percentComplete === 1 ?
											function($0, index, round) {
												var result = tween.endValue[index];

												return round ? Math.round(result) : result;
											} :
											function($0, index, round) {
												var startValue = tween.startValue[index],
														tweenDelta = tween.endValue[index] - startValue,
														result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

												return round ? Math.round(result) : result;
											};

									currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
								} else if (percentComplete === 1) {
									/* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
									currentValue = tween.endValue;
								} else {
									/* Otherwise, calculate currentValue based on the current delta from startValue. */
									var tweenDelta = tween.endValue - tween.startValue;

									currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
									/* If no value change is occurring, don't proceed with DOM updating. */
								}
								if (!firstTick && (currentValue === tween.currentValue)) {
									continue;
								}

								tween.currentValue = currentValue;

								/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
								 it can be passed into the progress callback. */
								if (property === "tween") {
									tweenDummyValue = currentValue;
								} else {
									/******************
									 Hooks: Part I
									 ******************/
									var hookRoot;

									/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
									 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
									 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
									 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
									 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
									if (CSS.Hooks.registered[property]) {
										hookRoot = CSS.Hooks.getRoot(property);

										var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

										if (rootPropertyValueCache) {
											tween.rootPropertyValue = rootPropertyValueCache;
										}
									}

									/*****************
									 DOM Update
									 *****************/

									/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
									/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
									var adjustedSetData = CSS.setPropertyValue(element, /* SET */
											property,
											tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
											tween.rootPropertyValue,
											tween.scrollData);

									/*******************
									 Hooks: Part II
									 *******************/

									/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
									if (CSS.Hooks.registered[property]) {
										/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
										if (CSS.Normalizations.registered[hookRoot]) {
											Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
										} else {
											Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
										}
									}

									/***************
									 Transforms
									 ***************/

									/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
									if (adjustedSetData[0] === "transform") {
										transformPropertyExists = true;
									}

								}
							}
						}

						/****************
						 mobileHA
						 ****************/

						/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
						 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
						if (opts.mobileHA) {
							/* Don't set the null transform hack if we've already done so. */
							if (Data(element).transformCache.translate3d === undefined) {
								/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
								Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

								transformPropertyExists = true;
							}
						}

						if (transformPropertyExists) {
							CSS.flushTransformCache(element);
						}
					}

					/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
					 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
					if (opts.display !== undefined && opts.display !== "none") {
						Velocity.State.calls[i][2].display = false;
					}
					if (opts.visibility !== undefined && opts.visibility !== "hidden") {
						Velocity.State.calls[i][2].visibility = false;
					}

					/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
					if (opts.progress) {
						opts.progress.call(callContainer[1],
								callContainer[1],
								percentComplete,
								Math.max(0, (timeStart + opts.duration) - timeCurrent),
								timeStart,
								tweenDummyValue);
					}

					/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
					if (percentComplete === 1) {
						completeCall(i);
					}
				}
			}

			/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
			if (Velocity.State.isTicking) {
				ticker(tick);
			}
		}

		/**********************
		 Call Completion
		 **********************/

		/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
		function completeCall(callIndex, isStopped) {
			/* Ensure the call exists. */
			if (!Velocity.State.calls[callIndex]) {
				return false;
			}

			/* Pull the metadata from the call. */
			var call = Velocity.State.calls[callIndex][0],
					elements = Velocity.State.calls[callIndex][1],
					opts = Velocity.State.calls[callIndex][2],
					resolver = Velocity.State.calls[callIndex][4];

			var remainingCallsExist = false;

			/*************************
			 Element Finalization
			 *************************/

			for (var i = 0, callLength = call.length; i < callLength; i++) {
				var element = call[i].element;

				/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
				/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
				/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
				if (!isStopped && !opts.loop) {
					if (opts.display === "none") {
						CSS.setPropertyValue(element, "display", opts.display);
					}

					if (opts.visibility === "hidden") {
						CSS.setPropertyValue(element, "visibility", opts.visibility);
					}
				}

				/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
				 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
				 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
				 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
				 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
				var data = Data(element);

				if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
					/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
					if (data) {
						data.isAnimating = false;
						/* Clear the element's rootPropertyValueCache, which will become stale. */
						data.rootPropertyValueCache = {};

						var transformHAPropertyExists = false;
						/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
						$.each(CSS.Lists.transforms3D, function(i, transformName) {
							var defaultValue = /^scale/.test(transformName) ? 1 : 0,
									currentValue = data.transformCache[transformName];

							if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
								transformHAPropertyExists = true;

								delete data.transformCache[transformName];
							}
						});

						/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
						if (opts.mobileHA) {
							transformHAPropertyExists = true;
							delete data.transformCache.translate3d;
						}

						/* Flush the subproperty removals to the DOM. */
						if (transformHAPropertyExists) {
							CSS.flushTransformCache(element);
						}

						/* Remove the "velocity-animating" indicator class. */
						CSS.Values.removeClass(element, "velocity-animating");
					}
				}

				/*********************
				 Option: Complete
				 *********************/

				/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
				/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
				if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
					/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
					try {
						opts.complete.call(elements, elements);
					} catch (error) {
						setTimeout(function() {
							throw error;
						}, 1);
					}
				}

				/**********************
				 Promise Resolving
				 **********************/

				/* Note: Infinite loops don't return promises. */
				if (resolver && opts.loop !== true) {
					resolver(elements);
				}

				/****************************
				 Option: Loop (Infinite)
				 ****************************/

				if (data && opts.loop === true && !isStopped) {
					/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
					 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
					$.each(data.tweensContainer, function(propertyName, tweenContainer) {
						if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
							var oldStartValue = tweenContainer.startValue;

							tweenContainer.startValue = tweenContainer.endValue;
							tweenContainer.endValue = oldStartValue;
						}

						if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
							tweenContainer.endValue = 0;
							tweenContainer.startValue = 100;
						}
					});

					Velocity(element, "reverse", {loop: true, delay: opts.delay});
				}

				/***************
				 Dequeueing
				 ***************/

				/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
				 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
				 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
				if (opts.queue !== false) {
					$.dequeue(element, opts.queue);
				}
			}

			/************************
			 Calls Array Cleanup
			 ************************/

			/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
			 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
			Velocity.State.calls[callIndex] = false;

			/* Iterate through the calls array to determine if this was the final in-progress animation.
			 If so, set a flag to end ticking and clear the calls array. */
			for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
				if (Velocity.State.calls[j] !== false) {
					remainingCallsExist = true;

					break;
				}
			}

			if (remainingCallsExist === false) {
				/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
				Velocity.State.isTicking = false;

				/* Clear the calls array so that its length is reset. */
				delete Velocity.State.calls;
				Velocity.State.calls = [];
			}
		}

		/******************
		 Frameworks
		 ******************/

		/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
		 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
		 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
		 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
		 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
		global.Velocity = Velocity;

		if (global !== window) {
			/* Assign the element function to Velocity's core animate() method. */
			global.fn.velocity = animate;
			/* Assign the object function's defaults to Velocity's global defaults object. */
			global.fn.velocity.defaults = Velocity.defaults;
		}

		/***********************
		 Packaged Redirects
		 ***********************/

		/* slideUp, slideDown */
		$.each(["Down", "Up"], function(i, direction) {
			Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						begin = opts.begin,
						complete = opts.complete,
						inlineValues = {},
						computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};

				if (opts.display === undefined) {
					/* Show the element before slideDown begins and hide the element after slideUp completes. */
					/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
					opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
				}

				opts.begin = function() {
					/* If the user passed in a begin callback, fire it now. */
					if (elementsIndex === 0 && begin) {
						begin.call(elements, elements);
					}

					/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
					for (var property in computedValues) {
						if (!computedValues.hasOwnProperty(property)) {
							continue;
						}
						inlineValues[property] = element.style[property];

						/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
						 use forcefeeding to start from computed values and animate down to 0. */
						var propertyValue = CSS.getPropertyValue(element, property);
						computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
					}

					/* Force vertical overflow content to clip so that sliding works as expected. */
					inlineValues.overflow = element.style.overflow;
					element.style.overflow = "hidden";
				};

				opts.complete = function() {
					/* Reset element to its pre-slide inline values once its slide animation is complete. */
					for (var property in inlineValues) {
						if (inlineValues.hasOwnProperty(property)) {
							element.style[property] = inlineValues[property];
						}
					}

					/* If the user passed in a complete callback, fire it now. */
					if (elementsIndex === elementsSize - 1) {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					}
				};

				Velocity(element, computedValues, opts);
			};
		});

		/* fadeIn, fadeOut */
		$.each(["In", "Out"], function(i, direction) {
			Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						complete = opts.complete,
						propertiesMap = {opacity: (direction === "In") ? 1 : 0};

				/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
				 callbacks by firing them only when the final element has been reached. */
				if (elementsIndex !== 0) {
					opts.begin = null;
				}
				if (elementsIndex !== elementsSize - 1) {
					opts.complete = null;
				} else {
					opts.complete = function() {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					};
				}

				/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
				/* Note: We allow users to pass in "null" to skip display setting altogether. */
				if (opts.display === undefined) {
					opts.display = (direction === "In" ? "auto" : "none");
				}

				Velocity(this, propertiesMap, opts);
			};
		});

		return Velocity;
	}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
}));

/******************
 Known Issues
 ******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */
});

var velocity_ui = createCommonjsModule(function (module, exports) {
/**********************
 Velocity UI Pack
 **********************/

/* VelocityJS.org UI Pack (5.2.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */

(function(factory) {
	if (typeof commonjsRequire === "function" && 'object' === "object") {
		module.exports = factory();
		/* AMD module. */
	} else if (typeof undefined === "function" && undefined.amd) {
		undefined(["velocity"], factory);
		/* Browser globals. */
	} else {
		factory();
	}
}(function() {
	return function(global, window, document, undefined) {

		/*************
		 Checks
		 *************/
		var Velocity = global.Velocity;

		if (!Velocity || !Velocity.Utilities) {
			if (window.console) {
				console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
			}
			return;
		}
		var $ = Velocity.Utilities;

		var velocityVersion = Velocity.version,
				requiredVersion = {major: 1, minor: 1, patch: 0};

		function greaterSemver(primary, secondary) {
			var versionInts = [];

			if (!primary || !secondary) {
				return false;
			}

			$.each([primary, secondary], function(i, versionObject) {
				var versionIntsComponents = [];

				$.each(versionObject, function(component, value) {
					while (value.toString().length < 5) {
						value = "0" + value;
					}
					versionIntsComponents.push(value);
				});

				versionInts.push(versionIntsComponents.join(""));
			});

			return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));
		}

		if (greaterSemver(requiredVersion, velocityVersion)) {
			var abortError = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
			alert(abortError);
			throw new Error(abortError);
		}

		/************************
		 Effect Registration
		 ************************/

		/* Note: RegisterUI is a legacy name. */
		Velocity.RegisterEffect = Velocity.RegisterUI = function(effectName, properties) {
			/* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
			function animateParentHeight(elements, direction, totalDuration, stagger) {
				var totalHeightDelta = 0,
						parentNode;

				/* Sum the total height (including padding and margin) of all targeted elements. */
				$.each(elements.nodeType ? [elements] : elements, function(i, element) {
					if (stagger) {
						/* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
						totalDuration += i * stagger;
					}

					parentNode = element.parentNode;

					var propertiesToSum = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];

					/* If box-sizing is border-box, the height already includes padding and margin */
					if (Velocity.CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box") {
						propertiesToSum = ["height"];
					}

					$.each(propertiesToSum, function(i, property) {
						totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
					});
				});

				/* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
				Velocity.animate(
						parentNode,
						{height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta},
						{queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1)}
				);
			}

			/* Register a custom redirect for each effect. */
			Velocity.Redirects[effectName] = function(element, redirectOptions, elementsIndex, elementsSize, elements, promiseData, loop) {
				var finalElement = (elementsIndex === elementsSize - 1),
						totalDuration = 0;

				loop = loop || properties.loop;
				if (typeof properties.defaultDuration === "function") {
					properties.defaultDuration = properties.defaultDuration.call(elements, elements);
				} else {
					properties.defaultDuration = parseFloat(properties.defaultDuration);
				}

				/* Get the total duration used, so we can share it out with everything that doesn't have a duration */
				for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
					durationPercentage = properties.calls[callIndex][1];
					if (typeof durationPercentage === "number") {
						totalDuration += durationPercentage;
					}
				}
				var shareDuration = totalDuration >= 1 ? 0 : properties.calls.length ? (1 - totalDuration) / properties.calls.length : 1;

				/* Iterate through each effect's call array. */
				for (callIndex = 0; callIndex < properties.calls.length; callIndex++) {
					var call = properties.calls[callIndex],
							propertyMap = call[0],
							redirectDuration = 1000,
							durationPercentage = call[1],
							callOptions = call[2] || {},
							opts = {};

					if (redirectOptions.duration !== undefined) {
						redirectDuration = redirectOptions.duration;
					} else if (properties.defaultDuration !== undefined) {
						redirectDuration = properties.defaultDuration;
					}

					/* Assign the whitelisted per-call options. */
					opts.duration = redirectDuration * (typeof durationPercentage === "number" ? durationPercentage : shareDuration);
					opts.queue = redirectOptions.queue || "";
					opts.easing = callOptions.easing || "ease";
					opts.delay = parseFloat(callOptions.delay) || 0;
					opts.loop = !properties.loop && callOptions.loop;
					opts._cacheValues = callOptions._cacheValues || true;

					/* Special processing for the first effect call. */
					if (callIndex === 0) {
						/* If a delay was passed into the redirect, combine it with the first call's delay. */
						opts.delay += (parseFloat(redirectOptions.delay) || 0);

						if (elementsIndex === 0) {
							opts.begin = function() {
								/* Only trigger a begin callback on the first effect call with the first element in the set. */
								if (redirectOptions.begin) {
									redirectOptions.begin.call(elements, elements);
								}

								var direction = effectName.match(/(In|Out)$/);

								/* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
								 and the first RAF tick. */
								if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {
									$.each(elements.nodeType ? [elements] : elements, function(i, element) {
										Velocity.CSS.setPropertyValue(element, "opacity", 0);
									});
								}

								/* Only trigger animateParentHeight() if we're using an In/Out transition. */
								if (redirectOptions.animateParentHeight && direction) {
									animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
								}
							};
						}

						/* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
						if (redirectOptions.display !== null) {
							if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
								opts.display = redirectOptions.display;
							} else if (/In$/.test(effectName)) {
								/* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
								var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
								opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
							}
						}

						if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
							opts.visibility = redirectOptions.visibility;
						}
					}

					/* Special processing for the last effect call. */
					if (callIndex === properties.calls.length - 1) {
						/* Append promise resolving onto the user's redirect callback. */
						var injectFinalCallbacks = function() {
							if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
								$.each(elements.nodeType ? [elements] : elements, function(i, element) {
									Velocity.CSS.setPropertyValue(element, "display", "none");
								});
							}
							if (redirectOptions.complete) {
								redirectOptions.complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements || element);
							}
						};

						opts.complete = function() {
							if (loop) {
								Velocity.Redirects[effectName](element, redirectOptions, elementsIndex, elementsSize, elements, promiseData, loop === true ? true : Math.max(0, loop - 1));
							}
							if (properties.reset) {
								for (var resetProperty in properties.reset) {
									if (!properties.reset.hasOwnProperty(resetProperty)) {
										continue;
									}
									var resetValue = properties.reset[resetProperty];

									/* Format each non-array value in the reset property map to [ value, value ] so that changes apply
									 immediately and DOM querying is avoided (via forcefeeding). */
									/* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
									if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
										properties.reset[resetProperty] = [properties.reset[resetProperty], properties.reset[resetProperty]];
									}
								}

								/* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
								var resetOptions = {duration: 0, queue: false};

								/* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
								if (finalElement) {
									resetOptions.complete = injectFinalCallbacks;
								}

								Velocity.animate(element, properties.reset, resetOptions);
								/* Only trigger the user's complete callback on the last effect call with the last element in the set. */
							} else if (finalElement) {
								injectFinalCallbacks();
							}
						};

						if (redirectOptions.visibility === "hidden") {
							opts.visibility = redirectOptions.visibility;
						}
					}

					Velocity.animate(element, propertyMap, opts);
				}
			};

			/* Return the Velocity object so that RegisterUI calls can be chained. */
			return Velocity;
		};

		/*********************
		 Packaged Effects
		 *********************/

		/* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
		/* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
		Velocity.RegisterEffect.packagedEffects =
				{
					/* Animate.css */
					"callout.bounce": {
						defaultDuration: 550,
						calls: [
							[{translateY: -30}, 0.25],
							[{translateY: 0}, 0.125],
							[{translateY: -15}, 0.125],
							[{translateY: 0}, 0.25]
						]
					},
					/* Animate.css */
					"callout.shake": {
						defaultDuration: 800,
						calls: [
							[{translateX: -11}],
							[{translateX: 11}],
							[{translateX: -11}],
							[{translateX: 11}],
							[{translateX: -11}],
							[{translateX: 11}],
							[{translateX: -11}],
							[{translateX: 0}]
						]
					},
					/* Animate.css */
					"callout.flash": {
						defaultDuration: 1100,
						calls: [
							[{opacity: [0, "easeInOutQuad", 1]}],
							[{opacity: [1, "easeInOutQuad"]}],
							[{opacity: [0, "easeInOutQuad"]}],
							[{opacity: [1, "easeInOutQuad"]}]
						]
					},
					/* Animate.css */
					"callout.pulse": {
						defaultDuration: 825,
						calls: [
							[{scaleX: 1.1, scaleY: 1.1}, 0.50, {easing: "easeInExpo"}],
							[{scaleX: 1, scaleY: 1}, 0.50]
						]
					},
					/* Animate.css */
					"callout.swing": {
						defaultDuration: 950,
						calls: [
							[{rotateZ: 15}],
							[{rotateZ: -10}],
							[{rotateZ: 5}],
							[{rotateZ: -5}],
							[{rotateZ: 0}]
						]
					},
					/* Animate.css */
					"callout.tada": {
						defaultDuration: 1000,
						calls: [
							[{scaleX: 0.9, scaleY: 0.9, rotateZ: -3}, 0.10],
							[{scaleX: 1.1, scaleY: 1.1, rotateZ: 3}, 0.10],
							[{scaleX: 1.1, scaleY: 1.1, rotateZ: -3}, 0.10],
							["reverse", 0.125],
							["reverse", 0.125],
							["reverse", 0.125],
							["reverse", 0.125],
							["reverse", 0.125],
							[{scaleX: 1, scaleY: 1, rotateZ: 0}, 0.20]
						]
					},
					"transition.fadeIn": {
						defaultDuration: 500,
						calls: [
							[{opacity: [1, 0]}]
						]
					},
					"transition.fadeOut": {
						defaultDuration: 500,
						calls: [
							[{opacity: [0, 1]}]
						]
					},
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipXIn": {
						defaultDuration: 700,
						calls: [
							[{opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55]}]
						],
						reset: {transformPerspective: 0}
					},
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipXOut": {
						defaultDuration: 700,
						calls: [
							[{opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55}]
						],
						reset: {transformPerspective: 0, rotateY: 0}
					},
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipYIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45]}]
						],
						reset: {transformPerspective: 0}
					},
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipYOut": {
						defaultDuration: 800,
						calls: [
							[{opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25}]
						],
						reset: {transformPerspective: 0, rotateX: 0}
					},
					/* Animate.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipBounceXIn": {
						defaultDuration: 900,
						calls: [
							[{opacity: [0.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90]}, 0.50],
							[{opacity: 0.80, rotateY: 10}, 0.25],
							[{opacity: 1, rotateY: 0}, 0.25]
						],
						reset: {transformPerspective: 0}
					},
					/* Animate.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipBounceXOut": {
						defaultDuration: 800,
						calls: [
							[{opacity: [0.9, 1], transformPerspective: [400, 400], rotateY: -10}],
							[{opacity: 0, rotateY: 90}]
						],
						reset: {transformPerspective: 0, rotateY: 0}
					},
					/* Animate.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipBounceYIn": {
						defaultDuration: 850,
						calls: [
							[{opacity: [0.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90]}, 0.50],
							[{opacity: 0.80, rotateX: 10}, 0.25],
							[{opacity: 1, rotateX: 0}, 0.25]
						],
						reset: {transformPerspective: 0}
					},
					/* Animate.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.flipBounceYOut": {
						defaultDuration: 800,
						calls: [
							[{opacity: [0.9, 1], transformPerspective: [400, 400], rotateX: -15}],
							[{opacity: 0, rotateX: 90}]
						],
						reset: {transformPerspective: 0, rotateX: 0}
					},
					/* Magic.css */
					"transition.swoopIn": {
						defaultDuration: 850,
						calls: [
							[{opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0}]
						],
						reset: {transformOriginX: "50%", transformOriginY: "50%"}
					},
					/* Magic.css */
					"transition.swoopOut": {
						defaultDuration: 850,
						calls: [
							[{opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0}]
						],
						reset: {transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
					"transition.whirlIn": {
						defaultDuration: 850,
						calls: [
							[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160]}, 1, {easing: "easeInOutSine"}]
						]
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
					"transition.whirlOut": {
						defaultDuration: 750,
						calls: [
							[{opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160}, 1, {easing: "swing"}]
						],
						reset: {scaleX: 1, scaleY: 1, rotateY: 0}
					},
					"transition.shrinkIn": {
						defaultDuration: 750,
						calls: [
							[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0}]
						]
					},
					"transition.shrinkOut": {
						defaultDuration: 600,
						calls: [
							[{opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0}]
						],
						reset: {scaleX: 1, scaleY: 1}
					},
					"transition.expandIn": {
						defaultDuration: 700,
						calls: [
							[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0.625], scaleY: [1, 0.625], translateZ: 0}]
						]
					},
					"transition.expandOut": {
						defaultDuration: 700,
						calls: [
							[{opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0.5, scaleY: 0.5, translateZ: 0}]
						],
						reset: {scaleX: 1, scaleY: 1}
					},
					/* Animate.css */
					"transition.bounceIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], scaleX: [1.05, 0.3], scaleY: [1.05, 0.3]}, 0.35],
							[{scaleX: 0.9, scaleY: 0.9, translateZ: 0}, 0.20],
							[{scaleX: 1, scaleY: 1}, 0.45]
						]
					},
					/* Animate.css */
					"transition.bounceOut": {
						defaultDuration: 800,
						calls: [
							[{scaleX: 0.95, scaleY: 0.95}, 0.35],
							[{scaleX: 1.1, scaleY: 1.1, translateZ: 0}, 0.35],
							[{opacity: [0, 1], scaleX: 0.3, scaleY: 0.3}, 0.30]
						],
						reset: {scaleX: 1, scaleY: 1}
					},
					/* Animate.css */
					"transition.bounceUpIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], translateY: [-30, 1000]}, 0.60, {easing: "easeOutCirc"}],
							[{translateY: 10}, 0.20],
							[{translateY: 0}, 0.20]
						]
					},
					/* Animate.css */
					"transition.bounceUpOut": {
						defaultDuration: 1000,
						calls: [
							[{translateY: 20}, 0.20],
							[{opacity: [0, "easeInCirc", 1], translateY: -1000}, 0.80]
						],
						reset: {translateY: 0}
					},
					/* Animate.css */
					"transition.bounceDownIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], translateY: [30, -1000]}, 0.60, {easing: "easeOutCirc"}],
							[{translateY: -10}, 0.20],
							[{translateY: 0}, 0.20]
						]
					},
					/* Animate.css */
					"transition.bounceDownOut": {
						defaultDuration: 1000,
						calls: [
							[{translateY: -20}, 0.20],
							[{opacity: [0, "easeInCirc", 1], translateY: 1000}, 0.80]
						],
						reset: {translateY: 0}
					},
					/* Animate.css */
					"transition.bounceLeftIn": {
						defaultDuration: 750,
						calls: [
							[{opacity: [1, 0], translateX: [30, -1250]}, 0.60, {easing: "easeOutCirc"}],
							[{translateX: -10}, 0.20],
							[{translateX: 0}, 0.20]
						]
					},
					/* Animate.css */
					"transition.bounceLeftOut": {
						defaultDuration: 750,
						calls: [
							[{translateX: 30}, 0.20],
							[{opacity: [0, "easeInCirc", 1], translateX: -1250}, 0.80]
						],
						reset: {translateX: 0}
					},
					/* Animate.css */
					"transition.bounceRightIn": {
						defaultDuration: 750,
						calls: [
							[{opacity: [1, 0], translateX: [-30, 1250]}, 0.60, {easing: "easeOutCirc"}],
							[{translateX: 10}, 0.20],
							[{translateX: 0}, 0.20]
						]
					},
					/* Animate.css */
					"transition.bounceRightOut": {
						defaultDuration: 750,
						calls: [
							[{translateX: -30}, 0.20],
							[{opacity: [0, "easeInCirc", 1], translateX: 1250}, 0.80]
						],
						reset: {translateX: 0}
					},
					"transition.slideUpIn": {
						defaultDuration: 900,
						calls: [
							[{opacity: [1, 0], translateY: [0, 20], translateZ: 0}]
						]
					},
					"transition.slideUpOut": {
						defaultDuration: 900,
						calls: [
							[{opacity: [0, 1], translateY: -20, translateZ: 0}]
						],
						reset: {translateY: 0}
					},
					"transition.slideDownIn": {
						defaultDuration: 900,
						calls: [
							[{opacity: [1, 0], translateY: [0, -20], translateZ: 0}]
						]
					},
					"transition.slideDownOut": {
						defaultDuration: 900,
						calls: [
							[{opacity: [0, 1], translateY: 20, translateZ: 0}]
						],
						reset: {translateY: 0}
					},
					"transition.slideLeftIn": {
						defaultDuration: 1000,
						calls: [
							[{opacity: [1, 0], translateX: [0, -20], translateZ: 0}]
						]
					},
					"transition.slideLeftOut": {
						defaultDuration: 1050,
						calls: [
							[{opacity: [0, 1], translateX: -20, translateZ: 0}]
						],
						reset: {translateX: 0}
					},
					"transition.slideRightIn": {
						defaultDuration: 1000,
						calls: [
							[{opacity: [1, 0], translateX: [0, 20], translateZ: 0}]
						]
					},
					"transition.slideRightOut": {
						defaultDuration: 1050,
						calls: [
							[{opacity: [0, 1], translateX: 20, translateZ: 0}]
						],
						reset: {translateX: 0}
					},
					"transition.slideUpBigIn": {
						defaultDuration: 850,
						calls: [
							[{opacity: [1, 0], translateY: [0, 75], translateZ: 0}]
						]
					},
					"transition.slideUpBigOut": {
						defaultDuration: 800,
						calls: [
							[{opacity: [0, 1], translateY: -75, translateZ: 0}]
						],
						reset: {translateY: 0}
					},
					"transition.slideDownBigIn": {
						defaultDuration: 850,
						calls: [
							[{opacity: [1, 0], translateY: [0, -75], translateZ: 0}]
						]
					},
					"transition.slideDownBigOut": {
						defaultDuration: 800,
						calls: [
							[{opacity: [0, 1], translateY: 75, translateZ: 0}]
						],
						reset: {translateY: 0}
					},
					"transition.slideLeftBigIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], translateX: [0, -75], translateZ: 0}]
						]
					},
					"transition.slideLeftBigOut": {
						defaultDuration: 750,
						calls: [
							[{opacity: [0, 1], translateX: -75, translateZ: 0}]
						],
						reset: {translateX: 0}
					},
					"transition.slideRightBigIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], translateX: [0, 75], translateZ: 0}]
						]
					},
					"transition.slideRightBigOut": {
						defaultDuration: 750,
						calls: [
							[{opacity: [0, 1], translateX: 75, translateZ: 0}]
						],
						reset: {translateX: 0}
					},
					/* Magic.css */
					"transition.perspectiveUpIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180]}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.perspectiveUpOut": {
						defaultDuration: 850,
						calls: [
							[{opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.perspectiveDownIn": {
						defaultDuration: 800,
						calls: [
							[{opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180]}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.perspectiveDownOut": {
						defaultDuration: 850,
						calls: [
							[{opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.perspectiveLeftIn": {
						defaultDuration: 950,
						calls: [
							[{opacity: [1, 0], transformPerspective: [2000, 2000], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180]}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.perspectiveLeftOut": {
						defaultDuration: 950,
						calls: [
							[{opacity: [0, 1], transformPerspective: [2000, 2000], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.perspectiveRightIn": {
						defaultDuration: 950,
						calls: [
							[{opacity: [1, 0], transformPerspective: [2000, 2000], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180]}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
					},
					/* Magic.css */
					/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
					"transition.perspectiveRightOut": {
						defaultDuration: 950,
						calls: [
							[{opacity: [0, 1], transformPerspective: [2000, 2000], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180}]
						],
						reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
					}
				};

		/* Register the packaged effects. */
		for (var effectName in Velocity.RegisterEffect.packagedEffects) {
			if (Velocity.RegisterEffect.packagedEffects.hasOwnProperty(effectName)) {
				Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
			}
		}

		/*********************
		 Sequence Running
		 **********************/

		/* Note: Sequence calls must use Velocity's single-object arguments syntax. */
		Velocity.RunSequence = function(originalSequence) {
			var sequence = $.extend(true, [], originalSequence);

			if (sequence.length > 1) {
				$.each(sequence.reverse(), function(i, currentCall) {
					var nextCall = sequence[i + 1];

					if (nextCall) {
						/* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
						 in the previous call's begin callback. Otherwise, chained calls are normally triggered
						 in the previous call's complete callback. */
						var currentCallOptions = currentCall.o || currentCall.options,
								nextCallOptions = nextCall.o || nextCall.options;

						var timing = (currentCallOptions && currentCallOptions.sequenceQueue === false) ? "begin" : "complete",
								callbackOriginal = nextCallOptions && nextCallOptions[timing],
								options = {};

						options[timing] = function() {
							var nextCallElements = nextCall.e || nextCall.elements;
							var elements = nextCallElements.nodeType ? [nextCallElements] : nextCallElements;

							if (callbackOriginal) {
								callbackOriginal.call(elements, elements);
							}
							Velocity(currentCall);
						};

						if (nextCall.o) {
							nextCall.o = $.extend({}, nextCallOptions, options);
						} else {
							nextCall.options = $.extend({}, nextCallOptions, options);
						}
					}
				});

				sequence.reverse();
			}

			Velocity(sequence[0]);
		};
	}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
}));
});

var dropdownWrapperRules = css({
    position: 'relative',
    width: '200px',
    margin: '0 auto',
    padding: '10px',
    background: '#fff',
    borderRadius: '7px',
    border: '1px solid rgba(0,0,0,0.15)',
    boxShadow: '0 1px 1px rgba(50,50,50,0.1)',
    cursor: 'pointer',
    outline: 'none',
    fontWeight: 'bold',
    color: '#8AA8BD',
    ':after': {
        content: '""',
        width: '0',
        height: '0',
        position: 'absolute',
        top: '50%',
        right: '15px',
        marginTop: '-3px',
        borderWidth: '6px 6px 0 6px',
        borderStyle: 'solid',
        borderColor: '#8aa8bd transparent'
    }
});
var dropdownRules = function (open) {
    return css({
        position: 'absolute',
        top: '80%',
        left: '0',
        right: '0',
        padding: '0',
        background: 'white',
        borderRadius: 'inherit',
        border: '1px solid rgba(0,0,0,0.17)',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        fontWeight: 'normal',
        // transition: 'all 0.5s ease-in',
        listStyle: 'none'
        // display: open ? 'inherit' : 'none'
    });
};
var listItemRules = css({
    ':first-of-type': {
        borderRadius: '7px 7px 0 0'
    },
    ':last-of-type': {
        borderRadius: '0 0 7px 7px',
        border: 'none'
    }
});
var listItemLinkRules = css({
    display: 'block',
    padding: '10px',
    textDecoration: 'none',
    color: '#8aa8bd',
    borderBottom: '1px solid #e6e8ea',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,1)',
    // transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    ':hover': {
        background: '#f3f8f8'
    }
});
var activeItemRules = css({
    borderRadius: '5px 5px 0 0',
    background: '#4cbeff',
    boxShadow: 'none',
    borderBottom: 'none',
    color: 'white',
    ':after': {
        borderColor: '#82d1ff transparent'
    }
});
var dropdownItemRules = function (items, selected, handleOnSelect, displayBy) {
    return items.map(function (item, idx) {
        return (createElement("li", __assign({ key: idx }, listItemRules, (item === selected ? activeItemRules : null)),
            createElement("a", __assign({ onClick: handleOnSelect.bind(item) }, listItemLinkRules), displayBy ? item[displayBy] : item)));
    });
};
var DropDown = /** @class */ (function (_super) {
    __extends(DropDown, _super);
    function DropDown(props) {
        var _this = _super.call(this, props) || this;
        _this.openDropdown = function () {
            _this.setState({ open: !_this.state.open });
        };
        _this.state = {
            open: _this.props.open
        };
        return _this;
    }
    DropDown.prototype.render = function () {
        return (createElement("div", __assign({}, dropdownWrapperRules, { onClick: this.openDropdown }),
            createElement("span", null, this.props.selected),
            createElement(VelocityTransitionGroup, { enter: { animation: 'transition.slideDown' }, leave: { animation: 'transition.slideUp' } }, this.state.open ? (createElement("ul", __assign({}, dropdownRules(this.state.open)), dropdownItemRules(this.props.items, this.props.selected, this.props.handleOnSelect, this.props.displayBy))) : null)));
    };
    return DropDown;
}(Component));

var barOptions = function (side) {
    return css({
        content: '""',
        height: '2px',
        width: '0',
        bottom: '1px',
        position: 'absolute',
        background: '#4A90E2',
        transition: '0.2s ease all'
    }, side === 'left' ? { left: '50%' } : { right: '50%' });
};
var barRules = css({
    position: 'relative',
    display: 'block',
    width: '300px',
    '::before': barOptions('left'),
    '::after': barOptions('right')
});
var errorBarRules = css({
    position: 'relative',
    display: 'block',
    content: '""',
    height: '2px',
    bottom: '1px',
    background: 'red'
});
var errorText = css({
    color: 'red',
    margin: '4px 0 0 5px',
    fontSize: '14px'
});
var labelRules = function (value, error) {
    return css({
        color: !error ? '#333' : 'red',
        fontSize: '18px',
        fontWeight: 'normal',
        position: 'absolute',
        pointerEvents: 'none',
        opacity: '0.5',
        left: '5px',
        top: '10px',
        transition: '0.2s ease all'
    }, value
        ? {
            top: '-10px',
            fontSize: '14px'
        }
        : null);
};
var inputGroupRules = function (value, error) {
    return css({
        position: 'relative',
        margin: '14px 0 45px 0',
        '& > label': labelRules(value, error),
        '& > input': {
            fontSize: '15px',
            padding: '10px 6px 6px 6px',
            display: 'block',
            width: '100%',
            border: 'none',
            borderBottom: '1px solid #757575',
            '::placeholder': {
                visibility: 'hidden'
            },
            ':focus': {
                '::placeholder': {
                    visibility: 'inherit'
                },
                ' ~ .bar:before': {
                    width: '50%'
                },
                ' ~ .bar:after': {
                    width: '50%'
                },
                outline: 'none',
                ' ~ label': {
                    top: '-10px',
                    fontSize: '14px',
                    color: !error ? '#333' : 'red'
                }
            }
        }
    });
};
var InputLine = function (_a) {
    var handleChange = _a.handleChange, handleBlur = _a.handleBlur, value = _a.value, label = _a.label, error = _a.error, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? false : _b, _c = _a.updateValueToPlaceholder, updateValueToPlaceholder = _c === void 0 ? true : _c;
    // Sort of a hack to make the placeholder the value when Enter key is pressed
    var placeholderToValue = function (e) {
        e.charCode === 13 && updateValueToPlaceholder && placeholder
            ? handleChange({ type: 'change', target: { value: placeholder } })
            : null;
    };
    return (createElement("div", __assign({}, inputGroupRules(value, error)),
        createElement("input", { type: "text", placeholder: placeholder ? placeholder : null, value: value, onKeyPress: placeholderToValue, onChange: handleChange, onBlur: handleBlur, required: required }),
        !error ? (createElement("span", __assign({ className: "bar" }, barRules))) : (createElement("span", __assign({ className: "error-bar" }, errorBarRules))),
        createElement("span", __assign({}, errorText), error),
        label ? createElement("label", null, label) : null));
};

/**
 * 10/17 - Kevin Tran
 */
// ======================
// Position Rules
// ======================
var horizontalPositionOptions = function (horizontalPos, distance) {
    switch (horizontalPos) {
        case 'left':
        case 'right':
            return _a = {}, _a[horizontalPos] = distance, _a;
        case 'center':
            return { left: '50%', transform: 'translateX(-50%)' };
        default:
            return null;
    }
    var _a;
};
var labelPositionRules = function (position, distanceFromBorder) {
    var _a = position.split(' '), vertical = _a[0], horizontal = _a[1];
    return css((_b = {
            position: 'absolute'
        }, _b[vertical] = distanceFromBorder, _b), horizontalPositionOptions(horizontal, distanceFromBorder));
    var _b;
};
// ======================
// Label Rules
// ======================
// TODO:  Use Michael's stylesheet
var badgeRules = css({
    color: '#1976D2',
    border: '1px solid #1976D2',
    fontSize: '10',
    fontWeight: '600'
});
var noteRules = css({
    color: 'rgba(0,0,0,.85)',
    fontSize: '13',
    fontWeight: '400'
});
var typeRules = function (type) { return (type === 'badge' ? badgeRules : noteRules); };
var labelRules$1 = function (type, distanceFromBorder, padding, position, uppercase) {
    return css(labelPositionRules(position, distanceFromBorder), {
        // Defaults
        cursor: 'default',
        borderRadius: '2',
        letterSpacing: '.6',
        padding: '5 10',
        userSelect: 'none'
    }, typeRules(type), {
        // Overrides
        padding: padding,
        textTransform: uppercase ? 'uppercase' : 'normal'
    });
};
var Label = function (_a) {
    var handleClick = _a.handleClick, content = _a.content, _b = _a.distanceFromBorder, distanceFromBorder = _b === void 0 ? 10 : _b, _c = _a.padding, padding = _c === void 0 ? '5 10' : _c, position = _a.position, type = _a.type, _d = _a.uppercase, uppercase = _d === void 0 ? false : _d;
    var rules = labelRules$1(type, distanceFromBorder, padding, position, uppercase);
    return (createElement("div", __assign({ onClick: handleClick }, rules), content));
};

var headerRules = css({
    borderBottom: '1px solid #eee',
    padding: '1.25rem 0',
    fontWeight: 'bold'
});
/**
 *  A modal can have a header
 */
var ModalHeader = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style;
    return (createElement("div", __assign({ className: "modal__header " + (className && className) }, css(headerRules, style)), children));
};
ModalHeader.defaultProps = {
    className: ''
};

var contentRules = css({
    padding: '1.5rem 0',
    minHeight: '80'
});
/**
 *  Modal content
 */
var ModalContent = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style;
    if (children) {
        return (createElement("div", __assign({ className: "modal__content " + className }, css(contentRules, style)), children));
    }
    return null;
};
ModalContent.defaultProps = {
    className: ''
};

var actionRules$1 = css({
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #eee',
    padding: '1rem 0',
    ' > button:not(:last-of-type)': {
        marginRight: '10'
    }
});
/**
 * A modal can contain a row of actions
 */
var ModalActions = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style;
    return (createElement("div", __assign({ className: "modal__actions " + className }, css(actionRules$1, style)), children));
};
ModalActions.defaultProps = {
    className: ''
};

var hasDocument = typeof document === 'object' && document !== null;
var hasWindow = typeof window === 'object' && window !== null && window.self === window;
var isBrowser = hasDocument && hasWindow;

// import * as __debug from 'debug';
// Rollup workaround https://github.com/rollup/rollup/issues/670
// const _debug = __debug;
if (isBrowser && process.env.NODE_ENV !== 'production') {
    // As a default, the debugger is enabled for the entire JoyReact namespace.
    // If you have a specifc module that you want to debug, adjust the following variable to that namespace.
    // IE to test ONLY the `Home` component, we want to enable: `JoyReact:Home`
    
    // _debug.enable(`JoyReact:${enabledNamespace}`);
}
else {
    // _debug.enable('-*');
}
/**
 * Create a namespaced debug function - a logger.
 * @param {String} namespace Capitalized for a component, lowercase for a module
 * @example
 * import { createDebugger } from '~src/util'
 * const debug = createDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
// export const createDebugger = namespace => _debug(`JoyReact:${namespace}`);
var createDebugger = function (namespace) { return null; };
/**
 * Default debugger, simple log.
 * @example
 * import { debug } from '~src/util'
 * debug('Some message')
 */
var debug = createDebugger('log');

var KEYCODES = {
    ENTER: 13,
    ESCAPE: 27,
    SHIFT: 16,
    SPACE: 32
};

/**
 * Tests if children are nil in React.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
var isNil = function (children) {
    return children === null ||
        children === undefined ||
        (Array.isArray(children) && children.length === 0);
};
/**
 * Utility function that simply returns all its children - without the need for
 * array notation and manually adding keys to each of the elements.
 *
 * As a feature of React Fiber, we can return an array of elements that don't need to have a
 * parent container (IE a div) in order to nest.
 * @param props
 * @example
 * const Component = () => (
 *   <Aux>
 *    <li>1</li>
 *    <li>2</li>
 *    <li>3</li>
 *  </Aux>
 * )
 *
 * Further Reading:
 * https://reactjs.org/blog/2017/09/26/react-v16.0.html
 *
 * Why have this utility:
 * https://pawelgrzybek.com/return-multiple-elements-from-a-component-with-react-16/
 *
 * If you attempt to directly return an array of React Elements,
 * you will receive several errors TS errors:
 *
 * 1. error TS2605: JSX element type 'Element[]' is not a constructor
 *    function for JSX elements.  Property 'render' is missing in type Element[]
 * 2. error TS2607: JSX element class does not support attributes because it
 *    does not have a 'props' property.
 *
 */
var Fragments = function (props) { return props.children; };

var weddingNameString = function (owner, fiancee) {
    var ownerFirstName = owner.split(' ')[0];
    if (Boolean(fiancee)) {
        return ownerFirstName + " & " + fiancee.split(' ')[0];
    }
    return ownerFirstName;
};

var Colors = /** @class */ (function () {
    function Colors() {
    }
    Colors.hexToRgb = function (hex) {
        var hexVals = hex.split('');
        var rHex = hexVals[1] + hexVals[2];
        var gHex = hexVals[3] + hexVals[4];
        var bHex = hexVals[5] + hexVals[6];
        var r = parseInt(rHex, 16);
        var g = parseInt(gHex, 16);
        var b = parseInt(bHex, 16);
        return [r, g, b];
    };
    Colors.hex3to6 = function (hex3) {
        var hex6 = hex3.split('');
        for (var i = 1; i < hex6.length; i += 2) {
            hex6.splice(i, hex6[i]);
        }
        return hex6;
    };
    Colors.rgbaStringToArray = function (rgbaString) {
        var temp = rgbaString.slice(rgbaString.indexOf('(') + 1, rgbaString.indexOf(')'));
        rgbaString = temp.split(',').map(function (ele) {
            return parseFloat(ele);
        });
        return rgbaString;
    };
    Colors.findRgb = function (colorString) {
        var rgbArray;
        if (colorString.split('')[0] === '#') {
            rgbArray =
                colorString.length == 7
                    ? Colors.hexToRgb(colorString)
                    : colorString.length == 4
                        ? Colors.hexToRgb(Colors.hex3to6(colorString))
                        : [];
            // telemetry.debug('returned rgb array' + rgbArray.toString());
            return rgbArray;
        }
        else if (colorString.split('(')[0] == 'rgb' || 'rgba') {
            // colorString == ('rgb()' || 'rgba()'
            rgbArray = Colors.rgbaStringToArray(colorString);
            // telemetry.debug('returned rgb array' + rgbArray.toString());
            // remove to allow alpha returned
            rgbArray.pop();
            return rgbArray;
            // } else telemetry.debug('bad color:' + colorString);
        }
    };
    return Colors;
}());

var ESCAPE_KEY_CODE = 27;
//======================
// Styling
//======================
/* CSS */
var overlayRules = function (animationOverrideRules, styleRules) {
    return css({
        backgroundColor: 'rgba(0, 0, 0, .8)',
        bottom: 0,
        left: 0,
        position: 'fixed',
        top: 0,
        right: 0,
        opacity: 0
    }, styleRules);
};
/**
 * The overlay will act as dimmer of the screen and it will contain a modal
 */
var ModalLightBox = /** @class */ (function (_super) {
    __extends(ModalLightBox, _super);
    function ModalLightBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleEscapeKeyClick = function (e) {
            if (e.which === ESCAPE_KEY_CODE) {
                _this.closeModal(e);
            }
        };
        _this.handleBackgroundClick = function (e) {
            if (e.target === e.currentTarget ||
                (e.target.classList[0] && e.target.classList[0].endsWith('wrapper'))) {
                _this.closeModal(e);
            }
        };
        _this.closeModal = function (e) {
            if (!_this.props.ignoreCloseEvents && _this.props.isActive) {
                _this.props.handleCloseEvent(_this.props, e);
            }
        };
        return _this;
    }
    ModalLightBox.prototype.componentWillMount = function () {
        if (this.props.closeOnEscape) {
            document.addEventListener('keyup', this.handleEscapeKeyClick, false);
        }
        if (this.props.closeOnBackgroundClick) {
            document.addEventListener('click', this.handleBackgroundClick, false);
        }
    };
    ModalLightBox.prototype.componentWillUnmount = function () {
        if (this.props.closeOnEscape) {
            document.removeEventListener('keyup', this.handleEscapeKeyClick, false);
        }
        if (this.props.closeOnBackgroundClick) {
            document.removeEventListener('click', this.handleBackgroundClick, false);
        }
    };
    ModalLightBox.prototype.render = function () {
        if (this.props.hide) {
            return null;
        }
        var _a = this.props, animationOverrideRules = _a.animationOverrideRules, closeOnBackgroundClick = _a.closeOnBackgroundClick, isOpen = _a.isOpen, styleRules = _a.styleRules;
        return (createElement(VelocityComponent, { animation: { opacity: isOpen ? 1 : 0 }, duration: 300, runOnMount: true },
            createElement("div", __assign({}, overlayRules(animationOverrideRules, styleRules), { className: "modal-lightbox" }))));
    };
    ModalLightBox.defaultProps = {
        hide: false,
        ignoreCloseEvents: false
    };
    return ModalLightBox;
}(Component));

//======================
// Styling
//======================
var wrapperRules = function (isActive, hideLightbox) {
    return css({
        overflow: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: !isActive && hideLightbox && 'none'
    });
};
/**
 * A modal displays content that temporarily blocks interactions with the main view
 */
var ModalPortal = /** @class */ (function (_super) {
    __extends(ModalPortal, _super);
    function ModalPortal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isClosing: false };
        _this.closePortal = function () {
            _this.setState({ isClosing: true });
        };
        _this.buildModalContent = function () {
            var isClosing = _this.state.isClosing;
            var _a = _this.props, animations = _a.animations, delay = _a.delay, isActive = _a.isActive, runOnMount = _a.runOnMount, styleRules = _a.styleRules, type = _a.type, render = _a.render;
            var animation = null;
            if (animations) {
                animation = animations(!isClosing && isActive);
            }
            return (createElement(VelocityComponent, { animation: animation, duration: 300, delay: delay && delay, runOnMount: runOnMount, easing: "ease" },
                createElement("div", __assign({ className: type }, styleRules), render ? _this.inlineRender() : _this.props.children)));
        };
        return _this;
    }
    ModalPortal.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            // Set overflow hidden so that the background doesn't scroll
            document.body.style.overflow = 'hidden';
        }
    };
    ModalPortal.prototype.componentWillReceiveProps = function (nextProps) {
        var bodyOverflow = document.body.style.overflow;
        if (this.props.isOpen && bodyOverflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        }
    };
    ModalPortal.prototype.componentWillUnmount = function () {
        var onUnmount = this.props.onUnmount;
        onUnmount && onUnmount(this.props);
    };
    ModalPortal.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (this.state.isClosing && !Boolean(this.closingTimeoutId)) {
            this.closingTimeoutId = window.setTimeout(function () {
                // Set overflow hidden so that the background doesn't scroll
                document.body.style.overflow = 'auto';
                _this.props.onClose();
                window.clearTimeout(_this.closingTimeoutId);
                _this.closingTimeoutId = null;
                if (_this.props.resetAfterClosing) {
                    _this.setState({ isClosing: false });
                }
            }, 300);
        }
    };
    ModalPortal.prototype.inlineRender = function () {
        var passedProps = { closePortal: this.closePortal };
        return this.props.render(passedProps);
    };
    ModalPortal.prototype.render = function () {
        var isClosing = this.state.isClosing;
        var _a = this.props, children = _a.children, closeOnBackgroundClick = _a.closeOnBackgroundClick, closeOnEscape = _a.closeOnEscape, onClose = _a.onClose, hideLightboxOnInactive = _a.hideLightboxOnInactive, hideLightbox = _a.hideLightbox, ignoreCloseEvents = _a.ignoreCloseEvents, isActive = _a.isActive, isOpen = _a.isOpen, type = _a.type;
        var modalContent = this.buildModalContent();
        var portal = (createElement(Portal, null,
            createElement(Fragments, null,
                createElement(ModalLightBox, { closeOnBackgroundClick: closeOnBackgroundClick, closeOnEscape: closeOnEscape, handleCloseEvent: this.closePortal, hide: hideLightbox, ignoreCloseEvents: ignoreCloseEvents, isActive: isActive || (!isActive && !hideLightboxOnInactive), isOpen: isOpen && !isClosing }),
                createElement("div", __assign({ className: type + "-wrapper" }, wrapperRules(isActive, hideLightbox)), type === 'modal' && modalContent),
                type === 'panel-overlay' && modalContent)));
        return isOpen ? portal : null;
    };
    ModalPortal.defaultProps = {
        closeOnEscape: true,
        closeOnBackgroundClick: true,
        hideLightboxOnInactive: true,
        hideLightbox: false,
        resetAfterClosing: false,
        runOnMount: true
    };
    return ModalPortal;
}(Component));

//======================
// Styling
//======================
var animations = function (isOpen) {
    if (isOpen) {
        return {
            scale: [1, 1.05],
            opacity: 1
        };
    }
    return {
        scale: [0.95, 1],
        opacity: 0
    };
};
/* CSS */
var sizeOptions = {
    mini: { width: 360 },
    small: { width: 480 },
    normal: { width: 600 },
    large: { width: 700 },
    fullscreen: { width: '100%', height: '100%' }
};
var modalRules = function (size) {
    return css(sizeOptions[size], {
        background: 'rgba(255,255,255, 1)',
        borderRadius: '2',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        margin: '5em auto',
        opacity: 0,
        padding: '0 1.5rem',
        top: '1em'
    }, size !== 'fullscreen' && (_a = {}, _a["@media only screen and (max-width: 767px)"] = {
            width: '95%'
        }, _a));
    var _a;
};
/**
 * A modal displays content that temporarily blocks interactions with the main view
 */
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        return (createElement(ModalPortal, __assign({ type: "modal" }, this.props, { animations: animations, styleRules: modalRules(this.props.size) })));
    };
    Modal.defaultProps = {
        size: 'small',
        closeOnEscape: true,
        closeOnBackgroundClick: true,
        hideLightbox: false,
        hideLightboxOnInactive: true
    };
    Modal.Header = ModalHeader;
    Modal.Content = ModalContent;
    Modal.Actions = ModalActions;
    return Modal;
}(Component));

var iconBackArrow = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2220px%22%20viewBox%3D%220%200%2024%2020%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3EiconBackArrowBlk%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22iconBackArrow%22%20fill%3D%22%23232323%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.06903478%2C9.09392209%20L10.5356926%2C1.5534785%20C10.8861422%2C1.19618047%2010.8861422%2C0.622240186%2010.5356926%2C0.264942151%20C10.1828426%2C-0.0883140504%209.61396198%2C-0.0883140504%209.26031188%2C0.264942151%20C9.26031188%2C0.264942151%202.41294183%2C7.1869853%200.26223715%2C9.35583287%20C-0.0874123834%2C9.7131309%20-0.0874123834%2C10.2878796%200.26223715%2C10.6443692%20C2.31612812%2C12.7154044%208.94186676%2C19.41353%209.26031188%2C19.7320265%20C9.61396198%2C20.0893245%2010.1828426%2C20.0893245%2010.5356926%2C19.7320265%20C10.8861422%2C19.3787703%2010.8861422%2C18.8040216%2010.5356926%2C18.4467236%20L3.07543569%2C10.9127469%20L23.0998725%2C10.9127469%20C23.3375061%2C10.9127469%2023.5655385%2C10.818168%2023.7375628%2C10.6476027%20C23.9063867%2C10.4770373%2024%2C10.2434194%2024%2C10.0033345%20C24%2C9.76324963%2023.9063867%2C9.52963169%2023.7375628%2C9.35906634%20C23.5655385%2C9.18850099%2023.3375061%2C9.09392209%2023.0998725%2C9.09392209%20L3.06903478%2C9.09392209%20Z%22%20id%3D%22Page-1%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var navBarStyles = function (hideBottomBorder) {
    return css({
        width: '100%',
        height: '100px',
        borderBottom: !hideBottomBorder && '1px solid rgb(232, 232, 232)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    });
};
var titleStyles = css({
    fontSize: 21,
    fontWeight: 300
});
var subTitleStyles = css({
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase'
});
var backButton = css({
    height: 20,
    marginRight: 20,
    width: 'auto'
});
var baseContentOptions = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 10,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: TEXT.color
};
var leftContent = css(baseContentOptions, {
    flexGrow: '1',
    paddingRight: '40px',
    marginLeft: 40
});
var centerContent = css({
    flexGrow: '3'
});
var rightContent = css(baseContentOptions, {
    flexGrow: '1',
    justifyContent: 'flex-end',
    marginRight: 40
});
var TopNav = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, contentCenter = _a.contentCenter, contentRight = _a.contentRight, click = _a.click, link = _a.link, _b = _a.backButton, backButton = _b === void 0 ? false : _b, hideBottomBorder = _a.hideBottomBorder;
    return (createElement("div", __assign({}, navBarStyles(hideBottomBorder)),
        !click ? (createElement(Link, __assign({ to: "" + link }, leftContent),
            backButton ? createElement("img", __assign({}, backButton, { src: iconBackArrow })) : null,
            createElement("div", __assign({}, titleStyles), title),
            createElement("div", __assign({}, subTitleStyles), subtitle))) : (createElement("a", __assign({ onClick: click }, leftContent),
            createElement("img", __assign({}, backButton, { src: iconBackArrow })),
            createElement("div", __assign({}, titleStyles), title),
            createElement("div", __assign({}, subTitleStyles), subtitle))),
        createElement("div", __assign({}, centerContent), contentCenter),
        createElement("div", __assign({}, rightContent), contentRight)));
};

// ======================
// Styles
// ======================
/* CSS */
var textOptions = {
    ' > div': {
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: 1.8,
        fontWeight: 500,
        cursor: 'pointer'
    }
};
var topNavRules = css({
    display: 'flex',
    fontSize: '12px',
    justifyContent: 'space-between',
    left: '0',
    position: 'absolute',
    right: '0',
    zIndex: 1
}, textOptions);
var PanelTopNav = function (_a) {
    var children = _a.children, contentLeftTitle = _a.contentLeftTitle, contentRight = _a.contentRight, showPanel = _a.showPanel;
    return (createElement(VelocityComponent, { animation: showPanel ? 'fadeOut' : 'fadeIn', duration: 400, easing: "ease" },
        createElement("div", __assign({ className: "panel-dashboard__top-nav" }, topNavRules),
            createElement(TopNav, { hideBottomBorder: true, title: contentLeftTitle, contentRight: contentRight }))));
};

// ======================
// Styles
// ======================
var mainRules = css({
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end'
});
var PanelMain = /** @class */ (function (_super) {
    __extends(PanelMain, _super);
    function PanelMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelMain.prototype.render = function () {
        var children = this.props.children;
        return (createElement("div", __assign({}, mainRules, { className: "panel-dashboard__main" }), children));
    };
    return PanelMain;
}(Component));

// ======================
// Styles
// ======================
var consoleRules = function () {
    return css({
        backfaceVisibility: 'visible',
        background: 'white',
        height: '100%',
        mixBlendMode: 'normal',
        width: '600'
    });
};
var PanelMainConsole = function (_a) {
    var children = _a.children, showPanel = _a.showPanel;
    return (createElement(VelocityComponent, { animation: { translateZ: 0, translateX: showPanel ? 0 : '100%' }, duration: 400, easing: "ease" },
        createElement("div", __assign({}, consoleRules(), { className: "panel-dashboard__console" }), children)));
};

// ======================
// Styles
// ======================
var contentRules$1 = css({
    backfaceVisibility: 'visible',
    mixBlendMode: 'normal',
    position: 'absolute',
    maxHeight: 'calc(100% - 60px)'
});
var animations$1 = {
    show: {
        left: '25%',
        translateX: '-25%',
        translateY: 99
    },
    hide: {
        left: '50%',
        translateX: '-50%',
        translateY: 70
    }
};
var PanelMainContent = function (_a) {
    var children = _a.children, showPanel = _a.showPanel;
    var animation = animations$1[showPanel ? 'show' : 'hide'];
    return (createElement(VelocityComponent, { animation: animation, duration: 400, easing: "ease" },
        createElement("div", __assign({}, contentRules$1, { className: "panel-dashboard__content" }), children)));
};

// ======================
// Styles
// ======================
/* CSS */
var bottomNavRules = function (showPanel) {
    return css({
        alignItems: 'center',
        background: 'rgb(255,255,255)',
        bottom: '0',
        boxSizing: 'border-box',
        display: 'flex',
        height: '62',
        justifyContent: 'center',
        maxHeight: '62',
        position: 'absolute',
        width: '100%'
    });
};
var PanelBottomNav = function (_a) {
    var contentRight = _a.contentRight, children = _a.children, nav = _a.nav, showPanel = _a.showPanel, title = _a.title;
    return (createElement(VelocityComponent, { animation: showPanel ? 'transition.slideDownOut' : 'transition.slideUpIn', duration: 400, easing: "ease" },
        createElement("div", __assign({}, bottomNavRules(showPanel), { className: "panel-dashboard__bottom-nav" }),
            createElement(CommandBar.Container, { title: title, nav: nav, contentRight: contentRight }))));
};

var Main = {
    Container: PanelMain,
    Content: PanelMainContent,
    Console: PanelMainConsole
};
var PanelDashboard = {
    TopNav: PanelTopNav,
    Main: Main,
    BottomNav: PanelBottomNav
};

// ======================
// Styles
// ======================
var containerRules = css({
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '40px',
    width: '100%',
    '> *:not(:last-child)': {
        marginBottom: 40
    }
});
var headerRules$1 = css({
    fontWeight: 100,
    margin: 0
});
var descriptionRules = css({
    fontSize: 15,
    lineHeight: '24px',
    letterSpacing: 0.2
});
var navItemRules$1 = css({
    flexGrow: 1,
    '> div:last-child': {
        borderBottom: "1px solid " + COLORS.GRAY_SECONDARY
    }
});
var actionRules$2 = css({
    display: 'flex',
    justifyContent: 'center',
    '& > *:not(:last-child)': {
        marginRight: 20
    }
});
// @TODO: NOT USED CURRENTLY
// const renderNavItems = navItems => {
//   if (navItems instanceof Array) {
//     return navItems.map(({ content, key, handleOnClick }) => (
//       <PanelNavItem key={key} content={content} handleOnClick={handleOnClick} />
//     ));
//   }
//   return navItems;
// };
var PanelNavigator = function (_a) {
    var actions = _a.actions, children = _a.children, description = _a.description, header = _a.header, navItems = _a.navItems;
    return (createElement("section", __assign({ className: "panel-navigator" }, containerRules),
        createElement("h2", __assign({}, headerRules$1), header),
        createElement("div", __assign({}, descriptionRules), description),
        createElement("div", __assign({}, navItemRules$1), navItems),
        actions && createElement("div", __assign({}, actionRules$2), actions)));
};

var iconForwardArrow = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2218%22%20viewBox%3D%220%200%2010%2018%22%3E%20%20%20%20%3Cpath%20fill%3D%22%23100F0D%22%20fill-rule%3D%22nonzero%22%20d%3D%22M.133%2017.268a.411.411%200%200%200%200%20.606.474.474%200%200%200%20.643%200l9.09-8.571a.411.411%200%200%200%200-.606L.777.126a.474.474%200%200%200-.643%200%20.411.411%200%200%200%200%20.606l8.773%208.271-8.773%208.265z%22%2F%3E%3C%2Fsvg%3E";

var navItemRules$2 = css({
    display: 'flex',
    alignItems: 'center',
    borderTop: "1px solid " + COLORS.GRAY_SECONDARY,
    height: 58,
    cursor: 'pointer',
    padding: '0 20',
    ':hover': {
        background: '#f9f8f8'
    }
});
var iconRules$1 = css({
    border: '1px solid palevioletred',
    height: 58,
    lineHeight: '58px',
    width: 58,
    marginRight: 10,
    textAlign: 'center'
});
var textRules = css({
    color: COLORS.BLACK_SECONDARY,
    flexGrow: 1,
    fontSize: 13,
    letterSpacing: 0.2
});
var PanelNavItem = function (_a) {
    var handleOnClick = _a.handleOnClick, content = _a.content;
    return (createElement("div", __assign({ className: "panel-navigator__nav-item" }, navItemRules$2, { onClick: handleOnClick }),
        createElement("div", __assign({}, iconRules$1), "Icon"),
        createElement("div", __assign({}, textRules), content),
        createElement("img", { src: iconForwardArrow })));
};
PanelNavItem.defaultProps = {
    handleOnClick: null
};

// ======================
// Styles
// ======================
var animations$2 = function (direction) { return function (isOpen) {
    var initialTransform = (direction === 'left' ? '-' : '') + "100%";
    if (isOpen) {
        return {
            translateX: [0, initialTransform]
        };
    }
    return {
        translateX: initialTransform
    };
}; };
var panelRules = function (direction) {
    return css((_a = {
            maxWidth: '100%',
            minHeight: '100%',
            padding: '40px',
            position: 'fixed',
            width: '600'
        }, _a[direction] = '0', _a.top = '0', _a.transform = "translateX(" + (direction === 'left' ? '-' : '') + "100%)", _a.background = 'white', _a));
    var _a;
};
/**
 * A Panel Overlay is a content box that slides in from a side of the screen
 */
var PanelOverlay = function (props) {
    return (createElement(ModalPortal, __assign({ type: "panel-overlay" }, props, { animations: animations$2(props.direction), delay: props.isOpen && 80, styleRules: panelRules(props.direction) })));
};
PanelOverlay.defaultProps = {
    closeOnBackgroundClick: true,
    closeOnEscape: true,
    hideLightbox: false,
    hideLightboxOnInactive: true,
    direction: 'right'
};

var wrapperRules$1 = css({
    maxWidth: '520px',
    paddingTop: '40px'
});
var textAreaRules = function (disabled) {
    return css({
        outline: 'none',
        resize: 'none',
        padding: '16px',
        border: '1px solid #cccccc',
        borderRadius: '3px',
        width: '100%',
        color: !disabled ? 'inherit' : TEXT.color,
        backgroundColor: !disabled ? 'inherit' : '#F5F5F5'
    });
};
var TextBox = function (_a) {
    var title = _a.title, titleOption = _a.titleOption, subtitle = _a.subtitle, value = _a.value, handleOnChange = _a.handleOnChange, disabled = _a.disabled, _b = _a.rows, rows = _b === void 0 ? 6 : _b;
    return (createElement("div", __assign({}, wrapperRules$1),
        createElement(ActionHeader, { title: title, titleOption: titleOption, subtitle: subtitle }),
        createElement("textarea", __assign({ disabled: disabled ? true : false }, textAreaRules(disabled), { value: value, onChange: handleOnChange, rows: rows }))));
};

var baseRules = css({
    fontWeight: 100,
    margin: 0
});
var getNameOrder = function (owner, fiancee, useOwnerNameFirst) {
    var ownerFirstName = owner.split(' ')[0];
    var fianceeFirstName = fiancee.split(' ')[0];
    var isOwnerNameLonger = ownerFirstName.length > fianceeFirstName.length;
    if (useOwnerNameFirst || !isOwnerNameLonger) {
        return {
            primary: ownerFirstName,
            secondary: fianceeFirstName
        };
    }
    return {
        primary: fianceeFirstName,
        secondary: ownerFirstName
    };
};
var shouldHaveTrailingAmpersand = function (primary, secondary, trailingAmpersand) {
    return trailingAmpersand
        ? true
        : primary.length - secondary.length > 2 ? true : false;
};
var WeddingName$$1 = function (_a) {
    var className = _a.className, id = _a.id, _b = _a.owner, owner = _b === void 0 ? '' : _b, _c = _a.fiancee, fiancee = _c === void 0 ? '' : _c, inline = _a.inline, styles = _a.styles, trailingAmpersand = _a.trailingAmpersand, useOwnerNameFirst = _a.useOwnerNameFirst, wrap = _a.wrap;
    var _d = getNameOrder(owner, fiancee, useOwnerNameFirst), primary = _d.primary, secondary = _d.secondary;
    var styleRules = css(baseRules, styles);
    var content;
    if (inline) {
        content = weddingNameString(primary, secondary);
    }
    else {
        trailingAmpersand = shouldHaveTrailingAmpersand(primary, secondary, trailingAmpersand);
        content = (createElement(Fragments, null,
            primary,
            secondary &&
                (wrap ? (createElement(Fragments, null,
                    !trailingAmpersand && ' &',
                    createElement("br", null), (trailingAmpersand ? '& ' : '') + " " + secondary)) : (" & " + secondary))));
    }
    return (createElement("h1", __assign({ id: id, className: className }, styleRules), content));
};
WeddingName$$1.defaultProps = {
    trailingAmpersand: false,
    wrap: false,
    inline: false,
    useOwnerNameFirst: true
};

var containerRules$1 = function (backgroundColor) {
    return css({
        backgroundColor: backgroundColor,
        width: '100%',
        textAlign: 'center',
        lineHeight: '36px',
        minHeight: 36
    });
};
var buttonContainerRules = css({
    position: 'absolute',
    left: '10px',
    top: '0',
    height: '36px',
    display: 'flex',
    alignItems: 'center'
});
var buttonRules$1 = css({
    height: '10px',
    width: '10px',
    borderRadius: '10px',
    margin: '0 3px'
});
var closeButtonRules = css({
    backgroundColor: '#ff5e53'
});
var minimizeButtonRules = css({
    backgroundColor: '#ffc107'
});
var expandButtonRules = css({
    backgroundColor: '#00cd36'
});
var titleRules$2 = css(containerRules$1, {
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '.2px',
    margin: 0
});
var WebPreviewTopBar = function (_a) {
    var backgroundColor = _a.backgroundColor, title = _a.title;
    return (createElement("div", __assign({}, containerRules$1(backgroundColor)),
        createElement("div", __assign({}, titleRules$2), title),
        createElement("div", __assign({}, buttonContainerRules),
            createElement("div", __assign({}, buttonRules$1, closeButtonRules)),
            createElement("div", __assign({}, buttonRules$1, minimizeButtonRules)),
            createElement("div", __assign({}, buttonRules$1, expandButtonRules)))));
};
WebPreviewTopBar.defaultProps = {
    backgroundColor: '#E2E2E4'
};

var menuIcon = "data:image/svg+xml,%3Csvg%20class%3D%22icon-menu%22%20width%3D%2230px%22%20height%3D%2223px%22%20viewBox%3D%220%200%2030%2023%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20sketch%3Atype%3D%22MSPage%22%3E%20%20%20%20%20%20%20%20%3Cg%20ng-style%3D%22weddingTheme.baseTextFill%22%20id%3D%22Home-Card%22%20sketch%3Atype%3D%22MSArtboardGroup%22%20transform%3D%22translate%28-30.000000%2C%20-67.000000%29%22%20fill%3D%22%23FFFFFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M30%2C67%20L60%2C67%20L60%2C70%20L30%2C70%20L30%2C67%20Z%20M30%2C77%20L60%2C77%20L60%2C80%20L30%2C80%20L30%2C77%20Z%20M30%2C87%20L60%2C87%20L60%2C90%20L30%2C90%20L30%2C87%20Z%22%20id%3D%22menu%22%20sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var containerRules$2 = function (color) {
    return css({
        backgroundColor: '#000',
        position: 'relative',
        width: '60%'
    });
};
var overlayRules$1 = css({
    background: 'linear-gradient(to bottom,transparent 0,transparent 40%,rgba(0,0,0,.4) 100%)',
    bottom: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0
});
var menuRules = css({
    fontSize: '12px',
    height: '20px',
    left: '25px',
    position: 'absolute',
    top: '30px',
    width: '20px'
});
var introRules = css({
    color: '#fff',
    letterSpacing: '1',
    zIndex: 1
});
var imageRules = css({
    maxHeight: '100%',
    zIndex: '-10'
});
var contentRules$3 = function (coverPhoto) {
    return css({
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column-reverse',
        fontSize: '44px',
        height: '100%',
        padding: '10% 20% 6% 10%'
    }, coverPhoto && {
        background: "url(" + coverPhoto + ") center top /cover"
    });
};
var greetingRules = css({
    fontSize: '15px',
    marginTop: '5.5%'
});
/**
 * Old theme styles
 */
var weddingNameRules = function (fontOverrides) {
    return css({
        margin: 0,
        fontSize: '5.625rem',
        transform: 'scale(.7)',
        transformOrigin: 'bottom left'
    }, fontOverrides);
};
var TwoPanePreviewLeft = function (_a) {
    var accentTextColor = _a.accentTextColor, coverPhoto = _a.coverPhoto, fianceeName = _a.fianceeName, fontOverrides = _a.fontOverrides, ownerName = _a.ownerName, message = _a.message;
    return (createElement("div", __assign({ className: "desktop-preview-screen joy-wedding-page" }, containerRules$2(accentTextColor)),
        createElement("div", __assign({ className: "left-pane" }, contentRules$3(coverPhoto)),
            coverPhoto && createElement("div", __assign({}, overlayRules$1)),
            createElement("img", __assign({}, menuRules, { className: "menu", src: menuIcon })),
            createElement("div", __assign({ className: "joy-wedding-intro" }, introRules),
                createElement(WeddingName$$1, { wrap: true, owner: ownerName, fiancee: fianceeName, styles: weddingNameRules(fontOverrides) }),
                createElement("div", __assign({}, greetingRules), message)))));
};

var moment = require('moment');
var rightPaneRules = function (color, backgroundColor) {
    if (backgroundColor === void 0) { backgroundColor = '#f3efeb'; }
    return css({
        height: '464px',
        borderRadius: '0 0 5px',
        fontSize: '15px',
        backgroundColor: backgroundColor
        // flexBasis: 320
    });
};
var welcomeContainerRules = css({
    textAlign: 'center',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
});
var infoPreviewRules = css({
    transform: 'scale(.7)'
});
var locationRules = css({
    margin: '20px 0',
    fontSize: '25px',
    fontWeight: 300,
    lineHeight: '36px'
});
var dateRules = css({
    fontSize: '17px',
    lineHeight: '17px',
    fontWeight: 400,
    margin: '0 0 20px'
});
var ctaButtonContainer = css({
    margin: '20px',
    padding: '15px',
    textAlign: 'center'
});
var guestNameRules = css({
    fontSize: '10px',
    lineHeight: '42px',
    letterSpacing: '1.25px',
    fontWeight: '600',
    textTransform: 'uppercase'
});
var ctaButtonRules = css({
    fontWeight: '400',
    lineHeight: '28px',
    border: '1.4px solid',
    borderRadius: '5px',
    minWidth: '150px',
    fontSize: '11px',
    padding: '0 20px',
    textAlign: 'center'
});
var TwoPanePreviewRight = function (_a) {
    var activeFont = _a.activeFont, backgroundColor = _a.backgroundColor, color = _a.color, eventDate = _a.eventDate, fontOverrides = _a.fontOverrides, location = _a.location;
    var eventDateMoment = moment(eventDate);
    return (createElement("div", __assign({ className: "right-pane joy-wedding-page-preview" }, css({ width: '40%' })),
        createElement("div", __assign({ className: "joy-wedding-info" }, rightPaneRules(color, backgroundColor)),
            createElement("div", __assign({ id: "welcome", className: "joy-content-card joy-content-intro" }, welcomeContainerRules),
                createElement("div", __assign({ className: "info-preview" }, infoPreviewRules),
                    createElement("h2", __assign({}, locationRules, fontOverrides), location),
                    createElement("h4", __assign({}, dateRules), eventDateMoment.isValid() &&
                        eventDateMoment.format('dddd, MMMM D, YYYY')),
                    createElement(CountdownTimer, { eventDate: eventDate }),
                    createElement("div", __assign({}, ctaButtonContainer),
                        createElement("div", __assign({ className: "rsvp-button" }, guestNameRules), "Hi guest name!"),
                        createElement("div", __assign({ className: "rsvp-button" }, ctaButtonRules), "Don't Forget to RSVP")))))));
};
TwoPanePreviewRight.defaultProps = {
    backgroundColor: '#f3efeb'
};

// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
var _root = __window || __global || __self;
var root_1 = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();


var root = {
	root: root_1
};

function isFunction(x) {
    return typeof x === 'function';
}
var isFunction_2 = isFunction;


var isFunction_1 = {
	isFunction: isFunction_2
};

var isArray_1 = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });


var isArray = {
	isArray: isArray_1
};

function isObject(x) {
    return x != null && typeof x === 'object';
}
var isObject_2 = isObject;


var isObject_1 = {
	isObject: isObject_2
};

// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject_1 = { e: {} };


var errorObject = {
	errorObject: errorObject_1
};

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject.errorObject.e = e;
        return errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
var tryCatch_2 = tryCatch;



var tryCatch_1 = {
	tryCatch: tryCatch_2
};

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends$2(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
var UnsubscriptionError_2 = UnsubscriptionError;


var UnsubscriptionError_1 = {
	UnsubscriptionError: UnsubscriptionError_2
};

/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
            }
        }
        if (isArray.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
var Subscription_2 = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}


var Subscription_1 = {
	Subscription: Subscription_2
};

var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};


var Observer = {
	empty: empty
};

var rxSubscriber = createCommonjsModule(function (module, exports) {
var Symbol = root.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;

});

var rxSubscriber_1 = rxSubscriber.rxSubscriber;
var rxSubscriber_2 = rxSubscriber.$$rxSubscriber;

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends$1(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
var Subscriber_2 = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends$1(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));


var Subscriber_1 = {
	Subscriber: Subscriber_2
};

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber.rxSubscriber]) {
            return nextOrObserver[rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
var toSubscriber_2 = toSubscriber;


var toSubscriber_1 = {
	toSubscriber: toSubscriber_2
};

var observable = createCommonjsModule(function (module, exports) {
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;

});

var observable_1 = observable.getSymbolObservable;
var observable_2 = observable.observable;
var observable_3 = observable.$$observable;

/* tslint:disable:no-empty */
function noop() { }
var noop_2 = noop;


var noop_1 = {
	noop: noop_2
};

/* tslint:enable:max-line-length */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return pipeFromArray(fns);
}
var pipe_2 = pipe;
/* @internal */
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
var pipeFromArray_1 = pipeFromArray;


var pipe_1 = {
	pipe: pipe_2,
	pipeFromArray: pipeFromArray_1
};

/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            }
            else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable.observable] = function () {
        return this;
    };
    /* tslint:enable:max-line-length */
    /**
     * Used to stitch together functional operators into a chain.
     * @method pipe
     * @return {Observable} the Observable result of all of the operators having
     * been called in the order they were passed in.
     *
     * @example
     *
     * import { map, filter, scan } from 'rxjs/operators';
     *
     * Rx.Observable.interval(1000)
     *   .pipe(
     *     filter(x => x % 2 === 0),
     *     map(x => x + x),
     *     scan((acc, x) => acc + x)
     *   )
     *   .subscribe(x => console.log(x))
     */
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i - 0] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    /* tslint:enable:max-line-length */
    Observable.prototype.toPromise = function (PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            }
            else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
var Observable_2 = Observable;


var Observable_1 = {
	Observable: Observable_2
};

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var toString = Object.prototype.toString;
function isNodeStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = (function (_super) {
    __extends$3(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node.js
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * `fromEvent` accepts as a first argument event target, which is an object with methods
     * for registering event handler functions. As a second argument it takes string that indicates
     * type of event we want to listen for. `fromEvent` supports selected types of event targets,
     * which are described in detail below. If your event target does not match any of the ones listed,
     * you should use {@link fromEventPattern}, which can be used on arbitrary APIs.
     * When it comes to APIs supported by `fromEvent`, their methods for adding and removing event
     * handler functions have different names, but they all accept a string describing event type
     * and function itself, which will be called whenever said event happens.
     *
     * Every time resulting Observable is subscribed, event handler function will be registered
     * to event target on given event type. When that event fires, value
     * passed as a first argument to registered function will be emitted by output Observable.
     * When Observable is unsubscribed, function will be unregistered from event target.
     *
     * Note that if event target calls registered function with more than one argument, second
     * and following arguments will not appear in resulting stream. In order to get access to them,
     * you can pass to `fromEvent` optional project function, which will be called with all arguments
     * passed to event handler. Output Observable will then emit value returned by project function,
     * instead of the usual value.
     *
     * Remember that event targets listed below are checked via duck typing. It means that
     * no matter what kind of object you have and no matter what environment you work in,
     * you can safely use `fromEvent` on that object if it exposes described methods (provided
     * of course they behave as was described above). So for example if Node.js library exposes
     * event target which has the same method names as DOM EventTarget, `fromEvent` is still
     * a good choice.
     *
     * If the API you use is more callback then event handler oriented (subscribed
     * callback function fires only once and thus there is no need to manually
     * unregister it), you should use {@link bindCallback} or {@link bindNodeCallback}
     * instead.
     *
     * `fromEvent` supports following types of event targets:
     *
     * **DOM EventTarget**
     *
     * This is an object with `addEventListener` and `removeEventListener` methods.
     *
     * In the browser, `addEventListener` accepts - apart from event type string and event
     * handler function arguments - optional third parameter, which is either an object or boolean,
     * both used for additional configuration how and when passed function will be called. When
     * `fromEvent` is used with event target of that type, you can provide this values
     * as third parameter as well.
     *
     * **Node.js EventEmitter**
     *
     * An object with `addListener` and `removeListener` methods.
     *
     * **JQuery-style event target**
     *
     * An object with `on` and `off` methods
     *
     * **DOM NodeList**
     *
     * List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.
     *
     * Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes
     * it contains and install event handler function in every of them. When returned Observable
     * is unsubscribed, function will be removed from all Nodes.
     *
     * **DOM HtmlCollection**
     *
     * Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is
     * installed and removed in each of elements.
     *
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * // Results in:
     * // MouseEvent object logged to console every time a click
     * // occurs on the document.
     *
     *
     * @example <caption>Use addEventListener with capture option</caption>
     * var clicksInDocument = Rx.Observable.fromEvent(document, 'click', true); // note optional configuration parameter
     *                                                                          // which will be passed to addEventListener
     * var clicksInDiv = Rx.Observable.fromEvent(someDivInDocument, 'click');
     *
     * clicksInDocument.subscribe(() => console.log('document'));
     * clicksInDiv.subscribe(() => console.log('div'));
     *
     * // By default events bubble UP in DOM tree, so normally
     * // when we would click on div in document
     * // "div" would be logged first and then "document".
     * // Since we specified optional `capture` option, document
     * // will catch event when it goes DOWN DOM tree, so console
     * // will log "document" and then "div".
     *
     * @see {@link bindCallback}
     * @see {@link bindNodeCallback}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOM EventTarget, Node.js
     * EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (isFunction_1.isFunction(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
            if (result === errorObject.errorObject) {
                subscriber.error(errorObject.errorObject.e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(Observable_1.Observable));
var FromEventObservable_2 = FromEventObservable;


var FromEventObservable_1 = {
	FromEventObservable: FromEventObservable_2
};

var fromEvent_1 = FromEventObservable_1.FromEventObservable.create;


var fromEvent$2 = {
	fromEvent: fromEvent_1
};

Observable_1.Observable.fromEvent = fromEvent$2.fromEvent;

var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends$5(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
var Action_2 = Action;


var Action_1 = {
	Action: Action_2
};

var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends$4(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
var AsyncAction_2 = AsyncAction;


var AsyncAction_1 = {
	AsyncAction: AsyncAction_2
};

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
var Scheduler_2 = Scheduler;


var Scheduler_1 = {
	Scheduler: Scheduler_2
};

var __extends$6 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsyncScheduler = (function (_super) {
    __extends$6(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
var AsyncScheduler_2 = AsyncScheduler;


var AsyncScheduler_1 = {
	AsyncScheduler: AsyncScheduler_2
};

/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
var async_1 = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);


var async = {
	async: async_1
};

var __extends$7 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime$3(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async.async; }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var debounceTime_2$2 = debounceTime$3;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends$7(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


var debounceTime_1 = {
	debounceTime: debounceTime_2$2
};

/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime$2(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async.async; }
    return debounceTime_1.debounceTime(dueTime, scheduler)(this);
}
var debounceTime_3 = debounceTime$2;


var debounceTime_2 = {
	debounceTime: debounceTime_3
};

Observable_1.Observable.prototype.debounceTime = debounceTime_2.debounceTime;

var SIDE_MARGIN = 20;
var previewWrapperRules = css({
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
var PreviewWrapper = /** @class */ (function (_super) {
    __extends(PreviewWrapper, _super);
    function PreviewWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { scale: 1 };
        _this.setWindowResizeSubscription = function () {
            var windowResize$ = Observable_2.fromEvent(window, 'resize');
            _this.windowResizeSub = windowResize$.debounceTime(250).subscribe({
                next: function (evt) {
                    _this.updatePreviewScale();
                }
            });
        };
        _this.updatePreviewScale = function () {
            var width = _this.props.previewOptions.width;
            var containerToPreviewRatio = (_this.previewContainer.offsetWidth - SIDE_MARGIN * 2) / width;
            if (containerToPreviewRatio < 1) {
                _this.setState({ scale: containerToPreviewRatio });
            }
            else if (containerToPreviewRatio !== 1) {
                _this.setState({ scale: 1 });
            }
        };
        return _this;
    }
    PreviewWrapper.prototype.componentDidMount = function () {
        this.previewContainer = document.getElementById(this.props.for + "PreviewContainer");
        this.setWindowResizeSubscription();
        this.updatePreviewScale();
    };
    PreviewWrapper.prototype.componentWillUnmount = function () {
        this.windowResizeSub && this.windowResizeSub.unsubscribe();
    };
    PreviewWrapper.prototype.render = function () {
        var previewOptions = this.props.previewOptions;
        return (createElement("div", __assign({ id: this.props.for + "PreviewContainer", "data-website-preview": this.props.for }, previewWrapperRules),
            createElement(VelocityComponent, { animation: {
                    translateZ: 0.001,
                    scale: this.state.scale
                }, easing: "ease" }, this.props.children)));
    };
    return PreviewWrapper;
}(Component));

var getDefaultEventFields = function (ownerName, fianceeName, eventDate, location, message) {
    return {
        ownerName: ownerName || 'Romeo',
        fianceeName: fianceeName || 'Juliet',
        eventDate: eventDate || new Date().toString(),
        location: location || 'San Francisco, CA',
        message: message ||
            'We are so excited to celebrate with you. Help us capture our wedding with Joy.'
    };
};

var previewRules = function (height, width) {
    return css({
        borderRadius: '5px',
        boxShadow: '0 15px 60px 0 rgba(0,0,0,.1), 0 32px 75px 0 rgba(0,0,0,.1)',
        fontFamily: 'proxima-nova,Helvetica Neue,sans-serif',
        fontSize: '15px',
        fontWeight: '300',
        height: height,
        pointerEvents: 'none',
        userSelect: 'none',
        width: width,
        minWidth: width
    });
};
var contentRules$2 = css({
    display: 'flex',
    position: 'relative'
});
var TwoPanePreview$$1 = /** @class */ (function (_super) {
    __extends(TwoPanePreview$$1, _super);
    function TwoPanePreview$$1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getFontOverrides = function (activeFont) {
            if (activeFont) {
                var fontFamily = activeFont.fontFamily, fontWeight = activeFont.fontWeight, h1 = activeFont.h1, h2 = activeFont.h2, h3 = activeFont.h3, letterSpacing = activeFont.letterSpacing, lineHeight = activeFont.lineHeight, textTransform = activeFont.textTransform;
                var baseRules = { fontFamily: fontFamily, fontWeight: fontWeight, lineHeight: lineHeight, textTransform: textTransform };
                return {
                    leftPaneHeaderRules: css(baseRules, {
                        fontSize: h1 + "px",
                        letterSpacing: letterSpacing + "px"
                    }),
                    rightPaneHeaderRules: css(baseRules, {
                        fontSize: h2 + "px"
                    }),
                    fontStylesheetLink: (createElement("link", { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=" + activeFont.fontFamily
                            .split(' ')
                            .join('+') + ":" + activeFont.fontWeight }))
                };
            }
            return null;
        };
        _this.getStyleOverrides = function () {
            var _a = _this.props, theme = _a.theme, activeFont = _a.activeFont;
            return (createElement("div", { "data-style-overrides": "" }, theme &&
                theme !== 'blank' && (createElement(Fragments, null,
                createElement("link", { rel: "stylesheet", type: "text/css", href: "http://withjoy.com/assets/public/joyStyles3/" + theme + "/base.css" }),
                createElement("link", { rel: "stylesheet", type: "text/css", href: "http://withjoy.com/assets/public/joyStyles3/" + theme + "/color.css" })))));
        };
        _this.getVisibleFields = function () {
            var _a = _this.props, ownerName = _a.ownerName, fianceeName = _a.fianceeName, eventDate = _a.eventDate, location = _a.location, message = _a.message;
            return getDefaultEventFields(ownerName, fianceeName, eventDate, location, message);
        };
        return _this;
    }
    TwoPanePreview$$1.prototype.render = function () {
        var _a = this.props, activeFont = _a.activeFont, baseBackgroundColor = _a.baseBackgroundColor, baseTextColor = _a.baseTextColor, coverPhoto = _a.coverPhoto, previewOptions = _a.previewOptions, theme = _a.theme, title = _a.title;
        var _b = this.getVisibleFields(), ownerName = _b.ownerName, fianceeName = _b.fianceeName, eventDate = _b.eventDate, location = _b.location, message = _b.message;
        var _c = this.getFontOverrides(activeFont), leftPaneHeaderRules = _c.leftPaneHeaderRules, rightPaneHeaderRules = _c.rightPaneHeaderRules, fontStylesheetLink = _c.fontStylesheetLink;
        return (createElement(Fragments, null,
            fontStylesheetLink,
            this.getStyleOverrides(),
            createElement(PreviewWrapper, { for: "twoPane", previewOptions: previewOptions },
                createElement("div", __assign({ className: "joy-website-preview" }, previewRules(previewOptions.height, previewOptions.width)),
                    createElement(WebPreviewTopBar, { title: title }),
                    createElement("div", __assign({}, contentRules$2),
                        createElement(TwoPanePreviewLeft, { coverPhoto: coverPhoto, fontOverrides: leftPaneHeaderRules, fianceeName: fianceeName, ownerName: ownerName, message: message }),
                        createElement(TwoPanePreviewRight, { activeFont: activeFont, backgroundColor: baseBackgroundColor, color: baseTextColor, eventDate: eventDate, fontOverrides: rightPaneHeaderRules, location: location }))))));
    };
    TwoPanePreview$$1.defaultProps = {
        activeFont: null,
        theme: null,
        previewOptions: {
            height: 500,
            width: 800
        }
    };
    return TwoPanePreview$$1;
}(Component));

var moment$1 = require('moment');
var previewRules$1 = function (height, width) {
    return css({
        boxShadow: '0 15.2px 38px 0 rgba(0, 0, 0, 0.24), 0 12px 12px 0 rgba(0, 0, 0, 0.18)',
        display: 'flex',
        flexDirection: 'column',
        height: height,
        minWidth: width,
        margin: '20px 0',
        position: 'relative',
        width: width
    });
};
var contentRules$4 = css({
    alignItems: 'center',
    border: '2px solid #e9e9e9',
    borderTop: 'none',
    borderBottom: 'none',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0 65px',
    padding: '50px 30px'
});
var tabSectionRules = css({
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
    margin: '30px 0 25px 0',
    padding: 0,
    width: '100%',
    ' > li': {
        background: '#e9e9e9',
        borderRadius: 20,
        height: 13,
        width: 40
    }
});
var coverPhotoRules = function (image) {
    return css({
        // background: `url(${image}) center / contain no-repeat`,
        height: 300,
        backgroundColor: '#e9e9e9',
        width: '100%'
    });
};
var bodySectionRules = css({
    fontSize: '.8em',
    margin: '25px 0',
    textAlign: 'center',
    width: '60%',
    ' > *': {
        margin: '15px 0'
    }
});
var logisticsContainerRules = css({
    transform: 'scale(.8)'
});
var locationRules$1 = css({
    fontSize: '25px',
    fontWeight: 300,
    lineHeight: '36px',
    margin: 0,
    marginBottom: 10
});
var dateRules$1 = css({
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '17px',
    margin: '0 0 10px'
});
var ctaButtonRules$1 = css({
    fontWeight: '400',
    lineHeight: '28px',
    border: '1.4px solid',
    borderRadius: '5px',
    marginTop: 30,
    minWidth: '80px',
    fontSize: '11px',
    padding: '0 20px',
    textAlign: 'center'
});
var getVisibleFields = function (weddingInfo) {
    return getDefaultEventFields(weddingInfo.ownerName, weddingInfo.fianceeName, weddingInfo.eventDate, weddingInfo.location, weddingInfo.message);
};
var SimpleLayoutPreview$$1 = function (_a) {
    var children = _a.children, activeFont = _a.activeFont, coverPhoto = _a.coverPhoto, previewOptions = _a.previewOptions, theme = _a.theme, weddingInfo = __rest(_a, ["children", "activeFont", "coverPhoto", "previewOptions", "theme"]);
    var _b = getVisibleFields(weddingInfo), ownerName = _b.ownerName, fianceeName = _b.fianceeName, eventDate = _b.eventDate, location = _b.location, message = _b.message;
    var eventDateMoment = moment$1(eventDate);
    return (createElement(PreviewWrapper, { for: "simpleLayout", previewOptions: previewOptions },
        createElement("div", __assign({}, previewRules$1(previewOptions.height, previewOptions.width)),
            createElement(WebPreviewTopBar, null),
            createElement("div", __assign({}, contentRules$4),
                createElement("div", null,
                    createElement(WeddingName$$1, { owner: ownerName, fiancee: fianceeName })),
                createElement("ul", __assign({ "data-section": "tabs" }, tabSectionRules),
                    createElement("li", null),
                    createElement("li", null),
                    createElement("li", null),
                    createElement("li", null),
                    createElement("li", null),
                    createElement("li", null),
                    createElement("li", null),
                    createElement("li", null)),
                createElement("div", __assign({}, coverPhotoRules(coverPhoto))),
                createElement("div", __assign({ "data-section": "body" }, bodySectionRules),
                    createElement("div", null, "TWIRLYBIT"),
                    createElement("div", { "data-section": "greeting" }, message),
                    createElement("div", __assign({ "data-section": "logistics" }, logisticsContainerRules),
                        createElement("h2", __assign({}, locationRules$1), location),
                        createElement("h4", __assign({}, dateRules$1), eventDateMoment.isValid() &&
                            eventDateMoment.format('dddd, MMMM D, YYYY')),
                        createElement(CountdownTimer, { eventDate: eventDate, fontSize: "12" }),
                        createElement("div", __assign({}, ctaButtonRules$1), "RSVP HERE")))))));
};
SimpleLayoutPreview$$1.defaultProps = {
    previewOptions: {
        width: 640,
        height: 876
    }
};

var moment$2 = require('moment');
var countdownRules = function (_a) {
    var color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, margin = _a.margin;
    return css({
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        margin: margin
    });
};
var CountdownTimer = /** @class */ (function (_super) {
    __extends(CountdownTimer, _super);
    function CountdownTimer(props) {
        var _this = _super.call(this, props) || this;
        _this.todayMoment = moment$2();
        _this.startCountdown = function () {
            if (_this.isEventMomentValid()) {
                _this.timeLapseInterval = window.setInterval(function () {
                    _this.todayMoment.add(1, 'seconds');
                    _this.updateDisplayText();
                }, 1000);
            }
        };
        _this.stopCountdown = function () {
            window.clearInterval(_this.timeLapseInterval);
        };
        _this.isEventMomentValid = function () {
            return _this.eventMoment && _this.eventMoment.isValid();
        };
        _this.isEventToday = function () {
            return _this.eventMoment && _this.eventMoment.isSame(_this.todayMoment, 'day');
        };
        _this.updateDisplayText = function () {
            _this.setState({
                displayText: _this.getTimeLapseText()
            });
        };
        _this.getDifference = function (differenceFormat, difference) {
            if (difference === 0 && differenceFormat !== 'Sec') {
                return null;
            }
            var formatPluralization = difference > 1 ? differenceFormat + "s" : differenceFormat;
            return difference + " " + formatPluralization;
        };
        _this.getDayDifference = function (timeLapse) {
            return _this.getDifference('Day', Math.floor(timeLapse / (1000 * 60 * 60 * 24)));
        };
        _this.getHourDifference = function (timeLapse) {
            return _this.getDifference('Hr', Math.floor((timeLapse / (1000 * 60 * 60)) % 24));
        };
        _this.getMinuteDifference = function (timeLapse) {
            return _this.getDifference('Min', Math.floor((timeLapse / 1000 / 60) % 60));
        };
        _this.getSecondDifference = function (timeLapse) {
            return _this.getDifference('Sec', Math.floor((timeLapse / 1000) % 60));
        };
        _this.getTimeLapseText = function () {
            if (_this.isEventToday() || !_this.isEventMomentValid()) {
                return 'Today';
            }
            var differenceInMilliseconds = _this.todayMoment.diff(_this.eventMoment);
            var differenceAbsoluteValue = Math.abs(differenceInMilliseconds);
            var timeLapse = [
                _this.getDayDifference,
                _this.getHourDifference,
                _this.getMinuteDifference,
                _this.getSecondDifference
            ]
                .map(function (func) { return func(differenceAbsoluteValue); })
                .join(' ');
            return timeLapse + " " + (differenceInMilliseconds > 0 ? 'ago' : '');
        };
        _this.eventMoment = moment$2(_this.props.eventDate);
        _this.state = {
            displayText: _this.getTimeLapseText()
        };
        return _this;
    }
    CountdownTimer.prototype.componentWillMount = function () {
        this.startCountdown();
    };
    CountdownTimer.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.eventDate !== nextProps.eventDate) {
            this.eventMoment = moment$2(nextProps.eventDate);
            if (this.isEventMomentValid()) {
                this.updateDisplayText();
            }
            else {
                this.stopCountdown();
            }
        }
    };
    CountdownTimer.prototype.componentWillUnmount = function () {
        this.stopCountdown();
    };
    CountdownTimer.prototype.render = function () {
        if (!this.props.eventDate || !this.eventMoment.isValid()) {
            return null;
        }
        return createElement("h4", __assign({}, countdownRules(this.props)), this.state.displayText);
    };
    CountdownTimer.defaultProps = {
        fontWeight: 400,
        fontSize: 15,
        margin: 0
    };
    return CountdownTimer;
}(Component));

var spinnerLoaderRules = function (_a) {
    var color = _a.color, height = _a.height, thickness = _a.thickness, width = _a.width;
    return css({
        border: thickness + " solid rgba(0, 0, 0, .1)",
        borderTopColor: color,
        borderRadius: '50%',
        height: height,
        width: width,
        transform: 'rotate(0deg)'
    });
};
var SpinnerLoader = /** @class */ (function (_super) {
    __extends(SpinnerLoader, _super);
    function SpinnerLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerLoader.prototype.render = function () {
        return (createElement(VelocityComponent, { animation: { rotateZ: '360deg' }, runOnMount: true, loop: true, duration: 1500 },
            createElement("div", __assign({}, spinnerLoaderRules(this.props)))));
    };
    SpinnerLoader.defaultProps = {
        height: 50,
        width: 50,
        color: 'black',
        thickness: '2px'
    };
    return SpinnerLoader;
}(Component));

// Components
// Styles
// Utils

export { InputLine, TopNav, Button, CommandBar, Modal, ModalLightBox, ModalPortal, PanelDashboard, PanelOverlay, PanelNavigator, PanelNavItem, Label, ActionHeader, TextBox, COLORS, TEXT, KEYCODES, createDebugger, debug, Fragments, isBrowser, isNil as isChildrenNil, weddingNameString, WeddingName$$1 as WeddingName, TwoPanePreview$$1 as TwoPanePreview, SimpleLayoutPreview$$1 as SimpleLayoutPreview, CountdownTimer, Colors, SpinnerLoader };
//# sourceMappingURL=joykit.esm.js.map
