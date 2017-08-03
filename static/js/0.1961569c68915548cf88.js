webpackJsonp([0],Array(97).concat([
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(124)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(131),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2b4bad46",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class RuntimeException {

    constructor(message) {
        this._message = message;
    }

    get name() {
        return 'RuntimeException';
    }

    get message() {
        return this._message;
    }

    toString() {
        return this.name + ': ' + this.message;
    }

}
/* harmony export (immutable) */ __webpack_exports__["c"] = RuntimeException;


class IllegalStateException extends RuntimeException {

    constructor(message) {
        super(message);
    }

    get name() {
        return 'IllegalStateException';
    }

}
/* harmony export (immutable) */ __webpack_exports__["d"] = IllegalStateException;


class InvalidArgumentException extends RuntimeException {

    constructor(message) {
        super(message);
    }

    get name() {
        return 'InvalidArgumentException';
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = InvalidArgumentException;


class NotImplementedException extends RuntimeException {

    constructor(message) {
        super(message);
    }

    get name() {
        return 'NotImplementedException';
    }

}
/* harmony export (immutable) */ __webpack_exports__["b"] = NotImplementedException;



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class Log {

    static e(tag, msg) {
        if (!tag || Log.FORCE_GLOBAL_TAG)
            tag = Log.GLOBAL_TAG;

        let str = `[${tag}] > ${msg}`;

        if (Log.ENABLE_CALLBACK) {
            Log.emitter.emit('log', 'error', str);
        }

        if (!Log.ENABLE_ERROR) {
            return;
        }

        if (console.error) {
            console.error(str);
        } else if (console.warn) {
            console.warn(str);
        } else {
            console.log(str);
        }
    }

    static i(tag, msg) {
        if (!tag || Log.FORCE_GLOBAL_TAG)
            tag = Log.GLOBAL_TAG;

        let str = `[${tag}] > ${msg}`;

        if (Log.ENABLE_CALLBACK) {
            Log.emitter.emit('log', 'info', str);
        }

        if (!Log.ENABLE_INFO) {
            return;
        }

        if (console.info) {
            console.info(str);
        } else {
            console.log(str);
        }
    }

    static w(tag, msg) {
        if (!tag || Log.FORCE_GLOBAL_TAG)
            tag = Log.GLOBAL_TAG;

        let str = `[${tag}] > ${msg}`;

        if (Log.ENABLE_CALLBACK) {
            Log.emitter.emit('log', 'warn', str);
        }

        if (!Log.ENABLE_WARN) {
            return;
        }

        if (console.warn) {
            console.warn(str);
        } else {
            console.log(str);
        }
    }

    static d(tag, msg) {
        if (!tag || Log.FORCE_GLOBAL_TAG)
            tag = Log.GLOBAL_TAG;

        let str = `[${tag}] > ${msg}`;

        if (Log.ENABLE_CALLBACK) {
            Log.emitter.emit('log', 'debug', str);
        }

        if (!Log.ENABLE_DEBUG) {
            return;
        }

        if (console.debug) {
            console.debug(str);
        } else {
            console.log(str);
        }
    }

    static v(tag, msg) {
        if (!tag || Log.FORCE_GLOBAL_TAG)
            tag = Log.GLOBAL_TAG;

        let str = `[${tag}] > ${msg}`;

        if (Log.ENABLE_CALLBACK) {
            Log.emitter.emit('log', 'verbose', str);
        }

        if (!Log.ENABLE_VERBOSE) {
            return;
        }

        console.log(str);
    }

}

Log.GLOBAL_TAG = 'flv.js';
Log.FORCE_GLOBAL_TAG = false;
Log.ENABLE_ERROR = true;
Log.ENABLE_INFO = true;
Log.ENABLE_WARN = true;
Log.ENABLE_DEBUG = true;
Log.ENABLE_VERBOSE = true;

Log.ENABLE_CALLBACK = false;

Log.emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

/* harmony default export */ __webpack_exports__["a"] = (Log);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const LoaderStatus = {
    kIdle: 0,
    kConnecting: 1,
    kBuffering: 2,
    kError: 3,
    kComplete: 4
};
/* harmony export (immutable) */ __webpack_exports__["c"] = LoaderStatus;


const LoaderErrors = {
    OK: 'OK',
    EXCEPTION: 'Exception',
    HTTP_STATUS_CODE_INVALID: 'HttpStatusCodeInvalid',
    CONNECTING_TIMEOUT: 'ConnectingTimeout',
    EARLY_EOF: 'EarlyEof',
    UNRECOVERABLE_EARLY_EOF: 'UnrecoverableEarlyEof'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = LoaderErrors;


/* Loader has callbacks which have following prototypes:
 *     function onContentLengthKnown(contentLength: number): void
 *     function onURLRedirect(url: string): void
 *     function onDataArrival(chunk: ArrayBuffer, byteStart: number, receivedLength: number): void
 *     function onError(errorType: number, errorInfo: {code: number, msg: string}): void
 *     function onComplete(rangeFrom: number, rangeTo: number): void
 */
class BaseLoader {

    constructor(typeName) {
        this._type = typeName || 'undefined';
        this._status = LoaderStatus.kIdle;
        this._needStash = false;
        // callbacks
        this._onContentLengthKnown = null;
        this._onURLRedirect = null;
        this._onDataArrival = null;
        this._onError = null;
        this._onComplete = null;
    }

    destroy() {
        this._status = LoaderStatus.kIdle;
        this._onContentLengthKnown = null;
        this._onURLRedirect = null;
        this._onDataArrival = null;
        this._onError = null;
        this._onComplete = null;
    }

    isWorking() {
        return this._status === LoaderStatus.kConnecting || this._status === LoaderStatus.kBuffering;
    }

    get type() {
        return this._type;
    }

    get status() {
        return this._status;
    }

    get needStashBuffer() {
        return this._needStash;
    }

    get onContentLengthKnown() {
        return this._onContentLengthKnown;
    }

    set onContentLengthKnown(callback) {
        this._onContentLengthKnown = callback;
    }

    get onURLRedirect() {
        return this._onURLRedirect;
    }

    set onURLRedirect(callback) {
        this._onURLRedirect = callback;
    }

    get onDataArrival() {
        return this._onDataArrival;
    }

    set onDataArrival(callback) {
        this._onDataArrival = callback;
    }

    get onError() {
        return this._onError;
    }

    set onError(callback) {
        this._onError = callback;
    }

    get onComplete() {
        return this._onComplete;
    }

    set onComplete(callback) {
        this._onComplete = callback;
    }

    // pure virtual
    open(dataSource, range) {
        throw new __WEBPACK_IMPORTED_MODULE_0__utils_exception_js__["b" /* NotImplementedException */]('Unimplemented abstract function!');
    }

    abort() {
        throw new __WEBPACK_IMPORTED_MODULE_0__utils_exception_js__["b" /* NotImplementedException */]('Unimplemented abstract function!');
    }


}
/* harmony export (immutable) */ __webpack_exports__["b"] = BaseLoader;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let Browser = {};

function detect() {
    // modified from jquery-browser-plugin

    let ua = self.navigator.userAgent.toLowerCase();

    let match = /(edge)\/([\w.]+)/.exec(ua) ||
        /(opr)[\/]([\w.]+)/.exec(ua) ||
        /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(iemobile)[\/]([\w.]+)/.exec(ua) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) ||
        ua.indexOf('compatible') < 0 && /(firefox)[ \/]([\w.]+)/.exec(ua) ||
        [];

    let platform_match = /(ipad)/.exec(ua) ||
        /(ipod)/.exec(ua) ||
        /(windows phone)/.exec(ua) ||
        /(iphone)/.exec(ua) ||
        /(kindle)/.exec(ua) ||
        /(android)/.exec(ua) ||
        /(windows)/.exec(ua) ||
        /(mac)/.exec(ua) ||
        /(linux)/.exec(ua) ||
        /(cros)/.exec(ua) ||
        [];

    let matched = {
        browser: match[5] || match[3] || match[1] || '',
        version: match[2] || match[4] || '0',
        majorVersion: match[4] || match[2] || '0',
        platform: platform_match[0] || ''
    };

    let browser = {};
    if (matched.browser) {
        browser[matched.browser] = true;

        let versionArray = matched.majorVersion.split('.');
        browser.version = {
            major: parseInt(matched.majorVersion, 10),
            string: matched.version
        };
        if (versionArray.length > 1) {
            browser.version.minor = parseInt(versionArray[1], 10);
        }
        if (versionArray.length > 2) {
            browser.version.build = parseInt(versionArray[2], 10);
        }
    }

    if (matched.platform) {
        browser[matched.platform] = true;
    }

    if (browser.chrome || browser.opr || browser.safari) {
        browser.webkit = true;
    }

    // MSIE. IE11 has 'rv' identifer
    if (browser.rv || browser.iemobile) {
        if (browser.rv) {
            delete browser.rv;
        }
        let msie = 'msie';
        matched.browser = msie;
        browser[msie] = true;
    }

    // Microsoft Edge
    if (browser.edge) {
        delete browser.edge;
        let msedge = 'msedge';
        matched.browser = msedge;
        browser[msedge] = true;
    }

    // Opera 15+
    if (browser.opr) {
        let opera = 'opera';
        matched.browser = opera;
        browser[opera] = true;
    }

    // Stock android browsers are marked as Safari
    if (browser.safari && browser.android) {
        let android = 'android';
        matched.browser = android;
        browser[android] = true;
    }

    browser.name = matched.browser;
    browser.platform = matched.platform;

    for (let key in Browser) {
        if (Browser.hasOwnProperty(key)) {
            delete Browser[key];
        }
    }
    Object.assign(Browser, browser);
}

detect();

/* harmony default export */ __webpack_exports__["a"] = (Browser);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const TransmuxingEvents = {
    IO_ERROR: 'io_error',
    DEMUX_ERROR: 'demux_error',
    INIT_SEGMENT: 'init_segment',
    MEDIA_SEGMENT: 'media_segment',
    LOADING_COMPLETE: 'loading_complete',
    RECOVERED_EARLY_EOF: 'recovered_early_eof',
    MEDIA_INFO: 'media_info',
    STATISTICS_INFO: 'statistics_info',
    RECOMMEND_SEEKPOINT: 'recommend_seekpoint'
};

/* harmony default export */ __webpack_exports__["a"] = (TransmuxingEvents);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDefaultConfig;
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const defaultConfig = {
    enableWorker: false,
    enableStashBuffer: true,
    stashInitialSize: undefined,

    isLive: false,

    lazyLoad: true,
    lazyLoadMaxDuration: 3 * 60,
    lazyLoadRecoverDuration: 30,
    deferLoadAfterSourceOpen: true,

    // autoCleanupSourceBuffer: default as false, leave unspecified
    autoCleanupMaxBackwardDuration: 3 * 60,
    autoCleanupMinBackwardDuration: 2 * 60,

    statisticsInfoReportInterval: 600,

    fixAudioTimestampGap: true,

    accurateSeek: false,
    seekType: 'range',  // [range, param, custom]
    seekParamStart: 'bstart',
    seekParamEnd: 'bend',
    rangeLoadZeroStart: false,
    customSeekHandler: undefined,
    reuseRedirectedURL: false
    // referrerPolicy: leave as unspecified
};
/* unused harmony export defaultConfig */


function createDefaultConfig() {
    return Object.assign({}, defaultConfig);
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MediaInfo {

    constructor() {
        this.mimeType = null;
        this.duration = null;

        this.hasAudio = null;
        this.hasVideo = null;
        this.audioCodec = null;
        this.videoCodec = null;
        this.audioDataRate = null;
        this.videoDataRate = null;

        this.audioSampleRate = null;
        this.audioChannelCount = null;

        this.width = null;
        this.height = null;
        this.fps = null;
        this.profile = null;
        this.level = null;
        this.chromaFormat = null;
        this.sarNum = null;
        this.sarDen = null;

        this.metadata = null;
        this.segments = null;  // MediaInfo[]
        this.segmentCount = null;
        this.hasKeyframesIndex = null;
        this.keyframesIndex = null;
    }

    isComplete() {
        let audioInfoComplete = (this.hasAudio === false) ||
                                (this.hasAudio === true &&
                                 this.audioCodec != null &&
                                 this.audioSampleRate != null &&
                                 this.audioChannelCount != null);

        let videoInfoComplete = (this.hasVideo === false) ||
                                (this.hasVideo === true &&
                                 this.videoCodec != null &&
                                 this.width != null &&
                                 this.height != null &&
                                 this.fps != null &&
                                 this.profile != null &&
                                 this.level != null &&
                                 this.chromaFormat != null &&
                                 this.sarNum != null &&
                                 this.sarDen != null);

        // keyframesIndex may not be present
        return this.mimeType != null &&
               this.duration != null &&
               this.metadata != null &&
               this.hasKeyframesIndex != null &&
               audioInfoComplete &&
               videoInfoComplete;
    }

    isSeekable() {
        return this.hasKeyframesIndex === true;
    }

    getNearestKeyframe(milliseconds) {
        if (this.keyframesIndex == null) {
            return null;
        }

        let table = this.keyframesIndex;
        let keyframeIdx = this._search(table.times, milliseconds);

        return {
            index: keyframeIdx,
            milliseconds: table.times[keyframeIdx],
            fileposition: table.filepositions[keyframeIdx]
        };
    }

    _search(list, value) {
        let idx = 0;

        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        if (value < list[0]) {
            idx = 0;
            lbound = ubound + 1;  // skip search
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || (value >= list[mid] && value < list[mid + 1])) {
                idx = mid;
                break;
            } else if (list[mid] < value) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }

        return idx;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (MediaInfo);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DemuxErrors = {
    OK: 'OK',
    FORMAT_ERROR: 'FormatError',
    FORMAT_UNSUPPORTED: 'FormatUnsupported',
    CODEC_UNSUPPORTED: 'CodecUnsupported'
};

/* harmony default export */ __webpack_exports__["a"] = (DemuxErrors);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const PlayerEvents = {
    ERROR: 'error',
    LOADING_COMPLETE: 'loading_complete',
    RECOVERED_EARLY_EOF: 'recovered_early_eof',
    MEDIA_INFO: 'media_info',
    STATISTICS_INFO: 'statistics_info'
};

/* harmony default export */ __webpack_exports__["a"] = (PlayerEvents);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_js__ = __webpack_require__(99);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class LoggingControl {

    static get forceGlobalTag() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].FORCE_GLOBAL_TAG;
    }

    static set forceGlobalTag(enable) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].FORCE_GLOBAL_TAG = enable;
        LoggingControl._notifyChange();
    }

    static get globalTag() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].GLOBAL_TAG;
    }

    static set globalTag(tag) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].GLOBAL_TAG = tag;
        LoggingControl._notifyChange();
    }

    static get enableAll() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_VERBOSE
            && __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_DEBUG
            && __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_INFO
            && __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_WARN
            && __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_ERROR;
    }

    static set enableAll(enable) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_VERBOSE = enable;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_DEBUG = enable;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_INFO = enable;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_WARN = enable;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_ERROR = enable;
        LoggingControl._notifyChange();
    }

    static get enableDebug() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_DEBUG;
    }

    static set enableDebug(enable) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_DEBUG = enable;
        LoggingControl._notifyChange();
    }

    static get enableVerbose() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_VERBOSE;
    }

    static set enableVerbose(enable) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_VERBOSE = enable;
        LoggingControl._notifyChange();
    }

    static get enableInfo() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_INFO;
    }

    static set enableInfo(enable) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_INFO = enable;
        LoggingControl._notifyChange();
    }

    static get enableWarn() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_WARN;
    }

    static set enableWarn(enable) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_WARN = enable;
        LoggingControl._notifyChange();
    }

    static get enableError() {
        return __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_ERROR;
    }

    static set enableError(enable) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_ERROR = enable;
        LoggingControl._notifyChange();
    }

    static getConfig() {
        return {
            globalTag: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].GLOBAL_TAG,
            forceGlobalTag: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].FORCE_GLOBAL_TAG,
            enableVerbose: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_VERBOSE,
            enableDebug: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_DEBUG,
            enableInfo: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_INFO,
            enableWarn: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_WARN,
            enableError: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_ERROR,
            enableCallback: __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_CALLBACK
        };
    }

    static applyConfig(config) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].GLOBAL_TAG = config.globalTag;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].FORCE_GLOBAL_TAG = config.forceGlobalTag;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_VERBOSE = config.enableVerbose;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_DEBUG = config.enableDebug;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_INFO = config.enableInfo;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_WARN = config.enableWarn;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_ERROR = config.enableError;
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_CALLBACK = config.enableCallback;
    }

    static _notifyChange() {
        let emitter = LoggingControl.emitter;

        if (emitter.listenerCount('change') > 0) {
            let config = LoggingControl.getConfig();
            emitter.emit('change', config);
        }
    }

    static registerListener(listener) {
        LoggingControl.emitter.addListener('change', listener);
    }

    static removeListener(listener) {
        LoggingControl.emitter.removeListener('change', listener);
    }

    static addLogListener(listener) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].emitter.addListener('log', listener);
        if (__WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].emitter.listenerCount('log') > 0) {
            __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_CALLBACK = true;
            LoggingControl._notifyChange();
        }
    }

    static removeLogListener(listener) {
        __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].emitter.removeListener('log', listener);
        if (__WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].emitter.listenerCount('log') === 0) {
            __WEBPACK_IMPORTED_MODULE_1__logger_js__["a" /* default */].ENABLE_CALLBACK = false;
            LoggingControl._notifyChange();
        }
    }

}

LoggingControl.emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

/* harmony default export */ __webpack_exports__["a"] = (LoggingControl);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Represents an media sample (audio / video)
class SampleInfo {

    constructor(dts, pts, duration, originalDts, isSync) {
        this.dts = dts;
        this.pts = pts;
        this.duration = duration;
        this.originalDts = originalDts;
        this.isSyncPoint = isSync;
        this.fileposition = null;
    }

}
/* harmony export (immutable) */ __webpack_exports__["c"] = SampleInfo;


// Media Segment concept is defined in Media Source Extensions spec.
// Particularly in ISO BMFF format, an Media Segment contains a moof box followed by a mdat box.
class MediaSegmentInfo {

    constructor() {
        this.beginDts = 0;
        this.endDts = 0;
        this.beginPts = 0;
        this.endPts = 0;
        this.originalBeginDts = 0;
        this.originalEndDts = 0;
        this.syncPoints = [];     // SampleInfo[n], for video IDR frames only
        this.firstSample = null;  // SampleInfo
        this.lastSample = null;   // SampleInfo
    }

    appendSyncPoint(sampleInfo) {  // also called Random Access Point
        sampleInfo.isSyncPoint = true;
        this.syncPoints.push(sampleInfo);
    }

}
/* harmony export (immutable) */ __webpack_exports__["b"] = MediaSegmentInfo;


// Ordered list for recording video IDR frames, sorted by originalDts
class IDRSampleList {

    constructor() {
        this._list = [];
    }

    clear() {
        this._list = [];
    }

    appendArray(syncPoints) {
        let list = this._list;

        if (syncPoints.length === 0) {
            return;
        }

        if (list.length > 0 && syncPoints[0].originalDts < list[list.length - 1].originalDts) {
            this.clear();
        }

        Array.prototype.push.apply(list, syncPoints);
    }

    getLastSyncPointBeforeDts(dts) {
        if (this._list.length == 0) {
            return null;
        }

        let list = this._list;
        let idx = 0;
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        if (dts < list[0].dts) {
            idx = 0;
            lbound = ubound + 1;
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || (dts >= list[mid].dts && dts < list[mid + 1].dts)) {
                idx = mid;
                break;
            } else if (list[mid].dts < dts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return this._list[idx];
    }

}
/* harmony export (immutable) */ __webpack_exports__["d"] = IDRSampleList;


// Data structure for recording information of media segments in single track.
class MediaSegmentInfoList {

    constructor(type) {
        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1;  // cached last insert location
    }

    get type() {
        return this._type;
    }

    get length() {
        return this._list.length;
    }

    isEmpty() {
        return this._list.length === 0;
    }

    clear() {
        this._list = [];
        this._lastAppendLocation = -1;
    }

    _searchNearestSegmentBefore(originalBeginDts) {
        let list = this._list;
        if (list.length === 0) {
            return -2;
        }
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        let idx = 0;

        if (originalBeginDts < list[0].originalBeginDts) {
            idx = -1;
            return idx;
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || (originalBeginDts > list[mid].lastSample.originalDts &&
                                (originalBeginDts < list[mid + 1].originalBeginDts))) {
                idx = mid;
                break;
            } else if (list[mid].originalBeginDts < originalBeginDts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return idx;
    }

    _searchNearestSegmentAfter(originalBeginDts) {
        return this._searchNearestSegmentBefore(originalBeginDts) + 1;
    }

    append(mediaSegmentInfo) {
        let list = this._list;
        let msi = mediaSegmentInfo;
        let lastAppendIdx = this._lastAppendLocation;
        let insertIdx = 0;

        if (lastAppendIdx !== -1 && lastAppendIdx < list.length &&
                                    msi.originalBeginDts >= list[lastAppendIdx].lastSample.originalDts &&
                                    ((lastAppendIdx === list.length - 1) ||
                                    (lastAppendIdx < list.length - 1 &&
                                    msi.originalBeginDts < list[lastAppendIdx + 1].originalBeginDts))) {
            insertIdx = lastAppendIdx + 1;  // use cached location idx
        } else {
            if (list.length > 0) {
                insertIdx = this._searchNearestSegmentBefore(msi.originalBeginDts) + 1;
            }
        }

        this._lastAppendLocation = insertIdx;
        this._list.splice(insertIdx, 0, msi);
    }

    getLastSegmentBefore(originalBeginDts) {
        let idx = this._searchNearestSegmentBefore(originalBeginDts);
        if (idx >= 0) {
            return this._list[idx];
        } else {  // -1
            return null;
        }
    }

    getLastSampleBefore(originalBeginDts) {
        let segment = this.getLastSegmentBefore(originalBeginDts);
        if (segment != null) {
            return segment.lastSample;
        } else {
            return null;
        }
    }

    getLastSyncPointBefore(originalBeginDts) {
        let segmentIdx = this._searchNearestSegmentBefore(originalBeginDts);
        let syncPoints = this._list[segmentIdx].syncPoints;
        while (syncPoints.length === 0 && segmentIdx > 0) {
            segmentIdx--;
            syncPoints = this._list[segmentIdx].syncPoints;
        }
        if (syncPoints.length > 0) {
            return syncPoints[syncPoints.length - 1];
        } else {
            return null;
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MediaSegmentInfoList;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MSEEvents = {
    ERROR: 'error',
    SOURCE_OPEN: 'source_open',
    UPDATE_END: 'update_end',
    BUFFER_FULL: 'buffer_full'
};

/* harmony default export */ __webpack_exports__["a"] = (MSEEvents);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_info_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demux_flv_demuxer_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remux_mp4_remuxer_js__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demux_demux_errors_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__io_io_controller_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__io_loader_js__ = __webpack_require__(100);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */












// Transmuxing (IO, Demuxing, Remuxing) controller, with multipart support
class TransmuxingController {

    constructor(mediaDataSource, config) {
        this.TAG = 'TransmuxingController';
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

        this._config = config;

        // treat single part media as multipart media, which has only one segment
        if (!mediaDataSource.segments) {
            mediaDataSource.segments = [{
                duration: mediaDataSource.duration,
                filesize: mediaDataSource.filesize,
                url: mediaDataSource.url
            }];
        }

        // fill in default IO params if not exists
        if (typeof mediaDataSource.cors !== 'boolean') {
            mediaDataSource.cors = true;
        }
        if (typeof mediaDataSource.withCredentials !== 'boolean') {
            mediaDataSource.withCredentials = false;
        }

        this._mediaDataSource = mediaDataSource;
        this._currentSegmentIndex = 0;
        let totalDuration = 0;

        this._mediaDataSource.segments.forEach((segment) => {
            // timestampBase for each segment, and calculate total duration
            segment.timestampBase = totalDuration;
            totalDuration += segment.duration;
            // params needed by IOController
            segment.cors = mediaDataSource.cors;
            segment.withCredentials = mediaDataSource.withCredentials;
            // referrer policy control, if exist
            if (config.referrerPolicy) {
                segment.referrerPolicy = config.referrerPolicy;
            }
        });

        if (!isNaN(totalDuration) && this._mediaDataSource.duration !== totalDuration) {
            this._mediaDataSource.duration = totalDuration;
        }

        this._mediaInfo = null;
        this._demuxer = null;
        this._remuxer = null;
        this._ioctl = null;

        this._pendingSeekTime = null;
        this._pendingResolveSeekPoint = null;

        this._statisticsReporter = null;
    }

    destroy() {
        this._mediaInfo = null;
        this._mediaDataSource = null;

        if (this._statisticsReporter) {
            this._disableStatisticsReporter();
        }
        if (this._ioctl) {
            this._ioctl.destroy();
            this._ioctl = null;
        }
        if (this._demuxer) {
            this._demuxer.destroy();
            this._demuxer = null;
        }
        if (this._remuxer) {
            this._remuxer.destroy();
            this._remuxer = null;
        }

        this._emitter.removeAllListeners();
        this._emitter = null;
    }

    on(event, listener) {
        this._emitter.addListener(event, listener);
    }

    off(event, listener) {
        this._emitter.removeListener(event, listener);
    }

    start() {
        this._loadSegment(0);
        this._enableStatisticsReporter();
    }

    _loadSegment(segmentIndex, optionalFrom) {
        this._currentSegmentIndex = segmentIndex;
        let dataSource = this._mediaDataSource.segments[segmentIndex];

        let ioctl = this._ioctl = new __WEBPACK_IMPORTED_MODULE_7__io_io_controller_js__["a" /* default */](dataSource, this._config, segmentIndex);
        ioctl.onError = this._onIOException.bind(this);
        ioctl.onSeeked = this._onIOSeeked.bind(this);
        ioctl.onComplete = this._onIOComplete.bind(this);
        ioctl.onRedirect = this._onIORedirect.bind(this);
        ioctl.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this);

        if (optionalFrom) {
            this._demuxer.bindDataSource(this._ioctl);
        } else {
            ioctl.onDataArrival = this._onInitChunkArrival.bind(this);
        }

        ioctl.open(optionalFrom);
    }

    stop() {
        this._internalAbort();
        this._disableStatisticsReporter();
    }

    _internalAbort() {
        if (this._ioctl) {
            this._ioctl.destroy();
            this._ioctl = null;
        }
    }

    pause() {  // take a rest
        if (this._ioctl && this._ioctl.isWorking()) {
            this._ioctl.pause();
            this._disableStatisticsReporter();
        }
    }

    resume() {
        if (this._ioctl && this._ioctl.isPaused()) {
            this._ioctl.resume();
            this._enableStatisticsReporter();
        }
    }

    seek(milliseconds) {
        if (this._mediaInfo == null || !this._mediaInfo.isSeekable()) {
            return;
        }

        let targetSegmentIndex = this._searchSegmentIndexContains(milliseconds);

        if (targetSegmentIndex === this._currentSegmentIndex) {
            // intra-segment seeking
            let segmentInfo = this._mediaInfo.segments[targetSegmentIndex];

            if (segmentInfo == undefined) {
                // current segment loading started, but mediainfo hasn't received yet
                // wait for the metadata loaded, then seek to expected position
                this._pendingSeekTime = milliseconds;
            } else {
                let keyframe = segmentInfo.getNearestKeyframe(milliseconds);
                this._remuxer.seek(keyframe.milliseconds);
                this._ioctl.seek(keyframe.fileposition);
                // Will be resolved in _onRemuxerMediaSegmentArrival()
                this._pendingResolveSeekPoint = keyframe.milliseconds;
            }
        } else {
            // cross-segment seeking
            let targetSegmentInfo = this._mediaInfo.segments[targetSegmentIndex];

            if (targetSegmentInfo == undefined) {
                // target segment hasn't been loaded. We need metadata then seek to expected time
                this._pendingSeekTime = milliseconds;
                this._internalAbort();
                this._remuxer.seek();
                this._remuxer.insertDiscontinuity();
                this._loadSegment(targetSegmentIndex);
                // Here we wait for the metadata loaded, then seek to expected position
            } else {
                // We have target segment's metadata, direct seek to target position
                let keyframe = targetSegmentInfo.getNearestKeyframe(milliseconds);
                this._internalAbort();
                this._remuxer.seek(milliseconds);
                this._remuxer.insertDiscontinuity();
                this._demuxer.resetMediaInfo();
                this._demuxer.timestampBase = this._mediaDataSource.segments[targetSegmentIndex].timestampBase;
                this._loadSegment(targetSegmentIndex, keyframe.fileposition);
                this._pendingResolveSeekPoint = keyframe.milliseconds;
                this._reportSegmentMediaInfo(targetSegmentIndex);
            }
        }

        this._enableStatisticsReporter();
    }

    _searchSegmentIndexContains(milliseconds) {
        let segments = this._mediaDataSource.segments;
        let idx = segments.length - 1;

        for (let i = 0; i < segments.length; i++) {
            if (milliseconds < segments[i].timestampBase) {
                idx = i - 1;
                break;
            }
        }
        return idx;
    }

    _onInitChunkArrival(data, byteStart) {
        let probeData = null;
        let consumed = 0;

        if (byteStart > 0) {
            // IOController seeked immediately after opened, byteStart > 0 callback may received
            this._demuxer.bindDataSource(this._ioctl);
            this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase;

            consumed = this._demuxer.parseChunks(data, byteStart);
        } else if ((probeData = __WEBPACK_IMPORTED_MODULE_4__demux_flv_demuxer_js__["a" /* default */].probe(data)).match) {
            // Always create new FLVDemuxer
            this._demuxer = new __WEBPACK_IMPORTED_MODULE_4__demux_flv_demuxer_js__["a" /* default */](probeData, this._config);

            if (!this._remuxer) {
                this._remuxer = new __WEBPACK_IMPORTED_MODULE_5__remux_mp4_remuxer_js__["a" /* default */](this._config);
            }

            let mds = this._mediaDataSource;
            if (mds.duration != undefined && !isNaN(mds.duration)) {
                this._demuxer.overridedDuration = mds.duration;
            }
            if (typeof mds.hasAudio === 'boolean') {
                this._demuxer.overridedHasAudio = mds.hasAudio;
            }
            if (typeof mds.hasVideo === 'boolean') {
                this._demuxer.overridedHasVideo = mds.hasVideo;
            }

            this._demuxer.timestampBase = mds.segments[this._currentSegmentIndex].timestampBase;

            this._demuxer.onError = this._onDemuxException.bind(this);
            this._demuxer.onMediaInfo = this._onMediaInfo.bind(this);

            this._remuxer.bindDataSource(this._demuxer
                         .bindDataSource(this._ioctl
            ));

            this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this);
            this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);

            consumed = this._demuxer.parseChunks(data, byteStart);
        } else {
            probeData = null;
            __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, 'Non-FLV, Unsupported media type!');
            Promise.resolve().then(() => {
                this._internalAbort();
            });
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].DEMUX_ERROR, __WEBPACK_IMPORTED_MODULE_6__demux_demux_errors_js__["a" /* default */].FORMAT_UNSUPPORTED, 'Non-FLV, Unsupported media type');

            consumed = 0;
        }

        return consumed;
    }

    _onMediaInfo(mediaInfo) {
        if (this._mediaInfo == null) {
            // Store first segment's mediainfo as global mediaInfo
            this._mediaInfo = Object.assign({}, mediaInfo);
            this._mediaInfo.keyframesIndex = null;
            this._mediaInfo.segments = [];
            this._mediaInfo.segmentCount = this._mediaDataSource.segments.length;
            Object.setPrototypeOf(this._mediaInfo, __WEBPACK_IMPORTED_MODULE_3__media_info_js__["a" /* default */].prototype);
        }

        let segmentInfo = Object.assign({}, mediaInfo);
        Object.setPrototypeOf(segmentInfo, __WEBPACK_IMPORTED_MODULE_3__media_info_js__["a" /* default */].prototype);
        this._mediaInfo.segments[this._currentSegmentIndex] = segmentInfo;

        // notify mediaInfo update
        this._reportSegmentMediaInfo(this._currentSegmentIndex);

        if (this._pendingSeekTime != null) {
            Promise.resolve().then(() => {
                let target = this._pendingSeekTime;
                this._pendingSeekTime = null;
                this.seek(target);
            });
        }
    }

    _onIOSeeked() {
        this._remuxer.insertDiscontinuity();
    }

    _onIOComplete(extraData) {
        let segmentIndex = extraData;
        let nextSegmentIndex = segmentIndex + 1;

        if (nextSegmentIndex < this._mediaDataSource.segments.length) {
            this._internalAbort();
            this._loadSegment(nextSegmentIndex);
        } else {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].LOADING_COMPLETE);
            this._disableStatisticsReporter();
        }
    }

    _onIORedirect(redirectedURL) {
        let segmentIndex = this._ioctl.extraData;
        this._mediaDataSource.segments[segmentIndex].redirectedURL = redirectedURL;
    }

    _onIORecoveredEarlyEof() {
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].RECOVERED_EARLY_EOF);
    }

    _onIOException(type, info) {
        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, `IOException: type = ${type}, code = ${info.code}, msg = ${info.msg}`);
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].IO_ERROR, type, info);
        this._disableStatisticsReporter();
    }

    _onDemuxException(type, info) {
        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, `DemuxException: type = ${type}, info = ${info}`);
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].DEMUX_ERROR, type, info);
    }

    _onRemuxerInitSegmentArrival(type, initSegment) {
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].INIT_SEGMENT, type, initSegment);
    }

    _onRemuxerMediaSegmentArrival(type, mediaSegment) {
        if (this._pendingSeekTime != null) {
            // Media segments after new-segment cross-seeking should be dropped.
            return;
        }
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].MEDIA_SEGMENT, type, mediaSegment);

        // Resolve pending seekPoint
        if (this._pendingResolveSeekPoint != null && type === 'video') {
            let syncPoints = mediaSegment.info.syncPoints;
            let seekpoint = this._pendingResolveSeekPoint;
            this._pendingResolveSeekPoint = null;

            // Safari: Pass PTS for recommend_seekpoint
            if (__WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].safari && syncPoints.length > 0 && syncPoints[0].originalDts === seekpoint) {
                seekpoint = syncPoints[0].pts;
            }
            // else: use original DTS (keyframe.milliseconds)

            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].RECOMMEND_SEEKPOINT, seekpoint);
        }
    }

    _enableStatisticsReporter() {
        if (this._statisticsReporter == null) {
            this._statisticsReporter = self.setInterval(
                this._reportStatisticsInfo.bind(this),
            this._config.statisticsInfoReportInterval);
        }
    }

    _disableStatisticsReporter() {
        if (this._statisticsReporter) {
            self.clearInterval(this._statisticsReporter);
            this._statisticsReporter = null;
        }
    }

    _reportSegmentMediaInfo(segmentIndex) {
        let segmentInfo = this._mediaInfo.segments[segmentIndex];
        let exportInfo = Object.assign({}, segmentInfo);

        exportInfo.duration = this._mediaInfo.duration;
        exportInfo.segmentCount = this._mediaInfo.segmentCount;
        delete exportInfo.segments;
        delete exportInfo.keyframesIndex;

        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].MEDIA_INFO, exportInfo);
    }

    _reportStatisticsInfo() {
        let info = {};

        info.url = this._ioctl.currentURL;
        info.hasRedirect = this._ioctl.hasRedirect;
        if (info.hasRedirect) {
            info.redirectedURL = this._ioctl.currentRedirectedURL;
        }

        info.speed = this._ioctl.currentSpeed;
        info.loaderType = this._ioctl.loaderType;
        info.currentSegmentIndex = this._currentSegmentIndex;
        info.totalSegmentCount = this._mediaDataSource.segments.length;

        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_8__transmuxing_events_js__["a" /* default */].STATISTICS_INFO, info);
    }

}

/* harmony default export */ __webpack_exports__["a"] = (TransmuxingController);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speed_sampler_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fetch_stream_loader_js__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xhr_moz_chunked_loader_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__xhr_msstream_loader_js__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__xhr_range_loader_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__websocket_loader_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__range_seek_handler_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__param_seek_handler_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */













/**
 * DataSource: {
 *     url: string,
 *     filesize: number,
 *     cors: boolean,
 *     withCredentials: boolean
 * }
 * 
 */

// Manage IO Loaders
class IOController {

    constructor(dataSource, config, extraData) {
        this.TAG = 'IOController';

        this._config = config;
        this._extraData = extraData;

        this._stashInitialSize = 1024 * 384;  // default initial size: 384KB
        if (config.stashInitialSize != undefined && config.stashInitialSize > 0) {
            // apply from config
            this._stashInitialSize = config.stashInitialSize;
        }

        this._stashUsed = 0;
        this._stashSize = this._stashInitialSize;
        this._bufferSize = 1024 * 1024 * 3;  // initial size: 3MB
        this._stashBuffer = new ArrayBuffer(this._bufferSize);
        this._stashByteStart = 0;
        this._enableStash = true;
        if (config.enableStashBuffer === false) {
            this._enableStash = false;
        }

        this._loader = null;
        this._loaderClass = null;
        this._seekHandler = null;

        this._dataSource = dataSource;
        this._isWebSocketURL = /wss?:\/\/(.+?)/.test(dataSource.url);
        this._refTotalLength = dataSource.filesize ? dataSource.filesize : null;
        this._totalLength = this._refTotalLength;
        this._fullRequestFlag = false;
        this._currentRange = null;
        this._redirectedURL = null;

        this._speedNormalized = 0;
        this._speedSampler = new __WEBPACK_IMPORTED_MODULE_1__speed_sampler_js__["a" /* default */]();
        this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096];

        this._isEarlyEofReconnecting = false;

        this._paused = false;
        this._resumeFrom = 0;

        this._onDataArrival = null;
        this._onSeeked = null;
        this._onError = null;
        this._onComplete = null;
        this._onRedirect = null;
        this._onRecoveredEarlyEof = null;

