/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Glide.js v3.0.1
 * (c) 2013-2018 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











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





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
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

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];

    return r[k], r;
  }, {});
}

/**
 * Deeply merges two objects.
 *
 * @param  {Object} target
 * @param  {Object} source
 * @return {Object}
 */
function merge(target, source) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key]) _extends(target, defineProperty({}, key, {}));
        merge(target[key], source[key]);
      } else {
        _extends(target, defineProperty({}, key, source[key]));
      }
    });
  }

  return _extends({}, target);
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide$2 = function () {
  /**   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._e = new EventsBus();

    this.disabled = false;

    this.selector = selector;
    this.settings = merge(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = _extends({}, this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

var Run = function (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            this._o = true;

            Glide.index = 0;

            Events.emit('run.end', move);
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            this._o = true;

            Glide.index = length;

            Events.emit('run.start', move);
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      this._m = {
        direction: value.substr(0, 1),
        steps: value.substr(1) ? value.substr(1) : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
};

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

var Gaps = function (Glide, Components, Events) {
  var Gaps = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.gap;
    },


    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps._v;
    },


    /**
     * Sets value of the gap.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      Gaps._v = toInt(value);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Remount component:
   * - on updating via API, to update gap value
   */
  Events.on('update', function () {
    Gaps.mount();
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
};

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  var n = node.parentNode.firstChild;
  var matched = [];

  for (; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n !== node) {
      matched.push(n);
    }
  }

  return matched;
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

var Html = function (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.from(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(root) {
      if (isString(root)) {
        root = document.querySelector(root);
      }

      if (exist(root)) {
        Html._r = root;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(tr) {
      if (exist(tr)) {
        Html._t = tr;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
};

var Peek = function (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
};

var Move = function (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
};

var Sizes = function (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = this.slideWidth + 'px';
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
};

var Build = function (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      slide.classList.add(classes.activeSlide);

      siblings(slide).forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
};

var Clones = function (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.pattern = this.map();
        this.items = this.collect();
      }
    },


    /**
     * Generate pattern of the cloning.
     *
     * @return {Void}
     */
    map: function map() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var perView = Glide.settings.perView;
      var length = Components.Html.slides.length;

      // Repeat creating pattern based on the ratio calculated
      // by number in `perView` per actual number of slides.
      for (var r = 0; r < Math.max(1, Math.floor(perView / length)); r++) {
        // Fill pattern with indexes of slides at the beginning of track.
        for (var i = 0; i <= length - 1; i++) {
          pattern.push('' + i);
        }

        // Fill pattern with indexes of slides from the end of track.
        for (var _i = length - 1; _i >= 0; _i--) {
          pattern.unshift('-' + _i);
        }
      }

      return pattern;
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var pattern = this.pattern;


      for (var i = 0; i < pattern.length; i++) {
        var clone = Components.Html.slides[Math.abs(pattern[i])].cloneNode(true);

        clone.classList.add(Glide.settings.classes.cloneSlide);

        items.push(clone);
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items,
          pattern = this.pattern;


      for (var i = 0; i < items.length; i++) {
        var item = items[i];

        item.style.width = Components.Sizes.slideWidth + 'px';

        // Append clone if pattern position is positive.
        // Prepend clone if pattern position is negative.
        if (pattern[i][0] === '-') {
          Components.Html.wrapper.insertBefore(item, Components.Html.slides[0]);
        } else {
          Components.Html.wrapper.appendChild(item);
        }
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        items[i].remove();
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
};

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], false);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], false);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

var Resize = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
};

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

var Direction = function (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.includes(value)) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
};

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
var Rtl = function (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
};

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
var Gap = function (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
};

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
var Grow = function (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
};

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
var Peeking = function (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
};

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
var Focusing = function (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
};

/**
 * Collection of transformers.
 *
 * @type {Array}
 */
var MUTATORS = [Gap, Grow, Peeking, Focusing,
// It's important that the Rtl component
// be last on the list, so it reflects
// all previous transformations.
Rtl];

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
var transformer = function (Glide, Components) {
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < MUTATORS.length; i++) {
        translate = MUTATORS[i](Glide, Components).modify(translate);
      }

      return translate;
    }
  };
};

var Translate = function (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = transformer(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
};

var Transition = function (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
};

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

var Swipe = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();

        var swipe = this.touches(event);

        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);

        this.bindSwipeMove();
        this.bindSwipeEnd();

        Events.emit('swipe.start');
      }
    },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);

        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < settings.touchAngle) {
          Components.Move.make(subExSx * parseFloat(settings.touchRatio));
        }

        if (swipeSin * 180 / Math.PI < settings.touchAngle) {
          event.stopPropagation();
          event.preventDefault();

          Components.Html.root.classList.add(settings.classes.dragging);

          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);
        var threshold = this.threshold(event);

        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

        this.enable();

        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
          // While swipe is positive and greater than threshold move backward.
          if (settings.perTouch) {
            steps = Math.min(steps, toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('<' + steps));
        } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
          // While swipe is negative and lower than negative threshold move forward.
          if (settings.perTouch) {
            steps = Math.max(steps, -toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('>' + steps));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(settings.classes.dragging);

        this.unbindSwipeMove();
        this.unbindSwipeEnd();

        Events.emit('swipe.end');
      }
    },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, this.start.bind(this));
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, this.start.bind(this));
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper);
      Binder.off(START_EVENTS[1], Components.Html.wrapper);
    },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(this.move.bind(this), Glide.settings.throttle));
    },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper);
    },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      Binder.on(END_EVENTS, Components.Html.wrapper, this.end.bind(this));
    },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.includes(event.type)) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.includes(event.type)) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;

      Components.Transition.disable();

      return this;
    }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });

  return Swipe;
};

var Images = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },


    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },


    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });

  return Images;
};

var Anchors = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');

      this.bind();
    },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.stopPropagation();

      if (prevented) {
        event.preventDefault();
      }
    },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].dataset.href = this.items[i].getAttribute('href');

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].dataset.href);

          delete this.items[i].dataset.href;
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
};

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

var Controls = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._i = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

      this.addBindings();
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      item.classList.add(settings.classes.activeNav);

      siblings(item).forEach(function (sibling) {
        sibling.classList.remove(settings.classes.activeNav);
      });
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      controls[Glide.index].classList.remove(Glide.settings.classes.activeNav);
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._i.length; i++) {
        this.bind(this._i[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._i.length; i++) {
        this.unbind(this._i[i].children);
      }
    },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on(['click', 'touchstart'], elements[i], this.click);
      }
    },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.dataset.glideDir));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._i;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });

  return Controls;
};

var Keyboard = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'));
      }
    }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
};

var Autoplay = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();
          }, this.time);
        }
      }
    },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        _this2.stop();
      });

      Binder.on('mouseout', Components.Html.root, function () {
        _this2.start();
      });
    },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
};

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn('Breakpoints option must be an object');
  }

  return {};
}

var Breakpoints = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings
   *
   * @type {Object}
   */
  var points = settings.breakpoints;

  /**
   * Sort breakpoints from smaller to larger. It is required in order
   * to proper matching currently active breakpoint settings.
   */
  points = sortBreakpoints(points);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  settings = _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throttle(function () {
    settings = _extends(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', function () {
    points = sortBreakpoints(points);

    defaults = _extends({}, settings);
  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Binder.off('resize', window);
  });

  return Breakpoints;
};

// Required components
// Optional components
var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide = function (_Core) {
  inherits(Glide, _Core);

  function Glide() {
    classCallCheck(this, Glide);
    return possibleConstructorReturn(this, (Glide.__proto__ || Object.getPrototypeOf(Glide)).apply(this, arguments));
  }

  createClass(Glide, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get(Glide.prototype.__proto__ || Object.getPrototypeOf(Glide.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide;
}(Glide$2);

/* harmony default export */ __webpack_exports__["default"] = (Glide);


/***/ }),

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map

/***/ }),

/***/ "./node_modules/browser-update/update.npm.full.js":
/*!********************************************************!*\
  !*** ./node_modules/browser-update/update.npm.full.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//(c)2017, MIT Style License <browser-update.org/LICENSE.txt>
//it is recommended to directly link to this file because we update the detection code


function $bu_getBrowser(ua_str) {
    var n,ua=ua_str||navigator.userAgent,donotnotify=false;
    var names={i:'Internet Explorer',e:"Edge",f:'Firefox',o:'Opera',o_a:'Opera',s:'Safari',c:"Chrome",a:"Android Browser", y:"Yandex Browser",v:"Vivaldi",uc:"UC Browser",samsung:"Samsung Internet",x:"Other"};
    function ignore(reason,pattern){if (new RegExp(pattern,"i").test(ua)) return reason;}
    var ig=ignore("bot","bot|spider|archiver|transcoder|crawl|checker|monitoring|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|microsoft|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Gecko Expeditor")||
//        ignore("discontinued browser","camino|flot|k-meleon|fennec|galeon|chromeframe|coolnovo") ||
        ignore("complicated device browser","SMART-TV|SmartTV") ||
        ignore("niche browser","Dorado|Whale|MIDP|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|QupZilla|Otter|Midori|qutebrowser") ||
        ignore("mobile without upgrade path or landing page","kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10") ||
        ignore("android(chrome) web view","; wv");
    var mobile=(/iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(ua));
    if (ig) 
        return {n:"x",v:0,t:"other browser",donotnotify:ig};    

    var pats=[
        ["CriOS.VV","c"],
        ["FxiOS.VV","f"],
        ["Trident.*rv:VV","i"],
        ["Trident.VV","io"],
        ["UCBrowser.VV","uc"],
        ["MSIE.VV","i"],
        ["Edge.VV","e"],
        ["Vivaldi.VV","v"],
        ["Android.*OPR.VV","o_a"],
        ["OPR.VV","o"],
        ["YaBrowser.VV","y"],
        ["SamsungBrowser.VV","samsung"],
        ["Chrome.VV","c"],
        ["Firefox.VV","f"],
        ["Version.VV.*Safari","s"],
        ["Safari.VV","so"],
        ["Opera.*Version.VV","o"],
        ["Opera.VV","o"]
    ];
    for (var i=0; i < pats.length; i++) {
        if (ua.match(new RegExp(pats[i][0].replace("VV","(\\d+\\.?\\d+)"),"i"))) {
            n=pats[i][1];
            break;
        }        
    }
    var semver=n==="v"||n==="y"||n==="uc";
    if (semver) {//zero pad semver for easy comparing
        var parts = (RegExp.$1).split('.');
        var v=(parts[0] + "." + ("00".substring(0, 2 - parts[1].length) + parts[1]));
    }
    else {
        var v=Math.round(parseFloat(RegExp.$1)*10)/10;
    }
    
    if (!n)
        return {n:"x",v:0,t:names[n],mobile:mobile};
    
    //do not notify old systems since there is no up-to-date browser available
    if (/windows.nt.5.0|windows.nt.4.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5|os x 10.6|os x 10.7/i.test(ua)) 
        donotnotify="oldOS";
    
    //iOS
    if (/iphone|ipod|ipad|ios/i.test(ua)) {
        ua.replace("_",".").match(new RegExp("OS.(\\d+\\.?\\d?)","i"));//
        n="iOS";
        v=parseFloat(RegExp.$1); 
        var h = Math.max(window.screen.height, window.screen.width);
        if (h<=480 || window.devicePixelRatio<2) //iphone <5 and old iPads  // (h>568 -->iphone 6+)
              return {n:"s",v:v,t:"iOS "+v,donotnotify:"iOS without upgrade path",mobile:mobile};
        return {n:"s",v:v,t:"iOS "+v,donotnotify:false,mobile:mobile};//identify as safari
    }
    //check for android stock browser
    if (ua.indexOf('Android')>-1 && n==="s") {
        var ver=parseInt((/WebKit\/([0-9]+)/i.exec(ua) || 0)[1],10) || 2000;
        if (ver <= 534)
            return {n:"a",v:ver,t:names["a"],mob:true,donotnotify:donotnotify,mobile:mobile};
        //else
        //    return {n:n,v:v,t:names[n]+" "+v,donotnotify:"mobile on android",mobile:mobile};
    }

    //do not notify firefox ESR
    if (n==="f" && Math.round(v)===52)
        donotnotify="ESR";

    if (n==="so") {
        v=4.0;
        n="s";
    }
    if (n==="i" && v===7 && window.XDomainRequest) {
        v=8;
    }
    if (n==="io") {
        n="i";
        if (v>6) v=11;
        else if (v>5) v=10;
        else if (v>4) v=9;
        else if (v>3.1) v=8;
        else if (v>3) v=7;
        else v=9;
    }
    return {n:n,v:v,t:names[n]+" "+v,donotnotify:donotnotify,mobile:mobile};
}

var $buo = function(op,test) {
var n = window.navigator,b,vsmin;
op = window._buorgres=op||{};
var ll = op.l||(n.languages ? n.languages[0] : null) || n.language || n.browserLanguage || n.userLanguage||document.documentElement.getAttribute("lang")||"en";
op.ll=ll=ll.replace("_","-").toLowerCase().substr(0,2);
op.apiver=op.api||op.c||-1;
op.jsv="2.3.3npm";
var vsakt = {e:15,i:15,f:59,o:52,o_a:45,s:11.1,c:66,y:18.2,v:1.14,uc:11.5,samsung:6.4};
var vsdefault = {e:-5,f:-4,o:-4,o_a:-4,s:-1.7,c:-4,a:534,y:-0.02,v:-0.02,uc:-0.03,samsung:-1};
var vsinsecure = {};//{i:10,e:12.10166,c:61,f:55,y:16.09,s:10.0};
if (op.apiver<4)
    vsmin={i:9,f:10,o:20,s:7};
else
    vsmin={i:8,f:5,o:12.5,s:6.2};
var vs =op.notify||op.vs||vsdefault;
var releases_per_month={'f':7/12,'c':8/12,'o':8/12,'i':1/12,'s':1/12,'v':1/12}
vs.e=vs.e||vs.i;
for (b in vsdefault) {
    if (!vs[b])
        vs[b]=vsdefault[b]
    if (vsakt[b]) {
        if (/m/.test(vs[b]))
            vs[b]=vsakt[b]+vs[b].replace('m','')*releases_per_month[b]
        if (vs[b]>=vsakt[b])
            vs[b]=vsakt[b]-0.2
        else if (vs[b]<0)
            vs[b]=vsakt[b]+vs[b]
    }
    if (vsmin[b] && vs[b]<vsmin[b])
        vs[b]=vsmin[b];    
    if ((op.insecure||op.unsecure) && vsinsecure[b] && vs[b]<vsinsecure[b])
        vs[b]=vsinsecure[b];      
}
vs.i=vs.i||vs.e;
op.vsf=vs;
if (op.reminder<0.1 || op.reminder===0)
    op.reminder=0;
else
    op.reminder=op.reminder||24;
op.reminderClosed=op.reminderClosed||(24*7);
op.onshow = op.onshow||function(o){};
op.onclick = op.onclick||function(o){};
op.onclose = op.onclose||function(o){};
op.pageurl = op.pageurl || location.hostname || "x";
op.newwindow=(op.newwindow!==false);

op.test=test||op.test||(location.hash==="#test-bu")||false;

if (Math.random()*1200<1 && !op.test) {
    var i = new Image();    i.src="//browser-update.org/count.php?what=brow&jsv="+op.jsv;
}

var bb=$bu_getBrowser();
if (!op.test) {
    if (!bb || !bb.n || bb.n==="x" || bb.donotnotify!==false || (document.cookie.indexOf("browserupdateorg=pause")>-1 && location.hash!=="#ignorecookie-bu"))
        return;
    if (bb.v>vs[bb.n] || (bb.mobile&&op.mobile===false) )    
        return;
}

op.setCookie=function(hours) {
    document.cookie = 'browserupdateorg=pause; expires='+(new Date(new Date().getTime()+3600000*hours)).toGMTString()+'; path=/';
};
if (op.reminder>0)
    op.setCookie(op.reminder);

if (op.nomessage) {
    op.onshow(op);
    return;
}

$buo_show();
};

module.exports = $buo;

"use strict";
var $buo_show = function() {
var op=window._buorgres;    
var ll=op.ll;
var bb=$bu_getBrowser();
var burl=op.burl || ("http"+(/MSIE/i.test(navigator.userAgent)?"":"s")+"://browser-update.org/");
if (!op.url) {
    op.url= burl+((op.l && (ll+"/"))||"")+"update-browser.html"+(op.test?"?force_outdated=true":"")+"#"+op.jsv+":"+op.pageurl;
}
/*
if (Math.random()*1000<1 && !op.test && !op.betatest) {
    var i = new Image();
    var txt=op["text_"+ll]||op.text||"";
    var extra=encodeURIComponent("frac="+frac+"&txt="+txt+"&apiver="+op.apiver);
    i.src="https://browser-update.org/count.php?what=noti&from="+bb.n+"&fromv="+bb.v + "&ref="+ escape(op.pageurl) + "&jsv="+op.jsv+"&tv="+op.style+"&extra="+extra;
}
*/
function busprintf() {
    var args=arguments;
    var data = args[ 0 ];
    for( var k=1; k<args.length; ++k ) {
        data = data.replace( /%s/, args[ k ] );
    }
    return data;
}


var t={};
t.en='<b class="buorg-mainmsg">Your web browser ({brow_name}) is out of date.</b> <span class="buorg-moremsg">Update your browser for more security, speed and the best experience on this site.</span> <span class="buorg-buttons"><a{up_but}>Update browser</a> <a{ignore_but}>Ignore</a></span>';

//t.af='';
t.ar='<b> متصفح الويب ({brow_name}) الخاص بك قديم.</b> قُم بتحديث متصفحك للحصول على مزيدٍ من الحماية والراحة وتجربة أفضل على هذا الموقع. <a{up_but}> تحديث المتصفح</a> <a{ignore_but}> تجاهل</a>';
t.bg='<b>Вашият браузър ({brow_name}) не е актуализиран.</b> Актуализирайте го за повече сигурност, удобство и най-добро изживяване на сайта. <a{up_but}>Актуализирайте браузъра</a> <a{ignore_but}>Игнорирайте</a>';
t.ca='El teu navegador (%s) està <b>desactualitzat.</b> Té <b>vulnerabilitats</b> conegudes i pot <b>no mostrar totes les característiques</b> d\'aquest i altres llocs web. <a%s>Aprèn a actualitzar el navegador</a>';
t.cs='<b>Váš webový prohlížeč ({brow_name}) je zastaralý .</b> Pro větší bezpečnost, pohodlí a optimální zobrazení této stránky si prosím svůj prohlížeč aktualizujte. <a{up_but}>Aktualizovat prohlížeč</a> <a{ignore_but}>Ignorovat</a>';
t.da='<b>Din netbrowser ({brow_name}) er forældet.</b> Opdater din browser for mere sikkerhed, komfort og den bedste oplevelse på denne side. <a{up_but}>Opdater browser</a> <a{ignore_but}>Ignorer</a>';
t.de='<b>Ihr Browser ({brow_name}) ist veraltet.</b> Aktualisieren Sie Ihren Browser für mehr Sicherheit, Komfort und die einwandfreie Nutzung dieser Webseite. <a{up_but}>Browser aktualisieren</a> <a{ignore_but}>Ignorieren</a>';
t.el='<b>Η έκδοση του προγράμματος περιήγησής σας ({brow_name}) είναι παλιά.</b> Ενημερώστε τον περιηγητή σας για περισσότερη ασφάλεια, άνεση και την βέλτιστη εμπειρία σε αυτή την ιστοσελίδα. <a{up_but}>Αναβάθμιση περιηγητή</a> <a{ignore_but}>Παράβλεψη</a>';
t.es='<b>Tu navegador web ({brow_name}) no está actualizado.</b> Actualiza tu navegador para tener más seguridad y comodidad y tener la mejor experiencia en este sitio. <a{up_but}>Actualizar navegador</a> <a{ignore_but}>Ignorar</a>';
//t.et='';
t.fa = 'مرورگر شما (%s) <b>از رده خارج شده</b> می باشد. این مرورگر دارای <b>مشکلات امنیتی شناخته شده</b> می باشد و <b>نمی تواند تمامی ویژگی های این</b> وب سایت و دیگر وب سایت ها را به خوبی نمایش دهد. <a%s>در خصوص گرفتن راهنمایی درخصوص نحوه ی به روز رسانی مرورگر خود اینجا کلیک کنید.</a>';
t.fi='<b>Selaimesi ({brow_name}) on vanhentunut.</b> Päivitä selaimesi parantaaksesi turvallisuutta, mukavuutta ja käyttökokemusta tällä sivustolla. <a{up_but}>Päivitä selain</a> <a{ignore_but}>Ohita</a>';
t.fr='<b>Votre navigateur web ({brow_name}) n\'est pas à jour.</b> Mettez votre navigateur à jour pour plus de sécurité, de confort et une expérience optimale sur ce site. <a{up_but}>Mettre le navigateur à jour</a> <a{ignore_but}>Ignorer</a>';
t.gl='Tá an líonléitheoir agat (%s) <b>as dáta.</b> Tá <b>laigeachtaí slándála</b> a bhfuil ar eolas ann agus b\'fhéidir <b>nach taispeánfaidh sé gach gné</b> den suíomh gréasáin seo ná cinn eile. <a%s>Foghlaim conas do líonléitheoir a nuashonrú</a>';
t.he='<b>הדפדפן שלך ({brow_name}) אינו מעודכן.</b> עדכן את הדפדפן שלך בשביל אבטחה טובה יותר, נוחיות והחוויה הטובה ביותר באתר הזה.<a{up_but}>עדכן דפדפן</a> <a{ignore_but}>התעלם</a>';
t.hi='यह वेबसाइट आपको याद दिलाना चाहती हैं: आपका ब्राउज़र (%s) <b> आउट ऑफ़ डेट </b> हैं। <a%s> और अधिक सुरक्षा, आराम और इस साइट पर सबसे अच्छा अनुभव करने लिए आपके ब्राउज़र को अपडेट करें</a>।';
//t.hr='';
t.hu='<b>Az ön ({brow_name}) böngészője elavult.</b> Frissítse a böngészőjét több biztonság, kényelem és a legjobb felhasználói élmény érdekében ezen az oldalon. <a{up_but}>Böngésző frissítése</a> <a{ignore_but}>Mellőzés</a>';
t.id='<b>Browser Anda ({brow_name}) sudah usang.</b> Perbarui browser Anda untuk pengalaman terbaik yang lebih aman dan nyaman di situs ini. <a{up_but}>Perbarui Browser</a> <a{ignore_but}>Abaikan</a>';
t.it='<b>Il suo browser web ({brow_name}) non è aggiornato.</b> Aggiorni il suo browser per ottenere maggiore sicurezza, comfort, e la migliore esperienza possibile su questo sito. <a{up_but}>Aggiorna il browser</a> <a{ignore_but}>Ignora</a>';
t.ja='<b>お使いのウェブブラウザ ({brow_name}) は古すぎます</b>。安全性と快適さを向上させ、このサイトで最高の体験が出来るよう、お使いのブラウザをアップデートしましょう。<a{up_but}>ブラウザをアップデートする</a> <a{ignore_but}>無視する</a>';
t.ko='<b>현재 당신의 웹브라우저 ({brow_name})은(는) 구 버전입니다.</b> 본 사이트에서 향상된 보안 및 편안함과 최상의 경험을 위해 브라우저를 업데이트해 주세요. <a{up_but}>브라우저 업데이트</a> <a{ignore_but}>무시하기</a>';
//t.lt='';
t.lv='Jūsu pārlūkprogramma (%s) ir <b>novecojusi.</b>  Tai ir zināmas <b>drošības problēmas</b>, un tā var attēlot šo un citas  tīmekļa lapas <b>nekorekti.</b> <a%s>Uzzini, kā atjaunot savu pārlūkprogrammu</a>';
t.ms='<b>Pelayar web ({brow_name}) anda sudah usang.</b> Kemas kini pelayar anda untuk memperoleh lebih keselamatan, keselesaan dan pengalaman terbaik di tapak ini. <a{up_but}>Kemas kini pelayar</a> <a{ignore_but}>Abaikan</a>';
t.nl='<b>Uw webbrowser ({brow_name}) is verouderd.</b> Update uw browser voor meer veiligheid, comfort en de beste ervaring op deze site. <a{up_but}>Update browser</a> <a{ignore_but}>Negeer</a>';
t.no='<b>Nettleseren din,({brow_name}), er utdatert.</b> Oppdater nettleseren din for mer sikkerhet, komfort og den beste opplevelsen på denne siden. <a{up_but}>Oppdater nettleser</a> <a{ignore_but}>Ignorer</a>';
t.pl='<b>Twoja przeglądarka ({brow_name}) jest nieaktualna.</b> Zaktualizuj swoją przeglądarkę, by zapewnić większe bezpieczeństwo i wygodę oraz lepsze wrażenia w tej witrynie. <a{up_but}>Zaktualizuj</a> <a{ignore_but}>Zignoruj</a>';
t.pt='<b>Seu navegador de internet ({brow_name}) está desatualizado.</b> Atualize seu navegador para obter mais segurança, conforto e a melhor experiência neste site. <a{up_but}>Atualizar navegador</a> <a{ignore_but}>Ignorar</a>';
t.ro='<b>Browserul dumneavoastră ({brow_name}) nu este actualizat.</b> Actualizați-vă browserul pentru securitate sporită, confort și cea mai bună experiență pe site. <a{up_but}>Actualizează browser</a><a{ignore_but}>Ignoră</a>';
t.ru='<b>Ваш веб-браузер ({brow_name}) устарел.</b> Обновите свой браузер, чтобы сделать пребывание на этом сайте более безопасным, комфортным и продуктивным. <a{up_but}>Обновить браузер</a> <a{ignore_but}>Игнорировать</a>';
t.sk='<b> Váš internetový prehliadač ({brow_name}) je zastaraný.</b> Aktualizujte váš prehliadač pre vyššiu bezpečnosť, komfort a najlepší zážitok na tejto stránke. <a{up_but}>Aktualizovať prehliadač</a><a{ignore_but}>Ignorovať</a>';
t.sl='Vaš brskalnik (%s) je <b>zastarel.</b> Ima več <b>varnostnih pomankljivosti</b> in morda <b>ne bo pravilno prikazal</b> te ali drugih strani. <a%s>Poglejte kako lahko posodobite svoj brskalnik</a>';
t.sq='<b>Shfletuesi juaj ({brow_name}) është i vjetruar.</b> Përditësojeni shfletuesin tuaj për më tepër siguri, rehati dhe për funksionimin më të mirë në këtë sajt. <a{up_but}>Përditësojeni shfletuesin</a> <a{ignore_but}>Shpërfille</a>';
//sr-cs"]='';
t.sr='Vaš pretraživač (%s) je <b>zastareo.</b> Ima poznate <b>sigurnosne probleme</b> i najverovatnije <b>neće prikazati sve funkcionalnisti</b> ovog i drugih sajtova. <a%s>Nauči više o nadogradnji svog pretraživača</a>';
t.sv='<b>Din webbläsare ({brow_name}) är föråldrad.</b> Uppdatera din webbläsare för bättre säkerhet, bekvämlighet och den bästa upplevelsen på den här sidan. <a{up_but}>Uppdatera webbläsare</a> <a{ignore_but}>Avstå</a>';
t.th='<b>เว็บเบราว์เซอร์ ({brow_name}) ของคุณตกรุ่นแล้ว </b> อัพเดทเบราว์เซอร์ของคุณเพื่อเพิ่มความปลอดภัย ความสะดวกและประสบการณ์การใช้งานที่ดีที่สุดในเว็บไซท์นี้ <a{up_but}>อัพเดทเบราว์เซอร์</a> <a{ignore_but}>ไม่สนใจ</a>';
t.tr='<b>({brow_name}) internet tarayıcınız güncel değil.</b> Bu sitede daha fazla güvenlik, konfor ve en iyi deneyim için tarayıcınızı güncelleyin. <a{up_but}>Tarayıcıyı güncelle</a> <a{ignore_but}>Yoksay</a>';
t.uk='<b>Ваш браузер ({brow_name}) є застарілим.</b> Оновіть його заради безпечнішого, зручнішого та приємнішого перегляду цього та інших сайтів. <a{up_but}>Оновити</a> <a{ignore_but}>Скасувати</a>';
t.vi='<b>Trình duyệt web của bạn ({brow_name}) đã cũ.</b> Hãy nâng cấp trình duyệt của bạn để được an toàn và thuận lợi hơn đồng thời có được trải nghiệm tốt nhất với trang này';
t.zh='<b>您的网页浏览器 ({brow_name}) 已过期。</b>更新您的浏览器，以提高安全性和舒适性，并获得访问本网站的最佳体验。<a{up_but}>更新浏览器</a> <a{ignore_but}>忽略</a>';
t["zh-tw"]='<b>您的網頁瀏覽器  ({brow_name}) 已經過時。</b> 請更新您的瀏覽器，以在此網站取得更安全、舒適的最佳瀏覽體驗。<a{up_but}>更新瀏覽器</a><a{ignore_but}>忽略</a>';
t=op["text_"+ll]||op.text||t[ll]||t.en;

var tar="";
if (op.newwindow)
    tar=' target="_blank" rel="noopener"';

var div = op.div = document.createElement("div");
div.id="buorg";
div.className="buorg";

var style='<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block; background: no-repeat 0px center url(https://browser-update.org/img/small/'+bb.n+'.png);}</style>';
var style2='<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center; cursor:pointer;        background-color: #fff8ea;    font: 18px Calibri,Helvetica,Arial,sans-serif;    box-shadow: 0 0 5px rgba(0,0,0,0.2);}'
    +'.buorg div { padding: 9px;  line-height: 1.7em; }'
    +'.buorg .buorg-buttons { display: block; text-align: center; }'
    +'.buorg div a { text-indent: 0; color: #fff; text-decoration: none; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}'
    +'#buorgig { background-color: #edbc68; position: relative;}'
    +'@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}'
    +'@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}'
    +'.buorg { animation: 1s ease-out 0s buorgfly}</style>';

if (t.indexOf("{brow_name}")===-1) {//legacy style
    t=busprintf(t,bb.t,' id="buorgul" href="'+op.url+'"'+tar);

    style += '<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; font: 13px Arial,sans-serif;color:#000;}'
    +'.buorg div { padding:5px 36px 5px 40px; }'
    +'.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}'
    +'#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}'
    +'#buorga{display:block;}'
    +'@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>';
    div.innerHTML= '<div>'+t+'<div id="buorgclose"><a id="buorga">&times;</a></div></div>'+style;
    op.addmargin=true;
}
else {
    if (op.style === "bottom") {
        style2 += '<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>';
    }
    else if (op.style === "corner") {
        style2 += '<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg div b {display:block;} .buorg-buttons { display: block; } .buorg div a {margin: 4px 2px;} .buorg-icon {display: none;}</style>';
    }
    else {
        op.addmargin=true;
    }
    t = t.replace("{brow_name}", bb.t).replace("{up_but}", ' id="buorgul" href="' + op.url + '"' + tar).replace("{ignore_but}", ' id="buorgig" href="'+burl+"block-ignore-browser-update-warning.html"+'" target="_blank"');
    div.innerHTML = '<div><span class="buorg-icon"> </span>' + t + '</div>' + style+style2;
}

op.text=t;
if (op.container) {
    op.container.appendChild(div);
    op.addmargin=false;
}
else
    document.body.insertBefore(div,document.body.firstChild);

div.onclick=function(){
    if (op.newwindow)
        window.open(op.url,"_blank");
    else
        window.location.href=op.url;
    op.setCookie(op.reminderClosed);
    op.onclick(op);
    return false;
};
try {
document.getElementById("buorgul").onclick = function(e) {
    e = e || window.event;
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
    op.div.style.display = "none";
    hm.style.marginTop = op.bodymt;    
    op.onclick(op);    
    return true;
};
}
catch(e) {}

if (op.addmargin) {
    var hm=document.getElementsByTagName("html")[0]||document.body;
    op.bodymt = hm.style.marginTop;
    hm.style.marginTop = (div.clientHeight)+"px";
}
(document.getElementById("buorga")||document.getElementById("buorgig")).onclick = function(e) {
    e = e || window.event;
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
    op.onclose(op);
    if (op.addmargin)
        hm.style.marginTop = op.bodymt;      
    op.setCookie(op.reminderClosed);    
    if(!op.no_permanent_hide && ll==="en" && op.reminderClosed==24*7) {
        op.div.innerHTML='<div><span class="buorg-moremsg">You will be reminded in a week.</span> <span class="buorg-buttons"><a id="buorgpermanent" href="'+burl+"block-ignore-browser-update-warning.html"+'" target="_blank" onclick="">Never show again</a></span></div>' + style+style2
            +'<style>.buorg {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>';
        div.onclick=null;
        document.getElementById("buorgpermanent").onclick = function(e) {        
            op.setCookie(24*365);
            op.div.style.display = "none";
        }
        op.div.style.opacity=0;
        op.div.style.visibility="hidden";
        return false;
    }
    op.div.style.display = "none";
    return false;
}

if (op.noclose) {
    var el=(document.getElementById("buorga")||document.getElementById("buorgig"));
    el.parentNode.removeChild(el);
}
op.onshow(op);

};




/***/ }),

/***/ "./node_modules/jquery.facedetection/dist/jquery.facedetection.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/jquery.facedetection/dist/jquery.facedetection.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function(n){function p(n,p){if(n.length>1){for(var z={},y=0;y<p.length;y++)z[p[y]]=n[y];return z}return 1==n.length?n[0]:{}}var z={count:16,width:24,height:24,stage_classifier:[{count:4,threshold:-4.57753,feature:[{size:4,px:[3,5,8,11],py:[2,2,6,3],pz:[2,1,1,0],nx:[8,4,0,0],ny:[4,4,0,0],nz:[1,1,-1,-1]},{size:3,px:[3,6,7],py:[7,13,0],pz:[1,0,-1],nx:[2,3,4],ny:[5,4,4],nz:[2,1,1]},{size:5,px:[5,3,10,13,11],py:[1,0,3,2,2],pz:[1,2,0,0,0],nx:[0,11,0,11,11],ny:[0,2,3,1,1],nz:[1,1,0,1,-1]},{size:5,px:[6,12,12,9,12],py:[4,13,12,7,11],pz:[1,0,0,1,0],nx:[8,0,8,2,11],ny:[4,0,8,5,1],nz:[1,-1,-1,-1,-1]}],alpha:[-2.879683,2.879683,-1.569341,1.569341,-1.286131,1.286131,-1.157626,1.157626]},{count:4,threshold:-4.339908,feature:[{size:5,px:[13,12,3,11,17],py:[3,3,1,4,13],pz:[0,0,2,0,0],nx:[4,3,8,15,15],ny:[4,5,4,8,8],nz:[1,2,1,0,-1]},{size:5,px:[6,7,6,3,3],py:[13,13,4,2,7],pz:[0,0,1,2,1],nx:[4,8,3,0,15],ny:[4,4,4,3,8],nz:[1,1,-1,-1,-1]},{size:3,px:[2,2,11],py:[3,2,5],pz:[2,2,0],nx:[3,8,3],ny:[4,4,4],nz:[1,-1,-1]},{size:5,px:[15,13,9,11,7],py:[2,1,2,1,0],pz:[0,0,0,0,1],nx:[23,11,23,22,23],ny:[1,0,2,0,0],nz:[0,1,0,0,0]}],alpha:[-2.466029,2.466029,-1.83951,1.83951,-1.060559,1.060559,-1.094927,1.094927]},{count:7,threshold:-5.052474,feature:[{size:5,px:[17,13,3,11,10],py:[13,2,1,4,3],pz:[0,0,2,0,0],nx:[4,8,8,3,7],ny:[2,8,4,5,4],nz:[2,0,1,2,1]},{size:5,px:[6,7,3,6,6],py:[4,12,2,13,14],pz:[1,0,2,0,0],nx:[8,3,4,4,3],ny:[4,4,2,0,2],nz:[1,1,-1,-1,-1]},{size:5,px:[7,4,5,3,3],py:[2,1,3,1,1],pz:[0,1,0,1,-1],nx:[1,0,1,1,0],ny:[1,3,2,0,4],nz:[0,0,0,0,0]},{size:5,px:[11,11,11,3,2],py:[11,13,10,7,2],pz:[0,0,0,1,2],nx:[4,1,8,2,0],ny:[4,1,12,0,4],nz:[1,-1,-1,-1,-1]},{size:3,px:[9,13,1],py:[7,19,4],pz:[1,-1,-1],nx:[4,7,4],ny:[5,8,2],nz:[2,1,2]},{size:5,px:[12,8,16,4,4],py:[12,1,2,0,0],pz:[0,1,0,2,-1],nx:[11,22,11,23,23],ny:[2,0,1,1,5],nz:[1,0,1,0,0]},{size:3,px:[11,17,17],py:[6,11,12],pz:[0,0,0],nx:[15,1,11],ny:[9,1,1],nz:[0,-1,-1]}],alpha:[-2.15689,2.15689,-1.718246,1.718246,-.9651329,.9651329,-.994809,.994809,-.8802466,.8802466,-.8486741,.8486741,-.8141777,.8141777]},{count:13,threshold:-5.7744,feature:[{size:5,px:[6,10,3,12,14],py:[5,3,1,2,2],pz:[1,0,2,0,0],nx:[3,4,14,8,4],ny:[5,4,8,4,2],nz:[2,1,0,1,2]},{size:5,px:[10,6,11,5,12],py:[4,13,4,2,4],pz:[0,0,0,1,0],nx:[1,4,8,1,1],ny:[2,4,4,4,3],nz:[0,1,1,0,0]},{size:3,px:[18,6,12],py:[12,4,8],pz:[0,1,0],nx:[7,4,8],ny:[4,2,4],nz:[1,-1,-1]},{size:5,px:[7,5,6,3,17],py:[13,12,3,8,13],pz:[0,0,1,1,0],nx:[3,3,0,1,8],ny:[4,5,5,10,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[16,7,16,7,7],py:[1,1,2,0,0],pz:[0,1,0,1,-1],nx:[23,23,23,11,5],ny:[2,14,1,2,1],nz:[0,0,0,1,2]},{size:3,px:[9,18,16],py:[7,14,2],pz:[1,0,-1],nx:[8,4,9],ny:[10,2,4],nz:[1,2,1]},{size:4,px:[3,16,1,22],py:[7,4,5,11],pz:[1,-1,-1,-1],nx:[3,9,4,2],ny:[4,9,7,5],nz:[1,0,1,2]},{size:5,px:[4,7,8,8,9],py:[0,2,2,1,1],pz:[1,0,0,0,0],nx:[0,0,1,0,0],ny:[15,16,19,0,14],nz:[0,0,0,1,0]},{size:5,px:[4,4,7,8,12],py:[2,5,6,7,10],pz:[2,2,1,1,0],nx:[8,5,10,0,0],ny:[4,2,5,3,14],nz:[1,-1,-1,-1,-1]},{size:2,px:[11,0],py:[13,4],pz:[0,-1],nx:[3,14],ny:[4,16],nz:[1,0]},{size:5,px:[17,8,18,4,4],py:[3,1,3,0,0],pz:[0,1,0,2,-1],nx:[21,22,5,11,22],ny:[0,1,0,1,2],nz:[0,0,2,1,0]},{size:4,px:[7,8,2,11],py:[13,12,2,7],pz:[0,0,2,0],nx:[4,0,23,3],ny:[4,1,1,11],nz:[1,-1,-1,-1]},{size:5,px:[4,18,8,9,15],py:[4,16,7,7,23],pz:[2,0,1,1,0],nx:[0,1,1,1,1],ny:[10,21,23,22,22],nz:[1,0,0,0,-1]}],alpha:[-1.956565,1.956565,-1.262438,1.262438,-1.056941,1.056941,-.9712509,.9712509,-.8261028,.8261028,-.8456506,.8456506,-.6652113,.6652113,-.6026287,.6026287,-.6915425,.6915425,-.5539286,.5539286,-.5515072,.5515072,-.6685884,.6685884,-.465607,.465607]},{count:20,threshold:-5.606853,feature:[{size:5,px:[17,11,6,14,9],py:[13,4,4,3,3],pz:[0,0,1,0,0],nx:[14,4,8,7,8],ny:[8,4,4,4,8],nz:[0,1,1,1,0]},{size:5,px:[3,9,10,11,11],py:[7,2,2,3,3],pz:[1,0,0,0,-1],nx:[3,8,4,2,5],ny:[4,4,10,2,8],nz:[1,1,1,2,1]},{size:5,px:[12,12,12,5,12],py:[12,9,10,12,11],pz:[0,0,0,0,0],nx:[0,0,0,0,0],ny:[2,1,3,0,0],nz:[0,0,0,0,-1]},{size:5,px:[9,18,9,9,12],py:[7,14,19,5,11],pz:[1,-1,-1,-1,-1],nx:[23,4,23,23,8],ny:[13,5,14,16,4],nz:[0,2,0,0,1]},{size:5,px:[12,12,12,6,1],py:[13,11,12,6,5],pz:[0,0,0,-1,-1],nx:[4,6,8,4,9],ny:[2,8,4,4,4],nz:[2,1,1,1,1]},{size:4,px:[12,11,11,6],py:[5,5,6,13],pz:[0,0,0,0],nx:[8,3,2,8],ny:[4,4,17,2],nz:[1,1,-1,-1]},{size:5,px:[3,14,12,15,13],py:[0,2,2,2,2],pz:[2,0,0,0,0],nx:[22,23,22,23,7],ny:[0,3,1,2,4],nz:[0,0,0,0,1]},{size:5,px:[16,15,18,19,9],py:[12,11,12,12,9],pz:[0,0,0,0,1],nx:[8,2,22,23,21],ny:[4,1,1,2,20],nz:[1,-1,-1,-1,-1]},{size:3,px:[4,7,7],py:[0,2,2],pz:[1,0,-1],nx:[1,2,2],ny:[2,0,2],nz:[1,0,0]},{size:3,px:[4,11,11],py:[6,9,8],pz:[1,0,0],nx:[9,2,8],ny:[9,4,5],nz:[0,-1,-1]},{size:4,px:[2,7,6,6],py:[4,23,21,22],pz:[2,0,0,0],nx:[9,3,8,17],ny:[21,2,5,1],nz:[0,-1,-1,-1]},{size:2,px:[2,8],py:[4,12],pz:[2,0],nx:[3,0],ny:[4,4],nz:[1,-1]},{size:5,px:[4,5,1,8,4],py:[15,12,3,23,12],pz:[0,0,2,0,0],nx:[0,0,0,0,0],ny:[23,10,22,21,11],nz:[0,1,0,0,-1]},{size:2,px:[21,5],py:[13,4],pz:[0,2],nx:[23,4],ny:[23,5],nz:[0,-1]},{size:2,px:[15,17],py:[2,3],pz:[0,0],nx:[19,20],ny:[2,1],nz:[0,0]},{size:5,px:[12,1,8,17,4],py:[14,2,13,6,12],pz:[0,-1,-1,-1,-1],nx:[8,13,15,15,7],ny:[10,9,15,14,8],nz:[1,0,0,0,1]},{size:2,px:[8,5],py:[7,4],pz:[1,-1],nx:[4,13],ny:[2,21],nz:[2,0]},{size:2,px:[3,4],py:[7,0],pz:[1,-1],nx:[4,2],ny:[7,5],nz:[1,2]},{size:4,px:[4,14,3,11],py:[3,23,2,5],pz:[2,0,2,0],nx:[7,8,2,16],ny:[8,0,1,15],nz:[0,-1,-1,-1]},{size:2,px:[9,8],py:[0,0],pz:[0,0],nx:[2,2],ny:[3,5],nz:[2,2]}],alpha:[-1.95797,1.95797,-1.225984,1.225984,-.8310246,.8310246,-.8315741,.8315741,-.7973616,.7973616,-.7661959,.7661959,-.6042118,.6042118,-.6506833,.6506833,-.4808219,.4808219,-.6079504,.6079504,-.5163994,.5163994,-.5268142,.5268142,-.4935685,.4935685,-.4427544,.4427544,-.4053949,.4053949,-.4701274,.4701274,-.4387648,.4387648,-.4305499,.4305499,-.4042607,.4042607,-.4372088,.4372088]},{count:22,threshold:-5.679317,feature:[{size:5,px:[11,3,17,14,13],py:[4,0,13,2,3],pz:[0,2,0,0,0],nx:[7,4,14,23,11],ny:[8,4,8,4,0],nz:[1,1,0,0,1]},{size:5,px:[7,12,6,12,12],py:[12,8,3,10,9],pz:[0,0,1,0,0],nx:[4,9,8,15,15],ny:[4,8,4,8,8],nz:[1,0,1,0,-1]},{size:3,px:[4,2,10],py:[1,4,1],pz:[1,2,0],nx:[2,3,8],ny:[5,4,4],nz:[2,1,-1]},{size:5,px:[3,17,6,6,16],py:[2,12,4,14,12],pz:[2,0,1,0,0],nx:[8,3,7,5,15],ny:[4,4,4,4,8],nz:[1,1,-1,-1,-1]},{size:5,px:[5,6,7,4,8],py:[3,3,3,1,3],pz:[0,0,0,1,0],nx:[0,0,0,0,1],ny:[5,4,3,2,0],nz:[0,0,0,0,0]},{size:3,px:[18,9,0],py:[14,7,0],pz:[0,1,-1],nx:[8,14,8],ny:[10,9,4],nz:[1,0,1]},{size:2,px:[9,5],py:[18,13],pz:[0,0],nx:[10,3],ny:[16,4],nz:[0,-1]},{size:5,px:[11,11,11,11,6],py:[10,12,11,13,6],pz:[0,0,0,0,-1],nx:[5,21,22,22,22],ny:[4,22,17,19,18],nz:[2,0,0,0,0]},{size:4,px:[8,9,15,4],py:[7,7,23,4],pz:[1,1,0,2],nx:[8,5,0,3],ny:[4,18,4,9],nz:[1,-1,-1,-1]},{size:5,px:[11,10,12,11,11],py:[4,4,4,5,5],pz:[0,0,0,0,-1],nx:[4,6,8,2,8],ny:[4,9,9,2,4],nz:[1,1,0,2,1]},{size:5,px:[2,2,3,3,4],py:[10,9,14,13,15],pz:[1,1,0,0,0],nx:[0,0,0,0,0],ny:[5,9,10,19,18],nz:[2,1,1,0,-1]},{size:2,px:[11,11],py:[13,12],pz:[0,0],nx:[9,2],ny:[15,2],nz:[0,-1]},{size:5,px:[2,4,3,3,4],py:[5,11,6,9,12],pz:[1,0,1,0,0],nx:[6,2,11,11,0],ny:[9,1,5,20,18],nz:[0,-1,-1,-1,-1]},{size:5,px:[18,9,17,19,16],py:[2,0,2,2,1],pz:[0,1,0,0,0],nx:[22,23,11,23,23],ny:[0,2,0,1,1],nz:[0,0,1,0,-1]},{size:5,px:[5,5,6,7,6],py:[17,16,15,23,22],pz:[0,0,0,0,0],nx:[7,6,2,5,23],ny:[8,1,2,3,1],nz:[0,-1,-1,-1,-1]},{size:5,px:[12,12,11,10,6],py:[14,13,18,4,22],pz:[0,-1,-1,-1,-1],nx:[3,2,4,1,2],ny:[19,4,23,13,16],nz:[0,0,0,0,0]},{size:4,px:[11,16,11,17],py:[7,11,8,12],pz:[0,0,0,0],nx:[7,14,10,4],ny:[4,7,10,4],nz:[1,0,-1,-1]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[4,2],ny:[10,2],nz:[1,-1]},{size:2,px:[3,9],py:[0,1],pz:[1,0],nx:[4,5],ny:[1,0],nz:[0,0]},{size:2,px:[14,16],py:[3,3],pz:[0,0],nx:[9,14],ny:[4,21],nz:[1,0]},{size:2,px:[9,1],py:[7,1],pz:[1,-1],nx:[8,9],ny:[7,4],nz:[1,1]},{size:2,px:[1,0],py:[8,3],pz:[0,2],nx:[20,0],ny:[3,3],nz:[0,-1]}],alpha:[-1.581077,1.581077,-1.389689,1.389689,-.8733094,.8733094,-.8525177,.8525177,-.7416304,.7416304,-.6609002,.6609002,-.7119043,.7119043,-.6204438,.6204438,-.6638519,.6638519,-.5518876,.5518876,-.4898991,.4898991,-.5508243,.5508243,-.4635525,.4635525,-.5163159,.5163159,-.4495338,.4495338,-.4515036,.4515036,-.5130473,.5130473,-.4694233,.4694233,-.4022514,.4022514,-.405569,.405569,-.4151817,.4151817,-.3352302,.3352302]},{count:32,threshold:-5.363782,feature:[{size:5,px:[12,9,6,8,14],py:[4,2,13,3,3],pz:[0,0,0,0,0],nx:[0,15,0,9,5],ny:[2,7,3,8,8],nz:[0,0,0,0,1]},{size:5,px:[13,16,3,6,11],py:[3,13,1,4,3],pz:[0,0,2,1,0],nx:[7,4,8,14,14],ny:[4,4,4,8,8],nz:[1,1,1,0,-1]},{size:5,px:[10,19,18,19,19],py:[6,13,13,12,12],pz:[1,0,0,0,-1],nx:[23,5,23,23,11],ny:[12,2,13,14,8],nz:[0,2,0,0,1]},{size:5,px:[12,12,12,12,6],py:[11,13,12,10,6],pz:[0,0,0,0,1],nx:[6,8,3,9,9],ny:[8,4,4,4,4],nz:[1,1,1,1,-1]},{size:5,px:[5,3,5,8,11],py:[12,8,3,11,8],pz:[0,1,1,0,0],nx:[4,0,1,1,9],ny:[4,3,4,3,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[13,3,12,14,12],py:[1,0,1,2,3],pz:[0,2,0,0,0],nx:[7,9,8,4,4],ny:[5,4,10,2,2],nz:[1,1,1,2,-1]},{size:5,px:[18,16,12,15,8],py:[12,23,7,11,8],pz:[0,0,0,0,1],nx:[8,6,10,12,4],ny:[4,4,10,6,3],nz:[1,-1,-1,-1,-1]},{size:5,px:[4,4,5,2,2],py:[13,14,14,7,7],pz:[0,0,0,1,-1],nx:[0,0,0,0,1],ny:[15,4,14,13,17],nz:[0,2,0,0,0]},{size:2,px:[9,9],py:[7,7],pz:[1,-1],nx:[4,7],ny:[5,8],nz:[2,1]},{size:5,px:[3,4,6,5,4],py:[2,2,14,6,9],pz:[1,1,0,1,1],nx:[23,23,23,23,11],ny:[0,3,2,1,0],nz:[0,0,0,0,-1]},{size:3,px:[10,2,3],py:[23,4,7],pz:[0,2,1],nx:[10,21,23],ny:[21,9,2],nz:[0,-1,-1]},{size:5,px:[20,21,21,10,12],py:[13,12,8,8,12],pz:[0,0,0,1,0],nx:[8,16,3,3,11],ny:[4,8,4,3,0],nz:[1,-1,-1,-1,-1]},{size:2,px:[2,21],py:[4,12],pz:[2,-1],nx:[2,3],ny:[5,4],nz:[2,1]},{size:5,px:[8,5,6,8,7],py:[0,2,1,1,1],pz:[0,0,0,0,0],nx:[3,2,2,2,2],ny:[0,0,1,2,2],nz:[0,0,0,0,-1]},{size:5,px:[11,2,2,11,10],py:[10,12,8,11,12],pz:[0,0,0,0,0],nx:[3,5,2,4,2],ny:[4,1,4,2,2],nz:[1,-1,-1,-1,-1]},{size:4,px:[15,16,8,17],py:[2,1,0,2],pz:[0,0,1,0],nx:[19,20,0,8],ny:[1,2,11,10],nz:[0,0,-1,-1]},{size:2,px:[17,16],py:[12,12],pz:[0,0],nx:[8,9],ny:[5,1],nz:[1,-1]},{size:4,px:[11,11,0,0],py:[12,13,0,0],pz:[0,0,-1,-1],nx:[10,10,9,10],ny:[10,12,13,11],nz:[0,0,0,0]},{size:3,px:[11,10,8],py:[5,2,6],pz:[0,-1,-1],nx:[8,12,4],ny:[4,17,4],nz:[1,0,1]},{size:5,px:[10,21,10,20,20],py:[11,13,7,13,14],pz:[1,0,1,0,0],nx:[23,23,11,23,17],ny:[23,22,11,21,21],nz:[0,0,1,-1,-1]},{size:2,px:[4,7],py:[3,9],pz:[2,1],nx:[9,23],ny:[4,22],nz:[1,-1]},{size:4,px:[3,2,2,5],py:[11,5,4,20],pz:[1,2,2,0],nx:[4,23,11,23],ny:[10,22,11,21],nz:[1,-1,-1,-1]},{size:2,px:[7,5],py:[13,4],pz:[0,-1],nx:[4,4],ny:[8,6],nz:[1,1]},{size:2,px:[2,5],py:[4,9],pz:[2,1],nx:[10,10],ny:[16,16],nz:[0,-1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,0],ny:[4,0],nz:[1,-1]},{size:5,px:[7,3,12,13,6],py:[11,5,23,23,7],pz:[1,2,0,0,1],nx:[1,0,0,0,0],ny:[23,20,19,21,21],nz:[0,0,0,0,-1]},{size:5,px:[0,0,0,0,0],py:[10,9,6,13,13],pz:[0,0,1,0,-1],nx:[8,8,4,4,9],ny:[4,11,5,4,5],nz:[1,1,2,2,1]},{size:2,px:[9,18],py:[8,15],pz:[1,0],nx:[15,4],ny:[15,2],nz:[0,-1]},{size:2,px:[5,13],py:[6,17],pz:[1,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:5,px:[19,10,20,18,18],py:[2,0,2,2,2],pz:[0,1,0,0,-1],nx:[22,23,22,11,23],ny:[1,3,0,1,2],nz:[0,0,0,1,0]},{size:5,px:[4,2,2,2,6],py:[7,2,5,4,14],pz:[1,2,2,2,0],nx:[16,7,9,15,23],ny:[8,0,3,11,2],nz:[0,-1,-1,-1,-1]},{size:5,px:[10,10,9,9,5],py:[2,0,0,1,0],pz:[0,0,0,0,1],nx:[3,2,3,2,2],ny:[11,3,9,5,5],nz:[1,2,1,2,-1]}],alpha:[-1.490426,1.490426,-1.21428,1.21428,-.8124863,.8124863,-.7307594,.7307594,-.7377259,.7377259,-.5982859,.5982859,-.6451736,.6451736,-.6117417,.6117417,-.5438949,.5438949,-.4563701,.4563701,-.4975362,.4975362,-.4707373,.4707373,-.5013868,.5013868,-.5139018,.5139018,-.4728007,.4728007,-.4839748,.4839748,-.4852528,.4852528,-.5768956,.5768956,-.3635091,.3635091,-.419009,.419009,-.3854715,.3854715,-.3409591,.3409591,-.3440222,.3440222,-.3375895,.3375895,-.3367032,.3367032,-.3708106,.3708106,-.3260956,.3260956,-.3657681,.3657681,-.35188,.35188,-.3845758,.3845758,-.2832236,.2832236,-.2865156,.2865156]},{count:45,threshold:-5.479836,feature:[{size:5,px:[15,6,17,6,9],py:[2,13,13,4,3],pz:[0,0,0,1,0],nx:[3,9,4,8,14],ny:[5,8,4,4,8],nz:[2,0,1,1,0]},{size:5,px:[9,8,11,6,7],py:[1,2,3,14,2],pz:[0,0,0,0,0],nx:[0,0,4,0,0],ny:[4,2,4,1,0],nz:[0,0,1,0,0]},{size:5,px:[2,2,11,11,11],py:[2,4,10,8,6],pz:[2,2,0,0,0],nx:[8,4,3,23,23],ny:[4,4,4,16,18],nz:[1,1,-1,-1,-1]},{size:5,px:[18,16,17,15,9],py:[2,2,2,2,1],pz:[0,0,0,0,1],nx:[22,22,21,23,23],ny:[1,2,0,5,4],nz:[0,0,0,0,0]},{size:5,px:[15,3,17,18,6],py:[11,2,11,11,4],pz:[0,2,0,0,1],nx:[3,8,1,4,23],ny:[4,4,3,9,4],nz:[1,1,-1,-1,-1]},{size:2,px:[4,5],py:[4,0],pz:[2,-1],nx:[7,4],ny:[8,5],nz:[1,2]},{size:2,px:[11,5],py:[12,5],pz:[0,-1],nx:[4,9],ny:[10,15],nz:[1,0]},{size:4,px:[2,2,7,1],py:[7,7,3,4],pz:[1,-1,-1,-1],nx:[0,2,1,2],ny:[6,20,14,16],nz:[1,0,0,0]},{size:5,px:[14,12,12,13,9],py:[23,5,6,5,7],pz:[0,0,0,0,1],nx:[8,18,2,8,14],ny:[4,9,0,12,7],nz:[1,-1,-1,-1,-1]},{size:5,px:[3,10,13,11,9],py:[0,3,2,3,2],pz:[2,0,0,0,0],nx:[3,11,22,22,22],ny:[2,6,15,2,0],nz:[2,1,0,0,0]},{size:5,px:[8,7,5,8,5],py:[23,12,12,12,13],pz:[0,0,0,0,0],nx:[3,18,3,1,22],ny:[4,4,4,2,0],nz:[1,-1,-1,-1,-1]},{size:5,px:[22,22,22,21,22],py:[9,11,10,14,12],pz:[0,0,0,0,0],nx:[23,23,11,1,22],ny:[23,23,11,2,0],nz:[0,-1,-1,-1,-1]},{size:2,px:[9,3],py:[18,7],pz:[0,1],nx:[10,8],ny:[16,19],nz:[0,-1]},{size:5,px:[10,12,11,6,6],py:[4,4,4,2,2],pz:[0,0,0,1,-1],nx:[3,8,7,8,4],ny:[5,4,4,10,4],nz:[2,1,1,0,1]},{size:4,px:[12,12,4,15],py:[13,12,0,11],pz:[0,0,-1,-1],nx:[13,14,13,14],ny:[9,12,10,13],nz:[0,0,0,0]},{size:2,px:[4,4],py:[3,3],pz:[2,-1],nx:[9,4],ny:[4,2],nz:[1,2]},{size:3,px:[9,7,0],py:[7,5,5],pz:[1,-1,-1],nx:[4,15,9],ny:[5,14,9],nz:[2,0,1]},{size:5,px:[15,20,7,10,16],py:[17,12,6,4,23],pz:[0,0,1,1,0],nx:[1,2,2,1,1],ny:[3,0,1,2,2],nz:[0,0,0,0,-1]},{size:5,px:[2,1,1,11,2],py:[16,4,5,12,14],pz:[0,1,1,0,0],nx:[4,6,3,19,1],ny:[4,2,5,19,2],nz:[1,-1,-1,-1,-1]},{size:3,px:[15,14,14],py:[1,1,0],pz:[0,0,0],nx:[4,8,4],ny:[3,4,2],nz:[2,1,2]},{size:5,px:[2,3,1,2,7],py:[8,12,4,9,13],pz:[1,0,2,1,0],nx:[1,1,0,0,0],ny:[21,20,18,17,9],nz:[0,0,0,0,1]},{size:5,px:[17,15,17,16,16],py:[12,12,22,23,12],pz:[0,0,0,0,0],nx:[7,3,16,1,0],ny:[8,6,8,3,9],nz:[0,-1,-1,-1,-1]},{size:5,px:[9,17,18,18,18],py:[6,12,12,13,13],pz:[1,0,0,0,-1],nx:[23,23,20,11,11],ny:[12,13,23,7,8],nz:[0,0,0,1,1]},{size:2,px:[2,4],py:[4,7],pz:[2,1],nx:[4,4],ny:[10,5],nz:[1,-1]},{size:4,px:[4,22,19,12],py:[5,8,14,9],pz:[2,0,0,0],nx:[8,4,4,2],ny:[4,4,1,2],nz:[1,-1,-1,-1]},{size:2,px:[3,21],py:[7,14],pz:[1,-1],nx:[4,2],ny:[7,2],nz:[1,2]},{size:3,px:[7,4,17],py:[3,1,6],pz:[0,1,-1],nx:[3,4,5],ny:[0,2,1],nz:[1,0,0]},{size:4,px:[15,7,14,0],py:[3,1,3,7],pz:[0,1,0,-1],nx:[8,18,17,18],ny:[0,1,1,2],nz:[1,0,0,0]},{size:5,px:[12,12,12,12,6],py:[10,11,12,13,6],pz:[0,0,0,0,-1],nx:[8,15,15,4,8],ny:[10,10,9,2,4],nz:[0,0,0,2,1]},{size:2,px:[17,12],py:[13,11],pz:[0,-1],nx:[9,8],ny:[4,10],nz:[1,1]},{size:5,px:[0,0,0,0,0],py:[10,9,12,11,4],pz:[0,0,0,0,1],nx:[8,9,8,9,9],ny:[10,4,4,5,5],nz:[1,1,1,1,-1]},{size:3,px:[7,0,1],py:[1,9,8],pz:[0,-1,-1],nx:[4,3,3],ny:[7,15,16],nz:[0,0,0]},{size:2,px:[4,7],py:[15,23],pz:[0,0],nx:[9,18],ny:[21,3],nz:[0,-1]},{size:5,px:[17,4,19,18,8],py:[12,3,12,17,6],pz:[0,2,0,0,1],nx:[23,23,11,22,16],ny:[0,1,0,21,-1],nz:[0,0,-1,-1,-1]},{size:2,px:[7,4],py:[13,5],pz:[0,-1],nx:[4,2],ny:[4,2],nz:[1,2]},{size:5,px:[21,20,10,10,21],py:[13,14,10,7,11],pz:[0,0,1,1,0],nx:[4,4,4,5,5],ny:[18,17,19,20,20],nz:[0,0,0,0,-1]},{size:2,px:[2,3],py:[11,13],pz:[1,0],nx:[12,4],ny:[17,17],nz:[0,-1]},{size:2,px:[11,5],py:[13,1],pz:[0,-1],nx:[1,2],ny:[1,4],nz:[2,1]},{size:2,px:[15,7],py:[17,7],pz:[0,1],nx:[14,4],ny:[15,3],nz:[0,-1]},{size:2,px:[3,11],py:[3,8],pz:[2,0],nx:[13,13],ny:[9,8],nz:[0,0]},{size:2,px:[8,3],py:[11,2],pz:[0,-1],nx:[8,4],ny:[9,5],nz:[0,1]},{size:3,px:[12,6,9],py:[9,10,11],pz:[0,-1,-1],nx:[2,1,5],ny:[2,1,6],nz:[2,2,1]},{size:4,px:[4,5,5,1],py:[11,11,11,3],pz:[1,0,1,2],nx:[0,0,5,4],ny:[23,22,0,0],nz:[0,0,-1,-1]},{size:5,px:[15,7,17,15,16],py:[1,0,2,2,0],pz:[0,1,0,0,0],nx:[7,4,7,4,8],ny:[5,2,4,3,4],nz:[1,2,1,2,-1]},{size:2,px:[6,12],py:[11,23],pz:[1,0],nx:[12,4],ny:[21,2],nz:[0,-1]}],alpha:[-1.5358,1.5358,-.8580514,.8580514,-.862521,.862521,-.71775,.71775,-.6832222,.6832222,-.5736298,.5736298,-.5028217,.5028217,-.5091788,.5091788,-.579194,.579194,-.4924942,.4924942,-.5489055,.5489055,-.452819,.452819,-.4748324,.4748324,-.4150403,.4150403,-.4820464,.4820464,-.4840212,.4840212,-.3941872,.3941872,-.3663507,.3663507,-.3814835,.3814835,-.3936426,.3936426,-.304997,.304997,-.3604256,.3604256,-.3974041,.3974041,-.4203486,.4203486,-.3174435,.3174435,-.3426336,.3426336,-.449215,.449215,-.3538784,.3538784,-.3679703,.3679703,-.3985452,.3985452,-.2884028,.2884028,-.2797264,.2797264,-.2664214,.2664214,-.2484857,.2484857,-.2581492,.2581492,-.2943778,.2943778,-.2315507,.2315507,-.2979337,.2979337,-.2976173,.2976173,-.2847965,.2847965,-.2814763,.2814763,-.2489068,.2489068,-.2632427,.2632427,-.3308292,.3308292,-.279017,.279017]},{count:61,threshold:-5.239104,feature:[{size:5,px:[8,8,11,15,6],py:[3,6,5,3,4],pz:[0,1,0,0,1],nx:[3,9,14,8,4],ny:[4,8,8,7,2],nz:[1,0,0,0,2]},{size:5,px:[11,12,10,6,9],py:[3,3,2,13,2],pz:[0,0,0,0,0],nx:[0,0,5,2,2],ny:[13,1,8,5,2],nz:[0,1,1,2,2]},{size:5,px:[11,5,11,11,4],py:[9,13,10,11,6],pz:[0,0,0,0,1],nx:[4,15,9,3,3],ny:[5,8,9,4,4],nz:[1,0,0,1,-1]},{size:5,px:[15,16,8,17,17],py:[1,2,0,2,2],pz:[0,0,1,0,-1],nx:[23,23,23,23,23],ny:[4,0,2,3,1],nz:[0,0,0,0,0]},{size:4,px:[9,18,17,18],py:[7,13,13,14],pz:[1,0,0,0],nx:[9,7,4,8],ny:[4,10,2,4],nz:[1,1,2,1]},{size:5,px:[12,11,12,12,6],py:[6,5,14,5,3],pz:[0,0,0,0,1],nx:[13,8,14,7,7],ny:[16,4,7,4,4],nz:[0,1,0,1,-1]},{size:5,px:[12,6,3,7,12],py:[7,12,7,11,8],pz:[0,0,1,0,0],nx:[16,4,4,4,7],ny:[8,4,4,4,4],nz:[0,1,-1,-1,-1]},{size:5,px:[6,4,5,3,3],py:[2,3,2,0,0],pz:[0,0,0,1,-1],nx:[1,0,1,0,0],ny:[0,3,1,1,2],nz:[0,0,0,1,0]},{size:2,px:[15,9],py:[11,6],pz:[0,1],nx:[14,5],ny:[9,11],nz:[0,-1]},{size:5,px:[10,19,19,10,20],py:[7,20,14,6,12],pz:[1,0,0,1,0],nx:[23,22,11,23,23],ny:[21,23,9,20,20],nz:[0,0,1,0,-1]},{size:5,px:[1,1,5,1,1],py:[8,6,6,9,4],pz:[0,1,1,0,2],nx:[3,3,3,2,5],ny:[4,4,2,5,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[13,12,3,11,11],py:[2,2,0,1,2],pz:[0,0,2,0,0],nx:[3,6,8,4,3],ny:[2,9,4,4,5],nz:[2,1,1,1,-1]},{size:3,px:[12,12,6],py:[11,12,9],pz:[0,0,-1],nx:[2,1,9],ny:[6,1,14],nz:[0,2,0]},{size:5,px:[6,3,17,16,16],py:[4,2,14,23,13],pz:[1,2,0,0,0],nx:[8,10,21,5,1],ny:[4,10,11,0,0],nz:[1,-1,-1,-1,-1]},{size:5,px:[5,6,1,3,3],py:[15,14,4,7,7],pz:[0,0,2,1,-1],nx:[1,0,0,1,1],ny:[5,8,7,18,17],nz:[2,1,1,0,0]},{size:4,px:[6,12,5,3],py:[6,12,2,7],pz:[1,-1,-1,-1],nx:[14,13,13,7],ny:[12,10,9,8],nz:[0,0,0,1]},{size:2,px:[3,6],py:[7,15],pz:[1,0],nx:[3,3],ny:[4,2],nz:[1,-1]},{size:4,px:[11,10,12,2],py:[18,18,18,3],pz:[0,0,0,2],nx:[11,17,4,16],ny:[16,4,4,21],nz:[0,-1,-1,-1]},{size:5,px:[9,8,8,5,2],py:[4,4,4,2,3],pz:[0,0,-1,-1,-1],nx:[2,2,4,4,2],ny:[1,2,10,5,4],nz:[2,2,1,1,2]},{size:4,px:[8,18,14,18],py:[7,16,23,15],pz:[1,0,0,0],nx:[14,3,1,0],ny:[21,1,9,3],nz:[0,-1,-1,-1]},{size:2,px:[12,3],py:[9,5],pz:[0,2],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[9,9],py:[1,1],pz:[1,-1],nx:[19,20],ny:[1,2],nz:[0,0]},{size:3,px:[10,10,10],py:[6,6,8],pz:[1,-1,-1],nx:[22,21,22],ny:[13,18,12],nz:[0,0,0]},{size:2,px:[2,2],py:[4,1],pz:[2,-1],nx:[2,4],ny:[5,4],nz:[2,1]},{size:5,px:[21,21,21,21,21],py:[19,17,18,15,16],pz:[0,0,0,0,0],nx:[11,21,6,1,21],ny:[17,1,10,0,2],nz:[0,-1,-1,-1,-1]},{size:5,px:[7,3,4,4,4],py:[23,13,14,16,13],pz:[0,0,0,0,0],nx:[21,22,22,22,22],ny:[23,21,20,19,19],nz:[0,0,0,0,-1]},{size:2,px:[11,8],py:[6,6],pz:[0,1],nx:[8,4],ny:[4,2],nz:[1,-1]},{size:5,px:[23,23,11,23,23],py:[8,12,6,11,10],pz:[0,0,1,0,0],nx:[4,4,3,8,8],ny:[3,8,4,4,4],nz:[1,1,1,1,-1]},{size:5,px:[8,9,4,7,10],py:[2,1,0,2,1],pz:[0,0,1,0,0],nx:[5,5,6,4,4],ny:[1,0,0,2,1],nz:[0,0,0,0,-1]},{size:2,px:[12,2],py:[13,6],pz:[0,-1],nx:[15,9],ny:[15,4],nz:[0,1]},{size:2,px:[2,4],py:[4,9],pz:[2,1],nx:[3,13],ny:[4,1],nz:[1,-1]},{size:3,px:[3,6,2],py:[10,22,4],pz:[1,0,2],nx:[4,2,1],ny:[10,4,3],nz:[1,-1,-1]},{size:2,px:[1,0],py:[9,7],pz:[0,1],nx:[0,0],ny:[23,22],nz:[0,0]},{size:2,px:[8,7],py:[0,1],pz:[0,0],nx:[4,4],ny:[8,8],nz:[1,-1]},{size:5,px:[7,4,4,6,3],py:[8,4,5,5,3],pz:[1,2,2,1,2],nx:[1,0,2,0,0],ny:[1,0,0,2,4],nz:[0,2,0,1,-1]},{size:3,px:[10,4,4],py:[6,1,5],pz:[1,-1,-1],nx:[5,23,22],ny:[4,13,7],nz:[2,0,0]},{size:2,px:[2,2],py:[6,5],pz:[1,1],nx:[6,0],ny:[9,2],nz:[0,-1]},{size:5,px:[0,1,1,0,0],py:[5,18,19,16,6],pz:[2,0,0,0,1],nx:[5,9,4,8,8],ny:[8,7,3,7,7],nz:[1,0,1,0,-1]},{size:2,px:[13,12],py:[23,23],pz:[0,0],nx:[7,6],ny:[8,10],nz:[0,-1]},{size:2,px:[14,19],py:[12,8],pz:[0,0],nx:[18,5],ny:[8,11],nz:[0,-1]},{size:5,px:[2,8,6,4,4],py:[3,23,14,6,9],pz:[2,0,0,1,1],nx:[0,0,0,0,1],ny:[21,20,5,19,23],nz:[0,0,2,0,0]},{size:2,px:[11,22],py:[4,14],pz:[0,-1],nx:[3,8],ny:[1,4],nz:[2,1]},{size:5,px:[1,1,0,1,1],py:[6,8,3,12,7],pz:[1,1,2,0,1],nx:[21,21,19,10,10],ny:[14,16,23,9,9],nz:[0,0,0,1,-1]},{size:2,px:[10,3],py:[23,2],pz:[0,2],nx:[10,3],ny:[21,5],nz:[0,-1]},{size:2,px:[9,9],py:[7,0],pz:[1,-1],nx:[9,9],ny:[11,10],nz:[1,1]},{size:5,px:[23,11,23,23,23],py:[18,10,19,20,16],pz:[0,1,0,0,0],nx:[3,3,2,3,2],ny:[15,16,10,17,9],nz:[0,0,1,0,-1]},{size:2,px:[9,14],py:[7,18],pz:[1,0],nx:[7,10],ny:[8,8],nz:[1,-1]},{size:2,px:[12,5],py:[6,4],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[4,5],py:[13,4],pz:[0,-1],nx:[4,4],ny:[17,19],nz:[0,0]},{size:3,px:[2,3,3],py:[11,17,19],pz:[1,0,0],nx:[7,7,4],ny:[8,8,5],nz:[1,-1,-1]},{size:2,px:[6,6],py:[6,5],pz:[1,-1],nx:[2,9],ny:[4,12],nz:[1,0]},{size:5,px:[8,8,9,2,2],py:[18,13,12,3,3],pz:[0,0,0,2,-1],nx:[23,11,23,11,11],ny:[13,6,14,7,8],nz:[0,1,0,1,1]},{size:2,px:[9,11],py:[6,13],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[8,10],py:[0,6],pz:[1,1],nx:[9,4],ny:[6,7],nz:[1,-1]},{size:3,px:[3,10,9],py:[8,6,0],pz:[1,-1,-1],nx:[2,2,2],ny:[15,16,9],nz:[0,0,1]},{size:3,px:[14,15,0],py:[2,2,5],pz:[0,0,-1],nx:[17,17,18],ny:[0,1,2],nz:[0,0,0]},{size:2,px:[11,5],py:[14,1],pz:[0,-1],nx:[10,9],ny:[12,14],nz:[0,0]},{size:2,px:[8,8],py:[7,8],pz:[1,1],nx:[8,4],ny:[4,4],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[19,18,10,5,20],pz:[0,0,1,2,0],nx:[4,8,2,4,4],ny:[4,15,5,10,10],nz:[1,0,2,1,-1]},{size:2,px:[7,0],py:[13,18],pz:[0,-1],nx:[4,3],ny:[4,4],nz:[1,1]},{size:5,px:[23,22,22,11,22],py:[16,13,7,6,14],pz:[0,0,0,1,0],nx:[13,7,15,14,14],ny:[6,3,7,6,6],nz:[0,1,0,0,-1]}],alpha:[-1.428861,1.428861,-.8591837,.8591837,-.7734305,.7734305,-.653446,.653446,-.6262547,.6262547,-.5231782,.5231782,-.4984303,.4984303,-.4913187,.4913187,-.4852198,.4852198,-.4906681,.4906681,-.4126248,.4126248,-.4590814,.4590814,-.4653825,.4653825,-.41796,.41796,-.4357392,.4357392,-.4087982,.4087982,-.4594812,.4594812,-.4858794,.4858794,-.371358,.371358,-.3894534,.3894534,-.3127168,.3127168,-.4012654,.4012654,-.3370552,.3370552,-.3534712,.3534712,-.384345,.384345,-.2688805,.2688805,-.3500203,.3500203,-.282712,.282712,-.3742119,.3742119,-.3219074,.3219074,-.2544953,.2544953,-.3355513,.3355513,-.267267,.267267,-.2932047,.2932047,-.2404618,.2404618,-.2354372,.2354372,-.2657955,.2657955,-.2293701,.2293701,-.2708918,.2708918,-.2340181,.2340181,-.2464815,.2464815,-.2944239,.2944239,-.240796,.240796,-.3029642,.3029642,-.2684602,.2684602,-.2495078,.2495078,-.2539708,.2539708,-.2989293,.2989293,-.2391309,.2391309,-.2531372,.2531372,-.250039,.250039,-.2295077,.2295077,-.2526125,.2526125,-.2337182,.2337182,-.1984756,.1984756,-.3089996,.3089996,-.2589053,.2589053,-.296249,.296249,-.245866,.245866,-.2515206,.2515206,-.2637299,.2637299]},{count:80,threshold:-5.185898,feature:[{size:5,px:[12,17,13,10,15],py:[9,13,3,3,2],pz:[0,0,0,0,0],nx:[8,14,6,9,4],ny:[10,9,8,8,2],nz:[1,0,1,0,2]},{size:5,px:[3,11,8,10,9],py:[7,4,3,3,3],pz:[1,0,0,0,0],nx:[2,1,5,0,0],ny:[2,15,8,4,13],nz:[2,0,1,0,0]},{size:5,px:[11,11,11,4,17],py:[7,9,8,6,11],pz:[0,0,0,1,0],nx:[8,8,8,3,0],ny:[4,8,8,8,13],nz:[1,0,-1,-1,-1]},{size:5,px:[14,15,7,16,16],py:[3,3,1,3,3],pz:[0,0,1,0,-1],nx:[23,22,23,22,22],ny:[6,2,14,3,4],nz:[0,0,0,0,0]},{size:4,px:[6,4,7,15],py:[4,2,6,17],pz:[1,2,1,0],nx:[3,8,3,14],ny:[4,4,10,22],nz:[1,1,-1,-1]},{size:3,px:[3,5,22],py:[7,7,5],pz:[1,-1,-1],nx:[2,2,4],ny:[5,2,7],nz:[2,2,1]},{size:5,px:[7,6,5,6,3],py:[0,1,2,2,0],pz:[0,0,0,0,1],nx:[0,1,1,0,1],ny:[0,2,1,2,0],nz:[2,0,0,1,0]},{size:5,px:[11,11,11,11,5],py:[11,10,13,12,6],pz:[0,0,0,0,-1],nx:[15,14,5,2,8],ny:[9,8,10,2,10],nz:[0,0,1,2,0]},{size:5,px:[8,5,6,8,7],py:[12,12,12,23,12],pz:[0,0,0,0,0],nx:[3,17,5,2,8],ny:[4,0,10,2,10],nz:[1,-1,-1,-1,-1]},{size:5,px:[10,10,10,19,20],py:[8,10,9,15,13],pz:[1,1,1,0,0],nx:[23,11,5,23,23],ny:[20,10,5,19,19],nz:[0,1,2,0,-1]},{size:5,px:[9,13,3,10,12],py:[2,0,0,1,1],pz:[0,0,2,0,0],nx:[3,3,6,7,7],ny:[5,2,11,4,4],nz:[2,2,1,1,-1]},{size:2,px:[15,7],py:[17,6],pz:[0,1],nx:[14,0],ny:[16,10],nz:[0,-1]},{size:5,px:[17,15,18,12,19],py:[22,12,13,7,15],pz:[0,0,0,0,0],nx:[8,15,6,1,7],ny:[4,8,22,5,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[10,9,18,19,8],py:[2,1,3,3,1],pz:[1,1,0,0,1],nx:[23,23,23,11,11],ny:[0,1,2,0,1],nz:[0,0,0,1,-1]},{size:5,px:[12,23,0,1,8],py:[14,5,0,17,1],pz:[0,-1,-1,-1,-1],nx:[8,14,15,18,14],ny:[10,11,14,19,10],nz:[1,0,0,0,0]},{size:2,px:[4,6],py:[6,13],pz:[1,0],nx:[4,12],ny:[10,14],nz:[1,-1]},{size:5,px:[5,23,11,23,13],py:[3,10,4,11,12],pz:[2,0,1,0,0],nx:[7,4,9,8,8],ny:[4,2,4,4,4],nz:[1,2,1,1,-1]},{size:3,px:[9,5,11],py:[4,2,4],pz:[0,1,-1],nx:[5,2,4],ny:[0,1,2],nz:[0,2,0]},{size:5,px:[5,2,2,5,8],py:[12,4,4,6,13],pz:[0,2,1,1,0],nx:[3,9,4,4,8],ny:[4,0,2,2,4],nz:[1,-1,-1,-1,-1]},{size:3,px:[9,5,22],py:[7,4,20],pz:[1,-1,-1],nx:[8,19,4],ny:[4,18,5],nz:[1,0,2]},{size:5,px:[2,3,3,3,3],py:[10,16,15,14,13],pz:[1,0,0,0,0],nx:[0,0,0,1,0],ny:[10,20,5,23,21],nz:[1,0,2,0,0]},{size:2,px:[12,11],py:[4,18],pz:[0,0],nx:[11,23],ny:[17,13],nz:[0,-1]},{size:2,px:[17,8],py:[16,7],pz:[0,1],nx:[8,3],ny:[4,6],nz:[1,-1]},{size:5,px:[13,5,14,12,3],py:[4,7,4,5,3],pz:[0,1,0,0,1],nx:[21,20,21,21,21],ny:[2,0,4,3,3],nz:[0,0,0,0,-1]},{size:4,px:[20,20,20,10],py:[21,19,20,8],pz:[0,0,0,1],nx:[8,11,0,2],ny:[10,8,1,3],nz:[1,-1,-1,-1]},{size:4,px:[6,7,12,8],py:[12,12,8,11],pz:[0,0,0,0],nx:[9,5,5,18],ny:[9,2,0,20],nz:[0,-1,-1,-1]},{size:3,px:[11,5,9],py:[0,0,0],pz:[0,1,0],nx:[2,6,3],ny:[3,7,4],nz:[2,0,1]},{size:5,px:[18,18,9,17,17],py:[15,14,7,14,14],pz:[0,0,1,0,-1],nx:[21,21,21,22,20],ny:[15,21,17,14,23],nz:[0,0,0,0,0]},{size:5,px:[9,12,12,7,4],py:[4,11,12,6,5],pz:[1,0,0,1,2],nx:[16,11,9,6,20],ny:[8,4,11,10,23],nz:[0,-1,-1,-1,-1]},{size:5,px:[12,11,10,11,11],py:[23,4,4,5,23],pz:[0,0,0,0,0],nx:[11,11,7,3,20],ny:[21,21,11,1,23],nz:[0,-1,-1,-1,-1]},{size:2,px:[12,1],py:[12,3],pz:[0,-1],nx:[10,10],ny:[3,2],nz:[1,1]},{size:5,px:[9,4,15,9,9],py:[8,4,23,7,7],pz:[1,2,0,1,-1],nx:[5,3,3,3,2],ny:[23,19,17,18,15],nz:[0,0,0,0,0]},{size:2,px:[2,0],py:[16,3],pz:[0,2],nx:[9,4],ny:[15,2],nz:[0,-1]},{size:2,px:[2,3],py:[3,7],pz:[2,1],nx:[3,8],ny:[4,10],nz:[1,-1]},{size:3,px:[9,4,3],py:[18,0,14],pz:[0,-1,-1],nx:[3,5,2],ny:[5,8,5],nz:[2,1,2]},{size:3,px:[1,1,10],py:[2,1,7],pz:[1,-1,-1],nx:[0,0,0],ny:[3,5,1],nz:[0,0,1]},{size:4,px:[11,11,5,2],py:[12,13,7,3],pz:[0,0,-1,-1],nx:[5,10,10,9],ny:[6,9,10,13],nz:[1,0,0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[9,1],ny:[4,3],nz:[1,-1]},{size:5,px:[0,0,1,1,0],py:[4,10,12,13,5],pz:[1,0,0,0,1],nx:[4,4,8,7,7],ny:[3,2,10,4,4],nz:[2,2,1,1,-1]},{size:3,px:[3,4,3],py:[1,1,2],pz:[1,-1,-1],nx:[4,5,3],ny:[1,0,2],nz:[0,0,0]},{size:2,px:[9,2],py:[6,4],pz:[1,-1],nx:[8,4],ny:[6,2],nz:[1,2]},{size:5,px:[12,13,15,16,7],py:[1,1,2,2,1],pz:[0,0,0,0,1],nx:[4,4,4,3,7],ny:[2,2,4,2,4],nz:[2,-1,-1,-1,-1]},{size:5,px:[9,3,2,11,5],py:[23,7,4,10,6],pz:[0,1,2,0,1],nx:[21,20,11,21,21],ny:[21,23,8,20,20],nz:[0,0,1,0,-1]},{size:4,px:[12,6,13,12],py:[7,3,5,6],pz:[0,1,0,0],nx:[3,0,5,10],ny:[4,6,5,1],nz:[1,-1,-1,-1]},{size:2,px:[10,4],py:[4,0],pz:[0,-1],nx:[12,11],ny:[2,1],nz:[0,0]},{size:4,px:[2,3,22,5],py:[6,1,18,5],pz:[1,-1,-1,-1],nx:[0,0,0,3],ny:[14,3,12,18],nz:[0,2,0,0]},{size:3,px:[10,20,21],py:[10,18,15],pz:[1,0,0],nx:[15,1,2],ny:[7,0,8],nz:[0,-1,-1]},{size:5,px:[0,0,0,0,0],py:[4,7,13,4,6],pz:[1,1,0,2,1],nx:[5,9,8,4,4],ny:[3,7,7,3,3],nz:[1,0,0,1,-1]},{size:3,px:[13,12,14],py:[2,2,2],pz:[0,0,0],nx:[4,4,4],ny:[2,2,5],nz:[2,-1,-1]},{size:5,px:[5,4,6,2,12],py:[7,9,7,4,10],pz:[0,1,0,2,0],nx:[6,1,2,5,2],ny:[9,2,4,13,4],nz:[0,-1,-1,-1,-1]},{size:2,px:[11,1],py:[12,5],pz:[0,-1],nx:[1,0],ny:[7,2],nz:[0,2]},{size:5,px:[8,8,1,16,6],py:[6,6,4,8,11],pz:[1,-1,-1,-1,-1],nx:[13,5,4,4,13],ny:[12,1,2,5,11],nz:[0,2,2,2,0]},{size:2,px:[5,6],py:[4,14],pz:[1,0],nx:[9,5],ny:[7,1],nz:[0,-1]},{size:2,px:[2,6],py:[4,14],pz:[2,0],nx:[9,2],ny:[15,1],nz:[0,-1]},{size:5,px:[10,19,20,10,9],py:[1,2,3,0,0],pz:[1,0,0,1,-1],nx:[11,23,23,11,23],ny:[0,3,1,1,2],nz:[1,0,0,1,0]},{size:2,px:[2,9],py:[3,12],pz:[2,0],nx:[2,6],ny:[4,6],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[4,10,11,9,9],pz:[1,0,0,0,-1],nx:[16,2,17,8,4],ny:[10,2,9,4,4],nz:[0,2,0,1,1]},{size:2,px:[12,0],py:[5,4],pz:[0,-1],nx:[7,8],ny:[4,8],nz:[1,1]},{size:2,px:[21,21],py:[9,10],pz:[0,0],nx:[11,8],ny:[18,8],nz:[0,-1]},{size:2,px:[14,7],py:[23,9],pz:[0,1],nx:[7,13],ny:[10,4],nz:[1,-1]},{size:5,px:[12,12,12,6,2],py:[11,13,12,6,4],pz:[0,0,0,-1,-1],nx:[0,0,0,0,0],ny:[14,13,6,12,11],nz:[0,0,1,0,0]},{size:2,px:[8,9],py:[6,11],pz:[1,-1],nx:[15,15],ny:[11,10],nz:[0,0]},{size:4,px:[4,6,7,2],py:[8,4,23,7],pz:[1,-1,-1,-1],nx:[4,20,19,17],ny:[0,3,1,1],nz:[2,0,0,0]},{size:2,px:[7,0],py:[6,0],pz:[1,-1],nx:[7,4],ny:[8,2],nz:[1,2]},{size:2,px:[10,0],py:[7,0],pz:[1,-1],nx:[15,15],ny:[15,14],nz:[0,0]},{size:5,px:[6,2,5,2,4],py:[23,7,21,8,16],pz:[0,1,0,1,0],nx:[18,2,10,0,11],ny:[9,3,23,5,3],nz:[0,-1,-1,-1,-1]},{size:5,px:[9,9,8,10,4],py:[0,2,2,1,1],pz:[0,0,0,0,1],nx:[4,3,2,2,5],ny:[7,3,4,2,17],nz:[0,1,2,2,0]},{size:2,px:[10,7],py:[5,6],pz:[1,-1],nx:[11,11],ny:[6,5],nz:[1,1]},{size:5,px:[11,11,5,6,11],py:[8,10,5,5,9],pz:[0,0,1,1,0],nx:[13,16,11,14,4],ny:[9,13,11,20,23],nz:[0,-1,-1,-1,-1]},{size:2,px:[7,14],py:[14,22],pz:[0,-1],nx:[3,4],ny:[4,4],nz:[1,1]},{size:2,px:[4,11],py:[4,5],pz:[2,-1],nx:[2,4],ny:[5,7],nz:[2,1]},{size:2,px:[1,0],py:[0,0],pz:[0,1],nx:[0,4],ny:[0,2],nz:[0,-1]},{size:5,px:[11,11,11,4,9],py:[5,5,2,9,23],pz:[0,-1,-1,-1,-1],nx:[11,12,10,9,5],ny:[2,2,2,2,1],nz:[0,0,0,0,1]},{size:3,px:[16,14,15],py:[1,1,0],pz:[0,0,0],nx:[4,7,4],ny:[2,4,4],nz:[2,1,-1]},{size:2,px:[5,0],py:[14,5],pz:[0,-1],nx:[2,4],ny:[5,17],nz:[2,0]},{size:5,px:[18,7,16,19,4],py:[13,6,23,13,3],pz:[0,1,0,0,2],nx:[5,2,3,4,4],ny:[1,1,4,1,3],nz:[0,1,0,0,0]},{size:2,px:[8,8],py:[7,6],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[2,1],py:[10,4],pz:[1,2],nx:[4,4],ny:[3,3],nz:[2,-1]},{size:2,px:[10,5],py:[19,1],pz:[0,-1],nx:[4,12],ny:[10,17],nz:[1,0]},{size:5,px:[12,6,2,4,11],py:[14,4,2,1,5],pz:[0,-1,-1,-1,-1],nx:[3,4,3,4,3],ny:[13,17,14,16,15],nz:[0,0,0,0,0]}],alpha:[-1.368326,1.368326,-.7706897,.7706897,-.8378147,.8378147,-.6120624,.6120624,-.5139189,.5139189,-.475913,.475913,-.5161374,.5161374,-.5407743,.5407743,-.4216105,.4216105,-.4418693,.4418693,-.4435335,.4435335,-.4052076,.4052076,-.429305,.429305,-.3431154,.3431154,-.4231203,.4231203,-.39171,.39171,-.362345,.362345,-.320267,.320267,-.3331602,.3331602,-.3552034,.3552034,-.3784556,.3784556,-.3295428,.3295428,-.3587038,.3587038,-.2861332,.2861332,-.3403258,.3403258,-.3989002,.3989002,-.2631159,.2631159,-.3272156,.3272156,-.2816567,.2816567,-.3125926,.3125926,-.3146982,.3146982,-.2521825,.2521825,-.2434554,.2434554,-.3435378,.3435378,-.3161172,.3161172,-.2805027,.2805027,-.3303579,.3303579,-.2725089,.2725089,-.2575051,.2575051,-.3210646,.3210646,-.2986997,.2986997,-.2408925,.2408925,-.2456291,.2456291,-.283655,.283655,-.246986,.246986,-.29159,.29159,-.2513559,.2513559,-.2433728,.2433728,-.2377905,.2377905,-.2089327,.2089327,-.1978434,.1978434,-.3017699,.3017699,-.2339661,.2339661,-.193256,.193256,-.2278285,.2278285,-.24382,.24382,-.2216769,.2216769,-.1941995,.1941995,-.2129081,.2129081,-.2270319,.2270319,-.2393942,.2393942,-.2132518,.2132518,-.1867741,.1867741,-.2394237,.2394237,-.2005917,.2005917,-.2445217,.2445217,-.2229078,.2229078,-.2342967,.2342967,-.2481784,.2481784,-.2735603,.2735603,-.2187604,.2187604,-.1677239,.1677239,-.2248867,.2248867,-.2505358,.2505358,-.1867706,.1867706,-.1904305,.1904305,-.1939881,.1939881,-.2249474,.2249474,-.1762483,.1762483,-.2299974,.2299974]
},{count:115,threshold:-5.15192,feature:[{size:5,px:[7,14,7,10,6],py:[3,3,12,4,4],pz:[0,0,0,0,1],nx:[14,3,14,9,3],ny:[7,4,8,8,5],nz:[0,1,0,0,2]},{size:5,px:[13,18,16,17,15],py:[1,13,1,2,0],pz:[0,0,0,0,0],nx:[23,23,8,11,22],ny:[3,4,4,8,0],nz:[0,0,1,1,0]},{size:5,px:[16,6,6,7,12],py:[12,13,4,12,5],pz:[0,0,1,0,0],nx:[0,0,8,4,0],ny:[0,2,4,4,2],nz:[0,0,1,1,-1]},{size:3,px:[12,13,7],py:[13,18,6],pz:[0,0,1],nx:[13,5,6],ny:[16,3,8],nz:[0,-1,-1]},{size:5,px:[10,12,9,13,11],py:[3,3,3,3,3],pz:[0,0,0,0,0],nx:[3,4,15,4,4],ny:[2,5,10,4,4],nz:[2,1,0,1,-1]},{size:5,px:[12,12,12,3,12],py:[7,9,8,3,10],pz:[0,0,0,2,0],nx:[4,8,15,9,9],ny:[4,4,8,8,8],nz:[1,1,0,0,-1]},{size:5,px:[6,3,4,4,2],py:[22,12,13,14,7],pz:[0,0,0,0,1],nx:[2,0,1,1,1],ny:[23,5,22,21,21],nz:[0,2,0,0,-1]},{size:2,px:[3,3],py:[8,8],pz:[1,-1],nx:[3,4],ny:[4,10],nz:[1,1]},{size:5,px:[11,11,11,11,0],py:[10,12,11,13,2],pz:[0,0,0,-1,-1],nx:[8,13,13,13,13],ny:[10,8,9,11,10],nz:[1,0,0,0,0]},{size:5,px:[16,16,15,17,18],py:[12,23,11,12,12],pz:[0,0,0,0,0],nx:[8,8,9,3,13],ny:[4,4,12,3,10],nz:[1,-1,-1,-1,-1]},{size:4,px:[17,16,6,5],py:[14,13,4,5],pz:[0,0,-1,-1],nx:[8,15,4,7],ny:[10,14,4,8],nz:[1,0,2,1]},{size:5,px:[20,10,20,21,19],py:[14,7,13,12,22],pz:[0,1,0,0,0],nx:[22,23,11,23,23],ny:[23,22,11,21,20],nz:[0,0,1,0,-1]},{size:4,px:[12,13,1,18],py:[14,23,3,5],pz:[0,-1,-1,-1],nx:[2,10,5,9],ny:[2,9,8,14],nz:[2,0,1,0]},{size:5,px:[10,4,7,9,8],py:[1,0,2,0,1],pz:[0,1,0,0,0],nx:[2,3,5,3,3],ny:[2,4,8,3,3],nz:[2,1,1,1,-1]},{size:4,px:[11,2,2,11],py:[6,4,5,7],pz:[0,2,2,0],nx:[3,0,5,3],ny:[4,9,8,3],nz:[1,-1,-1,-1]},{size:5,px:[12,10,9,12,12],py:[11,2,1,10,10],pz:[0,1,1,0,-1],nx:[22,11,5,22,23],ny:[1,1,0,0,3],nz:[0,1,2,0,0]},{size:4,px:[5,10,7,11],py:[14,3,0,4],pz:[0,-1,-1,-1],nx:[4,4,4,4],ny:[17,18,15,16],nz:[0,0,0,0]},{size:5,px:[2,2,3,2,2],py:[16,12,20,15,17],pz:[0,0,0,0,0],nx:[12,8,4,15,15],ny:[17,4,4,8,8],nz:[0,1,1,0,-1]},{size:5,px:[12,12,1,6,12],py:[11,10,3,6,10],pz:[0,0,-1,-1,-1],nx:[0,0,1,0,2],ny:[4,0,2,1,0],nz:[0,2,0,1,0]},{size:5,px:[21,20,21,21,14],py:[9,16,11,8,12],pz:[0,0,0,0,0],nx:[17,6,15,0,2],ny:[8,23,13,2,0],nz:[0,-1,-1,-1,-1]},{size:4,px:[6,9,9,5],py:[14,18,23,14],pz:[0,0,0,0],nx:[9,5,5,12],ny:[21,5,3,1],nz:[0,-1,-1,-1]},{size:2,px:[12,13],py:[4,4],pz:[0,0],nx:[4,3],ny:[4,1],nz:[1,2]},{size:5,px:[7,8,11,4,10],py:[3,3,2,1,2],pz:[0,0,0,1,0],nx:[19,20,19,20,20],ny:[0,3,1,2,2],nz:[0,0,0,0,-1]},{size:2,px:[9,1],py:[7,4],pz:[1,-1],nx:[4,7],ny:[5,9],nz:[2,1]},{size:5,px:[11,10,1,5,1],py:[10,12,6,6,5],pz:[0,0,1,1,1],nx:[16,3,2,4,4],ny:[10,4,2,4,4],nz:[0,1,2,1,-1]},{size:2,px:[15,0],py:[17,0],pz:[0,-1],nx:[7,4],ny:[8,5],nz:[1,2]},{size:5,px:[8,10,9,9,9],py:[2,2,2,1,1],pz:[0,0,0,0,-1],nx:[4,2,3,3,2],ny:[0,3,2,1,4],nz:[0,0,0,0,0]},{size:4,px:[11,15,17,16],py:[8,10,11,11],pz:[0,0,0,0],nx:[14,1,1,2],ny:[9,5,7,0],nz:[0,-1,-1,-1]},{size:3,px:[3,5,9],py:[8,6,12],pz:[0,1,0],nx:[3,4,18],ny:[4,2,22],nz:[1,-1,-1]},{size:5,px:[6,1,7,3,3],py:[13,4,13,7,7],pz:[0,2,0,1,-1],nx:[0,0,0,0,0],ny:[16,15,8,13,14],nz:[0,0,1,0,0]},{size:2,px:[5,16],py:[13,10],pz:[0,-1],nx:[3,4],ny:[4,5],nz:[1,1]},{size:5,px:[5,23,11,23,23],py:[5,12,4,16,15],pz:[2,0,1,0,0],nx:[3,2,4,5,5],ny:[4,2,4,11,11],nz:[1,2,1,1,-1]},{size:4,px:[10,10,3,23],py:[7,7,3,16],pz:[1,-1,-1,-1],nx:[5,23,11,22],ny:[4,13,7,16],nz:[2,0,1,0]},{size:5,px:[15,14,13,15,16],py:[1,0,0,0,1],pz:[0,0,0,0,0],nx:[4,9,8,8,8],ny:[2,4,9,4,4],nz:[2,1,1,1,-1]},{size:2,px:[10,4],py:[5,5],pz:[0,-1],nx:[3,15],ny:[1,8],nz:[2,0]},{size:2,px:[6,12],py:[6,9],pz:[1,0],nx:[10,10],ny:[10,10],nz:[0,-1]},{size:5,px:[1,0,0,0,0],py:[5,4,11,9,12],pz:[0,1,0,0,0],nx:[9,8,2,4,7],ny:[7,7,2,4,7],nz:[0,0,2,1,0]},{size:2,px:[4,8],py:[4,7],pz:[2,1],nx:[9,8],ny:[4,7],nz:[1,-1]},{size:2,px:[5,6],py:[4,1],pz:[2,-1],nx:[8,6],ny:[7,3],nz:[1,1]},{size:5,px:[8,5,7,6,11],py:[12,5,13,13,22],pz:[0,1,0,0,0],nx:[23,23,23,22,22],ny:[20,19,21,23,23],nz:[0,0,0,0,-1]},{size:2,px:[3,17],py:[6,9],pz:[1,-1],nx:[3,3],ny:[10,9],nz:[1,1]},{size:2,px:[14,11],py:[23,5],pz:[0,0],nx:[7,3],ny:[10,20],nz:[1,-1]},{size:2,px:[3,4],py:[8,8],pz:[1,1],nx:[9,4],ny:[15,4],nz:[0,-1]},{size:2,px:[2,4],py:[4,7],pz:[2,1],nx:[2,4],ny:[4,4],nz:[1,-1]},{size:2,px:[23,11],py:[21,10],pz:[0,1],nx:[2,3],ny:[11,14],nz:[1,0]},{size:4,px:[11,11,11,3],py:[13,12,11,4],pz:[0,0,0,-1],nx:[14,13,13,6],ny:[13,11,10,5],nz:[0,0,0,1]},{size:2,px:[4,7],py:[3,6],pz:[2,1],nx:[9,19],ny:[4,14],nz:[1,-1]},{size:3,px:[10,5,7],py:[5,0,6],pz:[1,-1,-1],nx:[10,21,5],ny:[0,5,3],nz:[1,0,2]},{size:2,px:[16,13],py:[3,15],pz:[0,-1],nx:[17,7],ny:[23,8],nz:[0,1]},{size:3,px:[4,2,2],py:[15,7,19],pz:[0,1,-1],nx:[2,8,4],ny:[5,14,9],nz:[2,0,1]},{size:3,px:[8,3,6],py:[10,2,4],pz:[0,2,1],nx:[3,8,4],ny:[4,14,9],nz:[1,-1,-1]},{size:2,px:[14,3],py:[18,3],pz:[0,-1],nx:[12,14],ny:[17,9],nz:[0,0]},{size:3,px:[7,1,10],py:[14,10,10],pz:[0,-1,-1],nx:[9,6,2],ny:[13,18,2],nz:[0,0,2]},{size:2,px:[11,8],py:[13,11],pz:[0,-1],nx:[2,4],ny:[7,18],nz:[1,0]},{size:2,px:[5,4],py:[21,17],pz:[0,0],nx:[9,3],ny:[5,1],nz:[1,-1]},{size:2,px:[6,6],py:[4,0],pz:[0,-1],nx:[4,3],ny:[2,0],nz:[0,1]},{size:2,px:[2,1],py:[1,5],pz:[0,-1],nx:[0,1],ny:[1,0],nz:[1,0]},{size:2,px:[18,1],py:[13,5],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[0,0,0,0,1],py:[4,3,2,12,15],pz:[1,1,2,0,0],nx:[5,9,4,8,8],ny:[3,6,3,6,6],nz:[1,0,1,0,-1]},{size:2,px:[2,5],py:[0,2],pz:[1,-1],nx:[2,1],ny:[0,1],nz:[0,1]},{size:4,px:[7,15,4,20],py:[8,23,4,8],pz:[1,0,2,0],nx:[6,0,3,4],ny:[9,2,13,6],nz:[0,-1,-1,-1]},{size:4,px:[11,11,10,20],py:[10,9,11,8],pz:[0,0,0,-1],nx:[21,20,21,21],ny:[18,23,19,17],nz:[0,0,0,0]},{size:2,px:[3,8],py:[7,5],pz:[1,-1],nx:[3,4],ny:[4,4],nz:[1,1]},{size:2,px:[5,11],py:[3,4],pz:[2,1],nx:[8,7],ny:[5,12],nz:[1,0]},{size:2,px:[4,1],py:[1,3],pz:[1,-1],nx:[3,6],ny:[0,0],nz:[1,0]},{size:2,px:[19,9],py:[16,8],pz:[0,1],nx:[14,6],ny:[15,1],nz:[0,-1]},{size:2,px:[12,6],py:[13,5],pz:[0,-1],nx:[5,5],ny:[1,2],nz:[2,2]},{size:5,px:[16,14,4,15,12],py:[1,1,1,2,1],pz:[0,0,2,0,0],nx:[6,4,3,2,10],ny:[22,8,2,1,7],nz:[0,1,1,2,0]},{size:5,px:[6,8,6,5,5],py:[1,0,0,1,0],pz:[0,0,0,0,0],nx:[4,4,4,4,8],ny:[4,3,2,5,10],nz:[2,2,2,2,1]},{size:2,px:[9,8],py:[17,0],pz:[0,-1],nx:[2,5],ny:[5,8],nz:[2,1]},{size:2,px:[8,0],py:[7,3],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[10,21],py:[11,20],pz:[1,0],nx:[11,4],ny:[17,1],nz:[0,-1]},{size:5,px:[5,10,4,17,10],py:[3,6,3,11,5],pz:[1,0,1,0,0],nx:[21,20,9,19,10],ny:[4,3,0,2,1],nz:[0,0,1,0,-1]},{size:2,px:[23,23],py:[10,10],pz:[0,-1],nx:[23,23],ny:[21,22],nz:[0,0]},{size:5,px:[9,20,19,20,20],py:[0,3,1,2,2],pz:[1,0,0,0,-1],nx:[11,23,11,23,5],ny:[1,2,0,1,0],nz:[1,0,1,0,2]},{size:3,px:[6,8,7],py:[4,10,11],pz:[1,0,0],nx:[8,3,4],ny:[9,4,4],nz:[0,-1,-1]},{size:4,px:[13,13,10,4],py:[14,23,1,5],pz:[0,-1,-1,-1],nx:[15,14,8,8],ny:[13,12,8,9],nz:[0,0,1,1]},{size:2,px:[11,9],py:[5,8],pz:[0,-1],nx:[7,8],ny:[7,4],nz:[0,1]},{size:5,px:[4,8,4,7,7],py:[2,3,3,11,11],pz:[2,1,2,1,-1],nx:[0,0,1,0,0],ny:[4,6,15,3,2],nz:[1,1,0,2,2]},{size:2,px:[6,1],py:[12,1],pz:[0,-1],nx:[1,10],ny:[2,11],nz:[2,0]},{size:5,px:[0,0,2,3,7],py:[0,1,4,3,11],pz:[0,-1,-1,-1,-1],nx:[9,11,9,6,12],ny:[2,1,1,0,2],nz:[0,0,0,1,0]},{size:2,px:[10,11],py:[4,4],pz:[0,0],nx:[8,4],ny:[4,2],nz:[1,-1]},{size:5,px:[1,1,1,1,1],py:[15,10,19,16,18],pz:[0,1,0,0,0],nx:[4,5,3,5,6],ny:[4,19,9,18,19],nz:[1,0,1,0,-1]},{size:5,px:[12,12,12,12,20],py:[11,12,13,13,18],pz:[0,0,0,-1,-1],nx:[0,0,0,0,0],ny:[4,2,7,6,12],nz:[1,2,1,1,0]},{size:2,px:[0,0],py:[9,11],pz:[0,0],nx:[10,4],ny:[5,3],nz:[1,-1]},{size:2,px:[11,8],py:[9,6],pz:[0,1],nx:[13,13],ny:[10,10],nz:[0,-1]},{size:2,px:[6,3],py:[5,3],pz:[1,2],nx:[3,3],ny:[5,5],nz:[2,-1]},{size:2,px:[19,9],py:[10,6],pz:[0,1],nx:[4,1],ny:[2,2],nz:[2,-1]},{size:2,px:[14,4],py:[19,12],pz:[0,-1],nx:[14,8],ny:[17,10],nz:[0,1]},{size:4,px:[4,2,13,2],py:[12,6,9,3],pz:[0,1,-1,-1],nx:[1,0,1,0],ny:[16,14,11,15],nz:[0,0,1,0]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[4,4],ny:[4,8],nz:[1,-1]},{size:5,px:[9,11,12,6,10],py:[2,1,2,1,2],pz:[0,0,0,1,0],nx:[4,6,4,6,2],ny:[4,0,9,1,8],nz:[0,0,1,0,1]},{size:5,px:[4,4,7,2,2],py:[19,20,23,8,9],pz:[0,0,0,1,1],nx:[7,0,5,6,2],ny:[10,5,4,1,8],nz:[1,-1,-1,-1,-1]},{size:5,px:[18,18,17,18,18],py:[15,16,14,20,17],pz:[0,0,0,0,0],nx:[15,2,2,5,2],ny:[8,0,2,9,4],nz:[0,-1,-1,-1,-1]},{size:4,px:[13,13,13,18],py:[11,12,12,20],pz:[0,0,-1,-1],nx:[1,3,10,10],ny:[1,6,12,11],nz:[2,0,0,0]},{size:2,px:[8,9],py:[0,1],pz:[1,1],nx:[19,4],ny:[2,2],nz:[0,-1]},{size:2,px:[6,3],py:[4,2],pz:[1,2],nx:[8,4],ny:[4,0],nz:[1,-1]},{size:5,px:[23,11,22,13,13],py:[8,3,3,12,12],pz:[0,1,0,0,-1],nx:[15,7,14,13,8],ny:[7,3,6,6,3],nz:[0,1,0,0,1]},{size:3,px:[9,11,19],py:[7,3,0],pz:[1,-1,-1],nx:[23,23,11],ny:[16,12,7],nz:[0,0,1]},{size:2,px:[15,8],py:[23,7],pz:[0,-1],nx:[4,3],ny:[5,4],nz:[2,2]},{size:2,px:[4,10],py:[6,13],pz:[1,-1],nx:[2,3],ny:[4,10],nz:[2,1]},{size:2,px:[4,1],py:[11,2],pz:[1,2],nx:[9,2],ny:[5,2],nz:[1,-1]},{size:2,px:[22,22],py:[22,21],pz:[0,0],nx:[3,0],ny:[5,3],nz:[1,-1]},{size:2,px:[20,10],py:[12,6],pz:[0,1],nx:[20,10],ny:[23,11],nz:[0,-1]},{size:4,px:[10,3,3,4],py:[5,3,4,9],pz:[0,-1,-1,-1],nx:[14,4,3,11],ny:[2,1,1,3],nz:[0,2,2,0]},{size:3,px:[15,15,3],py:[1,1,4],pz:[0,-1,-1],nx:[7,4,4],ny:[8,2,3],nz:[1,2,2]},{size:3,px:[0,0,0],py:[3,4,6],pz:[2,2,1],nx:[0,21,4],ny:[23,14,3],nz:[0,-1,-1]},{size:5,px:[4,4,5,3,4],py:[9,11,8,4,8],pz:[1,1,1,2,1],nx:[21,21,10,19,19],ny:[3,4,1,0,0],nz:[0,0,1,0,-1]},{size:4,px:[21,20,20,21],py:[18,21,20,17],pz:[0,0,0,0],nx:[8,1,4,2],ny:[10,0,2,4],nz:[1,-1,-1,-1]},{size:2,px:[3,6],py:[7,14],pz:[1,0],nx:[3,5],ny:[4,5],nz:[1,-1]},{size:3,px:[12,0,23],py:[20,2,13],pz:[0,-1,-1],nx:[12,2,9],ny:[19,2,7],nz:[0,2,0]},{size:2,px:[0,6],py:[22,11],pz:[0,-1],nx:[20,18],ny:[12,23],nz:[0,0]},{size:5,px:[9,15,15,16,8],py:[2,1,2,2,1],pz:[1,0,0,0,1],nx:[1,1,1,1,1],ny:[16,10,17,18,18],nz:[0,1,0,0,-1]},{size:5,px:[10,5,3,5,8],py:[14,2,1,4,1],pz:[0,-1,-1,-1,-1],nx:[23,23,23,23,23],ny:[18,15,16,14,17],nz:[0,0,0,0,0]},{size:5,px:[2,2,2,3,2],py:[16,17,15,20,11],pz:[0,0,0,0,1],nx:[8,22,2,1,23],ny:[20,11,5,0,17],nz:[0,-1,-1,-1,-1]}],alpha:[-1.299972,1.299972,-.7630804,.7630804,-.5530378,.5530378,-.5444703,.5444703,-.5207701,.5207701,-.5035143,.5035143,-.4514416,.4514416,-.4897723,.4897723,-.5006264,.5006264,-.4626049,.4626049,-.4375402,.4375402,-.3742565,.3742565,-.3873996,.3873996,-.3715484,.3715484,-.356248,.356248,-.3216189,.3216189,-.3983409,.3983409,-.3191891,.3191891,-.3242173,.3242173,-.352804,.352804,-.3562318,.3562318,-.3592398,.3592398,-.2557584,.2557584,-.2747951,.2747951,-.2747554,.2747554,-.2980481,.2980481,-.288767,.288767,-.3895318,.3895318,-.2786896,.2786896,-.2763841,.2763841,-.2704816,.2704816,-.2075489,.2075489,-.3104773,.3104773,-.2580337,.2580337,-.2448334,.2448334,-.3054279,.3054279,-.2335804,.2335804,-.2972322,.2972322,-.2270521,.2270521,-.2134621,.2134621,-.2261655,.2261655,-.2091024,.2091024,-.2478928,.2478928,-.2468972,.2468972,-.1919746,.1919746,-.2756623,.2756623,-.2629717,.2629717,-.2198653,.2198653,-.2174434,.2174434,-.2193626,.2193626,-.1956262,.1956262,-.1720459,.1720459,-.1781067,.1781067,-.1773484,.1773484,-.1793871,.1793871,-.1973396,.1973396,-.2397262,.2397262,-.2164685,.2164685,-.2214348,.2214348,-.2265941,.2265941,-.2075436,.2075436,-.224407,.224407,-.2291992,.2291992,-.2223506,.2223506,-.1639398,.1639398,-.1732374,.1732374,-.1808631,.1808631,-.1860962,.1860962,-.1781604,.1781604,-.2108322,.2108322,-.238639,.238639,-.1942083,.1942083,-.1949161,.1949161,-.1953729,.1953729,-.2317591,.2317591,-.2335136,.2335136,-.2282835,.2282835,-.2148716,.2148716,-.1588127,.1588127,-.1566765,.1566765,-.1644839,.1644839,-.2386947,.2386947,-.1704126,.1704126,-.2213945,.2213945,-.1740398,.1740398,-.2451678,.2451678,-.2120524,.2120524,-.1886646,.1886646,-.2824447,.2824447,-.1900364,.1900364,-.2179183,.2179183,-.2257696,.2257696,-.2023404,.2023404,-.1886901,.1886901,-.1850663,.1850663,-.2035414,.2035414,-.1930174,.1930174,-.1898282,.1898282,-.166664,.166664,-.1646143,.1646143,-.1543475,.1543475,-.1366289,.1366289,-.1636837,.1636837,-.2547716,.2547716,-.1281869,.1281869,-.1509159,.1509159,-.1447827,.1447827,-.1626126,.1626126,-.2387014,.2387014,-.257116,.257116,-.1719175,.1719175,-.1646742,.1646742,-.1717041,.1717041,-.2039217,.2039217,-.1796907,.1796907]},{count:153,threshold:-4.971032,feature:[{size:5,px:[14,13,18,10,16],py:[2,2,13,3,12],pz:[0,0,0,0,0],nx:[21,7,14,23,23],ny:[16,7,8,3,13],nz:[0,1,0,0,0]},{size:5,px:[12,12,12,15,14],py:[9,10,11,3,3],pz:[0,0,0,0,0],nx:[9,9,8,14,3],ny:[9,8,5,9,5],nz:[0,0,1,0,2]},{size:5,px:[5,11,7,6,8],py:[12,8,12,12,11],pz:[0,0,0,0,0],nx:[8,4,3,9,9],ny:[4,4,4,9,9],nz:[1,1,1,0,-1]},{size:5,px:[9,8,4,10,6],py:[2,2,1,3,13],pz:[0,0,1,0,0],nx:[1,1,5,1,1],ny:[2,3,8,4,16],nz:[0,0,1,0,0]},{size:5,px:[3,16,6,17,15],py:[2,17,4,12,12],pz:[2,0,1,0,0],nx:[4,8,15,1,1],ny:[4,4,8,16,16],nz:[1,1,-1,-1,-1]},{size:4,px:[18,15,8,17],py:[12,23,6,12],pz:[0,0,1,0],nx:[15,4,10,5],ny:[21,8,14,3],nz:[0,-1,-1,-1]},{size:5,px:[18,17,9,19,19],py:[3,1,0,3,3],pz:[0,0,1,0,-1],nx:[22,11,23,23,23],ny:[0,1,2,3,4],nz:[0,1,0,0,0]},{size:4,px:[9,5,5,10],py:[18,15,14,18],pz:[0,0,0,0],nx:[10,11,2,0],ny:[16,7,12,7],nz:[0,-1,-1,-1]},{size:2,px:[2,12],py:[4,6],pz:[2,0],nx:[3,12],ny:[4,19],nz:[1,-1]},{size:5,px:[3,4,5,2,2],py:[3,3,3,1,1],pz:[0,0,0,1,-1],nx:[0,0,1,0,0],ny:[3,4,0,1,2],nz:[0,0,0,1,0]},{size:5,px:[12,12,12,8,10],py:[13,12,12,1,18],pz:[0,0,-1,-1,-1],nx:[13,8,7,14,9],ny:[10,10,7,13,4],nz:[0,1,1,0,1]},{size:5,px:[15,4,12,14,12],py:[12,3,9,10,8],pz:[0,2,0,0,0],nx:[14,7,11,2,9],ny:[8,4,7,5,4],nz:[0,1,-1,-1,-1]},{size:3,px:[3,9,7],py:[7,23,15],pz:[1,-1,-1],nx:[4,4,2],ny:[9,7,5],nz:[1,1,2]},{size:3,px:[5,17,5],py:[3,23,4],pz:[2,0,2],nx:[23,2,4],ny:[23,16,4],nz:[0,-1,-1]},{size:5,px:[4,9,9,10,8],py:[1,0,1,0,2],pz:[1,0,0,0,0],nx:[2,5,4,2,2],ny:[2,19,11,4,1],nz:[2,0,1,2,2]},{size:5,px:[8,3,8,4,7],py:[23,9,13,8,16],pz:[0,1,0,1,0],nx:[8,2,5,3,2],ny:[8,15,1,1,1],nz:[0,-1,-1,-1,-1]},{size:2,px:[11,5],py:[14,5],pz:[0,-1],nx:[1,9],ny:[3,13],nz:[2,0]},{size:5,px:[5,8,1,8,6],py:[12,12,3,23,12],pz:[0,0,2,0,0],nx:[1,1,2,1,1],ny:[22,21,23,20,20],nz:[0,0,0,0,-1]},{size:5,px:[14,21,19,21,20],py:[13,8,20,10,7],pz:[0,0,0,0,0],nx:[16,0,14,23,1],ny:[8,1,23,10,20],nz:[0,-1,-1,-1,-1]},{size:5,px:[15,16,13,14,14],py:[3,3,3,3,3],pz:[0,0,0,0,-1],nx:[18,19,18,9,17],ny:[2,2,1,1,0],nz:[0,0,0,1,0]},{size:2,px:[17,9],py:[14,4],pz:[0,-1],nx:[9,18],ny:[4,18],nz:[1,0]},{size:2,px:[21,20],py:[17,21],pz:[0,0],nx:[12,3],ny:[17,10],nz:[0,-1]},{size:2,px:[2,1],py:[10,4],pz:[1,2],nx:[4,1],ny:[10,5],nz:[1,-1]},{size:5,px:[7,8,4,9,9],py:[2,2,0,2,2],pz:[0,0,1,0,-1],nx:[5,5,4,6,3],ny:[0,1,2,0,0],nz:[0,0,0,0,1]},{size:2,px:[2,5],py:[3,5],pz:[2,-1],nx:[3,2],ny:[4,2],nz:[1,2]},{size:5,px:[0,0,0,0,0],py:[0,1,3,4,4],pz:[2,2,1,1,-1],nx:[20,20,19,20,19],ny:[21,20,23,19,22],nz:[0,0,0,0,0]},{size:2,px:[9,18],py:[8,16],pz:[1,0],nx:[14,6],ny:[15,16],nz:[0,-1]},{size:3,px:[3,4,7],py:[3,3,9],pz:[2,2,1],nx:[8,9,7],ny:[4,11,4],nz:[1,-1,-1]},{size:5,px:[6,14,4,7,7],py:[4,23,3,6,6],pz:[1,0,2,1,-1],nx:[2,0,2,1,3],ny:[20,4,21,10,23],nz:[0,2,0,1,0]},{size:5,px:[2,4,8,9,10],py:[3,8,13,23,23],pz:[2,1,0,0,0],nx:[10,4,0,3,3],ny:[21,3,0,3,23],nz:[0,-1,-1,-1,-1]},{size:3,px:[11,10,11],py:[6,5,5],pz:[0,0,0],nx:[14,6,1],ny:[7,9,5],nz:[0,1,-1]},{size:5,px:[11,11,11,11,6],py:[11,12,10,13,6],pz:[0,0,0,0,1],nx:[9,13,13,13,4],ny:[4,9,10,11,2],nz:[1,0,0,0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,11],ny:[4,7],nz:[1,-1]},{size:2,px:[1,2],py:[4,11],pz:[2,0],nx:[8,8],ny:[15,15],nz:[0,-1]},{size:5,px:[12,12,13,12,12],py:[10,11,13,12,12],pz:[0,0,0,0,-1],nx:[0,0,0,1,0],ny:[13,2,12,5,14],nz:[0,2,0,0,0]},{size:5,px:[0,0,0,1,1],py:[4,3,11,15,13],pz:[1,2,0,0,0],nx:[2,3,3,1,0],ny:[2,4,4,5,14],nz:[2,1,-1,-1,-1]},{size:2,px:[4,11],py:[12,10],pz:[0,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:5,px:[18,8,9,9,9],py:[15,7,8,10,7],pz:[0,1,1,1,1],nx:[22,23,21,22,11],ny:[20,16,23,19,9],nz:[0,0,0,0,1]},{size:5,px:[14,12,13,14,15],py:[1,0,0,0,1],pz:[0,0,0,0,0],nx:[4,9,4,7,7],ny:[2,3,1,8,8],nz:[2,1,2,1,-1]},{size:2,px:[13,9],py:[14,19],pz:[0,-1],nx:[6,10],ny:[0,2],nz:[1,0]},{size:2,px:[13,12],py:[4,4],pz:[0,0],nx:[3,3],ny:[1,1],nz:[2,-1]},{size:3,px:[14,5,5],py:[18,3,4],pz:[0,-1,-1],nx:[8,7,8],ny:[4,8,10],nz:[1,1,1]},{size:2,px:[8,18],py:[6,11],pz:[1,0],nx:[9,1],ny:[4,0],nz:[1,-1]},{size:2,px:[16,11],py:[9,7],pz:[0,0],nx:[7,7],ny:[4,4],nz:[1,-1]},{size:5,px:[23,11,23,11,23],py:[13,4,12,7,10],pz:[0,1,0,1,0],nx:[7,4,8,15,15],ny:[9,2,4,8,8],nz:[0,2,1,0,-1]},{size:2,px:[6,3],py:[1,0],pz:[0,1],nx:[4,1],ny:[1,2],nz:[0,-1]},{size:2,px:[5,5],py:[7,6],pz:[0,1],nx:[6,4],ny:[9,11],nz:[0,-1]},{size:4,px:[5,6,5,5],py:[8,6,11,6],pz:[1,1,1,0],nx:[23,0,4,5],ny:[0,2,2,1],nz:[0,-1,-1,-1]},{size:2,px:[18,4],py:[13,3],pz:[0,-1],nx:[15,4],ny:[11,2],nz:[0,2]},{size:2,px:[4,0],py:[8,0],pz:[1,-1],nx:[9,2],ny:[15,5],nz:[0,2]},{size:5,px:[15,15,16,14,14],py:[0,1,1,0,0],pz:[0,0,0,0,-1],nx:[4,4,8,8,15],ny:[4,5,4,11,23],nz:[2,2,1,1,0]},{size:4,px:[12,11,3,14],py:[14,22,1,0],pz:[0,-1,-1,-1],nx:[8,15,7,16],ny:[2,3,1,3],nz:[1,0,1,0]},{size:2,px:[5,12],py:[6,17],pz:[1,-1],nx:[2,1],ny:[4,2],nz:[1,2]},{size:5,px:[13,12,12,7,7],py:[5,6,5,14,14],pz:[0,0,0,0,-1],nx:[10,3,10,1,10],ny:[13,8,11,3,10],nz:[0,0,0,1,0]},{size:2,px:[4,4],py:[15,0],pz:[0,-1],nx:[4,4],ny:[16,17],nz:[0,0]},{size:5,px:[1,4,2,1,2],py:[4,0,1,1,0],pz:[1,1,1,2,1],nx:[4,9,1,5,1],ny:[3,4,4,5,5],nz:[1,-1,-1,-1,-1]},{size:2,px:[10,3],py:[3,1],pz:[0,2],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[16,0],py:[21,0],pz:[0,-1],nx:[6,8],ny:[8,4],nz:[1,1]},{size:2,px:[7,11],py:[4,18],pz:[0,-1],nx:[5,7],ny:[0,2],nz:[2,0]},{size:2,px:[9,7],py:[0,3],pz:[1,-1],nx:[20,10],ny:[0,1],nz:[0,1]},{size:4,px:[10,4,1,5],py:[0,6,8,4],pz:[1,-1,-1,-1],nx:[6,15,4,14],ny:[3,5,1,5],nz:[1,0,2,0]},{size:2,px:[4,4],py:[3,4],pz:[2,2],nx:[9,2],ny:[4,0],nz:[1,-1]},{size:2,px:[8,4],py:[3,4],pz:[0,-1],nx:[8,6],ny:[2,1],nz:[0,0]},{size:2,px:[2,0],py:[6,3],pz:[1,2],nx:[0,7],ny:[7,8],nz:[1,-1]},{size:2,px:[10,0],py:[7,3],pz:[1,-1],nx:[15,4],ny:[14,4],nz:[0,2]},{size:4,px:[3,1,2,2],py:[20,7,18,17],pz:[0,1,0,0],nx:[9,5,5,4],ny:[5,4,18,4],nz:[1,-1,-1,-1]},{size:2,px:[5,4],py:[3,1],pz:[2,-1],nx:[23,23],ny:[14,13],nz:[0,0]},{size:2,px:[12,4],py:[6,1],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:5,px:[22,22,11,11,11],py:[12,13,4,6,6],pz:[0,0,1,1,-1],nx:[4,4,4,4,3],ny:[16,15,18,14,11],nz:[0,0,0,0,1]},{size:2,px:[4,10],py:[0,1],pz:[1,0],nx:[2,2],ny:[2,2],nz:[2,-1]},{size:2,px:[15,6],py:[4,4],pz:[0,-1],nx:[15,4],ny:[2,1],nz:[0,2]},{size:2,px:[11,2],py:[10,20],pz:[0,-1],nx:[4,9],ny:[1,2],nz:[2,1]},{size:2,px:[4,19],py:[3,8],pz:[2,0],nx:[8,21],ny:[4,20],nz:[1,-1]},{size:5,px:[4,6,7,6,2],py:[6,15,13,14,3],pz:[1,0,0,0,-1],nx:[21,22,19,21,10],ny:[6,12,0,3,2],nz:[0,0,0,0,1]},{size:5,px:[8,12,15,14,13],py:[0,0,0,0,0],pz:[1,0,0,0,0],nx:[4,3,1,3,4],ny:[19,16,3,15,4],nz:[0,0,2,0,1]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[8,4],ny:[4,1],nz:[1,-1]},{size:4,px:[0,0,0,5],py:[10,9,11,21],pz:[1,1,-1,-1],nx:[12,4,3,11],ny:[3,1,1,3],nz:[0,2,2,0]},{size:2,px:[3,1],py:[0,0],pz:[1,2],nx:[1,4],ny:[2,1],nz:[1,-1]},{size:5,px:[2,5,1,0,1],py:[14,23,7,5,9],pz:[0,0,1,1,1],nx:[0,0,7,9,11],ny:[23,22,4,9,3],nz:[0,-1,-1,-1,-1]},{size:2,px:[8,9],py:[7,1],pz:[1,-1],nx:[8,8],ny:[8,9],nz:[1,1]},{size:2,px:[11,9],py:[11,3],pz:[1,-1],nx:[3,2],ny:[14,10],nz:[0,1]},{size:4,px:[2,4,5,4],py:[8,20,22,16],pz:[1,0,0,0],nx:[8,2,11,3],ny:[7,4,15,4],nz:[0,-1,-1,-1]},{size:3,px:[1,2,3],py:[2,1,0],pz:[0,0,0],nx:[0,0,15],ny:[1,0,11],nz:[0,0,-1]},{size:2,px:[12,22],py:[6,7],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:3,px:[13,0,5],py:[19,10,2],pz:[0,-1,-1],nx:[3,4,6],ny:[5,5,9],nz:[2,2,1]},{size:2,px:[8,15],py:[8,22],pz:[1,0],nx:[7,4],ny:[10,7],nz:[1,-1]},{size:2,px:[10,10],py:[7,6],pz:[1,1],nx:[10,1],ny:[9,0],nz:[1,-1]},{size:2,px:[9,11],py:[4,3],pz:[0,-1],nx:[5,9],ny:[0,1],nz:[1,0]},{size:5,px:[14,13,14,12,15],py:[1,2,2,2,2],pz:[0,0,0,0,0],nx:[4,8,4,7,4],ny:[2,4,3,4,4],nz:[2,1,2,1,-1]},{size:3,px:[13,8,2],py:[14,5,8],pz:[0,-1,-1],nx:[6,8,9],ny:[3,2,2],nz:[0,0,0]},{size:3,px:[3,6,8],py:[7,4,12],pz:[1,1,0],nx:[3,8,9],ny:[5,2,2],nz:[1,-1,-1]},{size:2,px:[13,4],py:[16,3],pz:[0,2],nx:[13,7],ny:[15,5],nz:[0,-1]},{size:2,px:[3,0],py:[7,9],pz:[1,-1],nx:[2,8],ny:[2,4],nz:[2,1]},{size:5,px:[3,6,8,7,7],py:[0,1,0,0,0],pz:[1,0,0,0,-1],nx:[7,9,4,3,4],ny:[9,7,4,2,2],nz:[1,1,1,2,2]},{size:3,px:[3,4,16],py:[4,4,6],pz:[1,2,0],nx:[2,2,2],ny:[0,0,1],nz:[0,-1,-1]},{size:2,px:[0,0],py:[1,0],pz:[2,2],nx:[5,5],ny:[2,2],nz:[1,-1]},{size:2,px:[9,3],py:[7,20],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[8,21],py:[10,18],pz:[0,-1],nx:[9,4],ny:[10,4],nz:[0,1]},{size:2,px:[6,13],py:[6,23],pz:[1,-1],nx:[10,10],ny:[11,12],nz:[0,0]},{size:5,px:[10,9,5,10,10],py:[9,13,6,10,10],pz:[0,0,1,0,-1],nx:[21,21,21,10,21],ny:[18,20,19,11,17],nz:[0,0,0,1,0]},{size:2,px:[8,8],py:[7,6],pz:[1,1],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[11,4],py:[14,7],pz:[0,-1],nx:[13,13],ny:[13,11],nz:[0,0]},{size:2,px:[4,4],py:[4,5],pz:[2,2],nx:[12,5],ny:[16,2],nz:[0,-1]},{size:3,px:[1,3,20],py:[3,9,2],pz:[2,-1,-1],nx:[0,0,0],ny:[7,4,13],nz:[1,2,0]},{size:2,px:[0,0],py:[4,2],pz:[1,2],nx:[1,0],ny:[4,4],nz:[1,-1]},{size:3,px:[8,9,11],py:[2,1,2],pz:[0,0,0],nx:[2,2,0],ny:[2,2,13],nz:[2,-1,-1]},{size:2,px:[1,10],py:[23,5],pz:[0,-1],nx:[3,6],ny:[1,1],nz:[2,1]},{size:4,px:[13,6,3,4],py:[8,6,4,2],pz:[0,-1,-1,-1],nx:[1,1,1,4],ny:[9,7,8,20],nz:[1,1,1,0]},{size:5,px:[11,4,4,10,3],py:[9,16,13,12,7],pz:[0,0,0,0,0],nx:[7,11,3,17,4],ny:[8,11,9,0,4],nz:[0,-1,-1,-1,-1]},{size:2,px:[6,6],py:[6,8],pz:[1,-1],nx:[0,0],ny:[1,2],nz:[2,2]},{size:2,px:[10,5],py:[7,2],pz:[0,-1],nx:[4,13],ny:[5,9],nz:[2,0]},{size:2,px:[10,5],py:[8,2],pz:[1,-1],nx:[16,4],ny:[14,5],nz:[0,2]},{size:2,px:[1,1],py:[16,15],pz:[0,0],nx:[1,20],ny:[23,1],nz:[0,-1]},{size:2,px:[2,3],py:[4,7],pz:[2,1],nx:[2,3],ny:[5,4],nz:[2,-1]},{size:2,px:[19,8],py:[5,4],pz:[0,-1],nx:[10,10],ny:[1,3],nz:[1,1]},{size:2,px:[21,21],py:[18,16],pz:[0,0],nx:[10,3],ny:[17,5],nz:[0,-1]},{size:2,px:[9,2],py:[23,4],pz:[0,2],nx:[5,11],ny:[3,7],nz:[2,1]},{size:2,px:[7,0],py:[3,2],pz:[0,-1],nx:[3,6],ny:[1,1],nz:[1,0]},{size:4,px:[5,9,8,9],py:[8,12,13,18],pz:[0,0,0,0],nx:[6,5,2,5],ny:[8,4,7,11],nz:[0,-1,-1,-1]},{size:2,px:[7,2],py:[0,0],pz:[0,2],nx:[5,5],ny:[3,4],nz:[1,-1]},{size:2,px:[11,11],py:[12,13],pz:[0,0],nx:[9,1],ny:[14,3],nz:[0,-1]},{size:5,px:[8,16,9,4,15],py:[11,13,8,4,12],pz:[1,0,1,2,0],nx:[3,3,3,3,4],ny:[4,2,1,3,0],nz:[0,0,0,0,0]},{size:2,px:[9,5],py:[7,6],pz:[1,-1],nx:[19,8],ny:[17,11],nz:[0,1]},{size:5,px:[14,15,12,13,13],py:[2,2,2,2,2],pz:[0,0,0,0,-1],nx:[20,9,19,20,4],ny:[14,2,5,15,1],nz:[0,1,0,0,2]},{size:2,px:[18,8],py:[20,7],pz:[0,1],nx:[4,9],ny:[2,2],nz:[2,-1]},{size:2,px:[6,3],py:[11,5],pz:[1,2],nx:[13,19],ny:[20,20],nz:[0,-1]},{size:3,px:[12,11,3],py:[20,20,5],pz:[0,0,-1],nx:[11,12,6],ny:[21,21,10],nz:[0,0,1]},{size:2,px:[3,6],py:[7,14],pz:[1,0],nx:[3,13],ny:[4,8],nz:[1,-1]},{size:2,px:[0,0],py:[5,9],pz:[2,1],nx:[2,11],ny:[8,6],nz:[1,-1]},{size:2,px:[2,2],py:[5,5],pz:[1,-1],nx:[0,0],ny:[6,3],nz:[1,2]},{size:2,px:[11,23],py:[5,9],pz:[1,0],nx:[8,2],ny:[11,0],nz:[0,-1]},{size:2,px:[11,23],py:[12,9],pz:[0,-1],nx:[11,22],ny:[10,21],nz:[1,0]},{size:2,px:[12,12],py:[7,7],pz:[0,-1],nx:[5,4],ny:[7,10],nz:[1,1]},{size:2,px:[9,8],py:[18,1],pz:[0,-1],nx:[5,4],ny:[8,10],nz:[1,1]},{size:2,px:[16,17],py:[11,11],pz:[0,0],nx:[15,2],ny:[9,4],nz:[0,-1]},{size:2,px:[0,1],py:[3,0],pz:[2,-1],nx:[9,10],ny:[6,5],nz:[1,1]},{size:2,px:[13,13],py:[20,21],pz:[0,-1],nx:[2,2],ny:[6,5],nz:[1,1]},{size:5,px:[20,20,4,18,19],py:[17,16,5,22,20],pz:[0,0,2,0,0],nx:[8,11,5,6,2],ny:[10,15,11,10,1],nz:[1,-1,-1,-1,-1]},{size:2,px:[11,11],py:[4,4],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:3,px:[6,5,6],py:[8,10,10],pz:[1,1,1],nx:[11,8,22],ny:[19,2,15],nz:[0,-1,-1]},{size:3,px:[5,2,13],py:[7,10,10],pz:[1,-1,-1],nx:[11,11,23],ny:[8,9,14],nz:[1,1,0]},{size:5,px:[3,6,1,5,10],py:[7,14,1,9,2],pz:[1,-1,-1,-1,-1],nx:[11,0,1,5,1],ny:[14,12,18,5,19],nz:[0,0,0,1,0]},{size:3,px:[21,21,10],py:[16,17,10],pz:[0,0,1],nx:[5,5,1],ny:[9,9,18],nz:[1,-1,-1]},{size:2,px:[6,21],py:[6,17],pz:[1,-1],nx:[20,10],ny:[7,4],nz:[0,1]},{size:2,px:[10,11],py:[0,0],pz:[1,-1],nx:[6,13],ny:[2,4],nz:[1,0]},{size:4,px:[4,4,7,9],py:[3,4,10,3],pz:[2,2,1,1],nx:[21,2,15,5],ny:[0,0,0,2],nz:[0,-1,-1,-1]},{size:3,px:[11,11,11],py:[7,6,9],pz:[1,1,1],nx:[23,4,9],ny:[23,5,6],nz:[0,-1,-1]},{size:2,px:[14,15],py:[1,1],pz:[0,0],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[11,23,11,23,23],py:[11,22,10,21,20],pz:[1,0,1,0,0],nx:[10,9,19,10,10],ny:[10,11,20,9,9],nz:[1,1,0,1,-1]},{size:2,px:[7,23],py:[13,22],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[12,1],py:[19,0],pz:[0,-1],nx:[11,12],ny:[22,17],nz:[0,0]},{size:2,px:[10,8],py:[4,3],pz:[1,-1],nx:[5,23],ny:[2,7],nz:[2,0]},{size:2,px:[9,10],py:[6,20],pz:[1,-1],nx:[8,8],ny:[4,6],nz:[1,1]}],alpha:[-1.135386,1.135386,-.90908,.90908,-.591378,.591378,-.5556534,.5556534,-.508415,.508415,-.4464489,.4464489,-.4463241,.4463241,-.4985226,.4985226,-.4424638,.4424638,-.4300093,.4300093,-.4231341,.4231341,-.4087428,.4087428,-.337448,.337448,-.3230151,.3230151,-.3084427,.3084427,-.3235494,.3235494,-.2589281,.2589281,-.2970292,.2970292,-.2957065,.2957065,-.3997619,.3997619,-.3535901,.3535901,-.2725396,.2725396,-.2649725,.2649725,-.3103888,.3103888,-.3117775,.3117775,-.258962,.258962,-.2689202,.2689202,-.2127024,.2127024,-.2436322,.2436322,-.3120574,.3120574,-.278601,.278601,-.2649072,.2649072,-.2766509,.2766509,-.2367237,.2367237,-.2658049,.2658049,-.2103463,.2103463,-.1911522,.1911522,-.2535425,.2535425,-.2434696,.2434696,-.2180788,.2180788,-.2496873,.2496873,-.2700969,.2700969,-.2565479,.2565479,-.2737741,.2737741,-.1675507,.1675507,-.2551417,.2551417,-.2067648,.2067648,-.1636834,.1636834,-.2129306,.2129306,-.1656758,.1656758,-.1919369,.1919369,-.2031763,.2031763,-.2062327,.2062327,-.257795,.257795,-.2951823,.2951823,-.202316,.202316,-.2022234,.2022234,-.2132906,.2132906,-.1653278,.1653278,-.1648474,.1648474,-.1593352,.1593352,-.173565,.173565,-.1688778,.1688778,-.1519705,.1519705,-.1812202,.1812202,-.1967481,.1967481,-.1852954,.1852954,-.231778,.231778,-.2036251,.2036251,-.1609324,.1609324,-.2160205,.2160205,-.202619,.202619,-.1854761,.1854761,-.1832038,.1832038,-.2001141,.2001141,-.1418333,.1418333,-.1704773,.1704773,-.1586261,.1586261,-.1587582,.1587582,-.1899489,.1899489,-.147716,.147716,-.2260467,.2260467,-.2393598,.2393598,-.1582373,.1582373,-.1702498,.1702498,-.1737398,.1737398,-.1462529,.1462529,-.1396517,.1396517,-.1629625,.1629625,-.1446933,.1446933,-.1811657,.1811657,-.1336427,.1336427,-.1924813,.1924813,-.145752,.145752,-.1600259,.1600259,-.1297,.1297,-.2076199,.2076199,-.151006,.151006,-.1914568,.1914568,-.2138162,.2138162,-.1856916,.1856916,-.1843047,.1843047,-.1526846,.1526846,-.132832,.132832,-.1751311,.1751311,-.1643908,.1643908,-.1482706,.1482706,-.1622298,.1622298,-.1884979,.1884979,-.1633604,.1633604,-.1554166,.1554166,-.1405332,.1405332,-.1772398,.1772398,-.1410008,.1410008,-.1362301,.1362301,-.1709087,.1709087,-.1584613,.1584613,-.1188814,.1188814,-.1423888,.1423888,-.1345565,.1345565,-.1835986,.1835986,-.1445329,.1445329,-.1385826,.1385826,-.1558917,.1558917,-.1476053,.1476053,-.1370722,.1370722,-.2362666,.2362666,-.2907774,.2907774,-.165636,.165636,-.1644407,.1644407,-.1443394,.1443394,-.1438823,.1438823,-.1476964,.1476964,-.1956593,.1956593,-.2417519,.2417519,-.1659315,.1659315,-.1466254,.1466254,-.2034909,.2034909,-.2128771,.2128771,-.1665429,.1665429,-.1387131,.1387131,-.1298823,.1298823,-.1329495,.1329495,-.1769587,.1769587,-.136653,.136653,-.1254359,.1254359,-.1673022,.1673022,-.1602519,.1602519,-.1897245,.1897245,-.1893579,.1893579,-.157935,.157935,-.1472589,.1472589,-.1614193,.1614193]},{count:203,threshold:-4.769677,feature:[{size:5,px:[12,5,14,9,7],py:[9,13,3,1,3],pz:[0,0,0,0,0],nx:[1,0,5,14,9],ny:[5,3,8,8,9],nz:[2,0,1,0,0]},{size:5,px:[14,13,11,17,12],py:[2,2,4,13,3],pz:[0,0,0,0,0],nx:[7,22,8,23,22],ny:[8,15,11,12,3],nz:[1,0,1,0,0]},{size:5,px:[9,11,11,11,16],py:[4,8,7,9,12],pz:[0,0,0,0,0],nx:[4,8,14,9,9],ny:[4,4,8,8,8],nz:[1,1,0,0,-1]},{size:5,px:[6,12,12,8,3],py:[11,7,8,10,2],pz:[0,0,0,0,2],nx:[8,4,4,4,0],ny:[4,4,4,11,0],nz:[1,1,-1,-1,-1]},{size:5,px:[19,17,18,9,9],py:[3,2,3,1,1],pz:[0,0,0,1,-1],nx:[21,21,10,22,22],ny:[1,2,0,4,3],nz:[0,0,1,0,0]},{size:2,px:[4,7],py:[4,6],pz:[2,1],nx:[8,7],ny:[4,10],nz:[1,1]},{size:5,px:[14,17,17,13,12],py:[18,15,16,18,18],pz:[0,0,0,0,0],nx:[13,19,5,20,6],ny:[16,4,1,19,0],nz:[0,-1,-1,-1,-1]},{size:5,px:[6,7,4,5,5],py:[15,23,6,12,16],pz:[0,0,1,0,0],nx:[3,14,14,6,6],ny:[4,11,11,9,0],nz:[1,-1,-1,-1,-1]},{size:5,px:[16,9,6,3,11],py:[2,2,5,3,2],pz:[0,0,1,2,0],nx:[3,4,2,5,5],ny:[4,11,2,8,8],nz:[1,1,2,1,-1]},{size:5,px:[6,1,5,3,3],py:[14,4,15,7,7],pz:[0,2,0,1,-1],nx:[0,0,1,1,1],ny:[7,8,18,17,5],nz:[1,1,0,0,2]},{size:5,px:[12,12,9,5,3],py:[14,14,0,3,7],pz:[0,-1,-1,-1,-1],nx:[7,7,14,8,13],ny:[7,8,13,10,10],nz:[1,1,0,1,0]},{size:2,px:[3,4],py:[7,9],pz:[1,-1],nx:[2,4],ny:[5,4],nz:[2,1]},{size:3,px:[10,21,17],py:[7,11,23],pz:[1,0,0],nx:[21,9,3],ny:[23,5,5],nz:[0,-1,-1]},{size:5,px:[8,11,9,10,11],py:[2,0,1,1,2],pz:[0,0,0,0,0],nx:[4,5,6,4,3],ny:[8,4,18,7,4],nz:[1,1,0,1,-1]},{size:5,px:[20,22,3,19,10],py:[20,9,4,22,3],pz:[0,0,2,0,1],nx:[8,20,8,3,2],ny:[4,3,6,4,3],nz:[1,-1,-1,-1,-1]},{size:2,px:[4,4],py:[8,7],pz:[1,1],nx:[9,2],ny:[15,5],nz:[0,-1]},{size:2,px:[11,13],py:[13,4],pz:[0,-1],nx:[20,21],ny:[1,4],nz:[0,0]},{size:5,px:[1,2,7,6,8],py:[0,2,3,3,3],pz:[2,1,0,0,0],nx:[1,2,1,1,1],ny:[0,0,4,3,3],nz:[1,0,0,0,-1]},{size:2,px:[3,10],py:[9,11],pz:[0,0],nx:[6,3],ny:[9,2],nz:[0,-1]},{size:5,px:[12,12,12,12,6],py:[10,11,13,12,6],pz:[0,0,0,0,-1],nx:[10,2,1,10,10],ny:[10,4,2,11,9],nz:[0,1,2,0,0]},{size:5,px:[16,18,11,17,15],py:[11,12,8,12,11],pz:[0,0,0,0,0],nx:[14,0,19,0,10],ny:[9,3,14,8,9],nz:[0,-1,-1,-1,-1]},{size:4,px:[5,9,5,8],py:[21,18,20,23],pz:[0,0,0,0],nx:[8,4,3,1],ny:[20,3,4,3],nz:[0,-1,-1,-1]},{size:2,px:[2,3],py:[3,2],pz:[2,2],nx:[3,12],ny:[4,23],nz:[1,-1]},{size:5,px:[0,1,1,1,1],py:[2,16,14,13,12],pz:[2,0,0,0,0],nx:[8,4,9,4,7],ny:[9,3,4,2,9],nz:[1,2,1,2,1]},{size:2,px:[4,9],py:[3,7],pz:[2,-1],nx:[4,9],ny:[2,4],nz:[2,1]},{size:5,px:[15,16,17,15,8],py:[3,3,3,18,1],pz:[0,0,0,0,1],nx:[1,2,2,1,3],ny:[5,3,2,6,0],nz:[0,0,0,0,0]},{size:2,px:[4,17],py:[4,14],pz:[2,0],nx:[15,7],ny:[15,10],nz:[0,-1]},{size:3,px:[14,12,3],py:[3,13,3],pz:[0,-1,-1],nx:[4,17,4],ny:[3,19,4],nz:[2,0,2]},{size:4,px:[4,5,12,2],py:[9,6,19,4],pz:[1,1,0,2],nx:[12,17,4,4],ny:[18,19,4,4],nz:[0,-1,-1,-1]},{size:5,px:[10,19,20,20,19],py:[7,14,13,14,13],pz:[1,0,0,0,-1],nx:[11,23,23,23,23],ny:[9,15,13,16,14],nz:[1,0,0,0,0]},{size:4,px:[0,0,0,2],py:[5,6,5,14],pz:[1,1,2,0],nx:[0,3,3,17],ny:[23,5,5,9],nz:[0,-1,-1,-1]},{size:2,px:[15,4],py:[23,5],pz:[0,2],nx:[9,3],ny:[4,4],nz:[1,-1]},{size:4,px:[6,5,10,12],py:[3,3,23,23],pz:[1,1,0,0],nx:[11,1,1,4],ny:[21,3,5,5],nz:[0,-1,-1,-1]},{size:2,px:[5,2],py:[9,4],pz:[1,2],nx:[4,9],ny:[4,2],nz:[1,-1]},{size:5,px:[23,23,23,23,23],py:[14,9,13,11,12],pz:[0,0,0,0,0],nx:[6,13,7,8,8],ny:[9,6,3,3,3],nz:[1,0,1,1,-1]},{size:2,px:[10,3],py:[4,5],pz:[0,-1],nx:[3,8],ny:[1,3],nz:[2,1]},{size:2,px:[3,12],py:[4,18],pz:[2,0],nx:[12,0],ny:[16,3],nz:[0,-1]},{size:2,px:[16,2],py:[4,4],pz:[0,-1],nx:[16,4],ny:[1,0],nz:[0,2]},{size:2,px:[3,4],py:[7,1],pz:[1,-1],nx:[5,3],ny:[19,9],nz:[0,1]},{size:4,px:[20,19,20,21],py:[2,0,1,3],pz:[0,0,0,0],nx:[11,5,23,11],ny:[0,0,1,1],nz:[1,2,0,1]},{size:2,px:[12,13],py:[7,5],pz:[0,0],nx:[8,5],ny:[3,5],nz:[1,-1]},{size:5,px:[22,21,22,22,22],py:[20,22,18,19,16],pz:[0,0,0,0,0],nx:[2,3,3,15,15],ny:[4,5,4,7,7],nz:[1,2,1,0,-1]},{size:3,px:[15,14,14],py:[1,1,1],pz:[0,0,-1],nx:[17,18,16],ny:[1,2,1],nz:[0,0,0]},{size:4,px:[17,16,16,15],py:[2,1,0,0],pz:[0,0,0,0],nx:[7,4,2,11],ny:[11,2,1,4],nz:[1,2,-1,-1]},{size:4,px:[18,0,0,0],py:[14,6,5,4],pz:[0,-1,-1,-1],nx:[19,19,19,19],ny:[16,19,17,18],nz:[0,0,0,0]},{size:4,px:[11,5,5,0],py:[14,1,4,4],pz:[0,-1,-1,-1],nx:[11,8,2,15],ny:[17,14,1,9],nz:[0,0,2,0]},{size:2,px:[4,5],py:[19,21],pz:[0,0],nx:[10,2],ny:[15,4],nz:[0,-1]},{size:2,px:[6,4],py:[4,6],pz:[1,1],nx:[3,3],ny:[4,5],nz:[1,-1]},{size:2,px:[2,7],py:[1,13],pz:[2,0],nx:[7,2],ny:[1,4],nz:[1,-1]},{size:4,px:[15,10,4,7],py:[23,3,1,7],pz:[0,1,2,1],nx:[0,4,1,1],ny:[0,2,0,-1900147915],nz:[0,-1,-1,-1]},{size:2,px:[7,2],py:[12,11],pz:[0,-1],nx:[2,4],ny:[2,5],nz:[2,1]},{size:5,px:[0,0,0,1,0],
py:[9,4,3,2,6],pz:[0,1,2,1,1],nx:[9,4,2,16,16],ny:[7,4,2,8,8],nz:[0,1,2,0,-1]},{size:5,px:[18,4,9,4,4],py:[12,5,6,3,4],pz:[0,2,1,2,-1],nx:[4,3,3,2,3],ny:[23,19,21,16,18],nz:[0,0,0,0,0]},{size:2,px:[6,6],py:[14,13],pz:[0,0],nx:[3,10],ny:[4,7],nz:[1,-1]},{size:5,px:[3,4,4,2,2],py:[8,11,7,4,4],pz:[1,1,1,2,-1],nx:[20,18,19,20,19],ny:[4,0,2,3,1],nz:[0,0,0,0,0]},{size:5,px:[17,12,14,8,16],py:[2,0,0,0,0],pz:[0,0,0,1,0],nx:[3,15,3,2,2],ny:[2,9,7,2,2],nz:[2,0,1,2,-1]},{size:5,px:[11,10,11,11,11],py:[10,12,11,12,12],pz:[0,0,0,0,-1],nx:[13,13,20,10,13],ny:[9,11,8,4,10],nz:[0,0,0,1,0]},{size:2,px:[8,16],py:[7,13],pz:[1,0],nx:[8,13],ny:[4,11],nz:[1,-1]},{size:2,px:[6,7],py:[20,3],pz:[0,-1],nx:[3,4],ny:[10,10],nz:[1,1]},{size:3,px:[13,10,17],py:[9,3,5],pz:[0,-1,-1],nx:[1,3,1],ny:[5,16,6],nz:[2,0,1]},{size:2,px:[0,0],py:[5,5],pz:[2,-1],nx:[8,3],ny:[14,10],nz:[0,1]},{size:4,px:[11,9,12,10],py:[2,2,2,2],pz:[0,0,0,0],nx:[4,4,4,10],ny:[5,5,0,16],nz:[1,-1,-1,-1]},{size:3,px:[7,9,12],py:[2,2,2],pz:[1,-1,-1],nx:[4,7,2],ny:[3,1,0],nz:[0,0,2]},{size:2,px:[2,4],py:[3,12],pz:[2,0],nx:[7,4],ny:[6,5],nz:[1,2]},{size:4,px:[12,12,6,3],py:[12,11,21,7],pz:[0,0,-1,-1],nx:[1,0,0,0],ny:[13,3,6,5],nz:[0,2,1,1]},{size:3,px:[3,1,3],py:[21,8,18],pz:[0,1,0],nx:[11,20,0],ny:[17,17,6],nz:[0,-1,-1]},{size:2,px:[2,8],py:[3,12],pz:[2,0],nx:[2,20],ny:[4,17],nz:[1,-1]},{size:5,px:[2,3,4,3,2],py:[10,14,14,15,13],pz:[1,0,0,0,0],nx:[0,0,1,0,0],ny:[21,20,23,19,19],nz:[0,0,0,0,-1]},{size:2,px:[2,15],py:[7,4],pz:[1,-1],nx:[3,8],ny:[4,14],nz:[1,0]},{size:5,px:[19,14,12,15,4],py:[8,12,10,16,2],pz:[0,0,0,0,2],nx:[8,0,12,4,0],ny:[4,1,12,2,19],nz:[1,-1,-1,-1,-1]},{size:2,px:[18,9],py:[15,3],pz:[0,-1],nx:[8,15],ny:[9,14],nz:[1,0]},{size:5,px:[4,2,3,4,9],py:[9,4,3,8,23],pz:[1,2,1,1,0],nx:[11,23,23,11,11],ny:[0,2,3,1,1],nz:[1,0,0,1,-1]},{size:2,px:[6,7],py:[1,1],pz:[0,0],nx:[3,4],ny:[10,5],nz:[1,-1]},{size:4,px:[11,9,8,5],py:[12,15,13,3],pz:[0,-1,-1,-1],nx:[3,12,14,13],ny:[0,3,3,3],nz:[2,0,0,0]},{size:2,px:[11,11],py:[6,5],pz:[0,0],nx:[8,11],ny:[4,20],nz:[1,-1]},{size:5,px:[21,20,21,21,21],py:[18,21,17,19,19],pz:[0,0,0,0,-1],nx:[2,5,4,4,5],ny:[5,12,11,10,10],nz:[1,0,0,0,0]},{size:5,px:[1,1,1,1,1],py:[10,11,7,9,8],pz:[0,0,0,0,0],nx:[11,23,23,23,23],ny:[10,20,21,19,19],nz:[1,0,0,0,-1]},{size:5,px:[7,8,7,3,1],py:[14,13,13,2,2],pz:[0,0,-1,-1,-1],nx:[1,10,2,2,10],ny:[2,13,4,16,12],nz:[2,0,1,0,0]},{size:2,px:[17,18],py:[12,12],pz:[0,0],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[17,0],py:[5,20],pz:[0,-1],nx:[4,9],ny:[0,2],nz:[2,1]},{size:5,px:[22,22,22,11,23],py:[16,15,14,6,13],pz:[0,0,0,1,0],nx:[16,15,7,9,9],ny:[15,8,4,10,10],nz:[0,0,1,1,-1]},{size:2,px:[13,3],py:[3,1],pz:[0,2],nx:[8,3],ny:[4,2],nz:[1,-1]},{size:2,px:[5,6],py:[4,1],pz:[1,-1],nx:[6,3],ny:[4,2],nz:[1,2]},{size:3,px:[4,2,6],py:[6,3,4],pz:[1,2,1],nx:[10,0,4],ny:[9,4,3],nz:[0,-1,-1]},{size:4,px:[2,8,4,10],py:[4,23,7,23],pz:[2,0,1,0],nx:[9,4,11,9],ny:[21,5,16,0],nz:[0,-1,-1,-1]},{size:2,px:[6,3],py:[13,0],pz:[0,-1],nx:[8,2],ny:[11,2],nz:[0,2]},{size:2,px:[3,3],py:[1,4],pz:[1,-1],nx:[3,5],ny:[0,1],nz:[1,0]},{size:2,px:[7,2],py:[0,0],pz:[0,2],nx:[2,10],ny:[1,6],nz:[2,0]},{size:2,px:[10,2],py:[7,0],pz:[1,-1],nx:[21,5],ny:[15,4],nz:[0,2]},{size:2,px:[1,1],py:[10,9],pz:[0,0],nx:[0,3],ny:[13,11],nz:[0,-1]},{size:2,px:[11,9],py:[13,0],pz:[0,-1],nx:[3,3],ny:[4,3],nz:[1,1]},{size:5,px:[14,13,13,14,14],py:[12,10,11,13,13],pz:[0,0,0,0,-1],nx:[9,8,4,5,7],ny:[4,4,2,2,4],nz:[0,0,1,1,0]},{size:3,px:[2,4,1],py:[2,0,0],pz:[0,0,1],nx:[0,7,4],ny:[0,3,2],nz:[1,-1,-1]},{size:2,px:[11,4],py:[5,0],pz:[0,-1],nx:[8,6],ny:[4,9],nz:[1,1]},{size:3,px:[0,0,0],py:[20,2,4],pz:[0,-1,-1],nx:[12,3,10],ny:[3,1,3],nz:[0,2,0]},{size:5,px:[5,11,10,13,13],py:[0,0,0,2,2],pz:[1,0,0,0,-1],nx:[4,5,5,4,5],ny:[14,0,2,6,1],nz:[0,0,0,0,0]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,11],ny:[4,1],nz:[1,-1]},{size:2,px:[14,-1715597992],py:[19,9],pz:[0,-1],nx:[7,14],ny:[10,17],nz:[1,0]},{size:2,px:[11,1],py:[9,0],pz:[0,-1],nx:[1,12],ny:[2,10],nz:[2,0]},{size:2,px:[17,9],py:[13,17],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[0,7],py:[1,9],pz:[1,-1],nx:[18,4],ny:[14,2],nz:[0,2]},{size:2,px:[14,7],py:[23,9],pz:[0,-1],nx:[4,8],ny:[5,10],nz:[2,1]},{size:2,px:[8,7],py:[17,9],pz:[0,-1],nx:[3,2],ny:[0,3],nz:[0,0]},{size:2,px:[13,4],py:[20,1],pz:[0,-1],nx:[5,3],ny:[21,17],nz:[0,0]},{size:3,px:[0,0,1],py:[3,6,15],pz:[2,1,0],nx:[10,8,3],ny:[6,4,2],nz:[0,-1,-1]},{size:2,px:[8,8],py:[18,8],pz:[0,-1],nx:[5,4],ny:[8,10],nz:[1,1]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[8,9],ny:[4,3],nz:[1,-1]},{size:2,px:[6,3],py:[11,5],pz:[1,2],nx:[13,3],ny:[19,2],nz:[0,-1]},{size:2,px:[4,6],py:[1,11],pz:[2,-1],nx:[3,2],ny:[1,0],nz:[1,2]},{size:2,px:[9,4],py:[10,5],pz:[1,2],nx:[8,4],ny:[10,4],nz:[1,-1]},{size:2,px:[12,12],py:[11,20],pz:[0,-1],nx:[0,0],ny:[6,10],nz:[1,0]},{size:2,px:[7,12],py:[2,20],pz:[0,-1],nx:[2,2],ny:[2,3],nz:[2,2]},{size:2,px:[0,15],py:[5,21],pz:[1,-1],nx:[10,9],ny:[3,3],nz:[0,1]},{size:2,px:[15,9],py:[1,0],pz:[0,1],nx:[19,3],ny:[0,3],nz:[0,-1]},{size:2,px:[21,5],py:[13,5],pz:[0,2],nx:[23,6],ny:[23,5],nz:[0,-1]},{size:2,px:[5,8],py:[3,1],pz:[2,-1],nx:[9,9],ny:[6,5],nz:[1,1]},{size:2,px:[2,2],py:[7,7],pz:[1,-1],nx:[5,3],ny:[23,17],nz:[0,0]},{size:2,px:[11,3],py:[6,4],pz:[0,-1],nx:[2,4],ny:[2,4],nz:[2,1]},{size:3,px:[14,0,17],py:[20,3,21],pz:[0,-1,-1],nx:[11,11,11],ny:[7,9,10],nz:[1,1,1]},{size:5,px:[11,11,23,23,12],py:[10,11,21,20,12],pz:[1,1,0,0,0],nx:[8,3,6,7,7],ny:[4,5,11,11,11],nz:[1,2,1,1,-1]},{size:2,px:[11,11],py:[11,10],pz:[0,0],nx:[9,3],ny:[2,5],nz:[1,-1]},{size:2,px:[12,14],py:[19,19],pz:[0,0],nx:[12,13],ny:[18,17],nz:[0,-1]},{size:5,px:[13,14,12,15,14],py:[0,0,1,1,1],pz:[0,0,0,0,0],nx:[4,8,4,7,7],ny:[3,4,2,5,5],nz:[2,1,2,1,-1]},{size:2,px:[17,5],py:[10,2],pz:[0,-1],nx:[4,9],ny:[2,3],nz:[2,1]},{size:2,px:[18,10],py:[6,10],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[8,18,8,4,16],py:[6,12,9,4,13],pz:[1,0,1,2,0],nx:[3,4,3,5,5],ny:[0,2,3,1,1],nz:[1,0,0,0,-1]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[8,0],ny:[4,0],nz:[1,-1]},{size:2,px:[0,0],py:[4,5],pz:[2,-1],nx:[4,2],ny:[14,7],nz:[0,1]},{size:4,px:[3,4,4,3],py:[11,12,12,2],pz:[0,0,-1,-1],nx:[1,2,1,2],ny:[11,14,12,16],nz:[0,0,0,0]},{size:2,px:[6,0],py:[11,0],pz:[0,-1],nx:[3,4],ny:[4,5],nz:[1,1]},{size:2,px:[3,2],py:[21,11],pz:[0,1],nx:[3,2],ny:[10,0],nz:[1,-1]},{size:3,px:[10,3,13],py:[2,0,2],pz:[0,2,0],nx:[7,16,1],ny:[10,4,1],nz:[0,-1,-1]},{size:2,px:[6,12],py:[2,5],pz:[1,0],nx:[6,18],ny:[1,19],nz:[1,-1]},{size:2,px:[3,16],py:[0,16],pz:[1,-1],nx:[11,2],ny:[5,1],nz:[0,2]},{size:2,px:[11,10],py:[13,1],pz:[0,-1],nx:[1,1],ny:[22,21],nz:[0,0]},{size:2,px:[11,10],py:[18,18],pz:[0,0],nx:[5,8],ny:[9,0],nz:[1,-1]},{size:2,px:[3,2],py:[20,18],pz:[0,0],nx:[8,3],ny:[5,1],nz:[1,-1]},{size:2,px:[14,2],py:[17,1],pz:[0,-1],nx:[14,13],ny:[15,15],nz:[0,0]},{size:2,px:[3,4],py:[2,3],pz:[2,2],nx:[8,3],ny:[4,0],nz:[1,-1]},{size:5,px:[8,18,18,8,7],py:[6,11,11,7,9],pz:[1,0,-1,-1,-1],nx:[5,13,5,11,5],ny:[3,11,0,8,2],nz:[2,0,2,1,2]},{size:5,px:[12,0,5,4,7],py:[15,0,4,0,9],pz:[0,-1,-1,-1,-1],nx:[8,7,4,16,6],ny:[17,12,9,10,12],nz:[0,0,1,0,0]},{size:2,px:[6,7],py:[14,1],pz:[0,-1],nx:[5,4],ny:[9,4],nz:[1,1]},{size:4,px:[8,0,22,4],py:[4,4,23,0],pz:[0,-1,-1,-1],nx:[2,4,2,5],ny:[0,1,2,9],nz:[2,1,2,1]},{size:5,px:[9,9,10,10,8],py:[0,1,1,2,0],pz:[1,1,1,1,1],nx:[4,16,16,16,6],ny:[2,11,11,11,12],nz:[2,0,-1,-1,-1]},{size:2,px:[6,6],py:[6,5],pz:[1,1],nx:[0,4],ny:[3,2],nz:[1,-1]},{size:3,px:[10,3,4],py:[5,9,8],pz:[1,-1,-1],nx:[11,23,23],ny:[7,12,11],nz:[1,0,0]},{size:3,px:[13,12,7],py:[19,19,10],pz:[0,0,1],nx:[13,5,19],ny:[20,15,22],nz:[0,-1,-1]},{size:2,px:[12,12],py:[12,13],pz:[0,0],nx:[9,10],ny:[4,4],nz:[1,-1]},{size:2,px:[0,12],py:[1,13],pz:[2,-1],nx:[2,7],ny:[2,13],nz:[2,0]},{size:2,px:[10,10],py:[8,9],pz:[1,1],nx:[19,7],ny:[23,13],nz:[0,-1]},{size:4,px:[8,7,23,15],py:[11,12,4,21],pz:[0,0,-1,-1],nx:[2,5,1,10],ny:[6,6,2,13],nz:[0,1,1,0]},{size:2,px:[10,9],py:[3,3],pz:[0,0],nx:[2,3],ny:[2,4],nz:[2,-1]},{size:2,px:[5,2],py:[3,4],pz:[2,-1],nx:[3,6],ny:[1,2],nz:[2,1]},{size:2,px:[7,11],py:[20,16],pz:[0,-1],nx:[2,4],ny:[5,20],nz:[2,0]},{size:2,px:[9,7],py:[7,5],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[4,2],py:[11,3],pz:[1,2],nx:[5,5],ny:[3,5],nz:[2,-1]},{size:2,px:[11,3],py:[11,5],pz:[1,-1],nx:[4,1],ny:[12,3],nz:[0,2]},{size:2,px:[9,11],py:[6,4],pz:[1,-1],nx:[10,20],ny:[9,18],nz:[1,0]},{size:5,px:[2,2,2,2,1],py:[15,13,16,14,7],pz:[0,0,0,0,1],nx:[15,8,9,8,4],ny:[11,6,5,5,4],nz:[0,1,1,1,-1]},{size:2,px:[12,2],py:[5,5],pz:[0,-1],nx:[3,2],ny:[7,2],nz:[1,2]},{size:2,px:[5,11],py:[1,3],pz:[2,1],nx:[10,10],ny:[3,3],nz:[1,-1]},{size:2,px:[17,11],py:[13,18],pz:[0,-1],nx:[6,9],ny:[9,4],nz:[1,1]},{size:5,px:[5,1,2,5,6],py:[14,4,9,15,23],pz:[0,2,1,0,0],nx:[4,9,18,16,17],ny:[0,1,1,0,0],nz:[2,1,0,0,0]},{size:2,px:[16,17],py:[0,0],pz:[0,0],nx:[23,23],ny:[5,4],nz:[0,-1]},{size:2,px:[13,8],py:[20,6],pz:[0,-1],nx:[5,6],ny:[12,10],nz:[0,1]},{size:2,px:[6,15],py:[15,0],pz:[0,-1],nx:[6,3],ny:[16,4],nz:[0,1]},{size:2,px:[18,20],py:[7,8],pz:[0,0],nx:[18,11],ny:[9,14],nz:[0,-1]},{size:2,px:[9,4],py:[12,6],pz:[0,1],nx:[3,15],ny:[4,4],nz:[1,-1]},{size:2,px:[0,0],py:[5,2],pz:[1,2],nx:[5,5],ny:[2,2],nz:[1,-1]},{size:2,px:[5,20],py:[1,20],pz:[1,-1],nx:[15,17],ny:[1,2],nz:[0,0]},{size:2,px:[7,2],py:[16,4],pz:[0,2],nx:[4,0],ny:[10,6],nz:[1,-1]},{size:2,px:[3,8],py:[5,0],pz:[1,-1],nx:[1,1],ny:[10,18],nz:[1,0]},{size:2,px:[22,0],py:[3,0],pz:[0,-1],nx:[23,11],ny:[4,1],nz:[0,1]},{size:3,px:[19,10,20],py:[21,8,18],pz:[0,1,0],nx:[3,6,20],ny:[5,11,14],nz:[2,-1,-1]},{size:4,px:[2,1,6,5],py:[7,4,23,22],pz:[1,2,0,0],nx:[9,19,20,4],ny:[8,11,9,2],nz:[0,-1,-1,-1]},{size:2,px:[3,6],py:[2,11],pz:[2,1],nx:[12,10],ny:[21,9],nz:[0,-1]},{size:4,px:[6,0,2,2],py:[6,1,4,1],pz:[1,-1,-1,-1],nx:[0,0,0,0],ny:[5,8,9,4],nz:[1,0,0,1]},{size:5,px:[3,13,6,11,9],py:[0,3,1,1,2],pz:[2,0,1,0,0],nx:[7,20,16,4,7],ny:[7,2,19,2,6],nz:[1,0,0,2,1]},{size:4,px:[7,5,2,6],py:[7,7,4,11],pz:[0,0,2,1],nx:[7,1,21,0],ny:[8,4,11,3],nz:[0,-1,-1,-1]},{size:2,px:[2,2],py:[3,2],pz:[2,2],nx:[8,9],ny:[3,11],nz:[1,-1]},{size:2,px:[7,13],py:[3,5],pz:[1,0],nx:[4,3],ny:[2,2],nz:[1,-1]},{size:4,px:[3,12,13,11],py:[0,1,1,1],pz:[2,0,0,0],nx:[8,9,13,0],ny:[4,1,16,3],nz:[1,-1,-1,-1]},{size:2,px:[10,1],py:[4,14],pz:[0,-1],nx:[5,10],ny:[1,2],nz:[1,0]},{size:2,px:[11,12],py:[21,21],pz:[0,0],nx:[10,11],ny:[19,19],nz:[0,0]},{size:2,px:[8,12],py:[6,21],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[11,7],py:[19,0],pz:[0,-1],nx:[6,5],ny:[9,11],nz:[1,1]},{size:5,px:[11,11,11,10,10],py:[10,12,11,13,13],pz:[0,0,0,0,-1],nx:[7,13,6,12,7],ny:[10,6,3,6,11],nz:[0,0,1,0,0]},{size:2,px:[12,11],py:[6,12],pz:[0,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:5,px:[16,15,16,15,17],py:[1,0,0,1,1],pz:[0,0,0,0,0],nx:[13,7,6,12,12],ny:[5,4,3,6,6],nz:[0,1,1,0,-1]},{size:2,px:[2,3],py:[1,3],pz:[2,1],nx:[1,5],ny:[1,3],nz:[2,-1]},{size:2,px:[6,3],py:[13,6],pz:[0,1],nx:[4,9],ny:[4,4],nz:[1,-1]},{size:2,px:[0,3],py:[4,3],pz:[1,-1],nx:[4,8],ny:[3,6],nz:[2,1]},{size:2,px:[6,3],py:[2,1],pz:[0,1],nx:[5,5],ny:[7,21],nz:[1,-1]},{size:2,px:[8,4],py:[0,0],pz:[1,-1],nx:[19,17],ny:[1,0],nz:[0,0]},{size:4,px:[8,11,5,0],py:[6,1,1,22],pz:[1,-1,-1,-1],nx:[0,10,10,1],ny:[6,12,13,4],nz:[1,0,0,1]},{size:2,px:[8,17],py:[6,13],pz:[1,0],nx:[14,17],ny:[9,3],nz:[0,-1]},{size:2,px:[5,8],py:[0,4],pz:[2,-1],nx:[9,8],ny:[1,1],nz:[0,0]},{size:2,px:[11,14],py:[13,9],pz:[0,-1],nx:[23,23],ny:[21,19],nz:[0,0]},{size:2,px:[10,9],py:[9,3],pz:[0,-1],nx:[6,3],ny:[2,1],nz:[1,2]},{size:2,px:[11,1],py:[4,4],pz:[0,-1],nx:[2,4],ny:[2,4],nz:[2,1]},{size:2,px:[5,9],py:[3,3],pz:[2,-1],nx:[17,9],ny:[12,5],nz:[0,1]},{size:2,px:[9,7],py:[18,16],pz:[0,-1],nx:[5,2],ny:[9,5],nz:[1,2]},{size:2,px:[3,6],py:[0,1],pz:[1,-1],nx:[4,5],ny:[1,0],nz:[0,0]}],alpha:[-1.149973,1.149973,-.6844773,.6844773,-.6635048,.6635048,-.4888349,.4888349,-.4267976,.4267976,-.42581,.42581,-.4815853,.4815853,-.4091859,.4091859,-.3137414,.3137414,-.333986,.333986,-.3891196,.3891196,-.4167691,.4167691,-.3186609,.3186609,-.2957171,.2957171,-.3210062,.3210062,-.2725684,.2725684,-.2452176,.2452176,-.2812662,.2812662,-.3029622,.3029622,-.3293745,.3293745,-.3441536,.3441536,-.2946918,.2946918,-.2890545,.2890545,-.1949205,.1949205,-.2176102,.2176102,-.259519,.259519,-.2690931,.2690931,-.2130294,.2130294,-.2316308,.2316308,-.2798562,.2798562,-.2146988,.2146988,-.2332089,.2332089,-.2470614,.2470614,-.22043,.22043,-.2272045,.2272045,-.2583686,.2583686,-.2072299,.2072299,-.1834971,.1834971,-.2332656,.2332656,-.3271297,.3271297,-.2401937,.2401937,-.2006316,.2006316,-.2401947,.2401947,-.2475346,.2475346,-.2579532,.2579532,-.2466235,.2466235,-.1787582,.1787582,-.2036892,.2036892,-.1665028,.1665028,-.157651,.157651,-.2036997,.2036997,-.2040734,.2040734,-.1792532,.1792532,-.2174767,.2174767,-.1876948,.1876948,-.1883137,.1883137,-.1923872,.1923872,-.2620218,.2620218,-.1659873,.1659873,-.1475948,.1475948,-.1731607,.1731607,-.2059256,.2059256,-.1586309,.1586309,-.1607668,.1607668,-.1975101,.1975101,-.2130745,.2130745,-.1898872,.1898872,-.2052598,.2052598,-.1599397,.1599397,-.1770134,.1770134,-.1888249,.1888249,-.1515406,.1515406,-.1907771,.1907771,-.1698406,.1698406,-.2079535,.2079535,-.1966967,.1966967,-.1631391,.1631391,-.2158666,.2158666,-.2891774,.2891774,-.1581556,.1581556,-.1475359,.1475359,-.1806169,.1806169,-.1782238,.1782238,-.166044,.166044,-.1576919,.1576919,-.1741775,.1741775,-.1427265,.1427265,-.169588,.169588,-.1486712,.1486712,-.1533565,.1533565,-.1601464,.1601464,-.1978414,.1978414,-.1746566,.1746566,-.1794736,.1794736,-.1896567,.1896567,-.1666197,.1666197,-.1969351,.1969351,-.2321735,.2321735,-.1592485,.1592485,-.1671464,.1671464,-.1688885,.1688885,-.1868042,.1868042,-.1301138,.1301138,-.1330094,.1330094,-.1268423,.1268423,-.1820868,.1820868,-.188102,.188102,-.1580814,.1580814,-.1302653,.1302653,-.1787262,.1787262,-.1658453,.1658453,-.1240772,.1240772,-.1315621,.1315621,-.1756341,.1756341,-.1429438,.1429438,-.1351775,.1351775,-.2035692,.2035692,-.126767,.126767,-.128847,.128847,-.1393648,.1393648,-.1755962,.1755962,-.1308445,.1308445,-.1703894,.1703894,-.1461334,.1461334,-.1368683,.1368683,-.1244085,.1244085,-.1718163,.1718163,-.1415624,.1415624,-.1752024,.1752024,-.1666463,.1666463,-.1407325,.1407325,-.1258317,.1258317,-.1416511,.1416511,-.1420816,.1420816,-.1562547,.1562547,-.1542952,.1542952,-.1158829,.1158829,-.1392875,.1392875,-.1610095,.1610095,-.154644,.154644,-.1416235,.1416235,-.2028817,.2028817,-.1106779,.1106779,-.0923166,.0923166,-.116446,.116446,-.1701578,.1701578,-.1277995,.1277995,-.1946177,.1946177,-.1394509,.1394509,-.1370145,.1370145,-.1446031,.1446031,-.1665215,.1665215,-.1435822,.1435822,-.1559354,.1559354,-.159186,.159186,-.1193338,.1193338,-.1236954,.1236954,-.1209139,.1209139,-.1267385,.1267385,-.1232397,.1232397,-.1299632,.1299632,-.130202,.130202,-.1202975,.1202975,-.1525378,.1525378,-.1123073,.1123073,-.1605678,.1605678,-.1406867,.1406867,-.1354273,.1354273,-.1393192,.1393192,-.1278263,.1278263,-.1172073,.1172073,-.1153493,.1153493,-.1356318,.1356318,-.1316614,.1316614,-.1374489,.1374489,-.1018254,.1018254,-.1473336,.1473336,-.1289687,.1289687,-.1299183,.1299183,-.1178391,.1178391,-.1619059,.1619059,-.1842569,.1842569,-.1829095,.1829095,-.1939918,.1939918,-.1395362,.1395362,-.1774673,.1774673,-.1688216,.1688216,-.1671747,.1671747,-.1850178,.1850178,-.1106695,.1106695,-.1258323,.1258323,-.1246819,.1246819,-.09892193,.09892193,-.1399638,.1399638,-.1228375,.1228375,-.1756236,.1756236,-.1360307,.1360307,-.1266574,.1266574,-.1372135,.1372135,-.1175947,.1175947,-.1330075,.1330075,-.1396152,.1396152,-.2088443,.2088443]},{count:301,threshold:-4.887516,feature:[{size:5,px:[8,11,8,14,10],py:[6,9,3,3,4],pz:[1,0,0,0,0],nx:[8,7,19,7,13],ny:[11,8,8,5,8],nz:[1,1,0,1,0]},{size:5,px:[14,3,13,12,12],py:[4,6,4,4,8],pz:[0,1,0,0,0],nx:[2,5,2,10,10],ny:[2,8,5,8,8],nz:[2,1,2,0,-1]},{size:5,px:[6,5,3,7,7],py:[2,3,1,2,2],pz:[0,0,1,0,-1],nx:[2,2,1,2,1],ny:[3,1,2,2,2],nz:[0,0,2,0,1]},{size:5,px:[3,3,6,12,8],py:[4,2,4,10,17],pz:[2,2,1,0,0],nx:[4,8,8,2,1],ny:[4,4,4,2,2],nz:[1,1,-1,-1,-1]},{size:5,px:[18,19,17,9,16],py:[1,2,2,0,2],pz:[0,0,0,1,0],nx:[23,23,22,22,22],ny:[4,3,1,0,2],nz:[0,0,0,0,0]},{size:3,px:[15,4,14],py:[23,4,18],pz:[0,2,0],nx:[7,0,5],ny:[10,4,9],nz:[1,-1,-1]},{size:5,px:[11,11,16,11,17],py:[8,6,11,7,11],pz:[0,0,0,0,0],nx:[8,4,14,14,1],ny:[4,4,8,8,5],nz:[1,1,0,-1,-1]},{size:5,px:[12,12,12,12,12],py:[13,10,11,12,12],pz:[0,0,0,0,-1],nx:[4,4,1,2,9],ny:[8,10,2,4,15],nz:[0,1,2,1,0]},{size:2,px:[19,0],py:[14,17],pz:[0,-1],nx:[20,19],ny:[15,22],nz:[0,0]},{size:5,px:[3,3,1,3,5],py:[13,15,6,14,22],pz:[0,0,1,0,0],nx:[0,0,1,0,0],ny:[11,21,23,5,5],nz:[1,0,0,2,-1]},{size:5,px:[4,2,10,4,3],py:[19,4,13,16,13],pz:[0,1,0,0,0],nx:[3,20,7,4,0],ny:[4,19,5,1,5],nz:[1,-1,-1,-1,-1]},{size:2,px:[11,5],py:[4,4],pz:[0,-1],nx:[15,3],ny:[15,1],nz:[0,2]},{size:4,px:[17,17,12,11],py:[14,15,18,18],pz:[0,0,0,0],nx:[11,4,1,0],ny:[17,20,8,5],nz:[0,-1,-1,-1]},{size:5,px:[6,2,1,2,11],py:[14,4,1,1,18],pz:[0,-1,-1,-1,-1],nx:[5,5,3,5,2],ny:[18,17,7,9,2],nz:[0,0,1,1,2]},{size:5,px:[20,19,20,15,20],py:[17,20,12,12,8],pz:[0,0,0,0,0],nx:[17,0,5,2,2],ny:[8,4,9,2,2],nz:[0,-1,-1,-1,-1]},{size:2,px:[6,8],py:[7,11],pz:[1,-1],nx:[7,8],ny:[7,10],nz:[1,1]},{size:5,px:[15,16,14,8,8],py:[2,2,2,0,0],pz:[0,0,0,1,-1],nx:[20,11,21,18,19],ny:[3,6,5,1,2],nz:[0,1,0,0,0]},{size:4,px:[17,18,9,8],py:[23,21,7,8],pz:[0,0,1,1],nx:[8,17,10,18],ny:[4,12,2,1],nz:[1,-1,-1,-1]},{size:5,px:[2,2,9,4,8],py:[7,3,12,12,23],pz:[1,1,0,0,0],nx:[0,0,0,0,0],ny:[3,1,2,4,4],nz:[0,0,0,0,-1]},{size:3,px:[7,8,5],py:[22,23,9],pz:[0,0,1],nx:[9,4,2],ny:[21,4,0],nz:[0,-1,-1]},{size:2,px:[3,3],py:[7,7],pz:[1,-1],nx:[3,2],ny:[4,2],nz:[1,2]},{size:5,px:[15,11,10,3,17],py:[0,1,2,3,1],pz:[0,0,0,2,0],nx:[5,8,4,3,3],ny:[9,4,7,10,10],nz:[1,1,1,1,-1]},{size:3,px:[22,11,22],py:[12,5,14],pz:[0,1,0],nx:[23,23,3],ny:[22,23,8],nz:[0,0,-1]},{size:2,px:[3,11],py:[7,5],pz:[1,-1],nx:[8,2],ny:[14,5],nz:[0,2]},{size:4,px:[17,16,2,4],py:[14,13,5,0],pz:[0,0,-1,-1],nx:[8,9,15,8],ny:[8,9,14,7],nz:[1,1,0,1]},{size:2,px:[5,16],py:[6,13],pz:[1,-1],nx:[2,1],ny:[4,2],nz:[1,2]},{size:5,px:[1,0,1,2,1],py:[15,2,16,19,12],pz:[0,2,0,0,0],nx:[8,7,4,9,9],ny:[5,11,4,5,5],nz:[1,1,1,1,-1]},{size:2,px:[8,7],py:[11,12],pz:[0,0],nx:[9,1],ny:[10,16],nz:[0,-1]},{size:2,px:[15,13],py:[17,10],pz:[0,-1],nx:[7,4],ny:[8,4],nz:[1,2]},{size:5,px:[11,10,7,8,9],py:[0,0,1,1,1],pz:[0,0,0,0,0],nx:[4,5,4,5,6],ny:[1,0,2,1,0],nz:[0,0,0,0,-1]},{size:2,px:[2,2],py:[4,3],pz:[2,2],nx:[3,21],ny:[4,20],nz:[1,-1]},{size:5,px:[10,11,5,2,11],py:[12,10,6,11,11],pz:[0,0,1,0,0],nx:[4,15,16,7,7],ny:[5,10,11,10,10],nz:[1,0,0,0,-1]},{size:5,px:[13,14,1,11,11],py:[2,2,3,2,2],pz:[0,0,2,0,-1],nx:[3,0,0,1,0],ny:[23,15,14,9,8],nz:[0,0,0,1,1]},{size:2,px:[17,2],py:[13,5],pz:[0,-1],nx:[4,9],ny:[2,4],nz:[2,1]},{size:2,px:[10,5],py:[4,1],pz:[0,-1],nx:[11,3],ny:[3,0],nz:[0,2]},{size:2,px:[5,3],py:[3,3],pz:[2,-1],nx:[11,23],ny:[8,14],nz:[1,0]},{size:3,px:[22,22,22],py:[16,18,9],pz:[0,0,0],nx:[13,2,0],ny:[17,3,5],nz:[0,-1,-1]},{size:5,px:[13,10,13,14,11],py:[2,2,1,2,1],pz:[0,0,0,0,0],nx:[3,3,8,6,6],ny:[2,5,4,11,11],nz:[2,2,1,1,-1]},{size:3,px:[12,1,1],py:[14,0,1],pz:[0,-1,-1],nx:[8,15,7],ny:[1,2,0],nz:[1,0,1]},{size:2,px:[4,5],py:[20,23],pz:[0,0],nx:[3,3],ny:[10,2],nz:[1,-1]},{size:2,px:[2,4],py:[7,2],pz:[1,-1],nx:[4,3],ny:[23,16],nz:[0,0]},{size:3,px:[3,3,6],py:[5,2,4],pz:[2,2,1],nx:[3,1,2],ny:[5,17,0],nz:[1,-1,-1]},{size:2,px:[14,8],py:[17,6],pz:[0,1],nx:[13,10],ny:[16,9],nz:[0,-1]},{size:5,px:[15,7,14,13,14],py:[1,0,0,0,1],pz:[0,1,0,0,0],nx:[4,4,4,8,8],ny:[5,3,2,10,10],nz:[2,2,2,1,-1]},{size:5,px:[8,9,4,5,4],py:[13,12,9,5,7],pz:[0,0,1,1,1],nx:[22,21,22,22,22],ny:[4,0,3,2,2],nz:[0,0,0,0,-1]},{size:2,px:[17,17],py:[16,13],pz:[0,0],nx:[14,21],ny:[8,0],nz:[0,-1]},{size:2,px:[16,10],py:[4,9],pz:[0,-1],nx:[16,10],ny:[3,3],nz:[0,1]},{size:5,px:[1,1,0,1,0],py:[17,16,7,15,8],pz:[0,0,1,0,0],nx:[4,3,8,9,7],ny:[3,3,6,6,6],nz:[1,1,0,0,-1]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[8,3],ny:[4,3],nz:[1,-1]},{size:2,px:[10,2],py:[17,4],pz:[0,2],nx:[10,12],ny:[15,14],nz:[0,-1]},{size:2,px:[11,11],py:[14,12],pz:[0,0],nx:[9,10],ny:[13,11],nz:[0,0]},{size:2,px:[12,13],py:[5,5],pz:[0,0],nx:[3,4],ny:[4,1],nz:[1,-1]},{size:5,px:[7,10,8,11,11],py:[13,2,12,2,2],pz:[0,0,0,0,-1],nx:[10,1,1,10,1],ny:[12,5,3,13,1],nz:[0,1,1,0,2]},{size:2,px:[6,10],py:[4,2],pz:[1,-1],nx:[4,6],ny:[4,9],nz:[1,1]},{size:2,px:[20,20],py:[21,22],pz:[0,0],nx:[15,8],ny:[5,5],nz:[0,-1]},{size:2,px:[4,3],py:[3,3],pz:[2,2],nx:[9,17],ny:[4,15],nz:[1,-1]},{size:3,px:[2,2,4],py:[3,3,7],pz:[2,-1,-1],nx:[7,4,4],ny:[6,5,4],nz:[1,2,2]},{size:5,px:[8,9,16,17,17],py:[1,2,1,1,1],pz:[1,1,0,0,-1],nx:[2,2,4,2,4],ny:[16,14,22,15,21],nz:[0,0,0,0,0]},{size:2,px:[9,9],py:[18,0],pz:[0,-1],nx:[2,5],ny:[5,8],nz:[2,1]},{size:2,px:[7,8],py:[11,11],pz:[0,0],nx:[15,5],ny:[8,8],nz:[0,-1]},{size:2,px:[0,3],py:[4,3],pz:[2,-1],nx:[1,6],ny:[4,14],nz:[2,0]},{size:2,px:[6,12],py:[7,11],pz:[1,-1],nx:[0,0],ny:[7,12],nz:[1,0]},{size:2,px:[3,7],py:[10,22],pz:[1,0],nx:[4,3],ny:[10,0],nz:[1,-1]},{size:2,px:[5,19],py:[4,21],pz:[2,-1],nx:[11,11],ny:[8,9],nz:[1,1]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[4,20],ny:[4,5],nz:[1,-1]},{size:5,px:[11,23,23,23,23],py:[7,13,19,20,21],pz:[1,0,0,0,0],nx:[4,3,2,8,8],ny:[11,5,5,23,23],nz:[1,1,2,0,-1]},{size:2,px:[4,1],py:[0,2],pz:[0,0],nx:[0,6],ny:[0,11],nz:[0,-1]},{size:2,px:[11,8],py:[12,1],pz:[0,-1],nx:[23,23],ny:[13,12],nz:[0,0]},{size:5,px:[23,11,23,11,11],py:[13,7,12,5,6],pz:[0,1,0,1,1],nx:[6,3,8,7,7],ny:[12,4,4,11,11],nz:[0,1,1,0,-1]},{size:2,px:[20,5],py:[15,5],pz:[0,-1],nx:[10,10],ny:[11,10],nz:[1,1]},{size:2,px:[11,4],py:[19,8],pz:[0,1],nx:[11,19],ny:[18,2],nz:[0,-1]},{size:2,px:[14,6],py:[3,4],pz:[0,-1],nx:[8,15],ny:[1,0],nz:[1,0]},{size:4,px:[14,5,13,12],py:[23,3,23,23],pz:[0,1,0,0],nx:[12,0,1,4],ny:[21,3,2,4],nz:[0,-1,-1,-1]},{size:2,px:[19,5],py:[12,2],pz:[0,-1],nx:[4,7],ny:[3,5],nz:[2,1]},{size:2,px:[0,8],py:[5,3],pz:[2,-1],nx:[5,22],ny:[3,11],nz:[2,0]},{size:2,px:[2,6],py:[3,12],pz:[2,0],nx:[3,5],ny:[4,2],nz:[1,-1]},{size:2,px:[5,5],py:[0,6],pz:[2,-1],nx:[14,6],ny:[4,2],nz:[0,1]},{size:2,px:[16,11],py:[1,0],pz:[0,-1],nx:[4,8],ny:[4,10],nz:[2,1]},{size:2,px:[9,4],py:[4,3],pz:[1,1],nx:[5,8],ny:[0,10],nz:[2,-1]},{size:2,px:[16,1],py:[22,1],pz:[0,-1],nx:[2,2],ny:[4,2],nz:[2,2]},{size:2,px:[12,2],py:[11,2],pz:[0,-1],nx:[5,5],ny:[1,0],nz:[2,2]},{size:2,px:[11,11],py:[4,3],pz:[1,1],nx:[7,5],ny:[4,0],nz:[1,-1]},{size:2,px:[9,2],py:[22,3],pz:[0,2],nx:[4,9],ny:[10,11],nz:[1,-1]},{size:2,px:[2,4],py:[8,10],pz:[1,-1],nx:[5,3],ny:[23,18],nz:[0,0]},{size:2,px:[12,6],py:[21,9],pz:[0,-1],nx:[11,23],ny:[6,10],nz:[1,0]},{size:2,px:[9,9],py:[8,7],pz:[1,1],nx:[18,8],ny:[18,6],nz:[0,-1]},{size:2,px:[13,3],py:[19,0],pz:[0,-1],nx:[6,5],ny:[9,11],nz:[1,1]},{size:5,px:[2,10,9,7,8],py:[0,1,0,1,0],pz:[2,0,0,0,0],nx:[3,4,6,8,8],ny:[2,4,9,4,4],nz:[2,1,1,1,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[9,4],ny:[4,2],nz:[1,-1]},{size:2,px:[0,4],py:[23,3],pz:[0,-1],nx:[12,9],ny:[2,2],nz:[0,0]},{size:2,px:[4,2],py:[10,3],pz:[1,2],nx:[0,2],ny:[23,5],nz:[0,-1]},{size:2,px:[12,14],py:[18,0],pz:[0,-1],nx:[12,8],ny:[16,10],nz:[0,1]},{size:4,px:[10,18,7,5],py:[14,8,0,3],pz:[0,-1,-1,-1],nx:[8,6,8,5],ny:[11,12,5,5],nz:[0,0,1,1]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[8,8],ny:[4,2],nz:[1,-1]},{size:2,px:[12,10],py:[20,20],pz:[0,0],nx:[11,10],ny:[19,19],nz:[0,0]},{size:2,px:[17,10],py:[16,20],pz:[0,-1],nx:[8,7],ny:[4,8],nz:[1,1]},{size:3,px:[2,1,3],py:[20,4,21],pz:[0,2,0],nx:[3,4,0],ny:[10,1,0],nz:[1,-1,-1]},{size:5,px:[6,7,3,6,6],py:[15,14,7,16,19],pz:[0,0,1,0,0],nx:[0,0,0,0,0],ny:[18,19,16,17,17],nz:[0,0,0,0,-1]},{size:2,px:[8,16],py:[6,12],pz:[1,0],nx:[8,15],ny:[4,10],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[1,3,2,0,4],pz:[2,2,2,2,1],nx:[13,8,14,4,7],ny:[23,6,23,3,9],nz:[0,1,0,2,-1]},{size:2,px:[3,6],py:[3,5],pz:[2,1],nx:[10,8],ny:[11,6],nz:[0,-1]},{size:2,px:[11,10],py:[4,4],pz:[0,0],nx:[8,5],ny:[4,9],nz:[1,-1]},{size:5,px:[15,18,9,16,4],py:[12,13,6,23,3],pz:[0,0,1,0,2],nx:[6,3,6,2,7],ny:[2,3,0,1,0],nz:[0,0,0,1,0]},{size:2,px:[4,18],py:[12,13],pz:[0,-1],nx:[2,8],ny:[3,4],nz:[2,1]},{size:2,px:[4,2],py:[10,4],pz:[1,2],nx:[3,3],ny:[5,0],nz:[2,-1]},{size:2,px:[9,19],py:[7,8],pz:[1,0],nx:[8,3],ny:[4,0],nz:[1,-1]},{size:2,px:[6,0],py:[6,0],pz:[0,-1],nx:[0,0],ny:[7,2],nz:[1,2]},{size:2,px:[8,8],py:[0,0],pz:[1,-1],nx:[17,18],ny:[0,2],nz:[0,0]},{size:4,px:[13,4,4,1],py:[14,7,3,5],pz:[0,-1,-1,-1],nx:[3,16,3,7],ny:[1,15,5,13],nz:[2,0,2,0]},{size:2,px:[4,9],py:[6,11],pz:[1,0],nx:[3,23],ny:[4,8],nz:[1,-1]},{size:5,px:[9,17,4,16,16],py:[2,3,1,3,3],pz:[1,0,2,0,-1],nx:[2,3,3,2,3],ny:[1,7,2,3,3],nz:[2,1,1,1,1]},{size:2,px:[10,5],py:[22,9],pz:[0,1],nx:[10,3],ny:[21,2],nz:[0,-1]},{size:2,px:[11,11],py:[6,3],pz:[0,-1],nx:[8,5],ny:[4,3],nz:[1,1]},{size:2,px:[10,5],py:[8,3],pz:[0,-1],nx:[14,5],ny:[14,2],nz:[0,2]},{size:2,px:[7,8],py:[3,2],pz:[0,-1],nx:[8,2],ny:[18,2],nz:[0,2]},{size:2,px:[1,1],py:[19,11],pz:[0,1],nx:[9,4],ny:[5,1],nz:[0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,3],ny:[4,4],nz:[1,-1]},{size:5,px:[7,15,13,14,4],py:[6,12,9,11,4],pz:[1,0,0,0,2],nx:[7,3,8,4,5],ny:[0,3,0,2,1],nz:[0,0,0,0,0]},{size:5,px:[10,13,7,8,9],py:[0,1,1,0,1],pz:[0,0,0,0,0],nx:[7,4,4,4,8],ny:[8,3,4,2,4],nz:[1,2,2,2,1]},{size:2,px:[6,1],py:[6,0],pz:[1,-1],nx:[11,7],ny:[3,2],nz:[0,1]},{size:2,px:[13,0],py:[13,2],pz:[0,-1],nx:[0,1],ny:[13,16],nz:[0,0]},{size:2,px:[8,17],py:[6,13],pz:[1,0],nx:[8,1],ny:[4,16],nz:[1,-1]},{size:5,px:[12,11,3,6,17],py:[4,4,1,2,14],pz:[0,0,2,1,0],nx:[6,23,23,6,23],ny:[5,7,6,6,14],nz:[1,0,0,1,0]},{size:2,px:[5,22],py:[4,17],pz:[2,-1],nx:[4,8],ny:[5,7],nz:[2,1]},{size:2,px:[15,14],py:[1,1],pz:[0,0],nx:[4,7],ny:[2,4],nz:[2,-1]},{size:2,px:[15,17],py:[12,7],pz:[0,-1],nx:[14,10],ny:[11,4],nz:[0,1]},{size:4,px:[10,2,9,15],py:[5,11,1,13],pz:[0,-1,-1,-1],nx:[11,3,3,13],ny:[1,1,0,1],nz:[0,2,2,0]},{size:2,px:[7,21],py:[15,22],pz:[0,-1],nx:[4,9],ny:[8,14],nz:[1,0]},{size:2,px:[6,5],py:[21,2],pz:[0,-1],nx:[3,5],ny:[11,21],nz:[1,0]},{size:2,px:[17,7],py:[2,0],pz:[0,-1],nx:[4,8],ny:[5,11],nz:[2,1]},{size:2,px:[11,8],py:[10,4],pz:[0,-1],nx:[13,12],ny:[3,3],nz:[0,0]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[7,1],ny:[8,2],nz:[0,-1]},{size:5,px:[0,0,1,0,0],py:[12,4,14,0,2],pz:[0,1,0,2,2],nx:[9,5,8,4,4],ny:[6,3,6,3,3],nz:[0,1,0,1,-1]},{size:5,px:[8,0,0,3,2],py:[6,5,0,8,2],pz:[1,-1,-1,-1,-1],nx:[23,7,22,11,4],ny:[12,6,14,4,3],nz:[0,1,0,1,2]},{size:4,px:[12,12,4,8],py:[12,11,3,10],pz:[0,0,-1,-1],nx:[0,0,0,0],ny:[2,1,0,3],nz:[1,2,2,1]},{size:2,px:[10,6],py:[7,6],pz:[1,-1],nx:[16,4],ny:[12,2],nz:[0,2]},{size:5,px:[2,1,3,3,3],py:[14,8,20,21,21],pz:[0,1,0,0,-1],nx:[20,10,21,21,21],ny:[23,11,21,23,20],nz:[0,1,0,0,0]},{size:2,px:[6,13],py:[2,4],pz:[1,0],nx:[7,21],ny:[8,0],nz:[0,-1]},{size:2,px:[12,3],py:[17,4],pz:[0,2],nx:[11,10],ny:[15,7],nz:[0,-1]},{size:4,px:[11,0,19,2],py:[15,2,23,10],pz:[0,-1,-1,-1],nx:[6,8,16,2],ny:[13,11,10,2],nz:[0,0,0,2]},{size:2,px:[6,3],py:[14,7],pz:[0,1],nx:[3,1],ny:[4,1],nz:[1,-1]},{size:4,px:[12,17,5,10],py:[19,15,14,3],pz:[0,-1,-1,-1],nx:[4,12,6,12],ny:[4,18,9,22],nz:[1,0,1,0]},{size:2,px:[8,3],py:[13,5],pz:[0,-1],nx:[3,4],ny:[4,9],nz:[1,1]},{size:5,px:[6,5,4,5,3],py:[2,1,2,2,0],pz:[0,0,0,0,1],nx:[7,4,9,18,18],ny:[4,4,7,14,14],nz:[1,1,1,0,-1]},{size:4,px:[8,3,20,1],py:[6,3,18,0],pz:[1,-1,-1,-1],nx:[13,11,5,22],ny:[12,6,2,17],nz:[0,1,2,0]},{size:2,px:[6,3],py:[6,3],pz:[1,2],nx:[8,5],ny:[4,2],nz:[1,-1]},{size:2,px:[21,7],py:[14,7],pz:[0,1],nx:[16,11],ny:[14,6],nz:[0,-1]},{size:2,px:[10,4],py:[3,1],pz:[0,-1],nx:[9,5],ny:[0,0],nz:[0,1]},{size:2,px:[4,10],py:[5,8],pz:[2,1],nx:[5,14],ny:[9,7],nz:[1,-1]},{size:2,px:[9,2],py:[23,4],pz:[0,2],nx:[2,2],ny:[5,5],nz:[2,-1]},{size:5,px:[10,9,11,10,10],py:[2,2,1,1,1],pz:[0,0,0,0,-1],nx:[2,3,2,4,5],ny:[4,10,2,4,3],nz:[2,1,1,0,0]},{size:2,px:[11,4],py:[13,4],pz:[0,-1],nx:[8,4],ny:[4,1],nz:[1,2]},{size:2,px:[17,5],py:[15,1],pz:[0,-1],nx:[20,19],ny:[14,14],nz:[0,0]},{size:2,px:[2,2],py:[20,18],pz:[0,0],nx:[2,1],ny:[23,5],nz:[0,-1]},{size:2,px:[10,1],py:[18,3],pz:[0,2],nx:[11,3],ny:[16,5],nz:[0,-1]},{size:2,px:[3,8],py:[6,10],pz:[1,0],nx:[9,0],ny:[9,3],nz:[0,-1]},{size:2,px:[20,10],py:[21,7],pz:[0,1],nx:[7,2],ny:[3,5],nz:[1,-1]},{size:2,px:[10,6],py:[4,7],pz:[1,-1],nx:[23,5],ny:[9,2],nz:[0,2]},{size:5,px:[2,4,5,3,4],py:[0,1,1,2,2],pz:[1,0,0,0,0],nx:[1,0,1,1,1],ny:[2,1,0,1,1],nz:[0,1,0,0,-1]},{size:2,px:[8,16],py:[7,13],pz:[1,0],nx:[8,3],ny:[4,16],nz:[1,-1]},{size:2,px:[17,15],py:[7,19],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[4,3],py:[11,5],pz:[1,2],nx:[7,8],ny:[9,4],nz:[1,-1]},{size:2,px:[23,11],py:[9,6],pz:[0,1],nx:[22,22],ny:[23,23],nz:[0,-1]},{size:2,px:[23,23],py:[21,20],pz:[0,0],nx:[2,2],ny:[5,4],nz:[1,-1]},{size:2,px:[17,4],py:[12,2],pz:[0,-1],nx:[9,8],ny:[4,5],nz:[1,1]},{size:2,px:[6,14],py:[2,4],pz:[1,0],nx:[7,18],ny:[1,1],nz:[1,-1]},{size:2,px:[20,22],py:[1,2],pz:[0,0],nx:[23,23],ny:[1,1],nz:[0,-1]},{size:2,px:[0,1],py:[9,10],pz:[1,1],nx:[8,0],ny:[15,0],nz:[0,-1]},{size:3,px:[11,11,6],py:[10,11,11],pz:[0,0,-1],nx:[23,23,23],ny:[19,21,20],nz:[0,0,0]},{size:5,px:[23,23,23,6,6],py:[21,22,22,3,6],pz:[0,0,-1,-1,-1],nx:[8,8,8,17,4],ny:[7,10,8,16,5],nz:[1,1,1,0,2]},{size:2,px:[10,23],py:[1,22],pz:[0,-1],nx:[7,2],ny:[11,2],nz:[0,2]},{size:2,px:[7,14],py:[3,10],pz:[1,-1],nx:[5,3],ny:[2,1],nz:[0,1]},{size:2,px:[5,3],py:[13,7],pz:[0,1],nx:[4,10],ny:[4,0],nz:[1,-1]},{size:2,px:[10,0],py:[15,6],pz:[0,-1],nx:[3,6],ny:[1,2],nz:[2,1]},{size:2,px:[13,4],py:[18,17],pz:[0,-1],nx:[7,6],ny:[10,7],nz:[1,1]},{size:2,px:[12,11],py:[3,8],pz:[0,-1],nx:[7,8],ny:[4,4],nz:[1,1]},{size:2,px:[17,4],py:[5,7],pz:[0,1],nx:[17,10],ny:[4,0],nz:[0,-1]},{size:5,px:[16,8,16,15,15],py:[0,0,1,0,1],pz:[0,1,0,0,0],nx:[7,4,7,4,4],ny:[7,5,8,1,1],nz:[1,2,1,2,-1]},{size:2,px:[13,11],py:[5,6],pz:[0,-1],nx:[4,5],ny:[2,2],nz:[1,1]},{size:2,px:[3,6],py:[3,6],pz:[2,1],nx:[8,4],ny:[4,3],nz:[1,-1]},{size:2,px:[10,16],py:[8,10],pz:[0,0],nx:[7,2],ny:[3,3],nz:[1,-1]},{size:2,px:[6,8],py:[4,11],pz:[1,0],nx:[10,1],ny:[9,20],nz:[0,-1]},{size:2,px:[5,1],py:[4,2],pz:[2,-1],nx:[23,23],ny:[15,16],nz:[0,0]},{size:5,px:[9,8,2,4,9],py:[1,1,0,1,2],pz:[0,0,2,1,0],nx:[8,3,8,4,4],ny:[6,2,4,2,2],nz:[1,2,1,2,-1]},{size:2,px:[13,6],py:[10,5],pz:[0,-1],nx:[13,7],ny:[6,3],nz:[0,1]},{size:2,px:[11,5],py:[10,5],pz:[1,2],nx:[10,8],ny:[10,9],nz:[1,-1]},{size:2,px:[7,4],py:[6,3],pz:[1,2],nx:[9,14],ny:[4,9],nz:[1,-1]},{size:3,px:[5,2,15],py:[3,1,22],pz:[1,-1,-1],nx:[15,9,4],ny:[0,1,0],nz:[0,1,2]},{size:2,px:[10,19],py:[9,21],pz:[1,0],nx:[2,17],ny:[5,14],nz:[2,-1]},{size:3,px:[16,2,1],py:[2,10,4],pz:[0,-1,-1],nx:[4,4,9],ny:[3,2,6],nz:[2,2,1]},{size:2,px:[10,2],py:[6,10],pz:[1,-1],nx:[21,22],ny:[16,12],nz:[0,0]},{size:2,px:[7,16],py:[4,23],pz:[0,-1],nx:[7,3],ny:[3,3],nz:[0,1]},{size:2,px:[1,1],py:[13,14],pz:[0,0],nx:[1,2],ny:[18,3],nz:[0,-1]},{size:2,px:[18,5],py:[13,4],pz:[0,-1],nx:[4,13],ny:[2,11],nz:[2,0]},{size:2,px:[18,17],py:[3,3],pz:[0,0],nx:[19,19],ny:[1,1],nz:[0,-1]},{size:2,px:[9,5],py:[0,5],pz:[1,-1],nx:[12,3],ny:[5,1],nz:[0,2]},{size:2,px:[5,3],py:[2,1],pz:[1,2],nx:[18,4],ny:[4,1],nz:[0,-1]},{size:5,px:[13,13,2,10,15],py:[11,12,13,17,23],pz:[0,-1,-1,-1,-1],nx:[12,13,4,3,8],ny:[4,4,1,0,3],nz:[0,0,2,2,1]},{size:2,px:[9,3],py:[2,2],pz:[0,-1],nx:[4,2],ny:[7,2],nz:[1,2]},{size:2,px:[13,4],py:[5,1],pz:[0,-1],nx:[18,4],ny:[12,2],nz:[0,2]},{size:2,px:[19,4],py:[11,1],pz:[0,-1],nx:[4,7],ny:[2,2],nz:[2,1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,2],ny:[4,5],nz:[1,-1]},{size:2,px:[4,0],py:[7,7],pz:[0,-1],nx:[4,9],ny:[0,2],nz:[2,1]},{size:2,px:[4,9],py:[0,2],pz:[2,1],nx:[6,4],ny:[3,4],nz:[0,-1]},{size:2,px:[4,2],py:[9,4],pz:[1,2],nx:[13,5],ny:[18,2],nz:[0,-1]},{size:3,px:[5,23,23],py:[2,8,7],pz:[2,0,0],nx:[10,12,1],ny:[4,1,0],nz:[1,-1,-1]},{size:2,px:[13,0],py:[3,3],pz:[0,-1],nx:[4,4],ny:[2,3],nz:[2,2]},{size:2,px:[6,5],py:[10,5],pz:[0,-1],nx:[0,0],ny:[4,11],nz:[1,0]},{size:2,px:[11,2],py:[14,11],pz:[0,-1],nx:[10,11],ny:[4,13],nz:[1,0]},{size:2,px:[5,6],py:[21,23],pz:[0,0],nx:[7,0],ny:[21,3],nz:[0,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[8,5],ny:[4,2],nz:[1,-1]},{size:2,px:[7,6],py:[8,8],pz:[0,0],nx:[6,14],ny:[9,15],nz:[0,-1]},{size:2,px:[16,6],py:[4,8],pz:[0,-1],nx:[16,8],ny:[0,1],nz:[0,1]},{size:4,px:[3,6,0,9],
py:[0,8,5,23],pz:[1,-1,-1,-1],nx:[12,2,6,10],ny:[5,0,3,5],nz:[0,2,1,0]},{size:2,px:[3,6],py:[7,13],pz:[1,0],nx:[3,9],ny:[4,9],nz:[1,-1]},{size:2,px:[2,5],py:[8,23],pz:[1,0],nx:[8,9],ny:[15,0],nz:[0,-1]},{size:2,px:[13,18],py:[8,0],pz:[0,-1],nx:[1,1],ny:[9,8],nz:[1,1]},{size:2,px:[2,7],py:[4,21],pz:[2,0],nx:[13,11],ny:[8,9],nz:[0,-1]},{size:2,px:[5,4],py:[8,8],pz:[0,0],nx:[6,1],ny:[8,5],nz:[0,-1]},{size:2,px:[7,3],py:[20,7],pz:[0,-1],nx:[4,3],ny:[10,4],nz:[1,1]},{size:2,px:[9,9],py:[8,7],pz:[1,-1],nx:[1,2],ny:[4,9],nz:[2,1]},{size:2,px:[5,10],py:[5,13],pz:[1,-1],nx:[3,6],ny:[1,2],nz:[2,1]},{size:2,px:[12,5],py:[6,3],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[10,10],py:[4,4],pz:[1,-1],nx:[5,11],ny:[2,5],nz:[2,1]},{size:5,px:[11,23,11,23,11],py:[4,9,5,10,6],pz:[1,0,1,0,1],nx:[7,14,13,7,3],ny:[9,5,6,4,4],nz:[0,0,0,1,-1]},{size:2,px:[8,5],py:[0,0],pz:[1,-1],nx:[9,20],ny:[1,4],nz:[1,0]},{size:2,px:[19,20],py:[0,3],pz:[0,0],nx:[4,6],ny:[11,3],nz:[1,-1]},{size:4,px:[13,5,20,5],py:[14,3,23,4],pz:[0,-1,-1,-1],nx:[8,15,7,16],ny:[8,14,6,15],nz:[1,0,1,0]},{size:2,px:[10,20],py:[5,17],pz:[0,-1],nx:[7,3],ny:[10,1],nz:[0,2]},{size:3,px:[1,12,7],py:[3,7,10],pz:[2,0,0],nx:[2,2,3],ny:[3,2,2],nz:[1,-1,-1]},{size:3,px:[10,5,7],py:[7,10,10],pz:[1,-1,-1],nx:[10,10,18],ny:[10,9,23],nz:[1,1,0]},{size:3,px:[14,14,4],py:[3,3,4],pz:[0,-1,-1],nx:[4,4,8],ny:[3,2,6],nz:[2,2,1]},{size:2,px:[4,12],py:[4,17],pz:[2,0],nx:[13,1],ny:[15,4],nz:[0,-1]},{size:2,px:[10,20],py:[9,22],pz:[0,-1],nx:[9,4],ny:[2,0],nz:[1,2]},{size:2,px:[11,2],py:[3,6],pz:[0,-1],nx:[2,4],ny:[2,4],nz:[2,1]},{size:3,px:[15,10,1],py:[12,2,3],pz:[0,-1,-1],nx:[7,5,10],ny:[2,1,1],nz:[0,1,0]},{size:5,px:[9,11,10,12,12],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[8,4,16,5,10],ny:[4,4,10,3,6],nz:[1,1,0,1,0]},{size:2,px:[0,10],py:[3,5],pz:[2,-1],nx:[3,6],ny:[0,1],nz:[2,1]},{size:5,px:[7,8,7,2,12],py:[14,13,13,16,0],pz:[0,0,-1,-1,-1],nx:[10,1,10,1,1],ny:[13,2,12,4,9],nz:[0,2,0,1,0]},{size:3,px:[6,14,13],py:[1,2,1],pz:[1,0,0],nx:[8,21,10],ny:[4,23,12],nz:[1,-1,-1]},{size:2,px:[19,19],py:[22,21],pz:[0,0],nx:[20,1],ny:[22,5],nz:[0,-1]},{size:2,px:[13,12],py:[19,22],pz:[0,-1],nx:[2,3],ny:[0,1],nz:[2,1]},{size:4,px:[11,9,21,4],py:[13,3,19,5],pz:[0,-1,-1,-1],nx:[9,9,9,5],ny:[13,14,12,6],nz:[0,0,0,1]},{size:4,px:[11,12,13,14],py:[22,22,22,22],pz:[0,0,0,0],nx:[13,2,4,5],ny:[20,0,0,6],nz:[0,-1,-1,-1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,1],ny:[4,3],nz:[1,-1]},{size:2,px:[0,0],py:[0,1],pz:[2,2],nx:[9,4],ny:[6,5],nz:[1,-1]},{size:2,px:[17,0],py:[10,1],pz:[0,-1],nx:[9,4],ny:[3,2],nz:[1,2]},{size:2,px:[10,4],py:[3,1],pz:[1,2],nx:[12,18],ny:[17,4],nz:[0,-1]},{size:3,px:[2,3,4],py:[4,3,9],pz:[2,2,1],nx:[0,3,17],ny:[0,1,18],nz:[0,-1,-1]},{size:2,px:[7,3],py:[12,6],pz:[0,1],nx:[5,1],ny:[11,1],nz:[1,-1]},{size:2,px:[10,17],py:[20,6],pz:[0,-1],nx:[5,2],ny:[9,5],nz:[1,2]},{size:2,px:[8,11],py:[18,2],pz:[0,-1],nx:[5,4],ny:[9,9],nz:[1,1]},{size:2,px:[16,15],py:[2,2],pz:[0,0],nx:[17,12],ny:[2,2],nz:[0,-1]},{size:2,px:[18,4],py:[5,5],pz:[0,-1],nx:[7,5],ny:[23,19],nz:[0,0]},{size:2,px:[12,13],py:[23,23],pz:[0,0],nx:[7,11],ny:[10,20],nz:[1,-1]},{size:2,px:[5,10],py:[3,18],pz:[2,-1],nx:[9,9],ny:[5,6],nz:[1,1]},{size:2,px:[5,10],py:[2,4],pz:[1,0],nx:[4,23],ny:[4,20],nz:[1,-1]},{size:2,px:[2,3],py:[8,1],pz:[1,-1],nx:[15,12],ny:[2,1],nz:[0,0]},{size:2,px:[4,7],py:[3,10],pz:[2,1],nx:[10,1],ny:[20,4],nz:[0,-1]},{size:2,px:[11,11],py:[10,11],pz:[0,0],nx:[22,3],ny:[5,4],nz:[0,-1]},{size:5,px:[8,17,17,9,18],py:[0,1,0,1,0],pz:[1,0,0,1,0],nx:[11,8,9,4,4],ny:[23,4,6,2,2],nz:[0,1,0,2,-1]},{size:2,px:[5,5],py:[4,4],pz:[1,-1],nx:[13,4],ny:[9,2],nz:[0,2]},{size:5,px:[9,4,8,7,7],py:[3,1,3,3,3],pz:[0,1,0,0,-1],nx:[4,2,5,3,2],ny:[1,15,1,4,13],nz:[0,0,0,0,0]},{size:2,px:[17,7],py:[13,7],pz:[0,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[1,2],py:[1,12],pz:[2,0],nx:[9,21],ny:[5,4],nz:[0,-1]},{size:2,px:[12,0],py:[14,1],pz:[0,-1],nx:[1,1],ny:[19,10],nz:[0,1]},{size:2,px:[16,1],py:[5,9],pz:[0,-1],nx:[16,15],ny:[3,3],nz:[0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[8,4],ny:[4,0],nz:[1,-1]},{size:2,px:[11,6],py:[17,15],pz:[0,0],nx:[11,0],ny:[16,4],nz:[0,-1]},{size:4,px:[12,11,0,3],py:[16,8,7,1],pz:[0,-1,-1,-1],nx:[10,5,10,5],ny:[11,9,10,8],nz:[0,1,0,1]},{size:2,px:[3,6],py:[7,13],pz:[1,0],nx:[4,14],ny:[4,16],nz:[1,-1]},{size:2,px:[7,17],py:[6,13],pz:[0,-1],nx:[4,8],ny:[4,9],nz:[2,1]},{size:2,px:[15,11],py:[3,2],pz:[0,-1],nx:[4,15],ny:[1,2],nz:[2,0]},{size:2,px:[10,11],py:[18,4],pz:[0,-1],nx:[5,5],ny:[8,9],nz:[1,1]},{size:2,px:[8,4],py:[7,4],pz:[1,2],nx:[4,3],ny:[5,7],nz:[2,-1]},{size:2,px:[12,4],py:[15,4],pz:[0,-1],nx:[11,8],ny:[14,19],nz:[0,0]},{size:2,px:[18,13],py:[13,20],pz:[0,0],nx:[13,4],ny:[18,2],nz:[0,-1]},{size:2,px:[12,4],py:[6,3],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[21,5,11,5,10],py:[1,1,3,0,0],pz:[0,2,1,2,1],nx:[7,14,15,4,8],ny:[3,6,11,3,4],nz:[1,-1,-1,-1,-1]},{size:2,px:[10,6],py:[15,10],pz:[0,-1],nx:[21,22],ny:[14,12],nz:[0,0]},{size:2,px:[18,0],py:[20,0],pz:[0,-1],nx:[2,3],ny:[2,4],nz:[2,1]},{size:5,px:[12,6,13,11,7],py:[1,1,1,2,1],pz:[0,1,0,0,1],nx:[7,6,8,5,5],ny:[4,15,4,16,16],nz:[1,0,1,0,-1]},{size:3,px:[22,21,21],py:[14,15,17],pz:[0,0,0],nx:[5,9,4],ny:[0,5,0],nz:[2,-1,-1]},{size:2,px:[10,2],py:[14,1],pz:[0,-1],nx:[23,11],ny:[16,8],nz:[0,1]},{size:4,px:[21,21,0,18],py:[14,15,5,4],pz:[0,0,-1,-1],nx:[8,8,9,4],ny:[7,8,10,5],nz:[1,1,1,2]},{size:2,px:[15,5],py:[18,1],pz:[0,-1],nx:[23,23],ny:[16,18],nz:[0,0]},{size:2,px:[15,14],py:[1,1],pz:[0,0],nx:[4,4],ny:[2,3],nz:[2,-1]},{size:2,px:[2,6],py:[6,5],pz:[1,-1],nx:[14,11],ny:[1,1],nz:[0,0]},{size:2,px:[3,17],py:[2,8],pz:[2,0],nx:[8,3],ny:[4,9],nz:[1,-1]},{size:2,px:[17,8],py:[13,10],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[0,0],py:[8,3],pz:[0,1],nx:[1,11],ny:[4,7],nz:[1,-1]},{size:2,px:[6,8],py:[5,0],pz:[1,-1],nx:[0,0],ny:[3,1],nz:[1,2]},{size:2,px:[0,0],py:[5,3],pz:[1,2],nx:[1,18],ny:[5,7],nz:[1,-1]},{size:2,px:[7,3],py:[6,6],pz:[0,1],nx:[7,12],ny:[5,20],nz:[0,-1]},{size:2,px:[8,1],py:[0,5],pz:[0,-1],nx:[4,2],ny:[9,3],nz:[1,2]},{size:2,px:[0,0],py:[10,11],pz:[0,0],nx:[0,5],ny:[5,9],nz:[0,-1]},{size:2,px:[8,1],py:[23,4],pz:[0,2],nx:[0,0],ny:[13,2],nz:[0,-1]},{size:2,px:[4,1],py:[6,4],pz:[0,-1],nx:[4,4],ny:[4,5],nz:[2,2]},{size:2,px:[7,6],py:[6,5],pz:[1,1],nx:[3,9],ny:[4,16],nz:[1,-1]},{size:2,px:[5,3],py:[9,13],pz:[0,-1],nx:[4,10],ny:[3,7],nz:[1,0]},{size:5,px:[13,9,6,10,10],py:[2,2,1,2,2],pz:[0,0,1,0,-1],nx:[7,5,6,5,6],ny:[0,2,2,1,1],nz:[0,0,0,0,0]}],alpha:[-1.119615,1.119615,-.8169953,.8169953,-.5291213,.5291213,-.4904488,.4904488,-.4930982,.4930982,-.4106179,.4106179,-.4246842,.4246842,-.3802383,.3802383,-.3364358,.3364358,-.3214186,.3214186,-.3210798,.3210798,-.2993167,.2993167,-.3426336,.3426336,-.3199184,.3199184,-.3061071,.3061071,-.2758972,.2758972,-.307559,.307559,-.3009565,.3009565,-.2015739,.2015739,-.2603266,.2603266,-.2772993,.2772993,-.2184913,.2184913,-.2306681,.2306681,-.1983223,.1983223,-.219476,.219476,-.2528421,.2528421,-.2436416,.2436416,-.3032886,.3032886,-.2556071,.2556071,-.256217,.256217,-.1930298,.1930298,-.2735898,.2735898,-.1814703,.1814703,-.2054824,.2054824,-.1986146,.1986146,-.1769226,.1769226,-.1775257,.1775257,-.2167927,.2167927,-.1823633,.1823633,-.158428,.158428,-.1778321,.1778321,-.1826777,.1826777,-.1979903,.1979903,-.1898326,.1898326,-.1835506,.1835506,-.196786,.196786,-.1871528,.1871528,-.1772414,.1772414,-.1985514,.1985514,-.2144078,.2144078,-.2742303,.2742303,-.224055,.224055,-.2132534,.2132534,-.1552127,.1552127,-.1568276,.1568276,-.1630086,.1630086,-.1458232,.1458232,-.1559541,.1559541,-.1720131,.1720131,-.1708434,.1708434,-.1624431,.1624431,-.1814161,.1814161,-.1552639,.1552639,-.1242354,.1242354,-.1552139,.1552139,-.1694359,.1694359,-.1801481,.1801481,-.1387182,.1387182,-.1409679,.1409679,-.1486724,.1486724,-.1779553,.1779553,-.1524595,.1524595,-.1788086,.1788086,-.1671479,.1671479,-.1376197,.1376197,-.1511808,.1511808,-.1524632,.1524632,-.1198986,.1198986,-.1382641,.1382641,-.1148901,.1148901,-.1131803,.1131803,-.1273508,.1273508,-.1405125,.1405125,-.1322132,.1322132,-.1386966,.1386966,-.1275621,.1275621,-.1180573,.1180573,-.1238803,.1238803,-.1428389,.1428389,-.1694437,.1694437,-.1290855,.1290855,-.152026,.152026,-.1398282,.1398282,-.1890736,.1890736,-.2280428,.2280428,-.1325099,.1325099,-.1342873,.1342873,-.1463841,.1463841,-.1983567,.1983567,-.1585711,.1585711,-.1260154,.1260154,-.1426774,.1426774,-.1554278,.1554278,-.1361201,.1361201,-.1181856,.1181856,-.1255941,.1255941,-.1113275,.1113275,-.1506576,.1506576,-.1202859,.1202859,-.2159751,.2159751,-.144315,.144315,-.1379194,.1379194,-.1805758,.1805758,-.1465612,.1465612,-.1328856,.1328856,-.1532173,.1532173,-.1590635,.1590635,-.1462229,.1462229,-.1350012,.1350012,-.1195634,.1195634,-.1173221,.1173221,-.1192867,.1192867,-.1595013,.1595013,-.1209751,.1209751,-.157129,.157129,-.1527274,.1527274,-.1373708,.1373708,-.1318313,.1318313,-.1273391,.1273391,-.1271365,.1271365,-.1528693,.1528693,-.1590476,.1590476,-.1581911,.1581911,-.1183023,.1183023,-.1559822,.1559822,-.1214999,.1214999,-.1283378,.1283378,-.1542583,.1542583,-.1336377,.1336377,-.1800416,.1800416,-.1710931,.1710931,-.1621737,.1621737,-.1239002,.1239002,-.1432928,.1432928,-.1392447,.1392447,-.1383938,.1383938,-.1357633,.1357633,-.1175842,.1175842,-.1085318,.1085318,-.1148885,.1148885,-.1320396,.1320396,-.1351204,.1351204,-.1581518,.1581518,-.1459574,.1459574,-.1180068,.1180068,-.1464196,.1464196,-.1179543,.1179543,-.1004204,.1004204,-.129466,.129466,-.1534244,.1534244,-.137897,.137897,-.1226545,.1226545,-.1281182,.1281182,-.1201471,.1201471,-.1448701,.1448701,-.129098,.129098,-.1388764,.1388764,-.09605773,.09605773,-.1411021,.1411021,-.1295693,.1295693,-.1371739,.1371739,-.1167579,.1167579,-.1400486,.1400486,-.1214224,.1214224,-.1287835,.1287835,-.1197646,.1197646,-.1192358,.1192358,-.1218651,.1218651,-.1564816,.1564816,-.1172391,.1172391,-.1342268,.1342268,-.1492471,.1492471,-.1157299,.1157299,-.1046703,.1046703,-.1255571,.1255571,-.1100135,.1100135,-.1501592,.1501592,-.1155712,.1155712,-.1145563,.1145563,-.1013425,.1013425,-.1145783,.1145783,-.1328031,.1328031,-.1077413,.1077413,-.1064996,.1064996,-.119117,.119117,-.1213217,.1213217,-.1260969,.1260969,-.1156494,.1156494,-.1268126,.1268126,-.1070999,.1070999,-.1112365,.1112365,-.1243916,.1243916,-.1283152,.1283152,-.1166925,.1166925,-.08997633,.08997633,-.158384,.158384,-.1211178,.1211178,-.109083,.109083,-.1030818,.1030818,-.14406,.14406,-.1458713,.1458713,-.1559082,.1559082,-.1058868,.1058868,-.101013,.101013,-.1642301,.1642301,-.123685,.123685,-.1467589,.1467589,-.1109359,.1109359,-.1673655,.1673655,-.1239984,.1239984,-.1039509,.1039509,-.1089378,.1089378,-.1545085,.1545085,-.1200862,.1200862,-.1105608,.1105608,-.1235262,.1235262,-.08496153,.08496153,-.1181372,.1181372,-.1139467,.1139467,-.1189317,.1189317,-.1266519,.1266519,-.09470736,.09470736,-.1336735,.1336735,-.08726601,.08726601,-.1304782,.1304782,-.1186529,.1186529,-.1355944,.1355944,-.09568801,.09568801,-.1282618,.1282618,-.1625632,.1625632,-.1167652,.1167652,-.1001301,.1001301,-.1292419,.1292419,-.1904213,.1904213,-.1511542,.1511542,-.09814394,.09814394,-.1171564,.1171564,-.09806486,.09806486,-.09217615,.09217615,-.08505645,.08505645,-.1573637,.1573637,-.1419174,.1419174,-.1298601,.1298601,-.1120613,.1120613,-.1158363,.1158363,-.1090957,.1090957,-.1204516,.1204516,-.1139852,.1139852,-.09642479,.09642479,-.1410872,.1410872,-.1142779,.1142779,-.1043991,.1043991,-.09736463,.09736463,-.1451046,.1451046,-.1205668,.1205668,-.09881445,.09881445,-.1612822,.1612822,-.1175681,.1175681,-.1522528,.1522528,-.161752,.161752,-.1582938,.1582938,-.1208202,.1208202,-.1016003,.1016003,-.1232059,.1232059,-.09583025,.09583025,-.101399,.101399,-.1178752,.1178752,-.1215972,.1215972,-.1294932,.1294932,-.115827,.115827,-.1008645,.1008645,-.0969919,.0969919,-.1022144,.1022144,-.09878768,.09878768,-.1339052,.1339052,-.09279961,.09279961,-.1047606,.1047606,-.1141163,.1141163,-.12676,.12676,-.1252763,.1252763,-.09775003,.09775003,-.09169116,.09169116,-.1006496,.1006496,-.09493293,.09493293,-.1213694,.1213694,-.1109243,.1109243,-.1115973,.1115973,-.07979327,.07979327,-.09220953,.09220953,-.1028913,.1028913,-.125351,.125351]},{count:391,threshold:-4.665692,feature:[{size:5,px:[14,9,11,17,12],py:[2,3,9,13,3],pz:[0,0,0,0,0],nx:[21,8,7,20,13],ny:[16,10,7,7,9],nz:[0,1,1,0,0]},{size:5,px:[12,10,6,11,13],py:[9,3,13,3,4],pz:[0,0,0,0,0],nx:[10,4,5,10,2],ny:[9,10,8,8,2],nz:[0,1,1,0,2]},{size:5,px:[6,9,7,8,8],py:[3,3,3,3,3],pz:[0,0,0,0,-1],nx:[0,0,0,4,9],ny:[4,2,3,10,8],nz:[0,0,0,1,0]},{size:5,px:[6,2,16,6,8],py:[16,2,11,4,11],pz:[0,2,0,1,0],nx:[3,8,4,1,1],ny:[4,4,4,5,13],nz:[1,1,-1,-1,-1]},{size:3,px:[16,13,9],py:[23,18,10],pz:[0,0,1],nx:[14,15,8],ny:[21,22,3],nz:[0,-1,-1]},{size:5,px:[9,16,19,17,17],py:[1,2,3,2,2],pz:[1,0,0,0,-1],nx:[23,23,23,23,23],ny:[6,2,1,3,5],nz:[0,0,0,0,0]},{size:5,px:[12,12,12,12,12],py:[10,11,12,13,13],pz:[0,0,0,0,-1],nx:[4,8,14,4,6],ny:[2,4,7,4,8],nz:[2,1,0,1,1]},{size:5,px:[1,2,3,6,4],py:[6,10,12,23,13],pz:[1,1,0,0,0],nx:[2,0,0,1,1],ny:[23,5,10,21,21],nz:[0,2,1,0,-1]},{size:5,px:[12,16,12,4,12],py:[6,17,7,2,8],pz:[0,0,0,2,0],nx:[8,8,12,0,6],ny:[4,4,16,0,8],nz:[1,-1,-1,-1,-1]},{size:2,px:[9,2],py:[18,4],pz:[0,-1],nx:[4,9],ny:[10,16],nz:[1,0]},{size:5,px:[9,9,2,0,12],py:[6,6,21,4,8],pz:[1,-1,-1,-1,-1],nx:[8,4,9,7,7],ny:[10,2,4,5,8],nz:[1,2,1,1,1]},{size:5,px:[10,10,10,18,19],py:[10,8,7,14,14],pz:[1,1,1,0,0],nx:[21,23,22,22,11],ny:[23,19,21,22,10],nz:[0,0,0,0,-1]},{size:5,px:[12,3,15,4,19],py:[14,0,5,5,14],pz:[0,-1,-1,-1,-1],nx:[12,17,15,3,8],ny:[18,18,14,2,10],nz:[0,0,0,2,0]},{size:5,px:[8,11,3,11,4],py:[23,7,9,8,8],pz:[0,0,1,0,1],nx:[8,0,10,0,8],ny:[8,2,8,4,10],nz:[0,-1,-1,-1,-1]},{size:5,px:[10,11,12,8,4],py:[3,0,0,1,1],pz:[0,0,0,0,1],nx:[2,3,4,3,3],ny:[14,5,0,1,2],nz:[0,0,0,0,0]},{size:2,px:[3,11],py:[7,0],pz:[1,-1],nx:[5,2],ny:[9,5],nz:[1,2]},{size:5,px:[7,1,0,10,1],py:[0,0,2,12,6],pz:[0,2,2,0,1],nx:[4,6,2,8,8],ny:[4,11,2,4,4],nz:[1,1,2,1,-1]},{size:2,px:[4,15],py:[4,12],pz:[2,0],nx:[4,6],ny:[5,11],nz:[2,-1]},{size:5,px:[9,4,16,14,14],py:[8,4,23,18,18],pz:[1,2,0,0,-1],nx:[0,2,1,1,0],ny:[2,0,3,2,3],nz:[1,0,0,0,1]},{size:5,px:[17,7,7,18,19],py:[7,11,8,7,7],pz:[0,1,1,0,0],nx:[17,5,8,2,0],ny:[8,0,7,5,3],nz:[0,-1,-1,-1,-1]},{size:2,px:[5,14],py:[12,3],pz:[0,-1],nx:[4,3],ny:[5,4],nz:[1,1]},{size:5,px:[10,8,16,11,11],py:[5,6,12,4,4],pz:[0,1,0,0,-1],nx:[14,13,5,9,5],ny:[13,10,1,4,2],nz:[0,0,2,1,2]},{size:5,px:[15,14,16,8,8],py:[2,2,2,0,0],pz:[0,0,0,1,-1],nx:[9,18,19,18,17],ny:[0,0,2,1,0],nz:[1,0,0,0,0]},{size:2,px:[17,15],py:[12,11],pz:[0,0],nx:[14,4],ny:[9,15],nz:[0,-1]},{size:3,px:[5,11,11],py:[3,4,5],pz:[2,1,1],nx:[14,3,18],ny:[6,5,0],nz:[0,1,-1]},{size:5,px:[16,14,17,15,9],py:[2,2,2,2,1],pz:[0,0,0,0,1],nx:[21,20,11,21,21],ny:[2,0,7,3,3],nz:[0,0,1,0,-1]},{size:5,px:[2,1,1,1,5],py:[12,9,7,3,6],pz:[0,0,1,1,1],nx:[4,8,3,4,17],ny:[4,4,0,8,0],nz:[1,-1,-1,-1,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[9,2],ny:[4,17],nz:[1,-1]},{size:2,px:[8,5],py:[16,9],pz:[0,1],nx:[10,17],ny:[16,8],nz:[0,-1]},{size:4,px:[11,5,9,15],py:[14,9,11,5],pz:[0,-1,-1,-1],nx:[10,1,9,4],ny:[9,2,13,7],nz:[0,2,0,1]},{size:5,px:[2,5,10,7,10],py:[7,12,2,13,3],pz:[1,-1,-1,-1,-1],nx:[5,2,3,3,2],ny:[23,15,17,16,14],nz:[0,0,0,0,0]},{size:2,px:[11,7],py:[8,10],pz:[0,-1],nx:[7,14],ny:[5,8],nz:[1,0]},{size:2,px:[9,16],py:[7,23],pz:[1,0],nx:[4,4],ny:[2,1],nz:[2,-1]},{size:5,px:[16,14,18,4,17],py:[0,0,4,0,1],pz:[0,0,0,2,0],nx:[8,8,16,9,9],ny:[5,4,11,7,7],nz:[1,1,0,0,-1]},{size:5,px:[12,13,7,8,4],py:[9,12,6,11,5],pz:[0,0,1,1,2],nx:[23,23,16,9,9],ny:[0,1,11,7,7],nz:[0,-1,-1,-1,-1]},{size:3,px:[6,7,2],py:[21,23,4],pz:[0,0,2],nx:[4,1,16],ny:[10,5,11],nz:[1,-1,-1]},{size:2,px:[2,2],py:[3,4],pz:[2,2],nx:[3,1],ny:[4,5],nz:[1,-1]},{size:5,px:[1,2,1,0,1],py:[7,13,12,4,13],pz:[0,0,0,2,0],nx:[18,9,9,19,19],ny:[23,5,11,19,19],nz:[0,1,1,0,-1]},{size:3,px:[4,10,12],py:[6,2,5],pz:[1,-1,-1],nx:[10,0,0],ny:[12,1,3],nz:[0,2,2]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,0],ny:[4,3],nz:[1,-1]},{size:5,px:[19,17,10,14,18],py:[2,1,7,0,1],pz:[0,0,1,0,0],nx:[3,3,3,7,5],ny:[9,10,7,23,18],nz:[1,1,1,0,0]},{size:2,px:[10,10],py:[8,7],pz:[1,1],nx:[14,4],ny:[15,6],nz:[0,-1]},{size:2,px:[7,15],py:[1,3],pz:[1,0],nx:[16,19],ny:[1,3],nz:[0,-1]},{size:5,px:[11,11,1,2,11],py:[11,12,1,13,12],pz:[0,0,-1,-1,-1],nx:[12,17,8,16,8],ny:[7,12,11,16,6],nz:[0,0,0,0,1]},{size:5,px:[13,11,10,12,5],py:[0,0,0,0,0],pz:[0,0,0,0,1],nx:[8,4,3,4,4],ny:[4,5,2,4,4],nz:[1,1,2,1,-1]},{size:5,px:[6,1,3,2,3],py:[13,3,3,4,10],pz:[0,2,1,1,1],nx:[0,1,0,0,0],ny:[2,0,5,4,4],nz:[0,0,0,0,-1]},{size:2,px:[15,1],py:[4,3],pz:[0,-1],nx:[16,15],ny:[2,2],nz:[0,0]},{size:2,px:[3,7],py:[7,13],pz:[1,0],nx:[3,0],ny:[4,2],nz:[1,-1]},{size:2,px:[14,15],py:[18,14],pz:[0,-1],nx:[4,14],ny:[4,16],nz:[1,0]},{size:2,px:[4,6],py:[3,4],pz:[2,1],nx:[9,5],ny:[14,2],nz:[0,-1]},{size:2,px:[16,6],py:[1,5],pz:[0,-1],nx:[4,9],ny:[0,4],nz:[2,1]},{size:2,px:[9,0],py:[4,2],pz:[0,-1],nx:[5,3],ny:[1,0],nz:[1,2]},{size:5,px:[1,1,1,0,0],py:[16,15,17,6,9],pz:[0,0,0,1,0],nx:[9,5,4,9,8],ny:[7,3,3,6,7],nz:[0,1,1,0,-1]},{size:2,px:[9,1],py:[8,15],pz:[1,-1],nx:[9,8],ny:[9,4],nz:[1,1]},{size:2,px:[20,19],py:[19,22],pz:[0,0],nx:[7,0],ny:[3,0],nz:[1,-1]},{size:5,px:[8,4,2,5,5],py:[12,6,3,5,5],pz:[0,1,2,1,-1],nx:[22,21,20,21,22],ny:[17,20,22,19,16],nz:[0,0,0,0,0]},{size:2,px:[6,12],py:[2,6],pz:[1,0],nx:[8,3],ny:[3,2],nz:[1,-1]},{size:2,px:[11,11],py:[9,4],pz:[1,1],nx:[12,4],ny:[17,5],nz:[0,-1]},{size:3,px:[0,1,0],py:[5,13,3],pz:[2,0,2],nx:[0,4,11],ny:[23,5,1],nz:[0,-1,-1]},{size:2,px:[10,5],py:[6,3],pz:[0,1],nx:[4,4],ny:[3,0],nz:[1,-1]},{size:2,px:[6,5],py:[7,3],pz:[0,-1],nx:[0,1],ny:[4,10],nz:[2,1]},{size:5,px:[12,13,12,12,12],py:[12,13,11,10,10],pz:[0,0,0,0,-1],nx:[10,8,8,16,15],ny:[7,4,10,11,10],nz:[0,1,0,0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[4,2],ny:[5,5],nz:[2,-1]},{size:2,px:[9,17],py:[17,7],pz:[0,-1],nx:[5,2],ny:[9,4],nz:[1,2]},{size:2,px:[4,4],py:[3,5],pz:[2,2],nx:[12,8],ny:[16,2],nz:[0,-1]},{size:2,px:[1,1],py:[2,0],pz:[1,1],nx:[0,4],ny:[0,1],nz:[2,-1]},{size:2,px:[11,1],py:[5,0],pz:[0,-1],nx:[2,3],ny:[2,4],nz:[2,1]},{size:4,px:[0,6,4,22],py:[23,2,4,12],pz:[0,-1,-1,-1],nx:[7,6,8,5],ny:[1,1,2,1],nz:[1,1,1,1]},{size:2,px:[4,10],py:[0,9],pz:[1,-1],nx:[2,4],ny:[3,10],nz:[2,1]},{size:2,px:[11,8],py:[15,13],pz:[0,-1],nx:[23,11],ny:[13,5],nz:[0,1]},{size:2,px:[18,4],py:[5,4],pz:[0,-1],nx:[18,20],ny:[4,7],nz:[0,0]},{size:5,px:[21,20,20,10,20],py:[17,22,19,10,21],pz:[0,0,0,1,0],nx:[5,5,3,14,7],ny:[9,9,0,8,4],nz:[0,-1,-1,-1,-1]},{size:5,px:[3,7,13,7,3],py:[6,12,3,0,3],pz:[1,-1,-1,-1,-1],nx:[1,5,0,0,2],ny:[16,6,13,5,4],nz:[0,1,0,1,0]},{size:2,px:[7,4],py:[6,3],pz:[1,2],nx:[9,5],ny:[4,6],nz:[1,-1]},{size:3,px:[14,9,13],py:[19,22,8],pz:[0,-1,-1],nx:[13,4,4],ny:[17,2,5],nz:[0,2,2]},{size:2,px:[16,4],py:[9,3],pz:[0,2],nx:[7,4],ny:[4,5],nz:[1,-1]},{size:4,px:[10,2,4,2],py:[23,4,8,3],pz:[0,2,1,2],nx:[14,0,4,11],ny:[19,3,5,3],nz:[0,-1,-1,-1]},{size:5,px:[9,10,8,7,11],py:[2,2,2,2,2],pz:[0,0,0,0,0],nx:[6,5,3,4,4],ny:[0,1,0,2,2],nz:[0,0,1,0,-1]},{size:2,px:[6,4],py:[13,6],pz:[0,-1],nx:[15,4],ny:[8,4],nz:[0,1]},{size:2,px:[0,8],py:[1,2],pz:[2,-1],nx:[5,4],ny:[2,2],nz:[1,1]},{size:5,px:[16,13,14,15,15],py:[1,0,0,0,0],pz:[0,0,0,0,-1],nx:[4,9,4,18,8],ny:[5,9,4,18,11],nz:[2,1,2,0,1]},{size:2,px:[5,6],py:[2,6],pz:[2,1],nx:[22,9],ny:[23,9],nz:[0,-1]},{size:2,px:[19,19],py:[5,5],pz:[0,-1],nx:[21,22],ny:[2,4],nz:[0,0]},{size:2,px:[2,5],py:[8,6],pz:[0,1],nx:[3,4],ny:[4,9],nz:[1,-1]},{size:2,px:[18,14],py:[13,17],pz:[0,0],nx:[14,4],ny:[16,3],nz:[0,-1]},{size:2,px:[6,6],py:[6,3],pz:[1,-1],nx:[1,0],ny:[2,2],nz:[1,2]},{size:2,px:[23,21],py:[21,14],pz:[0,-1],nx:[7,5],ny:[0,0],nz:[0,1]},{size:2,px:[15,10],py:[23,7],pz:[0,-1],nx:[9,4],ny:[4,5],nz:[1,2]},{size:2,px:[4,18],py:[3,8],pz:[2,0],nx:[8,4],ny:[4,5],nz:[1,-1]},{size:2,px:[13,7],py:[2,11],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[2,3,5,6,1],py:[7,14,2,2,4],pz:[1,0,0,0,2],nx:[8,4,4,7,7],ny:[7,5,4,9,9],nz:[1,2,2,1,-1]},{size:2,px:[5,3],py:[6,3],pz:[1,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:5,px:[7,20,4,10,10],py:[9,16,4,10,8],pz:[1,0,2,1,1],nx:[4,2,3,5,3],ny:[11,5,6,12,5],nz:[0,1,1,0,-1]},{size:2,px:[6,11],py:[4,18],pz:[1,-1],nx:[8,6],ny:[4,9],nz:[1,1]},{size:2,px:[2,8],py:[5,23],pz:[2,0],nx:[9,4],ny:[0,2],nz:[1,-1]},{size:5,px:[3,1,2,2,2],py:[12,6,12,11,11],pz:[0,1,0,0,-1],nx:[0,0,0,0,0],ny:[13,12,11,14,7],nz:[0,0,0,0,1]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,4],ny:[4,14],nz:[1,-1]},{size:5,px:[11,23,23,22,22],py:[8,12,6,13,14],pz:[1,0,0,0,0],nx:[13,8,7,6,6],ny:[6,3,3,9,9],nz:[0,1,1,0,-1]},{size:4,px:[9,23,23,22],py:[7,12,6,13],pz:[1,-1,-1,-1],nx:[11,23,23,23],ny:[6,13,17,10],nz:[1,0,0,0]},{size:5,px:[0,0,0,0,0],py:[19,5,9,16,10],pz:[0,2,1,0,1],nx:[5,2,1,2,2],ny:[18,10,5,9,9],nz:[0,1,2,1,-1]},{size:2,px:[11,5],py:[10,4],pz:[1,2],nx:[23,14],ny:[23,3],nz:[0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,1],ny:[4,4],nz:[1,-1]},{size:2,px:[8,10],py:[4,8],pz:[0,-1],nx:[8,8],ny:[2,3],nz:[0,0]},{size:3,px:[7,10,11],py:[1,6,13],pz:[0,-1,-1],nx:[4,4,2],ny:[3,8,2],nz:[1,1,2]},{size:2,px:[8,4],py:[8,2],pz:[1,2],nx:[10,5],ny:[10,0],nz:[0,-1]},{size:2,px:[7,16],py:[20,21],pz:[0,-1],nx:[2,4],ny:[5,10],nz:[2,1]},{size:2,px:[3,10],py:[7,8],pz:[1,-1],nx:[7,4],ny:[20,7],nz:[0,1]},{size:5,px:[11,11,11,11,11],py:[10,12,13,11,11],pz:[0,0,0,0,-1],nx:[11,12,16,3,8],ny:[6,6,10,1,8],nz:[0,0,0,2,0]},{size:2,px:[12,6],py:[4,2],pz:[0,1],nx:[7,7],ny:[8,1],nz:[0,-1]},{size:5,px:[23,23,23,23,23],py:[22,20,21,19,19],pz:[0,0,0,0,-1],nx:[4,6,3,4,3],ny:[19,23,15,20,16],nz:[0,0,0,0,0]},{size:3,px:[8,4,14],py:[12,3,8],pz:[0,-1,-1],nx:[4,2,10],ny:[10,3,13],nz:[1,2,0]},{size:2,px:[11,18],py:[13,23],pz:[0,-1],nx:[5,5],ny:[1,2],nz:[2,2]},{size:3,px:[11,2,10],py:[17,4,17],pz:[0,2,0],nx:[11,0,22],ny:[15,2,4],nz:[0,-1,-1]},{size:3,px:[11,3,0],py:[15,4,8],pz:[0,-1,-1],nx:[14,11,4],ny:[9,17,7],nz:[0,0,1]},{size:2,px:[17,16],py:[2,1],pz:[0,0],nx:[9,11],ny:[4,6],nz:[1,-1]},{size:2,px:[3,4],py:[21,23],pz:[0,0],nx:[4,0],ny:[3,3],nz:[1,-1]},{size:2,px:[18,2],py:[20,0],pz:[0,-1],nx:[4,9],ny:[5,10],nz:[2,1]},{size:2,px:[9,1],py:[19,3],pz:[0,-1],nx:[0,0],ny:[9,21],nz:[1,0]},{size:2,px:[19,19],py:[21,22],pz:[0,0],nx:[19,0],ny:[23,0],nz:[0,-1]},{size:4,px:[11,2,3,2],py:[6,6,9,4],pz:[0,-1,-1,-1],nx:[4,9,19,19],ny:[5,10,17,18],nz:[2,1,0,0]},{size:2,px:[2,4],py:[4,8],pz:[2,1],nx:[4,9],ny:[10,10],nz:[1,-1]},{size:2,px:[23,22],py:[8,12],pz:[0,-1],nx:[7,4],ny:[11,2],nz:[0,2]},{size:2,px:[12,1],py:[5,2],pz:[0,-1],nx:[9,11],ny:[2,1],nz:[0,0]},{size:2,px:[4,4],py:[2,2],pz:[0,-1],nx:[3,2],ny:[1,2],nz:[0,0]},{size:2,px:[17,9],py:[13,7],pz:[0,1],nx:[9,5],ny:[4,0],nz:[1,-1]},{size:4,px:[0,0,9,13],py:[3,3,7,3],pz:[2,-1,-1,-1],nx:[2,4,4,11],ny:[1,2,8,5],nz:[2,1,1,0]},{size:5,px:[3,6,5,6,6],py:[0,0,2,1,1],pz:[1,0,0,0,-1],nx:[2,2,2,1,1],ny:[21,19,20,16,17],nz:[0,0,0,0,0]},{size:2,px:[13,3],py:[22,10],pz:[0,-1],nx:[7,4],ny:[10,5],nz:[1,2]},{size:2,px:[3,2],py:[7,3],pz:[1,2],nx:[8,4],ny:[4,5],nz:[1,-1]},{size:5,px:[17,8,15,7,15],py:[13,6,16,5,12],pz:[0,1,0,1,0],nx:[5,4,6,3,4],ny:[1,2,1,0,3],nz:[0,0,0,1,-1]},{size:5,px:[12,9,11,12,10],py:[0,1,2,2,0],pz:[0,0,0,0,0],nx:[8,16,7,4,4],ny:[9,23,9,3,2],nz:[1,0,1,2,-1]},{size:2,px:[4,11],py:[1,4],pz:[2,-1],nx:[8,7],ny:[4,4],nz:[0,0]},{size:4,px:[7,4,5,8],py:[13,2,1,3],pz:[0,-1,-1,-1],nx:[9,4,9,9],ny:[9,5,10,11],nz:[0,1,0,0]},{size:2,px:[10,11],py:[10,11],pz:[0,-1],nx:[2,6],ny:[2,2],nz:[2,1]},{size:2,px:[21,3],py:[11,2],pz:[0,-1],nx:[22,22],ny:[20,18],nz:[0,0]},{size:2,px:[7,6],py:[1,2],pz:[0,0],nx:[5,10],ny:[1,0],nz:[0,-1]},{size:2,px:[21,3],py:[18,1],pz:[0,-1],nx:[16,15],ny:[4,4],nz:[0,0]},{size:2,px:[12,7],py:[4,1],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[13,11],py:[23,17],pz:[0,0],nx:[11,21],ny:[16,0],nz:[0,-1]},{size:2,px:[1,2],py:[0,6],pz:[1,-1],nx:[16,16],ny:[9,11],nz:[0,0]},{size:2,px:[12,13],py:[20,20],pz:[0,0],nx:[11,3],ny:[21,7],nz:[0,-1]},{size:3,px:[19,20,9],py:[21,18,11],pz:[0,0,1],nx:[17,4,11],ny:[19,2,0],nz:[0,-1,-1]},{size:2,px:[12,5],py:[5,2],pz:[0,1],nx:[7,9],ny:[7,8],nz:[0,-1]},{size:5,px:[8,4,4,8,4],py:[4,4,5,10,3],pz:[1,1,2,0,2],nx:[11,22,11,23,23],ny:[0,0,1,3,3],nz:[1,0,1,0,-1]},{size:2,px:[8,14],py:[10,23],pz:[1,0],nx:[7,2],ny:[10,9],nz:[1,-1]},{size:2,px:[5,14],py:[6,23],pz:[1,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:2,px:[11,2],py:[19,3],pz:[0,-1],nx:[10,12],ny:[18,18],nz:[0,0]},{size:2,px:[12,3],py:[4,1],pz:[0,2],nx:[6,6],ny:[11,11],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[18,10,20,19,19],pz:[0,1,0,0,-1],nx:[11,10,14,12,13],ny:[2,2,2,2,2],nz:[0,0,0,0,0]},{size:3,px:[12,2,9],py:[14,5,10],pz:[0,-1,-1],nx:[11,10,5],ny:[10,13,5],nz:[0,0,1]},{size:2,px:[2,3],py:[3,7],pz:[2,1],nx:[3,10],ny:[4,13],nz:[1,-1]},{size:2,px:[9,3],py:[21,7],pz:[0,-1],nx:[10,21],ny:[7,15],nz:[1,0]},{size:2,px:[21,10],py:[16,8],pz:[0,1],nx:[8,2],ny:[10,8],nz:[1,-1]},{size:2,px:[8,8],py:[6,7],pz:[1,-1],nx:[12,11],ny:[11,7],nz:[0,1]},{size:2,px:[3,11],py:[4,20],pz:[2,0],nx:[11,10],ny:[19,1],nz:[0,-1]},{size:2,px:[17,5],py:[13,3],pz:[0,-1],nx:[7,8],ny:[4,4],nz:[1,1]},{size:2,px:[7,1],py:[23,3],pz:[0,2],nx:[14,6],ny:[12,9],nz:[0,-1]},{size:2,px:[12,5],py:[11,2],pz:[0,-1],nx:[11,7],ny:[3,1],nz:[0,1]},{size:2,px:[9,6],py:[2,17],pz:[0,-1],nx:[4,6],ny:[4,12],nz:[1,0]},{size:2,px:[14,19],py:[5,6],pz:[0,-1],nx:[9,3],ny:[9,1],nz:[0,2]},{size:5,px:[12,13,13,13,12],py:[9,11,12,13,10],pz:[0,0,0,0,0],nx:[2,4,4,4,4],ny:[7,18,17,14,14],nz:[1,0,0,0,-1]},{size:2,px:[10,10],py:[6,6],pz:[1,-1],nx:[20,18],ny:[18,23],nz:[0,0]},{size:2,px:[5,6],py:[4,14],pz:[1,-1],nx:[9,4],ny:[2,1],nz:[1,2]},{size:2,px:[11,9],py:[4,18],pz:[0,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[15,0],py:[18,4],pz:[0,-1],nx:[3,4],ny:[5,4],nz:[2,2]},{size:4,px:[7,3,6,6],py:[8,4,6,5],pz:[1,2,1,1],nx:[10,4,13,0],ny:[10,4,9,22],nz:[0,-1,-1,-1]},{size:2,px:[10,8],py:[18,11],pz:[0,-1],nx:[5,4],ny:[8,10],nz:[1,1]},{size:4,px:[17,2,10,2],py:[14,1,10,3],pz:[0,-1,-1,-1],nx:[8,8,17,8],ny:[4,5,12,6],nz:[1,1,0,1]},{size:5,px:[9,11,9,4,10],py:[1,1,0,0,1],pz:[0,0,0,1,0],nx:[8,4,7,15,15],ny:[7,2,4,17,17],nz:[1,2,1,0,-1]},{size:2,px:[4,3],py:[11,8],pz:[0,-1],nx:[2,2],ny:[1,2],nz:[2,2]},{size:2,px:[11,3],py:[13,8],pz:[0,-1],nx:[1,1],ny:[5,2],nz:[1,2]},{size:2,px:[6,2],py:[8,3],pz:[0,2],nx:[3,1],ny:[5,2],nz:[1,-1]},{size:5,px:[10,5,7,8,6],py:[9,7,7,7,7],pz:[0,0,0,0,0],nx:[7,3,0,2,15],ny:[8,0,1,18,17],nz:[0,-1,-1,-1,-1]},{size:2,px:[17,8],py:[12,6],pz:[0,1],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:5,px:[3,11,8,10,12],py:[0,2,10,2,3],pz:[2,0,0,0,0],nx:[3,2,10,2,2],ny:[6,4,11,3,3],nz:[0,1,0,1,-1]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[8,19],ny:[4,16],nz:[1,-1]},{size:2,px:[2,2],py:[1,1],pz:[2,-1],nx:[7,17],ny:[1,2],nz:[1,0]},{size:5,px:[16,15,14,13,7],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[6,4,8,3,11],ny:[3,4,4,1,6],nz:[1,1,1,2,0]},{size:2,px:[11,1],py:[8,5],pz:[0,-1],nx:[13,4],ny:[10,2],nz:[0,2]},{size:2,px:[4,9],py:[0,2],pz:[2,1],nx:[4,11],ny:[0,2],nz:[0,-1]},{size:2,px:[15,15],py:[2,2],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[8,17],py:[9,22],pz:[1,0],nx:[8,20],ny:[10,2],nz:[1,-1]},{size:2,px:[10,10],py:[14,22],pz:[0,-1],nx:[3,11],ny:[3,3],nz:[1,0]},{size:2,px:[4,2],py:[1,0],pz:[1,2],nx:[5,8],ny:[3,9],nz:[0,-1]},{size:2,px:[2,3],py:[4,8],pz:[2,1],nx:[9,5],ny:[15,19],nz:[0,-1]},{size:2,px:[5,2],py:[1,1],pz:[0,1],nx:[10,10],ny:[6,6],nz:[0,-1]},{size:2,px:[17,6],py:[10,2],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:3,px:[13,7,3],py:[5,2,6],pz:[0,1,-1],nx:[17,16,17],ny:[1,1,2],nz:[0,0,0]},{size:2,px:[11,10],py:[3,3],pz:[0,0],nx:[8,4],ny:[4,4],nz:[1,-1]},{size:2,px:[4,8],py:[0,8],pz:[2,-1],nx:[3,4],ny:[0,0],nz:[1,1]},{size:5,px:[9,2,4,1,2],py:[13,3,9,2,5],pz:[0,2,1,2,2],nx:[9,5,10,4,10],ny:[5,1,3,0,0],nz:[1,-1,-1,-1,-1]},{size:2,px:[6,12],py:[5,9],pz:[1,0],nx:[0,2],ny:[23,9],nz:[0,-1]},{size:2,px:[22,11],py:[21,8],pz:[0,1],nx:[10,0],ny:[17,2],nz:[0,-1]},{size:2,px:[3,1],py:[22,9],pz:[0,1],nx:[22,5],ny:[11,2],nz:[0,2]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[5,6],ny:[10,9],nz:[1,-1]},{size:4,px:[7,3,17,7],py:[8,2,10,11],pz:[0,2,0,1],nx:[6,10,5,23],ny:[9,21,1,23],nz:[0,-1,-1,-1]},{size:2,px:[8,3],py:[7,2],pz:[1,2],nx:[8,9],ny:[4,9],nz:[1,-1]},{size:2,px:[9,5],py:[14,6],pz:[0,1],nx:[8,8],ny:[13,13],nz:[0,-1]},{size:3,px:[11,6,8],py:[20,3,20],pz:[0,-1,-1],nx:[5,3,12],ny:[9,5,18],nz:[1,2,0]},{size:2,px:[3,9],py:[1,3],pz:[1,0],nx:[2,8],ny:[5,8],nz:[0,-1]},{size:2,px:[15,9],py:[21,3],pz:[0,-1],nx:[3,4],ny:[5,5],nz:[2,2]},{size:2,px:[2,9],py:[7,11],pz:[1,-1],nx:[2,2],ny:[8,9],nz:[1,1]},{size:4,px:[3,4,3,1],py:[14,21,19,6],pz:[0,0,0,1],nx:[10,16,4,5],ny:[8,1,7,6],nz:[0,-1,-1,-1]},{size:4,px:[10,4,3,1],py:[5,21,19,6],pz:[1,-1,-1,-1],nx:[21,10,5,11],ny:[4,2,3,4],nz:[0,1,2,1]},{size:2,px:[4,17],py:[3,8],pz:[2,0],nx:[17,2],ny:[9,22],nz:[0,-1]},{size:2,px:[17,12],py:[14,20],pz:[0,-1],nx:[7,8],ny:[4,4],nz:[1,1]},{size:2,px:[10,12],py:[9,20],pz:[0,-1],nx:[11,23],ny:[8,18],nz:[1,0]},{size:2,px:[5,11],py:[4,7],pz:[2,1],nx:[8,15],ny:[7,5],nz:[1,-1]},{size:2,px:[11,15],py:[13,8],pz:[0,-1],nx:[11,11],ny:[6,7],nz:[1,1]},{size:2,px:[6,15],py:[14,8],pz:[0,-1],nx:[4,4],ny:[12,13],nz:[0,0]},{size:2,px:[5,5],py:[0,1],pz:[2,2],nx:[15,4],ny:[5,5],nz:[0,-1]},{size:2,px:[16,17],py:[2,2],pz:[0,0],nx:[20,8],ny:[3,7],nz:[0,-1]},{size:3,px:[6,3,2],py:[10,6,1],pz:[0,-1,-1],nx:[4,3,2],ny:[3,4,2],nz:[1,1,2]},{size:2,px:[10,6],py:[4,6],pz:[0,-1],nx:[6,13],ny:[0,1],nz:[1,0]},{size:2,px:[10,10],py:[8,7],pz:[1,1],nx:[8,2],ny:[7,2],nz:[1,-1]},{size:2,px:[7,1],py:[12,4],pz:[0,-1],nx:[3,4],ny:[5,5],nz:[1,1]},{size:2,px:[11,15],py:[15,14],pz:[0,-1],nx:[3,11],ny:[4,13],nz:[1,0]},{size:5,px:[13,9,11,14,12],py:[0,2,0,0,2],pz:[0,0,0,0,0],nx:[5,4,4,3,4],ny:[4,4,18,7,17],nz:[1,1,0,1,0]},{size:3,px:[13,12,11],py:[22,22,22],pz:[0,0,0],nx:[11,12,13],ny:[20,20,20],nz:[0,0,0]},{size:2,px:[6,13],py:[2,4],pz:[1,0],nx:[7,6],ny:[8,9],nz:[0,-1]},{size:2,px:[0,0],py:[23,4],pz:[0,-1],nx:[5,9],ny:[1,1],nz:[1,0]},{size:2,px:[14,14],py:[19,19],pz:[0,-1],nx:[11,11],ny:[10,9],nz:[1,1]},{size:2,px:[23,23],py:[11,9],pz:[0,0],nx:[23,23],ny:[0,11],nz:[0,-1]},{size:2,px:[23,3],py:[23,5],pz:[0,-1],nx:[4,1],ny:[23,10],nz:[0,1]},{size:2,px:[9,1],py:[7,4],pz:[1,-1],nx:[19,10],ny:[20,9],nz:[0,1]},{size:2,px:[16,1],py:[9,4],pz:[0,-1],nx:[7,8],ny:[3,3],nz:[1,1]},{size:2,px:[7,6],py:[13,13],pz:[0,0],nx:[4,5],ny:[4,11],nz:[1,-1]},{size:5,px:[19,20,20,10,10],py:[0,0,2,0,1],pz:[0,0,0,1,1],nx:[7,7,15,4,4],ny:[4,13,7,4,4],nz:[1,0,0,1,-1]},{size:2,px:[12,23],py:[6,5],pz:[0,-1],nx:[18,18],ny:[17,16],nz:[0,0]},{size:2,px:[6,3],py:[9,2],pz:[1,2],nx:[14,18],ny:[9,1],nz:[0,-1]},{size:2,px:[9,13],py:[16,5],pz:[0,-1],nx:[5,4],ny:[7,9],nz:[1,1]},{size:2,px:[10,10],py:[8,10],pz:[1,1],nx:[4,1],ny:[5,3],nz:[2,-1]},{size:2,px:[12,11],py:[13,4],pz:[0,-1],nx:[0,0],ny:[14,15],nz:[0,0]},{size:2,px:[2,1],py:[20,17],pz:[0,0],nx:[12,12],ny:[22,2],nz:[0,-1]},{size:2,px:[2,3],py:[6,7],pz:[1,-1],nx:[21,21],ny:[13,12],nz:[0,0]},{size:2,px:[3,10],py:[4,23],pz:[2,0],nx:[10,2],ny:[21,5],nz:[0,-1]},{size:2,px:[6,12],py:[3,6],pz:[1,0],nx:[11,0],ny:[17,1],nz:[0,-1]},{size:2,px:[11,4],py:[21,9],pz:[0,-1],nx:[2,3],ny:[18,22],nz:[0,0]},{size:2,px:[13,5],py:[18,9],pz:[0,-1],nx:[6,7],ny:[8,9],nz:[1,1]},{size:2,px:[21,4],py:[16,3],pz:[0,-1],nx:[23,23],ny:[16,15],nz:[0,0]},{size:2,px:[2,0],py:[7,4],pz:[1,-1],nx:[3,8],ny:[7,4],nz:[1,1]},{size:2,px:[15,16],py:[11,12],pz:[0,0],nx:[8,5],ny:[4,5],nz:[1,-1]},{size:2,px:[0,0],py:[7,5],pz:[0,0],nx:[17,17],ny:[11,10],nz:[0,-1]},{size:5,px:[8,13,12,3,3],py:[6,23,23,3,3],pz:[1,0,0,2,-1],nx:[0,1,0,0,0],ny:[2,13,4,5,6],nz:[2,0,1,1,1]},{size:2,px:[0,1],py:[7,8],pz:[1,-1],nx:[0,0],ny:[1,0],nz:[2,2]},{size:2,px:[2,12],py:[1,7],pz:[1,-1],nx:[0,0],ny:[12,14],nz:[0,0]},{size:2,px:[5,1],py:[7,4],pz:[1,2],nx:[8,0],ny:[15,14],nz:[0,-1]},{size:2,px:[7,4],py:[14,8],pz:[0,-1],nx:[2,4],ny:[1,4],nz:[2,1]},{size:2,px:[5,3],py:[3,1],pz:[2,-1],nx:[9,9],ny:[5,6],nz:[1,1]},{size:2,px:[4,5],py:[2,3],pz:[1,-1],nx:[11,12],ny:[23,23],nz:[0,0]},{size:2,px:[10,5],py:[7,0],pz:[1,-1],nx:[22,22],ny:[19,18],nz:[0,0]},{size:3,px:[10,2,9],py:[20,9,4],pz:[0,-1,-1],nx:[1,10,11],ny:[2,11,9],nz:[2,0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[9,3],ny:[4,2],nz:[1,-1]},{size:2,px:[17,6],py:[7,16],pz:[0,-1],nx:[17,17],ny:[9,6],
nz:[0,0]},{size:3,px:[8,1,9],py:[6,3,4],pz:[1,-1,-1],nx:[2,9,2],ny:[5,13,3],nz:[2,0,2]},{size:4,px:[10,10,9,2],py:[12,11,2,10],pz:[0,0,-1,-1],nx:[6,11,3,13],ny:[2,4,1,4],nz:[1,0,2,0]},{size:2,px:[3,3],py:[7,1],pz:[1,-1],nx:[4,3],ny:[4,4],nz:[1,1]},{size:2,px:[0,0],py:[4,8],pz:[2,1],nx:[4,4],ny:[15,5],nz:[0,-1]},{size:2,px:[5,0],py:[4,8],pz:[1,-1],nx:[13,13],ny:[9,10],nz:[0,0]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[8,17],ny:[4,12],nz:[1,-1]},{size:2,px:[15,16],py:[11,6],pz:[0,0],nx:[16,17],ny:[5,12],nz:[0,-1]},{size:2,px:[13,11],py:[9,7],pz:[0,-1],nx:[0,1],ny:[9,20],nz:[1,0]},{size:3,px:[16,11,20],py:[4,7,23],pz:[0,-1,-1],nx:[8,9,4],ny:[4,6,4],nz:[1,1,2]},{size:2,px:[1,1],py:[18,17],pz:[0,0],nx:[9,6],ny:[7,11],nz:[0,-1]},{size:3,px:[4,4,19],py:[3,2,9],pz:[2,2,0],nx:[2,14,11],ny:[5,3,9],nz:[1,-1,-1]},{size:2,px:[11,19],py:[13,9],pz:[0,-1],nx:[11,11],ny:[4,5],nz:[1,1]},{size:2,px:[13,7],py:[19,2],pz:[0,-1],nx:[3,5],ny:[6,12],nz:[1,0]},{size:4,px:[9,4,4,2],py:[13,9,8,4],pz:[0,1,1,2],nx:[13,0,0,14],ny:[18,11,6,1],nz:[0,-1,-1,-1]},{size:2,px:[11,15],py:[8,10],pz:[0,0],nx:[14,11],ny:[9,2],nz:[0,-1]},{size:2,px:[3,2],py:[8,5],pz:[1,2],nx:[4,4],ny:[10,10],nz:[1,-1]},{size:4,px:[4,6,16,14],py:[1,1,1,7],pz:[2,1,0,0],nx:[10,1,1,2],ny:[8,5,10,3],nz:[0,-1,-1,-1]},{size:4,px:[2,3,1,2],py:[3,1,0,2],pz:[0,0,1,0],nx:[0,0,0,0],ny:[1,1,2,0],nz:[0,1,0,1]},{size:2,px:[8,8],py:[6,7],pz:[1,1],nx:[8,0],ny:[4,1],nz:[1,-1]},{size:2,px:[0,0],py:[3,0],pz:[0,1],nx:[2,2],ny:[1,16],nz:[1,-1]},{size:2,px:[6,6],py:[19,18],pz:[0,0],nx:[2,10],ny:[5,8],nz:[2,-1]},{size:2,px:[8,5],py:[21,11],pz:[0,-1],nx:[3,2],ny:[11,5],nz:[1,2]},{size:2,px:[4,9],py:[4,7],pz:[2,1],nx:[8,7],ny:[10,4],nz:[1,-1]},{size:5,px:[4,18,19,16,19],py:[3,12,12,23,13],pz:[2,0,0,0,0],nx:[2,8,3,2,2],ny:[4,23,10,5,5],nz:[2,0,1,2,-1]},{size:2,px:[4,8],py:[6,11],pz:[1,0],nx:[8,3],ny:[4,7],nz:[1,-1]},{size:2,px:[3,12],py:[4,13],pz:[2,0],nx:[10,5],ny:[15,21],nz:[0,-1]},{size:2,px:[2,9],py:[4,23],pz:[2,0],nx:[19,4],ny:[9,3],nz:[0,2]},{size:2,px:[3,6],py:[8,15],pz:[1,0],nx:[6,1],ny:[18,5],nz:[0,-1]},{size:2,px:[9,0],py:[20,3],pz:[0,-1],nx:[2,10],ny:[5,17],nz:[2,0]},{size:3,px:[10,6,3],py:[2,7,3],pz:[0,-1,-1],nx:[5,4,2],ny:[9,7,2],nz:[1,1,2]},{size:2,px:[14,6],py:[12,7],pz:[0,-1],nx:[2,10],ny:[0,1],nz:[2,0]},{size:3,px:[10,5,1],py:[15,5,4],pz:[0,-1,-1],nx:[9,4,18],ny:[2,0,4],nz:[1,2,0]},{size:2,px:[17,2],py:[12,6],pz:[0,-1],nx:[8,16],ny:[4,11],nz:[1,0]},{size:3,px:[7,13,4],py:[0,0,1],pz:[1,0,-1],nx:[18,4,4],ny:[13,2,3],nz:[0,2,2]},{size:2,px:[1,11],py:[10,6],pz:[0,-1],nx:[0,1],ny:[15,17],nz:[0,0]},{size:3,px:[9,12,8],py:[8,17,11],pz:[1,0,1],nx:[12,0,20],ny:[16,9,13],nz:[0,-1,-1]},{size:2,px:[11,4],py:[5,8],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[16,3],py:[9,8],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[6,3],py:[11,5],pz:[1,2],nx:[11,5],ny:[21,5],nz:[0,-1]},{size:2,px:[11,13],py:[1,1],pz:[0,0],nx:[4,4],ny:[5,5],nz:[1,-1]},{size:2,px:[14,4],py:[4,3],pz:[0,-1],nx:[12,10],ny:[2,2],nz:[0,0]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[9,7],ny:[9,7],nz:[0,-1]},{size:3,px:[5,6,6],py:[4,4,4],pz:[1,-1,-1],nx:[13,8,7],ny:[8,3,4],nz:[0,1,1]},{size:2,px:[5,5],py:[2,11],pz:[1,1],nx:[10,11],ny:[22,22],nz:[0,0]},{size:2,px:[16,9],py:[13,7],pz:[0,1],nx:[8,14],ny:[4,12],nz:[1,-1]},{size:2,px:[13,5],py:[13,3],pz:[0,2],nx:[16,22],ny:[13,6],nz:[0,-1]},{size:4,px:[4,4,3,4],py:[4,3,4,5],pz:[2,2,2,2],nx:[21,5,17,7],ny:[0,2,5,23],nz:[0,-1,-1,-1]},{size:2,px:[4,16],py:[0,1],pz:[2,0],nx:[15,1],ny:[23,10],nz:[0,-1]},{size:2,px:[4,6],py:[11,2],pz:[0,-1],nx:[15,6],ny:[2,1],nz:[0,1]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:3,px:[13,14,5],py:[9,15,2],pz:[0,-1,-1],nx:[11,1,11],ny:[10,3,11],nz:[0,1,0]},{size:2,px:[5,1],py:[6,2],pz:[1,-1],nx:[1,1],ny:[2,5],nz:[2,1]},{size:2,px:[11,5],py:[1,0],pz:[1,2],nx:[10,4],ny:[2,3],nz:[1,-1]},{size:2,px:[11,11],py:[8,9],pz:[1,1],nx:[23,4],ny:[23,2],nz:[0,-1]},{size:2,px:[5,2],py:[10,2],pz:[0,-1],nx:[18,10],ny:[0,1],nz:[0,1]},{size:2,px:[20,4],py:[7,3],pz:[0,2],nx:[8,4],ny:[4,0],nz:[1,-1]},{size:2,px:[10,4],py:[5,4],pz:[1,-1],nx:[11,11],ny:[5,6],nz:[1,1]},{size:3,px:[14,15,16],py:[0,0,1],pz:[0,0,0],nx:[8,5,15],ny:[7,2,10],nz:[1,-1,-1]},{size:2,px:[2,2],py:[1,1],pz:[2,-1],nx:[17,18],ny:[2,2],nz:[0,0]},{size:2,px:[13,8],py:[15,7],pz:[0,-1],nx:[9,4],ny:[5,2],nz:[0,1]},{size:2,px:[4,0],py:[6,17],pz:[1,-1],nx:[3,2],ny:[4,2],nz:[1,2]},{size:2,px:[14,8],py:[17,9],pz:[0,-1],nx:[7,6],ny:[8,8],nz:[1,1]},{size:2,px:[10,4],py:[7,1],pz:[1,-1],nx:[15,6],ny:[14,4],nz:[0,1]},{size:2,px:[3,12],py:[8,19],pz:[1,0],nx:[13,10],ny:[17,9],nz:[0,-1]},{size:2,px:[7,12],py:[2,4],pz:[1,0],nx:[6,11],ny:[3,2],nz:[0,-1]},{size:4,px:[2,1,6,1],py:[10,3,23,8],pz:[1,2,0,1],nx:[17,10,23,0],ny:[9,2,20,3],nz:[0,-1,-1,-1]},{size:2,px:[9,9],py:[2,8],pz:[0,-1],nx:[2,2],ny:[4,2],nz:[2,2]},{size:2,px:[3,16],py:[1,6],pz:[2,0],nx:[8,4],ny:[2,5],nz:[1,-1]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[5,6],py:[3,0],pz:[2,-1],nx:[9,5],ny:[2,1],nz:[0,1]},{size:2,px:[3,16],py:[5,23],pz:[1,-1],nx:[0,0],ny:[6,3],nz:[1,2]},{size:4,px:[0,0,0,0],py:[3,2,12,5],pz:[2,2,0,1],nx:[2,3,2,13],ny:[5,5,2,19],nz:[1,-1,-1,-1]},{size:2,px:[11,11],py:[10,11],pz:[0,0],nx:[5,5],ny:[1,1],nz:[2,-1]},{size:2,px:[5,2],py:[0,4],pz:[2,-1],nx:[2,2],ny:[10,8],nz:[1,1]},{size:4,px:[16,2,8,4],py:[14,0,11,5],pz:[0,-1,-1,-1],nx:[18,14,7,7],ny:[13,14,8,6],nz:[0,0,1,1]},{size:2,px:[8,9],py:[2,2],pz:[0,0],nx:[5,14],ny:[4,14],nz:[1,-1]},{size:2,px:[3,5],py:[11,20],pz:[1,0],nx:[11,4],ny:[0,2],nz:[0,-1]},{size:2,px:[2,2],py:[3,4],pz:[2,2],nx:[3,4],ny:[4,2],nz:[1,-1]},{size:3,px:[10,4,3],py:[5,5,3],pz:[0,-1,-1],nx:[11,3,10],ny:[2,0,2],nz:[0,2,0]},{size:2,px:[15,15],py:[1,1],pz:[0,-1],nx:[7,4],ny:[5,2],nz:[1,2]},{size:4,px:[9,5,2,6],py:[22,8,4,19],pz:[0,1,2,0],nx:[9,5,0,3],ny:[20,5,22,4],nz:[0,-1,-1,-1]},{size:3,px:[1,4,10],py:[3,9,12],pz:[2,1,0],nx:[0,10,0],ny:[0,5,0],nz:[0,-1,-1]},{size:2,px:[1,6],py:[0,7],pz:[0,-1],nx:[20,19],ny:[14,14],nz:[0,0]},{size:2,px:[13,4],py:[14,15],pz:[0,-1],nx:[2,1],ny:[5,7],nz:[0,0]},{size:2,px:[17,7],py:[9,11],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[17,9],py:[12,6],pz:[0,1],nx:[15,10],ny:[9,8],nz:[0,-1]},{size:2,px:[0,0],py:[0,1],pz:[2,2],nx:[9,7],ny:[6,17],nz:[1,-1]},{size:3,px:[3,3,15],py:[3,4,6],pz:[2,1,0],nx:[0,2,22],ny:[5,8,9],nz:[0,-1,-1]},{size:4,px:[15,15,15,1],py:[12,6,6,1],pz:[0,-1,-1,-1],nx:[4,7,13,4],ny:[4,7,12,2],nz:[2,1,0,2]},{size:2,px:[3,15],py:[12,6],pz:[0,-1],nx:[9,1],ny:[14,2],nz:[0,2]},{size:2,px:[12,12],py:[11,12],pz:[0,0],nx:[9,5],ny:[4,4],nz:[1,-1]},{size:3,px:[23,6,7],py:[23,3,4],pz:[0,-1,-1],nx:[19,16,17],ny:[17,14,15],nz:[0,0,0]},{size:2,px:[9,5],py:[2,7],pz:[1,-1],nx:[11,23],ny:[10,18],nz:[1,0]},{size:3,px:[0,0,0],py:[4,9,2],pz:[1,0,2],nx:[2,0,0],ny:[9,2,1],nz:[0,-1,-1]},{size:2,px:[12,0],py:[11,9],pz:[0,-1],nx:[1,0],ny:[18,5],nz:[0,2]},{size:2,px:[5,4],py:[10,6],pz:[0,1],nx:[10,6],ny:[10,18],nz:[0,-1]},{size:2,px:[13,12],py:[13,13],pz:[0,-1],nx:[5,11],ny:[1,3],nz:[2,1]},{size:2,px:[10,19],py:[5,22],pz:[1,-1],nx:[4,12],ny:[1,5],nz:[2,0]},{size:2,px:[8,6],py:[0,0],pz:[0,0],nx:[3,12],ny:[0,3],nz:[0,-1]},{size:2,px:[9,6],py:[7,0],pz:[1,-1],nx:[12,12],ny:[10,11],nz:[0,0]},{size:4,px:[3,1,3,2],py:[20,9,21,19],pz:[0,1,0,0],nx:[20,20,5,12],ny:[10,15,2,10],nz:[0,-1,-1,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,1],ny:[4,6],nz:[1,-1]},{size:3,px:[5,11,11],py:[1,3,4],pz:[2,1,1],nx:[3,3,7],ny:[5,5,0],nz:[1,-1,-1]},{size:3,px:[8,6,7],py:[10,5,6],pz:[1,1,1],nx:[23,3,7],ny:[0,5,0],nz:[0,-1,-1]},{size:2,px:[2,7],py:[2,14],pz:[1,-1],nx:[7,3],ny:[12,4],nz:[0,1]},{size:2,px:[5,3],py:[6,3],pz:[1,2],nx:[13,3],ny:[12,4],nz:[0,-1]},{size:2,px:[11,18],py:[11,4],pz:[0,-1],nx:[23,11],ny:[19,10],nz:[0,1]},{size:2,px:[7,2],py:[12,3],pz:[0,-1],nx:[8,4],ny:[11,5],nz:[0,1]},{size:2,px:[11,11],py:[0,11],pz:[1,-1],nx:[3,3],ny:[19,18],nz:[0,0]},{size:2,px:[11,1],py:[11,11],pz:[1,-1],nx:[13,15],ny:[6,5],nz:[0,0]},{size:2,px:[8,8],py:[9,9],pz:[0,-1],nx:[5,11],ny:[1,3],nz:[2,1]},{size:4,px:[6,4,8,3],py:[6,2,4,3],pz:[0,2,1,2],nx:[7,0,15,8],ny:[8,8,16,7],nz:[0,-1,-1,-1]},{size:2,px:[4,3],py:[22,20],pz:[0,0],nx:[2,8],ny:[5,4],nz:[2,-1]},{size:2,px:[12,6],py:[11,0],pz:[0,-1],nx:[0,0],ny:[3,1],nz:[1,2]},{size:2,px:[0,0],py:[12,7],pz:[0,1],nx:[3,1],ny:[23,9],nz:[0,-1]},{size:2,px:[7,0],py:[11,5],pz:[1,-1],nx:[0,0],ny:[2,3],nz:[2,2]},{size:2,px:[8,8],py:[10,10],pz:[0,-1],nx:[4,3],ny:[5,4],nz:[2,2]},{size:2,px:[13,3],py:[2,4],pz:[0,-1],nx:[4,3],ny:[3,5],nz:[2,2]},{size:2,px:[1,1],py:[23,22],pz:[0,0],nx:[9,0],ny:[7,3],nz:[0,-1]},{size:2,px:[1,0],py:[16,15],pz:[0,0],nx:[0,14],ny:[23,12],nz:[0,-1]},{size:2,px:[13,8],py:[22,0],pz:[0,-1],nx:[5,3],ny:[0,1],nz:[1,1]},{size:2,px:[13,13],py:[7,7],pz:[0,-1],nx:[3,2],ny:[17,10],nz:[0,1]},{size:2,px:[20,20],py:[15,16],pz:[0,0],nx:[7,3],ny:[9,17],nz:[1,-1]},{size:5,px:[10,12,11,13,11],py:[2,2,1,2,2],pz:[0,0,0,0,0],nx:[10,18,21,21,19],ny:[3,1,13,11,2],nz:[1,0,0,0,0]},{size:2,px:[16,3],py:[6,1],pz:[0,2],nx:[15,18],ny:[8,1],nz:[0,-1]},{size:2,px:[19,3],py:[8,1],pz:[0,-1],nx:[9,8],ny:[4,4],nz:[1,1]},{size:2,px:[10,3],py:[15,18],pz:[0,-1],nx:[3,3],ny:[0,1],nz:[2,2]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[7,3],ny:[11,1],nz:[1,-1]},{size:2,px:[11,10],py:[17,9],pz:[0,-1],nx:[11,10],ny:[15,15],nz:[0,0]},{size:2,px:[5,10],py:[2,4],pz:[1,0],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[9,10],py:[3,4],pz:[0,-1],nx:[9,10],ny:[2,1],nz:[0,0]},{size:2,px:[23,11],py:[13,10],pz:[0,1],nx:[14,7],ny:[5,14],nz:[0,-1]},{size:2,px:[4,4],py:[5,4],pz:[2,2],nx:[9,8],ny:[3,3],nz:[1,-1]},{size:3,px:[12,4,15],py:[5,4,7],pz:[0,-1,-1],nx:[3,4,2],ny:[7,11,5],nz:[1,1,2]},{size:2,px:[11,4],py:[15,4],pz:[0,-1],nx:[5,9],ny:[7,15],nz:[1,0]},{size:2,px:[9,7],py:[0,1],pz:[1,-1],nx:[11,11],ny:[8,7],nz:[1,1]},{size:5,px:[1,1,1,1,1],py:[11,12,10,9,9],pz:[0,0,0,0,-1],nx:[4,5,8,16,11],ny:[4,3,8,8,6],nz:[1,1,0,0,0]}],alpha:[-1.059083,1.059083,-.7846122,.7846122,-.445116,.445116,-.4483277,.4483277,-.3905999,.3905999,-.378925,.378925,-.387461,.387461,-.3110541,.3110541,-.3565056,.3565056,-.3812617,.3812617,-.3325142,.3325142,-.2787282,.2787282,-.3238869,.3238869,-.2993499,.2993499,-.2807737,.2807737,-.2855285,.2855285,-.227755,.227755,-.2031261,.2031261,-.2071574,.2071574,-.2534142,.2534142,-.2266871,.2266871,-.2229078,.2229078,-.2716325,.2716325,-.3046938,.3046938,-.2271601,.2271601,-.1987651,.1987651,-.1953664,.1953664,-.2178737,.2178737,-.2285148,.2285148,-.1891073,.1891073,-.2926469,.2926469,-.2094783,.2094783,-.1478037,.1478037,-.1707579,.1707579,-.146439,.146439,-.2462321,.2462321,-.2319978,.2319978,-.1781651,.1781651,-.1471349,.1471349,-.1953006,.1953006,-.2145108,.2145108,-.1567881,.1567881,-.2024617,.2024617,-.1883198,.1883198,-.1996976,.1996976,-.129233,.129233,-.2142242,.2142242,-.2473748,.2473748,-.1880902,.1880902,-.1874572,.1874572,-.1495984,.1495984,-.1608525,.1608525,-.1698402,.1698402,-.1898871,.1898871,-.1350238,.1350238,-.1727032,.1727032,-.1593352,.1593352,-.1476968,.1476968,-.1428431,.1428431,-.1766261,.1766261,-.1453226,.1453226,-.1929885,.1929885,-.1337582,.1337582,-.1629078,.1629078,-.09973085,.09973085,-.117276,.117276,-.1399242,.1399242,-.1613189,.1613189,-.1145695,.1145695,-.1191093,.1191093,-.12259,.12259,-.1641114,.1641114,-.1419878,.1419878,-.2183465,.2183465,-.1566968,.1566968,-.1288216,.1288216,-.1422831,.1422831,-.2000107,.2000107,-.1817265,.1817265,-.1793796,.1793796,-.1428926,.1428926,-.1182032,.1182032,-.1150421,.1150421,-.1336584,.1336584,-.1656178,.1656178,-.1386549,.1386549,-.1387461,.1387461,-.1313023,.1313023,-.1360391,.1360391,-.1305505,.1305505,-.1323399,.1323399,-.1502891,.1502891,-.1488859,.1488859,-.1126628,.1126628,-.1233623,.1233623,-.1702106,.1702106,-.1629639,.1629639,-.1337706,.1337706,-.1290384,.1290384,-.1165519,.1165519,-.1412778,.1412778,-.1470204,.1470204,-.221378,.221378,-.1472619,.1472619,-.1357071,.1357071,-.1416513,.1416513,-.1050208,.1050208,-.1480033,.1480033,-.1899871,.1899871,-.1466249,.1466249,-.1076952,.1076952,-.1035096,.1035096,-.156697,.156697,-.1364115,.1364115,-.1512889,.1512889,-.1252851,.1252851,-.12063,.12063,-.1059134,.1059134,-.1140398,.1140398,-.1359912,.1359912,-.1231201,.1231201,-.1231867,.1231867,-.09789923,.09789923,-.1590213,.1590213,-.1002206,.1002206,-.1518339,.1518339,-.1055203,.1055203,-.1012579,.1012579,-.1094956,.1094956,-.1429592,.1429592,-.1108838,.1108838,-.1116475,.1116475,-.1735371,.1735371,-.1067758,.1067758,-.1290406,.1290406,-.1156822,.1156822,-.09668217,.09668217,-.1170053,.1170053,-.1252092,.1252092,-.1135158,.1135158,-.1105896,.1105896,-.1038175,.1038175,-.1210459,.1210459,-.1078878,.1078878,-.1050808,.1050808,-.1428227,.1428227,-.16646,.16646,-.1013508,.1013508,-.120693,.120693,-.1088972,.1088972,-.1381026,.1381026,-.1109115,.1109115,-.07921549,.07921549,-.1057832,.1057832,-.09385827,.09385827,-.1486035,.1486035,-.1247401,.1247401,-.09451327,.09451327,-.1272805,.1272805,-.09616206,.09616206,-.09051084,.09051084,-.1138458,.1138458,-.1047581,.1047581,-.1382394,.1382394,-.1122203,.1122203,-.1052936,.1052936,-.1239318,.1239318,-.1241439,.1241439,-.1259012,.1259012,-.1211701,.1211701,-.1344131,.1344131,-.1127778,.1127778,-.1609745,.1609745,-.1901382,.1901382,-.1618962,.1618962,-.1230398,.1230398,-.1319311,.1319311,-.143141,.143141,-.1143306,.1143306,-.09390938,.09390938,-.1154161,.1154161,-.1141205,.1141205,-.1098048,.1098048,-.08870072,.08870072,-.1122444,.1122444,-.1114147,.1114147,-.118571,.118571,-.1107775,.1107775,-.1259167,.1259167,-.1105176,.1105176,-.1020691,.1020691,-.09607863,.09607863,-.095737,.095737,-.1054349,.1054349,-.1137856,.1137856,-.1192043,.1192043,-.1113264,.1113264,-.1093137,.1093137,-.1010919,.1010919,-.09625901,.09625901,-.09338459,.09338459,-.1142944,.1142944,-.1038877,.1038877,-.09772862,.09772862,-.1375298,.1375298,-.1394776,.1394776,-.09454765,.09454765,-.1203246,.1203246,-.08684943,.08684943,-.1135622,.1135622,-.1058181,.1058181,-.1082152,.1082152,-.1411355,.1411355,-.09978846,.09978846,-.1057874,.1057874,-.1415366,.1415366,-.09981014,.09981014,-.09261151,.09261151,-.1737173,.1737173,-.1580335,.1580335,-.09594668,.09594668,-.09336013,.09336013,-.1102373,.1102373,-.08546557,.08546557,-.09945057,.09945057,-.1146358,.1146358,-.1324734,.1324734,-.1422296,.1422296,-.0993799,.0993799,-.08381049,.08381049,-.1270714,.1270714,-.1091738,.1091738,-.1314881,.1314881,-.1085159,.1085159,-.09247554,.09247554,-.08121645,.08121645,-.1059589,.1059589,-.08307793,.08307793,-.1033103,.1033103,-.1056706,.1056706,-.1032803,.1032803,-.126684,.126684,-.09341601,.09341601,-.0768357,.0768357,-.103053,.103053,-.1051872,.1051872,-.09114946,.09114946,-.1329341,.1329341,-.0927083,.0927083,-.114175,.114175,-.09889318,.09889318,-.08856485,.08856485,-.105421,.105421,-.1092704,.1092704,-.08729085,.08729085,-.1141057,.1141057,-.1530774,.1530774,-.0812972,.0812972,-.1143335,.1143335,-.1175777,.1175777,-.1371729,.1371729,-.1394356,.1394356,-.1016308,.1016308,-.1125547,.1125547,-.096726,.096726,-.1036631,.1036631,-.08702514,.08702514,-.1264807,.1264807,-.1465688,.1465688,-.08781464,.08781464,-.08552605,.08552605,-.1145072,.1145072,-.1378489,.1378489,-.1013312,.1013312,-.1020083,.1020083,-.1015816,.1015816,-.08407101,.08407101,-.08296485,.08296485,-.08033655,.08033655,-.09003615,.09003615,-.07504954,.07504954,-.1224941,.1224941,-.09347814,.09347814,-.09555575,.09555575,-.09810025,.09810025,-.1237068,.1237068,-.1283586,.1283586,-.1082763,.1082763,-.1018145,.1018145,-.1175161,.1175161,-.1252279,.1252279,-.1370559,.1370559,-.09941339,.09941339,-.08506938,.08506938,-.1260902,.1260902,-.1014152,.1014152,-.09728694,.09728694,-.0937491,.0937491,-.09587429,.09587429,-.09516036,.09516036,-.07375173,.07375173,-.09332487,.09332487,-.09020733,.09020733,-.1133381,.1133381,-.154218,.154218,-.09692168,.09692168,-.07960904,.07960904,-.08947089,.08947089,-.07830286,.07830286,-.0990005,.0990005,-.1041293,.1041293,-.09572501,.09572501,-.08230575,.08230575,-.09194901,.09194901,-.1076971,.1076971,-.1027782,.1027782,-.1028538,.1028538,-.1013992,.1013992,-.09087585,.09087585,-.1100706,.1100706,-.1094934,.1094934,-.1107879,.1107879,-.1026915,.1026915,-.1017572,.1017572,-.07984776,.07984776,-.09015413,.09015413,-.129987,.129987,-.09164982,.09164982,-.1062788,.1062788,-.1160203,.1160203,-.08858603,.08858603,-.09762964,.09762964,-.1070694,.1070694,-.09549046,.09549046,-.1533034,.1533034,-.08663316,.08663316,-.09303018,.09303018,-.09853582,.09853582,-.09733371,.09733371,-.1048555,.1048555,-.09056041,.09056041,-.07552283,.07552283,-.08780631,.08780631,-.1123953,.1123953,-.1452948,.1452948,-.1156423,.1156423,-.08701142,.08701142,-.09713334,.09713334,-.09970888,.09970888,-.08614129,.08614129,-.07459861,.07459861,-.09253517,.09253517,-.09570092,.09570092,-.09485535,.09485535,-.1148365,.1148365,-.1063193,.1063193,-.09986686,.09986686,-.07523412,.07523412,-.1005881,.1005881,-.08249716,.08249716,-.1055866,.1055866,-.134305,.134305,-.1371056,.1371056,-.09604689,.09604689,-.1224268,.1224268,-.09211478,.09211478,-.1108371,.1108371,-.1100547,.1100547,-.0893897,.0893897,-.08655951,.08655951,-.07085816,.07085816,-.08101028,.08101028,-.08338046,.08338046,-.08309588,.08309588,-.09090584,.09090584,-.08124564,.08124564,-.09367843,.09367843,-.1011747,.1011747,-.09885045,.09885045,-.08944266,.08944266,-.08453859,.08453859,-.08308847,.08308847,-.136728,.136728,-.1295144,.1295144,-.1063965,.1063965,-.07752328,.07752328,-.09681524,.09681524,-.07862345,.07862345,-.08767746,.08767746,-.09198041,.09198041,-.09686489,.09686489]},{count:564,threshold:-4.517456,feature:[{size:5,px:[15,9,8,12,11],py:[3,6,3,0,8],pz:[0,1,0,0,0],nx:[6,14,9,22,23],ny:[8,7,8,17,3],nz:[1,0,0,0,0]},{size:5,px:[12,13,11,14,12],py:[9,4,4,4,5],pz:[0,0,0,0,0],nx:[4,6,10,4,15],ny:[3,8,7,10,9],nz:[1,1,0,1,0]},{size:5,px:[7,5,6,8,8],py:[2,13,2,1,1],pz:[0,0,0,0,-1],nx:[3,0,4,1,0],ny:[4,3,10,3,13],nz:[1,1,1,0,0]},{size:5,px:[11,2,2,11,16],py:[9,4,2,7,11],pz:[0,2,2,0,0],nx:[8,4,1,14,0],ny:[4,4,16,5,13],nz:[1,1,-1,-1,-1]},{size:2,px:[14,14],py:[18,18],pz:[0,-1],nx:[8,13],ny:[10,16],nz:[1,0]},{size:5,px:[15,17,16,8,18],py:[1,2,1,0,2],pz:[0,0,0,1,0],nx:[21,22,22,22,22],ny:[1,5,3,4,2],nz:[0,0,0,0,-1]},{size:2,px:[15,4],py:[23,3],pz:[0,2],nx:[7,3],ny:[10,6],nz:[1,-1]},{size:5,px:[3,6,4,3,11],py:[10,11,8,3,8],pz:[1,0,1,1,0],nx:[3,5,6,3,0],ny:[4,9,9,9,0],nz:[1,-1,-1,-1,-1]},{size:3,px:[11,11,2],py:[11,13,16],pz:[0,0,-1],nx:[10,10,9],ny:[10,11,14],nz:[0,0,0]},{size:2,px:[8,4],py:[12,6],pz:[0,1],nx:[4,5],ny:[11,11],nz:[1,-1]},{size:5,px:[10,11,13,3,12],py:[3,4,3,0,1],pz:[0,0,0,2,0],nx:[14,18,20,19,15],ny:[13,1,15,2,18],nz:[0,0,0,0,0]},{size:5,px:[20,14,10,12,12],py:[12,12,4,10,11],pz:[0,0,1,0,0],nx:[9,2,9,9,9],ny:[4,12,5,9,14],nz:[1,-1,-1,-1,-1]},{size:5,px:[3,3,3,4,2],py:[15,16,14,21,12],pz:[0,0,0,0,0],nx:[0,0,0,0,0],ny:[20,10,5,21,21],nz:[0,1,2,0,-1]},{size:2,px:[18,8],py:[16,7],pz:[0,1],nx:[14,0],ny:[8,10],nz:[0,-1]},{size:4,px:[12,4,16,1],py:[14,3,8,3],pz:[0,-1,-1,-1],nx:[14,10,20,13],ny:[13,5,16,9],nz:[0,1,0,0]},{size:5,px:[3,8,2,3,3],py:[7,2,1,2,4],pz:[1,-1,-1,-1,-1],nx:[1,9,2,1,1],ny:[3,14,9,7,2],nz:[1,0,1,1,1]},{size:5,px:[4,1,3,2,3],py:[2,1,2,4,3],pz:[0,1,0,0,0],nx:[0,0,0,0,0],ny:[3,1,2,0,0],nz:[0,1,0,2,-1]},{size:4,px:[4,8,7,9],py:[6,11,11,10],pz:[1,0,0,0],nx:[3,10,2,20],ny:[4,4,4,8],nz:[1,-1,-1,-1]},{size:2,px:[1,8],py:[3,11],pz:[2,-1],nx:[8,2],ny:[15,5],nz:[0,2]},{size:2,px:[17,0],py:[13,10],pz:[0,-1],nx:[14,14],ny:[11,10],nz:[0,0]},{size:5,px:[22,22,22,5,22],py:[16,18,17,2,15],pz:[0,0,0,2,0],nx:[8,4,15,6,6],ny:[4,2,7,11,11],nz:[1,2,0,1,-1]},{size:5,px:[16,9,8,17,15],py:[12,6,6,22,12],pz:[0,1,1,0,0],nx:[11,23,23,23,22],ny:[11,23,22,21,23],nz:[1,0,0,0,-1]},{size:5,px:[5,2,4,4,9],py:[22,3,15,20,18],pz:[0,2,0,0,0],nx:[9,4,23,7,22],ny:[8,4,22,19,23],nz:[0,-1,-1,-1,-1]},{size:5,px:[8,6,9,7,3],py:[3,3,3,3,1],pz:[0,0,0,0,1],nx:[5,5,4,4,4],ny:[0,1,1,2,0],nz:[0,0,0,0,-1]},{size:2,px:[2,3],py:[3,3],pz:[2,2],nx:[3,6],ny:[4,6],nz:[1,-1]},{size:5,px:[1,1,0,1,0],py:[17,15,6,16,10],pz:[0,0,1,0,0],nx:[4,4,7,4,8],ny:[2,5,9,4,4],nz:[2,2,1,2,-1]},{size:5,px:[12,12,12,13,13],py:[10,9,11,13,13],pz:[0,0,0,0,-1],nx:[4,3,3,5,3],ny:[21,18,17,23,16],nz:[0,0,0,0,0]},{size:4,px:[5,6,5,9],py:[13,7,9,23],pz:[0,0,1,0],nx:[6,15,7,5],ny:[9,20,7,23],nz:[0,-1,-1,-1]},{size:2,px:[6,3],py:[4,2],pz:[1,2],nx:[8,23],ny:[4,2],nz:[1,-1]},{size:2,px:[9,7],py:[18,0],pz:[0,0],nx:[5,7],ny:[8,10],nz:[1,1]},{size:2,px:[4,6],py:[11,16],pz:[1,0],nx:[10,9],ny:[16,7],nz:[0,-1]},{size:4,px:[11,11,11,11],py:[11,10,12,13],pz:[0,0,0,0],nx:[13,13,13,9],ny:[11,9,10,4],nz:[0,0,0,1]},{size:4,px:[12,6,7,6],py:[7,11,8,4],pz:[0,1,1,1],nx:[10,0,19,7],ny:[21,3,12,11],nz:[0,-1,-1,-1]},{size:2,px:[4,4],py:[3,4],pz:[2,2],nx:[9,1],ny:[4,7],nz:[1,-1]},{size:2,px:[19,19],py:[21,20],pz:[0,0],nx:[7,7],ny:[3,13],nz:[1,-1]},{size:5,px:[12,9,13,11,5],py:[0,2,2,0,0],pz:[0,0,0,0,1],nx:[6,4,5,5,5],ny:[1,3,5,2,6],nz:[0,0,1,0,1]},{size:5,px:[4,3,2,5,7],py:[11,3,3,7,17],pz:[1,2,2,0,0],nx:[23,5,11,5,5],ny:[0,4,10,2,6],nz:[0,-1,-1,-1,-1]},{size:2,px:[20,17],py:[12,3],pz:[0,-1],nx:[20,19],ny:[21,23],nz:[0,0]},{size:2,px:[2,1],py:[12,8],pz:[0,0],nx:[2,8],ny:[2,16],nz:[2,-1]},{size:2,px:[16,5],py:[4,5],pz:[0,-1],nx:[7,8],ny:[9,1],nz:[1,1]},{size:2,px:[2,2],py:[0,1],pz:[1,1],nx:[1,8],ny:[5,1],nz:[0,-1]},{size:2,px:[1,1],py:[12,10],pz:[0,1],nx:[2,20],ny:[23,9],nz:[0,-1]},{size:4,px:[11,0,0,2],py:[14,3,9,22],pz:[0,-1,-1,-1],nx:[13,14,7,3],ny:[6,7,11,1],nz:[0,0,0,2]},{size:2,px:[14,0],py:[2,3],pz:[0,-1],nx:[4,4],ny:[4,3],nz:[2,2]},{size:2,px:[23,11],py:[18,11],pz:[0,1],nx:[3,2],ny:[1,21],nz:[1,-1]},{size:2,px:[9,9],py:[17,14],pz:[0,-1],nx:[4,5],ny:[10,8],nz:[1,1]},{size:2,px:[9,18],py:[7,14],pz:[1,0],nx:[18,9],ny:[17,8],nz:[0,-1]},{size:2,px:[2,8],py:[4,22],pz:[2,0],nx:[4,3],ny:[10,1],nz:[1,-1]},{size:2,px:[5,22],py:[4,9],pz:[2,-1],nx:[11,23],ny:[8,14],nz:[1,0]},{size:3,px:[23,5,5],py:[8,2,1],pz:[0,2,2],nx:[10,10,2],ny:[4,4,2],nz:[1,-1,-1]},{size:2,px:[11,11],py:[14,23],pz:[0,-1],nx:[3,11],ny:[4,13],nz:[1,0]},{size:2,px:[3,2],py:[7,0],pz:[1,-1],nx:[4,3],ny:[4,4],nz:[1,1]},{size:2,px:[12,1],py:[19,13],pz:[0,-1],nx:[9,12],ny:[10,18],nz:[1,0]},{size:2,px:[10,10],py:[11,10],pz:[1,1],nx:[4,1],ny:[5,11],nz:[2,-1]},{size:5,px:[9,12,4,8,8],py:[3,5,2,9,8],pz:[1,0,2,1,1],nx:[23,23,23,23,23],ny:[3,4,6,5,5],nz:[0,0,0,0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,9],ny:[4,6],nz:[1,-1]},{size:5,px:[13,13,13,7,7],py:[11,10,9,6,6],pz:[0,0,0,1,-1],nx:[5,5,15,5,2],ny:[5,15,9,9,1],nz:[0,0,0,1,2]},{size:2,px:[19,7],py:[21,7],pz:[0,1],nx:[14,10],ny:[15,4],nz:[0,-1]},{size:2,px:[5,5],py:[3,4],pz:[2,2],nx:[21,0],ny:[23,5],nz:[0,-1]},{size:2,px:[2,0],py:[0,0],pz:[1,-1],nx:[3,2],ny:[1,2],nz:[0,0]},{size:2,px:[9,0],py:[4,0],pz:[0,-1],nx:[5,12],ny:[0,1],nz:[1,0]},{size:5,px:[14,16,12,15,13],py:[0,1,0,0,0],pz:[0,0,0,0,0],nx:[4,8,8,4,9],ny:[2,3,4,1,3],nz:[2,1,1,2,-1]},{size:3,px:[4,17,2],py:[11,14,1],pz:[1,-1,-1],nx:[9,8,17],ny:[1,4,0],nz:[1,1,0]},{size:2,px:[18,9],py:[17,7],pz:[0,1],nx:[8,4],ny:[4,7],nz:[1,-1]},{size:2,px:[0,0],py:[3,0],pz:[1,2],nx:[10,11],ny:[6,5],nz:[1,-1]},{size:5,px:[21,21,21,21,20],py:[17,16,19,18,21],pz:[0,0,0,0,0],nx:[0,0,0,0,0],ny:[4,9,11,6,6],nz:[1,0,0,1,-1]},{size:2,px:[12,0],py:[7,1],pz:[0,-1],nx:[8,11],ny:[4,17],nz:[1,0]},{size:4,px:[13,0,0,0],py:[15,0,0,0],pz:[0,-1,-1,-1],nx:[3,7,4,6],ny:[2,7,5,9],nz:[2,1,2,1]},{size:2,px:[2,9],py:[3,12],pz:[2,0],nx:[2,0],ny:[4,0],nz:[1,-1]},{size:2,px:[10,3],py:[6,1],pz:[1,-1],nx:[20,21],ny:[19,14],nz:[0,0]},{size:5,px:[5,22,22,11,22],py:[1,4,3,3,2],pz:[2,0,0,1,-1],nx:[7,13,14,8,15],ny:[3,6,6,3,7],nz:[1,0,0,1,0]},{size:2,px:[12,19],py:[5,15],pz:[0,-1],nx:[16,4],ny:[8,2],nz:[0,2]},{size:2,px:[1,0],py:[11,9],pz:[1,1],nx:[5,0],ny:[3,3],nz:[1,-1]},{size:4,px:[8,3,4,2],py:[6,7,5,3],pz:[1,-1,-1,-1],nx:[13,14,11,11],ny:[11,13,3,5],nz:[0,0,1,1]},{size:2,px:[11,11],py:[5,6],pz:[0,0],nx:[8,4],ny:[4,2],nz:[1,-1]},{size:2,px:[5,9],py:[6,17],pz:[1,0],nx:[9,4],ny:[15,11],nz:[0,-1]},{size:3,px:[6,3,6],py:[6,3,5],pz:[1,2,1],nx:[11,10,4],ny:[8,11,5],nz:[0,0,-1]},{size:2,px:[8,16],py:[0,1],pz:[1,-1],nx:[19,17],ny:[1,0],nz:[0,0]},{size:2,px:[21,20],py:[4,1],pz:[0,0],nx:[11,5],ny:[0,0],nz:[1,2]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[8,9],ny:[4,10],nz:[1,-1]},{size:2,px:[10,1],py:[0,0],pz:[1,-1],nx:[13,12],ny:[6,5],nz:[0,0]},{size:2,px:[5,4],py:[3,11],pz:[1,-1],nx:[3,17],ny:[1,3],nz:[2,0]},{size:2,px:[12,13],py:[4,4],pz:[0,0],nx:[3,3],ny:[1,1],nz:[2,-1]},{size:2,px:[3,18],py:[2,7],pz:[2,0],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[16,6],py:[8,2],pz:[0,1],nx:[8,9],ny:[4,19],nz:[1,-1]},{size:3,px:[12,3,14],py:[13,3,15],pz:[0,-1,-1],nx:[0,1,0],ny:[16,18,15],nz:[0,0,0]},{size:2,px:[3,1],py:[3,4],pz:[2,-1],nx:[7,14],ny:[10,14],nz:[1,0]},{size:2,px:[9,16],py:[6,10],pz:[1,0],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[7,11],py:[4,4],pz:[0,0],nx:[7,23],ny:[3,11],nz:[0,-1]},{size:5,px:[2,4,3,4,4],py:[1,2,0,1,1],pz:[1,0,1,0,-1],nx:[11,9,4,9,5],ny:[6,5,3,6,3],nz:[0,0,1,0,1]},{size:2,px:[6,0],py:[14,1],pz:[0,-1],nx:[2,5],ny:[2,9],nz:[2,1]},{size:2,px:[6,7],py:[7,12],pz:[0,0],nx:[3,22],ny:[3,16],nz:[1,-1]},{size:2,px:[10,4],py:[1,1],pz:[0,1],nx:[2,6],ny:[2,21],nz:[2,-1]},{size:2,px:[13,1],py:[11,6],pz:[0,-1],nx:[12,6],ny:[5,2],nz:[0,1]},{size:5,px:[10,5,11,10,10],py:[4,3,4,6,5],pz:[0,1,0,0,0],nx:[4,7,13,8,4],ny:[2,8,9,4,4],nz:[2,1,0,1,-1]},{size:4,px:[7,8,7,8],py:[11,3,4,7],pz:[1,1,1,1],nx:[0,7,3,8],ny:[0,12,2,4],nz:[0,-1,-1,-1]},{size:2,px:[0,0],py:[4,7],pz:[2,1],nx:[10,1],ny:[7,0],nz:[0,-1]},{size:2,px:[11,5],py:[19,5],pz:[0,-1],nx:[11,5],ny:[17,10],nz:[0,1]},{size:2,px:[11,12],py:[4,4],pz:[0,0],nx:[7,5],ny:[8,3],nz:[0,-1]},{size:3,px:[4,8,4],py:[2,9,4],pz:[2,1,2],nx:[3,19,3],ny:[1,16,5],nz:[1,-1,-1]},{size:2,px:[3,7],py:[0,1],pz:[1,0],nx:[2,3],ny:[15,2],nz:[0,-1]},{size:2,px:[0,4],py:[2,0],pz:[2,-1],nx:[9,16],ny:[5,11],nz:[1,0]},{size:2,px:[14,15],py:[23,16],pz:[0,0],nx:[13,3],ny:[15,1],nz:[0,-1]},{size:2,px:[4,3],py:[0,1],pz:[1,-1],nx:[3,7],ny:[0,0],nz:[1,0]},{size:2,px:[7,6],py:[12,12],pz:[0,0],nx:[4,8],ny:[5,4],nz:[1,-1]},{size:5,px:[4,1,2,4,5],py:[1,0,0,0,6],pz:[0,2,1,0,1],nx:[4,8,7,8,6],ny:[4,10,11,4,4],nz:[1,0,0,1,1]},{size:2,px:[12,12],py:[15,8],pz:[0,-1],nx:[7,15],ny:[16,14],nz:[0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[4,6],ny:[2,8],nz:[2,-1]},{size:2,px:[14,4],py:[19,23],pz:[0,-1],nx:[7,14],ny:[11,18],nz:[1,0]},{size:2,px:[4,2],py:[7,4],pz:[1,2],nx:[2,22],ny:[5,19],nz:[2,-1]},{size:2,px:[8,15],py:[7,17],pz:[1,0],nx:[14,4],ny:[15,5],nz:[0,2]},{size:2,px:[10,11],py:[9,8],pz:[1,-1],nx:[23,5],ny:[19,4],nz:[0,2]},{size:2,px:[11,1],py:[7,9],pz:[0,-1],nx:[4,4],ny:[4,5],nz:[1,1]},{size:2,px:[14,7],py:[6,9],pz:[0,0],nx:[4,11],ny:[4,0],nz:[1,-1]},{size:2,px:[5,4],py:[0,5],pz:[0,-1],nx:[2,2],ny:[0,4],nz:[1,0]},{size:2,px:[10,22],py:[5,20],pz:[0,-1],nx:[3,4],ny:[1,2],nz:[2,2]},{size:3,px:[23,11,11],py:[17,9,8],pz:[0,1,1],nx:[13,8,8],ny:[5,3,3],nz:[0,1,-1]},{size:2,px:[18,9],py:[0,21],pz:[0,-1],nx:[10,10],ny:[2,1],nz:[1,1]},{size:5,px:[11,10,11,11,11],py:[11,13,10,12,12],pz:[0,0,0,0,-1],nx:[11,13,12,3,8],ny:[5,5,5,1,10],nz:[0,0,0,2,0]},{size:2,px:[7,8],py:[11,11],pz:[0,0],nx:[9,16],ny:[9,19],nz:[0,-1]},{size:2,px:[9,18],py:[23,7],pz:[0,-1],nx:[21,21],ny:[7,13],nz:[0,0]},{size:2,px:[8,8],py:[7,8],pz:[1,1],nx:[5,21],ny:[9,13],nz:[1,-1]},{size:2,px:[17,8],py:[22,8],pz:[0,-1],nx:[4,8],ny:[5,10],nz:[2,1]},{size:5,px:[2,5,8,8,4],py:[3,9,13,23,7],pz:[2,1,0,0,1],nx:[9,17,18,19,20],ny:[0,0,0,2,3],nz:[1,0,0,0,0]},{size:3,px:[16,15,2],py:[3,3,13],pz:[0,0,-1],nx:[4,8,4],ny:[3,6,2],nz:[2,1,2]},{size:2,px:[4,7],py:[3,7],pz:[2,1],nx:[15,1],ny:[15,0],nz:[0,-1]},{size:2,px:[3,6],py:[2,3],pz:[2,1],nx:[3,18],ny:[4,2],nz:[1,-1]},{size:2,px:[2,4],py:[2,4],pz:[2,1],nx:[3,0],ny:[5,0],nz:[1,-1]},{size:2,px:[10,0],py:[10,0],pz:[0,-1],nx:[9,4],ny:[2,0],nz:[1,2]},{size:2,px:[2,0],py:[8,3],pz:[1,-1],nx:[4,8],ny:[4,14],nz:[1,0]},{size:2,px:[13,18],py:[14,14],pz:[0,-1],nx:[1,1],ny:[15,13],nz:[0,0]},{size:3,px:[3,2,2],py:[17,10,15],pz:[0,1,0],nx:[13,2,7],ny:[19,11,0],nz:[0,-1,-1]},{size:2,px:[4,17],py:[0,2],pz:[2,0],nx:[8,5],ny:[11,3],nz:[1,-1]},{size:2,px:[15,21],py:[5,4],pz:[0,-1],nx:[15,10],ny:[3,0],nz:[0,1]},{size:2,px:[7,3],py:[13,8],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[7,22],py:[3,4],pz:[1,-1],nx:[4,2],ny:[2,3],nz:[1,1]},{size:4,px:[6,2,6,5],py:[21,10,22,20],pz:[0,1,0,0],nx:[2,3,4,4],ny:[11,21,23,23],nz:[1,0,0,-1]},{size:2,px:[7,2],py:[6,8],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:4,px:[11,11,5,11],py:[6,5,2,4],pz:[1,1,2,1],nx:[13,7,8,3],ny:[7,3,5,2],nz:[0,1,-1,-1]},{size:2,px:[3,3],py:[7,8],pz:[1,0],nx:[3,11],ny:[4,2],nz:[1,-1]},{size:3,px:[16,1,5],py:[3,3,11],pz:[0,-1,-1],nx:[16,4,8],ny:[2,0,1],nz:[0,2,1]},{size:2,px:[10,0],py:[8,1],pz:[0,-1],nx:[19,18],ny:[20,23],nz:[0,0]},{size:2,px:[17,4],py:[10,4],pz:[0,-1],nx:[4,14],ny:[2,9],nz:[2,0]},{size:5,px:[11,12,9,10,11],py:[2,3,2,2,3],pz:[0,0,0,0,0],nx:[6,4,2,2,2],ny:[18,9,3,2,2],nz:[0,1,2,2,-1]},{size:2,px:[0,1],py:[6,16],pz:[1,0],nx:[8,16],ny:[5,16],nz:[0,-1]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[8,17],ny:[4,9],nz:[1,-1]},{size:3,px:[2,5,2],py:[5,6,4],pz:[1,-1,-1],nx:[0,0,0],ny:[3,5,6],nz:[2,1,1]},{size:5,px:[0,0,0,0,0],py:[6,15,16,13,14],pz:[1,0,0,0,0],nx:[4,5,8,6,8],ny:[4,16,8,15,4],nz:[1,0,0,0,-1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,5],ny:[4,16],nz:[1,-1]},{size:5,px:[21,19,21,21,21],py:[17,23,18,19,20],pz:[0,0,0,0,0],nx:[5,2,3,6,6],ny:[12,5,5,12,12],nz:[0,1,1,0,-1]},{size:2,px:[5,2],py:[11,1],pz:[1,-1],nx:[5,11],ny:[3,5],nz:[2,1]},{size:2,px:[10,5],py:[5,3],pz:[0,1],nx:[6,15],ny:[11,5],nz:[1,-1]},{size:2,px:[6,2],py:[4,2],pz:[1,-1],nx:[4,3],ny:[4,2],nz:[1,2]},{size:2,px:[10,6],py:[20,6],pz:[0,-1],nx:[5,10],ny:[11,17],nz:[1,0]},{size:4,px:[8,4,7,11],py:[7,4,5,8],pz:[1,2,1,0],nx:[13,10,5,21],ny:[9,3,5,4],nz:[0,-1,-1,-1]},{size:2,px:[7,13],py:[10,7],pz:[0,0],nx:[10,8],ny:[9,18],nz:[0,-1]},{size:2,px:[3,3],py:[1,0],pz:[2,2],nx:[8,5],ny:[4,2],nz:[1,-1]},{size:5,px:[5,2,5,8,4],py:[8,4,14,23,7],pz:[1,2,0,0,1],nx:[18,4,16,17,17],ny:[1,0,0,1,1],nz:[0,2,0,0,-1]},{size:2,px:[6,2],py:[2,4],pz:[1,-1],nx:[8,8],ny:[4,3],nz:[1,1]},{size:2,px:[6,1],py:[8,15],pz:[0,-1],nx:[8,3],ny:[4,4],nz:[1,1]},{size:2,px:[10,1],py:[7,2],pz:[1,-1],nx:[6,6],ny:[9,4],nz:[1,1]},{size:2,px:[4,1],py:[6,2],pz:[1,-1],nx:[1,10],ny:[16,12],nz:[0,0]},{size:2,px:[8,4],py:[7,2],pz:[1,-1],nx:[8,9],ny:[8,10],nz:[1,1]},{size:5,px:[4,8,7,6,6],py:[0,0,0,1,1],pz:[1,0,0,0,-1],nx:[11,5,8,4,10],ny:[5,3,4,4,5],nz:[0,1,1,1,0]},{size:2,px:[5,6],py:[8,5],pz:[0,0],nx:[6,6],ny:[8,3],nz:[0,-1]},{size:2,px:[18,5],py:[19,5],pz:[0,-1],nx:[4,21],ny:[5,19],nz:[2,0]},{size:2,px:[9,5],py:[13,6],pz:[0,1],nx:[2,2],ny:[4,2],nz:[1,-1]},{size:2,px:[10,4],py:[17,6],pz:[0,1],nx:[10,2],ny:[15,4],nz:[0,-1]},{size:3,px:[13,13,19],py:[11,12,8],pz:[0,0,-1],nx:[12,3,8],ny:[4,1,4],nz:[0,2,1]},{size:3,px:[11,7,4],py:[5,2,1],pz:[0,-1,-1],nx:[9,2,4],ny:[11,3,6],nz:[0,2,1]},{size:2,px:[10,7],py:[15,2],pz:[0,-1],nx:[4,4],ny:[0,1],nz:[2,2]},{size:5,px:[8,9,16,18,18],py:[0,1,1,1,1],pz:[1,1,0,0,-1],nx:[5,5,6,4,4],ny:[21,20,23,17,18],nz:[0,0,0,0,0]},{size:2,px:[6,7],py:[1,1],pz:[1,1],nx:[20,19],ny:[2,1],nz:[0,0]},{size:2,px:[2,2],py:[10,11],pz:[1,1],nx:[3,3],ny:[10,10],nz:[1,-1]},{size:2,px:[9,5],py:[23,1],pz:[0,-1],nx:[4,3],ny:[10,4],nz:[1,1]},{size:2,px:[1,10],py:[4,7],pz:[2,-1],nx:[4,3],ny:[23,21],nz:[0,0]},{size:2,px:[10,21],py:[11,18],pz:[1,0],nx:[10,4],ny:[18,1],nz:[0,-1]},{size:2,px:[11,23],py:[11,15],pz:[0,-1],nx:[11,11],ny:[7,9],nz:[1,1]},{size:2,px:[10,1],py:[7,7],pz:[1,-1],nx:[15,4],ny:[14,4],nz:[0,2]},{size:2,px:[1,2],py:[9,20],pz:[1,0],nx:[21,3],ny:[12,20],nz:[0,-1]},{size:2,px:[7,4],py:[0,0],pz:[1,2],nx:[4,2],ny:[0,19],nz:[0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,0],ny:[4,0],nz:[1,-1]},{size:2,px:[5,1],py:[5,0],pz:[1,-1],nx:[12,10],ny:[11,4],nz:[0,1]},{size:2,px:[11,12],py:[11,14],pz:[1,-1],nx:[18,16],ny:[21,15],nz:[0,0]},{size:2,px:[3,18],py:[1,5],pz:[2,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[9,10],py:[18,7],pz:[0,-1],nx:[3,6],ny:[0,0],nz:[2,1]},{size:2,px:[19,2],py:[1,4],pz:[0,-1],nx:[22,22],ny:[13,15],nz:[0,0]},{size:3,px:[13,15,20],py:[14,21,10],pz:[0,-1,-1],nx:[15,7,7],ny:[13,6,8],nz:[0,1,1]},{size:2,px:[9,9],py:[6,7],pz:[1,1],nx:[8,7],ny:[4,8],nz:[1,-1]
},{size:2,px:[0,0],py:[5,3],pz:[1,2],nx:[5,10],ny:[2,9],nz:[1,-1]},{size:2,px:[14,11],py:[7,16],pz:[0,-1],nx:[1,0],ny:[17,4],nz:[0,2]},{size:2,px:[14,18],py:[17,18],pz:[0,-1],nx:[8,14],ny:[10,16],nz:[1,0]},{size:2,px:[6,11],py:[13,11],pz:[0,-1],nx:[8,9],ny:[12,9],nz:[0,0]},{size:2,px:[8,9],py:[2,2],pz:[0,0],nx:[3,3],ny:[2,2],nz:[2,-1]},{size:3,px:[21,21,21],py:[14,16,15],pz:[0,0,0],nx:[14,12,0],ny:[5,12,6],nz:[0,-1,-1]},{size:2,px:[4,21],py:[6,15],pz:[1,-1],nx:[5,1],ny:[6,5],nz:[1,1]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[8,0],ny:[4,20],nz:[1,-1]},{size:2,px:[13,2],py:[9,1],pz:[0,-1],nx:[3,5],ny:[1,2],nz:[2,1]},{size:2,px:[16,1],py:[5,4],pz:[0,-1],nx:[17,8],ny:[3,2],nz:[0,1]},{size:2,px:[9,2],py:[7,1],pz:[1,-1],nx:[20,20],ny:[17,16],nz:[0,0]},{size:2,px:[5,7],py:[3,6],pz:[2,-1],nx:[9,9],ny:[6,5],nz:[1,1]},{size:2,px:[11,17],py:[4,1],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[15,2],py:[11,0],pz:[0,-1],nx:[5,14],ny:[1,12],nz:[2,0]},{size:2,px:[22,19],py:[3,0],pz:[0,-1],nx:[9,4],ny:[6,4],nz:[1,1]},{size:2,px:[1,22],py:[3,21],pz:[0,-1],nx:[0,0],ny:[1,0],nz:[2,2]},{size:2,px:[11,11],py:[11,12],pz:[0,0],nx:[1,2],ny:[1,4],nz:[2,-1]},{size:2,px:[18,3],py:[8,1],pz:[0,2],nx:[13,1],ny:[8,5],nz:[0,-1]},{size:2,px:[13,6],py:[21,3],pz:[0,-1],nx:[11,11],ny:[6,5],nz:[1,1]},{size:2,px:[15,14],py:[4,4],pz:[0,0],nx:[17,1],ny:[12,5],nz:[0,-1]},{size:2,px:[11,3],py:[12,1],pz:[0,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:2,px:[3,2],py:[7,3],pz:[0,1],nx:[16,2],ny:[3,5],nz:[0,-1]},{size:2,px:[10,5],py:[7,20],pz:[1,-1],nx:[9,8],ny:[4,6],nz:[1,1]},{size:2,px:[19,2],py:[10,2],pz:[0,-1],nx:[9,4],ny:[3,1],nz:[1,2]},{size:2,px:[14,9],py:[0,23],pz:[0,-1],nx:[4,4],ny:[3,2],nz:[2,2]},{size:2,px:[6,9],py:[4,10],pz:[1,0],nx:[10,9],ny:[9,0],nz:[0,-1]},{size:4,px:[6,9,10,8],py:[20,23,18,23],pz:[0,0,0,0],nx:[9,22,1,2],ny:[21,14,2,5],nz:[0,-1,-1,-1]},{size:2,px:[17,18],py:[13,6],pz:[0,-1],nx:[6,7],ny:[9,11],nz:[1,1]},{size:5,px:[18,19,20,19,20],py:[15,19,16,20,17],pz:[0,0,0,0,0],nx:[11,22,23,23,23],ny:[10,22,20,19,19],nz:[1,0,0,0,-1]},{size:2,px:[10,10],py:[1,0],pz:[1,1],nx:[21,11],ny:[0,4],nz:[0,-1]},{size:2,px:[11,0],py:[9,3],pz:[0,-1],nx:[9,4],ny:[2,1],nz:[1,2]},{size:2,px:[14,23],py:[2,18],pz:[0,-1],nx:[15,18],ny:[1,2],nz:[0,0]},{size:2,px:[9,3],py:[0,0],pz:[1,-1],nx:[3,12],ny:[1,5],nz:[2,0]},{size:2,px:[8,8],py:[7,8],pz:[1,1],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[1,0],py:[1,3],pz:[2,-1],nx:[7,19],ny:[9,15],nz:[1,0]},{size:3,px:[16,6,4],py:[21,5,4],pz:[0,-1,-1],nx:[4,19,8],ny:[5,21,11],nz:[2,0,1]},{size:2,px:[5,5],py:[6,6],pz:[1,-1],nx:[10,10],ny:[10,12],nz:[0,0]},{size:2,px:[6,11],py:[2,5],pz:[1,0],nx:[3,4],ny:[4,7],nz:[1,-1]},{size:3,px:[8,6,2],py:[4,10,2],pz:[1,1,2],nx:[2,18,5],ny:[0,11,5],nz:[0,-1,-1]},{size:2,px:[11,7],py:[9,7],pz:[0,-1],nx:[12,3],ny:[9,5],nz:[0,1]},{size:2,px:[14,13],py:[20,20],pz:[0,0],nx:[13,3],ny:[21,5],nz:[0,-1]},{size:2,px:[13,7],py:[5,3],pz:[0,-1],nx:[3,4],ny:[1,4],nz:[2,1]},{size:2,px:[6,2],py:[21,5],pz:[0,-1],nx:[2,3],ny:[5,10],nz:[2,1]},{size:2,px:[23,5],py:[6,0],pz:[0,2],nx:[21,4],ny:[6,1],nz:[0,-1]},{size:2,px:[9,9],py:[7,6],pz:[1,1],nx:[8,2],ny:[4,2],nz:[1,-1]},{size:2,px:[22,11],py:[20,9],pz:[0,1],nx:[8,8],ny:[10,10],nz:[1,-1]},{size:2,px:[8,16],py:[21,12],pz:[0,-1],nx:[2,7],ny:[5,23],nz:[2,0]},{size:5,px:[0,1,1,1,1],py:[3,1,9,4,7],pz:[2,2,1,1,1],nx:[11,22,22,23,23],ny:[10,21,22,19,20],nz:[1,0,0,0,-1]},{size:2,px:[17,5],py:[12,4],pz:[0,-1],nx:[8,8],ny:[4,5],nz:[1,1]},{size:2,px:[16,4],py:[7,10],pz:[0,-1],nx:[9,15],ny:[4,6],nz:[1,0]},{size:2,px:[3,6],py:[3,5],pz:[2,1],nx:[11,12],ny:[11,23],nz:[0,-1]},{size:2,px:[5,2],py:[14,7],pz:[0,1],nx:[4,17],ny:[18,16],nz:[0,-1]},{size:3,px:[10,1,1],py:[12,5,4],pz:[0,-1,-1],nx:[7,11,5],ny:[1,2,1],nz:[1,0,1]},{size:2,px:[7,6],py:[3,9],pz:[0,-1],nx:[2,2],ny:[2,3],nz:[2,2]},{size:2,px:[13,6],py:[22,9],pz:[0,-1],nx:[8,4],ny:[4,3],nz:[1,2]},{size:5,px:[12,9,10,11,11],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[16,5,10,4,8],ny:[10,3,6,4,4],nz:[0,1,0,1,1]},{size:2,px:[18,19],py:[23,20],pz:[0,0],nx:[8,5],ny:[11,3],nz:[1,-1]},{size:2,px:[8,3],py:[7,2],pz:[1,2],nx:[8,4],ny:[4,3],nz:[1,-1]},{size:5,px:[8,14,8,7,4],py:[6,12,8,6,3],pz:[1,0,1,1,2],nx:[2,6,6,7,7],ny:[0,1,2,0,0],nz:[2,0,0,0,-1]},{size:3,px:[1,2,3],py:[15,18,21],pz:[0,0,0],nx:[19,5,18],ny:[23,5,8],nz:[0,-1,-1]},{size:2,px:[6,2],py:[6,1],pz:[1,-1],nx:[0,0],ny:[12,4],nz:[0,1]},{size:2,px:[3,5],py:[5,11],pz:[2,1],nx:[14,5],ny:[19,5],nz:[0,-1]},{size:2,px:[10,4],py:[4,4],pz:[1,-1],nx:[11,5],ny:[4,2],nz:[1,2]},{size:2,px:[18,4],py:[6,4],pz:[0,-1],nx:[4,8],ny:[5,4],nz:[1,1]},{size:2,px:[6,12],py:[2,4],pz:[1,0],nx:[8,8],ny:[3,4],nz:[1,-1]},{size:2,px:[1,0],py:[1,1],pz:[1,2],nx:[7,2],ny:[4,7],nz:[0,-1]},{size:2,px:[8,0],py:[20,0],pz:[0,-1],nx:[4,5],ny:[10,11],nz:[1,1]},{size:2,px:[6,14],py:[5,2],pz:[1,-1],nx:[0,0],ny:[0,2],nz:[1,0]},{size:2,px:[5,15],py:[4,7],pz:[1,-1],nx:[4,7],ny:[1,2],nz:[2,1]},{size:2,px:[7,5],py:[2,1],pz:[0,1],nx:[3,1],ny:[4,1],nz:[1,-1]},{size:2,px:[8,9],py:[4,2],pz:[0,-1],nx:[11,9],ny:[1,3],nz:[0,0]},{size:2,px:[6,3],py:[2,4],pz:[1,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[3,7],py:[3,7],pz:[2,1],nx:[6,8],ny:[14,4],nz:[0,-1]},{size:2,px:[3,0],py:[21,3],pz:[0,2],nx:[20,8],ny:[10,4],nz:[0,-1]},{size:2,px:[6,3],py:[5,8],pz:[0,-1],nx:[4,3],ny:[4,2],nz:[0,1]},{size:2,px:[3,6],py:[7,13],pz:[1,0],nx:[3,2],ny:[4,3],nz:[1,-1]},{size:2,px:[16,10],py:[9,7],pz:[0,1],nx:[7,9],ny:[3,10],nz:[1,-1]},{size:2,px:[13,10],py:[6,7],pz:[0,-1],nx:[8,17],ny:[4,12],nz:[1,0]},{size:2,px:[5,10],py:[4,10],pz:[2,1],nx:[5,4],ny:[9,2],nz:[1,-1]},{size:4,px:[15,3,5,0],py:[12,4,2,3],pz:[0,-1,-1,-1],nx:[13,7,5,7],ny:[12,6,0,7],nz:[0,1,2,1]},{size:4,px:[2,3,16,17],py:[3,4,6,6],pz:[2,1,0,0],nx:[16,16,8,16],ny:[8,3,10,13],nz:[0,-1,-1,-1]},{size:2,px:[16,8],py:[1,4],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[9,14],py:[6,2],pz:[1,-1],nx:[8,8],ny:[6,4],nz:[1,1]},{size:2,px:[8,4],py:[10,4],pz:[1,2],nx:[10,0],ny:[5,7],nz:[1,-1]},{size:2,px:[9,10],py:[4,4],pz:[0,0],nx:[9,7],ny:[3,5],nz:[0,-1]},{size:5,px:[11,10,13,6,12],py:[2,2,2,1,2],pz:[0,0,0,1,0],nx:[4,18,18,13,13],ny:[2,18,19,7,7],nz:[2,0,0,0,-1]},{size:4,px:[13,13,13,2],py:[13,12,11,3],pz:[0,0,0,-1],nx:[4,6,8,11],ny:[2,2,4,4],nz:[2,1,1,0]},{size:2,px:[4,7],py:[6,13],pz:[1,0],nx:[8,10],ny:[4,22],nz:[1,-1]},{size:2,px:[0,7],py:[4,17],pz:[1,-1],nx:[0,1],ny:[5,21],nz:[2,0]},{size:2,px:[12,13],py:[22,22],pz:[0,0],nx:[2,2],ny:[13,13],nz:[0,-1]},{size:3,px:[4,4,3],py:[22,23,19],pz:[0,0,0],nx:[8,12,3],ny:[22,15,2],nz:[0,-1,-1]},{size:2,px:[10,12],py:[3,13],pz:[0,-1],nx:[15,2],ny:[10,2],nz:[0,2]},{size:2,px:[1,1],py:[3,3],pz:[2,-1],nx:[8,4],ny:[0,0],nz:[1,2]},{size:2,px:[6,12],py:[6,18],pz:[1,0],nx:[12,19],ny:[17,16],nz:[0,-1]},{size:2,px:[10,5],py:[2,1],pz:[0,1],nx:[5,4],ny:[4,17],nz:[0,-1]},{size:3,px:[3,12,11],py:[5,23,23],pz:[2,0,0],nx:[12,4,4],ny:[21,17,1],nz:[0,-1,-1]},{size:2,px:[12,0],py:[21,5],pz:[0,-1],nx:[0,0],ny:[7,9],nz:[1,1]},{size:2,px:[17,17],py:[12,11],pz:[0,0],nx:[8,11],ny:[4,11],nz:[1,-1]},{size:2,px:[11,0],py:[22,1],pz:[0,-1],nx:[4,6],ny:[1,0],nz:[1,1]},{size:2,px:[11,11],py:[9,5],pz:[1,1],nx:[23,11],ny:[23,20],nz:[0,-1]},{size:5,px:[4,12,11,9,8],py:[0,1,1,0,1],pz:[1,0,0,0,0],nx:[4,17,8,7,7],ny:[2,13,4,4,4],nz:[2,0,1,1,-1]},{size:2,px:[11,13],py:[12,12],pz:[0,-1],nx:[1,1],ny:[4,2],nz:[1,2]},{size:2,px:[23,4],py:[23,2],pz:[0,-1],nx:[5,2],ny:[23,6],nz:[0,1]},{size:3,px:[8,16,0],py:[5,15,6],pz:[1,-1,-1],nx:[23,23,11],ny:[18,17,8],nz:[0,0,1]},{size:2,px:[1,16],py:[4,15],pz:[2,-1],nx:[2,2],ny:[3,2],nz:[2,2]},{size:2,px:[3,8],py:[7,9],pz:[1,-1],nx:[4,2],ny:[10,5],nz:[1,2]},{size:3,px:[22,1,9],py:[23,2,3],pz:[0,-1,-1],nx:[2,2,5],ny:[5,4,19],nz:[2,2,0]},{size:2,px:[2,20],py:[5,15],pz:[1,-1],nx:[2,1],ny:[1,2],nz:[2,2]},{size:2,px:[4,8],py:[1,19],pz:[1,-1],nx:[2,2],ny:[5,4],nz:[2,2]},{size:2,px:[9,10],py:[21,0],pz:[0,-1],nx:[6,5],ny:[1,1],nz:[1,1]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[9,2],ny:[4,1],nz:[1,-1]},{size:3,px:[17,3,10],py:[8,0,2],pz:[0,2,0],nx:[13,2,6],ny:[15,5,1],nz:[0,-1,-1]},{size:2,px:[9,6],py:[20,21],pz:[0,-1],nx:[4,2],ny:[10,5],nz:[1,2]},{size:2,px:[3,7],py:[0,1],pz:[2,1],nx:[7,20],ny:[1,19],nz:[0,-1]},{size:2,px:[4,5],py:[0,1],pz:[1,0],nx:[3,2],ny:[4,2],nz:[0,-1]},{size:2,px:[2,7],py:[4,19],pz:[2,0],nx:[5,2],ny:[10,2],nz:[1,-1]},{size:5,px:[3,3,4,7,7],py:[1,0,0,0,1],pz:[1,1,1,0,0],nx:[5,4,10,8,8],ny:[3,3,5,4,4],nz:[1,1,0,1,-1]},{size:2,px:[1,5],py:[0,3],pz:[1,-1],nx:[1,0],ny:[0,1],nz:[0,1]},{size:2,px:[10,0],py:[5,5],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[0,9],py:[0,4],pz:[2,-1],nx:[13,10],ny:[0,0],nz:[0,0]},{size:2,px:[13,4],py:[14,5],pz:[0,-1],nx:[4,2],ny:[0,0],nz:[0,1]},{size:2,px:[17,4],py:[13,3],pz:[0,-1],nx:[4,2],ny:[4,2],nz:[1,2]},{size:2,px:[1,0],py:[6,2],pz:[1,-1],nx:[1,6],ny:[2,12],nz:[2,0]},{size:2,px:[12,4],py:[6,0],pz:[0,-1],nx:[3,3],ny:[8,9],nz:[1,1]},{size:2,px:[1,5],py:[1,5],pz:[1,-1],nx:[17,17],ny:[13,7],nz:[0,0]},{size:2,px:[7,3],py:[12,6],pz:[0,1],nx:[3,4],ny:[4,11],nz:[1,-1]},{size:2,px:[6,17],py:[2,8],pz:[1,0],nx:[3,3],ny:[1,2],nz:[1,-1]},{size:3,px:[13,6,6],py:[22,11,10],pz:[0,1,1],nx:[13,12,11],ny:[20,20,20],nz:[0,0,0]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,12],ny:[4,20],nz:[1,-1]},{size:2,px:[5,2],py:[1,1],pz:[1,-1],nx:[13,6],ny:[0,0],nz:[0,1]},{size:2,px:[2,8],py:[3,9],pz:[2,0],nx:[8,16],ny:[5,17],nz:[0,-1]},{size:2,px:[16,15],py:[1,1],pz:[0,0],nx:[7,11],ny:[8,0],nz:[1,-1]},{size:2,px:[11,18],py:[21,23],pz:[0,-1],nx:[1,1],ny:[4,3],nz:[1,2]},{size:2,px:[1,5],py:[0,2],pz:[1,-1],nx:[15,11],ny:[8,7],nz:[0,0]},{size:2,px:[5,4],py:[7,8],pz:[1,-1],nx:[9,10],ny:[13,11],nz:[0,0]},{size:2,px:[7,4],py:[10,4],pz:[1,2],nx:[22,4],ny:[0,2],nz:[0,-1]},{size:2,px:[11,3],py:[3,1],pz:[0,2],nx:[8,0],ny:[4,0],nz:[1,-1]},{size:2,px:[5,21],py:[11,22],pz:[0,-1],nx:[10,11],ny:[11,9],nz:[0,0]},{size:2,px:[5,5],py:[0,1],pz:[2,2],nx:[2,21],ny:[6,14],nz:[0,-1]},{size:3,px:[10,10,1],py:[11,0,5],pz:[0,-1,-1],nx:[6,12,5],ny:[2,5,2],nz:[1,0,1]},{size:2,px:[9,10],py:[5,6],pz:[0,0],nx:[12,19],ny:[23,5],nz:[0,-1]},{size:2,px:[11,5],py:[9,6],pz:[0,1],nx:[21,0],ny:[23,0],nz:[0,-1]},{size:2,px:[13,12],py:[19,15],pz:[0,0],nx:[13,0],ny:[17,0],nz:[0,-1]},{size:2,px:[14,0],py:[17,3],pz:[0,-1],nx:[7,16],ny:[8,19],nz:[1,0]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[13,10],py:[23,20],pz:[0,-1],nx:[4,7],ny:[5,10],nz:[2,1]},{size:2,px:[16,9],py:[22,5],pz:[0,-1],nx:[4,2],ny:[10,3],nz:[1,2]},{size:4,px:[3,1,1,5],py:[4,2,1,2],pz:[0,2,2,1],nx:[13,5,8,0],ny:[22,2,9,2],nz:[0,-1,-1,-1]},{size:2,px:[9,9],py:[0,0],pz:[1,-1],nx:[19,20],ny:[1,2],nz:[0,0]},{size:2,px:[7,22],py:[6,8],pz:[1,0],nx:[4,4],ny:[2,4],nz:[2,-1]},{size:2,px:[3,6],py:[4,4],pz:[2,1],nx:[10,20],ny:[10,6],nz:[0,-1]},{size:2,px:[6,12],py:[6,15],pz:[1,-1],nx:[0,0],ny:[2,5],nz:[2,1]},{size:2,px:[2,7],py:[4,10],pz:[2,-1],nx:[3,6],ny:[4,8],nz:[2,1]},{size:3,px:[11,11,4],py:[0,5,7],pz:[1,-1,-1],nx:[6,12,12],ny:[1,1,2],nz:[1,0,0]},{size:2,px:[11,17],py:[4,18],pz:[0,-1],nx:[8,2],ny:[10,2],nz:[0,2]},{size:2,px:[17,17],py:[10,18],pz:[0,-1],nx:[8,8],ny:[2,3],nz:[1,1]},{size:2,px:[9,9],py:[7,7],pz:[1,-1],nx:[7,4],ny:[6,3],nz:[1,2]},{size:2,px:[18,21],py:[0,0],pz:[0,-1],nx:[11,6],ny:[5,3],nz:[0,1]},{size:2,px:[5,2],py:[8,4],pz:[0,2],nx:[5,8],ny:[9,16],nz:[0,-1]},{size:2,px:[12,2],py:[5,4],pz:[0,-1],nx:[4,15],ny:[4,8],nz:[1,0]},{size:2,px:[1,1],py:[4,6],pz:[1,1],nx:[11,3],ny:[7,9],nz:[0,-1]},{size:2,px:[2,1],py:[3,3],pz:[2,2],nx:[2,2],ny:[15,16],nz:[0,0]},{size:2,px:[17,18],py:[5,5],pz:[0,0],nx:[9,21],ny:[2,10],nz:[1,-1]},{size:2,px:[6,3],py:[14,7],pz:[0,1],nx:[3,4],ny:[4,5],nz:[1,-1]},{size:2,px:[0,3],py:[3,1],pz:[1,-1],nx:[19,10],ny:[12,4],nz:[0,1]},{size:2,px:[6,16],py:[3,8],pz:[1,0],nx:[8,10],ny:[20,4],nz:[0,-1]},{size:3,px:[5,5,2],py:[21,8,4],pz:[0,1,2],nx:[10,6,3],ny:[15,2,1],nz:[0,-1,-1]},{size:2,px:[11,10],py:[10,12],pz:[0,0],nx:[11,11],ny:[2,1],nz:[1,-1]},{size:2,px:[10,10],py:[3,2],pz:[1,1],nx:[8,11],ny:[3,5],nz:[1,-1]},{size:2,px:[13,3],py:[5,8],pz:[0,-1],nx:[12,3],ny:[3,1],nz:[0,2]},{size:2,px:[13,7],py:[2,1],pz:[0,1],nx:[5,5],ny:[1,1],nz:[0,-1]},{size:2,px:[11,10],py:[10,8],pz:[0,-1],nx:[14,16],ny:[10,15],nz:[0,0]},{size:2,px:[2,10],py:[7,8],pz:[1,-1],nx:[2,6],ny:[5,6],nz:[2,1]},{size:2,px:[10,10],py:[1,8],pz:[0,-1],nx:[2,2],ny:[3,2],nz:[2,2]},{size:2,px:[4,0],py:[5,2],pz:[1,-1],nx:[1,2],ny:[2,3],nz:[2,1]},{size:2,px:[1,12],py:[1,9],pz:[2,-1],nx:[16,17],ny:[3,3],nz:[0,0]},{size:2,px:[12,6],py:[5,8],pz:[0,-1],nx:[3,4],ny:[7,4],nz:[1,1]},{size:2,px:[14,3],py:[11,5],pz:[0,-1],nx:[11,4],ny:[0,0],nz:[0,1]},{size:2,px:[6,10],py:[6,6],pz:[1,-1],nx:[0,0],ny:[1,0],nz:[2,2]},{size:2,px:[3,7],py:[0,7],pz:[1,-1],nx:[15,13],ny:[8,4],nz:[0,0]},{size:2,px:[18,1],py:[15,0],pz:[0,-1],nx:[18,18],ny:[18,17],nz:[0,0]},{size:2,px:[5,2],py:[4,4],pz:[0,-1],nx:[4,18],ny:[4,15],nz:[1,0]},{size:3,px:[3,14,13],py:[2,7,8],pz:[2,0,0],nx:[10,0,2],ny:[8,3,2],nz:[0,-1,-1]},{size:2,px:[16,0],py:[14,3],pz:[0,-1],nx:[18,3],ny:[12,5],nz:[0,2]},{size:2,px:[5,3],py:[8,3],pz:[1,2],nx:[13,4],ny:[10,4],nz:[0,-1]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,1],ny:[4,20],nz:[1,-1]},{size:2,px:[10,10],py:[8,3],pz:[1,-1],nx:[12,7],ny:[2,1],nz:[0,1]},{size:2,px:[17,3],py:[9,2],pz:[0,2],nx:[7,6],ny:[4,0],nz:[1,-1]},{size:2,px:[12,1],py:[2,1],pz:[0,-1],nx:[4,4],ny:[2,3],nz:[2,2]},{size:2,px:[22,5],py:[15,3],pz:[0,2],nx:[16,17],ny:[14,2],nz:[0,-1]},{size:2,px:[8,11],py:[19,13],pz:[0,-1],nx:[0,0],ny:[2,4],nz:[2,1]},{size:2,px:[8,11],py:[8,1],pz:[1,-1],nx:[3,3],ny:[2,5],nz:[1,2]},{size:3,px:[3,8,0],py:[7,7,5],pz:[1,-1,-1],nx:[11,5,1],ny:[11,7,5],nz:[0,1,1]},{size:2,px:[12,6],py:[12,6],pz:[0,1],nx:[9,0],ny:[4,2],nz:[1,-1]},{size:2,px:[16,12],py:[7,1],pz:[0,-1],nx:[16,7],ny:[6,4],nz:[0,1]},{size:2,px:[13,5],py:[14,0],pz:[0,-1],nx:[13,10],ny:[0,0],nz:[0,0]},{size:5,px:[11,12,13,12,7],py:[0,1,0,0,0],pz:[0,0,0,0,1],nx:[13,16,14,4,4],ny:[18,23,18,5,5],nz:[0,0,0,2,-1]},{size:2,px:[14,5],py:[12,4],pz:[0,-1],nx:[7,7],ny:[8,2],nz:[1,1]},{size:2,px:[19,3],py:[2,5],pz:[0,-1],nx:[11,23],ny:[7,13],nz:[1,0]},{size:2,px:[0,0],py:[19,20],pz:[0,0],nx:[9,4],ny:[5,2],nz:[0,-1]},{size:2,px:[15,4],py:[12,3],pz:[0,2],nx:[9,5],ny:[4,5],nz:[1,-1]},{size:4,px:[8,0,1,21],py:[6,0,7,16],pz:[1,-1,-1,-1],nx:[11,6,11,5],ny:[8,6,4,3],nz:[1,1,1,2]},{size:2,px:[11,11],py:[7,5],pz:[0,-1],nx:[9,10],ny:[6,7],nz:[0,0]},{size:2,px:[2,4],py:[1,2],pz:[2,1],nx:[16,6],ny:[0,1],nz:[0,-1]},{size:2,px:[0,0],py:[5,3],pz:[1,2],nx:[1,21],ny:[23,8],nz:[0,-1]},{size:2,px:[10,0],py:[7,0],pz:[0,-1],nx:[4,13],ny:[4,10],nz:[1,0]},{size:2,px:[11,4],py:[0,4],pz:[1,-1],nx:[4,2],ny:[16,8],nz:[0,1]},{size:2,px:[5,3],py:[12,6],pz:[0,1],nx:[3,3],ny:[4,2],nz:[1,-1]},{size:2,px:[10,0],py:[19,11],pz:[0,-1],nx:[9,5],ny:[21,9],nz:[0,1]},{size:2,px:[0,0],py:[17,9],pz:[0,1],nx:[0,5],ny:[0,9],nz:[2,-1]},{size:2,px:[4,5],py:[2,4],pz:[0,-1],nx:[4,4],ny:[5,6],nz:[1,1]},{size:2,px:[8,4],py:[1,0],pz:[1,2],nx:[4,3],ny:[3,6],nz:[0,-1]},{size:2,px:[11,0],py:[7,2],pz:[1,-1],nx:[5,5],ny:[1,0],nz:[2,2]},{size:2,px:[13,0],py:[17,2],pz:[0,-1],nx:[3,6],ny:[5,8],nz:[2,1]},{size:2,px:[2,1],py:[0,5],pz:[2,-1],nx:[4,9],ny:[2,7],nz:[2,1]},{size:2,px:[12,5],py:[13,8],pz:[0,-1],nx:[23,11],ny:[13,7],nz:[0,1]},{size:2,px:[0,0],py:[0,2],pz:[1,0],nx:[3,6],ny:[11,18],nz:[0,-1]},{size:2,px:[4,3],py:[6,5],pz:[0,-1],nx:[1,1],ny:[1,3],nz:[2,1]},{size:4,px:[3,6,3,6],py:[3,6,2,5],pz:[2,1,2,1],nx:[0,4,1,1],ny:[0,22,17,0],nz:[0,-1,-1,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[9,15],ny:[4,8],nz:[1,-1]},{size:2,px:[8,18],py:[7,8],pz:[1,0],nx:[8,5],ny:[4,0],nz:[1,-1]},{size:2,px:[0,0],py:[4,5],pz:[1,-1],nx:[5,6],ny:[0,0],nz:[1,1]},{size:2,px:[13,18],py:[23,19],pz:[0,0],nx:[7,13],ny:[10,20],nz:[1,-1]},{size:2,px:[10,6],py:[2,0],pz:[0,1],nx:[4,1],ny:[5,1],nz:[1,-1]},{size:2,px:[1,1],py:[5,4],pz:[2,2],nx:[0,20],ny:[4,4],nz:[2,-1]},{size:2,px:[5,5],py:[1,0],pz:[2,2],nx:[12,6],ny:[18,11],nz:[0,-1]},{size:5,px:[2,1,3,1,5],py:[3,3,7,4,9],pz:[2,2,1,2,1],nx:[9,3,8,16,10],ny:[5,3,10,6,7],nz:[1,-1,-1,-1,-1]},{size:2,px:[4,1],py:[12,3],pz:[0,-1],nx:[10,1],ny:[11,2],nz:[0,2]},{size:2,px:[19,0],py:[10,7],pz:[0,-1],nx:[14,7],ny:[6,3],nz:[0,1]},{size:2,px:[7,4],py:[2,1],pz:[1,2],nx:[6,0],ny:[2,18],nz:[0,-1]},{size:2,px:[14,8],py:[3,0],pz:[0,1],nx:[17,1],ny:[1,4],nz:[0,-1]},{size:2,px:[18,19],py:[1,17],pz:[0,-1],nx:[5,11],ny:[2,5],nz:[2,1]},{size:5,px:[12,12,12,6,12],py:[10,11,12,6,9],pz:[0,0,0,1,0],nx:[13,3,12,6,6],ny:[4,1,4,2,2],nz:[0,2,0,1,-1]},{size:2,px:[11,10],py:[3,3],pz:[0,0],nx:[4,9],ny:[4,17],nz:[1,-1]},{size:2,px:[11,0],py:[13,5],pz:[0,2],nx:[8,18],ny:[15,15],nz:[0,-1]},{size:2,px:[3,4],py:[6,5],pz:[1,1],nx:[0,0],ny:[9,4],nz:[1,-1]},{size:2,px:[0,0],py:[1,0],pz:[2,2],nx:[2,15],ny:[2,1],nz:[2,-1]},{size:3,px:[2,4,2],py:[4,9,5],pz:[2,1,2],nx:[2,5,14],ny:[0,1,4],nz:[0,-1,-1]},{size:2,px:[11,12],py:[20,20],pz:[0,0],nx:[6,10],ny:[9,19],nz:[1,-1]},{size:2,px:[7,0],py:[16,8],pz:[0,-1],nx:[2,3],ny:[2,4],nz:[2,1]},{size:5,px:[16,17,15,16,15],py:[1,1,1,0,0],pz:[0,0,0,0,0],nx:[8,8,4,12,12],ny:[8,7,2,23,23],nz:[1,1,2,0,-1]},{size:2,px:[2,4],py:[6,12],pz:[1,-1],nx:[8,13],ny:[1,1],nz:[1,0]},{size:2,px:[9,2],py:[3,2],pz:[0,-1],nx:[3,4],ny:[6,5],nz:[1,1]},{size:2,px:[10,8],py:[6,1],pz:[1,-1],nx:[11,8],ny:[2,2],nz:[0,0]},{size:2,px:[9,3],py:[7,0],pz:[1,-1],nx:[19,19],ny:[18,16],nz:[0,0]},{size:2,px:[3,2],py:[1,1],pz:[2,2],nx:[22,11],ny:[4,0],nz:[0,-1]},{size:2,px:[10,10],py:[9,8],pz:[1,1],nx:[4,4],ny:[10,2],nz:[1,-1]},{size:2,px:[0,1],py:[0,5],pz:[0,-1],nx:[10,8],ny:[2,2],nz:[0,0]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[8,2],ny:[8,3],nz:[0,-1]},{size:2,px:[13,5],py:[21,3],pz:[0,-1],nx:[13,3],ny:[20,5],nz:[0,2]},{size:2,px:[12,5],py:[11,2],pz:[0,-1],nx:[1,0],ny:[19,9],nz:[0,1]},{size:2,px:[7,10],py:[9,10],pz:[1,1],nx:[8,4],ny:[10,2],nz:[1,-1]},{size:2,px:[0,0],py:[5,9],pz:[2,1],nx:[2,11],ny:[9,19],nz:[1,-1]},{size:2,px:[3,5],py:[1,2],pz:[2,1],nx:[8,23],ny:[4,9],nz:[1,-1]},{size:2,px:[3,4],py:[2,4],pz:[2,1],nx:[5,9],ny:[2,5],nz:[2,-1]},{size:2,px:[11,11],py:[2,3],pz:[1,1],nx:[19,9],ny:[6,5],nz:[0,-1]},{size:2,px:[9,4],py:[5,10],pz:[1,-1],nx:[10,22],ny:[0,16],nz:[1,0]},{size:3,px:[19,9,19],py:[3,1,2],pz:[0,1,0],nx:[6,3,6],ny:[10,3,0],nz:[1,-1,-1]},{size:2,px:[8,3],py:[10,3],pz:[1,2],nx:[23,14],ny:[3,18],nz:[0,-1]},{size:2,px:[11,11],py:[19,0],pz:[0,-1],nx:[4,16],ny:[4,11],nz:[1,0]},{size:2,px:[22,23],py:[3,22],pz:[0,-1],nx:[9,3],ny:[4,2],nz:[1,2]},{size:2,px:[7,2],py:[12,4],pz:[0,-1],nx:[8,4],ny:[10,5],nz:[0,1]},{size:2,px:[12,13],py:[5,13],pz:[0,-1],nx:[11,3],ny:[2,0],nz:[0,2]},{size:2,px:[3,17],py:[0,16],pz:[1,-1],nx:[12,12],ny:[5,6],nz:[0,0]},{size:2,px:[4,3],py:[1,0],pz:[2,2],nx:[4,3],ny:[0,3],nz:[0,-1]},{size:2,px:[10,3],py:[12,0],pz:[0,-1],nx:[12,12],ny:[13,12],nz:[0,0]},{size:2,px:[13,4],py:[11,14],pz:[0,-1],nx:[0,0],ny:[4,6],nz:[1,0]},{size:2,px:[8,7],py:[7,8],pz:[1,1],nx:[3,0],ny:[5,21],nz:[2,-1]},{size:2,px:[1,3],py:[4,14],pz:[2,0],nx:[8,8],ny:[7,7],nz:[1,-1]},{size:2,px:[13,11],py:[20,7],pz:[0,-1],nx:[21,21],ny:[20,18],nz:[0,0]},{size:2,px:[2,1],py:[11,0],pz:[0,-1],nx:[2,2],ny:[15,14],nz:[0,0]},{size:2,px:[10,1],py:[8,0],pz:[1,-1],nx:[8,4],ny:[7,4],nz:[1,2]},{size:2,px:[17,6],py:[13,1],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[7,15],py:[1,3],pz:[1,0],nx:[15,5],ny:[1,8],nz:[0,-1]},{size:2,px:[16,1],py:[20,10],pz:[0,-1],nx:[6,8],ny:[11,10],nz:[1,1]},{size:2,px:[7,14],py:[0,0],pz:[1,0],nx:[7,8],ny:[7,3],nz:[1,-1]},{size:2,px:[12,5],py:[17,4],pz:[0,-1],nx:[12,5],ny:[16,10],nz:[0,1]},{size:2,px:[13,3],py:[15,0],pz:[0,-1],nx:[12,7],ny:[17,8],nz:[0,1]},{size:2,px:[7,1],py:[14,1],pz:[0,-1],nx:[4,6],ny:[6,12],nz:[1,0]},{size:2,px:[8,7],py:[0,0],pz:[0,0],nx:[6,20],ny:[5,5],nz:[0,-1]},{size:2,px:[10,2],py:[22,5],pz:[0,-1],nx:[4,8],ny:[4,9],nz:[2,1]},{size:4,px:[8,2,2,9],py:[6,5,3,11],pz:[1,-1,-1,-1],nx:[2,7,4,3],ny:[2,1,0,2],nz:[2,0,1,2]},{size:2,px:[12,6],py:[12,6],pz:[0,1],nx:[8,2],ny:[4,1],nz:[1,-1]},{size:2,px:[13,11],py:[19,8],pz:[0,-1],nx:[13,13],ny:[20,17],nz:[0,0]},{size:2,px:[11,19],py:[5,14],pz:[0,-1],nx:[3,4],ny:[8,4],nz:[1,1]},{size:2,px:[10,0],py:[8,6],pz:[1,-1],nx:[21,21],ny:[16,15],nz:[0,0]},{size:2,px:[1,12],py:[7,6],pz:[1,-1],nx:[2,7],ny:[5,14],nz:[2,0]},{size:2,px:[2,9],py:[7,5],pz:[1,-1],nx:[2,5],ny:[5,9],nz:[2,1]},{size:2,px:[12,5],py:[15,6],pz:[0,-1],nx:[3,12],ny:[0,2],nz:[2,0]},{size:2,px:[23,22],py:[23,1],pz:[0,-1],nx:[0,0],ny:[2,3],nz:[2,2]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,0],ny:[4,3],nz:[1,-1]},{size:2,px:[5,1],py:[9,1],pz:[0,-1],nx:[4,2],ny:[4,2],nz:[1,2]},{size:2,px:[0,1],py:[0,0],pz:[2,0],nx:[2,3],ny:[9,10],nz:[0,-1]},{size:2,px:[6,0],py:[16,14],pz:[0,-1],nx:[6,3],ny:[23,14],nz:[0,0]},{size:2,px:[3,3],py:[2,3],pz:[2,1],nx:[13,3],ny:[19,14],nz:[0,-1]},{size:2,px:[11,5],py:[8,18],pz:[0,-1],nx:[4,7],ny:[1,2],nz:[2,1]},{size:2,px:[4,4],py:[5,6],pz:[1,1],nx:[2,2],ny:[5,3],nz:[2,-1]},{size:2,px:[7,3],py:[13,7],pz:[0,1],nx:[4,3],ny:[4,1],nz:[1,-1]},{size:2,px:[0,0],py:[5,6],pz:[1,0],nx:[2,1],ny:[5,1],nz:[1,-1]},{size:2,px:[7,14],py:[3,5],pz:[1,0],nx:[5,0],ny:[16,7],nz:[0,-1]},{size:2,px:[11,2],py:[18,5],pz:[0,2],nx:[11,4],ny:[16,4],nz:[0,-1]},{size:2,px:[6,16],py:[19,20],pz:[0,-1],nx:[3,2],ny:[10,5],nz:[1,2]},{size:2,px:[5,3],py:[3,1],pz:[0,1],nx:[1,3],ny:[4,8],nz:[0,-1]},{size:2,px:[12,6],py:[13,6],pz:[0,1],nx:[10,1],ny:[12,2],nz:[0,-1]},{size:2,px:[8,3],py:[6,2],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[9,3],py:[21,2],pz:[0,-1],nx:[8,4],ny:[1,0],nz:[1,2]},{size:2,px:[8,4],py:[1,0],pz:[1,-1],nx:[8,6],ny:[4,2],nz:[1,1]},{size:2,px:[2,7],py:[1,6],pz:[2,-1],nx:[7,9],ny:[6,4],nz:[1,1]},{size:2,px:[6,3],py:[8,3],pz:[1,2],nx:[10,5],ny:[19,11],nz:[0,-1]},{size:2,px:[2,2],py:[3,4],pz:[2,2],nx:[3,6],ny:[4,6],nz:[1,-1]},{size:2,px:[3,11],py:[5,20],pz:[2,0],nx:[11,5],ny:[21,8],nz:[0,-1]},{size:3,px:[5,9,5],py:[4,7,5],pz:[2,0,2],nx:[23,10,4],ny:[23,3,22],nz:[0,-1,-1]},{size:4,px:[11,9,7,1],py:[13,8,11,10],pz:[0,-1,-1,-1],nx:[8,2,11,12],ny:[4,2,4,4],nz:[1,2,0,0]},{size:2,px:[0,0],py:[7,6],pz:[1,1],nx:[0,4],ny:[1,0],nz:[2,-1]},{size:2,px:[19,20],py:[0,1],pz:[0,0],nx:[21,1],ny:[0,2],nz:[0,-1]},{size:2,px:[8,5],py:[11,0],pz:[0,-1],nx:[11,0],ny:[12,1],nz:[0,2]},{size:2,px:[11,11],py:[1,1],pz:[0,-1],nx:[4,7],ny:[5,4],nz:[1,1]},{size:2,px:[5,12],py:[4,23],pz:[2,-1],nx:[13,15],ny:[5,4],nz:[0,0]},{size:2,px:[12,20],py:[4,16],pz:[0,-1],nx:[9,4],ny:[2,1],nz:[0,1]},{size:2,px:[12,13],py:[2,2],pz:[0,0],nx:[4,16],ny:[2,11],nz:[2,0]},{size:2,px:[19,14],py:[10,17],pz:[0,-1],nx:[3,8],ny:[0,2],nz:[2,0]},{size:2,px:[8,12],py:[1,2],pz:[1,0],nx:[19,10],ny:[3,1],nz:[0,-1]},{size:4,px:[17,2,3,10],py:[8,6,2,12],pz:[0,1,2,0],nx:[17,9,12,2],ny:[9,22,13,5],nz:[0,-1,-1,-1]},{size:2,px:[20,10],py:[15,7],pz:[0,1],nx:[13,9],ny:[7,3],nz:[0,-1]},{size:2,px:[0,0],py:[1,0],pz:[2,2],nx:[10,3],ny:[9,2],nz:[1,-1]},{size:2,px:[4,3],py:[1,0],pz:[2,2],nx:[0,22],ny:[14,6],nz:[0,-1]},{size:2,px:[16,3],py:[4,0],pz:[0,2],nx:[16,3],ny:[2,0],nz:[0,-1]},{size:2,px:[8,16],py:[6,12],pz:[1,0],nx:[8,12],ny:[4,7],nz:[1,-1]},{size:2,px:[5,11],py:[0,5],pz:[2,1],nx:[10,1],ny:[5,5],nz:[1,-1]},{size:2,px:[7,4],py:[5,5],pz:[0,-1],nx:[3,6],ny:[2,3],nz:[1,0]},{size:2,px:[11,11],py:[11,12],pz:[0,0],nx:[23,7],ny:[20,2],nz:[0,-1]},{size:2,px:[16,8],py:[12,5],pz:[0,1],nx:[8,2],ny:[2,1],nz:[1,-1]},{size:3,px:[6,11,11],py:[11,23,20],pz:[1,0,0],nx:[11,3,22],ny:[21,3,16],nz:[0,-1,-1]},{size:2,px:[17,15],py:[3,2],pz:[0,-1],nx:[4,4],ny:[3,2],nz:[2,2]},{size:2,px:[21,21],py:[11,10],pz:[0,0],nx:[11,3],ny:[6,2],nz:[1,-1]},{size:2,px:[23,21],py:[22,10],pz:[0,-1],nx:[20,10],ny:[18,10],nz:[0,1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,2],ny:[4,3],nz:[1,-1]},{size:2,px:[16,0],py:[18,11],pz:[0,-1],nx:[8,7],ny:[4,4],nz:[0,0]},{size:2,px:[6,21],py:[3,16],pz:[0,-1],nx:[1,8],ny:[2,14],nz:[2,0]},{size:2,px:[8,1],py:[3,0],pz:[0,-1],nx:[11,11],ny:[2,1],nz:[0,0]},{size:3,px:[11,11,11],py:[9,10,8],pz:[1,1,1],nx:[23,1,0],ny:[23,9,11],nz:[0,-1,-1]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[7,1],ny:[8,2],nz:[0,-1]},{size:2,px:[10,17],py:[17,19],pz:[0,-1],nx:[10,4],ny:[16,9],nz:[0,1]},{size:2,px:[3,6],py:[7,1],pz:[1,-1],nx:[11,0],ny:[11,8],nz:[0,1]},{size:2,px:[10,5],py:[11,4],pz:[1,2],nx:[5,5],ny:[0,0],nz:[2,-1]},{size:2,px:[3,6],py:[3,6],pz:[2,1],nx:[8,0],ny:[4,16],nz:[1,-1]},{size:2,px:[14,1],py:[20,2],pz:[0,-1],nx:[7,7],ny:[11,9],nz:[1,1]},{size:3,px:[11,13,4],py:[16,21,3],pz:[0,0,2],nx:[14,16,5],ny:[20,14,9],nz:[0,-1,-1]},{size:2,px:[7,0],py:[1,1],pz:[1,-1],nx:[4,7],ny:[2,4],nz:[2,1]},{size:2,px:[23,11],py:[9,4],pz:[0,1],nx:[11,3],ny:[1,3],nz:[0,-1]},{size:2,px:[11,13],py:[23,23],pz:[0,0],nx:[13,13],ny:[20,20],nz:[0,-1]},{size:2,px:[10,8],py:[5,11],pz:[0,-1],nx:[20,19],ny:[18,20],nz:[0,0]},{size:2,px:[19,5],py:[22,4],pz:[0,-1],nx:[2,9],ny:[3,17],nz:[1,0]},{size:2,px:[15,2],py:[13,7],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[14,13],py:[17,2],pz:[0,-1],nx:[15,13],ny:[19,15],nz:[0,0]},{size:2,px:[12,23],py:[8,22],pz:[0,-1],nx:[7,10],ny:[5,9],nz:[1,0]},{size:2,px:[2,6],py:[21,10],pz:[0,-1],nx:[3,4],ny:[3,3],nz:[1,1]},{size:2,px:[15,11],py:[5,0],pz:[0,-1],nx:[3,4],ny:[17,16],nz:[0,0]},{size:2,px:[3,1],py:[18,8],pz:[0,1],nx:[14,4],ny:[17,7],nz:[0,-1]},{size:2,px:[15,3],py:[18,3],pz:[0,2],nx:[1,22],ny:[0,1],nz:[0,-1]},{size:2,px:[13,3],py:[9,3],pz:[0,-1],nx:[0,1],ny:[9,20],nz:[1,0]},{size:2,px:[1,1],py:[1,0],pz:[2,2],nx:[9,23],ny:[10,12],nz:[1,-1]},{size:4,px:[9,0,9,1],py:[8,0,0,10],pz:[1,-1,-1,-1],nx:[23,7,5,23],ny:[20,7,5,19],nz:[0,1,2,0]},{size:2,px:[18,18],py:[12,12],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:3,px:[0,4,1],py:[3,5,3],pz:[1,-1,-1],nx:[16,11,8],ny:[8,5,6],nz:[0,0,0]},{size:5,px:[9,10,14,11,11],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[8,3,4,6,2],ny:[22,9,5,4,0],nz:[0,1,0,0,2]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[7,3],ny:[8,7],nz:[0,-1]},{size:2,px:[11,5],py:[15,2],pz:[0,-1],nx:[3,10],ny:[0,1],nz:[2,0]},{size:2,px:[0,11],py:[11,12],pz:[1,-1],nx:[22,22],ny:[14,13],nz:[0,0]},{size:2,px:[2,2],py:[15,14],pz:[0,0],nx:[1,2],ny:[11,8],nz:[1,-1]},{size:2,px:[11,6],py:[0,7],pz:[1,-1],nx:[19,5],ny:[3,0],nz:[0,2]},{size:2,px:[2,3],py:[3,7],pz:[2,1],nx:[1,5],ny:[5,0],nz:[1,-1]},{size:2,px:[10,14],py:[4,5],pz:[0,-1],nx:[4,18],ny:[2,12],nz:[2,0]},{size:2,px:[19,10],py:[12,2],pz:[0,-1],nx:[13,4],ny:[10,2],nz:[0,2]},{size:2,px:[6,1],py:[21,6],pz:[0,-1],nx:[6,5],ny:[0,0],nz:[1,1]}],alpha:[-1.044179,1.044179,-.6003138,.6003138,-.4091282,.4091282,-.4590148,.4590148,-.4294004,.4294004,-.3360846,.3360846,-.3054186,.3054186,-.2901743,.2901743,-.3522417,.3522417,-.3195838,.3195838,-.2957309,.2957309,-.2876727,.2876727,-.263746,.263746,-.26079,.26079,-.2455714,.2455714,-.2749847,.2749847,-.2314217,.2314217,-.2540871,.2540871,-.2143416,.2143416,-.2565697,.2565697,-.1901272,.1901272,-.2259981,.2259981,-.2012333,.2012333,-.244846,.244846,-.2192845,.2192845,-.2005951,.2005951,-.2259,.2259,-.1955758,.1955758,-.2235332,.2235332,-.170449,.170449,-.1584628,.1584628,-.216771,.216771,-.1592909,.1592909,-.1967292,.1967292,-.1432268,.1432268,-.2039949,.2039949,-.1404068,.1404068,-.1788201,.1788201,-.1498714,.1498714,-.1282541,.1282541,-.1630182,.1630182,-.1398111,.1398111,-.1464143,.1464143,-.1281712,.1281712,-.1417014,.1417014,-.1779164,.1779164,-.2067174,.2067174,-.1344947,.1344947,-.1357351,.1357351,-.1683191,.1683191,-.1821768,.1821768,-.2158307,.2158307,-.1812857,.1812857,-.1635445,.1635445,-.1474934,.1474934,-.1771993,.1771993,-.151762,.151762,-.1283184,.1283184,-.1862675,.1862675,-.1420491,.1420491,-.1232165,.1232165,-.1472696,.1472696,-.1192156,.1192156,-.1602034,.1602034,-.1321473,.1321473,-.1358101,.1358101,-.1295821,.1295821,-.1289102,.1289102,-.123252,.123252,-.1332227,.1332227,-.1358887,.1358887,-.1179559,.1179559,-.1263694,.1263694,-.1444876,.1444876,-.1933141,.1933141,-.1917886,.1917886,-.119976,.119976,-.1359937,.1359937,-.1690073,.1690073,-.1894222,.1894222,-.1699422,.1699422,-.1340361,.1340361,-.1840622,.1840622,-.1277397,.1277397,-.138161,.138161,-.1282241,.1282241,-.1211334,.1211334,-.1264628,.1264628,-.137301,.137301,-.1363356,.1363356,-.1562568,.1562568,-.1268735,.1268735,-.1037859,.1037859,-.1394322,.1394322,-.1449225,.1449225,-.1109657,.1109657,-.1086931,.1086931,-.1379135,.1379135,-.1881974,.1881974,-.1304956,.1304956,-.09921777,.09921777,-.1398624,.1398624,-.1216469,.1216469,-.1272741,.1272741,-.1878236,.1878236,-.1336894,.1336894,-.1256289,.1256289,-.1247231,.1247231,-.18534,.18534,-.1087805,.1087805,-.1205676,.1205676,-.1023182,.1023182,-.1268422,.1268422,-.14229,.14229,-.1098174,.1098174,-.1317018,.1317018,-.1378142,.1378142,-.127455,.127455,-.1142944,.1142944,-.1713488,.1713488,-.1103035,.1103035,-.1045221,.1045221,-.1293015,.1293015,-.09763183,.09763183,-.1387213,.1387213,-.09031167,.09031167,-.1283052,.1283052,-.1133462,.1133462,-.09370681,.09370681,-.1079269,.1079269,-.1331913,.1331913,-.08969902,.08969902,-.104456,.104456,-.09387466,.09387466,-.1208988,.1208988,-.1252011,.1252011,-.1401277,.1401277,-.1461381,.1461381,-.1323763,.1323763,-.09923889,.09923889,-.1142899,.1142899,-.09110853,.09110853,-.1106607,.1106607,-.125314,.125314,-.09657895,.09657895,-.103001,.103001,-.1348857,.1348857,-.1237793,.1237793,-.1296943,.1296943,-.1323385,.1323385,-.08331554,.08331554,-.08417589,.08417589,-.1104431,.1104431,-.117071,.117071,-.1391725,.1391725,-.1485189,.1485189,-.1840393,.1840393,-.123825,.123825,-.1095287,.1095287,-.1177869,.1177869,-.1036409,.1036409,-.09802581,.09802581,-.09364054,.09364054,-.09936022,.09936022,-.1117201,.1117201,-.10813,.10813,-.1331861,.1331861,-.1192122,.1192122,-.09889761,.09889761,-.1173456,.1173456,-.1032917,.1032917,-.09268551,.09268551,-.1178563,.1178563,-.1215065,.1215065,-.1060437,.1060437,-.1010044,.1010044,-.1021683,.1021683,-.09974968,.09974968,-.1161528,.1161528,-.08686721,.08686721,-.08145259,.08145259,-.0993706,.0993706,-.1170885,.1170885,-.07693779,.07693779,-.09047233,.09047233,-.09168442,.09168442,-.1054105,.1054105,-.09036177,.09036177,-.1251949,.1251949,-.09523847,.09523847,-.103893,.103893,-.143366,.143366,-.148983,.148983,-.08393174,.08393174,-.08888026,.08888026,-.09347861,.09347861,-.1044838,.1044838,-.1102144,.1102144,-.1383415,.1383415,-.1466476,.1466476,-.1129741,.1129741,-.1310915,.1310915,-.1070648,.1070648,-.07559007,.07559007,-.08812082,.08812082,-.1234272,.1234272,-.1088022,.1088022,-.08388703,.08388703,-.07179593,.07179593,-.1008961,.1008961,-.0903007,.0903007,-.08581345,.08581345,-.09023431,.09023431,-.09807321,.09807321,-.09621402,.09621402,-.1730195,.1730195,-.08984631,.08984631,-.09556661,.09556661,-.1047576,.1047576,-.07854313,.07854313,-.08682118,.08682118,-.1159761,.1159761,-.133954,.133954,-.1003048,.1003048,-.09747544,.09747544,-.09501058,.09501058,-.1321566,.1321566,-.09194706,.09194706,-.09359276,.09359276,-.1015916,.1015916,-.1174192,.1174192,-.1039931,.1039931,-.09746733,.09746733,-.128612,.128612,-.1044899,.1044899,-.1066385,.1066385,-.08368626,.08368626,-.1271919,.1271919,-.1055946,.1055946,-.08272876,.08272876,-.1370564,.1370564,-.08539379,.08539379,-.1100343,.1100343,-.0810217,.0810217,-.1028728,.1028728,-.1305065,.1305065,-.1059506,.1059506,-.1264646,.1264646,-.08383843,.08383843,-.09357698,.09357698,-.074744,.074744,-.07814045,.07814045,-.0860097,.0860097,-.120609,.120609,-.09986512,.09986512,-.08516476,.08516476,-.07198783,.07198783,-.07838409,.07838409,-.1005142,.1005142,-.09951857,.09951857,-.07253998,.07253998,-.09913739,.09913739,-.0750036,.0750036,-.0925809,.0925809,-.1400287,.1400287,-.1044404,.1044404,-.07404339,.07404339,-.07256833,.07256833,-.1006995,.1006995,-.1426043,.1426043,-.1036529,.1036529,-.1208443,.1208443,-.1074245,.1074245,-.1141448,.1141448,-.1015809,.1015809,-.1028822,.1028822,-.1055682,.1055682,-.09468699,.09468699,-.1010098,.1010098,-.1205054,.1205054,-.08392956,.08392956,-.08052297,.08052297,-.09576507,.09576507,-.09515692,.09515692,-.1564745,.1564745,-.07357238,.07357238,-.1129262,.1129262,-.1013265,.1013265,-.08760761,.08760761,-.08714771,.08714771,-.09605039,.09605039,-.09064677,.09064677,-.08243857,.08243857,-.08495858,.08495858,-.08350249,.08350249,-.07423234,.07423234,-.07930799,.07930799,-.06620023,.06620023,-.07311919,.07311919,-.1237938,.1237938,-.1086814,.1086814,-.06379798,.06379798,-.07526021,.07526021,-.08297097,.08297097,-.08186337,.08186337,-.07627362,.07627362,-.1061638,.1061638,-.08328494,.08328494,-.1040895,.1040895,-.07649056,.07649056,-.07299058,.07299058,-.09195198,.09195198,-.0799088,.0799088,-.07429346,.07429346,-.09991702,.09991702,-.09755385,.09755385,-.1344138,.1344138,-.1707917,.1707917,-.0832545,.0832545,-.08137793,.08137793,-.08308659,.08308659,-.07440414,.07440414,-.07012744,.07012744,-.08122943,.08122943,-.08845462,.08845462,-.0880345,.0880345,-.09653392,.09653392,-.08795691,.08795691,-.1119045,.1119045,-.1068308,.1068308,-.08406359,.08406359,-.1220414,.1220414,-.1024235,.1024235,-.1252897,.1252897,-.1121234,.1121234,-.0905415,.0905415,-.08974435,.08974435,-.1351578,.1351578,-.1106442,.1106442,-.08093913,.08093913,-.09800762,.09800762,-.07012823,.07012823,-.07434949,.07434949,-.08684816,.08684816,-.08916388,.08916388,-.08773159,.08773159,-.07709608,.07709608,-.07230518,.07230518,-.09662156,.09662156,-.07957632,.07957632,-.07628441,.07628441,-.08050202,.08050202,-.1290593,.1290593,-.09246182,.09246182,-.09703662,.09703662,-.07866445,.07866445,-.1064783,.1064783,-.1012339,.1012339,-.06828389,.06828389,-.1005039,.1005039,-.07559687,.07559687,-.06359878,.06359878,-.08387002,.08387002,-.07851323,.07851323,-.08878569,.08878569,-.07767654,.07767654,-.08033338,.08033338,-.09142797,.09142797,-.08590585,.08590585,-.1052318,.1052318,-.08760062,.08760062,-.09222192,.09222192,-.07548828,.07548828,-.08003344,.08003344,-.1177076,.1177076,-.1064964,.1064964,-.08655553,.08655553,-.09418112,.09418112,-.07248163,.07248163,-.07120974,.07120974,-.06393114,.06393114,-.07997487,.07997487,-.1220941,.1220941,-.09892518,.09892518,-.08270271,.08270271,-.10694,.10694,-.05860771,.05860771,-.091266,.091266,-.06212559,.06212559,-.09397538,.09397538,-.08070447,.08070447,-.08415587,.08415587,-.08564455,.08564455,-.07791811,.07791811,-.06642259,.06642259,-.08266167,.08266167,-.1134986,.1134986,-.1045267,.1045267,-.07122085,.07122085,-.07979415,.07979415,-.07922347,.07922347,-.09003421,.09003421,-.08796449,.08796449,-.07933279,.07933279,-.08307947,.08307947,-.08946349,.08946349,-.07643384,.07643384,-.07818534,.07818534,-.07990991,.07990991,-.09885664,.09885664,-.08071329,.08071329,-.06952112,.06952112,-.06429706,.06429706,-.06307229,.06307229,-.08100137,.08100137,-.07693623,.07693623,-.06906625,.06906625,-.07390462,.07390462,-.06487217,.06487217,-.1233681,.1233681,-.06979273,.06979273,-.08358669,.08358669,-.109542,.109542,-.08519717,.08519717,-.07599857,.07599857,-.06042816,.06042816,-.06546304,.06546304,-.1016245,.1016245,-.08308787,.08308787,-.07385708,.07385708,-.0675163,.0675163,-.09036695,.09036695,-.09371335,.09371335,-.1116088,.1116088,-.05693741,.05693741,-.06383983,.06383983,-.05389843,.05389843,-.08383191,.08383191,-.07820822,.07820822,-.07067557,.07067557,-.07971948,.07971948,-.07360668,.07360668,-.07008027,.07008027,-.08013378,.08013378,-.08331605,.08331605,-.07145702,.07145702,-.0786394,.0786394,-.06992679,.06992679,-.05716495,.05716495,-.05306006,.05306006,-.08855639,.08855639,-.07656397,.07656397,-.06939272,.06939272,-.07523742,.07523742,-.08472299,.08472299,-.08114341,.08114341,-.06795517,.06795517,-.0789013,.0789013,-.07488741,.07488741,-.09281972,.09281972,-.09325498,.09325498,-.1401587,.1401587,-.1176284,.1176284,-.08867597,.08867597,-.08124232,.08124232,-.09441235,.09441235,-.08029452,.08029452,-.08581848,.08581848,-.1029819,.1029819,-.09569118,.09569118,-.07690893,.07690893,-.09018228,.09018228,-.1049209,.1049209,-.08969413,.08969413,-.08651891,.08651891,-.08613331,.08613331,-.07120468,.07120468,-.08743959,.08743959,-.07607158,.07607158,-.1015547,.1015547,-.08090879,.08090879,-.07114079,.07114079,-.08744835,.08744835,-.06074904,.06074904,-.06919871,.06919871,-.07607774,.07607774,-.094446,.094446,-.07833429,.07833429,-.06817555,.06817555,-.0899739,.0899739,-.09845223,.09845223,-.0789418,.0789418,-.07921373,.07921373,-.07448032,.07448032,-.1178165,.1178165,-.08216686,.08216686,-.08103286,.08103286,-.0698147,.0698147,-.08709008,.08709008,-.08336259,.08336259,-.06213589,.06213589,-.07068045,.07068045,-.06915676,.06915676,-.07103416,.07103416,-.06523849,.06523849,-.0763476,.0763476,-.07263038,.07263038,-.07164396,.07164396,-.08745559,.08745559,-.06960181,.06960181,-.08500098,.08500098,-.0652326,.0652326,-.07319714,.07319714,-.06268125,.06268125,-.07083135,.07083135,-.07984517,.07984517,-.1256265,.1256265,-.1065412,.1065412,-.08524323,.08524323,-.09291364,.09291364,-.07936567,.07936567,-.08607723,.08607723,-.07583416,.07583416,-.07931928,.07931928,-.07408357,.07408357,-.1034404,.1034404,-.1012127,.1012127,-.07916689,.07916689,-.08753651,.08753651,-.06090366,.06090366,-.07500103,.07500103,-.1228709,.1228709,-.06318201,.06318201,-.0758542,.0758542,-.0708909,.0708909,-.1053542,.1053542,-.08549521,.08549521,-.07906308,.07906308,-.0633878,.0633878,-.0841791,.0841791,-.07115511,.07115511,-.07693949,.07693949,-.07446749,.07446749,-.1037929,.1037929,-.07991005,.07991005,-.07119439,.07119439,-.0707134,.0707134,-.08587362,.08587362,-.07001236,.07001236,-.07567115,.07567115,-.0711893,.0711893,-.06844895,.06844895,-.1035118,.1035118,-.08156618,.08156618,-.07449593,.07449593,-.0815436,.0815436,-.09110878,.09110878,-.06222534,.06222534,-.1033841,.1033841,-.06811687,.06811687,-.06828443,.06828443,-.05769408,.05769408,-.05917684,.05917684,-.08358868,.08358868]
}]};try{var y=function(){"use strict";for(var n=document.getElementsByTagName("script"),p=0;p<n.length;p++)if(n[p].src.match(/(jquery\.facedetection(\.min)?\.js)|\/ccv\.js/))return n[p].src},x=y()}catch(n){}if(void 0===e){var e=function(n,p){"use strict";return e.core[p.toString()]=p().core,function(){var z,y,x,e;if(arguments.length>1)for(y=arguments[arguments.length-2],x=arguments[arguments.length-1],e=new Array(arguments.length-2),z=0;z<arguments.length-2;z++)e[z]=arguments[z];else y=arguments[0].async,x=arguments[0].worker,e=arguments[0],delete e.async,delete e.worker,e=[e];var i={shared:{}},s=p.apply(i,e);return y?function(y,t){var a=0,r=new Array(x),h=s.pre.apply(i,[x]);for(z in i.shared)"function"==typeof i.shared[z]?delete i.shared[z]:void 0!==i.shared[z].tagName&&delete i.shared[z];for(z=0;z<x;z++){var o=new Worker(n);o.onmessage=function(n){return function(p){r[n]="string"==typeof p.data?JSON.parse(p.data):p.data,a++,a==x&&y(s.post.apply(i,[r]))}}(z);var d={input:h[z],name:p.toString(),shared:i.shared,id:z,worker:e.worker_num,from:"jquery.facedetection"};try{o.postMessage(d)}catch(n){o.postMessage(JSON.stringify(d))}}}:s.post.apply(i,[[s.core.apply(i,[s.pre.apply(i,[1])[0],0,1])]])}};e.core={}}var i={pre:function(n){if("img"==n.tagName.toLowerCase()){var p=document.createElement("canvas");document.body.appendChild(n),p.width=n.offsetWidth,p.style.width=n.offsetWidth.toString()+"px",p.height=n.offsetHeight,p.style.height=n.offsetHeight.toString()+"px",document.body.removeChild(n);var z=p.getContext("2d");return z.drawImage(n,0,0),p}return n},grayscale:function(n){for(var p,z,y=n.getContext("2d"),x=y.getImageData(0,0,n.width,n.height),e=x.data,i=n.width*n.height*4;i>0;)e[i-=4]=e[p=i+1]=e[z=i+2]=.3*e[i]+.59*e[p]+.11*e[z];return y.putImageData(x,0,0),n},array_group:function(n,p){var z,y,x=new Array(n.length);for(z=0;z<n.length;z++)x[z]={parent:-1,element:n[z],rank:0};for(z=0;z<n.length;z++)if(x[z].element){for(var e=z;x[e].parent!=-1;)e=x[e].parent;for(y=0;y<n.length;y++)if(z!=y&&x[y].element&&p(x[z].element,x[y].element)){for(var i=y;x[i].parent!=-1;)i=x[i].parent;if(i!=e){x[e].rank>x[i].rank?x[i].parent=e:(x[e].parent=i,x[e].rank==x[i].rank&&x[i].rank++,e=i);for(var s,t=y;x[t].parent!=-1;)s=t,t=x[t].parent,x[s].parent=e;for(t=z;x[t].parent!=-1;)s=t,t=x[t].parent,x[s].parent=e}}}var a=new Array(n.length),r=0;for(z=0;z<n.length;z++){y=-1;var h=z;if(x[h].element){for(;x[h].parent!=-1;)h=x[h].parent;x[h].rank>=0&&(x[h].rank=~r++),y=~x[h].rank}a[z]=y}return{index:a,cat:r}},detect_objects:e(x,function(n,z,y,x){function e(n){var p=this.shared.canvas,z=this.shared.interval,y=this.shared.scale,x=this.shared.next,e=this.shared.scale_upto,i=new Array(4*(e+2*x)),s=new Array(4*(e+2*x));i[0]=p,s[0]={width:i[0].width,height:i[0].height,data:i[0].getContext("2d").getImageData(0,0,i[0].width,i[0].height).data};var t;for(t=1;t<=z;t++)i[4*t]=document.createElement("canvas"),i[4*t].width=Math.floor(i[0].width/Math.pow(y,t)),i[4*t].height=Math.floor(i[0].height/Math.pow(y,t)),i[4*t].getContext("2d").drawImage(i[0],0,0,i[0].width,i[0].height,0,0,i[4*t].width,i[4*t].height),s[4*t]={width:i[4*t].width,height:i[4*t].height,data:i[4*t].getContext("2d").getImageData(0,0,i[4*t].width,i[4*t].height).data};for(t=x;t<e+2*x;t++)i[4*t]=document.createElement("canvas"),i[4*t].width=Math.floor(i[4*t-4*x].width/2),i[4*t].height=Math.floor(i[4*t-4*x].height/2),i[4*t].getContext("2d").drawImage(i[4*t-4*x],0,0,i[4*t-4*x].width,i[4*t-4*x].height,0,0,i[4*t].width,i[4*t].height),s[4*t]={width:i[4*t].width,height:i[4*t].height,data:i[4*t].getContext("2d").getImageData(0,0,i[4*t].width,i[4*t].height).data};for(t=2*x;t<e+2*x;t++)i[4*t+1]=document.createElement("canvas"),i[4*t+1].width=Math.floor(i[4*t-4*x].width/2),i[4*t+1].height=Math.floor(i[4*t-4*x].height/2),i[4*t+1].getContext("2d").drawImage(i[4*t-4*x],1,0,i[4*t-4*x].width-1,i[4*t-4*x].height,0,0,i[4*t+1].width-2,i[4*t+1].height),s[4*t+1]={width:i[4*t+1].width,height:i[4*t+1].height,data:i[4*t+1].getContext("2d").getImageData(0,0,i[4*t+1].width,i[4*t+1].height).data},i[4*t+2]=document.createElement("canvas"),i[4*t+2].width=Math.floor(i[4*t-4*x].width/2),i[4*t+2].height=Math.floor(i[4*t-4*x].height/2),i[4*t+2].getContext("2d").drawImage(i[4*t-4*x],0,1,i[4*t-4*x].width,i[4*t-4*x].height-1,0,0,i[4*t+2].width,i[4*t+2].height-2),s[4*t+2]={width:i[4*t+2].width,height:i[4*t+2].height,data:i[4*t+2].getContext("2d").getImageData(0,0,i[4*t+2].width,i[4*t+2].height).data},i[4*t+3]=document.createElement("canvas"),i[4*t+3].width=Math.floor(i[4*t-4*x].width/2),i[4*t+3].height=Math.floor(i[4*t-4*x].height/2),i[4*t+3].getContext("2d").drawImage(i[4*t-4*x],1,1,i[4*t-4*x].width-1,i[4*t-4*x].height-1,0,0,i[4*t+3].width-2,i[4*t+3].height-2),s[4*t+3]={width:i[4*t+3].width,height:i[4*t+3].height,data:i[4*t+3].getContext("2d").getImageData(0,0,i[4*t+3].width,i[4*t+3].height).data};return[s]}function s(n,p,z){var y,x,e,i,s,t,a=this.shared.cascade,r=(this.shared.interval,this.shared.scale),h=this.shared.next,o=this.shared.scale_upto,d=1,c=1,g=[0,1,0,1],f=[0,0,1,1],l=[];for(y=0;y<o;y++){var u=n[4*y+8*h].width-Math.floor(a.width/4),w=n[4*y+8*h].height-Math.floor(a.height/4),v=[4*n[4*y].width,4*n[4*y+4*h].width,4*n[4*y+8*h].width],m=[16*n[4*y].width-16*u,8*n[4*y+4*h].width-8*u,4*n[4*y+8*h].width-4*u];for(x=0;x<a.stage_classifier.length;x++){var _=a.stage_classifier[x].orig_feature,b=a.stage_classifier[x].feature=new Array(a.stage_classifier[x].count);for(e=0;e<a.stage_classifier[x].count;e++)for(b[e]={size:_[e].size,px:new Array(_[e].size),pz:new Array(_[e].size),nx:new Array(_[e].size),nz:new Array(_[e].size)},t=0;t<_[e].size;t++)b[e].px[t]=4*_[e].px[t]+_[e].py[t]*v[_[e].pz[t]],b[e].pz[t]=_[e].pz[t],b[e].nx[t]=4*_[e].nx[t]+_[e].ny[t]*v[_[e].nz[t]],b[e].nz[t]=_[e].nz[t]}for(t=0;t<4;t++){var M=[n[4*y].data,n[4*y+4*h].data,n[4*y+8*h+t].data],k=[8*g[t]+f[t]*n[4*y].width*8,4*g[t]+f[t]*n[4*y+4*h].width*4,0];for(s=0;s<w;s++){for(i=0;i<u;i++){var C=0,A=!0;for(x=0;x<a.stage_classifier.length;x++){C=0;var I=a.stage_classifier[x].alpha,b=a.stage_classifier[x].feature;for(e=0;e<a.stage_classifier[x].count;e++){var D,j,N=b[e],E=M[N.pz[0]][k[N.pz[0]]+N.px[0]],S=M[N.nz[0]][k[N.nz[0]]+N.nx[0]];if(E<=S)C+=I[2*e];else{var W,H=!0;for(W=0;W<N.size;W++){if(N.pz[W]>=0&&(D=M[N.pz[W]][k[N.pz[W]]+N.px[W]],D<E)){if(D<=S){H=!1;break}E=D}if(N.nz[W]>=0&&(j=M[N.nz[W]][k[N.nz[W]]+N.nx[W]],j>S)){if(E<=j){H=!1;break}S=j}}C+=H?I[2*e+1]:I[2*e]}}if(C<a.stage_classifier[x].threshold){A=!1;break}}A&&l.push({x:(4*i+2*g[t])*d,y:(4*s+2*f[t])*c,width:a.width*d,height:a.height*c,neighbor:1,confidence:C}),k[0]+=16,k[1]+=8,k[2]+=4}k[0]+=m[0],k[1]+=m[1],k[2]+=m[2]}}d*=r,c*=r}return l}function t(n){var p,z,y=this.shared.min_neighbors,x=this.shared.cascade;this.shared.interval,this.shared.scale,this.shared.next,this.shared.scale_upto;for(p=0;p<x.stage_classifier.length;p++)x.stage_classifier[p].feature=x.stage_classifier[p].orig_feature;if(n=n[0],y>0){var e=i.array_group(n,function(n,p){var z=Math.floor(.25*n.width+.5);return p.x<=n.x+z&&p.x>=n.x-z&&p.y<=n.y+z&&p.y>=n.y-z&&p.width<=Math.floor(1.5*n.width+.5)&&Math.floor(1.5*p.width+.5)>=n.width}),s=e.cat,t=e.index,a=new Array(s+1);for(p=0;p<a.length;p++)a[p]={neighbors:0,x:0,y:0,width:0,height:0,confidence:0};for(p=0;p<n.length;p++){var r=n[p],h=t[p];0==a[h].neighbors&&(a[h].confidence=r.confidence),++a[h].neighbors,a[h].x+=r.x,a[h].y+=r.y,a[h].width+=r.width,a[h].height+=r.height,a[h].confidence=Math.max(a[h].confidence,r.confidence)}var o=[];for(p=0;p<s;p++){var d=a[p].neighbors;d>=y&&o.push({x:(2*a[p].x+d)/(2*d),y:(2*a[p].y+d)/(2*d),width:(2*a[p].width+d)/(2*d),height:(2*a[p].height+d)/(2*d),neighbors:a[p].neighbors,confidence:a[p].confidence})}var c=[];for(p=0;p<o.length;p++){var r=o[p],g=!0;for(z=0;z<o.length;z++){var f=o[z],l=Math.floor(.25*f.width+.5);if(p!=z&&r.x>=f.x-l&&r.y>=f.y-l&&r.x+r.width<=f.x+f.width+l&&r.y+r.height<=f.y+f.height+l&&(f.neighbors>Math.max(3,r.neighbors)||r.neighbors<3)){g=!1;break}}g&&c.push(r)}return c}return n}if(void 0!==this.shared){var a=p(arguments,["canvas","cascade","interval","min_neighbors"]);this.shared.canvas=a.canvas,this.shared.interval=a.interval,this.shared.min_neighbors=a.min_neighbors,this.shared.cascade=a.cascade,this.shared.scale=Math.pow(2,1/(a.interval+1)),this.shared.next=a.interval+1,this.shared.scale_upto=Math.floor(Math.log(Math.min(a.canvas.width/a.cascade.width,a.canvas.height/a.cascade.height))/Math.log(this.shared.scale));var r;for(r=0;r<this.shared.cascade.stage_classifier.length;r++)this.shared.cascade.stage_classifier[r].orig_feature=this.shared.cascade.stage_classifier[r].feature}return{pre:e,core:s,post:t}})},s=window.onmessage||function(){};onmessage=function(n){var p;try{if(p="string"==typeof n.data?JSON.parse(n.data):n.data,"jquery.facedetection"===p.type){var z={shared:p.shared},y=e.core[p.name].apply(z,[p.input,p.id,p.worker]);try{postMessage(y)}catch(n){postMessage(JSON.stringify(y))}}else{var x=Array.prototype.slice.call(arguments);s.apply(window,x)}}catch(n){var x=Array.prototype.slice.call(arguments);s.apply(window,x)}},n.fn.faceDetection=function(p){"use strict";var y,x={interval:4,minNeighbors:1,grayscale:!0,confidence:null,async:!1,complete:function(){},error:function(){}};return n.isFunction(p)?x.complete=p:n.extend(x,p),this.each(function(){function p(){var n,p;if(y=(new Date).getTime(),s.is("img"))n=new Image,n.src=s.attr("src"),n.crossOrigin=s.attr("crossorigin"),p=i.pre(n);else if(s.is("video")||s.is("canvas")){var t,a;n=s[0],t=document.createElement("canvas"),t.setAttribute("width",n.videoWidth||n.width),t.setAttribute("height",n.videoHeight||n.height),a=t.getContext("2d"),a.drawImage(n,0,0),p=i.pre(t)}x.grayscale&&(p=i.grayscale(p));try{x.async&&window.Worker?i.detect_objects({canvas:p,cascade:z,interval:x.interval,min_neighbors:x.minNeighbors,worker:1,async:!0})(e):e(i.detect_objects({canvas:p,cascade:z,interval:x.interval,min_neighbors:x.minNeighbors}))}catch(n){x.error.apply(s,[2,n.message]),x.complete.apply(s,[!1])}}function e(n){for(var p=n.length,z=[],e=0;e<p;++e)null!==x.confidence&&n[e].confidence<=x.confidence||(n[e].positionX=a.left+n[e].x,n[e].positionY=a.top+n[e].y,n[e].offsetX=t.left+n[e].x,n[e].offsetY=t.top+n[e].y,n[e].scaleX=r,n[e].scaleY=h,z.push(n[e]));z.time=(new Date).getTime()-y,x.complete.apply(s,[z])}var s=n(this),t=s.offset(),a=s.position(),r=s.width()/(this.naturalWidth||this.videoWidth)||1,h=s.height()/(this.naturalHeight||this.videoHeight)||1;return s.is("img, video, canvas")?p():(x.error.apply(s,[1,"Face detection is possible on images, videos and canvas only."]),void x.complete.apply(s,[[]]))})}}("function"==typeof jQuery?jQuery:"function"==typeof Zepto?Zepto:{fn:{}});
//# sourceMappingURL=jquery.facedetection.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/jump.js/dist/jump.module.js":
/*!**************************************************!*\
  !*** ./node_modules/jump.js/dist/jump.module.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),

/***/ "./node_modules/shufflejs/dist/shuffle.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/shufflejs/dist/shuffle.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

var tinyEmitter = E;

var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

var matchesSelector = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

var throttleit = throttle;

/**
 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 *
 * @param {Function} func Function to wrap.
 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
 * @return {Function} A new function that wraps the `func` function passed in.
 */

function throttle (func, wait) {
  var ctx, args, rtn, timeoutID; // caching
  var last = 0;

  return function throttled () {
    ctx = this;
    args = arguments;
    var delta = new Date() - last;
    if (!timeoutID)
      if (delta >= wait) call();
      else timeoutID = setTimeout(call, wait - delta);
    return rtn;
  };

  function call () {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }
}

var arrayParallel = function parallel(fns, context, callback) {
  if (!callback) {
    if (typeof context === 'function') {
      callback = context;
      context = null;
    } else {
      callback = noop;
    }
  }

  var pending = fns && fns.length;
  if (!pending) return callback(null, []);

  var finished = false;
  var results = new Array(pending);

  fns.forEach(context ? function (fn, i) {
    fn.call(context, maybeDone(i));
  } : function (fn, i) {
    fn(maybeDone(i));
  });

  function maybeDone(i) {
    return function (err, result) {
      if (finished) return;

      if (err) {
        callback(err, results);
        finished = true;
        return
      }

      results[i] = result;

      if (!--pending) callback(null, results);
    }
  }
};

function noop() {}

/**
 * Always returns a numeric value, given a value. Logic from jQuery's `isNumeric`.
 * @param {*} value Possibly numeric value.
 * @return {number} `value` or zero if `value` isn't numeric.
 */
function getNumber(value) {
  return parseFloat(value) || 0;
}

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

var Point = function () {
  /**
   * Represents a coordinate pair.
   * @param {number} [x=0] X.
   * @param {number} [y=0] Y.
   */
  function Point(x, y) {
    classCallCheck(this, Point);

    this.x = getNumber(x);
    this.y = getNumber(y);
  }

  /**
   * Whether two points are equal.
   * @param {Point} a Point A.
   * @param {Point} b Point B.
   * @return {boolean}
   */


  createClass(Point, null, [{
    key: 'equals',
    value: function equals(a, b) {
      return a.x === b.x && a.y === b.y;
    }
  }]);
  return Point;
}();

var Rect = function () {
  /**
   * Class for representing rectangular regions.
   * https://github.com/google/closure-library/blob/master/closure/goog/math/rect.js
   * @param {number} x Left.
   * @param {number} y Top.
   * @param {number} w Width.
   * @param {number} h Height.
   * @param {number} id Identifier
   * @constructor
   */
  function Rect(x, y, w, h, id) {
    classCallCheck(this, Rect);

    this.id = id;

    /** @type {number} */
    this.left = x;

    /** @type {number} */
    this.top = y;

    /** @type {number} */
    this.width = w;

    /** @type {number} */
    this.height = h;
  }

  /**
   * Returns whether two rectangles intersect.
   * @param {Rect} a A Rectangle.
   * @param {Rect} b A Rectangle.
   * @return {boolean} Whether a and b intersect.
   */


  createClass(Rect, null, [{
    key: "intersects",
    value: function intersects(a, b) {
      return a.left < b.left + b.width && b.left < a.left + a.width && a.top < b.top + b.height && b.top < a.top + a.height;
    }
  }]);
  return Rect;
}();

var Classes = {
  BASE: 'shuffle',
  SHUFFLE_ITEM: 'shuffle-item',
  VISIBLE: 'shuffle-item--visible',
  HIDDEN: 'shuffle-item--hidden'
};

var id = 0;

var ShuffleItem = function () {
  function ShuffleItem(element) {
    classCallCheck(this, ShuffleItem);

    id += 1;
    this.id = id;
    this.element = element;

    /**
     * Used to separate items for layout and shrink.
     */
    this.isVisible = true;

    /**
     * Used to determine if a transition will happen. By the time the _layout
     * and _shrink methods get the ShuffleItem instances, the `isVisible` value
     * has already been changed by the separation methods, so this property is
     * needed to know if the item was visible/hidden before the shrink/layout.
     */
    this.isHidden = false;
  }

  createClass(ShuffleItem, [{
    key: 'show',
    value: function show() {
      this.isVisible = true;
      this.element.classList.remove(Classes.HIDDEN);
      this.element.classList.add(Classes.VISIBLE);
      this.element.removeAttribute('aria-hidden');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.isVisible = false;
      this.element.classList.remove(Classes.VISIBLE);
      this.element.classList.add(Classes.HIDDEN);
      this.element.setAttribute('aria-hidden', true);
    }
  }, {
    key: 'init',
    value: function init() {
      this.addClasses([Classes.SHUFFLE_ITEM, Classes.VISIBLE]);
      this.applyCss(ShuffleItem.Css.INITIAL);
      this.scale = ShuffleItem.Scale.VISIBLE;
      this.point = new Point();
    }
  }, {
    key: 'addClasses',
    value: function addClasses(classes) {
      var _this = this;

      classes.forEach(function (className) {
        _this.element.classList.add(className);
      });
    }
  }, {
    key: 'removeClasses',
    value: function removeClasses(classes) {
      var _this2 = this;

      classes.forEach(function (className) {
        _this2.element.classList.remove(className);
      });
    }
  }, {
    key: 'applyCss',
    value: function applyCss(obj) {
      var _this3 = this;

      Object.keys(obj).forEach(function (key) {
        _this3.element.style[key] = obj[key];
      });
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      this.removeClasses([Classes.HIDDEN, Classes.VISIBLE, Classes.SHUFFLE_ITEM]);

      this.element.removeAttribute('style');
      this.element = null;
    }
  }]);
  return ShuffleItem;
}();

ShuffleItem.Css = {
  INITIAL: {
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'visible',
    'will-change': 'transform'
  },
  VISIBLE: {
    before: {
      opacity: 1,
      visibility: 'visible'
    },
    after: {
      transitionDelay: ''
    }
  },
  HIDDEN: {
    before: {
      opacity: 0
    },
    after: {
      visibility: 'hidden',
      transitionDelay: ''
    }
  }
};

ShuffleItem.Scale = {
  VISIBLE: 1,
  HIDDEN: 0.001
};

var element = document.body || document.documentElement;
var e = document.createElement('div');
e.style.cssText = 'width:10px;padding:2px;box-sizing:border-box;';
element.appendChild(e);

var _window$getComputedSt = window.getComputedStyle(e, null),
    width = _window$getComputedSt.width;

var ret = width === '10px';

element.removeChild(e);

/**
 * Retrieve the computed style for an element, parsed as a float.
 * @param {Element} element Element to get style for.
 * @param {string} style Style property.
 * @param {CSSStyleDeclaration} [styles] Optionally include clean styles to
 *     use instead of asking for them again.
 * @return {number} The parsed computed value or zero if that fails because IE
 *     will return 'auto' when the element doesn't have margins instead of
 *     the computed style.
 */
function getNumberStyle(element, style) {
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.getComputedStyle(element, null);

  var value = getNumber(styles[style]);

  // Support IE<=11 and W3C spec.
  if (!ret && style === 'width') {
    value += getNumber(styles.paddingLeft) + getNumber(styles.paddingRight) + getNumber(styles.borderLeftWidth) + getNumber(styles.borderRightWidth);
  } else if (!ret && style === 'height') {
    value += getNumber(styles.paddingTop) + getNumber(styles.paddingBottom) + getNumber(styles.borderTopWidth) + getNumber(styles.borderBottomWidth);
  }

  return value;
}

/**
 * Fisher-Yates shuffle.
 * http://stackoverflow.com/a/962890/373422
 * https://bost.ocks.org/mike/shuffle/
 * @param {Array} array Array to shuffle.
 * @return {Array} Randomly sorted array.
 */
function randomize(array) {
  var n = array.length;

  while (n) {
    n -= 1;
    var i = Math.floor(Math.random() * (n + 1));
    var temp = array[i];
    array[i] = array[n];
    array[n] = temp;
  }

  return array;
}

var defaults$1 = {
  // Use array.reverse() to reverse the results
  reverse: false,

  // Sorting function
  by: null,

  // Custom sort function
  compare: null,

  // If true, this will skip the sorting and return a randomized order in the array
  randomize: false,

  // Determines which property of each item in the array is passed to the
  // sorting method.
  key: 'element'
};

// You can return `undefined` from the `by` function to revert to DOM order.
function sorter(arr, options) {
  var opts = Object.assign({}, defaults$1, options);
  var original = Array.from(arr);
  var revert = false;

  if (!arr.length) {
    return [];
  }

  if (opts.randomize) {
    return randomize(arr);
  }

  // Sort the elements by the opts.by function.
  // If we don't have opts.by, default to DOM order
  if (typeof opts.by === 'function') {
    arr.sort(function (a, b) {
      // Exit early if we already know we want to revert
      if (revert) {
        return 0;
      }

      var valA = opts.by(a[opts.key]);
      var valB = opts.by(b[opts.key]);

      // If both values are undefined, use the DOM order
      if (valA === undefined && valB === undefined) {
        revert = true;
        return 0;
      }

      if (valA < valB || valA === 'sortFirst' || valB === 'sortLast') {
        return -1;
      }

      if (valA > valB || valA === 'sortLast' || valB === 'sortFirst') {
        return 1;
      }

      return 0;
    });
  } else if (typeof opts.compare === 'function') {
    arr.sort(opts.compare);
  }

  // Revert to the original array if necessary
  if (revert) {
    return original;
  }

  if (opts.reverse) {
    arr.reverse();
  }

  return arr;
}

var transitions = {};
var eventName = 'transitionend';
var count = 0;

function uniqueId() {
  count += 1;
  return eventName + count;
}

function cancelTransitionEnd(id) {
  if (transitions[id]) {
    transitions[id].element.removeEventListener(eventName, transitions[id].listener);
    transitions[id] = null;
    return true;
  }

  return false;
}

function onTransitionEnd(element, callback) {
  var id = uniqueId();
  var listener = function listener(evt) {
    if (evt.currentTarget === evt.target) {
      cancelTransitionEnd(id);
      callback(evt);
    }
  };

  element.addEventListener(eventName, listener);

  transitions[id] = { element: element, listener: listener };

  return id;
}

function arrayMax(array) {
  return Math.max.apply(Math, array); // eslint-disable-line prefer-spread
}

function arrayMin(array) {
  return Math.min.apply(Math, array); // eslint-disable-line prefer-spread
}

/**
 * Determine the number of columns an items spans.
 * @param {number} itemWidth Width of the item.
 * @param {number} columnWidth Width of the column (includes gutter).
 * @param {number} columns Total number of columns
 * @param {number} threshold A buffer value for the size of the column to fit.
 * @return {number}
 */
function getColumnSpan(itemWidth, columnWidth, columns, threshold) {
  var columnSpan = itemWidth / columnWidth;

  // If the difference between the rounded column span number and the
  // calculated column span number is really small, round the number to
  // make it fit.
  if (Math.abs(Math.round(columnSpan) - columnSpan) < threshold) {
    // e.g. columnSpan = 4.0089945390298745
    columnSpan = Math.round(columnSpan);
  }

  // Ensure the column span is not more than the amount of columns in the whole layout.
  return Math.min(Math.ceil(columnSpan), columns);
}

/**
 * Retrieves the column set to use for placement.
 * @param {number} columnSpan The number of columns this current item spans.
 * @param {number} columns The total columns in the grid.
 * @return {Array.<number>} An array of numbers represeting the column set.
 */
function getAvailablePositions(positions, columnSpan, columns) {
  // The item spans only one column.
  if (columnSpan === 1) {
    return positions;
  }

  // The item spans more than one column, figure out how many different
  // places it could fit horizontally.
  // The group count is the number of places within the positions this block
  // could fit, ignoring the current positions of items.
  // Imagine a 2 column brick as the second item in a 4 column grid with
  // 10px height each. Find the places it would fit:
  // [20, 10, 10, 0]
  //  |   |   |
  //  *   *   *
  //
  // Then take the places which fit and get the bigger of the two:
  // max([20, 10]), max([10, 10]), max([10, 0]) = [20, 10, 10]
  //
  // Next, find the first smallest number (the short column).
  // [20, 10, 10]
  //      |
  //      *
  //
  // And that's where it should be placed!
  //
  // Another example where the second column's item extends past the first:
  // [10, 20, 10, 0] => [20, 20, 10] => 10
  var available = [];

  // For how many possible positions for this item there are.
  for (var i = 0; i <= columns - columnSpan; i++) {
    // Find the bigger value for each place it could fit.
    available.push(arrayMax(positions.slice(i, i + columnSpan)));
  }

  return available;
}

/**
 * Find index of short column, the first from the left where this item will go.
 *
 * @param {Array.<number>} positions The array to search for the smallest number.
 * @param {number} buffer Optional buffer which is very useful when the height
 *     is a percentage of the width.
 * @return {number} Index of the short column.
 */
function getShortColumn(positions, buffer) {
  var minPosition = arrayMin(positions);
  for (var i = 0, len = positions.length; i < len; i++) {
    if (positions[i] >= minPosition - buffer && positions[i] <= minPosition + buffer) {
      return i;
    }
  }

  return 0;
}

/**
 * Determine the location of the next item, based on its size.
 * @param {Object} itemSize Object with width and height.
 * @param {Array.<number>} positions Positions of the other current items.
 * @param {number} gridSize The column width or row height.
 * @param {number} total The total number of columns or rows.
 * @param {number} threshold Buffer value for the column to fit.
 * @param {number} buffer Vertical buffer for the height of items.
 * @return {Point}
 */
function getItemPosition(_ref) {
  var itemSize = _ref.itemSize,
      positions = _ref.positions,
      gridSize = _ref.gridSize,
      total = _ref.total,
      threshold = _ref.threshold,
      buffer = _ref.buffer;

  var span = getColumnSpan(itemSize.width, gridSize, total, threshold);
  var setY = getAvailablePositions(positions, span, total);
  var shortColumnIndex = getShortColumn(setY, buffer);

  // Position the item
  var point = new Point(gridSize * shortColumnIndex, setY[shortColumnIndex]);

  // Update the columns array with the new values for each column.
  // e.g. before the update the columns could be [250, 0, 0, 0] for an item
  // which spans 2 columns. After it would be [250, itemHeight, itemHeight, 0].
  var setHeight = setY[shortColumnIndex] + itemSize.height;
  for (var i = 0; i < span; i++) {
    positions[shortColumnIndex + i] = setHeight;
  }

  return point;
}

/**
 * This method attempts to center items. This method could potentially be slow
 * with a large number of items because it must place items, then check every
 * previous item to ensure there is no overlap.
 * @param {Array.<Rect>} itemRects Item data objects.
 * @param {number} containerWidth Width of the containing element.
 * @return {Array.<Point>}
 */
function getCenteredPositions(itemRects, containerWidth) {
  var rowMap = {};

  // Populate rows by their offset because items could jump between rows like:
  // a   c
  //  bbb
  itemRects.forEach(function (itemRect) {
    if (rowMap[itemRect.top]) {
      // Push the point to the last row array.
      rowMap[itemRect.top].push(itemRect);
    } else {
      // Start of a new row.
      rowMap[itemRect.top] = [itemRect];
    }
  });

  // For each row, find the end of the last item, then calculate
  // the remaining space by dividing it by 2. Then add that
  // offset to the x position of each point.
  var rects = [];
  var rows = [];
  var centeredRows = [];
  Object.keys(rowMap).forEach(function (key) {
    var itemRects = rowMap[key];
    rows.push(itemRects);
    var lastItem = itemRects[itemRects.length - 1];
    var end = lastItem.left + lastItem.width;
    var offset = Math.round((containerWidth - end) / 2);

    var finalRects = itemRects;
    var canMove = false;
    if (offset > 0) {
      var newRects = [];
      canMove = itemRects.every(function (r) {
        var newRect = new Rect(r.left + offset, r.top, r.width, r.height, r.id);

        // Check all current rects to make sure none overlap.
        var noOverlap = !rects.some(function (r) {
          return Rect.intersects(newRect, r);
        });

        newRects.push(newRect);
        return noOverlap;
      });

      // If none of the rectangles overlapped, the whole group can be centered.
      if (canMove) {
        finalRects = newRects;
      }
    }

    // If the items are not going to be offset, ensure that the original
    // placement for this row will not overlap previous rows (row-spanning
    // elements could be in the way).
    if (!canMove) {
      var intersectingRect = void 0;
      var hasOverlap = itemRects.some(function (itemRect) {
        return rects.some(function (r) {
          var intersects = Rect.intersects(itemRect, r);
          if (intersects) {
            intersectingRect = r;
          }
          return intersects;
        });
      });

      // If there is any overlap, replace the overlapping row with the original.
      if (hasOverlap) {
        var rowIndex = centeredRows.findIndex(function (items) {
          return items.includes(intersectingRect);
        });
        centeredRows.splice(rowIndex, 1, rows[rowIndex]);
      }
    }

    rects = rects.concat(finalRects);
    centeredRows.push(finalRects);
  });

  // Reduce array of arrays to a single array of points.
  // https://stackoverflow.com/a/10865042/373422
  // Then reset sort back to how the items were passed to this method.
  // Remove the wrapper object with index, map to a Point.
  return [].concat.apply([], centeredRows) // eslint-disable-line prefer-spread
  .sort(function (a, b) {
    return a.id - b.id;
  }).map(function (itemRect) {
    return new Point(itemRect.left, itemRect.top);
  });
}

/**
 * Hyphenates a javascript style string to a css one. For example:
 * MozBoxSizing -> -moz-box-sizing.
 * @param {string} str The string to hyphenate.
 * @return {string} The hyphenated string.
 */
function hyphenate(str) {
  return str.replace(/([A-Z])/g, function (str, m1) {
    return "-" + m1.toLowerCase();
  });
}

function arrayUnique(x) {
  return Array.from(new Set(x));
}

// Used for unique instance variables
var id$1 = 0;

var Shuffle = function (_TinyEmitter) {
  inherits(Shuffle, _TinyEmitter);

  /**
   * Categorize, sort, and filter a responsive grid of items.
   *
   * @param {Element} element An element which is the parent container for the grid items.
   * @param {Object} [options=Shuffle.options] Options object.
   * @constructor
   */
  function Shuffle(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Shuffle);

    var _this = possibleConstructorReturn(this, (Shuffle.__proto__ || Object.getPrototypeOf(Shuffle)).call(this));

    _this.options = Object.assign({}, Shuffle.options, options);

    // Allow misspelling of delimiter since that's how it used to be.
    // Remove in v6.
    if (_this.options.delimeter) {
      _this.options.delimiter = _this.options.delimeter;
    }

    _this.lastSort = {};
    _this.group = Shuffle.ALL_ITEMS;
    _this.lastFilter = Shuffle.ALL_ITEMS;
    _this.isEnabled = true;
    _this.isDestroyed = false;
    _this.isInitialized = false;
    _this._transitions = [];
    _this.isTransitioning = false;
    _this._queue = [];

    var el = _this._getElementOption(element);

    if (!el) {
      throw new TypeError('Shuffle needs to be initialized with an element.');
    }

    _this.element = el;
    _this.id = 'shuffle_' + id$1;
    id$1 += 1;

    _this._init();
    _this.isInitialized = true;
    return _this;
  }

  createClass(Shuffle, [{
    key: '_init',
    value: function _init() {
      this.items = this._getItems();

      this.options.sizer = this._getElementOption(this.options.sizer);

      // Add class and invalidate styles
      this.element.classList.add(Shuffle.Classes.BASE);

      // Set initial css for each item
      this._initItems(this.items);

      // Bind resize events
      this._onResize = this._getResizeFunction();
      window.addEventListener('resize', this._onResize);

      // If the page has not already emitted the `load` event, call layout on load.
      // This avoids layout issues caused by images and fonts loading after the
      // instance has been initialized.
      if (document.readyState !== 'complete') {
        var layout = this.layout.bind(this);
        window.addEventListener('load', function onLoad() {
          window.removeEventListener('load', onLoad);
          layout();
        });
      }

      // Get container css all in one request. Causes reflow
      var containerCss = window.getComputedStyle(this.element, null);
      var containerWidth = Shuffle.getSize(this.element).width;

      // Add styles to the container if it doesn't have them.
      this._validateStyles(containerCss);

      // We already got the container's width above, no need to cause another
      // reflow getting it again... Calculate the number of columns there will be
      this._setColumns(containerWidth);

      // Kick off!
      this.filter(this.options.group, this.options.initialSort);

      // The shuffle items haven't had transitions set on them yet so the user
      // doesn't see the first layout. Set them now that the first layout is done.
      // First, however, a synchronous layout must be caused for the previous
      // styles to be applied without transitions.
      this.element.offsetWidth; // eslint-disable-line no-unused-expressions
      this.setItemTransitions(this.items);
      this.element.style.transition = 'height ' + this.options.speed + 'ms ' + this.options.easing;
    }

    /**
     * Returns a throttled and proxied function for the resize handler.
     * @return {function}
     * @private
     */

  }, {
    key: '_getResizeFunction',
    value: function _getResizeFunction() {
      var resizeFunction = this._handleResize.bind(this);
      return this.options.throttle ? this.options.throttle(resizeFunction, this.options.throttleTime) : resizeFunction;
    }

    /**
     * Retrieve an element from an option.
     * @param {string|jQuery|Element} option The option to check.
     * @return {?Element} The plain element or null.
     * @private
     */

  }, {
    key: '_getElementOption',
    value: function _getElementOption(option) {
      // If column width is a string, treat is as a selector and search for the
      // sizer element within the outermost container
      if (typeof option === 'string') {
        return this.element.querySelector(option);

        // Check for an element
      } else if (option && option.nodeType && option.nodeType === 1) {
        return option;

        // Check for jQuery object
      } else if (option && option.jquery) {
        return option[0];
      }

      return null;
    }

    /**
     * Ensures the shuffle container has the css styles it needs applied to it.
     * @param {Object} styles Key value pairs for position and overflow.
     * @private
     */

  }, {
    key: '_validateStyles',
    value: function _validateStyles(styles) {
      // Position cannot be static.
      if (styles.position === 'static') {
        this.element.style.position = 'relative';
      }

      // Overflow has to be hidden.
      if (styles.overflow !== 'hidden') {
        this.element.style.overflow = 'hidden';
      }
    }

    /**
     * Filter the elements by a category.
     * @param {string|string[]|function(Element):boolean} [category] Category to
     *     filter by. If it's given, the last category will be used to filter the items.
     * @param {Array} [collection] Optionally filter a collection. Defaults to
     *     all the items.
     * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}
     * @private
     */

  }, {
    key: '_filter',
    value: function _filter() {
      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastFilter;
      var collection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.items;

      var set$$1 = this._getFilteredSets(category, collection);

      // Individually add/remove hidden/visible classes
      this._toggleFilterClasses(set$$1);

      // Save the last filter in case elements are appended.
      this.lastFilter = category;

      // This is saved mainly because providing a filter function (like searching)
      // will overwrite the `lastFilter` property every time its called.
      if (typeof category === 'string') {
        this.group = category;
      }

      return set$$1;
    }

    /**
     * Returns an object containing the visible and hidden elements.
     * @param {string|string[]|function(Element):boolean} category Category or function to filter by.
     * @param {ShuffleItem[]} items A collection of items to filter.
     * @return {{visible: ShuffleItem[], hidden: ShuffleItem[]}}
     * @private
     */

  }, {
    key: '_getFilteredSets',
    value: function _getFilteredSets(category, items) {
      var _this2 = this;

      var visible = [];
      var hidden = [];

      // category === 'all', add visible class to everything
      if (category === Shuffle.ALL_ITEMS) {
        visible = items;

        // Loop through each item and use provided function to determine
        // whether to hide it or not.
      } else {
        items.forEach(function (item) {
          if (_this2._doesPassFilter(category, item.element)) {
            visible.push(item);
          } else {
            hidden.push(item);
          }
        });
      }

      return {
        visible: visible,
        hidden: hidden
      };
    }

    /**
     * Test an item to see if it passes a category.
     * @param {string|string[]|function():boolean} category Category or function to filter by.
     * @param {Element} element An element to test.
     * @return {boolean} Whether it passes the category/filter.
     * @private
     */

  }, {
    key: '_doesPassFilter',
    value: function _doesPassFilter(category, element) {
      if (typeof category === 'function') {
        return category.call(element, element, this);
      }

      // Check each element's data-groups attribute against the given category.
      var attr = element.getAttribute('data-' + Shuffle.FILTER_ATTRIBUTE_KEY);
      var keys = this.options.delimiter ? attr.split(this.options.delimiter) : JSON.parse(attr);

      function testCategory(category) {
        return keys.includes(category);
      }

      if (Array.isArray(category)) {
        if (this.options.filterMode === Shuffle.FilterMode.ANY) {
          return category.some(testCategory);
        }
        return category.every(testCategory);
      }

      return keys.includes(category);
    }

    /**
     * Toggles the visible and hidden class names.
     * @param {{visible, hidden}} Object with visible and hidden arrays.
     * @private
     */

  }, {
    key: '_toggleFilterClasses',
    value: function _toggleFilterClasses(_ref) {
      var visible = _ref.visible,
          hidden = _ref.hidden;

      visible.forEach(function (item) {
        item.show();
      });

      hidden.forEach(function (item) {
        item.hide();
      });
    }

    /**
     * Set the initial css for each item
     * @param {ShuffleItem[]} items Set to initialize.
     * @private
     */

  }, {
    key: '_initItems',
    value: function _initItems(items) {
      items.forEach(function (item) {
        item.init();
      });
    }

    /**
     * Remove element reference and styles.
     * @param {ShuffleItem[]} items Set to dispose.
     * @private
     */

  }, {
    key: '_disposeItems',
    value: function _disposeItems(items) {
      items.forEach(function (item) {
        item.dispose();
      });
    }

    /**
     * Updates the visible item count.
     * @private
     */

  }, {
    key: '_updateItemCount',
    value: function _updateItemCount() {
      this.visibleItems = this._getFilteredItems().length;
    }

    /**
     * Sets css transform transition on a group of elements. This is not executed
     * at the same time as `item.init` so that transitions don't occur upon
     * initialization of a new Shuffle instance.
     * @param {ShuffleItem[]} items Shuffle items to set transitions on.
     * @protected
     */

  }, {
    key: 'setItemTransitions',
    value: function setItemTransitions(items) {
      var _options = this.options,
          speed = _options.speed,
          easing = _options.easing;

      var positionProps = this.options.useTransforms ? ['transform'] : ['top', 'left'];

      // Allow users to transtion other properties if they exist in the `before`
      // css mapping of the shuffle item.
      var cssProps = Object.keys(ShuffleItem.Css.HIDDEN.before).map(function (k) {
        return hyphenate(k);
      });
      var properties = positionProps.concat(cssProps).join();

      items.forEach(function (item) {
        item.element.style.transitionDuration = speed + 'ms';
        item.element.style.transitionTimingFunction = easing;
        item.element.style.transitionProperty = properties;
      });
    }
  }, {
    key: '_getItems',
    value: function _getItems() {
      var _this3 = this;

      return Array.from(this.element.children).filter(function (el) {
        return matchesSelector(el, _this3.options.itemSelector);
      }).map(function (el) {
        return new ShuffleItem(el);
      });
    }

    /**
     * Combine the current items array with a new one and sort it by DOM order.
     * @param {ShuffleItem[]} items Items to track.
     * @return {ShuffleItem[]}
     */

  }, {
    key: '_mergeNewItems',
    value: function _mergeNewItems(items) {
      var children = Array.from(this.element.children);
      return sorter(this.items.concat(items), {
        by: function by(element) {
          return children.indexOf(element);
        }
      });
    }
  }, {
    key: '_getFilteredItems',
    value: function _getFilteredItems() {
      return this.items.filter(function (item) {
        return item.isVisible;
      });
    }
  }, {
    key: '_getConcealedItems',
    value: function _getConcealedItems() {
      return this.items.filter(function (item) {
        return !item.isVisible;
      });
    }

    /**
     * Returns the column size, based on column width and sizer options.
     * @param {number} containerWidth Size of the parent container.
     * @param {number} gutterSize Size of the gutters.
     * @return {number}
     * @private
     */

  }, {
    key: '_getColumnSize',
    value: function _getColumnSize(containerWidth, gutterSize) {
      var size = void 0;

      // If the columnWidth property is a function, then the grid is fluid
      if (typeof this.options.columnWidth === 'function') {
        size = this.options.columnWidth(containerWidth);

        // columnWidth option isn't a function, are they using a sizing element?
      } else if (this.options.sizer) {
        size = Shuffle.getSize(this.options.sizer).width;

        // if not, how about the explicitly set option?
      } else if (this.options.columnWidth) {
        size = this.options.columnWidth;

        // or use the size of the first item
      } else if (this.items.length > 0) {
        size = Shuffle.getSize(this.items[0].element, true).width;

        // if there's no items, use size of container
      } else {
        size = containerWidth;
      }

      // Don't let them set a column width of zero.
      if (size === 0) {
        size = containerWidth;
      }

      return size + gutterSize;
    }

    /**
     * Returns the gutter size, based on gutter width and sizer options.
     * @param {number} containerWidth Size of the parent container.
     * @return {number}
     * @private
     */

  }, {
    key: '_getGutterSize',
    value: function _getGutterSize(containerWidth) {
      var size = void 0;
      if (typeof this.options.gutterWidth === 'function') {
        size = this.options.gutterWidth(containerWidth);
      } else if (this.options.sizer) {
        size = getNumberStyle(this.options.sizer, 'marginLeft');
      } else {
        size = this.options.gutterWidth;
      }

      return size;
    }

    /**
     * Calculate the number of columns to be used. Gets css if using sizer element.
     * @param {number} [containerWidth] Optionally specify a container width if
     *    it's already available.
     */

  }, {
    key: '_setColumns',
    value: function _setColumns() {
      var containerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Shuffle.getSize(this.element).width;

      var gutter = this._getGutterSize(containerWidth);
      var columnWidth = this._getColumnSize(containerWidth, gutter);
      var calculatedColumns = (containerWidth + gutter) / columnWidth;

      // Widths given from getStyles are not precise enough...
      if (Math.abs(Math.round(calculatedColumns) - calculatedColumns) < this.options.columnThreshold) {
        // e.g. calculatedColumns = 11.998876
        calculatedColumns = Math.round(calculatedColumns);
      }

      this.cols = Math.max(Math.floor(calculatedColumns), 1);
      this.containerWidth = containerWidth;
      this.colWidth = columnWidth;
    }

    /**
     * Adjust the height of the grid
     */

  }, {
    key: '_setContainerSize',
    value: function _setContainerSize() {
      this.element.style.height = this._getContainerSize() + 'px';
    }

    /**
     * Based on the column heights, it returns the biggest one.
     * @return {number}
     * @private
     */

  }, {
    key: '_getContainerSize',
    value: function _getContainerSize() {
      return arrayMax(this.positions);
    }

    /**
     * Get the clamped stagger amount.
     * @param {number} index Index of the item to be staggered.
     * @return {number}
     */

  }, {
    key: '_getStaggerAmount',
    value: function _getStaggerAmount(index) {
      return Math.min(index * this.options.staggerAmount, this.options.staggerAmountMax);
    }

    /**
     * Emit an event from this instance.
     * @param {string} name Event name.
     * @param {Object} [data={}] Optional object data.
     */

  }, {
    key: '_dispatch',
    value: function _dispatch(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isDestroyed) {
        return;
      }

      data.shuffle = this;
      this.emit(name, data);
    }

    /**
     * Zeros out the y columns array, which is used to determine item placement.
     * @private
     */

  }, {
    key: '_resetCols',
    value: function _resetCols() {
      var i = this.cols;
      this.positions = [];
      while (i) {
        i -= 1;
        this.positions.push(0);
      }
    }

    /**
     * Loops through each item that should be shown and calculates the x, y position.
     * @param {ShuffleItem[]} items Array of items that will be shown/layed
     *     out in order in their array.
     */

  }, {
    key: '_layout',
    value: function _layout(items) {
      var _this4 = this;

      var itemPositions = this._getNextPositions(items);

      var count = 0;
      items.forEach(function (item, i) {
        function callback() {
          item.applyCss(ShuffleItem.Css.VISIBLE.after);
        }

        // If the item will not change its position, do not add it to the render
        // queue. Transitions don't fire when setting a property to the same value.
        if (Point.equals(item.point, itemPositions[i]) && !item.isHidden) {
          item.applyCss(ShuffleItem.Css.VISIBLE.before);
          callback();
          return;
        }

        item.point = itemPositions[i];
        item.scale = ShuffleItem.Scale.VISIBLE;
        item.isHidden = false;

        // Clone the object so that the `before` object isn't modified when the
        // transition delay is added.
        var styles = _this4.getStylesForTransition(item, ShuffleItem.Css.VISIBLE.before);
        styles.transitionDelay = _this4._getStaggerAmount(count) + 'ms';

        _this4._queue.push({
          item: item,
          styles: styles,
          callback: callback
        });

        count += 1;
      });
    }

    /**
     * Return an array of Point instances representing the future positions of
     * each item.
     * @param {ShuffleItem[]} items Array of sorted shuffle items.
     * @return {Point[]}
     * @private
     */

  }, {
    key: '_getNextPositions',
    value: function _getNextPositions(items) {
      var _this5 = this;

      // If position data is going to be changed, add the item's size to the
      // transformer to allow for calculations.
      if (this.options.isCentered) {
        var itemsData = items.map(function (item, i) {
          var itemSize = Shuffle.getSize(item.element, true);
          var point = _this5._getItemPosition(itemSize);
          return new Rect(point.x, point.y, itemSize.width, itemSize.height, i);
        });

        return this.getTransformedPositions(itemsData, this.containerWidth);
      }

      // If no transforms are going to happen, simply return an array of the
      // future points of each item.
      return items.map(function (item) {
        return _this5._getItemPosition(Shuffle.getSize(item.element, true));
      });
    }

    /**
     * Determine the location of the next item, based on its size.
     * @param {{width: number, height: number}} itemSize Object with width and height.
     * @return {Point}
     * @private
     */

  }, {
    key: '_getItemPosition',
    value: function _getItemPosition(itemSize) {
      return getItemPosition({
        itemSize: itemSize,
        positions: this.positions,
        gridSize: this.colWidth,
        total: this.cols,
        threshold: this.options.columnThreshold,
        buffer: this.options.buffer
      });
    }

    /**
     * Mutate positions before they're applied.
     * @param {Rect[]} itemRects Item data objects.
     * @param {number} containerWidth Width of the containing element.
     * @return {Point[]}
     * @protected
     */

  }, {
    key: 'getTransformedPositions',
    value: function getTransformedPositions(itemRects, containerWidth) {
      return getCenteredPositions(itemRects, containerWidth);
    }

    /**
     * Hides the elements that don't match our filter.
     * @param {ShuffleItem[]} collection Collection to shrink.
     * @private
     */

  }, {
    key: '_shrink',
    value: function _shrink() {
      var _this6 = this;

      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getConcealedItems();

      var count = 0;
      collection.forEach(function (item) {
        function callback() {
          item.applyCss(ShuffleItem.Css.HIDDEN.after);
        }

        // Continuing would add a transitionend event listener to the element, but
        // that listener would not execute because the transform and opacity would
        // stay the same.
        // The callback is executed here because it is not guaranteed to be called
        // after the transitionend event because the transitionend could be
        // canceled if another animation starts.
        if (item.isHidden) {
          item.applyCss(ShuffleItem.Css.HIDDEN.before);
          callback();
          return;
        }

        item.scale = ShuffleItem.Scale.HIDDEN;
        item.isHidden = true;

        var styles = _this6.getStylesForTransition(item, ShuffleItem.Css.HIDDEN.before);
        styles.transitionDelay = _this6._getStaggerAmount(count) + 'ms';

        _this6._queue.push({
          item: item,
          styles: styles,
          callback: callback
        });

        count += 1;
      });
    }

    /**
     * Resize handler.
     * @private
     */

  }, {
    key: '_handleResize',
    value: function _handleResize() {
      // If shuffle is disabled, destroyed, don't do anything
      if (!this.isEnabled || this.isDestroyed) {
        return;
      }

      this.update();
    }

    /**
     * Returns styles which will be applied to the an item for a transition.
     * @param {ShuffleItem} item Item to get styles for. Should have updated
     *   scale and point properties.
     * @param {Object} styleObject Extra styles that will be used in the transition.
     * @return {!Object} Transforms for transitions, left/top for animate.
     * @protected
     */

  }, {
    key: 'getStylesForTransition',
    value: function getStylesForTransition(item, styleObject) {
      // Clone the object to avoid mutating the original.
      var styles = Object.assign({}, styleObject);

      if (this.options.useTransforms) {
        var x = this.options.roundTransforms ? Math.round(item.point.x) : item.point.x;
        var y = this.options.roundTransforms ? Math.round(item.point.y) : item.point.y;
        styles.transform = 'translate(' + x + 'px, ' + y + 'px) scale(' + item.scale + ')';
      } else {
        styles.left = item.point.x + 'px';
        styles.top = item.point.y + 'px';
      }

      return styles;
    }

    /**
     * Listen for the transition end on an element and execute the itemCallback
     * when it finishes.
     * @param {Element} element Element to listen on.
     * @param {function} itemCallback Callback for the item.
     * @param {function} done Callback to notify `parallel` that this one is done.
     */

  }, {
    key: '_whenTransitionDone',
    value: function _whenTransitionDone(element, itemCallback, done) {
      var id = onTransitionEnd(element, function (evt) {
        itemCallback();
        done(null, evt);
      });

      this._transitions.push(id);
    }

    /**
     * Return a function which will set CSS styles and call the `done` function
     * when (if) the transition finishes.
     * @param {Object} opts Transition object.
     * @return {function} A function to be called with a `done` function.
     */

  }, {
    key: '_getTransitionFunction',
    value: function _getTransitionFunction(opts) {
      var _this7 = this;

      return function (done) {
        opts.item.applyCss(opts.styles);
        _this7._whenTransitionDone(opts.item.element, opts.callback, done);
      };
    }

    /**
     * Execute the styles gathered in the style queue. This applies styles to elements,
     * triggering transitions.
     * @private
     */

  }, {
    key: '_processQueue',
    value: function _processQueue() {
      if (this.isTransitioning) {
        this._cancelMovement();
      }

      var hasSpeed = this.options.speed > 0;
      var hasQueue = this._queue.length > 0;

      if (hasQueue && hasSpeed && this.isInitialized) {
        this._startTransitions(this._queue);
      } else if (hasQueue) {
        this._styleImmediately(this._queue);
        this._dispatch(Shuffle.EventType.LAYOUT);

        // A call to layout happened, but none of the newly visible items will
        // change position or the transition duration is zero, which will not trigger
        // the transitionend event.
      } else {
        this._dispatch(Shuffle.EventType.LAYOUT);
      }

      // Remove everything in the style queue
      this._queue.length = 0;
    }

    /**
     * Wait for each transition to finish, the emit the layout event.
     * @param {Object[]} transitions Array of transition objects.
     */

  }, {
    key: '_startTransitions',
    value: function _startTransitions(transitions) {
      var _this8 = this;

      // Set flag that shuffle is currently in motion.
      this.isTransitioning = true;

      // Create an array of functions to be called.
      var callbacks = transitions.map(function (obj) {
        return _this8._getTransitionFunction(obj);
      });

      arrayParallel(callbacks, this._movementFinished.bind(this));
    }
  }, {
    key: '_cancelMovement',
    value: function _cancelMovement() {
      // Remove the transition end event for each listener.
      this._transitions.forEach(cancelTransitionEnd);

      // Reset the array.
      this._transitions.length = 0;

      // Show it's no longer active.
      this.isTransitioning = false;
    }

    /**
     * Apply styles without a transition.
     * @param {Object[]} objects Array of transition objects.
     * @private
     */

  }, {
    key: '_styleImmediately',
    value: function _styleImmediately(objects) {
      if (objects.length) {
        var elements = objects.map(function (obj) {
          return obj.item.element;
        });

        Shuffle._skipTransitions(elements, function () {
          objects.forEach(function (obj) {
            obj.item.applyCss(obj.styles);
            obj.callback();
          });
        });
      }
    }
  }, {
    key: '_movementFinished',
    value: function _movementFinished() {
      this._transitions.length = 0;
      this.isTransitioning = false;
      this._dispatch(Shuffle.EventType.LAYOUT);
    }

    /**
     * The magic. This is what makes the plugin 'shuffle'
     * @param {string|string[]|function(Element):boolean} [category] Category to filter by.
     *     Can be a function, string, or array of strings.
     * @param {Object} [sortObj] A sort object which can sort the visible set
     */

  }, {
    key: 'filter',
    value: function filter(category, sortObj) {
      if (!this.isEnabled) {
        return;
      }

      if (!category || category && category.length === 0) {
        category = Shuffle.ALL_ITEMS; // eslint-disable-line no-param-reassign
      }

      this._filter(category);

      // Shrink each hidden item
      this._shrink();

      // How many visible elements?
      this._updateItemCount();

      // Update transforms on visible elements so they will animate to their new positions.
      this.sort(sortObj);
    }

    /**
     * Gets the visible elements, sorts them, and passes them to layout.
     * @param {Object} [sortOptions] The options object to pass to `sorter`.
     */

  }, {
    key: 'sort',
    value: function sort() {
      var sortOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastSort;

      if (!this.isEnabled) {
        return;
      }

      this._resetCols();

      var items = sorter(this._getFilteredItems(), sortOptions);

      this._layout(items);

      // `_layout` always happens after `_shrink`, so it's safe to process the style
      // queue here with styles from the shrink method.
      this._processQueue();

      // Adjust the height of the container.
      this._setContainerSize();

      this.lastSort = sortOptions;
    }

    /**
     * Reposition everything.
     * @param {boolean} [isOnlyLayout=false] If true, column and gutter widths won't be recalculated.
     */

  }, {
    key: 'update',
    value: function update() {
      var isOnlyLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isEnabled) {
        if (!isOnlyLayout) {
          // Get updated colCount
          this._setColumns();
        }

        // Layout items
        this.sort();
      }
    }

    /**
     * Use this instead of `update()` if you don't need the columns and gutters updated
     * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations
     * could be off.
     */

  }, {
    key: 'layout',
    value: function layout() {
      this.update(true);
    }

    /**
     * New items have been appended to shuffle. Mix them in with the current
     * filter or sort status.
     * @param {Element[]} newItems Collection of new items.
     */

  }, {
    key: 'add',
    value: function add(newItems) {
      var _this9 = this;

      var items = arrayUnique(newItems).map(function (el) {
        return new ShuffleItem(el);
      });

      // Add classes and set initial positions.
      this._initItems(items);

      // Determine which items will go with the current filter.
      this._resetCols();

      var allItems = this._mergeNewItems(items);
      var sortedItems = sorter(allItems, this.lastSort);
      var allSortedItemsSet = this._filter(this.lastFilter, sortedItems);

      var isNewItem = function isNewItem(item) {
        return items.includes(item);
      };
      var applyHiddenState = function applyHiddenState(item) {
        item.scale = ShuffleItem.Scale.HIDDEN;
        item.isHidden = true;
        item.applyCss(ShuffleItem.Css.HIDDEN.before);
        item.applyCss(ShuffleItem.Css.HIDDEN.after);
      };

      // Layout all items again so that new items get positions.
      // Synchonously apply positions.
      var itemPositions = this._getNextPositions(allSortedItemsSet.visible);
      allSortedItemsSet.visible.forEach(function (item, i) {
        if (isNewItem(item)) {
          item.point = itemPositions[i];
          applyHiddenState(item);
          item.applyCss(_this9.getStylesForTransition(item, {}));
        }
      });

      allSortedItemsSet.hidden.forEach(function (item) {
        if (isNewItem(item)) {
          applyHiddenState(item);
        }
      });

      // Cause layout so that the styles above are applied.
      this.element.offsetWidth; // eslint-disable-line no-unused-expressions

      // Add transition to each item.
      this.setItemTransitions(items);

      // Update the list of items.
      this.items = this._mergeNewItems(items);

      // Update layout/visibility of new and old items.
      this.filter(this.lastFilter);
    }

    /**
     * Disables shuffle from updating dimensions and layout on resize
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.isEnabled = false;
    }

    /**
     * Enables shuffle again
     * @param {boolean} [isUpdateLayout=true] if undefined, shuffle will update columns and gutters
     */

  }, {
    key: 'enable',
    value: function enable() {
      var isUpdateLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.isEnabled = true;
      if (isUpdateLayout) {
        this.update();
      }
    }

    /**
     * Remove 1 or more shuffle items.
     * @param {Element[]} elements An array containing one or more
     *     elements in shuffle
     * @return {Shuffle} The shuffle instance.
     */

  }, {
    key: 'remove',
    value: function remove(elements) {
      var _this10 = this;

      if (!elements.length) {
        return;
      }

      var collection = arrayUnique(elements);

      var oldItems = collection.map(function (element) {
        return _this10.getItemByElement(element);
      }).filter(function (item) {
        return !!item;
      });

      var handleLayout = function handleLayout() {
        _this10._disposeItems(oldItems);

        // Remove the collection in the callback
        collection.forEach(function (element) {
          element.parentNode.removeChild(element);
        });

        _this10._dispatch(Shuffle.EventType.REMOVED, { collection: collection });
      };

      // Hide collection first.
      this._toggleFilterClasses({
        visible: [],
        hidden: oldItems
      });

      this._shrink(oldItems);

      this.sort();

      // Update the list of items here because `remove` could be called again
      // with an item that is in the process of being removed.
      this.items = this.items.filter(function (item) {
        return !oldItems.includes(item);
      });
      this._updateItemCount();

      this.once(Shuffle.EventType.LAYOUT, handleLayout);
    }

    /**
     * Retrieve a shuffle item by its element.
     * @param {Element} element Element to look for.
     * @return {?ShuffleItem} A shuffle item or undefined if it's not found.
     */

  }, {
    key: 'getItemByElement',
    value: function getItemByElement(element) {
      return this.items.find(function (item) {
        return item.element === element;
      });
    }

    /**
     * Dump the elements currently stored and reinitialize all child elements which
     * match the `itemSelector`.
     */

  }, {
    key: 'resetItems',
    value: function resetItems() {
      var _this11 = this;

      // Remove refs to current items.
      this._disposeItems(this.items);
      this.isInitialized = false;

      // Find new items in the DOM.
      this.items = this._getItems();

      // Set initial styles on the new items.
      this._initItems(this.items);

      this.once(Shuffle.EventType.LAYOUT, function () {
        // Add transition to each item.
        _this11.setItemTransitions(_this11.items);
        _this11.isInitialized = true;
      });

      // Lay out all items.
      this.filter(this.lastFilter);
    }

    /**
     * Destroys shuffle, removes events, styles, and classes
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._cancelMovement();
      window.removeEventListener('resize', this._onResize);

      // Reset container styles
      this.element.classList.remove('shuffle');
      this.element.removeAttribute('style');

      // Reset individual item styles
      this._disposeItems(this.items);

      this.items.length = 0;
      this._transitions.length = 0;

      // Null DOM references
      this.options.sizer = null;
      this.element = null;

      // Set a flag so if a debounced resize has been triggered,
      // it can first check if it is actually isDestroyed and not doing anything
      this.isDestroyed = true;
      this.isEnabled = false;
    }

    /**
     * Returns the outer width of an element, optionally including its margins.
     *
     * There are a few different methods for getting the width of an element, none of
     * which work perfectly for all Shuffle's use cases.
     *
     * 1. getBoundingClientRect() `left` and `right` properties.
     *   - Accounts for transform scaled elements, making it useless for Shuffle
     *   elements which have shrunk.
     * 2. The `offsetWidth` property.
     *   - This value stays the same regardless of the elements transform property,
     *   however, it does not return subpixel values.
     * 3. getComputedStyle()
     *   - This works great Chrome, Firefox, Safari, but IE<=11 does not include
     *   padding and border when box-sizing: border-box is set, requiring a feature
     *   test and extra work to add the padding back for IE and other browsers which
     *   follow the W3C spec here.
     *
     * @param {Element} element The element.
     * @param {boolean} [includeMargins=false] Whether to include margins.
     * @return {{width: number, height: number}} The width and height.
     */

  }], [{
    key: 'getSize',
    value: function getSize(element) {
      var includeMargins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Store the styles so that they can be used by others without asking for it again.
      var styles = window.getComputedStyle(element, null);
      var width = getNumberStyle(element, 'width', styles);
      var height = getNumberStyle(element, 'height', styles);

      if (includeMargins) {
        var marginLeft = getNumberStyle(element, 'marginLeft', styles);
        var marginRight = getNumberStyle(element, 'marginRight', styles);
        var marginTop = getNumberStyle(element, 'marginTop', styles);
        var marginBottom = getNumberStyle(element, 'marginBottom', styles);
        width += marginLeft + marginRight;
        height += marginTop + marginBottom;
      }

      return {
        width: width,
        height: height
      };
    }

    /**
     * Change a property or execute a function which will not have a transition
     * @param {Element[]} elements DOM elements that won't be transitioned.
     * @param {function} callback A function which will be called while transition
     *     is set to 0ms.
     * @private
     */

  }, {
    key: '_skipTransitions',
    value: function _skipTransitions(elements, callback) {
      var zero = '0ms';

      // Save current duration and delay.
      var data = elements.map(function (element) {
        var style = element.style;

        var duration = style.transitionDuration;
        var delay = style.transitionDelay;

        // Set the duration to zero so it happens immediately
        style.transitionDuration = zero;
        style.transitionDelay = zero;

        return {
          duration: duration,
          delay: delay
        };
      });

      callback();

      // Cause forced synchronous layout.
      elements[0].offsetWidth; // eslint-disable-line no-unused-expressions

      // Put the duration back
      elements.forEach(function (element, i) {
        element.style.transitionDuration = data[i].duration;
        element.style.transitionDelay = data[i].delay;
      });
    }
  }]);
  return Shuffle;
}(tinyEmitter);

Shuffle.ShuffleItem = ShuffleItem;

Shuffle.ALL_ITEMS = 'all';
Shuffle.FILTER_ATTRIBUTE_KEY = 'groups';

/** @enum {string} */
Shuffle.EventType = {
  LAYOUT: 'shuffle:layout',
  REMOVED: 'shuffle:removed'
};

/** @enum {string} */
Shuffle.Classes = Classes;

/** @enum {string} */
Shuffle.FilterMode = {
  ANY: 'any',
  ALL: 'all'
};

// Overrideable options
Shuffle.options = {
  // Initial filter group.
  group: Shuffle.ALL_ITEMS,

  // Transition/animation speed (milliseconds).
  speed: 250,

  // CSS easing function to use.
  easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',

  // e.g. '.picture-item'.
  itemSelector: '*',

  // Element or selector string. Use an element to determine the size of columns
  // and gutters.
  sizer: null,

  // A static number or function that tells the plugin how wide the gutters
  // between columns are (in pixels).
  gutterWidth: 0,

  // A static number or function that returns a number which tells the plugin
  // how wide the columns are (in pixels).
  columnWidth: 0,

  // If your group is not json, and is comma delimeted, you could set delimiter
  // to ','.
  delimiter: null,

  // Useful for percentage based heights when they might not always be exactly
  // the same (in pixels).
  buffer: 0,

  // Reading the width of elements isn't precise enough and can cause columns to
  // jump between values.
  columnThreshold: 0.01,

  // Shuffle can be isInitialized with a sort object. It is the same object
  // given to the sort method.
  initialSort: null,

  // By default, shuffle will throttle resize events. This can be changed or
  // removed.
  throttle: throttleit,

  // How often shuffle can be called on resize (in milliseconds).
  throttleTime: 300,

  // Transition delay offset for each item in milliseconds.
  staggerAmount: 15,

  // Maximum stagger delay in milliseconds.
  staggerAmountMax: 150,

  // Whether to use transforms or absolute positioning.
  useTransforms: true,

  // Affects using an array with filter. e.g. `filter(['one', 'two'])`. With "any",
  // the element passes the test if any of its groups are in the array. With "all",
  // the element only passes if all groups are in the array.
  filterMode: Shuffle.FilterMode.ANY,

  // Attempt to center grid items in each row.
  isCentered: false,

  // Whether to round pixel values used in translate(x, y). This usually avoids
  // blurriness.
  roundTransforms: true
};

Shuffle.Point = Point;
Shuffle.Rect = Rect;

// Expose for testing. Hack at your own risk.
Shuffle.__sorter = sorter;
Shuffle.__getColumnSpan = getColumnSpan;
Shuffle.__getAvailablePositions = getAvailablePositions;
Shuffle.__getShortColumn = getShortColumn;
Shuffle.__getCenteredPositions = getCenteredPositions;

/* harmony default export */ __webpack_exports__["default"] = (Shuffle);
//# sourceMappingURL=shuffle.esm.js.map


/***/ }),

/***/ "./theme/assets/javascripts/browserSyncIt.js":
/*!***************************************************!*\
  !*** ./theme/assets/javascripts/browserSyncIt.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var browserSyncIt = function () {
	var bsWrite = function () {
		bs.addClass('is-success')
		var bsScript = 'http://138.197.181.254:3000/browser-sync/browser-sync-client.js?v=2.23.6/'
		$.getScript(bsScript)
	}
	var bs = $('.browsersync')
	bs.show()
	var bsActive = localStorage.getItem('bsActive')
	if (bsActive == 'true') { bsWrite() }
	else { bsActive = false }
	bs.on('click', function (e) {
		if (!bsActive) {
			localStorage.setItem('bsActive', true)
			bsActive = true
			bsWrite()
		} else {
			bs.removeClass('is-success')
			localStorage.setItem('bsActive', false)
			bsActive = false
		}
		e.preventDefault()
	})
}

/* harmony default export */ __webpack_exports__["default"] = (browserSyncIt);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/faceCrop.js":
/*!**********************************************!*\
  !*** ./theme/assets/javascripts/faceCrop.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var faceCrop = function () {
  var img = $('.single-anwalte img.facecrop')
  if (img.length) {
    img.imagesLoaded(function(){
      img.faceDetection({
        complete: function (faces) {
          // console.log(faces)
          if (faces.length) {
            console.log(faces)
            var face
            // get face with highest confidence rating
            if (faces.length > 1) {
              face = faces.reduce(function(prev, current) {
                return (prev.confidence > current.confidence) ? prev : current
              })
            } else {
              face = faces[0]
            }
            console.log(face)

            var imgW = img.attr('width')
            var imgH = img.attr('height')
            var t = parseInt(face.y)
            var h = parseInt(face.height)

            if (face.height > 100) { // && face.confidence > 0
              console.log('found face')
              var winW = $(window).width()
              var heroH = $('.hero .inner').height()
              var maxOffset = (imgH - heroH) / 2

              var ratio = winW / imgW
              // if (ratio > 1) ratio = 1
              // // const offset = ((ratio * t * -1) + h)
              var offset = (t * ratio)
              // if (offset > maxOffset) { offset = maxOffset }

              offset = (offset - (h*ratio/1.5))

              var imgRealH = winW * (imgH/imgW)
              var spareMargin = imgRealH - heroH - offset

              offset = offset * -1

              console.log( 'offset: '+offset+'\n heroH: '+heroH)

              if(offset < 0 && spareMargin > 0) {
                $('.hero .inner').css({ 'background-position-y': offset })
              }
            }
            // } else {
            //   console.log('no face confidence or face too small')
            // }
          }
        }
      })
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (faceCrop);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/filterToggle.js":
/*!**************************************************!*\
  !*** ./theme/assets/javascripts/filterToggle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var filterToggle = function () {
	$('[data-filtertoggle]').on('click', function() {
		var targetName = $(this).data('filtertoggle')

    if (targetName === 'all' || targetName === 'alle') {
			$('[data-filtertoggletarget]').addClass('is-filtered')
			$('.rotate90').removeClass('rotate90')
      $('[data-filtertoggle]').removeClass('is-active')
      $('.all[data-filtertoggle]').addClass('is-active')
		}
    else {
      $('.all').removeClass('is-active')
			var target = $('[data-filtertoggletarget="'+targetName+'"]')
			target.toggleClass('is-filtered');
			$(this).find('.icon').toggleClass('rotate90');
			$(this).toggleClass('is-active')
		}
	})
}

/* harmony default export */ __webpack_exports__["default"] = (filterToggle);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/galleries.js":
/*!***********************************************!*\
  !*** ./theme/assets/javascripts/galleries.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");


var glideInit = function () {
  var glideN = $('.glide').length

  if (glideN) {
    var glideConfig

    $('.glide').each(function(){

      var id = $(this).attr('id')

      if (id == 'anwalte-glide') {
        glideConfig = {
          type: 'carousel',
          perView: 1.15
        }
      } else if (id == 'news-glide') {
        glideConfig = {
          type: 'carousel',
          perView: 1
        }
      } else if (id == 'socialgrid-glide') {
        glideConfig = {
          type: 'carousel',
          perView: 1.5
        }
        $('.socialgrid.is-hidden-tablet ul#linkedin-con .glide__slide').unwrap()
      } else if (id == 'acf-glide') {
        // for the partial, used in standorte
        glideConfig = {
          type: 'carousel',
          perView: 1
        }
      } else {
        glideConfig = {
          type: 'carousel',
          perView: 1
        }
      }

      if ($('#' + id).length) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('#' + id, glideConfig).mount()
      } else {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.glide', glideConfig).mount()
      }

    })

  }
}

/* harmony default export */ __webpack_exports__["default"] = (glideInit);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/headerAndMenu.js":
/*!***************************************************!*\
  !*** ./theme/assets/javascripts/headerAndMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var headerAndMenu = function () {

  var mt = $('a.menu-toggle')
  var menu = $('#main-menu')
  var s = $('#search')
  var sh = $('#site-header')

  mt.on('click', function (e) {
    mt.toggleClass('is-active')
    menu.toggleClass('is-active')
    if (s.hasClass('is-active')) { s.removeClass('is-active') }

    var breaking
    if (sh.hasClass('has-breaking')) { breaking = true }
    else { breaking = false }
    if (breaking) { sh.toggleClass('has-breaking') }

    e.preventDefault()
  })

  $('#site-header .back-button').on('click', function (e) {
    if (document.referrer || history.length || history.previous) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
    e.preventDefault()
  })


  // BREAKING
  var breakingClosed = sessionStorage.getItem('breakingClosed')
  var breakingLatent = false
  if (sh.hasClass('has-breaking-latent')) { breakingLatent = true }

  console.log(breakingClosed)
  if (breakingClosed !== 'true' && breakingLatent) {
    // $('#site-header').removeClass('has-breaking')
    $('#site-header').removeClass('has-breaking-latent').addClass('has-breaking')
  }

  $('.breaking .close').on('click', function (e) {
    $('#site-header').removeClass('has-breaking')
    sessionStorage.setItem('breakingClosed', true)
    e.preventDefault()
  })


  $('.awards .toggle').on('click', function(e){
    $('.award.hide').removeClass('hide')
    $(this).addClass('is-hidden')
    e.preventDefault()
  })

}

/* harmony default export */ __webpack_exports__["default"] = (headerAndMenu);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/headerParallax.js":
/*!****************************************************!*\
  !*** ./theme/assets/javascripts/headerParallax.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var headerParallax = function () {
  var hero = $('.hero')
  if(hero.length) {
    var heroH = hero.height()
    var heroHbuf = heroH*1.2

    var scroll = function () {
      if(lastScrollTop < heroHbuf) {
        $('.hero:hidden').show()
        var move = lastScrollTop / 2
        // hero.css('transform', 'translate3d(0, -'+move+'px, 0)')
      } else if(lastScrollTop > heroHbuf) {
        $('.hero:visible').hide()
      }
    }

    var raf = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame
    var $window = $(window)
    var lastScrollTop = $window.scrollTop()

    var loop = function () {
      var scrollTop = $window.scrollTop()
      if (lastScrollTop === scrollTop) {
        raf(loop)
        return
      } else {
        lastScrollTop = scrollTop
        scroll()
        raf(loop)
      }
    }

    if (raf) { loop() }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (headerParallax);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/imagesLoaded.js":
/*!**************************************************!*\
  !*** ./theme/assets/javascripts/imagesLoaded.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__factory, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){ true?!(__WEBPACK_LOCAL_MODULE_0__factory = (t), (__WEBPACK_LOCAL_MODULE_0__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_LOCAL_MODULE_0__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_0__factory.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module)) : __WEBPACK_LOCAL_MODULE_0__factory), (__WEBPACK_LOCAL_MODULE_0__module.loaded = true), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports)):undefined}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){
var this$1 = this;
var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this$1.off(e,r),delete n[r]),r.apply(this$1,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i){return t(e,i)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t){ e[i]=t[i]; }return e}function n(e){if(Array.isArray(e)){ return e; }var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o)){ return new o(e,t,r); }var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){
var this$1 = this;
"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this$1.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this$1.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){
var this$1 = this;
var t=getComputedStyle(e);if(t){ for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this$1.addBackground(o,e),n=i.exec(t.backgroundImage)} }},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


/***/ }),

/***/ "./theme/assets/javascripts/langSwitcher.js":
/*!**************************************************!*\
  !*** ./theme/assets/javascripts/langSwitcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var langSwitcher = function () {
  // localStorage.removeItem('lang')

  var langButton = $('.top-bar a.lang')
  var currentLang = langButton.data('current-lang')
  var toLang = langButton.data('to-lang')
  var storedLang = localStorage.getItem('lang')

  langButton.on('click', function(e){
    localStorage.setItem('lang', toLang)
    var href = window.location.href + langButton.data('href')
    window.location.replace(href)
    e.preventDefault()
  })

  if (storedLang) { console.log('storedLang: '+storedLang)
  } else { console.log('storedLang not set') }

  var browserLang = navigator.language
  var isntGerman
  if (browserLang.includes('de')) { isntGerman = false }
  else { isntGerman = true }

  if (isntGerman && !storedLang) {
    // is not german
    // has no language stored in localStorage
    console.log('ask if they want to switch')
    $('#language_prompt').addClass('is-active')
  }

  // auto-redirect if lang set but on the wrong page
  if (storedLang && storedLang !== currentLang) {
    var href = window.location.href + langButton.data('href')
    window.location.replace(href)
  }

  $('#language_prompt .close, #language_prompt button[data-action="close"]').on('click', function(){
    console.log('leave it in de')
    localStorage.setItem('lang', 'de')
    $('#language_prompt').removeClass('is-active')
  })

  $('#language_prompt button[data-action="english"]').on('click', function(){
    console.log('change it to en')
    localStorage.setItem('lang', 'en')
    var href = window.location.href + langButton.data('href')
    console.log(href)
    window.location.replace(href)
  })

}

/* harmony default export */ __webpack_exports__["default"] = (langSwitcher);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/scroll2top.js":
/*!************************************************!*\
  !*** ./theme/assets/javascripts/scroll2top.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jump.js */ "./node_modules/jump.js/dist/jump.module.js");


var scroll2top = function () {

	var visibleThreshold = $(window).height() / 2;

	if (!$('.scrollToTop').hasClass('hidden')) {
		$('.scrollToTop').addClass('hidden');
	}

	$(window).off().on('scroll', function() {

		var top = $(window).scrollTop();

		if (top < visibleThreshold && !$('.scrollToTop').hasClass('hidden')) {
			$('.scrollToTop').addClass('hidden');
		}
		else if (top > visibleThreshold && $('.scrollToTop').hasClass('hidden')) {
			$('.scrollToTop').removeClass('hidden');
		}
	});

	$('.scrollToTop').off().on('click', function() {
		Object(jump_js__WEBPACK_IMPORTED_MODULE_0__["default"])('body')
	});
};

/* harmony default export */ __webpack_exports__["default"] = (scroll2top);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/search.js":
/*!********************************************!*\
  !*** ./theme/assets/javascripts/search.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/*
  ____                      _
 / ___|  ___  __ _ _ __ ___| |__
 \___ \ / _ \/ _` | '__/ __| '_ \
  ___) |  __/ (_| | | | (__| | | |
 |____/ \___|\__,_|_|  \___|_| |_|

 */

var search = function () {
	var s = $('#search')
	var m = $('#main-menu')
	var mt = $('.menu-toggle')

	$('a.search-button').on('click', function(e){
		s.toggleClass('is-active')

		if (m.hasClass('is-active')) {
			m.removeClass('is-active')
			mt.removeClass('is-active')
		}

		e.preventDefault()
	})

	// $('#searchform #s').attr('autocomplete', 'off')

}

/* harmony default export */ __webpack_exports__["default"] = (search);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/shuffler.js":
/*!**********************************************!*\
  !*** ./theme/assets/javascripts/shuffler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var shufflejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shufflejs */ "./node_modules/shufflejs/dist/shuffle.esm.js");


var shuffler = function () {
	if( $('.shuffler').length ) {
		console.log('shuffler')

		var filterState = []
		var wrapper = '.shuffler'
		var item = '.shuffler-item'
		var element = document.querySelector(wrapper)
		var sizer = element.querySelector(item)

		var shuffleInstance = new shufflejs__WEBPACK_IMPORTED_MODULE_0__["default"](element, {
			itemSelector: item,
			sizer: sizer,
			staggerAmount: 150,
			filterMode: shufflejs__WEBPACK_IMPORTED_MODULE_0__["default"].FilterMode.ALL,
		})

		$('[data-filter]').on('click', function() {
			var target = $(this).data('filter')
      var filtertype  = $(this).data('filtertype')

      if (filtertype === 'multi') {
  			$(this).toggleClass('is-active')

  			if ($(this).hasClass('is-active')) {
  				filterState.push(target)
  			} else {
  				filterState = filterState.filter(function (item) { return item !== target; })
  			}
      }

      if (filtertype === 'single') {
        // $(this).addClass('is-active')
				var t = $(this)
				var set
				if ( ! t.hasClass('is-active')) {
					t.addClass('is-active')
					set = true
				} else {
					t.removeClass('is-active')
					set = false
				}

				if (set) {
	        t.closest('.filter').find('.is-active').not($(this)).each(function(){
	          var filter = $(this).data('filter')
	          console.log('remove: ' + filter)
	          $(this).removeClass('is-active')
	          filterState = filterState.filter(function (item) { return item !== filter; })
	        })
					filterState.push($(this).data('filter'))
				} else {
					filterState = []
				}
      }

      $('.filter-toggle.all, .filter-all').on('click', function(){
        console.log('all')
        $('.filter-item.is-active').removeClass('is-active')
        $(this).addClass('is-active');
        filterState = []
        shuffleInstance.filter(filterState)
      })

			console.log(filterState)
			shuffleInstance.filter(filterState)
		})

		var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints
		if (supportsTouch) {
			$('.shuffler-item').on('click touch', function() {
				$(this).toggleClass('touch')
			})
		}


	}
}

/* harmony default export */ __webpack_exports__["default"] = (shuffler);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/socialHax.js":
/*!***********************************************!*\
  !*** ./theme/assets/javascripts/socialHax.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var socialHax = function () {

  var whichLang = function () {
    var url = new URL(window.location.href)
    var lang = url.searchParams.get('lang')
    if (! lang ) { return 'de' }
    else { return lang }
  }

  $('ul#linkedin-con h2').remove()
  var logo1 = $('section.socialgrid.is-hidden-mobile .logo1')
  var logo2 = $('section.socialgrid.is-hidden-mobile .logo2')
  logo1.prependTo('.is-hidden-mobile #linkedin-con')
  logo2.appendTo('.is-hidden-mobile #linkedin-con')
  // let mobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))
  // true/false

  $('.is-hidden-mobile .linkedin-item').not('.logo').each(function(){
    var trimLength = 80

    // copy the link
    var link = $(this).find('div:first p:first a')
    var href = link.attr('href')

    // check en or de for link text
    var word
    if (whichLang() == 'en') { word = 'More' }
    else { word = 'Mehr' }
    var newLink = '<a target=_blank href="'+ href +'">'+ word +'</a>'

    link.remove()
    var text = $(this).find('div:first p:first').text()
    text = text.substring(0, trimLength) + '&hellip;'
    var html = '<div><p>' + text + '</p><div class="link">' + newLink + '</div></div>'
    $(this).html(html)
  })
}

/* harmony default export */ __webpack_exports__["default"] = (socialHax);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/javascripts/urlQuery.js":
/*!**********************************************!*\
  !*** ./theme/assets/javascripts/urlQuery.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var urlQuery = function () {
  var params = new URLSearchParams(window.location.search);
  if (params.toString()) {

    // ANWALTE
    if ($('body').hasClass('post-type-archive-anwalte')) {

      if (params.has('standort')) {
        $('button[data-filtertoggle="standorte"]').trigger('click')
        var standort = params.get('standort')
        $('[data-filter="'+standort+'"]').trigger('click')
      }


      if (params.has('k')) {
        $('button[data-filtertoggle="kompetenzen"]').trigger('click')

        var k = params.get('k')
        var kompetenzen = []

        if (k.includes(',')) {
          kompetenzen = k.split(',')
        }
        else {
          kompetenzen.push(k)
        }
        kompetenzen.forEach(function (e) {
          $('[data-filter="'+e+'"]').trigger('click')
        })
      }
    } // end anwalte


    // NEWS
    if ($('body').hasClass('post-type-archive-news')) {
      if (params.has('veranstaltungen')) {
        $('[data-filter="veranstaltungen"]').trigger('click')
        // const standort = params.get('standort')
        // $('[data-filter="'+standort+'"]').trigger('click')
      }
    } // end news

  }
}

/* harmony default export */ __webpack_exports__["default"] = (urlQuery);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/main.js":
/*!******************************!*\
  !*** ./theme/assets/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _javascripts_browserSyncIt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascripts/browserSyncIt */ "./theme/assets/javascripts/browserSyncIt.js");
/* harmony import */ var _javascripts_headerParallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/headerParallax */ "./theme/assets/javascripts/headerParallax.js");
/* harmony import */ var _javascripts_shuffler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascripts/shuffler */ "./theme/assets/javascripts/shuffler.js");
/* harmony import */ var _javascripts_filterToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascripts/filterToggle */ "./theme/assets/javascripts/filterToggle.js");
/* harmony import */ var _javascripts_headerAndMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascripts/headerAndMenu */ "./theme/assets/javascripts/headerAndMenu.js");
/* harmony import */ var _javascripts_urlQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascripts/urlQuery */ "./theme/assets/javascripts/urlQuery.js");
/* harmony import */ var _javascripts_scroll2top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./javascripts/scroll2top */ "./theme/assets/javascripts/scroll2top.js");
/* harmony import */ var _javascripts_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./javascripts/search */ "./theme/assets/javascripts/search.js");
/* harmony import */ var aos_dist_aos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aos/dist/aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos_dist_aos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var browser_update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! browser-update */ "./node_modules/browser-update/update.npm.full.js");
/* harmony import */ var browser_update__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(browser_update__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery_facedetection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery.facedetection */ "./node_modules/jquery.facedetection/dist/jquery.facedetection.min.js");
/* harmony import */ var jquery_facedetection__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery_facedetection__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _javascripts_galleries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./javascripts/galleries */ "./theme/assets/javascripts/galleries.js");
/* harmony import */ var _javascripts_imagesLoaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./javascripts/imagesLoaded */ "./theme/assets/javascripts/imagesLoaded.js");
/* harmony import */ var _javascripts_imagesLoaded__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_javascripts_imagesLoaded__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _javascripts_faceCrop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./javascripts/faceCrop */ "./theme/assets/javascripts/faceCrop.js");
/* harmony import */ var _javascripts_socialHax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./javascripts/socialHax */ "./theme/assets/javascripts/socialHax.js");
/* harmony import */ var _javascripts_langSwitcher__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./javascripts/langSwitcher */ "./theme/assets/javascripts/langSwitcher.js");

















/*
   ____                _   __  __
  / ___|_   _  ___ ___(_) |  \/  | __ _ _ __   ___
 | |  _| | | |/ __/ __| | | |\/| |/ _` | '_ \ / _ \
 | |_| | |_| | (_| (__| | | |  | | (_| | | | |  __/
  \____|\__,_|\___\___|_| |_|  |_|\__,_|_| |_|\___|
*/


aos_dist_aos__WEBPACK_IMPORTED_MODULE_8___default.a.init({
  disable: 'mobile',
  once: true
})

var anwaltHax = function () {
  $('.single-anwalte .vita li').each(function(){
    var t = $(this).text()
    if (t.includes('joining')) {
      console.log(t)

      $(this).text(t.replace('joining', 'joined'))
    }

  })
}


browser_update__WEBPACK_IMPORTED_MODULE_9___default()({
  notify:{e:11,f:-4,o:-4,s:-2,c:-6},
  insecure:true,
  unsupported:true,
  api:5,
  // text_xx: 'Hi',
  // test: true
})


$(function () {
  whenDOMready()
})


var whenDOMready = function () {
  Object(_javascripts_browserSyncIt__WEBPACK_IMPORTED_MODULE_0__["default"])()
  Object(_javascripts_headerAndMenu__WEBPACK_IMPORTED_MODULE_4__["default"])()
  Object(_javascripts_headerParallax__WEBPACK_IMPORTED_MODULE_1__["default"])()
  Object(_javascripts_filterToggle__WEBPACK_IMPORTED_MODULE_3__["default"])()
  Object(_javascripts_shuffler__WEBPACK_IMPORTED_MODULE_2__["default"])()
  Object(_javascripts_urlQuery__WEBPACK_IMPORTED_MODULE_5__["default"])()
  Object(_javascripts_scroll2top__WEBPACK_IMPORTED_MODULE_6__["default"])()
  Object(_javascripts_search__WEBPACK_IMPORTED_MODULE_7__["default"])()
  Object(_javascripts_socialHax__WEBPACK_IMPORTED_MODULE_14__["default"])()
  aos_dist_aos__WEBPACK_IMPORTED_MODULE_8___default.a.refresh()
  Object(_javascripts_galleries__WEBPACK_IMPORTED_MODULE_11__["default"])()
  Object(_javascripts_faceCrop__WEBPACK_IMPORTED_MODULE_13__["default"])()
  anwaltHax()
  Object(_javascripts_langSwitcher__WEBPACK_IMPORTED_MODULE_15__["default"])()
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./theme/assets/stylesheets/screen.sass":
/*!**********************************************!*\
  !*** ./theme/assets/stylesheets/screen.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./theme/assets/main.js ./theme/assets/stylesheets/screen.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/asd-law.com/bedrock/web/app/themes/asdlaw-wl/theme/assets/main.js */"./theme/assets/main.js");
module.exports = __webpack_require__(/*! /var/www/asd-law.com/bedrock/web/app/themes/asdlaw-wl/theme/assets/stylesheets/screen.sass */"./theme/assets/stylesheets/screen.sass");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=application.js.map