        this._selectSeekHandler();
        this._selectLoader();
        this._createLoader();
    }

    destroy() {
        if (this._loader.isWorking()) {
            this._loader.abort();
        }
        this._loader.destroy();
        this._loader = null;
        this._loaderClass = null;
        this._dataSource = null;
        this._stashBuffer = null;
        this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0;
        this._currentRange = null;
        this._speedSampler = null;

        this._isEarlyEofReconnecting = false;

        this._onDataArrival = null;
        this._onSeeked = null;
        this._onError = null;
        this._onComplete = null;
        this._onRedirect = null;
        this._onRecoveredEarlyEof = null;

        this._extraData = null;
    }

    isWorking() {
        return this._loader && this._loader.isWorking() && !this._paused;
    }

    isPaused() {
        return this._paused;
    }

    get status() {
        return this._loader.status;
    }

    get extraData() {
        return this._extraData;
    }

    set extraData(data) {
        this._extraData = data;
    }

    // prototype: function onDataArrival(chunks: ArrayBuffer, byteStart: number): number
    get onDataArrival() {
        return this._onDataArrival;
    }

    set onDataArrival(callback) {
        this._onDataArrival = callback;
    }

    get onSeeked() {
        return this._onSeeked;
    }

    set onSeeked(callback) {
        this._onSeeked = callback;
    }

    // prototype: function onError(type: number, info: {code: number, msg: string}): void
    get onError() {
        return this._onError;
    }

    set onError(callback) {
        this._onError = callback;
    }

    get onComplete() {
        return this._onComplete;
    }

    set onComplete(callback) {
        this._onComplete = callback;
    }

    get onRedirect() {
        return this._onRedirect;
    }

    set onRedirect(callback) {
        this._onRedirect = callback;
    }

    get onRecoveredEarlyEof() {
        return this._onRecoveredEarlyEof;
    }

    set onRecoveredEarlyEof(callback) {
        this._onRecoveredEarlyEof = callback;
    }

    get currentURL() {
        return this._dataSource.url;
    }

    get hasRedirect() {
        return (this._redirectedURL != null || this._dataSource.redirectedURL != undefined);
    }

    get currentRedirectedURL() {
        return this._redirectedURL || this._dataSource.redirectedURL;
    }

    // in KB/s
    get currentSpeed() {
        if (this._loaderClass === __WEBPACK_IMPORTED_MODULE_6__xhr_range_loader_js__["a" /* default */]) {
            // SpeedSampler is inaccuracy if loader is RangeLoader
            return this._loader.currentSpeed;
        }
        return this._speedSampler.lastSecondKBps;
    }

    get loaderType() {
        return this._loader.type;
    }

    _selectSeekHandler() {
        let config = this._config;

        if (config.seekType === 'range') {
            this._seekHandler = new __WEBPACK_IMPORTED_MODULE_8__range_seek_handler_js__["a" /* default */](this._config.rangeLoadZeroStart);
        } else if (config.seekType === 'param') {
            let paramStart = config.seekParamStart || 'bstart';
            let paramEnd = config.seekParamEnd || 'bend';

            this._seekHandler = new __WEBPACK_IMPORTED_MODULE_9__param_seek_handler_js__["a" /* default */](paramStart, paramEnd);
        } else if (config.seekType === 'custom') {
            if (typeof config.customSeekHandler !== 'function') {
                throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["a" /* InvalidArgumentException */]('Custom seekType specified in config but invalid customSeekHandler!');
            }
            this._seekHandler = new config.customSeekHandler();
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["a" /* InvalidArgumentException */](`Invalid seekType in config: ${config.seekType}`);
        }
    }

    _selectLoader() {
        if (this._isWebSocketURL) {
            this._loaderClass = __WEBPACK_IMPORTED_MODULE_7__websocket_loader_js__["a" /* default */];
        } else if (__WEBPACK_IMPORTED_MODULE_3__fetch_stream_loader_js__["a" /* default */].isSupported()) {
            this._loaderClass = __WEBPACK_IMPORTED_MODULE_3__fetch_stream_loader_js__["a" /* default */];
        } else if (__WEBPACK_IMPORTED_MODULE_4__xhr_moz_chunked_loader_js__["a" /* default */].isSupported()) {
            this._loaderClass = __WEBPACK_IMPORTED_MODULE_4__xhr_moz_chunked_loader_js__["a" /* default */];
        } else if (__WEBPACK_IMPORTED_MODULE_6__xhr_range_loader_js__["a" /* default */].isSupported()) {
            this._loaderClass = __WEBPACK_IMPORTED_MODULE_6__xhr_range_loader_js__["a" /* default */];
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["c" /* RuntimeException */]('Your browser doesn\'t support xhr with arraybuffer responseType!');
        }
    }

    _createLoader() {
        this._loader = new this._loaderClass(this._seekHandler, this._config);
        if (this._loader.needStashBuffer === false) {
            this._enableStash = false;
        }
        this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this);
        this._loader.onURLRedirect = this._onURLRedirect.bind(this);
        this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this);
        this._loader.onComplete = this._onLoaderComplete.bind(this);
        this._loader.onError = this._onLoaderError.bind(this);
    }

    open(optionalFrom) {
        this._currentRange = {from: 0, to: -1};
        if (optionalFrom) {
            this._currentRange.from = optionalFrom;
        }

        this._speedSampler.reset();
        if (!optionalFrom) {
            this._fullRequestFlag = true;
        }

        this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
    }

    abort() {
        this._loader.abort();

        if (this._paused) {
            this._paused = false;
            this._resumeFrom = 0;
        }
    }

    pause() {
        if (this.isWorking()) {
            this._loader.abort();

            if (this._stashUsed !== 0) {
                this._resumeFrom = this._stashByteStart;
                this._currentRange.to = this._stashByteStart - 1;
            } else {
                this._resumeFrom = this._currentRange.to + 1;
            }
            this._stashUsed = 0;
            this._stashByteStart = 0;
            this._paused = true;
        }
    }

    resume() {
        if (this._paused) {
            this._paused = false;
            let bytes = this._resumeFrom;
            this._resumeFrom = 0;
            this._internalSeek(bytes, true);
        }
    }

    seek(bytes) {
        this._paused = false;
        this._stashUsed = 0;
        this._stashByteStart = 0;
        this._internalSeek(bytes, true);
    }

    /**
     * When seeking request is from media seeking, unconsumed stash data should be dropped
     * However, stash data shouldn't be dropped if seeking requested from http reconnection
     *
     * @dropUnconsumed: Ignore and discard all unconsumed data in stash buffer
     */
    _internalSeek(bytes, dropUnconsumed) {
        if (this._loader.isWorking()) {
            this._loader.abort();
        }

        // dispatch & flush stash buffer before seek
        this._flushStashBuffer(dropUnconsumed);

        this._loader.destroy();
        this._loader = null;

        let requestRange = {from: bytes, to: -1};
        this._currentRange = {from: requestRange.from, to: -1};

        this._speedSampler.reset();
        this._stashSize = this._stashInitialSize;
        this._createLoader();
        this._loader.open(this._dataSource, requestRange);

        if (this._onSeeked) {
            this._onSeeked();
        }
    }

    updateUrl(url) {
        if (!url || typeof url !== 'string' || url.length === 0) {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["a" /* InvalidArgumentException */]('Url must be a non-empty string!');
        }

        this._dataSource.url = url;

        // TODO: replace with new url
    }

    _expandBuffer(expectedBytes) {
        let bufferNewSize = this._stashSize;
        while (bufferNewSize + 1024 * 1024 * 1 < expectedBytes) {
            bufferNewSize *= 2;
        }

        bufferNewSize += 1024 * 1024 * 1;  // bufferSize = stashSize + 1MB
        if (bufferNewSize === this._bufferSize) {
            return;
        }

        let newBuffer = new ArrayBuffer(bufferNewSize);

        if (this._stashUsed > 0) {  // copy existing data into new buffer
            let stashOldArray = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
            let stashNewArray = new Uint8Array(newBuffer, 0, bufferNewSize);
            stashNewArray.set(stashOldArray, 0);
        }

        this._stashBuffer = newBuffer;
        this._bufferSize = bufferNewSize;
    }

    _normalizeSpeed(input) {
        let list = this._speedNormalizeList;
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        if (input < list[0]) {
            return list[0];
        }

        // binary search
        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || (input >= list[mid] && input < list[mid + 1])) {
                return list[mid];
            } else if (list[mid] < input) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
    }

    _adjustStashSize(normalized) {
        let stashSizeKB = 0;

        if (this._config.isLive) {
            // live stream: always use single normalized speed for size of stashSizeKB
            stashSizeKB = normalized;
        } else {
            if (normalized < 512) {
                stashSizeKB = normalized;
            } else if (normalized >= 512 && normalized <= 1024) {
                stashSizeKB = Math.floor(normalized * 1.5);
            } else {
                stashSizeKB = normalized * 2;
            }
        }

        if (stashSizeKB > 8192) {
            stashSizeKB = 8192;
        }

        let bufferSize = stashSizeKB * 1024 + 1024 * 1024 * 1;  // stashSize + 1MB
        if (this._bufferSize < bufferSize) {
            this._expandBuffer(bufferSize);
        }
        this._stashSize = stashSizeKB * 1024;
    }

    _dispatchChunks(chunks, byteStart) {
        this._currentRange.to = byteStart + chunks.byteLength - 1;
        return this._onDataArrival(chunks, byteStart);
    }

    _onURLRedirect(redirectedURL) {
        this._redirectedURL = redirectedURL;
        if (this._onRedirect) {
            this._onRedirect(redirectedURL);
        }
    }

    _onContentLengthKnown(contentLength) {
        if (contentLength && this._fullRequestFlag) {
            this._totalLength = contentLength;
            this._fullRequestFlag = false;
        }
    }

    _onLoaderChunkArrival(chunk, byteStart, receivedLength) {
        if (!this._onDataArrival) {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["d" /* IllegalStateException */]('IOController: No existing consumer (onDataArrival) callback!');
        }
        if (this._paused) {
            return;
        }
        if (this._isEarlyEofReconnecting) {
            // Auto-reconnect for EarlyEof succeed, notify to upper-layer by callback
            this._isEarlyEofReconnecting = false;
            if (this._onRecoveredEarlyEof) {
                this._onRecoveredEarlyEof();
            }
        }

        this._speedSampler.addBytes(chunk.byteLength);

        // adjust stash buffer size according to network speed dynamically
        let KBps = this._speedSampler.lastSecondKBps;
        if (KBps !== 0) {
            let normalized = this._normalizeSpeed(KBps);
            if (this._speedNormalized !== normalized) {
                this._speedNormalized = normalized;
                this._adjustStashSize(normalized);
            }
        }

        if (!this._enableStash) {  // disable stash
            if (this._stashUsed === 0) {
                // dispatch chunk directly to consumer;
                // check ret value (consumed bytes) and stash unconsumed to stashBuffer
                let consumed = this._dispatchChunks(chunk, byteStart);
                if (consumed < chunk.byteLength) {  // unconsumed data remain.
                    let remain = chunk.byteLength - consumed;
                    if (remain > this._bufferSize) {
                        this._expandBuffer(remain);
                    }
                    let stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                    stashArray.set(new Uint8Array(chunk, consumed), 0);
                    this._stashUsed += remain;
                    this._stashByteStart = byteStart + consumed;
                }
            } else {
                // else: Merge chunk into stashBuffer, and dispatch stashBuffer to consumer.
                if (this._stashUsed + chunk.byteLength > this._bufferSize) {
                    this._expandBuffer(this._stashUsed + chunk.byteLength);
                }
                let stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                stashArray.set(new Uint8Array(chunk), this._stashUsed);
                this._stashUsed += chunk.byteLength;
                let consumed = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
                if (consumed < this._stashUsed && consumed > 0) {  // unconsumed data remain
                    let remainArray = new Uint8Array(this._stashBuffer, consumed);
                    stashArray.set(remainArray, 0);
                }
                this._stashUsed -= consumed;
                this._stashByteStart += consumed;
            }
        } else {  // enable stash
            if (this._stashUsed === 0 && this._stashByteStart === 0) {  // seeked? or init chunk?
                // This is the first chunk after seek action
                this._stashByteStart = byteStart;
            }
            if (this._stashUsed + chunk.byteLength <= this._stashSize) {
                // just stash
                let stashArray = new Uint8Array(this._stashBuffer, 0, this._stashSize);
                stashArray.set(new Uint8Array(chunk), this._stashUsed);
                this._stashUsed += chunk.byteLength;
            } else {  // stashUsed + chunkSize > stashSize, size limit exceeded
                let stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                if (this._stashUsed > 0) {  // There're stash datas in buffer
                    // dispatch the whole stashBuffer, and stash remain data
                    // then append chunk to stashBuffer (stash)
                    let buffer = this._stashBuffer.slice(0, this._stashUsed);
                    let consumed = this._dispatchChunks(buffer, this._stashByteStart);
                    if (consumed < buffer.byteLength) {
                        if (consumed > 0) {
                            let remainArray = new Uint8Array(buffer, consumed);
                            stashArray.set(remainArray, 0);
                            this._stashUsed = remainArray.byteLength;
                            this._stashByteStart += consumed;
                        }
                    } else {
                        this._stashUsed = 0;
                        this._stashByteStart += consumed;
                    }
                    if (this._stashUsed + chunk.byteLength > this._bufferSize) {
                        this._expandBuffer(this._stashUsed + chunk.byteLength);
                        stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                    }
                    stashArray.set(new Uint8Array(chunk), this._stashUsed);
                    this._stashUsed += chunk.byteLength;
                } else {  // stash buffer empty, but chunkSize > stashSize (oh, holy shit)
                    // dispatch chunk directly and stash remain data
                    let consumed = this._dispatchChunks(chunk, byteStart);
                    if (consumed < chunk.byteLength) {
                        let remain = chunk.byteLength - consumed;
                        if (remain > this._bufferSize) {
                            this._expandBuffer(remain);
                            stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                        }
                        stashArray.set(new Uint8Array(chunk, consumed), 0);
                        this._stashUsed += remain;
                        this._stashByteStart = byteStart + consumed;
                    }
                }
            }
        }
    }

    _flushStashBuffer(dropUnconsumed) {
        if (this._stashUsed > 0) {
            let buffer = this._stashBuffer.slice(0, this._stashUsed);
            let consumed = this._dispatchChunks(buffer, this._stashByteStart);
            let remain = buffer.byteLength - consumed;

            if (consumed < buffer.byteLength) {
                if (dropUnconsumed) {
                    __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, `${remain} bytes unconsumed data remain when flush buffer, dropped`);
                } else {
                    if (consumed > 0) {
                        let stashArray = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                        let remainArray = new Uint8Array(buffer, consumed);
                        stashArray.set(remainArray, 0);
                        this._stashUsed = remainArray.byteLength;
                        this._stashByteStart += consumed;
                    }
                    return 0;
                }
            }
            this._stashUsed = 0;
            this._stashByteStart = 0;
            return remain;
        }
        return 0;
    }

    _onLoaderComplete(from, to) {
        // Force-flush stash buffer, and drop unconsumed data
        this._flushStashBuffer(true);

        if (this._onComplete) {
            this._onComplete(this._extraData);
        }
    }

    _onLoaderError(type, data) {
        __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].e(this.TAG, `Loader error, code = ${data.code}, msg = ${data.msg}`);

        this._flushStashBuffer(false);

        if (this._isEarlyEofReconnecting) {
            // Auto-reconnect for EarlyEof failed, throw UnrecoverableEarlyEof error to upper-layer
            this._isEarlyEofReconnecting = false;
            type = __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].UNRECOVERABLE_EARLY_EOF;
        }

        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].EARLY_EOF: {
                if (!this._config.isLive) {
                    // Do internal http reconnect if not live stream
                    if (this._totalLength) {
                        let nextFrom = this._currentRange.to + 1;
                        if (nextFrom < this._totalLength) {
                            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Connection lost, trying reconnect...');
                            this._isEarlyEofReconnecting = true;
                            this._internalSeek(nextFrom, false);
                        }
                        return;
                    }
                    // else: We don't know totalLength, throw UnrecoverableEarlyEof
                }
                // live stream: throw UnrecoverableEarlyEof error to upper-layer
                type = __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].UNRECOVERABLE_EARLY_EOF;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].UNRECOVERABLE_EARLY_EOF:
            case __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].CONNECTING_TIMEOUT:
            case __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].HTTP_STATUS_CODE_INVALID:
            case __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].EXCEPTION:
                break;
        }

        if (this._onError) {
            this._onError(type, data);
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["c" /* RuntimeException */]('IOException: ' + data.msg);
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (IOController);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Utility class to calculate realtime network I/O speed
class SpeedSampler {

    constructor() {
        // milliseconds
        this._firstCheckpoint = 0;
        this._lastCheckpoint = 0;
        this._intervalBytes = 0;
        this._totalBytes = 0;
        this._lastSecondBytes = 0;

        // compatibility detection
        if (self.performance && self.performance.now) {
            this._now = self.performance.now.bind(self.performance);
        } else {
            this._now = Date.now;
        }
    }

    reset() {
        this._firstCheckpoint = this._lastCheckpoint = 0;
        this._totalBytes = this._intervalBytes = 0;
        this._lastSecondBytes = 0;
    }

    addBytes(bytes) {
        if (this._firstCheckpoint === 0) {
            this._firstCheckpoint = this._now();
            this._lastCheckpoint = this._firstCheckpoint;
            this._intervalBytes += bytes;
            this._totalBytes += bytes;
        } else if (this._now() - this._lastCheckpoint < 1000) {
            this._intervalBytes += bytes;
            this._totalBytes += bytes;
        } else {  // duration >= 1000
            this._lastSecondBytes = this._intervalBytes;
            this._intervalBytes = bytes;
            this._totalBytes += bytes;
            this._lastCheckpoint = this._now();
        }
    }

    get currentKBps() {
        this.addBytes(0);

        let durationSeconds = (this._now() - this._lastCheckpoint) / 1000;
        if (durationSeconds == 0) durationSeconds = 1;
        return (this._intervalBytes / durationSeconds) / 1024;
    }

    get lastSecondKBps() {
        this.addBytes(0);

        if (this._lastSecondBytes !== 0) {
            return this._lastSecondBytes / 1024;
        } else {  // lastSecondBytes === 0
            if (this._now() - this._lastCheckpoint >= 500) {
                // if time interval since last checkpoint has exceeded 500ms
                // the speed is nearly accurate
                return this.currentKBps;
            } else {
                // We don't know
                return 0;
            }
        }
    }

    get averageKBps() {
        let durationSeconds = (this._now() - this._firstCheckpoint) / 1000;
        return (this._totalBytes / durationSeconds) / 1024;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (SpeedSampler);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io_loader_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demux_demux_errors_js__ = __webpack_require__(106);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




const ErrorTypes = {
    NETWORK_ERROR: 'NetworkError',
    MEDIA_ERROR: 'MediaError',
    OTHER_ERROR: 'OtherError'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ErrorTypes;


const ErrorDetails = {
    NETWORK_EXCEPTION: __WEBPACK_IMPORTED_MODULE_0__io_loader_js__["a" /* LoaderErrors */].EXCEPTION,
    NETWORK_STATUS_CODE_INVALID: __WEBPACK_IMPORTED_MODULE_0__io_loader_js__["a" /* LoaderErrors */].HTTP_STATUS_CODE_INVALID,
    NETWORK_TIMEOUT: __WEBPACK_IMPORTED_MODULE_0__io_loader_js__["a" /* LoaderErrors */].CONNECTING_TIMEOUT,
    NETWORK_UNRECOVERABLE_EARLY_EOF: __WEBPACK_IMPORTED_MODULE_0__io_loader_js__["a" /* LoaderErrors */].UNRECOVERABLE_EARLY_EOF,

    MEDIA_MSE_ERROR: 'MediaMSEError',

    MEDIA_FORMAT_ERROR: __WEBPACK_IMPORTED_MODULE_1__demux_demux_errors_js__["a" /* default */].FORMAT_ERROR,
    MEDIA_FORMAT_UNSUPPORTED: __WEBPACK_IMPORTED_MODULE_1__demux_demux_errors_js__["a" /* default */].FORMAT_UNSUPPORTED,
    MEDIA_CODEC_UNSUPPORTED: __WEBPACK_IMPORTED_MODULE_1__demux_demux_errors_js__["a" /* default */].CODEC_UNSUPPORTED
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ErrorDetails;


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class Polyfill {

    static install() {
        // ES6 Object.setPrototypeOf
        Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
            obj.__proto__ = proto;
            return obj;
        };

        // ES6 Object.assign
        Object.assign = Object.assign || function (target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            let output = Object(target);
            for (let i = 1; i < arguments.length; i++) {
                let source = arguments[i];
                if (source !== undefined && source !== null) {
                    for (let key in source) {
                        if (source.hasOwnProperty(key)) {
                            output[key] = source[key];
                        }
                    }
                }
            }
            return output;
        };

        // ES6 Promise (missing support in IE11)
        if (typeof self.Promise !== 'function') {
            __webpack_require__(135).polyfill();
        }
    }

}

Polyfill.install();

/* harmony default export */ __webpack_exports__["a"] = (Polyfill);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flv_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_v_axios__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      video: '',
      videoState: true,
      loading: false,
      loadLayer: false,
      ended: true,
      flvPlayer: '',
      down: true,
      iconState: false,
      timer: null,
      url: ''
    };
  },
  created: function created() {
    var that = this;
    that.flv = __WEBPACK_IMPORTED_MODULE_0_flv_js__["a" /* default */];
    that.axios = __WEBPACK_IMPORTED_MODULE_1__utils_v_axios__["a" /* default */];
  },
  mounted: function mounted() {
    this.getUrl();
    this.canplay();
  },

  props: {
    aid: {
      default: ''
    },
    pic: {
      default: ''
    }
  },
  methods: {
    getUrl: function getUrl() {
      var that = this;
    },
    canplay: function canplay() {
      var that = this;
      that.axios.get('https://api.imjad.cn/bilibili/v2/?aid=' + that.aid + '&page=1&quality=2').then(function (res) {
        that.url = res.data.durl[0].url;
        that.video = that.$refs.myvideo;
        if (that.flv.isSupported()) {
          that.flvPlayer = that.flv.createPlayer({
            type: 'mp4',
            url: that.url
          });
          that.flvPlayer.attachMediaElement(that.video);
          that.flvPlayer.load();
        }
        that.video.addEventListener('canplay', function () {
          //加载视频完成
          that.loading = true;
        });
        that.video.addEventListener('ended', function () {
          //加载视频完成
          that.ended = false;
          that.videoState = true;
        });
        that.video.addEventListener('timeupdate', function () {//播放过程中

        });
        that.video.addEventListener('pause', function () {

          that.iconState = false;
          that.timer = null;
        });
      });
    },
    play: function play(type) {
      var that = this;
      switch (type) {
        case 'start':
          that.iconState = true;
          break;
      }

      that.flvPlayer.play();
      that.videoState = false;
      that.loadLayer = true;
      that.down = false;
      if (!that.ended) {
        that.ended = true;
      }
    },
    pause: function pause() {
      var that = this;
      that.flvPlayer.pause();
      that.videoState = true;
      that.timer = null;
      that.iconState = true;
    },
    controllerState: function controllerState() {
      var that = this;
      that.iconState = !that.iconState;
      that.timer = null;
      if (!that.iconState) {
        that.timer = setTimeout(function () {
          that.iconState = true;
          that.timer = null;
        }, 3000);
      }
    }
  }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  props: {},
  created: function created() {
    var that = this;
  },
  mounted: function mounted() {},

  methods: {} });

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            infoHei: ''
        };
    },

    props: {
        info: {
            required: true
        }
    },
    created: function created() {
        var that = this;
    },
    mounted: function mounted() {
        this.getHeight();
    },

    methods: {
        getHeight: function getHeight() {
            var that = this;
            setTimeout(function () {
                console.log(that.$refs.infoHeight.offsetHeight);
            }, 500);
        }
    } });

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_v_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_header_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_main_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_video_video_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_video_video_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_video_video_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_videoArea_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_videoArea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_video_videoArea_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_video_videoInfo_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_video_videoInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_video_videoInfo_vue__);
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      videoData: [],
      aid: '',
      info: '',
      pic: ''
    };
  },
  created: function created() {
    var that = this;
    that.axios = __WEBPACK_IMPORTED_MODULE_0__utils_v_axios__["a" /* default */];
    that.load();
  },
  mounted: function mounted() {},

  methods: {
    load: function load() {
      var that = this;
      that.aid = that.$route.params.aid;
      that.axios.get('https://api.imjad.cn/bilibili/v2/?aid=' + that.aid).then(function (res) {
        window.document.title = res.data.data.title;
        that.videoData = res.data.data;
        that.pic = res.data.data.pic;
        that.info = {
          title: that.videoData.title,
          tname: that.videoData.tname,
          view: that.videoData.stat.view,
          danmaku: that.videoData.stat.danmaku,
          aid: that.videoData.aid,
          desc: that.videoData.desc
        };
      });
    }
  },
  components: { headBar: __WEBPACK_IMPORTED_MODULE_1__components_main_header_vue___default.a, videoPro: __WEBPACK_IMPORTED_MODULE_2__components_video_video_vue___default.a, videoArea: __WEBPACK_IMPORTED_MODULE_3__components_video_videoArea_vue___default.a, videoInfo: __WEBPACK_IMPORTED_MODULE_4__components_video_videoInfo_vue___default.a }
});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(95)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"video.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(95)(true);
// imports


// module
exports.push([module.i, ".index__operateArea__src-videoPage-operateArea-[data-v-2e900cb0]{position:relative;width:100%;background-color:#fff;border-bottom:.02133rem solid #ccc}.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea-[data-v-2e900cb0]{position:relative;width:33.33%;height:2.048rem;float:left}.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea-[data-v-2e900cb0]{position:absolute;width:2.73067rem;height:50%;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}.index__operateArea__src-videoPage-operateArea- .index__clear__src-videoPage-operateArea-[data-v-2e900cb0],.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- .index__clear__src-videoPage-operateArea-[data-v-2e900cb0]{clear:both}.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- p[data-v-2e900cb0]{position:relative;float:right;line-height:1.024rem;color:#999;font-size:.55467rem;text-align:right}.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- .index__icon__src-videoPage-operateArea-[data-v-2e900cb0]{position:relative;float:left;width:37.5%}.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- .index__icon__src-videoPage-operateArea- img[data-v-2e900cb0]{display:block;width:100%}", "", {"version":3,"sources":["/Users/yanglei/Desktop/mine/vue-bilibili/vue-bilibili/src/components/video/videoArea.vue"],"names":[],"mappings":"AACA,iEACE,kBAAmB,AACnB,WAAY,AACZ,sBAAuB,AACvB,kCAAoC,CACrC,AACD,gHACE,kBAAmB,AACnB,aAAc,AACd,gBAAiB,AACjB,UAAY,CACb,AACD,8JACE,kBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,QAAS,AACT,SAAU,AACV,+BAAiC,AACjC,sCAAyC,CAC1C,AACD,mTACE,UAAY,CACb,AACD,gKACE,kBAAmB,AACnB,YAAa,AACb,qBAAsB,AACtB,WAAY,AACZ,oBAAqB,AACrB,gBAAkB,CACnB,AACD,uMACE,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,2MACE,cAAe,AACf,UAAY,CACb","file":"videoArea.vue","sourcesContent":["\n.index__operateArea__src-videoPage-operateArea-[data-v-2e900cb0] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: .02133rem solid #ccc;\n}\n.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea-[data-v-2e900cb0] {\n  position: relative;\n  width: 33.33%;\n  height: 2.048rem;\n  float: left;\n}\n.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea-[data-v-2e900cb0] {\n  position: absolute;\n  width: 2.73067rem;\n  height: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n.index__operateArea__src-videoPage-operateArea- .index__clear__src-videoPage-operateArea-[data-v-2e900cb0], .index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- .index__clear__src-videoPage-operateArea-[data-v-2e900cb0] {\n  clear: both;\n}\n.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- p[data-v-2e900cb0] {\n  position: relative;\n  float: right;\n  line-height: 1.024rem;\n  color: #999;\n  font-size: .55467rem;\n  text-align: right;\n}\n.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- .index__icon__src-videoPage-operateArea-[data-v-2e900cb0] {\n  position: relative;\n  float: left;\n  width: 37.5%;\n}\n.index__operateArea__src-videoPage-operateArea- .index__operateBtn__src-videoPage-operateArea- .index__showField__src-videoPage-operateArea- .index__icon__src-videoPage-operateArea- img[data-v-2e900cb0] {\n  display: block;\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(95)(true);
// imports


// module
exports.push([module.i, ".index__videoInfo__src-videoPage-videoInfo-[data-v-56a29549]{padding:.832rem .512rem 0;border-bottom:.02133rem solid #ccc;background:#f3f3f3}.index__videoInfo__src-videoPage-videoInfo- .index__title__src-videoPage-videoInfo-[data-v-56a29549]{margin:0 0 .49067rem;line-height:1.024rem;font-size:.64rem;font-weight:500;color:#212121}.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__clickIcon__src-videoPage-videoInfo-[data-v-56a29549],.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__dmIcon__src-videoPage-videoInfo-[data-v-56a29549]{display:inline-block;margin-right:.21333rem;vertical-align:middle;width:.704rem;height:.53333rem;overflow:hidden;background:url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;background-size:15.36rem 46.72rem}.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__clickIcon__src-videoPage-videoInfo-[data-v-56a29549]{background-position:-6.37867rem -3.2rem}.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__clickTxt__src-videoPage-videoInfo-[data-v-56a29549],.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__dmTxt__src-videoPage-videoInfo-[data-v-56a29549]{display:inline-block;height:.53333rem;width:2.13333rem;vertical-align:middle;line-height:.53333rem;font-size:.512rem}.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo-[data-v-56a29549]{position:relative;margin-bottom:.46933rem;color:#757575}.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__dmIcon__src-videoPage-videoInfo-[data-v-56a29549]{background-position:-5.12rem -3.2rem}.index__videoInfo__src-videoPage-videoInfo- .index__descWrap__src-videoPage-videoInfo-[data-v-56a29549]{height:.85333rem;margin-bottom:1.024rem;overflow:hidden;transition:all .5s}.index__videoInfo__src-videoPage-videoInfo- .index__position__src-videoPage-videoInfo-[data-v-56a29549]{margin-top:.768rem;font-size:.512rem;color:#999}.index__videoInfo__src-videoPage-videoInfo- .index__desc__src-videoPage-videoInfo-[data-v-56a29549]{line-height:.85333rem;color:#757575;font-size:.512rem;word-break:break-all}.index__videoInfo__src-videoPage-videoInfo- .index__position__src-videoPage-videoInfo- .index__crumb__src-videoPage-videoInfo-[data-v-56a29549]{float:left;color:#fb7299;font-size:.512rem;margin-right:.21333rem}.index__videoInfo__src-videoPage-videoInfo- .index__position__src-videoPage-videoInfo- .index__crumb__src-videoPage-videoInfo-[data-v-56a29549]:after{display:inline-block;margin-left:.21333rem;font-size:.512rem;content:\">\";color:#ccc}.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__foldBtn__src-videoPage-videoInfo-[data-v-56a29549]{position:absolute;right:0;top:0;bottom:0;margin:auto 0;width:.74667rem;height:.53333rem;background:url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;background-size:15.36rem 46.72rem;background-position:-5.29067rem -6.10133rem;transition:all .1s}.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__foldBtn__src-videoPage-videoInfo-.index__on__src-videoPage-videoInfo-[data-v-56a29549]{background-position:-5.29067rem -7.36rem}", "", {"version":3,"sources":["/Users/yanglei/Desktop/mine/vue-bilibili/vue-bilibili/src/components/video/videoInfo.vue"],"names":[],"mappings":"AACA,6DACE,0BAA2B,AAC3B,mCAAoC,AACpC,kBAAoB,CACrB,AACD,qGACE,qBAAsB,AACtB,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAe,CAChB,AAMD,6RACE,qBAAsB,AACtB,uBAAwB,AACxB,sBAAuB,AACvB,cAAe,AACf,iBAAkB,AAClB,gBAAiB,AACjB,yEAA0E,AAC1E,iCAAmC,CACpC,AACD,gJACE,uCAAyC,CAC1C,AACD,2RACE,qBAAsB,AACtB,iBAAkB,AAClB,iBAAkB,AAClB,sBAAuB,AACvB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,oGACE,kBAAmB,AACnB,wBAAyB,AACzB,aAAe,CAChB,AACD,6IACE,oCAAsC,CACvC,AACD,wGACE,iBAAkB,AAClB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AAOD,wGACE,mBAAoB,AACpB,kBAAmB,AACnB,UAAY,CACb,AACD,oGACE,sBAAuB,AACvB,cAAe,AACf,kBAAmB,AACnB,oBAAsB,CACvB,AACD,gJACE,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,sBAAwB,CACzB,AACD,sJACE,qBAAsB,AACtB,sBAAuB,AACvB,kBAAmB,AACnB,YAAa,AACb,UAAY,CACb,AACD,8IACE,kBAAmB,AACnB,QAAS,AACT,MAAO,AACP,SAAU,AACV,cAAe,AACf,gBAAiB,AACjB,iBAAkB,AAClB,yEAA0E,AAC1E,kCAAmC,AACnC,4CAA6C,AAC7C,kBAAoB,CACrB,AACD,kLACE,wCAA0C,CAC3C","file":"videoInfo.vue","sourcesContent":["\n.index__videoInfo__src-videoPage-videoInfo-[data-v-56a29549] {\n  padding: .832rem .512rem 0;\n  border-bottom: .02133rem solid #ccc;\n  background: #f3f3f3;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__title__src-videoPage-videoInfo-[data-v-56a29549] {\n  margin: 0 0 .49067rem;\n  line-height: 1.024rem;\n  font-size: .64rem;\n  font-weight: 500;\n  color: #212121;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo-[data-v-56a29549] {\n  position: relative;\n  margin-bottom: .46933rem;\n  color: #757575;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__clickIcon__src-videoPage-videoInfo-[data-v-56a29549], .index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__dmIcon__src-videoPage-videoInfo-[data-v-56a29549] {\n  display: inline-block;\n  margin-right: .21333rem;\n  vertical-align: middle;\n  width: .704rem;\n  height: .53333rem;\n  overflow: hidden;\n  background: url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;\n  background-size: 15.36rem 46.72rem;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__clickIcon__src-videoPage-videoInfo-[data-v-56a29549] {\n  background-position: -6.37867rem -3.2rem;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__clickTxt__src-videoPage-videoInfo-[data-v-56a29549], .index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__dmTxt__src-videoPage-videoInfo-[data-v-56a29549] {\n  display: inline-block;\n  height: .53333rem;\n  width: 2.13333rem;\n  vertical-align: middle;\n  line-height: .53333rem;\n  font-size: .512rem;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo-[data-v-56a29549] {\n  position: relative;\n  margin-bottom: .46933rem;\n  color: #757575;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__dmIcon__src-videoPage-videoInfo-[data-v-56a29549] {\n  background-position: -5.12rem -3.2rem;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__descWrap__src-videoPage-videoInfo-[data-v-56a29549] {\n  height: .85333rem;\n  margin-bottom: 1.024rem;\n  overflow: hidden;\n  transition: all .5s;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__desc__src-videoPage-videoInfo-[data-v-56a29549] {\n  line-height: .85333rem;\n  color: #757575;\n  font-size: .512rem;\n  word-break: break-all;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__position__src-videoPage-videoInfo-[data-v-56a29549] {\n  margin-top: .768rem;\n  font-size: .512rem;\n  color: #999;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__desc__src-videoPage-videoInfo-[data-v-56a29549] {\n  line-height: .85333rem;\n  color: #757575;\n  font-size: .512rem;\n  word-break: break-all;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__position__src-videoPage-videoInfo- .index__crumb__src-videoPage-videoInfo-[data-v-56a29549] {\n  float: left;\n  color: #fb7299;\n  font-size: .512rem;\n  margin-right: .21333rem;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__position__src-videoPage-videoInfo- .index__crumb__src-videoPage-videoInfo-[data-v-56a29549]:after {\n  display: inline-block;\n  margin-left: .21333rem;\n  font-size: .512rem;\n  content: \">\";\n  color: #ccc;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__foldBtn__src-videoPage-videoInfo-[data-v-56a29549] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: .74667rem;\n  height: .53333rem;\n  background: url(//s1.hdslb.com/bfs/static/mult/images/ui_2.png) no-repeat;\n  background-size: 15.36rem 46.72rem;\n  background-position: -5.29067rem -6.10133rem;\n  transition: all .1s;\n}\n.index__videoInfo__src-videoPage-videoInfo- .index__info__src-videoPage-videoInfo- .index__foldBtn__src-videoPage-videoInfo-.index__on__src-videoPage-videoInfo-[data-v-56a29549] {\n  background-position: -5.29067rem -7.36rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(95)(true);
// imports


// module
exports.push([module.i, ".show[data-v-b412860a]{display:block}.hide[data-v-b412860a]{display:none}.index__player__src-videoPage-player-[data-v-b412860a]{background:#fff;padding-top:1.87733rem;position:relative}@font-face{font-family:playerIcons;src:url(\"https://static.hdslb.com/images/bilibili.eot\")}@font-face{font-family:playerIcons;src:url(\"https://static.hdslb.com/images/bilibili.ttf\")}.player-icon[data-v-b412860a]{display:inline-block;font-family:playerIcons;line-height:1;font-weight:400;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.player-icon.icon-play[data-v-b412860a]:before{content:\"A\";color:#de698c}.player-icon.icon-repeat[data-v-b412860a]:before{content:\"C\"}.player-icon.icon-fullscreen[data-v-b412860a]:before{content:\"E\"}.player-icon.icon-pause[data-v-b412860a]:before{content:\"F\";color:#de698c}.player-icon.icon-mute[data-v-b412860a]:before{content:\"G\"}.player-icon.icon-unmute[data-v-b412860a]:before{content:\"H\"}.player-icon.icon-preview[data-v-b412860a]:before{content:\"\"}.player-icon.icon-share[data-v-b412860a]:before{content:\"K\"}.player-icon.icon-comment[data-v-b412860a],.player-icon.icon-widescreen[data-v-b412860a]{content:\"\";display:block;background:transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat;background-size:19.968rem 60.76373rem}.player-icon.icon-comment.icon-comment[data-v-b412860a],.player-icon.icon-widescreen.icon-comment[data-v-b412860a]{background-position:-4.7424rem -17.74933rem}.player-icon.icon-comment.icon-widescreen[data-v-b412860a],.player-icon.icon-widescreen.icon-widescreen[data-v-b412860a]{background-position:-3.30027rem -16.12416rem}.active>.player-icon.icon-comment[data-v-b412860a]{background-position:-4.7424rem -16.08533rem}.player-container[data-v-b412860a]{position:relative;display:inline-block;width:100%;height:100%}.player-container .dummy[data-v-b412860a]{margin-top:62.5%}.player-container .player-box[data-v-b412860a]{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.player-container .player-box.wide[data-v-b412860a]{position:fixed;z-index:999;width:auto;height:auto}.player-container .player-box.full[data-v-b412860a]{padding-bottom:0}.player-container .player-box.full .comment-layer[data-v-b412860a]{bottom:0}.player-container .player-box video[data-v-b412860a]{background-color:#000;display:none}.player-container .player-box .display[data-v-b412860a]{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.player-container .player-box .display .control-bar[data-v-b412860a]{position:absolute;z-index:2;bottom:0;left:0;right:0;height:1.86655rem;border:0 solid #e2e2e2;background-color:rgba(0,0,0,.5);font-size:0;text-align:left;opacity:1}.player-container .player-box .display .control-bar.hide[data-v-b412860a]{visibility:hidden;opacity:0}.player-container .player-box .display .control-bar>[data-v-b412860a]{font-size:1rem;display:inline-block}.player-container .player-box .display .control-bar.ipad .control-slider[data-v-b412860a]{right:7.19954rem}.player-container .player-box .display .control-bar .control-btn[data-v-b412860a]{height:1.86655rem;text-align:center;vertical-align:top;background-color:transparent;color:#585858;width:1.664rem;margin-left:.59733rem}.player-container .player-box .display .control-bar .control-btn i[data-v-b412860a]{list-style:none;cursor:default;height:100%}.player-container .player-box .display .control-bar .control-btn i[data-v-b412860a]:before{line-height:1.86655rem;display:inline-block;height:100%;font-size:1.5999rem}.player-container .player-box .display .control-bar .control-btn.btn-pause[data-v-b412860a],.player-container .player-box .display .control-bar .control-btn.btn-play[data-v-b412860a]{width:2.6665rem;display:none}.player-container .player-box .display .control-bar .control-btn.hide[data-v-b412860a]{display:none}.player-container .player-box .display .control-bar .control-btn.active[data-v-b412860a]{color:#ccc}.player-container .player-box .display .control-bar .control-split[data-v-b412860a]{height:100%;width:.06666rem;margin:0;padding:0;background-color:#e2e2e2}.player-container .player-box .display .control-bar .control-time-split[data-v-b412860a]:before{content:\"/\";margin:0 .06666rem}.player-container .player-box .display .control-bar .time-container[data-v-b412860a]{position:absolute;left:0;height:1.86655rem;bottom:0}.player-container .player-box .display .control-bar .time-container .control-text[data-v-b412860a],.player-container .player-box .display .control-bar .time-container .control-time-split[data-v-b412860a]{font-size:.66662rem;font-family:arial,sans-serif;color:#fff;height:100%;line-height:2.06653rem;vertical-align:top;float:left}.player-container .player-box .display .control-bar .time-container .control-time-split[data-v-b412860a]{width:.33331rem}.player-container .player-box .display .control-bar .time-container .control-text[data-v-b412860a]{width:2.1332rem}.player-container .player-box .display .control-bar .time-container .control-text.time-current-text[data-v-b412860a]{text-align:right}.player-container .player-box .display .control-bar .time-container .control-text.time-total-text[data-v-b412860a]{text-align:left}.player-container .player-box .display .control-bar .time-container .time-current-text[data-v-b412860a]:before,.player-container .player-box .display .control-bar .time-container .time-total-text[data-v-b412860a]:after{width:.13332rem;content:\"\";display:inline-block}.player-container .player-box .display .control-bar>.right[data-v-b412860a]{height:100%;float:right;font-size:0;cursor:default}.player-container .player-box .display .control-bar>.right>[data-v-b412860a]{font-size:1rem;display:inline-block}.player-container .player-box .display .control-bar .control-volume-slider[data-v-b412860a]{display:inline-block;width:2.6665rem;height:1.86655rem;position:relative}.player-container .player-box .display .control-bar .control-volume-slider.hide[data-v-b412860a]{display:none}.player-container .player-box .display .control-bar .control-volume-slider.mute .ui-slider-thumb[data-v-b412860a]{background-color:#949494}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-container[data-v-b412860a]{top:.76662rem;right:.33331rem;left:0;height:.33331rem}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-thumb[data-v-b412860a]{background-color:#00a1d6;border-radius:.19999rem}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-thumb[data-v-b412860a]:after{width:0;height:.33331rem;right:0;border-radius:.19999rem}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-tracker[data-v-b412860a]{right:0;background-color:#949494;border-radius:.19999rem}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-label[data-v-b412860a]{display:none}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-event-layer[data-v-b412860a]{right:0}.player-container .player-box .display .control-bar .control-slider[data-v-b412860a]{position:absolute;bottom:.73329rem;left:4.66637rem;right:4.79969rem;width:auto;height:.19999rem}.player-container .player-box .display .control-bar .control-slider .ui-slider-container[data-v-b412860a]{position:absolute;height:100%;left:0;right:.46664rem;width:auto;box-shadow:none;border-radius:0;background-color:transparent}.player-container .player-box .display .control-bar .control-slider .ui-slider-label[data-v-b412860a]{display:none}.player-container .player-box .display .control-bar .control-slider .ui-slider-thumb[data-v-b412860a]{top:0;bottom:0;left:0;height:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-radius:0;box-shadow:none;background-color:#de698c}.player-container .player-box .display .control-bar .control-slider .ui-slider-thumb[data-v-b412860a]:after{content:\"\";position:absolute;display:block;right:-.59996rem;top:-.26665rem;width:.59996rem;height:.59996rem;border-radius:.59996rem;box-shadow:none;background-color:#fff;box-shadow:.02133rem .02133rem .128rem #000!important}.player-container .player-box .display .control-bar .control-slider .ui-slider-event-layer[data-v-b412860a]{top:-.26665rem;bottom:-.06666rem;left:0;right:-.46664rem;width:auto;height:auto}.player-container .player-box .display .control-bar .control-slider .ui-slider-tracker[data-v-b412860a]{top:0;bottom:0;left:0;right:0;width:auto;height:auto;border-style:none;box-shadow:none;background:#4c4c4c}.player-container .player-box .display .input-bar[data-v-b412860a]{position:absolute;display:none;z-index:2;top:0;left:0;right:0;height:2.6665rem;background:hsla(0,0%,100%,.6)}.player-container .player-box .display .input-bar.hide[data-v-b412860a]{display:none}.player-container .player-box .display .input-bar .text-input[data-v-b412860a]{position:absolute;top:0;bottom:0;left:0;width:78%;margin:.33331rem;border-style:none;border-width:0;font-size:.93327rem;line-height:.93327rem}.player-container .player-box .display .input-bar .text-input[data-v-b412860a]:focus{outline-offset:0}.player-container .player-box .display .input-bar .send-btn[data-v-b412860a]{position:absolute;top:0;bottom:0;right:0;width:20%;margin:.33331rem;border:0 none #fff;background-color:#0ad;color:#fff;font-size:.93327rem;line-height:.93327rem;font-weight:700}.player-container .player-box .display .comment-layer[data-v-b412860a]{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden}.player-container .player-box .display .comment-layer div[data-v-b412860a]{font-size:.68267rem!important}.player-container .player-box .display .load-layer[data-v-b412860a]{display:block;position:absolute;z-index:3;top:0;bottom:0;left:0;right:0;background-color:rgba(60,60,60,.5);overflow:hidden;cursor:pointer;text-align:center}.player-container .player-box .display .load-layer.hide[data-v-b412860a]{display:none}.player-container .player-box .display .load-layer>img[data-v-b412860a]{border-style:none;display:inline-block;position:relative;width:100%;height:100%;opacity:.85;margin:0;padding:0;filter:blur(.34133rem);-webkit-filter:blur(.34133rem)}.player-container .player-box .display .load-layer>i[data-v-b412860a]{position:absolute;display:block;bottom:1.79988rem;right:.06666rem;width:3.18933rem;height:2.69013rem;background:transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat -3.38347rem -10.03947rem;background-size:19.968rem 60.76373rem}.player-container .player-box .display .state-icon[data-v-b412860a]{position:absolute;display:block;opacity:.85;bottom:1.79988rem;right:.06666rem;width:3.18933rem;height:2.69013rem;margin-left:-1.93321rem;margin-top:-1.93321rem;z-index:2}.player-container .player-box .display .state-icon.hide[data-v-b412860a]{display:none}.player-container .player-box .display .state-icon i[data-v-b412860a]{font-family:playerIcons;font-style:normal;font-weight:400;line-height:3.86645rem;text-align:center;color:#fff;font-size:5.33299rem;list-style:none;display:none;position:absolute;top:0;bottom:0;left:0;right:0}.player-container .player-box .display .state-icon i.buff-icon[data-v-b412860a]{background-repeat:no-repeat;background-image:url(\"https://static.hdslb.com/images/loading.gif\");background-position:50%;background-size:1.36533rem 1.36533rem}.player-container .player-box .display .state-icon i.pause-icon[data-v-b412860a]{background-repeat:no-repeat;background:transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat -3.38347rem -10.03947rem;background-size:19.968rem 60.76373rem}.player-container .player-box .display .state-icon i.play-icon[data-v-b412860a]{background-repeat:no-repeat;background:transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat -3.38347rem -13.36747rem;background-size:19.968rem 60.76373rem}.player-container .player-box .display .state-icon i.active[data-v-b412860a]{display:block}.player-container .player-box .display .state-icon i.buff-icon.active[data-v-b412860a]{display:none}.player-container .controls-simple[data-v-b412860a]{position:absolute;left:0;bottom:0;width:100%;height:.64rem;background-color:#fff;display:table}.player-container .controls-simple .mukio-control[data-v-b412860a]{display:table-cell;vertical-align:middle}.index__hint__src-videoPage-player-[data-v-b412860a]{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}.index__hint__src-videoPage-player- p[data-v-b412860a]{text-align:center;color:#000;font-size:.59733rem;line-height:.68267rem}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player-[data-v-b412860a]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:rgba(0,0,0,.8)}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player-[data-v-b412860a]{width:3.2rem;position:absolute;top:50%;left:50%;transform:translate(-120%,-50%);-webkit-transform:translate(-120%,-50%)}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player-[data-v-b412860a]{width:3.2rem;position:absolute;bottom:50%;right:50%;transform:translate(120%,50%);-webkit-transform:translate(120%,50%)}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player- i[data-v-b412860a]{width:1.984rem;height:1.984rem;margin-left:.608rem;vertical-align:top;background-position:-2.56rem -5.12rem;display:inline-block;background-image:url(//static.hdslb.com/mobile/img/ui_2.png);background-repeat:no-repeat;background-origin:content-box;background-size:15.36rem 46.74133rem}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player- div[data-v-b412860a]{margin-top:.21333rem}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player- div p[data-v-b412860a]{color:#fff;text-align:center;font-size:.55467rem;line-height:.85333rem}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player- i[data-v-b412860a]{width:1.984rem;height:1.984rem;margin-left:.608rem;vertical-align:top;background-position:-2.56rem 0;display:inline-block;background-image:url(//static.hdslb.com/mobile/img/ui_2.png);background-repeat:no-repeat;background-origin:content-box;background-size:15.36rem 46.74133rem}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player- div[data-v-b412860a]{margin-top:.21333rem}.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player- div p[data-v-b412860a]{color:#fff;text-align:center;font-size:.55467rem;line-height:.85333rem}.index__player__src-videoPage-player- .index__videoTime__src-videoPage-player-[data-v-b412860a]{position:absolute;z-index:999;bottom:2.56rem;left:.53333rem;border:.08533rem solid hsla(0,0%,100%,.6);background-color:hsla(0,0%,100%,.2);padding-left:.17067rem;padding-right:.17067rem;border-radius:.21333rem}.index__player__src-videoPage-player- .index__innerTop__src-videoPage-player-[data-v-b412860a]{position:absolute;top:0;left:0;z-index:999;width:100%;background:linear-gradient(180deg,rgba(33,33,33,.5),rgba(33,33,33,0))}.index__player__src-videoPage-player- .index__innerTop__src-videoPage-player- p[data-v-b412860a]{font-size:.64rem;color:#fff;line-height:1.36533rem;text-align:center}.index__player__src-videoPage-player- .index__videoTime__src-videoPage-player- p[data-v-b412860a]{color:#fff;font-size:.64rem;line-height:.98133rem;text-align:center}.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__banner__src-videoPage-player-[data-v-b412860a]{position:relative;float:left;margin-left:.512rem}.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__openClientBtn__src-videoPage-player-[data-v-b412860a]{position:relative;float:right;background-color:#fb7299;border-radius:.17067rem;width:3.84rem;height:1.28rem;margin-top:.17067rem;margin-right:.512rem}.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__clear__src-videoPage-player-[data-v-b412860a]{clear:both}.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__banner__src-videoPage-player- p[data-v-b412860a]{font-size:.55467rem;line-height:1.62133rem;color:#fff;text-align:left}.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__openClientBtn__src-videoPage-player- p[data-v-b412860a]{font-size:.55467rem;line-height:1.28rem;color:#fff;text-align:center}.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player-[data-v-b412860a]{position:absolute;z-index:999;width:100%;height:1.62133rem;left:0;bottom:0;background-color:rgba(33,33,33,.5)}", "", {"version":3,"sources":["/Users/yanglei/Desktop/mine/vue-bilibili/vue-bilibili/src/components/video/video.vue"],"names":[],"mappings":"AACA,uBACE,aAAe,CAChB,AACD,uBACE,YAAc,CACf,AACD,uDACE,gBAAiB,AACjB,uBAAwB,AACxB,iBAAmB,CACpB,AACD,WACE,wBAAyB,AACzB,uDAAyD,CAC1D,AACD,WACE,wBAAyB,AACzB,uDAAyD,CAC1D,AACD,8BACE,qBAAsB,AACtB,wBAAyB,AACzB,cAAe,AACf,gBAAoB,AACpB,kBAAmB,AACnB,mCAAoC,AACpC,iCAAmC,CACpC,AACD,+CACE,YAAa,AACb,aAAe,CAChB,AACD,iDACE,WAAa,CACd,AACD,qDACE,WAAa,CACd,AACD,gDACE,YAAa,AACb,aAAe,CAChB,AACD,+CACE,WAAa,CACd,AACD,iDACE,WAAa,CACd,AACD,kDACE,UAAY,CACb,AACD,gDACE,WAAa,CACd,AACD,yFACE,WAAY,AACZ,cAAe,AACf,qFAAsF,AACtF,qCAAuC,CACxC,AACD,mHACE,2CAA6C,CAC9C,AACD,yHACE,4CAA8C,CAC/C,AACD,mDACE,2CAA6C,CAC9C,AACD,mCACE,kBAAmB,AACnB,qBAAsB,AACtB,WAAY,AACZ,WAAa,CACd,AACD,0CACE,gBAAkB,CACnB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,eAAiB,CAClB,AACD,oDACE,eAAgB,AAChB,YAAa,AACb,WAAY,AACZ,WAAa,CACd,AACD,oDACE,gBAAkB,CACnB,AACD,mEACE,QAAU,CACX,AACD,qDACE,sBAAwB,AACxB,YAAc,CACf,AACD,wDACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA0B,AAC1B,sBAAuB,AACvB,qBAAsB,AACtB,gBAAkB,CACnB,AACD,qEACE,kBAAmB,AACnB,UAAW,AACX,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AAGnB,uBAAsB,AACtB,gCAAqC,AACrC,YAAa,AACb,gBAAiB,AACjB,SAAW,CACZ,AACD,0EACE,kBAAmB,AACnB,SAAW,CACZ,AACD,sEACE,eAAgB,AAChB,oBAAsB,CACvB,AACD,0FACE,gBAAkB,CACnB,AACD,kFACE,kBAAmB,AACnB,kBAAmB,AACnB,mBAAoB,AACpB,6BAA8B,AAC9B,cAAe,AACf,eAAgB,AAChB,qBAAwB,CACzB,AACD,oFACE,gBAAiB,AACjB,eAAgB,AAChB,WAAa,CACd,AACD,2FACE,uBAAwB,AACxB,qBAAsB,AACtB,YAAa,AACb,mBAAqB,CACtB,AACD,uLACE,gBAAiB,AACjB,YAAc,CACf,AACD,uFACE,YAAc,CACf,AACD,yFACE,UAAY,CACb,AACD,oFACE,YAAa,AACb,gBAAkB,AAClB,SAAU,AACV,UAAW,AACX,wBAA0B,CAC3B,AACD,gGACE,YAAa,AACb,kBAAqB,CACtB,AACD,qFACE,kBAAmB,AACnB,OAAQ,AACR,kBAAmB,AACnB,QAAU,CACX,AACD,4MACE,oBAAsB,AACtB,6BAA+B,AAC/B,WAAY,AACZ,YAAa,AACb,uBAAwB,AACxB,mBAAoB,AACpB,UAAY,CACb,AACD,yGACE,eAAkB,CACnB,AACD,mGACE,eAAiB,CAClB,AACD,qHACE,gBAAkB,CACnB,AACD,mHACE,eAAiB,CAClB,AACD,2NACE,gBAAkB,AAClB,WAAY,AACZ,oBAAsB,CACvB,AACD,4EACE,YAAa,AACb,YAAa,AACb,YAAa,AACb,cAAgB,CACjB,AACD,6EACE,eAAgB,AAChB,oBAAsB,CACvB,AACD,4FACE,qBAAsB,AACtB,gBAAiB,AACjB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,iGACE,YAAc,CACf,AACD,kHACE,wBAA0B,CAC3B,AACD,iHACE,cAAgB,AAChB,gBAAkB,AAClB,OAAQ,AACR,gBAAmB,CACpB,AACD,6GACE,yBAA0B,AAC1B,uBAA0B,CAC3B,AACD,mHACE,QAAS,AACT,iBAAmB,AACnB,QAAS,AACT,uBAA0B,CAC3B,AACD,+GACE,QAAS,AACT,yBAA0B,AAC1B,uBAA0B,CAC3B,AACD,6GACE,YAAc,CACf,AACD,mHACE,OAAS,CACV,AACD,qFACE,kBAAmB,AACnB,iBAAmB,AACnB,gBAAiB,AACjB,iBAAkB,AAClB,WAAY,AACZ,gBAAmB,CACpB,AACD,0GACE,kBAAmB,AACnB,YAAa,AACb,OAAQ,AACR,gBAAkB,AAClB,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,4BAA8B,CAC/B,AACD,sGACE,YAAc,CACf,AACD,sGACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,YAAa,AACb,gCAAwC,AACxC,wBAAgC,AAChC,gBAAiB,AACjB,gBAAiB,AACjB,wBAA0B,CAC3B,AACD,4GACE,WAAY,AACZ,kBAAmB,AACnB,cAAe,AACf,iBAAmB,AACnB,eAAiB,AACjB,gBAAkB,AAClB,iBAAmB,AACnB,wBAA0B,AAC1B,gBAAiB,AACjB,sBAAwB,AACxB,qDAA4D,CAC7D,AACD,4GACE,eAAiB,AACjB,kBAAoB,AACpB,OAAQ,AACR,iBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,wGACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,mEACE,kBAAmB,AACnB,aAAc,AACd,UAAW,AACX,MAAO,AACP,OAAQ,AACR,QAAS,AACT,iBAAkB,AAClB,6BAAqC,CACtC,AACD,wEACE,YAAc,CACf,AACD,+EACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,oBAAsB,AACtB,qBAAwB,CACzB,AACD,qFACE,gBAAkB,CACnB,AACD,6EACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,QAAS,AACT,UAAW,AACX,iBAAmB,AACnB,mBAAoB,AACpB,sBAAuB,AACvB,WAAY,AACZ,oBAAsB,AACtB,sBAAwB,AACxB,eAAkB,CACnB,AACD,uEACE,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,oBAAqB,AACrB,eAAiB,CAClB,AACD,2EACE,6BAAiC,CAClC,AACD,oEACE,cAAe,AACf,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,mCAAwC,AACxC,gBAAiB,AACjB,eAAgB,AAChB,iBAAmB,CACpB,AACD,yEACE,YAAc,CACf,AACD,wEACE,kBAAmB,AACnB,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,YAAa,AACb,SAAU,AACV,UAAW,AACX,uBAAyB,AACzB,8BAAiC,CAClC,AACD,sEACE,kBAAmB,AACnB,cAAe,AACf,kBAAmB,AACnB,gBAAkB,AAClB,iBAAkB,AAClB,kBAAmB,AACnB,8GAA+G,AAC/G,qCAAuC,CACxC,AACD,oEACE,kBAAmB,AACnB,cAAe,AACf,YAAa,AACb,kBAAmB,AACnB,gBAAkB,AAClB,iBAAkB,AAClB,kBAAmB,AACnB,wBAAyB,AACzB,uBAAwB,AACxB,SAAW,CACZ,AACD,yEACE,YAAc,CACf,AACD,sEACE,wBAAyB,AACzB,kBAAmB,AACnB,gBAAoB,AACpB,uBAAwB,AACxB,kBAAmB,AACnB,WAAY,AACZ,qBAAsB,AACtB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,OAAS,CACV,AACD,gFACE,4BAA6B,AAC7B,oEAAqE,AACrE,wBAAmC,AACnC,qCAAuC,CACxC,AACD,iFACE,4BAA6B,AAC7B,8GAA+G,AAC/G,qCAAuC,CACxC,AACD,gFACE,4BAA6B,AAC7B,8GAA+G,AAC/G,qCAAuC,CACxC,AACD,6EACE,aAAe,CAChB,AACD,uFACE,YAAc,CACf,AACD,oDACE,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,WAAY,AACZ,cAAgB,AAChB,sBAAwB,AACxB,aAAe,CAChB,AACD,mEACE,mBAAoB,AACpB,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,SAAU,AACV,+BAAiC,AACjC,sCAAwC,CACzC,AACD,uDACE,kBAAmB,AACnB,WAAY,AACZ,oBAAqB,AACrB,qBAAsB,CACvB,AACD,kGACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,aAAc,AACd,+BAAiC,CAClC,AACD,8IACE,aAAc,AACd,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,gCAAiC,AACjC,uCAAyC,CAC1C,AACD,6IACE,aAAc,AACd,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,8BAA+B,AAC/B,qCAAuC,CACxC,AACD,gJACE,eAAgB,AAChB,gBAAiB,AACjB,oBAAqB,AACrB,mBAAoB,AACpB,sCAAuC,AACvC,qBAAsB,AACtB,6DAA8D,AAC9D,4BAA6B,AAC7B,8BAA+B,AAC/B,oCAAsC,CACvC,AACD,kJACE,oBAAsB,CACvB,AACD,oJACE,WAAY,AACZ,kBAAmB,AACnB,oBAAqB,AACrB,qBAAuB,CACxB,AACD,+IACE,eAAgB,AAChB,gBAAiB,AACjB,oBAAqB,AACrB,mBAAoB,AACpB,+BAAgC,AAChC,qBAAsB,AACtB,6DAA8D,AAC9D,4BAA6B,AAC7B,8BAA+B,AAC/B,oCAAsC,CACvC,AACD,iJACE,oBAAsB,CACvB,AACD,mJACE,WAAY,AACZ,kBAAmB,AACnB,oBAAqB,AACrB,qBAAuB,CACxB,AACD,gGACE,kBAAmB,AACnB,YAAa,AACb,eAAgB,AAChB,eAAgB,AAChB,0CAA2C,AAC3C,oCAAqC,AACrC,uBAAwB,AACxB,wBAAyB,AACzB,uBAAyB,CAC1B,AACD,+FACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,qEAAuE,CACxE,AACD,iGACE,iBAAkB,AAClB,WAAY,AACZ,uBAAwB,AACxB,iBAAmB,CACpB,AACD,kGACE,WAAY,AACZ,iBAAkB,AAClB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,oIACE,kBAAmB,AACnB,WAAY,AACZ,mBAAqB,CACtB,AACD,2IACE,kBAAmB,AACnB,YAAa,AACb,yBAA0B,AAC1B,wBAAyB,AACzB,cAAe,AACf,eAAgB,AAChB,qBAAsB,AACtB,oBAAsB,CACvB,AACD,mIACE,UAAY,CACb,AACD,sIACE,oBAAqB,AACrB,uBAAwB,AACxB,WAAY,AACZ,eAAiB,CAClB,AACD,6IACE,oBAAqB,AACrB,oBAAqB,AACrB,WAAY,AACZ,iBAAmB,CACpB,AACD,8FACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,kCAAoC,CACrC","file":"video.vue","sourcesContent":["\n.show[data-v-b412860a] {\n  display: block;\n}\n.hide[data-v-b412860a] {\n  display: none;\n}\n.index__player__src-videoPage-player-[data-v-b412860a] {\n  background: #fff;\n  padding-top: 1.87733rem;\n  position: relative;\n}\n@font-face {\n  font-family: playerIcons;\n  src: url(\"https://static.hdslb.com/images/bilibili.eot\");\n}\n@font-face {\n  font-family: playerIcons;\n  src: url(\"https://static.hdslb.com/images/bilibili.ttf\");\n}\n.player-icon[data-v-b412860a] {\n  display: inline-block;\n  font-family: playerIcons;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.player-icon.icon-play[data-v-b412860a]:before {\n  content: 'A';\n  color: #de698c;\n}\n.player-icon.icon-repeat[data-v-b412860a]:before {\n  content: \"C\";\n}\n.player-icon.icon-fullscreen[data-v-b412860a]:before {\n  content: \"E\";\n}\n.player-icon.icon-pause[data-v-b412860a]:before {\n  content: 'F';\n  color: #de698c;\n}\n.player-icon.icon-mute[data-v-b412860a]:before {\n  content: \"G\";\n}\n.player-icon.icon-unmute[data-v-b412860a]:before {\n  content: \"H\";\n}\n.player-icon.icon-preview[data-v-b412860a]:before {\n  content: \"\";\n}\n.player-icon.icon-share[data-v-b412860a]:before {\n  content: \"K\";\n}\n.player-icon.icon-comment[data-v-b412860a], .player-icon.icon-widescreen[data-v-b412860a] {\n  content: '';\n  display: block;\n  background: transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat;\n  background-size: 19.968rem 60.76373rem;\n}\n.player-icon.icon-comment.icon-comment[data-v-b412860a], .player-icon.icon-widescreen.icon-comment[data-v-b412860a] {\n  background-position: -4.7424rem -17.74933rem;\n}\n.player-icon.icon-comment.icon-widescreen[data-v-b412860a], .player-icon.icon-widescreen.icon-widescreen[data-v-b412860a] {\n  background-position: -3.30027rem -16.12416rem;\n}\n.active > .player-icon.icon-comment[data-v-b412860a] {\n  background-position: -4.7424rem -16.08533rem;\n}\n.player-container[data-v-b412860a] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.player-container .dummy[data-v-b412860a] {\n  margin-top: 62.5%;\n}\n.player-container .player-box[data-v-b412860a] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n.player-container .player-box.wide[data-v-b412860a] {\n  position: fixed;\n  z-index: 999;\n  width: auto;\n  height: auto;\n}\n.player-container .player-box.full[data-v-b412860a] {\n  padding-bottom: 0;\n}\n.player-container .player-box.full .comment-layer[data-v-b412860a] {\n  bottom: 0;\n}\n.player-container .player-box video[data-v-b412860a] {\n  background-color: black;\n  display: none;\n}\n.player-container .player-box .display[data-v-b412860a] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.player-container .player-box .display .control-bar[data-v-b412860a] {\n  position: absolute;\n  z-index: 2;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 1.86655rem;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e2e2e2;\n  background-color: rgba(0, 0, 0, 0.5);\n  font-size: 0;\n  text-align: left;\n  opacity: 1;\n}\n.player-container .player-box .display .control-bar.hide[data-v-b412860a] {\n  visibility: hidden;\n  opacity: 0;\n}\n.player-container .player-box .display .control-bar > *[data-v-b412860a] {\n  font-size: 1rem;\n  display: inline-block;\n}\n.player-container .player-box .display .control-bar.ipad .control-slider[data-v-b412860a] {\n  right: 7.19954rem;\n}\n.player-container .player-box .display .control-bar .control-btn[data-v-b412860a] {\n  height: 1.86655rem;\n  text-align: center;\n  vertical-align: top;\n  background-color: transparent;\n  color: #585858;\n  width: 1.664rem;\n  margin-left: 0.59733rem;\n}\n.player-container .player-box .display .control-bar .control-btn i[data-v-b412860a] {\n  list-style: none;\n  cursor: default;\n  height: 100%;\n}\n.player-container .player-box .display .control-bar .control-btn i[data-v-b412860a]:before {\n  line-height: 1.86655rem;\n  display: inline-block;\n  height: 100%;\n  font-size: 1.5999rem;\n}\n.player-container .player-box .display .control-bar .control-btn.btn-play[data-v-b412860a], .player-container .player-box .display .control-bar .control-btn.btn-pause[data-v-b412860a] {\n  width: 2.6665rem;\n  display: none;\n}\n.player-container .player-box .display .control-bar .control-btn.hide[data-v-b412860a] {\n  display: none;\n}\n.player-container .player-box .display .control-bar .control-btn.active[data-v-b412860a] {\n  color: #ccc;\n}\n.player-container .player-box .display .control-bar .control-split[data-v-b412860a] {\n  height: 100%;\n  width: 0.06666rem;\n  margin: 0;\n  padding: 0;\n  background-color: #e2e2e2;\n}\n.player-container .player-box .display .control-bar .control-time-split[data-v-b412860a]:before {\n  content: \"/\";\n  margin: 0 0.06666rem;\n}\n.player-container .player-box .display .control-bar .time-container[data-v-b412860a] {\n  position: absolute;\n  left: 0;\n  height: 1.86655rem;\n  bottom: 0;\n}\n.player-container .player-box .display .control-bar .time-container .control-text[data-v-b412860a], .player-container .player-box .display .control-bar .time-container .control-time-split[data-v-b412860a] {\n  font-size: 0.66662rem;\n  font-family: arial, sans-serif;\n  color: #fff;\n  height: 100%;\n  line-height: 2.06653rem;\n  vertical-align: top;\n  float: left;\n}\n.player-container .player-box .display .control-bar .time-container .control-time-split[data-v-b412860a] {\n  width: 0.33331rem;\n}\n.player-container .player-box .display .control-bar .time-container .control-text[data-v-b412860a] {\n  width: 2.1332rem;\n}\n.player-container .player-box .display .control-bar .time-container .control-text.time-current-text[data-v-b412860a] {\n  text-align: right;\n}\n.player-container .player-box .display .control-bar .time-container .control-text.time-total-text[data-v-b412860a] {\n  text-align: left;\n}\n.player-container .player-box .display .control-bar .time-container .time-total-text[data-v-b412860a]:after, .player-container .player-box .display .control-bar .time-container .time-current-text[data-v-b412860a]:before {\n  width: 0.13332rem;\n  content: \"\";\n  display: inline-block;\n}\n.player-container .player-box .display .control-bar > .right[data-v-b412860a] {\n  height: 100%;\n  float: right;\n  font-size: 0;\n  cursor: default;\n}\n.player-container .player-box .display .control-bar > .right > *[data-v-b412860a] {\n  font-size: 1rem;\n  display: inline-block;\n}\n.player-container .player-box .display .control-bar .control-volume-slider[data-v-b412860a] {\n  display: inline-block;\n  width: 2.6665rem;\n  height: 1.86655rem;\n  position: relative;\n}\n.player-container .player-box .display .control-bar .control-volume-slider.hide[data-v-b412860a] {\n  display: none;\n}\n.player-container .player-box .display .control-bar .control-volume-slider.mute .ui-slider-thumb[data-v-b412860a] {\n  background-color: #949494;\n}\n.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-container[data-v-b412860a] {\n  top: 0.76662rem;\n  right: 0.33331rem;\n  left: 0;\n  height: 0.33331rem;\n}\n.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-thumb[data-v-b412860a] {\n  background-color: #00a1d6;\n  border-radius: 0.19999rem;\n}\n.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-thumb[data-v-b412860a]:after {\n  width: 0;\n  height: 0.33331rem;\n  right: 0;\n  border-radius: 0.19999rem;\n}\n.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-tracker[data-v-b412860a] {\n  right: 0;\n  background-color: #949494;\n  border-radius: 0.19999rem;\n}\n.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-label[data-v-b412860a] {\n  display: none;\n}\n.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-event-layer[data-v-b412860a] {\n  right: 0;\n}\n.player-container .player-box .display .control-bar .control-slider[data-v-b412860a] {\n  position: absolute;\n  bottom: 0.73329rem;\n  left: 4.66637rem;\n  right: 4.79969rem;\n  width: auto;\n  height: 0.19999rem;\n}\n.player-container .player-box .display .control-bar .control-slider .ui-slider-container[data-v-b412860a] {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  right: 0.46664rem;\n  width: auto;\n  box-shadow: none;\n  border-radius: 0;\n  background-color: transparent;\n}\n.player-container .player-box .display .control-bar .control-slider .ui-slider-label[data-v-b412860a] {\n  display: none;\n}\n.player-container .player-box .display .control-bar .control-slider .ui-slider-thumb[data-v-b412860a] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  height: auto;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  border-radius: 0;\n  box-shadow: none;\n  background-color: #de698c;\n}\n.player-container .player-box .display .control-bar .control-slider .ui-slider-thumb[data-v-b412860a]:after {\n  content: '';\n  position: absolute;\n  display: block;\n  right: -0.59996rem;\n  top: -0.26665rem;\n  width: 0.59996rem;\n  height: 0.59996rem;\n  border-radius: 0.59996rem;\n  box-shadow: none;\n  background-color: white;\n  box-shadow: 0.02133rem 0.02133rem 0.128rem black !important;\n}\n.player-container .player-box .display .control-bar .control-slider .ui-slider-event-layer[data-v-b412860a] {\n  top: -0.26665rem;\n  bottom: -0.06666rem;\n  left: 0;\n  right: -0.46664rem;\n  width: auto;\n  height: auto;\n}\n.player-container .player-box .display .control-bar .control-slider .ui-slider-tracker[data-v-b412860a] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: auto;\n  height: auto;\n  border-style: none;\n  box-shadow: none;\n  background: #4c4c4c;\n}\n.player-container .player-box .display .input-bar[data-v-b412860a] {\n  position: absolute;\n  display: none;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2.6665rem;\n  background: rgba(255, 255, 255, 0.6);\n}\n.player-container .player-box .display .input-bar.hide[data-v-b412860a] {\n  display: none;\n}\n.player-container .player-box .display .input-bar .text-input[data-v-b412860a] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 78%;\n  margin: 0.33331rem;\n  border-style: none;\n  border-width: 0;\n  font-size: 0.93327rem;\n  line-height: 0.93327rem;\n}\n.player-container .player-box .display .input-bar .text-input[data-v-b412860a]:focus {\n  outline-offset: 0;\n}\n.player-container .player-box .display .input-bar .send-btn[data-v-b412860a] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 20%;\n  margin: 0.33331rem;\n  border: 0 none #fff;\n  background-color: #0ad;\n  color: #fff;\n  font-size: 0.93327rem;\n  line-height: 0.93327rem;\n  font-weight: bold;\n}\n.player-container .player-box .display .comment-layer[data-v-b412860a] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.player-container .player-box .display .comment-layer div[data-v-b412860a] {\n  font-size: 0.68267rem !important;\n}\n.player-container .player-box .display .load-layer[data-v-b412860a] {\n  display: block;\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(60, 60, 60, 0.5);\n  overflow: hidden;\n  cursor: pointer;\n  text-align: center;\n}\n.player-container .player-box .display .load-layer.hide[data-v-b412860a] {\n  display: none;\n}\n.player-container .player-box .display .load-layer > img[data-v-b412860a] {\n  border-style: none;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  opacity: .85;\n  margin: 0;\n  padding: 0;\n  filter: blur(0.34133rem);\n  -webkit-filter: blur(0.34133rem);\n}\n.player-container .player-box .display .load-layer > i[data-v-b412860a] {\n  position: absolute;\n  display: block;\n  bottom: 1.79988rem;\n  right: 0.06666rem;\n  width: 3.18933rem;\n  height: 2.69013rem;\n  background: transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat -3.38347rem -10.03947rem;\n  background-size: 19.968rem 60.76373rem;\n}\n.player-container .player-box .display .state-icon[data-v-b412860a] {\n  position: absolute;\n  display: block;\n  opacity: .85;\n  bottom: 1.79988rem;\n  right: 0.06666rem;\n  width: 3.18933rem;\n  height: 2.69013rem;\n  margin-left: -1.93321rem;\n  margin-top: -1.93321rem;\n  z-index: 2;\n}\n.player-container .player-box .display .state-icon.hide[data-v-b412860a] {\n  display: none;\n}\n.player-container .player-box .display .state-icon i[data-v-b412860a] {\n  font-family: playerIcons;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 3.86645rem;\n  text-align: center;\n  color: #FFF;\n  font-size: 5.33299rem;\n  list-style: none;\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.player-container .player-box .display .state-icon i.buff-icon[data-v-b412860a] {\n  background-repeat: no-repeat;\n  background-image: url(\"https://static.hdslb.com/images/loading.gif\");\n  background-position: center center;\n  background-size: 1.36533rem 1.36533rem;\n}\n.player-container .player-box .display .state-icon i.pause-icon[data-v-b412860a] {\n  background-repeat: no-repeat;\n  background: transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat -3.38347rem -10.03947rem;\n  background-size: 19.968rem 60.76373rem;\n}\n.player-container .player-box .display .state-icon i.play-icon[data-v-b412860a] {\n  background-repeat: no-repeat;\n  background: transparent url(\"https://static.hdslb.com/mobile/img/ui_2.png\") no-repeat -3.38347rem -13.36747rem;\n  background-size: 19.968rem 60.76373rem;\n}\n.player-container .player-box .display .state-icon i.active[data-v-b412860a] {\n  display: block;\n}\n.player-container .player-box .display .state-icon i.buff-icon.active[data-v-b412860a] {\n  display: none;\n}\n.player-container .controls-simple[data-v-b412860a] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0.64rem;\n  background-color: white;\n  display: table;\n}\n.player-container .controls-simple .mukio-control[data-v-b412860a] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.index__hint__src-videoPage-player-[data-v-b412860a] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%)\n}\n.index__hint__src-videoPage-player- p[data-v-b412860a] {\n  text-align: center;\n  color: #000;\n  font-size: .59733rem;\n  line-height: .68267rem\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player-[data-v-b412860a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background-color: rgba(0,0,0,.8);\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player-[data-v-b412860a] {\n  width: 3.2rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-120%,-50%);\n  -webkit-transform: translate(-120%,-50%);\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player-[data-v-b412860a] {\n  width: 3.2rem;\n  position: absolute;\n  bottom: 50%;\n  right: 50%;\n  transform: translate(120%,50%);\n  -webkit-transform: translate(120%,50%);\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player- i[data-v-b412860a] {\n  width: 1.984rem;\n  height: 1.984rem;\n  margin-left: .608rem;\n  vertical-align: top;\n  background-position: -2.56rem -5.12rem;\n  display: inline-block;\n  background-image: url(//static.hdslb.com/mobile/img/ui_2.png);\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  background-size: 15.36rem 46.74133rem;\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player- div[data-v-b412860a] {\n  margin-top: .21333rem;\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__replayButton__src-videoPage-player- div p[data-v-b412860a] {\n  color: #fff;\n  text-align: center;\n  font-size: .55467rem;\n  line-height: .85333rem;\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player- i[data-v-b412860a] {\n  width: 1.984rem;\n  height: 1.984rem;\n  margin-left: .608rem;\n  vertical-align: top;\n  background-position: -2.56rem 0;\n  display: inline-block;\n  background-image: url(//static.hdslb.com/mobile/img/ui_2.png);\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  background-size: 15.36rem 46.74133rem;\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player- div[data-v-b412860a] {\n  margin-top: .21333rem;\n}\n.index__player__src-videoPage-player- .index__finishLayer__src-videoPage-player- .index__shareButton__src-videoPage-player- div p[data-v-b412860a] {\n  color: #fff;\n  text-align: center;\n  font-size: .55467rem;\n  line-height: .85333rem;\n}\n.index__player__src-videoPage-player- .index__videoTime__src-videoPage-player-[data-v-b412860a] {\n  position: absolute;\n  z-index: 999;\n  bottom: 2.56rem;\n  left: .53333rem;\n  border: .08533rem solid hsla(0,0%,100%,.6);\n  background-color: hsla(0,0%,100%,.2);\n  padding-left: .17067rem;\n  padding-right: .17067rem;\n  border-radius: .21333rem;\n}\n.index__player__src-videoPage-player- .index__innerTop__src-videoPage-player-[data-v-b412860a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100%;\n  background: linear-gradient(180deg,rgba(33,33,33,.5),rgba(33,33,33,0));\n}\n.index__player__src-videoPage-player- .index__innerTop__src-videoPage-player- p[data-v-b412860a] {\n  font-size: .64rem;\n  color: #fff;\n  line-height: 1.36533rem;\n  text-align: center;\n}\n.index__player__src-videoPage-player- .index__videoTime__src-videoPage-player- p[data-v-b412860a] {\n  color: #fff;\n  font-size: .64rem;\n  line-height: .98133rem;\n  text-align: center;\n}\n.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__banner__src-videoPage-player-[data-v-b412860a] {\n  position: relative;\n  float: left;\n  margin-left: .512rem;\n}\n.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__openClientBtn__src-videoPage-player-[data-v-b412860a] {\n  position: relative;\n  float: right;\n  background-color: #fb7299;\n  border-radius: .17067rem;\n  width: 3.84rem;\n  height: 1.28rem;\n  margin-top: .17067rem;\n  margin-right: .512rem;\n}\n.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__clear__src-videoPage-player-[data-v-b412860a] {\n  clear: both;\n}\n.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__banner__src-videoPage-player- p[data-v-b412860a] {\n  font-size: .55467rem;\n  line-height: 1.62133rem;\n  color: #fff;\n  text-align: left;\n}\n.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player- .index__openClientBtn__src-videoPage-player- p[data-v-b412860a] {\n  font-size: .55467rem;\n  line-height: 1.28rem;\n  color: #fff;\n  text-align: center;\n}\n.index__player__src-videoPage-player- .index__cccTips__src-videoPage-player-[data-v-b412860a] {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  height: 1.62133rem;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(33,33,33,.5);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(96)("a86f19dc", content, true);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(96)("4536ff08", content, true);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(96)("527f07a2", content, true);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(96)("fd297428", content, true);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(127)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(134),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b412860a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(125)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(132),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2e900cb0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(126)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-56a29549",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__videoPage__src-videoPage-"
  }, [_c('head-bar'), _vm._v(" "), _c('video-pro', {
    attrs: {
      "aid": _vm.aid,
      "pic": _vm.pic
    }
  }), _vm._v(" "), _c('video-area'), _vm._v(" "), _c('video-info', {
    attrs: {
      "info": _vm.info
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__operateArea__src-videoPage-operateArea-"
  }, [_c('div', {
    staticClass: "index__operateBtn__src-videoPage-operateArea-"
  }, [_c('div', {
    staticClass: "index__showField__src-videoPage-operateArea-"
  }, [_c('div', {
    staticClass: "index__icon__src-videoPage-operateArea-"
  }, [_c('img', {
    attrs: {
      "src": "//s1.hdslb.com/bfs/static/mult/images/share.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', [_vm._v("分享")]), _vm._v(" "), _c('div', {
    staticClass: "index__clear__src-videoPage-operateArea-"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "index__operateBtn__src-videoPage-operateArea-"
  }, [_c('div', {
    staticClass: "index__showField__src-videoPage-operateArea-"
  }, [_c('div', {
    staticClass: "index__icon__src-videoPage-operateArea-"
  }, [_c('img', {
    attrs: {
      "src": "//s1.hdslb.com/bfs/static/mult/images/collect.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', [_vm._v("收藏")]), _vm._v(" "), _c('div', {
    staticClass: "index__clear__src-videoPage-operateArea-"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "index__operateBtn__src-videoPage-operateArea-"
  }, [_c('div', {
    staticClass: "index__showField__src-videoPage-operateArea-"
  }, [_c('div', {
    staticClass: "index__icon__src-videoPage-operateArea-"
  }, [_c('img', {
    attrs: {
      "src": "//s1.hdslb.com/bfs/static/mult/images/download.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', [_vm._v("缓存")]), _vm._v(" "), _c('div', {
    staticClass: "index__clear__src-videoPage-operateArea-"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "index__clear__src-videoPage-operateArea-"
  })])
}]}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__videoInfo__src-videoPage-videoInfo-"
  }, [_c('h1', {
    staticClass: "index__title__src-videoPage-videoInfo-",
    domProps: {
      "innerHTML": _vm._s(_vm.info.title)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "index__info__src-videoPage-videoInfo-"
  }, [_c('i', {
    staticClass: "index__clickIcon__src-videoPage-videoInfo-"
  }), _c('span', {
    staticClass: "index__clickTxt__src-videoPage-videoInfo-",
    domProps: {
      "innerHTML": _vm._s(_vm.info.view)
    }
  }), _c('i', {
    staticClass: "index__dmIcon__src-videoPage-videoInfo-"
  }), _c('span', {
    staticClass: "index__dmTxt__src-videoPage-videoInfo-",
    domProps: {
      "innerHTML": _vm._s(_vm.info.danmaku)
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "index__foldBtn__src-videoPage-videoInfo-"
  })]), _vm._v(" "), _c('div', {
    staticClass: "index__descWrap__src-videoPage-videoInfo-"
  }, [_c('div', {
    ref: "infoHeight"
  }, [_c('p', {
    staticClass: "index__desc__src-videoPage-videoInfo-"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.info.desc)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "index__position__src-videoPage-videoInfo-"
  }, [_c('a', {
    staticClass: "index__crumb__src-videoPage-videoInfo-",
    attrs: {
      "href": "//m.bilibili.com/index.html",
      "target": "_self"
    }
  }, [_vm._v("主页")]), _vm._v(" "), _c('a', {
    staticClass: "index__crumb__src-videoPage-videoInfo-",
    attrs: {
      "href": "",
      "target": "_self"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.info.tname)
    }
  }), _vm._v("av" + _vm._s(_vm.info.aid))])])])])
},staticRenderFns: []}

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__player__src-videoPage-player-"
  }, [_c('div', {
    staticClass: "player-container"
  }, [_c('div', {
    staticClass: "dummy"
  }), _vm._v(" "), _c('div', {
    staticClass: "player-box",
    class: {
      'full': !_vm.videoState
    }
  }, [_c('video', {
    ref: "myvideo",
    staticStyle: {
      "display": "inline"
    },
    attrs: {
      "width": "100%",
      "height": "100%",
      "preload": "auto",
      "webkit-playsinline": "",
      "playsinline": "",
      "load": "loaded"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "display",
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        _vm.controllerState($event)
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "control-bar",
    class: {
      'hide': _vm.iconState
    }
  }, [_vm._m(1), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _c('div', {
    staticClass: "comment-layer",
    staticStyle: {
      "width": "750px",
      "height": "469px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "load-layer",
    class: {
      'hide': _vm.loadLayer
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.pic
    }
  }), _c('i', {
    staticClass: "player-icon icon-preview",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.play('start')
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "index__innerTop__src-videoPage-player-"
  }, [_c('p', [_vm._v(_vm._s('av' + _vm.aid))])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "index__cccTips__src-videoPage-player-",
    class: {
      'hide': _vm.down
    }
  }, [_vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "index__clear__src-videoPage-player-"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "state-icon",
    class: {
      'hide': _vm.iconState
    }
  }, [_c('i', {
    staticClass: "buff-icon"
  }), _vm._v(" "), _c('i', {
    staticClass: "pause-icon",
    class: {
      'active': _vm.videoState
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.play($event)
      }
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "play-icon",
    class: {
      'active': !_vm.videoState
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.pause($event)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "index__finishLayer__src-videoPage-player-",
    class: {
      'hide': _vm.ended
    }
  }, [_c('div', {
    staticClass: "index__replayButton__src-videoPage-player-",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.play($event)
      }
    }
  }, [_c('i'), _vm._v(" "), _vm._m(9)]), _vm._v(" "), _vm._m(10)])])])]), _vm._v(" "), _c('div', {
    staticClass: "index__hint__src-videoPage-player-",
    class: {
      'hide': _vm.loading
    }
  }, [_c('p', [_vm._v("播放器加载中...")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-bar"
  }, [_c('input', {
    staticClass: "text-input",
    attrs: {
      "type": "text",
      "placeholder": "请在这里输入弹幕"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "send-btn"
  }, [_vm._v("发送")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "control-btn btn-play hide"
  }, [_c('i', {
    staticClass: "player-icon icon-play"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "control-btn btn-pause"
  }, [_c('i', {
    staticClass: "player-icon icon-pause"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "time-container"
  }, [_c('span', {
    staticClass: "control-text time-current-text"
  }, [_vm._v("00:30")]), _vm._v(" "), _c('span', {
    staticClass: "control-time-split"
  }), _vm._v(" "), _c('span', {
    staticClass: "control-text time-total-text"
  }, [_vm._v("00:34")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right"
  }, [_c('span', {
    staticClass: "control-btn btn-mute hide"
  }, [_c('i', {
    staticClass: "player-icon icon-mute"
  })]), _c('span', {
    staticClass: "control-btn btn-unmute hide"
  }, [_c('i', {
    staticClass: "player-icon icon-unmute"
  })]), _c('span', {
    staticClass: "control-volume-slider hide"
  }, [_c('div', {
    staticClass: "ui-slider-container"
  }, [_c('div', {
    staticClass: "ui-slider-tracker"
  }), _c('div', {
    staticClass: "ui-slider-label"
  }, [_vm._v(": 100")]), _c('div', {
    staticClass: "ui-slider-thumb",
    staticStyle: {
      "width": "100%"
    }
  }), _c('div', {
    staticClass: "ui-slider-event-layer"
  })])]), _c('span', {
    staticClass: "control-btn btn-comment active"
  }, [_c('i', {
    staticClass: "player-icon icon-comment"
  })]), _c('span', {
    staticClass: "control-btn btn-repeat hide"
  }, [_c('i', {
    staticClass: "player-icon icon-repeat"
  })]), _c('span', {
    staticClass: "control-btn btn-widescreen"
  }, [_c('i', {
    staticClass: "player-icon icon-widescreen"
  })]), _c('span', {
    staticClass: "control-btn btn-fullscreen active hide"
  }, [_c('i', {
    staticClass: "player-icon icon-fullscreen"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control-slider"
  }, [_c('div', {
    staticClass: "ui-slider-container"
  }, [_c('div', {
    staticClass: "ui-slider-tracker"
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-slider-label"
  }, [_vm._v(": 30.518828")]), _vm._v(" "), _c('div', {
    staticClass: "ui-slider-thumb",
    staticStyle: {
      "width": "89.2285%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-slider-event-layer"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__videoTime__src-videoPage-player-"
  }, [_c('p', [_vm._v("1:04")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__banner__src-videoPage-player-"
  }, [_c('p', [_vm._v("高清更流畅，就用bilibili客户端(*^_^*)")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__openClientBtn__src-videoPage-player-"
  }, [_c('p', [_vm._v("用客户端打开")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("重新播放")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index__shareButton__src-videoPage-player-"
  }, [_c('i'), _vm._v(" "), _c('div', [_c('p', [_vm._v("分享")])])])
}]}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(159);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(22)))

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io_io_controller_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(104);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class Features {

    static supportMSEH264Playback() {
        return window.MediaSource &&
               window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
    }

    static supportNetworkStreamIO() {
        let ioctl = new __WEBPACK_IMPORTED_MODULE_0__io_io_controller_js__["a" /* default */]({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config_js__["a" /* createDefaultConfig */])());
        let loaderType = ioctl.loaderType;
        ioctl.destroy();
        return loaderType == 'fetch-stream-loader' || loaderType == 'xhr-moz-chunked-loader';
    }

    static getNetworkLoaderTypeName() {
        let ioctl = new __WEBPACK_IMPORTED_MODULE_0__io_io_controller_js__["a" /* default */]({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config_js__["a" /* createDefaultConfig */])());
        let loaderType = ioctl.loaderType;
        ioctl.destroy();
        return loaderType;
    }

    static supportNativeMediaPlayback(mimeType) {
        if (Features.videoElement == undefined) {
            Features.videoElement = window.document.createElement('video');
        }
        let canPlay = Features.videoElement.canPlayType(mimeType);
        return canPlay === 'probably' || canPlay == 'maybe';
    }

    static getFeatureList() {
        let features = {
            mseFlvPlayback: false,
            mseLiveFlvPlayback: false,
            networkStreamIO: false,
            networkLoaderName: '',
            nativeMP4H264Playback: false,
            nativeWebmVP8Playback: false,
            nativeWebmVP9Playback: false
        };

        features.mseFlvPlayback = Features.supportMSEH264Playback();
        features.networkStreamIO = Features.supportNetworkStreamIO();
        features.networkLoaderName = Features.getNetworkLoaderTypeName();
        features.mseLiveFlvPlayback = features.mseFlvPlayback && features.networkStreamIO;
        features.nativeMP4H264Playback = Features.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"');
        features.nativeWebmVP8Playback = Features.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"');
        features.nativeWebmVP9Playback = Features.supportNativeMediaPlayback('video/webm; codecs="vp9"');

        return features;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Features);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mse_events_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_segment_info_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








// Media Source Extensions controller
class MSEController {

    constructor(config) {
        this.TAG = 'MSEController';

        this._config = config;
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

        if (this._config.isLive && this._config.autoCleanupSourceBuffer == undefined) {
            // For live stream, do auto cleanup by default
            this._config.autoCleanupSourceBuffer = true;
        }

        this.e = {
            onSourceOpen: this._onSourceOpen.bind(this),
            onSourceEnded: this._onSourceEnded.bind(this),
            onSourceClose: this._onSourceClose.bind(this),
            onSourceBufferError: this._onSourceBufferError.bind(this),
            onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
        };

        this._mediaSource = null;
        this._mediaSourceObjectURL = null;
        this._mediaElement = null;

        this._isBufferFull = false;
        this._hasPendingEos = false;

        this._requireSetMediaDuration = false;
        this._pendingMediaDuration = 0;

        this._pendingSourceBufferInit = [];
        this._mimeTypes = {
            video: null,
            audio: null
        };
        this._sourceBuffers = {
            video: null,
            audio: null
        };
        this._lastInitSegments = {
            video: null,
            audio: null
        };
        this._pendingSegments = {
            video: [],
            audio: []
        };
        this._pendingRemoveRanges = {
            video: [],
            audio: []
        };
        this._idrList = new __WEBPACK_IMPORTED_MODULE_4__media_segment_info_js__["d" /* IDRSampleList */]();
    }

    destroy() {
        if (this._mediaElement || this._mediaSource) {
            this.detachMediaElement();
        }
        this.e = null;
        this._emitter.removeAllListeners();
        this._emitter = null;
    }

    on(event, listener) {
        this._emitter.addListener(event, listener);
    }

    off(event, listener) {
        this._emitter.removeListener(event, listener);
    }

    attachMediaElement(mediaElement) {
        if (this._mediaSource) {
            throw new __WEBPACK_IMPORTED_MODULE_5__utils_exception_js__["d" /* IllegalStateException */]('MediaSource has been attached to an HTMLMediaElement!');
        }
        let ms = this._mediaSource = new window.MediaSource();
        ms.addEventListener('sourceopen', this.e.onSourceOpen);
        ms.addEventListener('sourceended', this.e.onSourceEnded);
        ms.addEventListener('sourceclose', this.e.onSourceClose);

        this._mediaElement = mediaElement;
        this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource);
        mediaElement.src = this._mediaSourceObjectURL;
    }

    detachMediaElement() {
        if (this._mediaSource) {
            let ms = this._mediaSource;
            for (let type in this._sourceBuffers) {
                // pending segments should be discard
                let ps = this._pendingSegments[type];
                ps.splice(0, ps.length);
                this._pendingSegments[type] = null;
                this._pendingRemoveRanges[type] = null;
                this._lastInitSegments[type] = null;

                // remove all sourcebuffers
                let sb = this._sourceBuffers[type];
                if (sb) {
                    if (ms.readyState !== 'closed') {
                        ms.removeSourceBuffer(sb);
                        sb.removeEventListener('error', this.e.onSourceBufferError);
                        sb.removeEventListener('updateend', this.e.onSourceBufferUpdateEnd);
                    }
                    this._mimeTypes[type] = null;
                    this._sourceBuffers[type] = null;
                }
            }
            if (ms.readyState === 'open') {
                try {
                    ms.endOfStream();
                } catch (error) {
                    __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, error.message);
                }
            }
            ms.removeEventListener('sourceopen', this.e.onSourceOpen);
            ms.removeEventListener('sourceended', this.e.onSourceEnded);
            ms.removeEventListener('sourceclose', this.e.onSourceClose);
            this._pendingSourceBufferInit = [];
            this._isBufferFull = false;
            this._idrList.clear();
            this._mediaSource = null;
        }

        if (this._mediaElement) {
            this._mediaElement.src = '';
            this._mediaElement.removeAttribute('src');
            this._mediaElement = null;
        }
        if (this._mediaSourceObjectURL) {
            window.URL.revokeObjectURL(this._mediaSourceObjectURL);
            this._mediaSourceObjectURL = null;
        }
    }

    appendInitSegment(initSegment, deferred) {
        if (!this._mediaSource || this._mediaSource.readyState !== 'open') {
            // sourcebuffer creation requires mediaSource.readyState === 'open'
            // so we defer the sourcebuffer creation, until sourceopen event triggered
            this._pendingSourceBufferInit.push(initSegment);
            // make sure that this InitSegment is in the front of pending segments queue
            this._pendingSegments[initSegment.type].push(initSegment);
            return;
        }

        let is = initSegment;
        let mimeType = `${is.container}`;
        if (is.codec && is.codec.length > 0) {
            mimeType += `;codecs=${is.codec}`;
        }

        let firstInitSegment = false;

        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'Received Initialization Segment, mimeType: ' + mimeType);
        this._lastInitSegments[is.type] = is;

        if (mimeType !== this._mimeTypes[is.type]) {
            if (!this._mimeTypes[is.type]) {  // empty, first chance create sourcebuffer
                firstInitSegment = true;
                try {
                    let sb = this._sourceBuffers[is.type] = this._mediaSource.addSourceBuffer(mimeType);
                    sb.addEventListener('error', this.e.onSourceBufferError);
                    sb.addEventListener('updateend', this.e.onSourceBufferUpdateEnd);
                } catch (error) {
                    __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, error.message);
                    this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__mse_events_js__["a" /* default */].ERROR, {code: error.code, msg: error.message});
                    return;
                }
            } else {
                __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, `Notice: ${is.type} mimeType changed, origin: ${this._mimeTypes[is.type]}, target: ${mimeType}`);
            }
            this._mimeTypes[is.type] = mimeType;
        }

        if (!deferred) {
            // deferred means this InitSegment has been pushed to pendingSegments queue
            this._pendingSegments[is.type].push(is);
        }
        if (!firstInitSegment) {  // append immediately only if init segment in subsequence
            if (this._sourceBuffers[is.type] && !this._sourceBuffers[is.type].updating) {
                this._doAppendSegments();
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].safari && is.container === 'audio/mpeg' && is.mediaDuration > 0) {
            // 'audio/mpeg' track under Safari may cause MediaElement's duration to be NaN
            // Manually correct MediaSource.duration to make progress bar seekable, and report right duration
            this._requireSetMediaDuration = true;
            this._pendingMediaDuration = is.mediaDuration / 1000;  // in seconds
            this._updateMediaSourceDuration();
        }
    }

    appendMediaSegment(mediaSegment) {
        let ms = mediaSegment;
        this._pendingSegments[ms.type].push(ms);

        if (this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer()) {
            this._doCleanupSourceBuffer();
        }

        let sb = this._sourceBuffers[ms.type];
        if (sb && !sb.updating && !this._hasPendingRemoveRanges()) {
            this._doAppendSegments();
        }
    }

    seek(seconds) {
        // remove all appended buffers
        for (let type in this._sourceBuffers) {
            if (!this._sourceBuffers[type]) {
                continue;
            }

            // abort current buffer append algorithm
            let sb = this._sourceBuffers[type];
            if (this._mediaSource.readyState === 'open') {
                try {
                    // If range removal algorithm is running, InvalidStateError will be throwed
                    // Ignore it.
                    sb.abort();
                } catch (error) {
                    __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, error.message);
                }
            }

            // IDRList should be clear
            this._idrList.clear();

            // pending segments should be discard
            let ps = this._pendingSegments[type];
            ps.splice(0, ps.length);

            if (this._mediaSource.readyState === 'closed') {
                // Parent MediaSource object has been detached from HTMLMediaElement
                continue;
            }

            // record ranges to be remove from SourceBuffer
            for (let i = 0; i < sb.buffered.length; i++) {
                let start = sb.buffered.start(i);
                let end = sb.buffered.end(i);
                this._pendingRemoveRanges[type].push({start, end});
            }

            // if sb is not updating, let's remove ranges now!
            if (!sb.updating) {
                this._doRemoveRanges();
            }

            // Safari 10 may get InvalidStateError in the later appendBuffer() after SourceBuffer.remove() call
            // Internal parser's state may be invalid at this time. Re-append last InitSegment to workaround.
            // Related issue: https://bugs.webkit.org/show_bug.cgi?id=159230
            if (__WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].safari) {
                let lastInitSegment = this._lastInitSegments[type];
                if (lastInitSegment) {
                    this._pendingSegments[type].push(lastInitSegment);
                    if (!sb.updating) {
                        this._doAppendSegments();
                    }
                }
            }
        }
    }

    endOfStream() {
        let ms = this._mediaSource;
        let sb = this._sourceBuffers;
        if (!ms || ms.readyState !== 'open') {
            if (ms && ms.readyState === 'closed' && this._hasPendingSegments()) {
                // If MediaSource hasn't turned into open state, and there're pending segments
                // Mark pending endOfStream, defer call until all pending segments appended complete
                this._hasPendingEos = true;
            }
            return;
        }
        if (sb.video && sb.video.updating || sb.audio && sb.audio.updating) {
            // If any sourcebuffer is updating, defer endOfStream operation
            // See _onSourceBufferUpdateEnd()
            this._hasPendingEos = true;
        } else {
            this._hasPendingEos = false;
            // Notify media data loading complete
            // This is helpful for correcting total duration to match last media segment
            // Otherwise MediaElement's ended event may not be triggered
            ms.endOfStream();
        }
    }

    getNearestKeyframe(dts) {
        return this._idrList.getLastSyncPointBeforeDts(dts);
    }

    _needCleanupSourceBuffer() {
        if (!this._config.autoCleanupSourceBuffer) {
            return false;
        }

        let currentTime = this._mediaElement.currentTime;

        for (let type in this._sourceBuffers) {
            let sb = this._sourceBuffers[type];
            if (sb) {
                let buffered = sb.buffered;
                if (buffered.length >= 1) {
                    if (currentTime - buffered.start(0) >= this._config.autoCleanupMaxBackwardDuration) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    _doCleanupSourceBuffer() {
        let currentTime = this._mediaElement.currentTime;

        for (let type in this._sourceBuffers) {
            let sb = this._sourceBuffers[type];
            if (sb) {
                let buffered = sb.buffered;
                let doRemove = false;

                for (let i = 0; i < buffered.length; i++) {
                    let start = buffered.start(i);
                    let end = buffered.end(i);

                    if (start <= currentTime && currentTime < end + 3) {  // padding 3 seconds
                        if (currentTime - start >= this._config.autoCleanupMaxBackwardDuration) {
                            doRemove = true;
                            let removeEnd = currentTime - this._config.autoCleanupMinBackwardDuration;
                            this._pendingRemoveRanges[type].push({start: start, end: removeEnd});
                        }
                    } else if (end < currentTime) {
                        doRemove = true;
                        this._pendingRemoveRanges[type].push({start: start, end: end});
                    }
                }

                if (doRemove && !sb.updating) {
                    this._doRemoveRanges();
                }
            }
        }
    }

    _updateMediaSourceDuration() {
        let sb = this._sourceBuffers;
        if (this._mediaElement.readyState === 0 || this._mediaSource.readyState !== 'open') {
            return;
        }
        if ((sb.video && sb.video.updating) || (sb.audio && sb.audio.updating)) {
            return;
        }

        let current = this._mediaSource.duration;
        let target = this._pendingMediaDuration;

        if (target > 0 && (isNaN(current) || target > current)) {
            __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, `Update MediaSource duration from ${current} to ${target}`);
            this._mediaSource.duration = target;
        }

        this._requireSetMediaDuration = false;
        this._pendingMediaDuration = 0;
    }

    _doRemoveRanges() {
        for (let type in this._pendingRemoveRanges) {
            if (!this._sourceBuffers[type] || this._sourceBuffers[type].updating) {
                continue;
            }
            let sb = this._sourceBuffers[type];
            let ranges = this._pendingRemoveRanges[type];
            while (ranges.length && !sb.updating) {
                let range = ranges.shift();
                sb.remove(range.start, range.end);
            }
        }
    }

    _doAppendSegments() {
        let pendingSegments = this._pendingSegments;

        for (let type in pendingSegments) {
            if (!this._sourceBuffers[type] || this._sourceBuffers[type].updating) {
                continue;
            }

            if (pendingSegments[type].length > 0) {
                let segment = pendingSegments[type].shift();

                if (segment.timestampOffset) {
                    // For MPEG audio stream in MSE, if unbuffered-seeking occurred
                    // We need explicitly set timestampOffset to the desired point in timeline for mpeg SourceBuffer.
                    let currentOffset = this._sourceBuffers[type].timestampOffset;
                    let targetOffset = segment.timestampOffset / 1000;  // in seconds

                    let delta = Math.abs(currentOffset - targetOffset);
                    if (delta > 0.1) {  // If time delta > 100ms
                        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, `Update MPEG audio timestampOffset from ${currentOffset} to ${targetOffset}`);
                        this._sourceBuffers[type].timestampOffset = targetOffset;
                    }
                    delete segment.timestampOffset;
                }

                if (!segment.data || segment.data.byteLength === 0) {
                    // Ignore empty buffer
                    continue;
                }

                try {
                    this._sourceBuffers[type].appendBuffer(segment.data);
                    this._isBufferFull = false;
                    if (type === 'video' && segment.hasOwnProperty('info')) {
                        this._idrList.appendArray(segment.info.syncPoints);
                    }
                } catch (error) {
                    this._pendingSegments[type].unshift(segment);
                    if (error.code === 22) {  // QuotaExceededError
                        /* Notice that FireFox may not throw QuotaExceededError if SourceBuffer is full
                         * Currently we can only do lazy-load to avoid SourceBuffer become scattered.
                         * SourceBuffer eviction policy may be changed in future version of FireFox.
                         *
                         * Related issues:
                         * https://bugzilla.mozilla.org/show_bug.cgi?id=1279885
                         * https://bugzilla.mozilla.org/show_bug.cgi?id=1280023
                         */

                        // report buffer full, abort network IO
                        if (!this._isBufferFull) {
                            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__mse_events_js__["a" /* default */].BUFFER_FULL);
                        }
                        this._isBufferFull = true;
                    } else {
                        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, error.message);
                        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__mse_events_js__["a" /* default */].ERROR, {code: error.code, msg: error.message});
                    }
                }
            }
        }
    }

    _onSourceOpen() {
        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'MediaSource onSourceOpen');
        this._mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen);
        // deferred sourcebuffer creation / initialization
        if (this._pendingSourceBufferInit.length > 0) {
            let pendings = this._pendingSourceBufferInit;
            while (pendings.length) {
                let segment = pendings.shift();
                this.appendInitSegment(segment, true);
            }
        }
        // there may be some pending media segments, append them
        if (this._hasPendingSegments()) {
            this._doAppendSegments();
        }
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__mse_events_js__["a" /* default */].SOURCE_OPEN);
    }

    _onSourceEnded() {
        // fired on endOfStream
        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'MediaSource onSourceEnded');
    }

    _onSourceClose() {
        // fired on detaching from media element
        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'MediaSource onSourceClose');
        if (this._mediaSource && this.e != null) {
            this._mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen);
            this._mediaSource.removeEventListener('sourceended', this.e.onSourceEnded);
            this._mediaSource.removeEventListener('sourceclose', this.e.onSourceClose);
        }
    }

    _hasPendingSegments() {
        let ps = this._pendingSegments;
        return ps.video.length > 0 || ps.audio.length > 0;
    }

    _hasPendingRemoveRanges() {
        let prr = this._pendingRemoveRanges;
        return prr.video.length > 0 || prr.audio.length > 0;
    }

    _onSourceBufferUpdateEnd() {
        if (this._requireSetMediaDuration) {
            this._updateMediaSourceDuration();
        } else if (this._hasPendingRemoveRanges()) {
            this._doRemoveRanges();
        } else if (this._hasPendingSegments()) {
            this._doAppendSegments();
        } else if (this._hasPendingEos) {
            this.endOfStream();
        }
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__mse_events_js__["a" /* default */].UPDATE_END);
    }

    _onSourceBufferError(e) {
        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, `SourceBuffer Error: ${e}`);
        // this error might not always be fatal, just ignore it
    }

}

/* harmony default export */ __webpack_exports__["a"] = (MSEController);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_logging_control_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transmuxing_controller_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transmuxing_worker_js__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_info_js__ = __webpack_require__(105);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









class Transmuxer {

    constructor(mediaDataSource, config) {
        this.TAG = 'Transmuxer';
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

        if (config.enableWorker && typeof (Worker) !== 'undefined') {
            try {
                let work = __webpack_require__(158);
                this._worker = work(__WEBPACK_IMPORTED_MODULE_5__transmuxing_worker_js__["a" /* default */]);
                this._workerDestroying = false;
                this._worker.addEventListener('message', this._onWorkerMessage.bind(this));
                this._worker.postMessage({cmd: 'init', param: [mediaDataSource, config]});
                this.e = {
                    onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
                };
                __WEBPACK_IMPORTED_MODULE_2__utils_logging_control_js__["a" /* default */].registerListener(this.e.onLoggingConfigChanged);
                this._worker.postMessage({cmd: 'logging_config', param: __WEBPACK_IMPORTED_MODULE_2__utils_logging_control_js__["a" /* default */].getConfig()});
            } catch (error) {
                __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].e(this.TAG, 'Error while initialize transmuxing worker, fallback to inline transmuxing');
                this._worker = null;
                this._controller = new __WEBPACK_IMPORTED_MODULE_3__transmuxing_controller_js__["a" /* default */](mediaDataSource, config);
            }
        } else {
            this._controller = new __WEBPACK_IMPORTED_MODULE_3__transmuxing_controller_js__["a" /* default */](mediaDataSource, config);
        }

        if (this._controller) {
            let ctl = this._controller;
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].IO_ERROR, this._onIOError.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].DEMUX_ERROR, this._onDemuxError.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].INIT_SEGMENT, this._onInitSegment.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_SEGMENT, this._onMediaSegment.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].LOADING_COMPLETE, this._onLoadingComplete.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_INFO, this._onMediaInfo.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].STATISTICS_INFO, this._onStatisticsInfo.bind(this));
            ctl.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
        }
    }

    destroy() {
        if (this._worker) {
            if (!this._workerDestroying) {
                this._workerDestroying = true;
                this._worker.postMessage({cmd: 'destroy'});
                __WEBPACK_IMPORTED_MODULE_2__utils_logging_control_js__["a" /* default */].removeListener(this.e.onLoggingConfigChanged);
                this.e = null;
            }
        } else {
            this._controller.destroy();
            this._controller = null;
        }
        this._emitter.removeAllListeners();
        this._emitter = null;
    }

    on(event, listener) {
        this._emitter.addListener(event, listener);
    }

    off(event, listener) {
        this._emitter.removeListener(event, listener);
    }

    hasWorker() {
        return this._worker != null;
    }

    open() {
        if (this._worker) {
            this._worker.postMessage({cmd: 'start'});
        } else {
            this._controller.start();
        }
    }

    close() {
        if (this._worker) {
            this._worker.postMessage({cmd: 'stop'});
        } else {
            this._controller.stop();
        }
    }

    seek(milliseconds) {
        if (this._worker) {
            this._worker.postMessage({cmd: 'seek', param: milliseconds});
        } else {
            this._controller.seek(milliseconds);
        }
    }

    pause() {
        if (this._worker) {
            this._worker.postMessage({cmd: 'pause'});
        } else {
            this._controller.pause();
        }
    }

    resume() {
        if (this._worker) {
            this._worker.postMessage({cmd: 'resume'});
        } else {
            this._controller.resume();
        }
    }

    _onInitSegment(type, initSegment) {
        // do async invoke
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].INIT_SEGMENT, type, initSegment);
        });
    }

    _onMediaSegment(type, mediaSegment) {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_SEGMENT, type, mediaSegment);
        });
    }

    _onLoadingComplete() {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].LOADING_COMPLETE);
        });
    }

    _onRecoveredEarlyEof() {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOVERED_EARLY_EOF);
        });
    }

    _onMediaInfo(mediaInfo) {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_INFO, mediaInfo);
        });
    }

    _onStatisticsInfo(statisticsInfo) {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].STATISTICS_INFO, statisticsInfo);
        });
    }

    _onIOError(type, info) {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].IO_ERROR, type, info);
        });
    }

    _onDemuxError(type, info) {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].DEMUX_ERROR, type, info);
        });
    }

    _onRecommendSeekpoint(milliseconds) {
        Promise.resolve().then(() => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOMMEND_SEEKPOINT, milliseconds);
        });
    }

    _onLoggingConfigChanged(config) {
        if (this._worker) {
            this._worker.postMessage({cmd: 'logging_config', param: config});
        }
    }

    _onWorkerMessage(e) {
        let message = e.data;
        let data = message.data;

        if (message.msg === 'destroyed' || this._workerDestroying) {
            this._workerDestroying = false;
            this._worker.terminate();
            this._worker = null;
            return;
        }

        switch (message.msg) {
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].INIT_SEGMENT:
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_SEGMENT:
                this._emitter.emit(message.msg, data.type, data.data);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].LOADING_COMPLETE:
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOVERED_EARLY_EOF:
                this._emitter.emit(message.msg);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_INFO:
                Object.setPrototypeOf(data, __WEBPACK_IMPORTED_MODULE_6__media_info_js__["a" /* default */].prototype);
                this._emitter.emit(message.msg, data);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].STATISTICS_INFO:
                this._emitter.emit(message.msg, data);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].IO_ERROR:
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].DEMUX_ERROR:
                this._emitter.emit(message.msg, data.type, data.info);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOMMEND_SEEKPOINT:
                this._emitter.emit(message.msg, data);
                break;
            case 'logcat_callback':
                __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].emitter.emit('log', data.type, data.logcat);
                break;
            default:
                break;
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Transmuxer);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_logging_control_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_polyfill_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transmuxing_controller_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__ = __webpack_require__(103);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/* post message to worker:
   data: {
       cmd: string
       param: any
   }

   receive message from worker:
   data: {
       msg: string,
       data: any
   }
 */

let TransmuxingWorker = function (self) {

    let TAG = 'TransmuxingWorker';
    let controller = null;
    let logcatListener = onLogcatCallback.bind(this);

    __WEBPACK_IMPORTED_MODULE_2__utils_polyfill_js__["a" /* default */].install();

    self.addEventListener('message', function (e) {
        switch (e.data.cmd) {
            case 'init':
                controller = new __WEBPACK_IMPORTED_MODULE_3__transmuxing_controller_js__["a" /* default */](e.data.param[0], e.data.param[1]);
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].IO_ERROR, onIOError.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].DEMUX_ERROR, onDemuxError.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].INIT_SEGMENT, onInitSegment.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_SEGMENT, onMediaSegment.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].LOADING_COMPLETE, onLoadingComplete.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOVERED_EARLY_EOF, onRecoveredEarlyEof.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_INFO, onMediaInfo.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].STATISTICS_INFO, onStatisticsInfo.bind(this));
                controller.on(__WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOMMEND_SEEKPOINT, onRecommendSeekpoint.bind(this));
                break;
            case 'destroy':
                if (controller) {
                    controller.destroy();
                    controller = null;
                }
                self.postMessage({msg: 'destroyed'});
                break;
            case 'start':
                controller.start();
                break;
            case 'stop':
                controller.stop();
                break;
            case 'seek':
                controller.seek(e.data.param);
                break;
            case 'pause':
                controller.pause();
                break;
            case 'resume':
                controller.resume();
                break;
            case 'logging_config': {
                let config = e.data.param;
                __WEBPACK_IMPORTED_MODULE_1__utils_logging_control_js__["a" /* default */].applyConfig(config);

                if (config.enableCallback === true) {
                    __WEBPACK_IMPORTED_MODULE_1__utils_logging_control_js__["a" /* default */].addLogListener(logcatListener);
                } else {
                    __WEBPACK_IMPORTED_MODULE_1__utils_logging_control_js__["a" /* default */].removeLogListener(logcatListener);
                }
                break;
            }
        }
    });

    function onInitSegment(type, initSegment) {
        let obj = {
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].INIT_SEGMENT,
            data: {
                type: type,
                data: initSegment
            }
        };
        self.postMessage(obj, [initSegment.data]);  // data: ArrayBuffer
    }

    function onMediaSegment(type, mediaSegment) {
        let obj = {
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_SEGMENT,
            data: {
                type: type,
                data: mediaSegment
            }
        };
        self.postMessage(obj, [mediaSegment.data]);  // data: ArrayBuffer
    }

    function onLoadingComplete() {
        let obj = {
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].LOADING_COMPLETE
        };
        self.postMessage(obj);
    }

    function onRecoveredEarlyEof() {
        let obj = {
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOVERED_EARLY_EOF
        };
        self.postMessage(obj);
    }

    function onMediaInfo(mediaInfo) {
        let obj = {
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].MEDIA_INFO,
            data: mediaInfo
        };
        self.postMessage(obj);
    }

    function onStatisticsInfo(statInfo) {
        let obj = {
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].STATISTICS_INFO,
            data: statInfo
        };
        self.postMessage(obj);
    }

    function onIOError(type, info) {
        self.postMessage({
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].IO_ERROR,
            data: {
                type: type,
                info: info
            }
        });
    }

    function onDemuxError(type, info) {
        self.postMessage({
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].DEMUX_ERROR,
            data: {
                type: type,
                info: info
            }
        });
    }

    function onRecommendSeekpoint(milliseconds) {
        self.postMessage({
            msg: __WEBPACK_IMPORTED_MODULE_4__transmuxing_events_js__["a" /* default */].RECOMMEND_SEEKPOINT,
            data: milliseconds
        });
    }

    function onLogcatCallback(type, str) {
        self.postMessage({
            msg: 'logcat_callback',
            data: {
                type: type,
                logcat: str
            }
        });
    }

};

/* harmony default export */ __webpack_exports__["a"] = (TransmuxingWorker);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utf8_conv_js__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





let le = (function () {
    let buf = new ArrayBuffer(2);
    (new DataView(buf)).setInt16(0, 256, true);  // little-endian write
    return (new Int16Array(buf))[0] === 256;  // platform-spec read, if equal then LE
})();

class AMF {

    static parseScriptData(arrayBuffer, dataOffset, dataSize) {
        let data = {};

        try {
            let name = AMF.parseValue(arrayBuffer, dataOffset, dataSize);
            let value = AMF.parseValue(arrayBuffer, dataOffset + name.size, dataSize - name.size);

            data[name.data] = value.data;
        } catch (e) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].e('AMF', e.toString());
        }

        return data;
    }

    static parseObject(arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 3) {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["d" /* IllegalStateException */]('Data not enough when parse ScriptDataObject');
        }
        let name = AMF.parseString(arrayBuffer, dataOffset, dataSize);
        let value = AMF.parseValue(arrayBuffer, dataOffset + name.size, dataSize - name.size);
        let isObjectEnd = value.objectEnd;

        return {
            data: {
                name: name.data,
                value: value.data
            },
            size: name.size + value.size,
            objectEnd: isObjectEnd
        };
    }

    static parseVariable(arrayBuffer, dataOffset, dataSize) {
        return AMF.parseObject(arrayBuffer, dataOffset, dataSize);
    }

    static parseString(arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 2) {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["d" /* IllegalStateException */]('Data not enough when parse String');
        }
        let v = new DataView(arrayBuffer, dataOffset, dataSize);
        let length = v.getUint16(0, !le);

        let str;
        if (length > 0) {
            str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utf8_conv_js__["a" /* default */])(new Uint8Array(arrayBuffer, dataOffset + 2, length));
        } else {
            str = '';
        }

        return {
            data: str,
            size: 2 + length
        };
    }

    static parseLongString(arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 4) {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["d" /* IllegalStateException */]('Data not enough when parse LongString');
        }
        let v = new DataView(arrayBuffer, dataOffset, dataSize);
        let length = v.getUint32(0, !le);

        let str;
        if (length > 0) {
            str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_utf8_conv_js__["a" /* default */])(new Uint8Array(arrayBuffer, dataOffset + 4, length));
        } else {
            str = '';
        }

        return {
            data: str,
            size: 4 + length
        };
    }

    static parseDate(arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 10) {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["d" /* IllegalStateException */]('Data size invalid when parse Date');
        }
        let v = new DataView(arrayBuffer, dataOffset, dataSize);
        let timestamp = v.getFloat64(0, !le);
        let localTimeOffset = v.getInt16(8, !le);
        timestamp += localTimeOffset * 60 * 1000;  // get UTC time

        return {
            data: new Date(timestamp),
            size: 8 + 2
        };
    }

    static parseValue(arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 1) {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["d" /* IllegalStateException */]('Data not enough when parse Value');
        }

        let v = new DataView(arrayBuffer, dataOffset, dataSize);

        let offset = 1;
        let type = v.getUint8(0);
        let value;
        let objectEnd = false;

        try {
            switch (type) {
                case 0:  // Number(Double) type
                    value = v.getFloat64(1, !le);
                    offset += 8;
                    break;
                case 1: {  // Boolean type
                    let b = v.getUint8(1);
                    value = b ? true : false;
                    offset += 1;
                    break;
                }
                case 2: {  // String type
                    let amfstr = AMF.parseString(arrayBuffer, dataOffset + 1, dataSize - 1);
                    value = amfstr.data;
                    offset += amfstr.size;
                    break;
                }
                case 3: { // Object(s) type
                    value = {};
                    let terminal = 0;  // workaround for malformed Objects which has missing ScriptDataObjectEnd
                    if ((v.getUint32(dataSize - 4, !le) & 0x00FFFFFF) === 9) {
                        terminal = 3;
                    }
                    while (offset < dataSize - 4) {  // 4 === type(UI8) + ScriptDataObjectEnd(UI24)
                        let amfobj = AMF.parseObject(arrayBuffer, dataOffset + offset, dataSize - offset - terminal);
                        if (amfobj.objectEnd)
                            break;
                        value[amfobj.data.name] = amfobj.data.value;
                        offset += amfobj.size;
                    }
                    if (offset <= dataSize - 3) {
                        let marker = v.getUint32(offset - 1, !le) & 0x00FFFFFF;
                        if (marker === 9) {
                            offset += 3;
                        }
                    }
                    break;
                }
                case 8: { // ECMA array type (Mixed array)
                    value = {};
                    offset += 4;  // ECMAArrayLength(UI32)
                    let terminal = 0;  // workaround for malformed MixedArrays which has missing ScriptDataObjectEnd
                    if ((v.getUint32(dataSize - 4, !le) & 0x00FFFFFF) === 9) {
                        terminal = 3;
                    }
                    while (offset < dataSize - 8) {  // 8 === type(UI8) + ECMAArrayLength(UI32) + ScriptDataVariableEnd(UI24)
                        let amfvar = AMF.parseVariable(arrayBuffer, dataOffset + offset, dataSize - offset - terminal);
                        if (amfvar.objectEnd)
                            break;
                        value[amfvar.data.name] = amfvar.data.value;
                        offset += amfvar.size;
                    }
                    if (offset <= dataSize - 3) {
                        let marker = v.getUint32(offset - 1, !le) & 0x00FFFFFF;
                        if (marker === 9) {
                            offset += 3;
                        }
                    }
                    break;
                }
                case 9:  // ScriptDataObjectEnd
                    value = undefined;
                    offset = 1;
                    objectEnd = true;
                    break;
                case 10: {  // Strict array type
                    // ScriptDataValue[n]. NOTE: according to video_file_format_spec_v10_1.pdf
                    value = [];
                    let strictArrayLength = v.getUint32(1, !le);
                    offset += 4;
                    for (let i = 0; i < strictArrayLength; i++) {
                        let val = AMF.parseValue(arrayBuffer, dataOffset + offset, dataSize - offset);
                        value.push(val.data);
                        offset += val.size;
                    }
                    break;
                }
                case 11: {  // Date type
                    let date = AMF.parseDate(arrayBuffer, dataOffset + 1, dataSize - 1);
                    value = date.data;
                    offset += date.size;
                    break;
                }
                case 12: {  // Long string type
                    let amfLongStr = AMF.parseString(arrayBuffer, dataOffset + 1, dataSize - 1);
                    value = amfLongStr.data;
                    offset += amfLongStr.size;
                    break;
                }
                default:
                    // ignore and skip
                    offset = dataSize;
                    __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w('AMF', 'Unsupported AMF value type ' + type);
            }
        } catch (e) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].e('AMF', e.toString());
        }

        return {
            data: value,
            size: offset,
            objectEnd: objectEnd
        };
    }

}

/* harmony default export */ __webpack_exports__["a"] = (AMF);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



// Exponential-Golomb buffer decoder
class ExpGolomb {

    constructor(uint8array) {
        this.TAG = 'ExpGolomb';

        this._buffer = uint8array;
        this._buffer_index = 0;
        this._total_bytes = uint8array.byteLength;
        this._total_bits = uint8array.byteLength * 8;
        this._current_word = 0;
        this._current_word_bits_left = 0;
    }

    destroy() {
        this._buffer = null;
    }

    _fillCurrentWord() {
        let buffer_bytes_left = this._total_bytes - this._buffer_index;
        if (buffer_bytes_left <= 0)
            throw new __WEBPACK_IMPORTED_MODULE_0__utils_exception_js__["d" /* IllegalStateException */]('ExpGolomb: _fillCurrentWord() but no bytes available');

        let bytes_read = Math.min(4, buffer_bytes_left);
        let word = new Uint8Array(4);
        word.set(this._buffer.subarray(this._buffer_index, this._buffer_index + bytes_read));
        this._current_word = new DataView(word.buffer).getUint32(0, false);

        this._buffer_index += bytes_read;
        this._current_word_bits_left = bytes_read * 8;
    }

    readBits(bits) {
        if (bits > 32)
            throw new __WEBPACK_IMPORTED_MODULE_0__utils_exception_js__["a" /* InvalidArgumentException */]('ExpGolomb: readBits() bits exceeded max 32bits!');

        if (bits <= this._current_word_bits_left) {
            let result = this._current_word >>> (32 - bits);
            this._current_word <<= bits;
            this._current_word_bits_left -= bits;
            return result;
        }

        let result = this._current_word_bits_left ? this._current_word : 0;
        result = result >>> (32 - this._current_word_bits_left);
        let bits_need_left = bits - this._current_word_bits_left;

        this._fillCurrentWord();
        let bits_read_next = Math.min(bits_need_left, this._current_word_bits_left);

        let result2 = this._current_word >>> (32 - bits_read_next);
        this._current_word <<= bits_read_next;
        this._current_word_bits_left -= bits_read_next;

        result = (result << bits_read_next) | result2;
        return result;
    }

    readBool() {
        return this.readBits(1) === 1;
    }

    readByte() {
        return this.readBits(8);
    }

    _skipLeadingZero() {
        let zero_count;
        for (zero_count = 0; zero_count < this._current_word_bits_left; zero_count++) {
            if (0 !== (this._current_word & (0x80000000 >>> zero_count))) {
                this._current_word <<= zero_count;
                this._current_word_bits_left -= zero_count;
                return zero_count;
            }
        }
        this._fillCurrentWord();
        return zero_count + this._skipLeadingZero();
    }

    readUEG() {  // unsigned exponential golomb
        let leading_zeros = this._skipLeadingZero();
        return this.readBits(leading_zeros + 1) - 1;
    }

    readSEG() {  // signed exponential golomb
        let value = this.readUEG();
        if (value & 0x01) {
            return (value + 1) >>> 1;
        } else {
            return -1 * (value >>> 1);
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (ExpGolomb);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amf_parser_js__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sps_parser_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demux_errors_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_media_info_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








function Swap16(src) {
    return (((src >>> 8) & 0xFF) |
            ((src & 0xFF) << 8));
}

function Swap32(src) {
    return (((src & 0xFF000000) >>> 24) |
            ((src & 0x00FF0000) >>> 8)  |
            ((src & 0x0000FF00) << 8)   |
            ((src & 0x000000FF) << 24));
}

function ReadBig32(array, index) {
    return ((array[index] << 24)     |
            (array[index + 1] << 16) |
            (array[index + 2] << 8)  |
            (array[index + 3]));
}


class FLVDemuxer {

    constructor(probeData, config) {
        this.TAG = 'FLVDemuxer';

        this._config = config;

        this._onError = null;
        this._onMediaInfo = null;
        this._onTrackMetadata = null;
        this._onDataAvailable = null;

        this._dataOffset = probeData.dataOffset;
        this._firstParse = true;
        this._dispatch = false;

        this._hasAudio = probeData.hasAudioTrack;
        this._hasVideo = probeData.hasVideoTrack;

        this._hasAudioFlagOverrided = false;
        this._hasVideoFlagOverrided = false;

        this._audioInitialMetadataDispatched = false;
        this._videoInitialMetadataDispatched = false;

        this._mediaInfo = new __WEBPACK_IMPORTED_MODULE_4__core_media_info_js__["a" /* default */]();
        this._mediaInfo.hasAudio = this._hasAudio;
        this._mediaInfo.hasVideo = this._hasVideo;
        this._metadata = null;
        this._audioMetadata = null;
        this._videoMetadata = null;

        this._naluLengthSize = 4;
        this._timestampBase = 0;  // int32, in milliseconds
        this._timescale = 1000;
        this._duration = 0;  // int32, in milliseconds
        this._durationOverrided = false;
        this._referenceFrameRate = {
            fixed: true,
            fps: 23.976,
            fps_num: 23976,
            fps_den: 1000
        };

        this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48000];

        this._mpegSamplingRates = [
            96000, 88200, 64000, 48000, 44100, 32000,
            24000, 22050, 16000, 12000, 11025, 8000, 7350
        ];

        this._mpegAudioV10SampleRateTable = [44100, 48000, 32000, 0];
        this._mpegAudioV20SampleRateTable = [22050, 24000, 16000, 0];
        this._mpegAudioV25SampleRateTable = [11025, 12000, 8000,  0];

        this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1];
        this._mpegAudioL2BitRateTable = [0, 32, 48, 56,  64,  80,  96, 112, 128, 160, 192, 224, 256, 320, 384, -1];
        this._mpegAudioL3BitRateTable = [0, 32, 40, 48,  56,  64,  80,  96, 112, 128, 160, 192, 224, 256, 320, -1];

        this._videoTrack = {type: 'video', id: 1, sequenceNumber: 0, samples: [], length: 0};
        this._audioTrack = {type: 'audio', id: 2, sequenceNumber: 0, samples: [], length: 0};

        this._littleEndian = (function () {
            let buf = new ArrayBuffer(2);
            (new DataView(buf)).setInt16(0, 256, true);  // little-endian write
            return (new Int16Array(buf))[0] === 256;  // platform-spec read, if equal then LE
        })();
    }

    destroy() {
        this._mediaInfo = null;
        this._metadata = null;
        this._audioMetadata = null;
        this._videoMetadata = null;
        this._videoTrack = null;
        this._audioTrack = null;

        this._onError = null;
        this._onMediaInfo = null;
        this._onTrackMetadata = null;
        this._onDataAvailable = null;
    }

    static probe(buffer) {
        let data = new Uint8Array(buffer);
        let mismatch = {match: false};

        if (data[0] !== 0x46 || data[1] !== 0x4C || data[2] !== 0x56 || data[3] !== 0x01) {
            return mismatch;
        }

        let hasAudio = ((data[4] & 4) >>> 2) !== 0;
        let hasVideo = (data[4] & 1) !== 0;

        let offset = ReadBig32(data, 5);

        if (offset < 9) {
            return mismatch;
        }

        return {
            match: true,
            consumed: offset,
            dataOffset: offset,
            hasAudioTrack: hasAudio,
            hasVideoTrack: hasVideo
        };
    }

    bindDataSource(loader) {
        loader.onDataArrival = this.parseChunks.bind(this);
        return this;
    }

    // prototype: function(type: string, metadata: any): void
    get onTrackMetadata() {
        return this._onTrackMetadata;
    }

    set onTrackMetadata(callback) {
        this._onTrackMetadata = callback;
    }

    // prototype: function(mediaInfo: MediaInfo): void
    get onMediaInfo() {
        return this._onMediaInfo;
    }

    set onMediaInfo(callback) {
        this._onMediaInfo = callback;
    }

    // prototype: function(type: number, info: string): void
    get onError() {
        return this._onError;
    }

    set onError(callback) {
        this._onError = callback;
    }

    // prototype: function(videoTrack: any, audioTrack: any): void
    get onDataAvailable() {
        return this._onDataAvailable;
    }

    set onDataAvailable(callback) {
        this._onDataAvailable = callback;
    }

    // timestamp base for output samples, must be in milliseconds
    get timestampBase() {
        return this._timestampBase;
    }

    set timestampBase(base) {
        this._timestampBase = base;
    }

    get overridedDuration() {
        return this._duration;
    }

    // Force-override media duration. Must be in milliseconds, int32
    set overridedDuration(duration) {
        this._durationOverrided = true;
        this._duration = duration;
        this._mediaInfo.duration = duration;
    }

    // Force-override audio track present flag, boolean
    set overridedHasAudio(hasAudio) {
        this._hasAudioFlagOverrided = true;
        this._hasAudio = hasAudio;
        this._mediaInfo.hasAudio = hasAudio;
    }

    // Force-override video track present flag, boolean
    set overridedHasVideo(hasVideo) {
        this._hasVideoFlagOverrided = true;
        this._hasVideo = hasVideo;
        this._mediaInfo.hasVideo = hasVideo;
    }

    resetMediaInfo() {
        this._mediaInfo = new __WEBPACK_IMPORTED_MODULE_4__core_media_info_js__["a" /* default */]();
    }

    _isInitialMetadataDispatched() {
        if (this._hasAudio && this._hasVideo) {  // both audio & video
            return this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched;
        }
        if (this._hasAudio && !this._hasVideo) {  // audio only
            return this._audioInitialMetadataDispatched;
        }
        if (!this._hasAudio && this._hasVideo) {  // video only
            return this._videoInitialMetadataDispatched;
        }
        return false;
    }

    // function parseChunks(chunk: ArrayBuffer, byteStart: number): number;
    parseChunks(chunk, byteStart) {
        if (!this._onError || !this._onMediaInfo || !this._onTrackMetadata || !this._onDataAvailable) {
            throw new __WEBPACK_IMPORTED_MODULE_5__utils_exception_js__["d" /* IllegalStateException */]('Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified');
        }

        let offset = 0;
        let le = this._littleEndian;

        if (byteStart === 0) {  // buffer with FLV header
            if (chunk.byteLength > 13) {
                let probeData = FLVDemuxer.probe(chunk);
                offset = probeData.dataOffset;
            } else {
                return 0;
            }
        }

        if (this._firstParse) {  // handle PreviousTagSize0 before Tag1
            this._firstParse = false;
            if (byteStart + offset !== this._dataOffset) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'First time parsing but chunk byteStart invalid!');
            }

            let v = new DataView(chunk, offset);
            let prevTagSize0 = v.getUint32(0, !le);
            if (prevTagSize0 !== 0) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'PrevTagSize0 !== 0 !!!');
            }
            offset += 4;
        }

        while (offset < chunk.byteLength) {
            this._dispatch = true;

            let v = new DataView(chunk, offset);

            if (offset + 11 + 4 > chunk.byteLength) {
                // data not enough for parsing an flv tag
                break;
            }

            let tagType = v.getUint8(0);
            let dataSize = v.getUint32(0, !le) & 0x00FFFFFF;

            if (offset + 11 + dataSize + 4 > chunk.byteLength) {
                // data not enough for parsing actual data body
                break;
            }

            if (tagType !== 8 && tagType !== 9 && tagType !== 18) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, `Unsupported tag type ${tagType}, skipped`);
                // consume the whole tag (skip it)
                offset += 11 + dataSize + 4;
                continue;
            }

            let ts2 = v.getUint8(4);
            let ts1 = v.getUint8(5);
            let ts0 = v.getUint8(6);
            let ts3 = v.getUint8(7);

            let timestamp = ts0 | (ts1 << 8) | (ts2 << 16) | (ts3 << 24);

            let streamId = v.getUint32(7, !le) & 0x00FFFFFF;
            if (streamId !== 0) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Meet tag which has StreamID != 0!');
            }

            let dataOffset = offset + 11;

            switch (tagType) {
                case 8:  // Audio
                    this._parseAudioData(chunk, dataOffset, dataSize, timestamp);
                    break;
                case 9:  // Video
                    this._parseVideoData(chunk, dataOffset, dataSize, timestamp, byteStart + offset);
                    break;
                case 18:  // ScriptDataObject
                    this._parseScriptData(chunk, dataOffset, dataSize);
                    break;
            }

            let prevTagSize = v.getUint32(11 + dataSize, !le);
            if (prevTagSize !== 11 + dataSize) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, `Invalid PrevTagSize ${prevTagSize}`);
            }

            offset += 11 + dataSize + 4;  // tagBody + dataSize + prevTagSize
        }

        // dispatch parsed frames to consumer (typically, the remuxer)
        if (this._isInitialMetadataDispatched()) {
            if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                this._onDataAvailable(this._audioTrack, this._videoTrack);
            }
        }

        return offset;  // consumed bytes, just equals latest offset index
    }

    _parseScriptData(arrayBuffer, dataOffset, dataSize) {
        let scriptData = __WEBPACK_IMPORTED_MODULE_1__amf_parser_js__["a" /* default */].parseScriptData(arrayBuffer, dataOffset, dataSize);

        if (scriptData.hasOwnProperty('onMetaData')) {
            if (scriptData.onMetaData == null || typeof scriptData.onMetaData !== 'object') {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Invalid onMetaData structure!');
                return;
            }
            if (this._metadata) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Found another onMetaData tag!');
            }
            this._metadata = scriptData;
            let onMetaData = this._metadata.onMetaData;

            if (typeof onMetaData.hasAudio === 'boolean') {  // hasAudio
                if (this._hasAudioFlagOverrided === false) {
                    this._hasAudio = onMetaData.hasAudio;
                    this._mediaInfo.hasAudio = this._hasAudio;
                }
            }
            if (typeof onMetaData.hasVideo === 'boolean') {  // hasVideo
                if (this._hasVideoFlagOverrided === false) {
                    this._hasVideo = onMetaData.hasVideo;
                    this._mediaInfo.hasVideo = this._hasVideo;
                }
            }
            if (typeof onMetaData.audiodatarate === 'number') {  // audiodatarate
                this._mediaInfo.audioDataRate = onMetaData.audiodatarate;
            }
            if (typeof onMetaData.videodatarate === 'number') {  // videodatarate
                this._mediaInfo.videoDataRate = onMetaData.videodatarate;
            }
            if (typeof onMetaData.width === 'number') {  // width
                this._mediaInfo.width = onMetaData.width;
            }
            if (typeof onMetaData.height === 'number') {  // height
                this._mediaInfo.height = onMetaData.height;
            }
            if (typeof onMetaData.duration === 'number') {  // duration
                if (!this._durationOverrided) {
                    let duration = Math.floor(onMetaData.duration * this._timescale);
                    this._duration = duration;
                    this._mediaInfo.duration = duration;
                }
            } else {
                this._mediaInfo.duration = 0;
            }
            if (typeof onMetaData.framerate === 'number') {  // framerate
                let fps_num = Math.floor(onMetaData.framerate * 1000);
                if (fps_num > 0) {
                    let fps = fps_num / 1000;
                    this._referenceFrameRate.fixed = true;
                    this._referenceFrameRate.fps = fps;
                    this._referenceFrameRate.fps_num = fps_num;
                    this._referenceFrameRate.fps_den = 1000;
                    this._mediaInfo.fps = fps;
                }
            }
            if (typeof onMetaData.keyframes === 'object') {  // keyframes
                this._mediaInfo.hasKeyframesIndex = true;
                let keyframes = onMetaData.keyframes;
                this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(keyframes);
                onMetaData.keyframes = null;  // keyframes has been extracted, remove it
            } else {
                this._mediaInfo.hasKeyframesIndex = false;
            }
            this._dispatch = false;
            this._mediaInfo.metadata = onMetaData;
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].v(this.TAG, 'Parsed onMetaData');
            if (this._mediaInfo.isComplete()) {
                this._onMediaInfo(this._mediaInfo);
            }
        }
    }

    _parseKeyframesIndex(keyframes) {
        let times = [];
        let filepositions = [];

        // ignore first keyframe which is actually AVC Sequence Header (AVCDecoderConfigurationRecord)
        for (let i = 1; i < keyframes.times.length; i++) {
            let time = this._timestampBase + Math.floor(keyframes.times[i] * 1000);
            times.push(time);
            filepositions.push(keyframes.filepositions[i]);
        }

        return {
            times: times,
            filepositions: filepositions
        };
    }

    _parseAudioData(arrayBuffer, dataOffset, dataSize, tagTimestamp) {
        if (dataSize <= 1) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Flv: Invalid audio packet, missing SoundData payload!');
            return;
        }

        if (this._hasAudioFlagOverrided === true && this._hasAudio === false) {
            // If hasAudio: false indicated explicitly in MediaDataSource,
            // Ignore all the audio packets
            return;
        }

        let le = this._littleEndian;
        let v = new DataView(arrayBuffer, dataOffset, dataSize);

        let soundSpec = v.getUint8(0);

        let soundFormat = soundSpec >>> 4;
        if (soundFormat !== 2 && soundFormat !== 10) {  // MP3 or AAC
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].CODEC_UNSUPPORTED, 'Flv: Unsupported audio codec idx: ' + soundFormat);
            return;
        }

        let soundRate = 0;
        let soundRateIndex = (soundSpec & 12) >>> 2;
        if (soundRateIndex >= 0 && soundRateIndex <= 4) {
            soundRate = this._flvSoundRateTable[soundRateIndex];
        } else {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, 'Flv: Invalid audio sample rate idx: ' + soundRateIndex);
            return;
        }

        let soundSize = (soundSpec & 2) >>> 1;  // unused
        let soundType = (soundSpec & 1);


        let meta = this._audioMetadata;
        let track = this._audioTrack;

        if (!meta) {
            if (this._hasAudio === false && this._hasAudioFlagOverrided === false) {
                this._hasAudio = true;
                this._mediaInfo.hasAudio = true;
            }

            // initial metadata
            meta = this._audioMetadata = {};
            meta.type = 'audio';
            meta.id = track.id;
            meta.timescale = this._timescale;
            meta.duration = this._duration;
            meta.audioSampleRate = soundRate;
            meta.channelCount = (soundType === 0 ? 1 : 2);
        }

        if (soundFormat === 10) {  // AAC
            let aacData = this._parseAACAudioData(arrayBuffer, dataOffset + 1, dataSize - 1);
            if (aacData == undefined) {
                return;
            }

            if (aacData.packetType === 0) {  // AAC sequence header (AudioSpecificConfig)
                if (meta.config) {
                    __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Found another AudioSpecificConfig!');
                }
                let misc = aacData.data;
                meta.audioSampleRate = misc.samplingRate;
                meta.channelCount = misc.channelCount;
                meta.codec = misc.codec;
                meta.originalCodec = misc.originalCodec;
                meta.config = misc.config;
                // The decode result of an aac sample is 1024 PCM samples
                meta.refSampleDuration = 1024 / meta.audioSampleRate * meta.timescale;
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].v(this.TAG, 'Parsed AudioSpecificConfig');

                if (this._isInitialMetadataDispatched()) {
                    // Non-initial metadata, force dispatch (or flush) parsed frames to remuxer
                    if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                        this._onDataAvailable(this._audioTrack, this._videoTrack);
                    }
                } else {
                    this._audioInitialMetadataDispatched = true;
                }
                // then notify new metadata
                this._dispatch = false;
                this._onTrackMetadata('audio', meta);

                let mi = this._mediaInfo;
                mi.audioCodec = meta.originalCodec;
                mi.audioSampleRate = meta.audioSampleRate;
                mi.audioChannelCount = meta.channelCount;
                if (mi.hasVideo) {
                    if (mi.videoCodec != null) {
                        mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + ',' + mi.audioCodec + '"';
                    }
                } else {
                    mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
                }
                if (mi.isComplete()) {
                    this._onMediaInfo(mi);
                }
            } else if (aacData.packetType === 1) {  // AAC raw frame data
                let dts = this._timestampBase + tagTimestamp;
                let aacSample = {unit: aacData.data, dts: dts, pts: dts};
                track.samples.push(aacSample);
                track.length += aacData.data.length;
            } else {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].e(this.TAG, `Flv: Unsupported AAC data type ${aacData.packetType}`);
            }
        } else if (soundFormat === 2) {  // MP3
            if (!meta.codec) {
                // We need metadata for mp3 audio track, extract info from frame header
                let misc = this._parseMP3AudioData(arrayBuffer, dataOffset + 1, dataSize - 1, true);
                if (misc == undefined) {
                    return;
                }
                meta.audioSampleRate = misc.samplingRate;
                meta.channelCount = misc.channelCount;
                meta.codec = misc.codec;
                meta.originalCodec = misc.originalCodec;
                // The decode result of an mp3 sample is 1152 PCM samples
                meta.refSampleDuration = 1152 / meta.audioSampleRate * meta.timescale;
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].v(this.TAG, 'Parsed MPEG Audio Frame Header');

                this._audioInitialMetadataDispatched = true;
                this._onTrackMetadata('audio', meta);

                let mi = this._mediaInfo;
                mi.audioCodec = meta.codec;
                mi.audioSampleRate = meta.audioSampleRate;
                mi.audioChannelCount = meta.channelCount;
                mi.audioDataRate = misc.bitRate;
                if (mi.hasVideo) {
                    if (mi.videoCodec != null) {
                        mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + ',' + mi.audioCodec + '"';
                    }
                } else {
                    mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
                }
                if (mi.isComplete()) {
                    this._onMediaInfo(mi);
                }
            }

            // This packet is always a valid audio packet, extract it
            let data = this._parseMP3AudioData(arrayBuffer, dataOffset + 1, dataSize - 1, false);
            if (data == undefined) {
                return;
            }
            let dts = this._timestampBase + tagTimestamp;
            let mp3Sample = {unit: data, dts: dts, pts: dts};
            track.samples.push(mp3Sample);
            track.length += data.length;
        }
    }

    _parseAACAudioData(arrayBuffer, dataOffset, dataSize) {
        if (dataSize <= 1) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Flv: Invalid AAC packet, missing AACPacketType or/and Data!');
            return;
        }

        let result = {};
        let array = new Uint8Array(arrayBuffer, dataOffset, dataSize);

        result.packetType = array[0];

        if (array[0] === 0) {
            result.data = this._parseAACAudioSpecificConfig(arrayBuffer, dataOffset + 1, dataSize - 1);
        } else {
            result.data = array.subarray(1);
        }

        return result;
    }

    _parseAACAudioSpecificConfig(arrayBuffer, dataOffset, dataSize) {
        let array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
        let config = null;

        /* Audio Object Type:
           0: Null
           1: AAC Main
           2: AAC LC
           3: AAC SSR (Scalable Sample Rate)
           4: AAC LTP (Long Term Prediction)
           5: HE-AAC / SBR (Spectral Band Replication)
           6: AAC Scalable
        */

        let audioObjectType = 0;
        let originalAudioObjectType = 0;
        let audioExtensionObjectType = null;
        let samplingIndex = 0;
        let extensionSamplingIndex = null;

        // 5 bits
        audioObjectType = originalAudioObjectType = array[0] >>> 3;
        // 4 bits
        samplingIndex = ((array[0] & 0x07) << 1) | (array[1] >>> 7);
        if (samplingIndex < 0 || samplingIndex >= this._mpegSamplingRates.length) {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, 'Flv: AAC invalid sampling frequency index!');
            return;
        }

        let samplingFrequence = this._mpegSamplingRates[samplingIndex];

        // 4 bits
        let channelConfig = (array[1] & 0x78) >>> 3;
        if (channelConfig < 0 || channelConfig >= 8) {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, 'Flv: AAC invalid channel configuration');
            return;
        }

        if (audioObjectType === 5) {  // HE-AAC?
            // 4 bits
            extensionSamplingIndex = ((array[1] & 0x07) << 1) | (array[2] >>> 7);
            // 5 bits
            audioExtensionObjectType = (array[2] & 0x7C) >>> 2;
        }

        // workarounds for various browsers
        let userAgent = self.navigator.userAgent.toLowerCase();

        if (userAgent.indexOf('firefox') !== -1) {
            // firefox: use SBR (HE-AAC) if freq less than 24kHz
            if (samplingIndex >= 6) {
                audioObjectType = 5;
                config = new Array(4);
                extensionSamplingIndex = samplingIndex - 3;
            } else {  // use LC-AAC
                audioObjectType = 2;
                config = new Array(2);
                extensionSamplingIndex = samplingIndex;
            }
        } else if (userAgent.indexOf('android') !== -1) {
            // android: always use LC-AAC
            audioObjectType = 2;
            config = new Array(2);
            extensionSamplingIndex = samplingIndex;
        } else {
            // for other browsers, e.g. chrome...
            // Always use HE-AAC to make it easier to switch aac codec profile
            audioObjectType = 5;
            extensionSamplingIndex = samplingIndex;
            config = new Array(4);

            if (samplingIndex >= 6) {
                extensionSamplingIndex = samplingIndex - 3;
            } else if (channelConfig === 1) {  // Mono channel
                audioObjectType = 2;
                config = new Array(2);
                extensionSamplingIndex = samplingIndex;
            }
        }

        config[0]  = audioObjectType << 3;
        config[0] |= (samplingIndex & 0x0F) >>> 1;
        config[1]  = (samplingIndex & 0x0F) << 7;
        config[1] |= (channelConfig & 0x0F) << 3;
        if (audioObjectType === 5) {
            config[1] |= ((extensionSamplingIndex & 0x0F) >>> 1);
            config[2]  = (extensionSamplingIndex & 0x01) << 7;
            // extended audio object type: force to 2 (LC-AAC)
            config[2] |= (2 << 2);
            config[3]  = 0;
        }

        return {
            config: config,
            samplingRate: samplingFrequence,
            channelCount: channelConfig,
            codec: 'mp4a.40.' + audioObjectType,
            originalCodec: 'mp4a.40.' + originalAudioObjectType
        };
    }

    _parseMP3AudioData(arrayBuffer, dataOffset, dataSize, requestHeader) {
        if (dataSize < 4) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Flv: Invalid MP3 packet, header missing!');
            return;
        }

        let le = this._littleEndian;
        let array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
        let result = null;

        if (requestHeader) {
            if (array[0] !== 0xFF) {
                return;
            }
            let ver = (array[1] >>> 3) & 0x03;
            let layer = (array[1] & 0x06) >> 1;

            let bitrate_index = (array[2] & 0xF0) >>> 4;
            let sampling_freq_index = (array[2] & 0x0C) >>> 2;

            let channel_mode = (array[3] >>> 6) & 0x03;
            let channel_count = channel_mode !== 3 ? 2 : 1;

            let sample_rate = 0;
            let bit_rate = 0;
            let object_type = 34;  // Layer-3, listed in MPEG-4 Audio Object Types

            let codec = 'mp3';

            switch (ver) {
                case 0:  // MPEG 2.5
                    sample_rate = this._mpegAudioV25SampleRateTable[sampling_freq_index];
                    break;
                case 2:  // MPEG 2
                    sample_rate = this._mpegAudioV20SampleRateTable[sampling_freq_index];
                    break;
                case 3:  // MPEG 1
                    sample_rate = this._mpegAudioV10SampleRateTable[sampling_freq_index];
                    break;
            }

            switch (layer) {
                case 1:  // Layer 3
                    object_type = 34;
                    if (bitrate_index < this._mpegAudioL3BitRateTable.length) {
                        bit_rate = this._mpegAudioL3BitRateTable[bitrate_index];
                    }
                    break;
                case 2:  // Layer 2
                    object_type = 33;
                    if (bitrate_index < this._mpegAudioL2BitRateTable.length) {
                        bit_rate = this._mpegAudioL2BitRateTable[bitrate_index];
                    }
                    break;
                case 3:  // Layer 1
                    object_type = 32;
                    if (bitrate_index < this._mpegAudioL1BitRateTable.length) {
                        bit_rate = this._mpegAudioL1BitRateTable[bitrate_index];
                    }
                    break;
            }

            result = {
                bitRate: bit_rate,
                samplingRate: sample_rate,
                channelCount: channel_count,
                codec: codec,
                originalCodec: codec
            };
        } else {
            result = array;
        }

        return result;
    }

    _parseVideoData(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition) {
        if (dataSize <= 1) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Flv: Invalid video packet, missing VideoData payload!');
            return;
        }

        if (this._hasVideoFlagOverrided === true && this._hasVideo === false) {
            // If hasVideo: false indicated explicitly in MediaDataSource,
            // Ignore all the video packets
            return;
        }

        let spec = (new Uint8Array(arrayBuffer, dataOffset, dataSize))[0];

        let frameType = (spec & 240) >>> 4;
        let codecId = spec & 15;

        if (codecId !== 7) {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].CODEC_UNSUPPORTED, `Flv: Unsupported codec in video frame: ${codecId}`);
            return;
        }

        this._parseAVCVideoPacket(arrayBuffer, dataOffset + 1, dataSize - 1, tagTimestamp, tagPosition, frameType);
    }

    _parseAVCVideoPacket(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType) {
        if (dataSize < 4) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime');
            return;
        }

        let le = this._littleEndian;
        let v = new DataView(arrayBuffer, dataOffset, dataSize);

        let packetType = v.getUint8(0);
        let cts = v.getUint32(0, !le) & 0x00FFFFFF;

        if (packetType === 0) {  // AVCDecoderConfigurationRecord
            this._parseAVCDecoderConfigurationRecord(arrayBuffer, dataOffset + 4, dataSize - 4);
        } else if (packetType === 1) {  // One or more Nalus
            this._parseAVCVideoData(arrayBuffer, dataOffset + 4, dataSize - 4, tagTimestamp, tagPosition, frameType, cts);
        } else if (packetType === 2) {
            // empty, AVC end of sequence
        } else {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, `Flv: Invalid video packet type ${packetType}`);
            return;
        }
    }

    _parseAVCDecoderConfigurationRecord(arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 7) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Flv: Invalid AVCDecoderConfigurationRecord, lack of data!');
            return;
        }

        let meta = this._videoMetadata;
        let track = this._videoTrack;
        let le = this._littleEndian;
        let v = new DataView(arrayBuffer, dataOffset, dataSize);

        if (!meta) {
            if (this._hasVideo === false && this._hasVideoFlagOverrided === false) {
                this._hasVideo = true;
                this._mediaInfo.hasVideo = true;
            }

            meta = this._videoMetadata = {};
            meta.type = 'video';
            meta.id = track.id;
            meta.timescale = this._timescale;
            meta.duration = this._duration;
        } else {
            if (typeof meta.avcc !== 'undefined') {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Found another AVCDecoderConfigurationRecord!');
            }
        }

        let version = v.getUint8(0);  // configurationVersion
        let avcProfile = v.getUint8(1);  // avcProfileIndication
        let profileCompatibility = v.getUint8(2);  // profile_compatibility
        let avcLevel = v.getUint8(3);  // AVCLevelIndication

        if (version !== 1 || avcProfile === 0) {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord');
            return;
        }

        this._naluLengthSize = (v.getUint8(4) & 3) + 1;  // lengthSizeMinusOne
        if (this._naluLengthSize !== 3 && this._naluLengthSize !== 4) {  // holy shit!!!
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, `Flv: Strange NaluLengthSizeMinusOne: ${this._naluLengthSize - 1}`);
            return;
        }

        let spsCount = v.getUint8(5) & 31;  // numOfSequenceParameterSets
        if (spsCount === 0) {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No SPS');
            return;
        } else if (spsCount > 1) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, `Flv: Strange AVCDecoderConfigurationRecord: SPS Count = ${spsCount}`);
        }

        let offset = 6;

        for (let i = 0; i < spsCount; i++) {
            let len = v.getUint16(offset, !le);  // sequenceParameterSetLength
            offset += 2;

            if (len === 0) {
                continue;
            }

            // Notice: Nalu without startcode header (00 00 00 01)
            let sps = new Uint8Array(arrayBuffer, dataOffset + offset, len);
            offset += len;

            let config = __WEBPACK_IMPORTED_MODULE_2__sps_parser_js__["a" /* default */].parseSPS(sps);
            if (i !== 0) {
                // ignore other sps's config
                continue;
            }

            meta.codecWidth = config.codec_size.width;
            meta.codecHeight = config.codec_size.height;
            meta.presentWidth = config.present_size.width;
            meta.presentHeight = config.present_size.height;

            meta.profile = config.profile_string;
            meta.level = config.level_string;
            meta.bitDepth = config.bit_depth;
            meta.chromaFormat = config.chroma_format;
            meta.sarRatio = config.sar_ratio;
            meta.frameRate = config.frame_rate;

            if (config.frame_rate.fixed === false ||
                config.frame_rate.fps_num === 0 ||
                config.frame_rate.fps_den === 0) {
                meta.frameRate = this._referenceFrameRate;
            }

            let fps_den = meta.frameRate.fps_den;
            let fps_num = meta.frameRate.fps_num;
            meta.refSampleDuration = meta.timescale * (fps_den / fps_num);

            let codecArray = sps.subarray(1, 4);
            let codecString = 'avc1.';
            for (let j = 0; j < 3; j++) {
                let h = codecArray[j].toString(16);
                if (h.length < 2) {
                    h = '0' + h;
                }
                codecString += h;
            }
            meta.codec = codecString;

            let mi = this._mediaInfo;
            mi.width = meta.codecWidth;
            mi.height = meta.codecHeight;
            mi.fps = meta.frameRate.fps;
            mi.profile = meta.profile;
            mi.level = meta.level;
            mi.chromaFormat = config.chroma_format_string;
            mi.sarNum = meta.sarRatio.width;
            mi.sarDen = meta.sarRatio.height;
            mi.videoCodec = codecString;

            if (mi.hasAudio) {
                if (mi.audioCodec != null) {
                    mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + ',' + mi.audioCodec + '"';
                }
            } else {
                mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + '"';
            }
            if (mi.isComplete()) {
                this._onMediaInfo(mi);
            }
        }

        let ppsCount = v.getUint8(offset);  // numOfPictureParameterSets
        if (ppsCount === 0) {
            this._onError(__WEBPACK_IMPORTED_MODULE_3__demux_errors_js__["a" /* default */].FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No PPS');
            return;
        } else if (ppsCount > 1) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, `Flv: Strange AVCDecoderConfigurationRecord: PPS Count = ${ppsCount}`);
        }

        offset++;

        for (let i = 0; i < ppsCount; i++) {
            let len = v.getUint16(offset, !le);  // pictureParameterSetLength
            offset += 2;

            if (len === 0) {
                continue;
            }

            // pps is useless for extracting video information
            offset += len;
        }

        meta.avcc = new Uint8Array(dataSize);
        meta.avcc.set(new Uint8Array(arrayBuffer, dataOffset, dataSize), 0);
        __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].v(this.TAG, 'Parsed AVCDecoderConfigurationRecord');

        if (this._isInitialMetadataDispatched()) {
            // flush parsed frames
            if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                this._onDataAvailable(this._audioTrack, this._videoTrack);
            }
        } else {
            this._videoInitialMetadataDispatched = true;
        }
        // notify new metadata
        this._dispatch = false;
        this._onTrackMetadata('video', meta);
    }

    _parseAVCVideoData(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType, cts) {
        let le = this._littleEndian;
        let v = new DataView(arrayBuffer, dataOffset, dataSize);

        let units = [], length = 0;

        let offset = 0;
        const lengthSize = this._naluLengthSize;
        let dts = this._timestampBase + tagTimestamp;
        let keyframe = (frameType === 1);  // from FLV Frame Type constants

        while (offset < dataSize) {
            if (offset + 4 >= dataSize) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, `Malformed Nalu near timestamp ${dts}, offset = ${offset}, dataSize = ${dataSize}`);
                break;  // data not enough for next Nalu
            }
            // Nalu with length-header (AVC1)
            let naluSize = v.getUint32(offset, !le);  // Big-Endian read
            if (lengthSize === 3) {
                naluSize >>>= 8;
            }
            if (naluSize > dataSize - lengthSize) {
                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, `Malformed Nalus near timestamp ${dts}, NaluSize > DataSize!`);
                return;
            }

            let unitType = v.getUint8(offset + lengthSize) & 0x1F;

            if (unitType === 5) {  // IDR
                keyframe = true;
            }

            let data = new Uint8Array(arrayBuffer, dataOffset + offset, lengthSize + naluSize);
            let unit = {type: unitType, data: data};
            units.push(unit);
            length += data.byteLength;

            offset += lengthSize + naluSize;
        }

        if (units.length) {
            let track = this._videoTrack;
            let avcSample = {
                units: units,
                length: length,
                isKeyframe: keyframe,
                dts: dts,
                cts: cts,
                pts: (dts + cts)
            };
            if (keyframe) {
                avcSample.fileposition = tagPosition;
            }
            track.samples.push(avcSample);
            track.length += length;
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (FLVDemuxer);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exp_golomb_js__ = __webpack_require__(141);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class SPSParser {

    static _ebsp2rbsp(uint8array) {
        let src = uint8array;
        let src_length = src.byteLength;
        let dst = new Uint8Array(src_length);
        let dst_idx = 0;

        for (let i = 0; i < src_length; i++) {
            if (i >= 2) {
                // Unescape: Skip 0x03 after 00 00
                if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
                    continue;
                }
            }
            dst[dst_idx] = src[i];
            dst_idx++;
        }

        return new Uint8Array(dst.buffer, 0, dst_idx);
    }

    static parseSPS(uint8array) {
        let rbsp = SPSParser._ebsp2rbsp(uint8array);
        let gb = new __WEBPACK_IMPORTED_MODULE_0__exp_golomb_js__["a" /* default */](rbsp);

        gb.readByte();
        let profile_idc = gb.readByte();  // profile_idc
        gb.readByte();  // constraint_set_flags[5] + reserved_zero[3]
        let level_idc = gb.readByte();  // level_idc
        gb.readUEG();  // seq_parameter_set_id

        let profile_string = SPSParser.getProfileString(profile_idc);
        let level_string = SPSParser.getLevelString(level_idc);
        let chroma_format_idc = 1;
        let chroma_format = 420;
        let chroma_format_table = [0, 420, 422, 444];
        let bit_depth = 8;

        if (profile_idc === 100 || profile_idc === 110 || profile_idc === 122 ||
            profile_idc === 244 || profile_idc === 44 || profile_idc === 83 ||
            profile_idc === 86 || profile_idc === 118 || profile_idc === 128 ||
            profile_idc === 138 || profile_idc === 144) {

            chroma_format_idc = gb.readUEG();
            if (chroma_format_idc === 3) {
                gb.readBits(1);  // separate_colour_plane_flag
            }
            if (chroma_format_idc <= 3) {
                chroma_format = chroma_format_table[chroma_format_idc];
            }

            bit_depth = gb.readUEG() + 8;  // bit_depth_luma_minus8
            gb.readUEG();  // bit_depth_chroma_minus8
            gb.readBits(1);  // qpprime_y_zero_transform_bypass_flag
            if (gb.readBool()) {  // seq_scaling_matrix_present_flag
                let scaling_list_count = (chroma_format_idc !== 3) ? 8 : 12;
                for (let i = 0; i < scaling_list_count; i++) {
                    if (gb.readBool()) {  // seq_scaling_list_present_flag
                        if (i < 6) {
                            SPSParser._skipScalingList(gb, 16);
                        } else {
                            SPSParser._skipScalingList(gb, 64);
                        }
                    }
                }
            }
        }
        gb.readUEG();  // log2_max_frame_num_minus4
        let pic_order_cnt_type = gb.readUEG();
        if (pic_order_cnt_type === 0) {
            gb.readUEG();  // log2_max_pic_order_cnt_lsb_minus_4
        } else if (pic_order_cnt_type === 1) {
            gb.readBits(1);  // delta_pic_order_always_zero_flag
            gb.readSEG();  // offset_for_non_ref_pic
            gb.readSEG();  // offset_for_top_to_bottom_field
            let num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
            for (let i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
                gb.readSEG();  // offset_for_ref_frame
            }
        }
        gb.readUEG();  // max_num_ref_frames
        gb.readBits(1);  // gaps_in_frame_num_value_allowed_flag

        let pic_width_in_mbs_minus1 = gb.readUEG();
        let pic_height_in_map_units_minus1 = gb.readUEG();

        let frame_mbs_only_flag = gb.readBits(1);
        if (frame_mbs_only_flag === 0) {
            gb.readBits(1);  // mb_adaptive_frame_field_flag
        }
        gb.readBits(1);  // direct_8x8_inference_flag

        let frame_crop_left_offset = 0;
        let frame_crop_right_offset = 0;
        let frame_crop_top_offset = 0;
        let frame_crop_bottom_offset = 0;

        let frame_cropping_flag = gb.readBool();
        if (frame_cropping_flag) {
            frame_crop_left_offset = gb.readUEG();
            frame_crop_right_offset = gb.readUEG();
            frame_crop_top_offset = gb.readUEG();
            frame_crop_bottom_offset = gb.readUEG();
        }

        let sar_width = 1, sar_height = 1;
        let fps = 0, fps_fixed = true, fps_num = 0, fps_den = 0;

        let vui_parameters_present_flag = gb.readBool();
        if (vui_parameters_present_flag) {
            if (gb.readBool()) {  // aspect_ratio_info_present_flag
                let aspect_ratio_idc = gb.readByte();
                let sar_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
                let sar_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33,  99, 3, 2, 1];

                if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
                    sar_width = sar_w_table[aspect_ratio_idc - 1];
                    sar_height = sar_h_table[aspect_ratio_idc - 1];
                } else if (aspect_ratio_idc === 255) {
                    sar_width = gb.readByte() << 8 | gb.readByte();
                    sar_height = gb.readByte() << 8 | gb.readByte();
                }
            }

            if (gb.readBool()) {  // overscan_info_present_flag
                gb.readBool();  // overscan_appropriate_flag
            }
            if (gb.readBool()) {  // video_signal_type_present_flag
                gb.readBits(4);  // video_format & video_full_range_flag
                if (gb.readBool()) {  // colour_description_present_flag
                    gb.readBits(24);  // colour_primaries & transfer_characteristics & matrix_coefficients
                }
            }
            if (gb.readBool()) {  // chroma_loc_info_present_flag
                gb.readUEG();  // chroma_sample_loc_type_top_field
                gb.readUEG();  // chroma_sample_loc_type_bottom_field
            }
            if (gb.readBool()) {  // timing_info_present_flag
                let num_units_in_tick = gb.readBits(32);
                let time_scale = gb.readBits(32);
                fps_fixed = gb.readBool();  // fixed_frame_rate_flag

                fps_num = time_scale;
                fps_den = num_units_in_tick * 2;
                fps = fps_num / fps_den;
            }
        }

        let sarScale = 1;
        if (sar_width !== 1 || sar_height !== 1) {
            sarScale = sar_width / sar_height;
        }

        let crop_unit_x = 0, crop_unit_y = 0;
        if (chroma_format_idc === 0) {
            crop_unit_x = 1;
            crop_unit_y = 2 - frame_mbs_only_flag;
        } else {
            let sub_wc = (chroma_format_idc === 3) ? 1 : 2;
            let sub_hc = (chroma_format_idc === 1) ? 2 : 1;
            crop_unit_x = sub_wc;
            crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
        }

        let codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
        let codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);

        codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
        codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;

        let present_width = Math.ceil(codec_width * sarScale);

        gb.destroy();
        gb = null;

        return {
            profile_string: profile_string,  // baseline, high, high10, ...
            level_string: level_string,  // 3, 3.1, 4, 4.1, 5, 5.1, ...
            bit_depth: bit_depth,  // 8bit, 10bit, ...
            chroma_format: chroma_format,  // 4:2:0, 4:2:2, ...
            chroma_format_string: SPSParser.getChromaFormatString(chroma_format),

            frame_rate: {
                fixed: fps_fixed,
                fps: fps,
                fps_den: fps_den,
                fps_num: fps_num
            },

            sar_ratio: {
                width: sar_width,
                height: sar_height
            },

            codec_size: {
                width: codec_width,
                height: codec_height
            },

            present_size: {
                width: present_width,
                height: codec_height
            }
        };
    }

    static _skipScalingList(gb, count) {
        let last_scale = 8, next_scale = 8;
        let delta_scale = 0;
        for (let i = 0; i < count; i++) {
            if (next_scale !== 0) {
                delta_scale = gb.readSEG();
                next_scale = (last_scale + delta_scale + 256) % 256;
            }
            last_scale = (next_scale === 0) ? last_scale : next_scale;
        }
    }

    static getProfileString(profile_idc) {
        switch (profile_idc) {
            case 66:
                return 'Baseline';
            case 77:
                return 'Main';
            case 88:
                return 'Extended';
            case 100:
                return 'High';
            case 110:
                return 'High10';
            case 122:
                return 'High422';
            case 244:
                return 'High444';
            default:
                return 'Unknown';
        }
    }

    static getLevelString(level_idc) {
        return (level_idc / 10).toFixed(1);
    }

    static getChromaFormatString(chroma) {
        switch (chroma) {
            case 420:
                return '4:2:0';
            case 422:
                return '4:2:2';
            case 444:
                return '4:4:4';
            default:
                return 'Unknown';
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (SPSParser);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_polyfill_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_features_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_flv_player_js__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_native_player_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player_events_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player_player_errors_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_logging_control_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










// here are all the interfaces

// install polyfills
__WEBPACK_IMPORTED_MODULE_0__utils_polyfill_js__["a" /* default */].install();


// factory method
function createPlayer(mediaDataSource, optionalConfig) {
    let mds = mediaDataSource;
    if (mds == null || typeof mds !== 'object') {
        throw new __WEBPACK_IMPORTED_MODULE_7__utils_exception_js__["a" /* InvalidArgumentException */]('MediaDataSource must be an javascript object!');
    }

    if (!mds.hasOwnProperty('type')) {
        throw new __WEBPACK_IMPORTED_MODULE_7__utils_exception_js__["a" /* InvalidArgumentException */]('MediaDataSource must has type field to indicate video file type!');
    }

    switch (mds.type) {
        case 'flv':
            return new __WEBPACK_IMPORTED_MODULE_2__player_flv_player_js__["a" /* default */](mds, optionalConfig);
        default:
            return new __WEBPACK_IMPORTED_MODULE_3__player_native_player_js__["a" /* default */](mds, optionalConfig);
    }
}


// feature detection
function isSupported() {
    return __WEBPACK_IMPORTED_MODULE_1__core_features_js__["a" /* default */].supportMSEH264Playback();
}

function getFeatureList() {
    return __WEBPACK_IMPORTED_MODULE_1__core_features_js__["a" /* default */].getFeatureList();
}


// interfaces
let flvjs = {};

flvjs.createPlayer = createPlayer;
flvjs.isSupported = isSupported;
flvjs.getFeatureList = getFeatureList;

flvjs.Events = __WEBPACK_IMPORTED_MODULE_4__player_player_events_js__["a" /* default */];
flvjs.ErrorTypes = __WEBPACK_IMPORTED_MODULE_5__player_player_errors_js__["a" /* ErrorTypes */];
flvjs.ErrorDetails = __WEBPACK_IMPORTED_MODULE_5__player_player_errors_js__["b" /* ErrorDetails */];

flvjs.FlvPlayer = __WEBPACK_IMPORTED_MODULE_2__player_flv_player_js__["a" /* default */];
flvjs.NativePlayer = __WEBPACK_IMPORTED_MODULE_3__player_native_player_js__["a" /* default */];
flvjs.LoggingControl = __WEBPACK_IMPORTED_MODULE_6__utils_logging_control_js__["a" /* default */];

Object.defineProperty(flvjs, 'version', {
    enumerable: true,
    get: function () {
        // replaced by browserify-versionify transform
        return '__VERSION__';
    }
});

/* harmony default export */ __webpack_exports__["a"] = (flvjs);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_browser_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/* fetch + stream IO loader. Currently working on chrome 43+.
 * fetch provides a better alternative http API to XMLHttpRequest
 *
 * fetch spec   https://fetch.spec.whatwg.org/
 * stream spec  https://streams.spec.whatwg.org/
 */
class FetchStreamLoader extends __WEBPACK_IMPORTED_MODULE_2__loader_js__["b" /* BaseLoader */] {

    static isSupported() {
        try {
            // fetch + stream is broken on Microsoft Edge. Disable before build 15048.
            // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8196907/
            // Fixed in Jan 10, 2017. Build 15048+ removed from blacklist.
            let isWorkWellEdge = __WEBPACK_IMPORTED_MODULE_1__utils_browser_js__["a" /* default */].msedge && __WEBPACK_IMPORTED_MODULE_1__utils_browser_js__["a" /* default */].version.minor >= 15048;
            let browserNotBlacklisted = __WEBPACK_IMPORTED_MODULE_1__utils_browser_js__["a" /* default */].msedge ? isWorkWellEdge : true;
            return (self.fetch && self.ReadableStream && browserNotBlacklisted);
        } catch (e) {
            return false;
        }
    }

    constructor(seekHandler, config) {
        super('fetch-stream-loader');
        this.TAG = 'FetchStreamLoader';

        this._seekHandler = seekHandler;
        this._config = config;
        this._needStash = true;

        this._requestAbort = false;
        this._contentLength = null;
        this._receivedLength = 0;
    }

    destroy() {
        if (this.isWorking()) {
            this.abort();
        }
        super.destroy();
    }

    open(dataSource, range) {
        this._dataSource = dataSource;
        this._range = range;

        let sourceURL = dataSource.url;
        if (this._config.reuseRedirectedURL && dataSource.redirectedURL != undefined) {
            sourceURL = dataSource.redirectedURL;
        }

        let seekConfig = this._seekHandler.getConfig(sourceURL, range);

        let headers = new self.Headers();

        if (typeof seekConfig.headers === 'object') {
            let configHeaders = seekConfig.headers;
            for (let key in configHeaders) {
                if (configHeaders.hasOwnProperty(key)) {
                    headers.append(key, configHeaders[key]);
                }
            }
        }

        let params = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            // The default policy of Fetch API in the whatwg standard
            // Safari incorrectly indicates 'no-referrer' as default policy, fuck it
            referrerPolicy: 'no-referrer-when-downgrade'
        };

        // cors is enabled by default
        if (dataSource.cors === false) {
            // no-cors means 'disregard cors policy', which can only be used in ServiceWorker
            params.mode = 'same-origin';
        }

        // withCredentials is disabled by default
        if (dataSource.withCredentials) {
            params.credentials = 'include';
        }

        // referrerPolicy from config
        if (dataSource.referrerPolicy) {
            params.referrerPolicy = dataSource.referrerPolicy;
        }

        this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kConnecting;
        self.fetch(seekConfig.url, params).then((res) => {
            if (this._requestAbort) {
                this._requestAbort = false;
                this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kIdle;
                return;
            }
            if (res.ok && (res.status >= 200 && res.status <= 299)) {
                if (res.url !== seekConfig.url) {
                    if (this._onURLRedirect) {
                        let redirectedURL = this._seekHandler.removeURLParameters(res.url);
                        this._onURLRedirect(redirectedURL);
                    }
                }

                let lengthHeader = res.headers.get('Content-Length');
                if (lengthHeader != null) {
                    this._contentLength = parseInt(lengthHeader);
                    if (this._contentLength !== 0) {
                        if (this._onContentLengthKnown) {
                            this._onContentLengthKnown(this._contentLength);
                        }
                    }
                }

                return this._pump.call(this, res.body.getReader());
            } else {
                this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kError;
                if (this._onError) {
                    this._onError(__WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].HTTP_STATUS_CODE_INVALID, {code: res.status, msg: res.statusText});
                } else {
                    throw new __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__["c" /* RuntimeException */]('FetchStreamLoader: Http code invalid, ' + res.status + ' ' + res.statusText);
                }
            }
        }).catch((e) => {
            this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kError;
            if (this._onError) {
                this._onError(__WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].EXCEPTION, {code: -1, msg: e.message});
            } else {
                throw e;
            }
        });
    }

    abort() {
        this._requestAbort = true;
    }

    _pump(reader) {  // ReadableStreamReader
        return reader.read().then((result) => {
            if (result.done) {
                this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kComplete;
                if (this._onComplete) {
                    this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
                }
            } else {
                if (this._requestAbort === true) {
                    this._requestAbort = false;
                    this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kComplete;
                    return reader.cancel();
                }

                this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kBuffering;

                let chunk = result.value.buffer;
                let byteStart = this._range.from + this._receivedLength;
                this._receivedLength += chunk.byteLength;

                if (this._onDataArrival) {
                    this._onDataArrival(chunk, byteStart, this._receivedLength);
                }

                return this._pump(reader);
            }
        }).catch((e) => {
            if (e.code === 11 && __WEBPACK_IMPORTED_MODULE_1__utils_browser_js__["a" /* default */].msedge) {  // InvalidStateError on Microsoft Edge
                // Workaround: Edge may throw InvalidStateError after ReadableStreamReader.cancel() call
                // Ignore the unknown exception.
                // Related issue: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11265202/
                return;
            }

            this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kError;
            let type = 0;
            let info = null;

            if ((e.code === 19 || e.message === 'network error') && // NETWORK_ERR
                (this._contentLength === null ||
                (this._contentLength !== null && this._receivedLength < this._contentLength))) {
                type = __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].EARLY_EOF;
                info = {code: e.code, msg: 'Fetch stream meet Early-EOF'};
            } else {
                type = __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].EXCEPTION;
                info = {code: e.code, msg: e.message};
            }

            if (this._onError) {
                this._onError(type, info);
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__["c" /* RuntimeException */](info.msg);
            }
        });
    }

}

/* harmony default export */ __webpack_exports__["a"] = (FetchStreamLoader);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class ParamSeekHandler {

    constructor(paramStart, paramEnd) {
        this._startName = paramStart;
        this._endName = paramEnd;
    }

    getConfig(baseUrl, range) {
        let url = baseUrl;

        if (range.from !== 0 || range.to !== -1) {
            let needAnd = true;
            if (url.indexOf('?') === -1) {
                url += '?';
                needAnd = false;
            }

            if (needAnd) {
                url += '&';
            }

            url += `${this._startName}=${range.from.toString()}`;

            if (range.to !== -1) {
                url += `&${this._endName}=${range.to.toString()}`;
            }
        }

        return {
            url: url,
            headers: {}
        };
    }

    removeURLParameters(seekedURL) {
        let baseURL = seekedURL.split('?')[0];
        let params = undefined;

        let queryIndex = seekedURL.indexOf('?');
        if (queryIndex !== -1) {
            params = seekedURL.substring(queryIndex + 1);
        }

        let resultParams = '';

        if (params != undefined && params.length > 0) {
            let pairs = params.split('&');

            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i].split('=');
                let requireAnd = (i > 0);

                if (pair[0] !== this._startName && pair[0] !== this._endName) {
                    if (requireAnd) {
                        resultParams += '&';
                    }
                    resultParams += pairs[i];
                }
            }
        }

        return (resultParams.length === 0) ? baseURL : baseURL + '?' + resultParams;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (ParamSeekHandler);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class RangeSeekHandler {

    constructor(zeroStart) {
        this._zeroStart = zeroStart || false;
    }

    getConfig(url, range) {
        let headers = {};

        if (range.from !== 0 || range.to !== -1) {
            let param;
            if (range.to !== -1) {
                param = `bytes=${range.from.toString()}-${range.to.toString()}`;
            } else {
                param = `bytes=${range.from.toString()}-`;
            }
            headers['Range'] = param;
        } else if (this._zeroStart) {
            headers['Range'] = 'bytes=0-';
        }

        return {
            url: url,
            headers: headers
        };
    }

    removeURLParameters(seekedURL) {
        return seekedURL;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (RangeSeekHandler);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





// For FLV over WebSocket live stream
class WebSocketLoader extends __WEBPACK_IMPORTED_MODULE_1__loader_js__["b" /* BaseLoader */] {

    static isSupported() {
        try {
            return (typeof self.WebSocket !== 'undefined');
        } catch (e) {
            return false;
        }
    }

    constructor() {
        super('websocket-loader');
        this.TAG = 'WebSocketLoader';

        this._needStash = true;

        this._ws = null;
        this._requestAbort = false;
        this._receivedLength = 0;
    }

    destroy() {
        if (this._ws) {
            this.abort();
        }
        super.destroy();
    }

    open(dataSource) {
        try {
            let ws = this._ws = new self.WebSocket(dataSource.url);
            ws.binaryType = 'arraybuffer';
            ws.onopen = this._onWebSocketOpen.bind(this);
            ws.onclose = this._onWebSocketClose.bind(this);
            ws.onmessage = this._onWebSocketMessage.bind(this);
            ws.onerror = this._onWebSocketError.bind(this);

            this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kConnecting;
        } catch (e) {
            this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;

            let info = {code: e.code, msg: e.message};

            if (this._onError) {
                this._onError(__WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EXCEPTION, info);
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */](info.msg);
            }
        }
    }

    abort() {
        let ws = this._ws;
        if (ws && (ws.readyState === 0 || ws.readyState === 1)) {  // CONNECTING || OPEN
            this._requestAbort = true;
            ws.close();
        }

        this._ws = null;
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kComplete;
    }

    _onWebSocketOpen(e) {
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kBuffering;
    }

    _onWebSocketClose(e) {
        if (this._requestAbort === true) {
            this._requestAbort = false;
            return;
        }

        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kComplete;

        if (this._onComplete) {
            this._onComplete(0, this._receivedLength - 1);
        }
    }

    _onWebSocketMessage(e) {
        if (e.data instanceof ArrayBuffer) {
            this._dispatchArrayBuffer(e.data);
        } else if (e.data instanceof Blob) {
            let reader = new FileReader();
            reader.onload = () => {
                this._dispatchArrayBuffer(reader.result);
            };
            reader.readAsArrayBuffer(e.data);
        } else {
            this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;
            let info = {code: -1, msg: 'Unsupported WebSocket message type: ' + e.data.constructor.name};

            if (this._onError) {
                this._onError(__WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EXCEPTION, info);
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */](info.msg);
            }
        }
    }

    _dispatchArrayBuffer(arraybuffer) {
        let chunk = arraybuffer;
        let byteStart = this._receivedLength;
        this._receivedLength += chunk.byteLength;

        if (this._onDataArrival) {
            this._onDataArrival(chunk, byteStart, this._receivedLength);
        }
    }

    _onWebSocketError(e) {
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;

        let info = {
            code: e.code,
            msg: e.message
        };

        if (this._onError) {
            this._onError(__WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EXCEPTION, info);
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */](info.msg);
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (WebSocketLoader);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





// For FireFox browser which supports `xhr.responseType = 'moz-chunked-arraybuffer'`
class MozChunkedLoader extends __WEBPACK_IMPORTED_MODULE_1__loader_js__["b" /* BaseLoader */] {

    static isSupported() {
        try {
            let xhr = new XMLHttpRequest();
            // Firefox 37- requires .open() to be called before setting responseType
            xhr.open('GET', 'https://example.com', true);
            xhr.responseType = 'moz-chunked-arraybuffer';
            return (xhr.responseType === 'moz-chunked-arraybuffer');
        } catch (e) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w('MozChunkedLoader', e.message);
            return false;
        }
    }

    constructor(seekHandler, config) {
        super('xhr-moz-chunked-loader');
        this.TAG = 'MozChunkedLoader';

        this._seekHandler = seekHandler;
        this._config = config;
        this._needStash = true;

        this._xhr = null;
        this._requestAbort = false;
        this._contentLength = null;
        this._receivedLength = 0;
    }

    destroy() {
        if (this.isWorking()) {
            this.abort();
        }
        if (this._xhr) {
            this._xhr.onreadystatechange = null;
            this._xhr.onprogress = null;
            this._xhr.onloadend = null;
            this._xhr.onerror = null;
            this._xhr = null;
        }
        super.destroy();
    }

    open(dataSource, range) {
        this._dataSource = dataSource;
        this._range = range;

        let sourceURL = dataSource.url;
        if (this._config.reuseRedirectedURL && dataSource.redirectedURL != undefined) {
            sourceURL = dataSource.redirectedURL;
        }

        let seekConfig = this._seekHandler.getConfig(sourceURL, range);
        this._requestURL = seekConfig.url;

        let xhr = this._xhr = new XMLHttpRequest();
        xhr.open('GET', seekConfig.url, true);
        xhr.responseType = 'moz-chunked-arraybuffer';
        xhr.onreadystatechange = this._onReadyStateChange.bind(this);
        xhr.onprogress = this._onProgress.bind(this);
        xhr.onloadend = this._onLoadEnd.bind(this);
        xhr.onerror = this._onXhrError.bind(this);

        // cors is auto detected and enabled by xhr

        // withCredentials is disabled by default
        if (dataSource.withCredentials && xhr['withCredentials']) {
            xhr.withCredentials = true;
        }

        if (typeof seekConfig.headers === 'object') {
            let headers = seekConfig.headers;

            for (let key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
        }

        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kConnecting;
        xhr.send();
    }

    abort() {
        this._requestAbort = true;
        if (this._xhr) {
            this._xhr.abort();
        }
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kComplete;
    }

    _onReadyStateChange(e) {
        let xhr = e.target;

        if (xhr.readyState === 2) {  // HEADERS_RECEIVED
            if (xhr.responseURL != undefined && xhr.responseURL !== this._requestURL) {
                if (this._onURLRedirect) {
                    let redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);
                    this._onURLRedirect(redirectedURL);
                }
            }

            if (xhr.status !== 0 && (xhr.status < 200 || xhr.status > 299)) {
                this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;
                if (this._onError) {
                    this._onError(__WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].HTTP_STATUS_CODE_INVALID, {code: xhr.status, msg: xhr.statusText});
                } else {
                    throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */]('MozChunkedLoader: Http code invalid, ' + xhr.status + ' ' + xhr.statusText);
                }
            } else {
                this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kBuffering;
            }
        }
    }

    _onProgress(e) {
        if (this._contentLength === null) {
            if (e.total !== null && e.total !== 0) {
                this._contentLength = e.total;
                if (this._onContentLengthKnown) {
                    this._onContentLengthKnown(this._contentLength);
                }
            }
        }

        let chunk = e.target.response;
        let byteStart = this._range.from + this._receivedLength;
        this._receivedLength += chunk.byteLength;

        if (this._onDataArrival) {
            this._onDataArrival(chunk, byteStart, this._receivedLength);
        }
    }

    _onLoadEnd(e) {
        if (this._requestAbort === true) {
            this._requestAbort = false;
            return;
        } else if (this._status === __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError) {
            return;
        }

        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kComplete;
        if (this._onComplete) {
            this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
        }
    }

    _onXhrError(e) {
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;
        let type = 0;
        let info = null;

        if (this._contentLength && e.loaded < this._contentLength) {
            type = __WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EARLY_EOF;
            info = {code: -1, msg: 'Moz-Chunked stream meet Early-Eof'};
        } else {
            type = __WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EXCEPTION;
            info = {code: -1, msg: e.constructor.name + ' ' + e.type};
        }

        if (this._onError) {
            this._onError(type, info);
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */](info.msg);
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (MozChunkedLoader);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/* Notice: ms-stream may cause IE/Edge browser crash if seek too frequently!!!
 * The browser may crash in wininet.dll. Disable for now.
 *
 * For IE11/Edge browser by microsoft which supports `xhr.responseType = 'ms-stream'`
 * Notice that ms-stream API sucks. The buffer is always expanding along with downloading.
 *
 * We need to abort the xhr if buffer size exceeded limit size (e.g. 16 MiB), then do reconnect.
 * in order to release previous ArrayBuffer to avoid memory leak
 *
 * Otherwise, the ArrayBuffer will increase to a terrible size that equals final file size.
 */
class MSStreamLoader extends __WEBPACK_IMPORTED_MODULE_1__loader_js__["b" /* BaseLoader */] {

    static isSupported() {
        try {
            if (typeof self.MSStream === 'undefined' || typeof self.MSStreamReader === 'undefined') {
                return false;
            }

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://example.com', true);
            xhr.responseType = 'ms-stream';
            return (xhr.responseType === 'ms-stream');
        } catch (e) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w('MSStreamLoader', e.message);
            return false;
        }
    }

    constructor(seekHandler, config) {
        super('xhr-msstream-loader');
        this.TAG = 'MSStreamLoader';

        this._seekHandler = seekHandler;
        this._config = config;
        this._needStash = true;

        this._xhr = null;
        this._reader = null;  // MSStreamReader

        this._totalRange = null;
        this._currentRange = null;

        this._currentRequestURL = null;
        this._currentRedirectedURL = null;

        this._contentLength = null;
        this._receivedLength = 0;

        this._bufferLimit = 16 * 1024 * 1024;  // 16MB
        this._lastTimeBufferSize = 0;
        this._isReconnecting = false;
    }

    destroy() {
        if (this.isWorking()) {
            this.abort();
        }
        if (this._reader) {
            this._reader.onprogress = null;
            this._reader.onload = null;
            this._reader.onerror = null;
            this._reader = null;
        }
        if (this._xhr) {
            this._xhr.onreadystatechange = null;
            this._xhr = null;
        }
        super.destroy();
    }

    open(dataSource, range) {
        this._internalOpen(dataSource, range, false);
    }

    _internalOpen(dataSource, range, isSubrange) {
        this._dataSource = dataSource;

        if (!isSubrange) {
            this._totalRange = range;
        } else {
            this._currentRange = range;
        }

        let sourceURL = dataSource.url;
        if (this._config.reuseRedirectedURL) {
            if (this._currentRedirectedURL != undefined) {
                sourceURL = this._currentRedirectedURL;
            } else if (dataSource.redirectedURL != undefined) {
                sourceURL = dataSource.redirectedURL;
            }
        }

        let seekConfig = this._seekHandler.getConfig(sourceURL, range);
        this._currentRequestURL = seekConfig.url;

        let reader = this._reader = new self.MSStreamReader();
        reader.onprogress = this._msrOnProgress.bind(this);
        reader.onload = this._msrOnLoad.bind(this);
        reader.onerror = this._msrOnError.bind(this);

        let xhr = this._xhr = new XMLHttpRequest();
        xhr.open('GET', seekConfig.url, true);
        xhr.responseType = 'ms-stream';
        xhr.onreadystatechange = this._xhrOnReadyStateChange.bind(this);
        xhr.onerror = this._xhrOnError.bind(this);

        if (dataSource.withCredentials) {
            xhr.withCredentials = true;
        }

        if (typeof seekConfig.headers === 'object') {
            let headers = seekConfig.headers;

            for (let key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
        }

        if (this._isReconnecting) {
            this._isReconnecting = false;
        } else {
            this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kConnecting;
        }
        xhr.send();
    }

    abort() {
        this._internalAbort();
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kComplete;
    }

    _internalAbort() {
        if (this._reader) {
            if (this._reader.readyState === 1) {  // LOADING
                this._reader.abort();
            }
            this._reader.onprogress = null;
            this._reader.onload = null;
            this._reader.onerror = null;
            this._reader = null;
        }
        if (this._xhr) {
            this._xhr.abort();
            this._xhr.onreadystatechange = null;
            this._xhr = null;
        }
    }

    _xhrOnReadyStateChange(e) {
        let xhr = e.target;

        if (xhr.readyState === 2) {  // HEADERS_RECEIVED
            if (xhr.status >= 200 && xhr.status <= 299) {
                this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kBuffering;

                if (xhr.responseURL != undefined) {
                    let redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);
                    if (xhr.responseURL !== this._currentRequestURL && redirectedURL !== this._currentRedirectedURL) {
                        this._currentRedirectedURL = redirectedURL;
                        if (this._onURLRedirect) {
                            this._onURLRedirect(redirectedURL);
                        }
                    }
                }

                let lengthHeader = xhr.getResponseHeader('Content-Length');
                if (lengthHeader != null && this._contentLength == null) {
                    let length = parseInt(lengthHeader);
                    if (length > 0) {
                        this._contentLength = length;
                        if (this._onContentLengthKnown) {
                            this._onContentLengthKnown(this._contentLength);
                        }
                    }
                }
            } else {
                this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;
                if (this._onError) {
                    this._onError(__WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].HTTP_STATUS_CODE_INVALID, {code: xhr.status, msg: xhr.statusText});
                } else {
                    throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */]('MSStreamLoader: Http code invalid, ' + xhr.status + ' ' + xhr.statusText);
                }
            }
        } else if (xhr.readyState === 3) {  // LOADING
            if (xhr.status >= 200 && xhr.status <= 299) {
                this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kBuffering;

                let msstream = xhr.response;
                this._reader.readAsArrayBuffer(msstream);
            }
        }
    }

    _xhrOnError(e) {
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;
        let type = __WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EXCEPTION;
        let info = {code: -1, msg: e.constructor.name + ' ' + e.type};

        if (this._onError) {
            this._onError(type, info);
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */](info.msg);
        }
    }

    _msrOnProgress(e) {
        let reader = e.target;
        let bigbuffer = reader.result;
        if (bigbuffer == null) {  // result may be null, workaround for buggy M$
            this._doReconnectIfNeeded();
            return;
        }

        let slice = bigbuffer.slice(this._lastTimeBufferSize);
        this._lastTimeBufferSize = bigbuffer.byteLength;
        let byteStart = this._totalRange.from + this._receivedLength;
        this._receivedLength += slice.byteLength;

        if (this._onDataArrival) {
            this._onDataArrival(slice, byteStart, this._receivedLength);
        }

        if (bigbuffer.byteLength >= this._bufferLimit) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].v(this.TAG, `MSStream buffer exceeded max size near ${byteStart + slice.byteLength}, reconnecting...`);
            this._doReconnectIfNeeded();
        }
    }

    _doReconnectIfNeeded() {
        if (this._contentLength == null || this._receivedLength < this._contentLength) {
            this._isReconnecting = true;
            this._lastTimeBufferSize = 0;
            this._internalAbort();

            let range = {
                from: this._totalRange.from + this._receivedLength,
                to: -1
            };
            this._internalOpen(this._dataSource, range, true);
        }
    }

    _msrOnLoad(e) {  // actually it is onComplete event
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kComplete;
        if (this._onComplete) {
            this._onComplete(this._totalRange.from, this._totalRange.from + this._receivedLength - 1);
        }
    }

    _msrOnError(e) {
        this._status = __WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* LoaderStatus */].kError;
        let type = 0;
        let info = null;

        if (this._contentLength && this._receivedLength < this._contentLength) {
            type = __WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EARLY_EOF;
            info = {code: -1, msg: 'MSStream meet Early-Eof'};
        } else {
            type = __WEBPACK_IMPORTED_MODULE_1__loader_js__["a" /* LoaderErrors */].EARLY_EOF;
            info = {code: -1, msg: e.constructor.name + ' ' + e.type};
        }

        if (this._onError) {
            this._onError(type, info);
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_2__utils_exception_js__["c" /* RuntimeException */](info.msg);
        }
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (MSStreamLoader);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speed_sampler_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






// Universal IO Loader, implemented by adding Range header in xhr's request header
class RangeLoader extends __WEBPACK_IMPORTED_MODULE_2__loader_js__["b" /* BaseLoader */] {

    static isSupported() {
        try {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://example.com', true);
            xhr.responseType = 'arraybuffer';
            return (xhr.responseType === 'arraybuffer');
        } catch (e) {
            __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w('RangeLoader', e.message);
            return false;
        }
    }

    constructor(seekHandler, config) {
        super('xhr-range-loader');
        this.TAG = 'RangeLoader';

        this._seekHandler = seekHandler;
        this._config = config;
        this._needStash = false;

        this._chunkSizeKBList = [
            128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192
        ];
        this._currentChunkSizeKB = 384;
        this._currentSpeedNormalized = 0;
        this._zeroSpeedChunkCount = 0;

        this._xhr = null;
        this._speedSampler = new __WEBPACK_IMPORTED_MODULE_1__speed_sampler_js__["a" /* default */]();

        this._requestAbort = false;
        this._waitForTotalLength = false;
        this._totalLengthReceived = false;

        this._currentRequestURL = null;
        this._currentRedirectedURL = null;
        this._currentRequestRange = null;
        this._totalLength = null;  // size of the entire file
        this._contentLength = null;  // Content-Length of entire request range
        this._receivedLength = 0;  // total received bytes
        this._lastTimeLoaded = 0;  // received bytes of current request sub-range
    }

    destroy() {
        if (this.isWorking()) {
            this.abort();
        }
        if (this._xhr) {
            this._xhr.onreadystatechange = null;
            this._xhr.onprogress = null;
            this._xhr.onload = null;
            this._xhr.onerror = null;
            this._xhr = null;
        }
        super.destroy();
    }

    get currentSpeed() {
        return this._speedSampler.lastSecondKBps;
    }

    open(dataSource, range) {
        this._dataSource = dataSource;
        this._range = range;
        this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kConnecting;

        if (!this._totalLengthReceived) {
            // We need total filesize
            this._waitForTotalLength = true;
            this._internalOpen(this._dataSource, {from: 0, to: -1});
        } else {
            // We have filesize, start loading
            this._openSubRange();
        }
    }

    _openSubRange() {
        let chunkSize = this._currentChunkSizeKB * 1024;

        let from = this._range.from + this._receivedLength;
        let to = from + chunkSize;

        if (this._contentLength != null) {
            if (to - this._range.from >= this._contentLength) {
                to = this._range.from + this._contentLength - 1;
            }
        }

        this._currentRequestRange = {from, to};
        this._internalOpen(this._dataSource, this._currentRequestRange);
    }

    _internalOpen(dataSource, range) {
        this._lastTimeLoaded = 0;

        let sourceURL = dataSource.url;
        if (this._config.reuseRedirectedURL) {
            if (this._currentRedirectedURL != undefined) {
                sourceURL = this._currentRedirectedURL;
            } else if (dataSource.redirectedURL != undefined) {
                sourceURL = dataSource.redirectedURL;
            }
        }

        let seekConfig = this._seekHandler.getConfig(sourceURL, range);
        this._currentRequestURL = seekConfig.url;

        let xhr = this._xhr = new XMLHttpRequest();
        xhr.open('GET', seekConfig.url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onreadystatechange = this._onReadyStateChange.bind(this);
        xhr.onprogress = this._onProgress.bind(this);
        xhr.onload = this._onLoad.bind(this);
        xhr.onerror = this._onXhrError.bind(this);

        if (dataSource.withCredentials && xhr['withCredentials']) {
            xhr.withCredentials = true;
        }

        if (typeof seekConfig.headers === 'object') {
            let headers = seekConfig.headers;

            for (let key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
        }

        xhr.send();
    }

    abort() {
        this._requestAbort = true;
        this._internalAbort();
        this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kComplete;
    }

    _internalAbort() {
        if (this._xhr) {
            this._xhr.onreadystatechange = null;
            this._xhr.onprogress = null;
            this._xhr.onload = null;
            this._xhr.onerror = null;
            this._xhr.abort();
            this._xhr = null;
        }
    }

    _onReadyStateChange(e) {
        let xhr = e.target;

        if (xhr.readyState === 2) {  // HEADERS_RECEIVED
            if (xhr.responseURL != undefined) {  // if the browser support this property
                let redirectedURL = this._seekHandler.removeURLParameters(xhr.responseURL);
                if (xhr.responseURL !== this._currentRequestURL && redirectedURL !== this._currentRedirectedURL) {
                    this._currentRedirectedURL = redirectedURL;
                    if (this._onURLRedirect) {
                        this._onURLRedirect(redirectedURL);
                    }
                }
            }

            if ((xhr.status >= 200 && xhr.status <= 299)) {
                if (this._waitForTotalLength) {
                    return;
                }
                this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kBuffering;
            } else {
                this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kError;
                if (this._onError) {
                    this._onError(__WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].HTTP_STATUS_CODE_INVALID, {code: xhr.status, msg: xhr.statusText});
                } else {
                    throw new __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__["c" /* RuntimeException */]('RangeLoader: Http code invalid, ' + xhr.status + ' ' + xhr.statusText);
                }
            }
        }
    }

    _onProgress(e) {
        if (this._contentLength === null) {
            let openNextRange = false;

            if (this._waitForTotalLength) {
                this._waitForTotalLength = false;
                this._totalLengthReceived = true;
                openNextRange = true;

                let total = e.total;
                this._internalAbort();
                if (total != null & total !== 0) {
                    this._totalLength = total;
                }
            }

            // calculate currrent request range's contentLength
            if (this._range.to === -1) {
                this._contentLength = this._totalLength - this._range.from;
            } else {  // to !== -1
                this._contentLength = this._range.to - this._range.from + 1;
            }

            if (openNextRange) {
                this._openSubRange();
                return;
            }
            if (this._onContentLengthKnown) {
                this._onContentLengthKnown(this._contentLength);
            }
        }

        let delta = e.loaded - this._lastTimeLoaded;
        this._lastTimeLoaded = e.loaded;
        this._speedSampler.addBytes(delta);
    }

    _normalizeSpeed(input) {
        let list = this._chunkSizeKBList;
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        if (input < list[0]) {
            return list[0];
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || (input >= list[mid] && input < list[mid + 1])) {
                return list[mid];
            } else if (list[mid] < input) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
    }

    _onLoad(e) {
        if (this._waitForTotalLength) {
            this._waitForTotalLength = false;
            return;
        }

        this._lastTimeLoaded = 0;
        let KBps = this._speedSampler.lastSecondKBps;
        if (KBps === 0) {
            this._zeroSpeedChunkCount++;
            if (this._zeroSpeedChunkCount >= 3) {
                // Try get currentKBps after 3 chunks
                KBps = this._speedSampler.currentKBps;
            }
        }

        if (KBps !== 0) {
            let normalized = this._normalizeSpeed(KBps);
            if (this._currentSpeedNormalized !== normalized) {
                this._currentSpeedNormalized = normalized;
                this._currentChunkSizeKB = normalized;
            }
        }

        let chunk = e.target.response;
        let byteStart = this._range.from + this._receivedLength;
        this._receivedLength += chunk.byteLength;

        let reportComplete = false;

        if (this._contentLength != null && this._receivedLength < this._contentLength) {
            // continue load next chunk
            this._openSubRange();
        } else {
            reportComplete = true;
        }

        // dispatch received chunk
        if (this._onDataArrival) {
            this._onDataArrival(chunk, byteStart, this._receivedLength);
        }

        if (reportComplete) {
            this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kComplete;
            if (this._onComplete) {
                this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
            }
        }
    }

    _onXhrError(e) {
        this._status = __WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* LoaderStatus */].kError;
        let type = 0;
        let info = null;

        if (this._contentLength && this._receivedLength > 0
                                && this._receivedLength < this._contentLength) {
            type = __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].EARLY_EOF;
            info = {code: -1, msg: 'RangeLoader meet Early-Eof'};
        } else {
            type = __WEBPACK_IMPORTED_MODULE_2__loader_js__["a" /* LoaderErrors */].EXCEPTION;
            info = {code: -1, msg: e.constructor.name + ' ' + e.type};
        }

        if (this._onError) {
            this._onError(type, info);
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__["c" /* RuntimeException */](info.msg);
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (RangeLoader);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_events_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_transmuxer_js__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_mse_controller_js__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_mse_events_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__player_errors_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */













class FlvPlayer {

    constructor(mediaDataSource, config) {
        this.TAG = 'FlvPlayer';
        this._type = 'FlvPlayer';
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

        this._config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__config_js__["a" /* createDefaultConfig */])();
        if (typeof config === 'object') {
            Object.assign(this._config, config);
        }

        if (mediaDataSource.type.toLowerCase() !== 'flv') {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["a" /* InvalidArgumentException */]('FlvPlayer requires an flv MediaDataSource input!');
        }

        if (mediaDataSource.isLive === true) {
            this._config.isLive = true;
        }

        this.e = {
            onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
            onvSeeking: this._onvSeeking.bind(this),
            onvCanPlay: this._onvCanPlay.bind(this),
            onvStalled: this._onvStalled.bind(this),
            onvProgress: this._onvProgress.bind(this)
        };

        if (self.performance && self.performance.now) {
            this._now = self.performance.now.bind(self.performance);
        } else {
            this._now = Date.now;
        }

        this._pendingSeekTime = null;  // in seconds
        this._requestSetTime = false;
        this._seekpointRecord = null;
        this._progressChecker = null;

        this._mediaDataSource = mediaDataSource;
        this._mediaElement = null;
        this._msectl = null;
        this._transmuxer = null;

        this._mseSourceOpened = false;
        this._hasPendingLoad = false;
        this._receivedCanPlay = false;

        this._mediaInfo = null;
        this._statisticsInfo = null;

        let chromeNeedIDRFix = (__WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].chrome &&
                               (__WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].version.major < 50 ||
                               (__WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].version.major === 50 && __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].version.build < 2661)));
        this._alwaysSeekKeyframe = (chromeNeedIDRFix || __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].msedge || __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].msie) ? true : false;

        if (this._alwaysSeekKeyframe) {
            this._config.accurateSeek = false;
        }
    }

    destroy() {
        if (this._progressChecker != null) {
            window.clearInterval(this._progressChecker);
            this._progressChecker = null;
        }
        if (this._transmuxer) {
            this.unload();
        }
        if (this._mediaElement) {
            this.detachMediaElement();
        }
        this.e = null;
        this._mediaDataSource = null;

        this._emitter.removeAllListeners();
        this._emitter = null;
    }

    on(event, listener) {
        if (event === __WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].MEDIA_INFO) {
            if (this._mediaInfo != null) {
                Promise.resolve().then(() => {
                    this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].MEDIA_INFO, this.mediaInfo);
                });
            }
        } else if (event === __WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].STATISTICS_INFO) {
            if (this._statisticsInfo != null) {
                Promise.resolve().then(() => {
                    this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].STATISTICS_INFO, this.statisticsInfo);
                });
            }
        }
        this._emitter.addListener(event, listener);
    }

    off(event, listener) {
        this._emitter.removeListener(event, listener);
    }

    attachMediaElement(mediaElement) {
        this._mediaElement = mediaElement;
        mediaElement.addEventListener('loadedmetadata', this.e.onvLoadedMetadata);
        mediaElement.addEventListener('seeking', this.e.onvSeeking);
        mediaElement.addEventListener('canplay', this.e.onvCanPlay);
        mediaElement.addEventListener('stalled', this.e.onvStalled);
        mediaElement.addEventListener('progress', this.e.onvProgress);

        this._msectl = new __WEBPACK_IMPORTED_MODULE_6__core_mse_controller_js__["a" /* default */](this._config);

        this._msectl.on(__WEBPACK_IMPORTED_MODULE_7__core_mse_events_js__["a" /* default */].UPDATE_END, this._onmseUpdateEnd.bind(this));
        this._msectl.on(__WEBPACK_IMPORTED_MODULE_7__core_mse_events_js__["a" /* default */].BUFFER_FULL, this._onmseBufferFull.bind(this));
        this._msectl.on(__WEBPACK_IMPORTED_MODULE_7__core_mse_events_js__["a" /* default */].SOURCE_OPEN, () => {
            this._mseSourceOpened = true;
            if (this._hasPendingLoad) {
                this._hasPendingLoad = false;
                this.load();
            }
        });
        this._msectl.on(__WEBPACK_IMPORTED_MODULE_7__core_mse_events_js__["a" /* default */].ERROR, (info) => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].ERROR,
                               __WEBPACK_IMPORTED_MODULE_8__player_errors_js__["a" /* ErrorTypes */].MEDIA_ERROR,
                               __WEBPACK_IMPORTED_MODULE_8__player_errors_js__["b" /* ErrorDetails */].MEDIA_MSE_ERROR,
                               info
            );
        });

        this._msectl.attachMediaElement(mediaElement);

        if (this._pendingSeekTime != null) {
            try {
                mediaElement.currentTime = this._pendingSeekTime;
                this._pendingSeekTime = null;
            } catch (e) {
                // IE11 may throw InvalidStateError if readyState === 0
                // We can defer set currentTime operation after loadedmetadata
            }
        }
    }

    detachMediaElement() {
        if (this._mediaElement) {
            this._msectl.detachMediaElement();
            this._mediaElement.removeEventListener('loadedmetadata', this.e.onvLoadedMetadata);
            this._mediaElement.removeEventListener('seeking', this.e.onvSeeking);
            this._mediaElement.removeEventListener('canplay', this.e.onvCanPlay);
            this._mediaElement.removeEventListener('stalled', this.e.onvStalled);
            this._mediaElement.removeEventListener('progress', this.e.onvProgress);
            this._mediaElement = null;
        }
        if (this._msectl) {
            this._msectl.destroy();
            this._msectl = null;
        }
    }

    load() {
        if (!this._mediaElement) {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["d" /* IllegalStateException */]('HTMLMediaElement must be attached before load()!');
        }
        if (this._transmuxer) {
            throw new __WEBPACK_IMPORTED_MODULE_10__utils_exception_js__["d" /* IllegalStateException */]('FlvPlayer.load() has been called, please call unload() first!');
        }
        if (this._hasPendingLoad) {
            return;
        }

        if (this._config.deferLoadAfterSourceOpen && this._mseSourceOpened === false) {
            this._hasPendingLoad = true;
            return;
        }

        if (this._mediaElement.readyState > 0) {
            this._requestSetTime = true;
            // IE11 may throw InvalidStateError if readyState === 0
            this._mediaElement.currentTime = 0;
        }

        this._transmuxer = new __WEBPACK_IMPORTED_MODULE_4__core_transmuxer_js__["a" /* default */](this._mediaDataSource, this._config);

        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].INIT_SEGMENT, (type, is) => {
            this._msectl.appendInitSegment(is);
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].MEDIA_SEGMENT, (type, ms) => {
            this._msectl.appendMediaSegment(ms);

            // lazyLoad check
            if (this._config.lazyLoad && !this._config.isLive) {
                let currentTime = this._mediaElement.currentTime;
                if (ms.info.endDts >= (currentTime + this._config.lazyLoadMaxDuration) * 1000) {
                    if (this._progressChecker == null) {
                        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'Maximum buffering duration exceeded, suspend transmuxing task');
                        this._suspendTransmuxer();
                    }
                }
            }
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].LOADING_COMPLETE, () => {
            this._msectl.endOfStream();
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].LOADING_COMPLETE);
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].RECOVERED_EARLY_EOF, () => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].RECOVERED_EARLY_EOF);
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].IO_ERROR, (detail, info) => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].ERROR, __WEBPACK_IMPORTED_MODULE_8__player_errors_js__["a" /* ErrorTypes */].NETWORK_ERROR, detail, info);
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].DEMUX_ERROR, (detail, info) => {
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].ERROR, __WEBPACK_IMPORTED_MODULE_8__player_errors_js__["a" /* ErrorTypes */].MEDIA_ERROR, detail, {code: -1, msg: info});
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].MEDIA_INFO, (mediaInfo) => {
            this._mediaInfo = mediaInfo;
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].MEDIA_INFO, Object.assign({}, mediaInfo));
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].STATISTICS_INFO, (statInfo) => {
            this._statisticsInfo = this._fillStatisticsInfo(statInfo);
            this._emitter.emit(__WEBPACK_IMPORTED_MODULE_3__player_events_js__["a" /* default */].STATISTICS_INFO, Object.assign({}, this._statisticsInfo));
        });
        this._transmuxer.on(__WEBPACK_IMPORTED_MODULE_5__core_transmuxing_events_js__["a" /* default */].RECOMMEND_SEEKPOINT, (milliseconds) => {
            if (this._mediaElement && !this._config.accurateSeek) {
                this._requestSetTime = true;
                this._mediaElement.currentTime = milliseconds / 1000;
            }
        });

        this._transmuxer.open();
    }

    unload() {
        if (this._mediaElement) {
            this._mediaElement.pause();
        }
        if (this._msectl) {
            this._msectl.seek(0);
        }
        if (this._transmuxer) {
            this._transmuxer.close();
            this._transmuxer.destroy();
            this._transmuxer = null;
        }
    }

    play() {
        return this._mediaElement.play();
    }

    pause() {
        this._mediaElement.pause();
    }

    get type() {
        return this._type;
    }

    get buffered() {
        return this._mediaElement.buffered;
    }

    get duration() {
        return this._mediaElement.duration;
    }

    get volume() {
        return this._mediaElement.volume;
    }

    set volume(value) {
        this._mediaElement.volume = value;
    }

    get muted() {
        return this._mediaElement.muted;
    }

    set muted(muted) {
        this._mediaElement.muted = muted;
    }

    get currentTime() {
        if (this._mediaElement) {
            return this._mediaElement.currentTime;
        }
        return 0;
    }

    set currentTime(seconds) {
        if (this._mediaElement) {
            this._internalSeek(seconds);
        } else {
            this._pendingSeekTime = seconds;
        }
    }

    get mediaInfo() {
        return Object.assign({}, this._mediaInfo);
    }

    get statisticsInfo() {
        if (this._statisticsInfo == null) {
            this._statisticsInfo = {};
        }
        this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo);
        return Object.assign({}, this._statisticsInfo);
    }

    _fillStatisticsInfo(statInfo) {
        statInfo.playerType = this._type;

        if (!(this._mediaElement instanceof HTMLVideoElement)) {
            return statInfo;
        }

        let hasQualityInfo = true;
        let decoded = 0;
        let dropped = 0;

        if (this._mediaElement.getVideoPlaybackQuality) {
            let quality = this._mediaElement.getVideoPlaybackQuality();
            decoded = quality.totalVideoFrames;
            dropped = quality.droppedVideoFrames;
        } else if (this._mediaElement.webkitDecodedFrameCount != undefined) {
            decoded = this._mediaElement.webkitDecodedFrameCount;
            dropped = this._mediaElement.webkitDroppedFrameCount;
        } else {
            hasQualityInfo = false;
        }

        if (hasQualityInfo) {
            statInfo.decodedFrames = decoded;
            statInfo.droppedFrames = dropped;
        }

        return statInfo;
    }

    _onmseUpdateEnd() {
        if (!this._config.lazyLoad || this._config.isLive) {
            return;
        }

        let buffered = this._mediaElement.buffered;
        let currentTime = this._mediaElement.currentTime;
        let currentRangeStart = 0;
        let currentRangeEnd = 0;

        for (let i = 0; i < buffered.length; i++) {
            let start = buffered.start(i);
            let end = buffered.end(i);
            if (start <= currentTime && currentTime < end) {
                currentRangeStart = start;
                currentRangeEnd = end;
                break;
            }
        }

        if (currentRangeEnd >= currentTime + this._config.lazyLoadMaxDuration && this._progressChecker == null) {
            __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'Maximum buffering duration exceeded, suspend transmuxing task');
            this._suspendTransmuxer();
        }
    }

    _onmseBufferFull() {
        __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'MSE SourceBuffer is full, suspend transmuxing task');
        if (this._progressChecker == null) {
            this._suspendTransmuxer();
        }
    }

    _suspendTransmuxer() {
        if (this._transmuxer) {
            this._transmuxer.pause();

            if (this._progressChecker == null) {
                this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1000);
            }
        }
    }

    _checkProgressAndResume() {
        let currentTime = this._mediaElement.currentTime;
        let buffered = this._mediaElement.buffered;

        let needResume = false;

        for (let i = 0; i < buffered.length; i++) {
            let from = buffered.start(i);
            let to = buffered.end(i);
            if (currentTime >= from && currentTime < to) {
                if (currentTime >= to - this._config.lazyLoadRecoverDuration) {
                    needResume = true;
                }
                break;
            }
        }

        if (needResume) {
            window.clearInterval(this._progressChecker);
            this._progressChecker = null;
            if (needResume) {
                __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].v(this.TAG, 'Continue loading from paused position');
                this._transmuxer.resume();
            }
        }
    }

    _isTimepointBuffered(seconds) {
        let buffered = this._mediaElement.buffered;

        for (let i = 0; i < buffered.length; i++) {
            let from = buffered.start(i);
            let to = buffered.end(i);
            if (seconds >= from && seconds < to) {
                return true;
            }
        }
        return false;
    }

    _internalSeek(seconds) {
        let directSeek = this._isTimepointBuffered(seconds);

        let directSeekBegin = false;
        let directSeekBeginTime = 0;

        if (seconds < 1.0 && this._mediaElement.buffered.length > 0) {
            let videoBeginTime = this._mediaElement.buffered.start(0);
            if ((videoBeginTime < 1.0 && seconds < videoBeginTime) || __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].safari) {
                directSeekBegin = true;
                // also workaround for Safari: Seek to 0 may cause video stuck, use 0.1 to avoid
                directSeekBeginTime = __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].safari ? 0.1 : videoBeginTime;
            }
        }

        if (directSeekBegin) {  // seek to video begin, set currentTime directly if beginPTS buffered
            this._requestSetTime = true;
            this._mediaElement.currentTime = directSeekBeginTime;
        }  else if (directSeek) {  // buffered position
            if (!this._alwaysSeekKeyframe) {
                this._requestSetTime = true;
                this._mediaElement.currentTime = seconds;
            } else {
                let idr = this._msectl.getNearestKeyframe(Math.floor(seconds * 1000));
                this._requestSetTime = true;
                if (idr != null) {
                    this._mediaElement.currentTime = idr.dts / 1000;
                } else {
                    this._mediaElement.currentTime = seconds;
                }
            }
            if (this._progressChecker != null) {
                this._checkProgressAndResume();
            }
        } else {
            if (this._progressChecker != null) {
                window.clearInterval(this._progressChecker);
                this._progressChecker = null;
            }
            this._msectl.seek(seconds);
            this._transmuxer.seek(Math.floor(seconds * 1000));  // in milliseconds
            // no need to set mediaElement.currentTime if non-accurateSeek,
            // just wait for the recommend_seekpoint callback
            if (this._config.accurateSeek) {
                this._requestSetTime = true;
                this._mediaElement.currentTime = seconds;
            }
        }
    }

    _checkAndApplyUnbufferedSeekpoint() {
        if (this._seekpointRecord) {
            if (this._seekpointRecord.recordTime <= this._now() - 100) {
                let target = this._mediaElement.currentTime;
                this._seekpointRecord = null;
                if (!this._isTimepointBuffered(target)) {
                    if (this._progressChecker != null) {
                        window.clearTimeout(this._progressChecker);
                        this._progressChecker = null;
                    }
                    // .currentTime is consists with .buffered timestamp
                    // Chrome/Edge use DTS, while FireFox/Safari use PTS
                    this._msectl.seek(target);
                    this._transmuxer.seek(Math.floor(target * 1000));
                    // set currentTime if accurateSeek, or wait for recommend_seekpoint callback
                    if (this._config.accurateSeek) {
                        this._requestSetTime = true;
                        this._mediaElement.currentTime = target;
                    }
                }
            } else {
                window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
            }
        }
    }

    _checkAndResumeStuckPlayback(stalled) {
        let media = this._mediaElement;
        if (stalled || !this._receivedCanPlay || media.readyState < 2) {  // HAVE_CURRENT_DATA
            let buffered = media.buffered;
            if (buffered.length > 0 && media.currentTime < buffered.start(0)) {
                __WEBPACK_IMPORTED_MODULE_1__utils_logger_js__["a" /* default */].w(this.TAG, `Playback seems stuck at ${media.currentTime}, seek to ${buffered.start(0)}`);
                this._requestSetTime = true;
                this._mediaElement.currentTime = buffered.start(0);
                this._mediaElement.removeEventListener('progress', this.e.onvProgress);
            }
        } else {
            // Playback didn't stuck, remove progress event listener
            this._mediaElement.removeEventListener('progress', this.e.onvProgress);
        }
    }

    _onvLoadedMetadata(e) {
        if (this._pendingSeekTime != null) {
            this._mediaElement.currentTime = this._pendingSeekTime;
            this._pendingSeekTime = null;
        }
    }

    _onvSeeking(e) {  // handle seeking request from browser's progress bar
        let target = this._mediaElement.currentTime;
        let buffered = this._mediaElement.buffered;

        if (this._requestSetTime) {
            this._requestSetTime = false;
            return;
        }

        if (target < 1.0 && buffered.length > 0) {
            // seek to video begin, set currentTime directly if beginPTS buffered
            let videoBeginTime = buffered.start(0);
            if ((videoBeginTime < 1.0 && target < videoBeginTime) || __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].safari) {
                this._requestSetTime = true;
                // also workaround for Safari: Seek to 0 may cause video stuck, use 0.1 to avoid
                this._mediaElement.currentTime = __WEBPACK_IMPORTED_MODULE_2__utils_browser_js__["a" /* default */].safari ? 0.1 : videoBeginTime;
                return;
            }
        }

        if (this._isTimepointBuffered(target)) {
            if (this._alwaysSeekKeyframe) {
                let idr = this._msectl.getNearestKeyframe(Math.floor(target * 1000));
                if (idr != null) {
                    this._requestSetTime = true;
                    this._mediaElement.currentTime = idr.dts / 1000;
                }
            }
            if (this._progressChecker != null) {
                this._checkProgressAndResume();
            }
            return;
        }

        this._seekpointRecord = {
            seekPoint: target,
            recordTime: this._now()
        };
        window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
    }

    _onvCanPlay(e) {
        this._receivedCanPlay = true;
        this._mediaElement.removeEventListener('canplay', this.e.onvCanPlay);
    }

    _onvStalled(e) {
        this._checkAndResumeStuckPlayback(true);
    }

    _onvProgress(e) {
        this._checkAndResumeStuckPlayback();
    }

}

/* harmony default export */ __webpack_exports__["a"] = (FlvPlayer);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_events_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






// Player wrapper for browser's native player (HTMLVideoElement) without MediaSource src. 
class NativePlayer {

    constructor(mediaDataSource, config) {
        this.TAG = 'NativePlayer';
        this._type = 'NativePlayer';
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

        this._config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* createDefaultConfig */])();
        if (typeof config === 'object') {
            Object.assign(this._config, config);
        }

        if (mediaDataSource.type.toLowerCase() === 'flv') {
            throw new __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__["a" /* InvalidArgumentException */]('NativePlayer does\'t support flv MediaDataSource input!');
        }
        if (mediaDataSource.hasOwnProperty('segments')) {
            throw new __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__["a" /* InvalidArgumentException */](`NativePlayer(${mediaDataSource.type}) doesn't support multipart playback!`);
        }

        this.e = {
            onvLoadedMetadata: this._onvLoadedMetadata.bind(this)
        };

        this._pendingSeekTime = null;
        this._statisticsReporter = null;

        this._mediaDataSource = mediaDataSource;
        this._mediaElement = null;
    }

    destroy() {
        if (this._mediaElement) {
            this.unload();
            this.detachMediaElement();
        }
        this.e = null;
        this._mediaDataSource = null;
        this._emitter.removeAllListeners();
        this._emitter = null;
    }

    on(event, listener) {
        if (event === __WEBPACK_IMPORTED_MODULE_1__player_events_js__["a" /* default */].MEDIA_INFO) {
            if (this._mediaElement != null && this._mediaElement.readyState !== 0) {  // HAVE_NOTHING
                Promise.resolve().then(() => {
                    this._emitter.emit(__WEBPACK_IMPORTED_MODULE_1__player_events_js__["a" /* default */].MEDIA_INFO, this.mediaInfo);
                });
            }
        } else if (event === __WEBPACK_IMPORTED_MODULE_1__player_events_js__["a" /* default */].STATISTICS_INFO) {
            if (this._mediaElement != null && this._mediaElement.readyState !== 0) {
                Promise.resolve().then(() => {
                    this._emitter.emit(__WEBPACK_IMPORTED_MODULE_1__player_events_js__["a" /* default */].STATISTICS_INFO, this.statisticsInfo);
                });
            }
        }
        this._emitter.addListener(event, listener);
    }

    off(event, listener) {
        this._emitter.removeListener(event, listener);
    }

    attachMediaElement(mediaElement) {
        this._mediaElement = mediaElement;
        mediaElement.addEventListener('loadedmetadata', this.e.onvLoadedMetadata);

        if (this._pendingSeekTime != null) {
            try {
                mediaElement.currentTime = this._pendingSeekTime;
                this._pendingSeekTime = null;
            } catch (e) {
                // IE11 may throw InvalidStateError if readyState === 0
                // Defer set currentTime operation after loadedmetadata
            }
        }
    }

    detachMediaElement() {
        if (this._mediaElement) {
            this._mediaElement.src = '';
            this._mediaElement.removeAttribute('src');
            this._mediaElement.removeEventListener('loadedmetadata', this.e.onvLoadedMetadata);
            this._mediaElement = null;
        }
        if (this._statisticsReporter != null) {
            window.clearInterval(this._statisticsReporter);
            this._statisticsReporter = null;
        }
    }

    load() {
        if (!this._mediaElement) {
            throw new __WEBPACK_IMPORTED_MODULE_3__utils_exception_js__["d" /* IllegalStateException */]('HTMLMediaElement must be attached before load()!');
        }
        this._mediaElement.src = this._mediaDataSource.url;

        if (this._mediaElement.readyState > 0) {
            this._mediaElement.currentTime = 0;
        }

        this._mediaElement.preload = 'auto';
        this._mediaElement.load();
        this._statisticsReporter = window.setInterval(
            this._reportStatisticsInfo.bind(this),
        this._config.statisticsInfoReportInterval);
    }

    unload() {
        if (this._mediaElement) {
            this._mediaElement.src = '';
            this._mediaElement.removeAttribute('src');
        }
        if (this._statisticsReporter != null) {
            window.clearInterval(this._statisticsReporter);
            this._statisticsReporter = null;
        }
    }

    play() {
        return this._mediaElement.play();
    }

    pause() {
        this._mediaElement.pause();
    }

    get type() {
        return this._type;
    }

    get buffered() {
        return this._mediaElement.buffered;
    }

    get duration() {
        return this._mediaElement.duration;
    }

    get volume() {
        return this._mediaElement.volume;
    }

    set volume(value) {
        this._mediaElement.volume = value;
    }

    get muted() {
        return this._mediaElement.muted;
    }

    set muted(muted) {
        this._mediaElement.muted = muted;
    }

    get currentTime() {
        if (this._mediaElement) {
            return this._mediaElement.currentTime;
        }
        return 0;
    }

    set currentTime(seconds) {
        if (this._mediaElement) {
            this._mediaElement.currentTime = seconds;
        } else {
            this._pendingSeekTime = seconds;
        }
    }

    get mediaInfo() {
        let mediaPrefix = (this._mediaElement instanceof HTMLAudioElement) ? 'audio/' : 'video/';
        let info = {
            mimeType: mediaPrefix + this._mediaDataSource.type
        };
        if (this._mediaElement) {
            info.duration = Math.floor(this._mediaElement.duration * 1000);
            if (this._mediaElement instanceof HTMLVideoElement) {
                info.width = this._mediaElement.videoWidth;
                info.height = this._mediaElement.videoHeight;
            }
        }
        return info;
    }

    get statisticsInfo() {
        let info = {
            playerType: this._type,
            url: this._mediaDataSource.url
        };

        if (!(this._mediaElement instanceof HTMLVideoElement)) {
            return info;
        }

        let hasQualityInfo = true;
        let decoded = 0;
        let dropped = 0;

        if (this._mediaElement.getVideoPlaybackQuality) {
            let quality = this._mediaElement.getVideoPlaybackQuality();
            decoded = quality.totalVideoFrames;
            dropped = quality.droppedVideoFrames;
        } else if (this._mediaElement.webkitDecodedFrameCount != undefined) {
            decoded = this._mediaElement.webkitDecodedFrameCount;
            dropped = this._mediaElement.webkitDroppedFrameCount;
        } else {
            hasQualityInfo = false;
        }

        if (hasQualityInfo) {
            info.decodedFrames = decoded;
            info.droppedFrames = dropped;
        }
        
        return info;
    }

    _onvLoadedMetadata(e) {
        if (this._pendingSeekTime != null) {
            this._mediaElement.currentTime = this._pendingSeekTime;
            this._pendingSeekTime = null;
        }
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_1__player_events_js__["a" /* default */].MEDIA_INFO, this.mediaInfo);
    }

    _reportStatisticsInfo() {
        this._emitter.emit(__WEBPACK_IMPORTED_MODULE_1__player_events_js__["a" /* default */].STATISTICS_INFO, this.statisticsInfo);
    }

}

/* harmony default export */ __webpack_exports__["a"] = (NativePlayer);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * This file is modified from dailymotion's hls.js library (hls.js/src/helper/aac.js)
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class AAC {

    static getSilentFrame(codec, channelCount) {
        if (codec === 'mp4a.40.2') {
            // handle LC-AAC
            if (channelCount === 1) {
                return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
            } else if (channelCount === 2) {
                return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
            } else if (channelCount === 3) {
                return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
            } else if (channelCount === 4) {
                return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
            } else if (channelCount === 5) {
                return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
            } else if (channelCount === 6) {
                return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
            }
        } else {
            // handle HE-AAC (mp4a.40.5 / mp4a.40.29)
            if (channelCount === 1) {
                // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
            } else if (channelCount === 2) {
                // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
            } else if (channelCount === 3) {
                // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
            }
        }
        return null;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (AAC);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * This file is derived from dailymotion's hls.js library (hls.js/src/remux/mp4-generator.js)
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//  MP4 boxes generator for ISO BMFF (ISO Base Media File Format, defined in ISO/IEC 14496-12)
class MP4 {

    static init() {
        MP4.types = {
            avc1: [], avcC: [], btrt: [], dinf: [],
            dref: [], esds: [], ftyp: [], hdlr: [],
            mdat: [], mdhd: [], mdia: [], mfhd: [],
            minf: [], moof: [], moov: [], mp4a: [],
            mvex: [], mvhd: [], sdtp: [], stbl: [],
            stco: [], stsc: [], stsd: [], stsz: [],
            stts: [], tfdt: [], tfhd: [], traf: [],
            trak: [], trun: [], trex: [], tkhd: [],
            vmhd: [], smhd: [], '.mp3': []
        };

        for (let name in MP4.types) {
            if (MP4.types.hasOwnProperty(name)) {
                MP4.types[name] = [
                    name.charCodeAt(0),
                    name.charCodeAt(1),
                    name.charCodeAt(2),
                    name.charCodeAt(3)
                ];
            }
        }

        let constants = MP4.constants = {};

        constants.FTYP = new Uint8Array([
            0x69, 0x73, 0x6F, 0x6D,  // major_brand: isom
            0x0,  0x0,  0x0,  0x1,   // minor_version: 0x01
            0x69, 0x73, 0x6F, 0x6D,  // isom
            0x61, 0x76, 0x63, 0x31   // avc1
        ]);

        constants.STSD_PREFIX = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x01   // entry_count
        ]);

        constants.STTS = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00   // entry_count
        ]);

        constants.STSC = constants.STCO = constants.STTS;

        constants.STSZ = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00,  // sample_size
            0x00, 0x00, 0x00, 0x00   // sample_count
        ]);

        constants.HDLR_VIDEO = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00,  // pre_defined
            0x76, 0x69, 0x64, 0x65,  // handler_type: 'vide'
            0x00, 0x00, 0x00, 0x00,  // reserved: 3 * 4 bytes
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x56, 0x69, 0x64, 0x65,
            0x6F, 0x48, 0x61, 0x6E,
            0x64, 0x6C, 0x65, 0x72, 0x00  // name: VideoHandler
        ]);

        constants.HDLR_AUDIO = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00,  // pre_defined
            0x73, 0x6F, 0x75, 0x6E,  // handler_type: 'soun'
            0x00, 0x00, 0x00, 0x00,  // reserved: 3 * 4 bytes
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x53, 0x6F, 0x75, 0x6E,
            0x64, 0x48, 0x61, 0x6E,
            0x64, 0x6C, 0x65, 0x72, 0x00  // name: SoundHandler
        ]);

        constants.DREF = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x01,  // entry_count
            0x00, 0x00, 0x00, 0x0C,  // entry_size
            0x75, 0x72, 0x6C, 0x20,  // type 'url '
            0x00, 0x00, 0x00, 0x01   // version(0) + flags
        ]);

        // Sound media header
        constants.SMHD = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00   // balance(2) + reserved(2)
        ]);

        // video media header
        constants.VMHD = new Uint8Array([
            0x00, 0x00, 0x00, 0x01,  // version(0) + flags
            0x00, 0x00,              // graphicsmode: 2 bytes
            0x00, 0x00, 0x00, 0x00,  // opcolor: 3 * 2 bytes
            0x00, 0x00
        ]);
    }

    // Generate a box
    static box(type) {
        let size = 8;
        let result = null;
        let datas = Array.prototype.slice.call(arguments, 1);
        let arrayCount = datas.length;

        for (let i = 0; i < arrayCount; i++) {
            size += datas[i].byteLength;
        }

        result = new Uint8Array(size);
        result[0] = (size >>> 24) & 0xFF;  // size
        result[1] = (size >>> 16) & 0xFF;
        result[2] = (size >>>  8) & 0xFF;
        result[3] = (size) & 0xFF;

        result.set(type, 4);  // type

        let offset = 8;
        for (let i = 0; i < arrayCount; i++) {  // data body
            result.set(datas[i], offset);
            offset += datas[i].byteLength;
        }

        return result;
    }

    // emit ftyp & moov
    static generateInitSegment(meta) {
        let ftyp = MP4.box(MP4.types.ftyp, MP4.constants.FTYP);
        let moov = MP4.moov(meta);

        let result = new Uint8Array(ftyp.byteLength + moov.byteLength);
        result.set(ftyp, 0);
        result.set(moov, ftyp.byteLength);
        return result;
    }

    // Movie metadata box
    static moov(meta) {
        let mvhd = MP4.mvhd(meta.timescale, meta.duration);
        let trak = MP4.trak(meta);
        let mvex = MP4.mvex(meta);
        return MP4.box(MP4.types.moov, mvhd, trak, mvex);
    }

    // Movie header box
    static mvhd(timescale, duration) {
        return MP4.box(MP4.types.mvhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00,  // creation_time
            0x00, 0x00, 0x00, 0x00,  // modification_time
            (timescale >>> 24) & 0xFF,  // timescale: 4 bytes
            (timescale >>> 16) & 0xFF,
            (timescale >>>  8) & 0xFF,
            (timescale) & 0xFF,
            (duration >>> 24) & 0xFF,   // duration: 4 bytes
            (duration >>> 16) & 0xFF,
            (duration >>>  8) & 0xFF,
            (duration) & 0xFF,
            0x00, 0x01, 0x00, 0x00,  // Preferred rate: 1.0
            0x01, 0x00, 0x00, 0x00,  // PreferredVolume(1.0, 2bytes) + reserved(2bytes)
            0x00, 0x00, 0x00, 0x00,  // reserved: 4 + 4 bytes
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,  // ----begin composition matrix----
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x40, 0x00, 0x00, 0x00,  // ----end composition matrix----
            0x00, 0x00, 0x00, 0x00,  // ----begin pre_defined 6 * 4 bytes----
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,  // ----end pre_defined 6 * 4 bytes----
            0xFF, 0xFF, 0xFF, 0xFF   // next_track_ID
        ]));
    }

    // Track box
    static trak(meta) {
        return MP4.box(MP4.types.trak, MP4.tkhd(meta), MP4.mdia(meta));
    }

    // Track header box
    static tkhd(meta) {
        let trackId = meta.id, duration = meta.duration;
        let width = meta.presentWidth, height = meta.presentHeight;

        return MP4.box(MP4.types.tkhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x07,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00,  // creation_time
            0x00, 0x00, 0x00, 0x00,  // modification_time
            (trackId >>> 24) & 0xFF,  // track_ID: 4 bytes
            (trackId >>> 16) & 0xFF,
            (trackId >>>  8) & 0xFF,
            (trackId) & 0xFF,
            0x00, 0x00, 0x00, 0x00,  // reserved: 4 bytes
            (duration >>> 24) & 0xFF, // duration: 4 bytes
            (duration >>> 16) & 0xFF,
            (duration >>>  8) & 0xFF,
            (duration) & 0xFF,
            0x00, 0x00, 0x00, 0x00,  // reserved: 2 * 4 bytes
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,  // layer(2bytes) + alternate_group(2bytes)
            0x00, 0x00, 0x00, 0x00,  // volume(2bytes) + reserved(2bytes)
            0x00, 0x01, 0x00, 0x00,  // ----begin composition matrix----
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x40, 0x00, 0x00, 0x00,  // ----end composition matrix----
            (width >>> 8) & 0xFF,    // width and height
            (width) & 0xFF,
            0x00, 0x00,
            (height >>> 8) & 0xFF,
            (height) & 0xFF,
            0x00, 0x00
        ]));
    }

    // Media Box
    static mdia(meta) {
        return MP4.box(MP4.types.mdia, MP4.mdhd(meta), MP4.hdlr(meta), MP4.minf(meta));
    }

    // Media header box
    static mdhd(meta) {
        let timescale = meta.timescale;
        let duration = meta.duration;
        return MP4.box(MP4.types.mdhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            0x00, 0x00, 0x00, 0x00,  // creation_time
            0x00, 0x00, 0x00, 0x00,  // modification_time
            (timescale >>> 24) & 0xFF,  // timescale: 4 bytes
            (timescale >>> 16) & 0xFF,
            (timescale >>>  8) & 0xFF,
            (timescale) & 0xFF,
            (duration >>> 24) & 0xFF,   // duration: 4 bytes
            (duration >>> 16) & 0xFF,
            (duration >>>  8) & 0xFF,
            (duration) & 0xFF,
            0x55, 0xC4,             // language: und (undetermined)
            0x00, 0x00              // pre_defined = 0
        ]));
    }

    // Media handler reference box
    static hdlr(meta) {
        let data = null;
        if (meta.type === 'audio') {
            data = MP4.constants.HDLR_AUDIO;
        } else {
            data = MP4.constants.HDLR_VIDEO;
        }
        return MP4.box(MP4.types.hdlr, data);
    }

    // Media infomation box
    static minf(meta) {
        let xmhd = null;
        if (meta.type === 'audio') {
            xmhd = MP4.box(MP4.types.smhd, MP4.constants.SMHD);
        } else {
            xmhd = MP4.box(MP4.types.vmhd, MP4.constants.VMHD);
        }
        return MP4.box(MP4.types.minf, xmhd, MP4.dinf(), MP4.stbl(meta));
    }

    // Data infomation box
    static dinf() {
        let result = MP4.box(MP4.types.dinf,
            MP4.box(MP4.types.dref, MP4.constants.DREF)
        );
        return result;
    }

    // Sample table box
    static stbl(meta) {
        let result = MP4.box(MP4.types.stbl,  // type: stbl
            MP4.stsd(meta),  // Sample Description Table
            MP4.box(MP4.types.stts, MP4.constants.STTS),  // Time-To-Sample
            MP4.box(MP4.types.stsc, MP4.constants.STSC),  // Sample-To-Chunk
            MP4.box(MP4.types.stsz, MP4.constants.STSZ),  // Sample size
            MP4.box(MP4.types.stco, MP4.constants.STCO)   // Chunk offset
        ); 
        return result; 
    }

    // Sample description box
    static stsd(meta) {
        if (meta.type === 'audio') {
            if (meta.codec === 'mp3') {
                return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.mp3(meta));
            }
            // else: aac -> mp4a
            return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.mp4a(meta));
        } else {
            return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.avc1(meta));
        }
    }

    static mp3(meta) {
        let channelCount = meta.channelCount;
        let sampleRate = meta.audioSampleRate;

        let data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // reserved(4)
            0x00, 0x00, 0x00, 0x01,  // reserved(2) + data_reference_index(2)
            0x00, 0x00, 0x00, 0x00,  // reserved: 2 * 4 bytes
            0x00, 0x00, 0x00, 0x00,
            0x00, channelCount,      // channelCount(2)
            0x00, 0x10,              // sampleSize(2)
            0x00, 0x00, 0x00, 0x00,  // reserved(4)
            (sampleRate >>> 8) & 0xFF,  // Audio sample rate
            (sampleRate) & 0xFF,
            0x00, 0x00
        ]);

        return MP4.box(MP4.types['.mp3'], data);
    }

    static mp4a(meta) {
        let channelCount = meta.channelCount;
        let sampleRate = meta.audioSampleRate;

        let data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // reserved(4)
            0x00, 0x00, 0x00, 0x01,  // reserved(2) + data_reference_index(2)
            0x00, 0x00, 0x00, 0x00,  // reserved: 2 * 4 bytes
            0x00, 0x00, 0x00, 0x00,
            0x00, channelCount,      // channelCount(2)
            0x00, 0x10,              // sampleSize(2)
            0x00, 0x00, 0x00, 0x00,  // reserved(4)
            (sampleRate >>> 8) & 0xFF,  // Audio sample rate
            (sampleRate) & 0xFF,
            0x00, 0x00
        ]);

        return MP4.box(MP4.types.mp4a, data, MP4.esds(meta));
    }

    static esds(meta) {
        let config = meta.config || [];
        let configSize = config.length;
        let data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version 0 + flags

            0x03,                    // descriptor_type
            0x17 + configSize,       // length3
            0x00, 0x01,              // es_id
            0x00,                    // stream_priority

            0x04,                    // descriptor_type
            0x0F + configSize,       // length
            0x40,                    // codec: mpeg4_audio
            0x15,                    // stream_type: Audio
            0x00, 0x00, 0x00,        // buffer_size
            0x00, 0x00, 0x00, 0x00,  // maxBitrate
            0x00, 0x00, 0x00, 0x00,  // avgBitrate

            0x05                     // descriptor_type
        ].concat([
            configSize
        ]).concat(
            config
        ).concat([
            0x06, 0x01, 0x02         // GASpecificConfig
        ]));
        return MP4.box(MP4.types.esds, data);
    }

    static avc1(meta) {
        let avcc = meta.avcc;
        let width = meta.codecWidth, height = meta.codecHeight;

        let data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // reserved(4)
            0x00, 0x00, 0x00, 0x01,  // reserved(2) + data_reference_index(2)
            0x00, 0x00, 0x00, 0x00,  // pre_defined(2) + reserved(2)
            0x00, 0x00, 0x00, 0x00,  // pre_defined: 3 * 4 bytes
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            (width >>> 8) & 0xFF,    // width: 2 bytes
            (width) & 0xFF,
            (height >>> 8) & 0xFF,   // height: 2 bytes
            (height) & 0xFF,
            0x00, 0x48, 0x00, 0x00,  // horizresolution: 4 bytes
            0x00, 0x48, 0x00, 0x00,  // vertresolution: 4 bytes
            0x00, 0x00, 0x00, 0x00,  // reserved: 4 bytes
            0x00, 0x01,              // frame_count
            0x0A,                    // strlen
            0x78, 0x71, 0x71, 0x2F,  // compressorname: 32 bytes
            0x66, 0x6C, 0x76, 0x2E,
            0x6A, 0x73, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00,
            0x00, 0x18,              // depth
            0xFF, 0xFF               // pre_defined = -1
        ]);
        return MP4.box(MP4.types.avc1, data, MP4.box(MP4.types.avcC, avcc));
    }

    // Movie Extends box
    static mvex(meta) {
        return MP4.box(MP4.types.mvex, MP4.trex(meta));
    }

    // Track Extends box
    static trex(meta) {
        let trackId = meta.id;
        let data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) + flags
            (trackId >>> 24) & 0xFF, // track_ID
            (trackId >>> 16) & 0xFF,
            (trackId >>>  8) & 0xFF,
            (trackId) & 0xFF,
            0x00, 0x00, 0x00, 0x01,  // default_sample_description_index
            0x00, 0x00, 0x00, 0x00,  // default_sample_duration
            0x00, 0x00, 0x00, 0x00,  // default_sample_size
            0x00, 0x01, 0x00, 0x01   // default_sample_flags
        ]);
        return MP4.box(MP4.types.trex, data);
    }

    // Movie fragment box
    static moof(track, baseMediaDecodeTime) {
        return MP4.box(MP4.types.moof, MP4.mfhd(track.sequenceNumber), MP4.traf(track, baseMediaDecodeTime));
    }

    static mfhd(sequenceNumber) {
        let data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            (sequenceNumber >>> 24) & 0xFF,  // sequence_number: int32
            (sequenceNumber >>> 16) & 0xFF,
            (sequenceNumber >>>  8) & 0xFF,
            (sequenceNumber) & 0xFF
        ]);
        return MP4.box(MP4.types.mfhd, data);
    }

    // Track fragment box
    static traf(track, baseMediaDecodeTime) {
        let trackId = track.id;

        // Track fragment header box
        let tfhd = MP4.box(MP4.types.tfhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) & flags
            (trackId >>> 24) & 0xFF, // track_ID
            (trackId >>> 16) & 0xFF,
            (trackId >>>  8) & 0xFF,
            (trackId) & 0xFF
        ]));
        // Track Fragment Decode Time
        let tfdt = MP4.box(MP4.types.tfdt, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,  // version(0) & flags
            (baseMediaDecodeTime >>> 24) & 0xFF,  // baseMediaDecodeTime: int32
            (baseMediaDecodeTime >>> 16) & 0xFF,
            (baseMediaDecodeTime >>>  8) & 0xFF,
            (baseMediaDecodeTime) & 0xFF
        ]));
        let sdtp = MP4.sdtp(track);
        let trun = MP4.trun(track, sdtp.byteLength + 16 + 16 + 8 + 16 + 8 + 8);

        return MP4.box(MP4.types.traf, tfhd, tfdt, trun, sdtp);
    }

    // Sample Dependency Type box
    static sdtp(track) {
        let samples = track.samples || [];
        let sampleCount = samples.length;
        let data = new Uint8Array(4 + sampleCount);
        // 0~4 bytes: version(0) & flags
        for (let i = 0; i < sampleCount; i++) {
            let flags = samples[i].flags;
            data[i + 4] = (flags.isLeading << 6)    // is_leading: 2 (bit)
                        | (flags.dependsOn << 4)    // sample_depends_on
                        | (flags.isDependedOn << 2) // sample_is_depended_on
                        | (flags.hasRedundancy);    // sample_has_redundancy
        }
        return MP4.box(MP4.types.sdtp, data);
    }

    // Track fragment run box
    static trun(track, offset) {
        let samples = track.samples || [];
        let sampleCount = samples.length;
        let dataSize = 12 + 16 * sampleCount;
        let data = new Uint8Array(dataSize);
        offset += 8 + dataSize;

        data.set([
            0x00, 0x00, 0x0F, 0x01,      // version(0) & flags
            (sampleCount >>> 24) & 0xFF, // sample_count
            (sampleCount >>> 16) & 0xFF,
            (sampleCount >>>  8) & 0xFF,
            (sampleCount) & 0xFF,
            (offset >>> 24) & 0xFF,      // data_offset
            (offset >>> 16) & 0xFF,
            (offset >>>  8) & 0xFF,
            (offset) & 0xFF
        ], 0);

        for (let i = 0; i < sampleCount; i++) {
            let duration = samples[i].duration;
            let size = samples[i].size;
            let flags = samples[i].flags;
            let cts = samples[i].cts;
            data.set([
                (duration >>> 24) & 0xFF,  // sample_duration
                (duration >>> 16) & 0xFF,
                (duration >>>  8) & 0xFF,
                (duration) & 0xFF,
                (size >>> 24) & 0xFF,      // sample_size
                (size >>> 16) & 0xFF,
                (size >>>  8) & 0xFF,
                (size) & 0xFF,
                (flags.isLeading << 2) | flags.dependsOn,  // sample_flags
                (flags.isDependedOn << 6) | (flags.hasRedundancy << 4) | flags.isNonSync,
                0x00, 0x00,                // sample_degradation_priority
                (cts >>> 24) & 0xFF,       // sample_composition_time_offset
                (cts >>> 16) & 0xFF,
                (cts >>>  8) & 0xFF,
                (cts) & 0xFF
            ], 12 + 16 * i);
        }
        return MP4.box(MP4.types.trun, data);
    }

    static mdat(data) {
        return MP4.box(MP4.types.mdat, data);
    }

}

MP4.init();

/* harmony default export */ __webpack_exports__["a"] = (MP4);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mp4_generator_js__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aac_silent_js__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_browser_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_exception_js__ = __webpack_require__(98);
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









// Fragmented mp4 remuxer
class MP4Remuxer {

    constructor(config) {
        this.TAG = 'MP4Remuxer';

        this._config = config;
        this._isLive = (config.isLive === true) ? true : false;

        this._dtsBase = -1;
        this._dtsBaseInited = false;
        this._audioDtsBase = Infinity;
        this._videoDtsBase = Infinity;
        this._audioNextDts = undefined;
        this._videoNextDts = undefined;

        this._audioMeta = null;
        this._videoMeta = null;

        this._audioSegmentInfoList = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["a" /* MediaSegmentInfoList */]('audio');
        this._videoSegmentInfoList = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["a" /* MediaSegmentInfoList */]('video');

        this._onInitSegment = null;
        this._onMediaSegment = null;

        // Workaround for chrome < 50: Always force first sample as a Random Access Point in media segment
        // see https://bugs.chromium.org/p/chromium/issues/detail?id=229412
        this._forceFirstIDR = (__WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].chrome &&
                              (__WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].version.major < 50 ||
                              (__WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].version.major === 50 && __WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].version.build < 2661))) ? true : false;

        // Workaround for IE11/Edge: Fill silent aac frame after keyframe-seeking
        // Make audio beginDts equals with video beginDts, in order to fix seek freeze
        this._fillSilentAfterSeek = (__WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].msedge || __WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].msie);

        // While only FireFox supports 'audio/mp4, codecs="mp3"', use 'audio/mpeg' for chrome, safari, ...
        this._mp3UseMpegAudio = !__WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].firefox;

        this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
    }

    destroy() {
        this._dtsBase = -1;
        this._dtsBaseInited = false;
        this._audioMeta = null;
        this._videoMeta = null;
        this._audioSegmentInfoList.clear();
        this._audioSegmentInfoList = null;
        this._videoSegmentInfoList.clear();
        this._videoSegmentInfoList = null;
        this._onInitSegment = null;
        this._onMediaSegment = null;
    }

    bindDataSource(producer) {
        producer.onDataAvailable = this.remux.bind(this);
        producer.onTrackMetadata = this._onTrackMetadataReceived.bind(this);
        return this;
    }

    /* prototype: function onInitSegment(type: string, initSegment: ArrayBuffer): void
       InitSegment: {
           type: string,
           data: ArrayBuffer,
           codec: string,
           container: string
       }
    */
    get onInitSegment() {
        return this._onInitSegment;
    }

    set onInitSegment(callback) {
        this._onInitSegment = callback;
    }

    /* prototype: function onMediaSegment(type: string, mediaSegment: MediaSegment): void
       MediaSegment: {
           type: string,
           data: ArrayBuffer,
           sampleCount: int32
           info: MediaSegmentInfo
       }
    */
    get onMediaSegment() {
        return this._onMediaSegment;
    }

    set onMediaSegment(callback) {
        this._onMediaSegment = callback;
    }

    insertDiscontinuity() {
        this._audioNextDts = this._videoNextDts = undefined;
    }

    seek(originalDts) {
        this._videoSegmentInfoList.clear();
        this._audioSegmentInfoList.clear();
    }

    remux(audioTrack, videoTrack) {
        if (!this._onMediaSegment) {
            throw new __WEBPACK_IMPORTED_MODULE_5__utils_exception_js__["d" /* IllegalStateException */]('MP4Remuxer: onMediaSegment callback must be specificed!');
        }
        if (!this._dtsBaseInited) {
            this._calculateDtsBase(audioTrack, videoTrack);
        }
        this._remuxVideo(videoTrack);
        this._remuxAudio(audioTrack);
    }

    _onTrackMetadataReceived(type, metadata) {
        let metabox = null;

        let container = 'mp4';
        let codec = metadata.codec;

        if (type === 'audio') {
            this._audioMeta = metadata;
            if (metadata.codec === 'mp3' && this._mp3UseMpegAudio) {
                // 'audio/mpeg' for MP3 audio track
                container = 'mpeg';
                codec = '';
                metabox = new Uint8Array();
            } else {
                // 'audio/mp4, codecs="codec"'
                metabox = __WEBPACK_IMPORTED_MODULE_1__mp4_generator_js__["a" /* default */].generateInitSegment(metadata);
            }
        } else if (type === 'video') {
            this._videoMeta = metadata;
            metabox = __WEBPACK_IMPORTED_MODULE_1__mp4_generator_js__["a" /* default */].generateInitSegment(metadata);
        } else {
            return;
        }

        // dispatch metabox (Initialization Segment)
        if (!this._onInitSegment) {
            throw new __WEBPACK_IMPORTED_MODULE_5__utils_exception_js__["d" /* IllegalStateException */]('MP4Remuxer: onInitSegment callback must be specified!');
        }
        this._onInitSegment(type, {
            type: type,
            data: metabox.buffer,
            codec: codec,
            container: `${type}/${container}`,
            mediaDuration: metadata.duration  // in timescale 1000 (milliseconds)
        });
    }

    _calculateDtsBase(audioTrack, videoTrack) {
        if (this._dtsBaseInited) {
            return;
        }

        if (audioTrack.samples && audioTrack.samples.length) {
            this._audioDtsBase = audioTrack.samples[0].dts;
        }
        if (videoTrack.samples && videoTrack.samples.length) {
            this._videoDtsBase = videoTrack.samples[0].dts;
        }

        this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase);
        this._dtsBaseInited = true;
    }

    _remuxAudio(audioTrack) {
        if (this._audioMeta == null) {
            return;
        }

        let track = audioTrack;
        let samples = track.samples;
        let dtsCorrection = undefined;
        let firstDts = -1, lastDts = -1, lastPts = -1;
        let refSampleDuration = this._audioMeta.refSampleDuration;

        let mpegRawTrack = this._audioMeta.codec === 'mp3' && this._mp3UseMpegAudio;
        let firstSegmentAfterSeek = this._dtsBaseInited && this._audioNextDts === undefined;

        let insertPrefixSilentFrame = false;

        if (!samples || samples.length === 0) {
            return;
        }

        let offset = 0;
        let mdatbox = null;
        let mdatBytes = 0;

        // calculate initial mdat size
        if (mpegRawTrack) {
            // for raw mpeg buffer
            offset = 0;
            mdatBytes = track.length;
        } else {
            // for fmp4 mdat box
            offset = 8;  // size + type
            mdatBytes = 8 + track.length;
        }

        let firstSampleOriginalDts = samples[0].dts - this._dtsBase;

        // calculate dtsCorrection
        if (this._audioNextDts) {
            dtsCorrection = firstSampleOriginalDts - this._audioNextDts;
        } else {  // this._audioNextDts == undefined
            if (this._audioSegmentInfoList.isEmpty()) {
                dtsCorrection = 0;
                if (this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty()) {
                    if (this._audioMeta.originalCodec !== 'mp3') {
                        insertPrefixSilentFrame = true;
                    }
                }
            } else {
                let lastSample = this._audioSegmentInfoList.getLastSampleBefore(firstSampleOriginalDts);
                if (lastSample != null) {
                    let distance = (firstSampleOriginalDts - (lastSample.originalDts + lastSample.duration));
                    if (distance <= 3) {
                        distance = 0;
                    }
                    let expectedDts = lastSample.dts + lastSample.duration + distance;
                    dtsCorrection = firstSampleOriginalDts - expectedDts;
                } else { // lastSample == null, cannot found
                    dtsCorrection = 0;
                }
            }
        }

        if (insertPrefixSilentFrame) {
            // align audio segment beginDts to match with current video segment's beginDts
            let firstSampleDts = firstSampleOriginalDts - dtsCorrection;
            let videoSegment = this._videoSegmentInfoList.getLastSegmentBefore(firstSampleOriginalDts);
            if (videoSegment != null && videoSegment.beginDts < firstSampleDts) {
                let silentUnit = __WEBPACK_IMPORTED_MODULE_2__aac_silent_js__["a" /* default */].getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                if (silentUnit) {
                    let dts = videoSegment.beginDts;
                    let silentFrameDuration = firstSampleDts - videoSegment.beginDts;
                    __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].v(this.TAG, `InsertPrefixSilentAudio: dts: ${dts}, duration: ${silentFrameDuration}`);
                    samples.unshift({unit: silentUnit, dts: dts, pts: dts});
                    mdatBytes += silentUnit.byteLength;
                }  // silentUnit == null: Cannot generate, skip
            } else {
                insertPrefixSilentFrame = false;
            }
        }

        let mp4Samples = [];

        // Correct dts for each sample, and calculate sample duration. Then output to mp4Samples
        for (let i = 0; i < samples.length; i++) {
            let sample = samples[i];
            let unit = sample.unit;
            let originalDts = sample.dts - this._dtsBase;
            let dts = originalDts - dtsCorrection;

            if (firstDts === -1) {
                firstDts = dts;
            }

            let sampleDuration = 0;

            if (i !== samples.length - 1) {
                let nextDts = samples[i + 1].dts - this._dtsBase - dtsCorrection;
                sampleDuration = nextDts - dts;
            } else {  // the last sample
                if (mp4Samples.length >= 1) {  // use second last sample duration
                    sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
                } else {  // the only one sample, use reference sample duration
                    sampleDuration = Math.floor(refSampleDuration);
                }
            }

            let needFillSilentFrames = false;
            let silentFrames = null;

            // Silent frame generation, if large timestamp gap detected && config.fixAudioTimestampGap
            if (sampleDuration > refSampleDuration * 1.5 && this._audioMeta.codec !== 'mp3' && this._fillAudioTimestampGap && !__WEBPACK_IMPORTED_MODULE_3__utils_browser_js__["a" /* default */].safari) {
                // We need to insert silent frames to fill timestamp gap
                needFillSilentFrames = true;
                let delta = Math.abs(sampleDuration - refSampleDuration);
                let frameCount = Math.ceil(delta / refSampleDuration);
                let currentDts = dts + refSampleDuration;  // Notice: in float

                __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Large audio timestamp gap detected, may cause AV sync to drift. ' +
                                'Silent frames will be generated to avoid unsync.\n' +
                                `dts: ${dts + sampleDuration} ms, expected: ${dts + Math.round(refSampleDuration)} ms, ` +
                                `delta: ${Math.round(delta)} ms, generate: ${frameCount} frames`);

                let silentUnit = __WEBPACK_IMPORTED_MODULE_2__aac_silent_js__["a" /* default */].getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                if (silentUnit == null) {
                    __WEBPACK_IMPORTED_MODULE_0__utils_logger_js__["a" /* default */].w(this.TAG, 'Unable to generate silent frame for ' +
                                    `${this._audioMeta.originalCodec} with ${this._audioMeta.channelCount} channels, repeat last frame`);
                    // Repeat last frame
                    silentUnit = unit;
                }
                silentFrames = [];

                for (let j = 0; j < frameCount; j++) {
                    let intDts = Math.round(currentDts);  // round to integer
                    if (silentFrames.length > 0) {
                        // Set previous frame sample duration
                        let previousFrame = silentFrames[silentFrames.length - 1];
                        previousFrame.duration = intDts - previousFrame.dts;
                    }
                    let frame = {
                        dts: intDts,
                        pts: intDts,
                        cts: 0,
                        unit: silentUnit,
                        size: silentUnit.byteLength,
                        duration: 0,  // wait for next sample
                        originalDts: originalDts,
                        flags: {
                            isLeading: 0,
                            dependsOn: 1,
                            isDependedOn: 0,
                            hasRedundancy: 0
                        }
                    };
                    silentFrames.push(frame);
                    mdatBytes += unit.byteLength;
                    currentDts += refSampleDuration;
                }

                // last frame: align end time to next frame dts
                let lastFrame = silentFrames[silentFrames.length - 1];
                lastFrame.duration = dts + sampleDuration - lastFrame.dts;

                // silentFrames.forEach((frame) => {
                //     Log.w(this.TAG, `SilentAudio: dts: ${frame.dts}, duration: ${frame.duration}`);
                // });

                // Set correct sample duration for current frame
                sampleDuration = Math.round(refSampleDuration);
            }

            mp4Samples.push({
                dts: dts,
                pts: dts,
                cts: 0,
                unit: sample.unit,
                size: sample.unit.byteLength,
                duration: sampleDuration,
                originalDts: originalDts,
                flags: {
                    isLeading: 0,
                    dependsOn: 1,
                    isDependedOn: 0,
                    hasRedundancy: 0
                }
            });

            if (needFillSilentFrames) {
                // Silent frames should be inserted after wrong-duration frame
                mp4Samples.push.apply(mp4Samples, silentFrames);
            }
        }

        // allocate mdatbox
        if (mpegRawTrack) {
            // allocate for raw mpeg buffer
            mdatbox = new Uint8Array(mdatBytes);
        } else {
            // allocate for fmp4 mdat box
            mdatbox = new Uint8Array(mdatBytes);
            // size field
            mdatbox[0] = (mdatBytes >>> 24) & 0xFF;
            mdatbox[1] = (mdatBytes >>> 16) & 0xFF;
            mdatbox[2] = (mdatBytes >>>  8) & 0xFF;
            mdatbox[3] = (mdatBytes) & 0xFF;
            // type field (fourCC)
            mdatbox.set(__WEBPACK_IMPORTED_MODULE_1__mp4_generator_js__["a" /* default */].types.mdat, 4);
        }

        // Write samples into mdatbox
        for (let i = 0; i < mp4Samples.length; i++) {
            let unit = mp4Samples[i].unit;
            mdatbox.set(unit, offset);
            offset += unit.byteLength;
        }

        let latest = mp4Samples[mp4Samples.length - 1];
        lastDts = latest.dts + latest.duration;
        this._audioNextDts = lastDts;

        // fill media segment info & add to info list
        let info = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["b" /* MediaSegmentInfo */]();
        info.beginDts = firstDts;
        info.endDts = lastDts;
        info.beginPts = firstDts;
        info.endPts = lastDts;
        info.originalBeginDts = mp4Samples[0].originalDts;
        info.originalEndDts = latest.originalDts + latest.duration;
        info.firstSample = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["c" /* SampleInfo */](mp4Samples[0].dts,
                                          mp4Samples[0].pts,
                                          mp4Samples[0].duration,
                                          mp4Samples[0].originalDts,
                                          false);
        info.lastSample = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["c" /* SampleInfo */](latest.dts,
                                         latest.pts,
                                         latest.duration,
                                         latest.originalDts,
                                         false);
        if (!this._isLive) {
            this._audioSegmentInfoList.append(info);
        }

        track.samples = mp4Samples;
        track.sequenceNumber++;

        let moofbox = null;

        if (mpegRawTrack) {
            // Generate empty buffer, because useless for raw mpeg
            moofbox = new Uint8Array();
        } else {
            // Generate moof for fmp4 segment
            moofbox = __WEBPACK_IMPORTED_MODULE_1__mp4_generator_js__["a" /* default */].moof(track, firstDts);
        }

        track.samples = [];
        track.length = 0;

        let segment = {
            type: 'audio',
            data: this._mergeBoxes(moofbox, mdatbox).buffer,
            sampleCount: mp4Samples.length,
            info: info
        };

        if (mpegRawTrack && firstSegmentAfterSeek) {
            // For MPEG audio stream in MSE, if seeking occurred, before appending new buffer
            // We need explicitly set timestampOffset to the desired point in timeline for mpeg SourceBuffer.
            segment.timestampOffset = firstDts;
        }

        this._onMediaSegment('audio', segment);
    }

    _remuxVideo(videoTrack) {
        if (this._videoMeta == null) {
            return;
        }

        let track = videoTrack;
        let samples = track.samples;
        let dtsCorrection = undefined;
        let firstDts = -1, lastDts = -1;
        let firstPts = -1, lastPts = -1;

        if (!samples || samples.length === 0) {
            return;
        }

        let offset = 8;
        let mdatBytes = 8 + videoTrack.length;
        let mdatbox = new Uint8Array(mdatBytes);
        mdatbox[0] = (mdatBytes >>> 24) & 0xFF;
        mdatbox[1] = (mdatBytes >>> 16) & 0xFF;
        mdatbox[2] = (mdatBytes >>>  8) & 0xFF;
        mdatbox[3] = (mdatBytes) & 0xFF;
        mdatbox.set(__WEBPACK_IMPORTED_MODULE_1__mp4_generator_js__["a" /* default */].types.mdat, 4);

        let firstSampleOriginalDts = samples[0].dts - this._dtsBase;

        // calculate dtsCorrection
        if (this._videoNextDts) {
            dtsCorrection = firstSampleOriginalDts - this._videoNextDts;
        } else {  // this._videoNextDts == undefined
            if (this._videoSegmentInfoList.isEmpty()) {
                dtsCorrection = 0;
            } else {
                let lastSample = this._videoSegmentInfoList.getLastSampleBefore(firstSampleOriginalDts);
                if (lastSample != null) {
                    let distance = (firstSampleOriginalDts - (lastSample.originalDts + lastSample.duration));
                    if (distance <= 3) {
                        distance = 0;
                    }
                    let expectedDts = lastSample.dts + lastSample.duration + distance;
                    dtsCorrection = firstSampleOriginalDts - expectedDts;
                } else { // lastSample == null, cannot found
                    dtsCorrection = 0;
                }
            }
        }

        let info = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["b" /* MediaSegmentInfo */]();
        let mp4Samples = [];

        // Correct dts for each sample, and calculate sample duration. Then output to mp4Samples
        for (let i = 0; i < samples.length; i++) {
            let sample = samples[i];
            let originalDts = sample.dts - this._dtsBase;
            let isKeyframe = sample.isKeyframe;
            let dts = originalDts - dtsCorrection;
            let cts = sample.cts;
            let pts = dts + cts;

            if (firstDts === -1) {
                firstDts = dts;
                firstPts = pts;
            }

            let sampleDuration = 0;

            if (i !== samples.length - 1) {
                let nextDts = samples[i + 1].dts - this._dtsBase - dtsCorrection;
                sampleDuration = nextDts - dts;
            } else {  // the last sample
                if (mp4Samples.length >= 1) {  // use second last sample duration
                    sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
                } else {  // the only one sample, use reference sample duration
                    sampleDuration = Math.floor(this._videoMeta.refSampleDuration);
                }
            }

            if (isKeyframe) {
                let syncPoint = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["c" /* SampleInfo */](dts, pts, sampleDuration, sample.dts, true);
                syncPoint.fileposition = sample.fileposition;
                info.appendSyncPoint(syncPoint);
            }

            mp4Samples.push({
                dts: dts,
                pts: pts,
                cts: cts,
                units: sample.units,
                size: sample.length,
                isKeyframe: isKeyframe,
                duration: sampleDuration,
                originalDts: originalDts,
                flags: {
                    isLeading: 0,
                    dependsOn: isKeyframe ? 2 : 1,
                    isDependedOn: isKeyframe ? 1 : 0,
                    hasRedundancy: 0,
                    isNonSync: isKeyframe ? 0 : 1
                }
            });
        }

        // Write samples into mdatbox
        for (let i = 0; i < mp4Samples.length; i++) {
            let units = mp4Samples[i].units;
            while (units.length) {
                let unit = units.shift();
                let data = unit.data;
                mdatbox.set(data, offset);
                offset += data.byteLength;
            }
        }

        let latest = mp4Samples[mp4Samples.length - 1];
        lastDts = latest.dts + latest.duration;
        lastPts = latest.pts + latest.duration;
        this._videoNextDts = lastDts;

        // fill media segment info & add to info list
        info.beginDts = firstDts;
        info.endDts = lastDts;
        info.beginPts = firstPts;
        info.endPts = lastPts;
        info.originalBeginDts = mp4Samples[0].originalDts;
        info.originalEndDts = latest.originalDts + latest.duration;
        info.firstSample = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["c" /* SampleInfo */](mp4Samples[0].dts,
                                          mp4Samples[0].pts,
                                          mp4Samples[0].duration,
                                          mp4Samples[0].originalDts,
                                          mp4Samples[0].isKeyframe);
        info.lastSample = new __WEBPACK_IMPORTED_MODULE_4__core_media_segment_info_js__["c" /* SampleInfo */](latest.dts,
                                         latest.pts,
                                         latest.duration,
                                         latest.originalDts,
                                         latest.isKeyframe);
        if (!this._isLive) {
            this._videoSegmentInfoList.append(info);
        }

        track.samples = mp4Samples;
        track.sequenceNumber++;

        // workaround for chrome < 50: force first sample as a random access point
        // see https://bugs.chromium.org/p/chromium/issues/detail?id=229412
        if (this._forceFirstIDR) {
            let flags = mp4Samples[0].flags;
            flags.dependsOn = 2;
            flags.isNonSync = 0;
        }

        let moofbox = __WEBPACK_IMPORTED_MODULE_1__mp4_generator_js__["a" /* default */].moof(track, firstDts);
        track.samples = [];
        track.length = 0;

        this._onMediaSegment('video', {
            type: 'video',
            data: this._mergeBoxes(moofbox, mdatbox).buffer,
            sampleCount: mp4Samples.length,
            info: info
        });
    }

    _mergeBoxes(moof, mdat) {
        let result = new Uint8Array(moof.byteLength + mdat.byteLength);
        result.set(moof, 0);
        result.set(mdat, moof.byteLength);
        return result;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (MP4Remuxer);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * This file is derived from C++ project libWinTF8 (https://github.com/m13253/libWinTF8)
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function checkContinuation(uint8array, start, checkLength) {
    let array = uint8array;
    if (start + checkLength < array.length) {
        while (checkLength--) {
            if ((array[++start] & 0xC0) !== 0x80)
                return false;
        }
        return true;
    } else {
        return false;
    }
}

function decodeUTF8(uint8array) {
    let out = [];
    let input = uint8array;
    let i = 0;
    let length = uint8array.length;

    while (i < length) {
        if (input[i] < 0x80) {
            out.push(String.fromCharCode(input[i]));
            ++i;
            continue;
        } else if (input[i] < 0xC0) {
            // fallthrough
        } else if (input[i] < 0xE0) {
            if (checkContinuation(input, i, 1)) {
                let ucs4 = (input[i] & 0x1F) << 6 | (input[i + 1] & 0x3F);
                if (ucs4 >= 0x80) {
                    out.push(String.fromCharCode(ucs4 & 0xFFFF));
                    i += 2;
                    continue;
                }
            }
        } else if (input[i] < 0xF0) {
            if (checkContinuation(input, i, 2)) {
                let ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                    out.push(String.fromCharCode(ucs4 & 0xFFFF));
                    i += 3;
                    continue;
                }
            }
        } else if (input[i] < 0xF8) {
            if (checkContinuation(input, i, 3)) {
                let ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12
                         | (input[i + 2] & 0x3F) << 6 | (input[i + 3] & 0x3F);
                if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                    ucs4 -= 0x10000;
                    out.push(String.fromCharCode((ucs4 >>> 10) | 0xD800));
                    out.push(String.fromCharCode((ucs4 & 0x3FF) | 0xDC00));
                    i += 4;
                    continue;
                }
            }
        }
        out.push(String.fromCharCode(0xFFFD));
        ++i;
    }

    return out.join('');
}

/* harmony default export */ __webpack_exports__["a"] = (decodeUTF8);

/***/ }),
/* 158 */
/***/ (function(module, exports) {

var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];

var stringify = JSON.stringify;

module.exports = function (fn, options) {
    var wkey;
    var cacheKeys = Object.keys(cache);

    for (var i = 0, l = cacheKeys.length; i < l; i++) {
        var key = cacheKeys[i];
        var exp = cache[key].exports;
        // Using babel as a transpiler to use esmodule, the export will always
        // be an object with the default export as a property of it. To ensure
        // the existing api and babel esmodule exports are both supported we
        // check for both
        if (exp === fn || exp && exp.default === fn) {
            wkey = key;
            break;
        }
    }

    if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};
        for (var i = 0, l = cacheKeys.length; i < l; i++) {
            var key = cacheKeys[i];
            wcache[key] = key;
        }
        sources[wkey] = [
            Function(['require','module','exports'], '(' + fn + ')(self)'),
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

    var scache = {}; scache[wkey] = wkey;
    sources[skey] = [
        Function(['require'], (
            // try to call default if defined to also support babel esmodule
            // exports
            'var f = require(' + stringify(wkey) + ');' +
            '(f.default ? f.default : f)(self);'
        )),
        scache
    ];

    var workerSources = {};
    resolveSources(skey);

    function resolveSources(key) {
        workerSources[key] = true;

        for (var depPath in sources[key][1]) {
            var depKey = sources[key][1][depPath];
            if (!workerSources[depKey]) {
                resolveSources(depKey);
            }
        }
    }

    var src = '(' + bundleFn + ')({'
        + Object.keys(workerSources).map(function (key) {
            return stringify(key) + ':['
                + sources[key][0]
                + ',' + stringify(sources[key][1]) + ']'
            ;
        }).join(',')
        + '},{},[' + stringify(skey) + '])'
    ;

    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    var blob = new Blob([src], { type: 'text/javascript' });
    if (options && options.bare) { return blob; }
    var workerUrl = URL.createObjectURL(blob);
    var worker = new Worker(workerUrl);
    worker.objectURL = workerUrl;
    return worker;
};


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]));
//# sourceMappingURL=0.1961569c68915548cf88.js.map