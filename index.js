(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  grey: 'hsl(256, 8%, 37%)',
  red: 'hsl(351, 91%, 59%)',
  redHighlight: 'hsl(356, 100%, 67%)'
};

},{}],2:[function(require,module,exports){
'use strict';

var cmz = require('cmz');

var assetRoot = 'https://x-team.com';
module.exports = {
  team: cmz('atoms_icons-5', '\n&:before {\n  content: url(' + assetRoot + '/images/icons/dedicated-team.svg);\n  margin-left: -20px;\n}\n '),
  dailyUpdates: cmz('atoms_icons-11', '\n&:before {\n  content: url(' + assetRoot + '/images/icons/daily-updates.svg);\n  margin-left: -19px;\n}\n ')
};

},{"cmz":11}],3:[function(require,module,exports){
'use strict';

module.exports = function (props) {
  props = props || {};
  return '<svg viewBox="0 0 48 48" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="menu__logo__svg ' + (props.whiteOnMobile ? 'menu__logo__svg__white' : '') + '"> <g transform="matrix(.125,0,0,.125,0,0)"> <path d="M 249.2436,153.11201 91.8029,4.8828125e-5 17.8259,72.501145 100.6866,153.70689 0,258.64225 71.8892,328.00005 249.2436,153.11201"></path> <path d="m 185.3175,236.64673 72.2044,70.76534 73.9757,-72.49933 -72.2062,-70.76475 -73.9739,72.49874"></path> <path d="M 185.9194,70.171973 259.8985,142.67307 331.4976,72.501145 257.5202,4.8828125e-5 185.9194,70.171973"></path> </g> </svg>';
};

},{}],4:[function(require,module,exports){
'use strict';

var cmz = require('cmz');
var colors = require('./colors');

module.exports = cmz('atoms_text-4', '\n  font: 300 16px/1.5 \'Source Sans Pro\',"HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif\n  color: ' + colors.grey + '\n  font-size: 1.25rem\n  line-height: 2rem\n');

},{"./colors":1,"cmz":11}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _colors = require('../atoms/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  button: (0, _cmz2.default)('components_Button-10', /*cmz|*/'\n& {\n  text-transform: uppercase;\n  text-decoration: none;\n  font: 400 .75rem/1.5 \'Montserrat\', sans-serif;\n  border: 2px solid #fff;\n  display: inline-block;\n  padding: .75em 2em;\n  transition: all .3s ease-out;\n}\n\n&:hover {\n  cursor: pointer;\n}\n' /*|cmz*/)
};

styles.fillButton = (0, _cmz2.default)('components_Button-27', [styles.button, '\n& {\n  color: #fff;\n  border-color: ' + _colors.red + ';\n  background: ' + _colors.red + ';\n}\n\n&:hover {\n  background-color: ' + _colors.redHighlight + ';\n  border-color: ' + _colors.redHighlight + ';\n}\n']);

styles.hollowButton = (0, _cmz2.default)('components_Button-42', [styles.button, '\n& {\n  border-width: 2px;\n  padding: 1.25em 3.5em;\n  border-color: #fff;\n  color: #fff;\n  background: transparent;\n}\n\n&:hover {\n  background-color: #fff;\n  color: ' + _colors.red + '\n}\n']);

var Button = function Button(props) {
  var children = props.children,
      fill = props.fill,
      href = props.href,
      onClick = props.onClick;


  var c = fill ? styles.fillButton : styles.hollowButton;

  if (href) {
    return _react2.default.createElement(
      'a',
      {
        className: c,
        href: href,
        onClick: onClick },
      children
    );
  } else {
    return _react2.default.createElement(
      'button',
      {
        className: c,
        onClick: onClick },
      children
    );
  }
};

Button.propTypes = {
  children: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = Button;

},{"../atoms/colors":1,"cmz":11,"prop-types":21,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _text = require('../atoms/text');

var _text2 = _interopRequireDefault(_text);

var _icons = require('../atoms/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = {
  root: (0, _cmz2.default)('components_Feature-9', [_text2.default, /*cmz|*/'text-align: center' /*|cmz*/,
  // leave room for the icon
  /*cmz|*/'position: relative' /*|cmz*/, /*cmz|*/'padding-top: 2rem' /*|cmz*/]),

  icon: (0, _cmz2.default)('components_Feature-17', /*cmz|*/'\n&:before {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 50%;\n}' /*|cmz*/),

  heading: (0, _cmz2.default)('components_Feature-26', /*cmz|*/'\n  font: 600 1.2rem \'Open Sans\',sans-serif\n  color: #34323b\n  margin: 1.5em 0 .5em\n  ' /*|cmz*/),

  content: (0, _cmz2.default)('components_Feature-32', [/*cmz|*/'max-width: 14em' /*|cmz*/, /*cmz|*/'margin: 0 auto' /*|cmz*/])
};

var Feature = function Feature(props) {
  return _react2.default.createElement(
    'div',
    { className: s.root },
    _react2.default.createElement('div', { className: s.icon + ' ' + _icons2.default[props.icon] }),
    _react2.default.createElement(
      'h3',
      { className: s.heading },
      props.heading
    ),
    _react2.default.createElement(
      'div',
      { className: s.content },
      props.children
    )
  );
};

Feature.propTypes = {
  children: _propTypes2.default.string.isRequired,
  heading: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string.isRequired
};

exports.default = Feature;

},{"../atoms/icons":2,"../atoms/text":4,"cmz":11,"prop-types":21,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _text = require('../atoms/text');

var _text2 = _interopRequireDefault(_text);

var _icons = require('../atoms/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = {
  root: (0, _cmz2.default)('components_FeatureList-9', [/*cmz|*/'display: flex' /*|cmz*/, /*cmz|*/'flex-flow: row wrap' /*|cmz*/, /*cmz|*/'justify-content: space-around' /*|cmz*/]),

  item: (0, _cmz2.default)('components_FeatureList-15', /*cmz|*/'\n& {\n  margin-top: 4rem;\n  margin-left: 5%;\n  flex-basis: 45%;\n}\n\n&:nth-child(even) {\n  margin-left: 0;\n  margin-right: 5%;\n}\n ' /*|cmz*/)
};

var FeatureList = function FeatureList(props) {
  return _react2.default.createElement(
    'div',
    { className: s.root },
    props.children.map(function (f, i) {
      return _react2.default.createElement(
        'div',
        { key: i, className: s.item },
        f
      );
    })
  );
};

exports.default = FeatureList;

},{"../atoms/icons":2,"../atoms/text":4,"cmz":11,"prop-types":21,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _text = require('../atoms/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heading = (0, _cmz2.default)('components_Heading-7', /*cmz|*/'\n  text-transform: uppercase;\n  font: 800 2rem/1 \'Open Sans\',sans-serif;\n  color: #34323b;\n  margin-bottom: 5rem;\n  position: relative;\n' /*|cmz*/);

var headingWithDivider = (0, _cmz2.default)('components_Heading-15', [heading, /*cmz|*/'\n&:after {\n  content: \'\';\n  position: absolute;\n  width: 2.5rem;\n  height: 2px;\n  bottom: -2.5rem;\n  background-color: #f63954;\n}\n' /*|cmz*/]);

var summary = (0, _cmz2.default)('components_Heading-28', [_text2.default, /*cmz|*/'\n  text-align: center;\n  max-width: 27.5em;\n  margin: auto;\n' /*|cmz*/]);

var alignment = {
  left: (0, _cmz2.default)('components_Heading-37', [/*cmz|*/'text-align: left' /*|cmz*/, /*cmz|*/'&:after { left: 0 }' /*|cmz*/]),
  right: (0, _cmz2.default)('components_Heading-41', [/*cmz|*/'text-align: right' /*|cmz*/, /*cmz|*/'&:after { right: 0 }' /*|cmz*/]),
  center: (0, _cmz2.default)('components_Heading-45', [/*cmz|*/'text-align: center' /*|cmz*/, /*cmz|*/'&:after { left: calc(50% - 1.25rem) }' /*|cmz*/])
};

var Heading = function Heading(_ref) {
  var align = _ref.align,
      divider = _ref.divider,
      children = _ref.children;

  var cx = [divider ? headingWithDivider : heading, alignment[align || 'center']];

  return _react2.default.createElement(
    'h2',
    { className: cx.join(' ') },
    children
  );
};

Heading.propTypes = {
  children: _propTypes2.default.string.isRequired,
  divider: _propTypes2.default.bool,
  align: _propTypes2.default.string
};

exports.default = Heading;

},{"../atoms/text":4,"cmz":11,"prop-types":21,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _text = require('../atoms/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: (0, _cmz2.default)('components_PullQuote-7', /*cmz|*/'\n  text-align: center\n' /*|cmz*/),

  quote: (0, _cmz2.default)('components_PullQuote-11', /*cmz|*/'\n  text-transform: uppercase;\n  font: 800 2.25rem/1.1 \'Oswald\',sans-serif;\n  color: #34323b;\n  margin: 1rem 0 1.2rem 0;\n  letter-spacing: 1px;\n  text-align: center;\n' /*|cmz*/),

  cite: (0, _cmz2.default)('components_PullQuote-20', [_text2.default, /*cmz|*/'\n  display: block;\n  font-size: 1.15em;\n  line-height: 1;\n  text-align: center;\n\n' /*|cmz*/]),

  symbol: (0, _cmz2.default)('components_PullQuote-30', [_text2.default, /*cmz|*/'color: red' /*|cmz*/, /*cmz|*/'font-size: 3rem' /*|cmz*/, /*cmz|*/'font-weight: 700' /*|cmz*/, /*cmz|*/'margin: 0' /*|cmz*/, /*cmz|*/'height: 1.4rem' /*|cmz*/])
};

var PullQuote = function PullQuote(props) {
  return _react2.default.createElement(
    'blockquote',
    { className: styles.root },
    _react2.default.createElement(
      'div',
      { className: styles.symbol },
      '\u201C'
    ),
    _react2.default.createElement(
      'div',
      { className: styles.quote },
      props.children
    ),
    props.cite && _react2.default.createElement(
      'cite',
      { className: styles.cite },
      props.cite
    )
  );
};

PullQuote.propTypes = {
  children: _propTypes2.default.string.isRequired,
  cite: _propTypes2.default.string
};

exports.default = PullQuote;

},{"../atoms/text":4,"cmz":11,"prop-types":21,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _text = require('../atoms/text');

var _text2 = _interopRequireDefault(_text);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: (0, _cmz2.default)('components_Section-9', /*cmz|*/'\n& {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n@media screen and (min-width: 1024px) {\n  & {\n    padding: 6rem calc(52% - 640px);\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    text-align: left;\n  }\n}\n' /*|cmz*/),

  copy: (0, _cmz2.default)('components_Section-27', [_text2.default, /*cmz|*/'font-size: 1.375rem' /*|cmz*/, /*cmz|*/'line-height: 2.25rem' /*|cmz*/, /*cmz|*/'padding: 0' /*|cmz*/, /*cmz|*/'margin: 0 auto 2rem 0' /*|cmz*/, /*cmz|*/'max-width: 25rem' /*|cmz*/]),

  pic: (0, _cmz2.default)('components_Section-36', /*cmz|*/'\n& {\n  margin-top: 2rem;\n  margin-right: -10%;\n  max-height: 650px;\n  width: auto;\n  position: relative;\n}\n\n& > img {\n  border: 0;\n  vertical-align: middle;\n}\n\n&:before {\n  content: \'\';\n  position: absolute;\n  background-color: #f1f1f5;\n  width: 20px;\n  height: calc(100% - 10px);\n  left: -20px;\n  top: 30px;\n}\n\n&:after {\n  content: \'\';\n  display: block;\n  background-color: #f1f1f5;\n  position: absolute;\n  width: calc(100% - 30px);\n  height: 20px;\n  left: 0;\n  bottom: -20px;\n}\n' /*|cmz*/)
};

var flippedStyles = Object.assign({}, styles, {
  root: (0, _cmz2.default)('components_Section-74', [styles.root, /*cmz|*/'flex-direction: row-reverse' /*|cmz*/])
});

var Section = function Section(props) {
  var s = props.flipped ? flippedStyles : styles;
  return _react2.default.createElement(
    'section',
    { className: s.root },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Heading2.default,
        { divider: true, align: 'left' },
        props.heading
      ),
      _react2.default.createElement(
        'div',
        { className: s.copy },
        props.children
      )
    ),
    _react2.default.createElement(
      'div',
      { className: s.pic },
      _react2.default.createElement('img', { src: props.pic })
    )
  );
};

Section.propTypes = {
  pic: _propTypes2.default.string.isRequired
};

exports.default = Section;

},{"../atoms/text":4,"./Heading":8,"cmz":11,"prop-types":21,"react":"react"}],11:[function(require,module,exports){
const upsertCss = require('./lib/upsert-css')
const uniquifyName = require('./lib/uniquify-name')

function isName (val) {
  if (!val) { return false }
  return /^[a-zA-Z][a-zA-Z0-9-_]*$/.test(val)
}

function addSemis (raw) {
  return raw.replace(/([^;])\n/g, '$1;\n')
}

function cmz (name, raw) {
  if (raw === undefined) {
    raw = name
    name = null
  }
  return new Atom(name, raw)
}

cmz.pseudo = function (type, atom) {
  const selector = '&:' + type
  const p = new Atom(
    atom.name + '-' + type,
    // pseudo-ify raw parts
    atom.raw.map(r => {
      const isWrapped = r.indexOf('{') >= 0
      return isWrapped
        ? r.replace(/&/g, selector)
        : selector + '{ ' + r + ' }'
    })
  ).compose(
    // recursively pseudo-ify compositions
    atom.comps.map(c => cmz.pseudo(type, c))
  )

  return p
}

cmz.import = function (path) {
  const name = 'import-' + path
  upsertCss(name, '@import url("' + path + '");')
}

function Atom (name, raw) {
  this.name = uniquifyName(name)

  this.raw = []
  this.comps = []
  this.compose(raw)
}

Atom.prototype.compose = function (parts) {
  if (!Array.isArray(parts)) { parts = [parts] }

  const self = this
  parts.filter(Boolean).forEach(function (p) {
    const isComp = isName(p) || p instanceof Atom
    self[isComp ? 'comps' : 'raw'].push(p)
  })

  return this
}

Atom.prototype.hasCss = function () {
  return this.raw && this.raw.length
}

Atom.prototype.getCss = function () {
  if (!this.hasCss()) { return '' }

  const parts = typeof this.raw === 'string' ? [this.raw] : this.raw

  const name = this.name
  const selector = '.' + name
  var output = ''

  const wrapped = []
  const unwrapped = []
  parts.forEach(function (part) {
    // replace name placeholders
    part = part.replace(/\?/g, name)

    // if no selector placeholder was given, we need to wrap it ourselves
    const isWrapped = part.indexOf('{') >= 0
    const group = isWrapped ? wrapped : unwrapped
    group.push(part)
  })

  if (unwrapped.length) {
    output += selector + ' {' + addSemis(unwrapped.join('\n')) + '}'

    if (wrapped.length) { output += '\n' }
  }

  if (wrapped.length) {
    // replace selector placeholders with the unique selector
    output += wrapped.map(function (part) {
      return part.replace(/&/g, selector)
    }).join('\n')
  }

  return output
}

Atom.prototype.toString = function () {
  const fullName = this.getFullName()

  // only need to insert css if we have any
  const css = this.getCss()
  css && upsertCss(this.name, css)

  return fullName
}

Atom.prototype.getFullName = function () {
  return [ this.name ].concat(this.comps).join(' ')
}

cmz.Atom = Atom
cmz.reset = uniquifyName.reset
cmz.sheets = upsertCss.sheets
module.exports = cmz

},{"./lib/uniquify-name":12,"./lib/upsert-css":13}],12:[function(require,module,exports){
var _names = { cmz: 0 }
module.exports = function uniquifyName (name) {
  name = name || 'cmz'
  var newName = name
  if (_names[name] !== undefined) {
    newName += '-' + _names[name]
    _names[name] += 1
  } else {
    _names[name] = 1
  }
  return newName
}
module.exports.reset = function () {
  _names = { cmz: 0 }
}

},{}],13:[function(require,module,exports){
const sheets = {}
const hasDoc = typeof document !== 'undefined'

function upsertCss (id, css) {
  if (!hasDoc) {
    sheets[id] = css
    return
  }

  const head = document.querySelector('head')
  var el = head.querySelector('style[data-cmz="' + id + '"]')

  if (!el) {
    el = document.createElement('style')
    el.setAttribute('type', 'text/css')
    el.setAttribute('data-cmz', id)
    head.appendChild(el)
  }

  if (el.styleSheet) {
    el.styleSheet.cssText = css
  } else {
    el.textContent = css
  }

  return el
}

upsertCss.sheets = sheets
module.exports = upsertCss

},{}],14:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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

module.exports = emptyFunction;
},{}],15:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

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

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

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

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":17}],16:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":14,"_process":17}],17:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],18:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

if (process.env.NODE_ENV !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))
},{"./lib/ReactPropTypesSecret":22,"_process":17,"fbjs/lib/invariant":15,"fbjs/lib/warning":16}],19:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
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
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":22,"fbjs/lib/emptyFunction":14,"fbjs/lib/invariant":15}],20:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require('_process'))
},{"./checkPropTypes":18,"./lib/ReactPropTypesSecret":22,"_process":17,"fbjs/lib/emptyFunction":14,"fbjs/lib/invariant":15,"fbjs/lib/warning":16}],21:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require('_process'))
},{"./factoryWithThrowingShims":19,"./factoryWithTypeCheckers":20,"_process":17}],22:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],23:[function(require,module,exports){
'use strict';

var React = require('react');

var _require = require('react-dom'),
    render = _require.render;

var Root = require('./root');

if (typeof document !== 'undefined') {
  render(Root, document.getElementById('root'));
} else {
  module.exports = Root;
}

},{"./root":25,"react":"react","react-dom":"react-dom"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _Button = require('../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var s = {
  root: (0, _cmz2.default)('src_playground_button-6', [/*cmz|*/'display: flex' /*|cmz*/]),

  controls: (0, _cmz2.default)('src_playground_button-10', [/*cmz|*/'margin-right: 2rem' /*|cmz*/]),

  preview: (0, _cmz2.default)('src_playground_button-14', [/*cmz|*/'padding: 2rem' /*|cmz*/, /*cmz|*/'min-height: 5rem' /*|cmz*/])
};

function getPlaceholderText() {
  return 'Lorem ipsum solor dit amet';
}

var PlaygroundButton = function (_Component) {
  _inherits(PlaygroundButton, _Component);

  function PlaygroundButton() {
    _classCallCheck(this, PlaygroundButton);

    var _this = _possibleConstructorReturn(this, (PlaygroundButton.__proto__ || Object.getPrototypeOf(PlaygroundButton)).call(this));

    _this.state = {
      fill: true,
      label: 'Lorem Ipsum'
    };
    return _this;
  }

  _createClass(PlaygroundButton, [{
    key: 'toggle',
    value: function toggle(name) {
      this.setState(_defineProperty({}, name, !this.state[name]));
    }
  }, {
    key: 'setRange',
    value: function setRange(name, value) {
      var newState = void 0;

      switch (name) {
        case 'label':
          newState = {
            label: getPlaceholderText().substring(0, value)
          };
          break;
      }

      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: s.root },
        _react2.default.createElement(
          'form',
          { className: s.controls },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'checkbox',
                checked: this.state.fill,
                onChange: function onChange() {
                  return _this2.toggle('fill');
                }
              }),
              'Fill'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              null,
              'Label length'
            ),
            _react2.default.createElement('input', {
              type: 'range',
              value: this.state.label.length,
              min: 1,
              max: getPlaceholderText().length,
              onChange: function onChange(event) {
                return _this2.setRange('label', event.target.value);
              } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: s.preview, style: { background: this.state.fill ? '#EEE' : '#999' } },
          _react2.default.createElement(
            _Button2.default,
            this.state,
            this.state.label
          )
        )
      );
    }
  }]);

  return PlaygroundButton;
}(_react.Component);

exports.default = PlaygroundButton;

},{"../../components/Button":5,"cmz":11,"react":"react"}],25:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nav = require('./ui/nav');

var _nav2 = _interopRequireDefault(_nav);

var _family = require('./ui/family');

var _ui = require('./ui');

var ui = _interopRequireWildcard(_ui);

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Heading = require('../components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _PullQuote = require('../components/PullQuote');

var _PullQuote2 = _interopRequireDefault(_PullQuote);

var _Section = require('../components/Section');

var _Section2 = _interopRequireDefault(_Section);

var _Feature = require('../components/Feature');

var _Feature2 = _interopRequireDefault(_Feature);

var _FeatureList = require('../components/FeatureList');

var _FeatureList2 = _interopRequireDefault(_FeatureList);

var _button = require('./playground/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ui
var families = [];

// playgrounds


// components


families.push({
  name: 'Buttons',
  content: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _family.Item,
      { dark: true },
      _react2.default.createElement(
        _family.ItemHeading,
        null,
        'Hollow button'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Transparent, so only use it on dark backgrounds for now.'
      ),
      _react2.default.createElement(
        _Button2.default,
        { onClick: function onClick() {
            return alert('clicked');
          } },
        'Hollow button'
      )
    ),
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        _family.ItemHeading,
        null,
        'Filled button'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Set the ',
        _react2.default.createElement(
          'code',
          null,
          'fill'
        ),
        ' prop (boolean flag) to get a colored button.'
      ),
      _react2.default.createElement(
        _Button2.default,
        {
          fill: true,
          onClick: function onClick() {
            return alert('clicked');
          }
        },
        'Filled button'
      )
    ),
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        _family.ItemHeading,
        null,
        'Filled CTA link'
      ),
      _react2.default.createElement(
        'p',
        null,
        'If an ',
        _react2.default.createElement(
          'code',
          null,
          'href'
        ),
        ' prop is provided we use an ',
        _react2.default.createElement(
          'code',
          null,
          '<a>'
        ),
        ' tag instead of a ',
        _react2.default.createElement(
          'code',
          null,
          '<button>'
        )
      ),
      _react2.default.createElement(
        _Button2.default,
        {
          fill: true,
          href: '#',
          onClick: function onClick() {
            return alert('clicked');
          }
        },
        'Filled CTA link'
      )
    ),
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        _family.ItemHeading,
        null,
        'Playground'
      ),
      _react2.default.createElement(_button2.default, null)
    )
  )
});

families.push({
  name: 'Headings',
  content: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Headings should end with a full-stop.'
      ),
      _react2.default.createElement(
        _Heading2.default,
        null,
        'This is a normal heading.'
      )
    ),
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        'p',
        null,
        'Set the ',
        _react2.default.createElement(
          'code',
          null,
          'divider'
        ),
        ' prop (boolean flag) to get a divider.'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { divider: true },
        'This heading has a divider.'
      )
    )
  )
});

families.push({
  name: 'Pull Quote',
  content: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        _PullQuote2.default,
        { cite: 'Person who said it' },
        'Insprirational thing someone once said.'
      )
    )
  )
});

families.push({
  name: 'Sections',
  content: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _family.Item,
      { fullWidth: true },
      _react2.default.createElement(
        'div',
        { className: ui.mainColumn },
        _react2.default.createElement(
          _family.ItemHeading,
          null,
          'Text | Pic'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Default layout for a section is to have text on the left and an image on the right.'
        )
      ),
      _react2.default.createElement(
        _Section2.default,
        {
          heading: 'Section Heading.',
          pic: 'assets/developer-2.png' },
        _react2.default.createElement(
          'p',
          null,
          'Some nice words about this section, and some more words.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'More words but this time in another paragraph.'
        )
      )
    ),
    _react2.default.createElement(
      _family.Item,
      { fullWidth: true },
      _react2.default.createElement(
        'div',
        { className: ui.mainColumn },
        _react2.default.createElement(
          _family.ItemHeading,
          null,
          'Pic | Text'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Set the ',
          _react2.default.createElement(
            'code',
            null,
            'flipped'
          ),
          ' prop (boolean flag) to reverse the order.'
        )
      ),
      _react2.default.createElement(
        _Section2.default,
        {
          flipped: true,
          heading: 'Section Heading.',
          pic: 'assets/developer-2.png' },
        _react2.default.createElement(
          'p',
          null,
          'Some nice words about this section, and some more words.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'More words but this time in another paragraph, and it\'s got a CTA'
        ),
        _react2.default.createElement(
          _Button2.default,
          { fill: true },
          'Find out more'
        )
      )
    )
  )
});

families.push({
  name: 'Features',
  content: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        _family.ItemHeading,
        null,
        'Single feature'
      ),
      _react2.default.createElement(
        _Feature2.default,
        {
          heading: 'Something Cool.',
          icon: 'team'
        },
        'Short description goes here'
      )
    ),
    _react2.default.createElement(
      _family.Item,
      null,
      _react2.default.createElement(
        _family.ItemHeading,
        null,
        'Group of features'
      ),
      _react2.default.createElement(
        _FeatureList2.default,
        null,
        _react2.default.createElement(
          _Feature2.default,
          {
            heading: 'Feature One.',
            icon: 'team'
          },
          'Short description goes here'
        ),
        _react2.default.createElement(
          _Feature2.default,
          {
            heading: 'Feature Two.',
            icon: 'dailyUpdates'
          },
          'Short description goes here'
        ),
        _react2.default.createElement(
          _Feature2.default,
          {
            heading: 'Feature Three.',
            icon: 'team'
          },
          'Short description goes here'
        ),
        _react2.default.createElement(
          _Feature2.default,
          {
            heading: 'Feature Four.',
            icon: 'dailyUpdates'
          },
          'Short description goes here'
        )
      )
    )
  )
});

module.exports = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_nav2.default, { families: families }),
  _react2.default.createElement(
    'div',
    { className: ui.main },
    families.map(function (f) {
      return _react2.default.createElement(
        _family.Family,
        { key: f.name, name: f.name },
        f.content
      );
    })
  )
);

},{"../components/Button":5,"../components/Feature":6,"../components/FeatureList":7,"../components/Heading":8,"../components/PullQuote":9,"../components/Section":10,"./playground/button":24,"./ui":27,"./ui/family":26,"./ui/nav":28,"react":"react"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Family = exports.ItemHeading = exports.Item = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _index = require('./index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = {
  family: (0, _cmz2.default)('src_ui_family-11', [/*cmz|*/'min-height: 90vh' /*|cmz*/, /*cmz|*/'border-bottom: 1px solid hsl(0, 0%, 95%)' /*|cmz*/]),

  name: (0, _cmz2.default)('src_ui_family-16', [_index.mainColumn, _index.pad, _index.heading]),

  item: (0, _cmz2.default)('src_ui_family-22', _index.pad)
};

s.darkItem = (0, _cmz2.default)('src_ui_family-27', [s.item, /*cmz|*/'background: #333' /*|cmz*/, /*cmz|*/'color: #fff' /*|cmz*/]);

var Item = exports.Item = function Item(props) {
  var cx = [props.dark ? s.darkItem : s.item, props.fullWidth ? '' : _index.mainColumn];

  return _react2.default.createElement(
    'div',
    { className: cx.join(' ') },
    props.children
  );
};

var ItemHeading = exports.ItemHeading = function ItemHeading(props) {
  return _react2.default.createElement('h3', _extends({ className: _index.heading }, props));
};

var Family = exports.Family = function Family(props) {
  return _react2.default.createElement(
    'div',
    { className: s.family },
    _react2.default.createElement(
      'h2',
      { className: s.name },
      props.name
    ),
    props.children
  );
};

},{"./index.js":27,"cmz":11,"react":"react"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Family = exports.Item = exports.main = exports.heading = exports.mainColumn = exports.pad = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pad = exports.pad = (0, _cmz2.default)('src_ui_index-4', /*cmz|*/'padding: 2rem' /*|cmz*/);

var mainColumn = exports.mainColumn = (0, _cmz2.default)('src_ui_index-6', [/*cmz|*/'max-width: 70rem' /*|cmz*/, /*cmz|*/'margin: 0 auto' /*|cmz*/]);

var heading = exports.heading = (0, _cmz2.default)('src_ui_index-11', [/*cmz|*/'font-family: \'Helvetica Neue\', sans-serif' /*|cmz*/, /*cmz|*/'font-weight: 200' /*|cmz*/]);

var main = exports.main = (0, _cmz2.default)('src_ui_index-16', [/*cmz|*/'margin-top: 5rem' /*|cmz*/, /*cmz|*/'max-width: 100%' /*|cmz*/, /*cmz|*/'overflow: hidden' /*|cmz*/]);

var s = {
  family: (0, _cmz2.default)('src_ui_index-23', [mainColumn, /*cmz|*/'min-height: 90vh' /*|cmz*/, /*cmz|*/'border-bottom: 1px solid hsl(0, 0%, 95%)' /*|cmz*/]),

  name: (0, _cmz2.default)('src_ui_index-29', [pad, heading]),

  item: (0, _cmz2.default)('src_ui_index-34', pad)
};

s.darkItem = (0, _cmz2.default)('src_ui_index-39', [s.item, /*cmz|*/'background: #333' /*|cmz*/, /*cmz|*/'color: #fff' /*|cmz*/]);

var Item = exports.Item = function Item(props) {
  return _react2.default.createElement(
    'div',
    { className: props.dark ? s.darkItem : s.item },
    props.children
  );
};

Item.Heading = function (props) {
  return _react2.default.createElement('h3', _extends({ className: heading }, props));
};

var Family = exports.Family = function Family(props) {
  return _react2.default.createElement(
    'div',
    { className: s.family },
    _react2.default.createElement(
      'h2',
      { className: s.name },
      props.name
    ),
    props.children
  );
};

},{"cmz":11,"react":"react"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cmz = require('cmz');

var _cmz2 = _interopRequireDefault(_cmz);

var _logo = require('../../atoms/logo');

var _logo2 = _interopRequireDefault(_logo);

var _index = require('./index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = {
  root: (0, _cmz2.default)('src_ui_nav-12', [/*cmz|*/'position: fixed' /*|cmz*/, /*cmz|*/'z-index: 10' /*|cmz*/, /*cmz|*/'width: 100%' /*|cmz*/, /*cmz|*/'top: 0' /*|cmz*/, /*cmz|*/'background: #fff' /*|cmz*/, /*cmz|*/'border-bottom: 1px solid hsl(0, 0%, 95%)' /*|cmz*/]),

  inner: (0, _cmz2.default)('src_ui_nav-21', [_index.mainColumn, /*cmz|*/'display: flex' /*|cmz*/, /*cmz|*/'justify-content: space-between' /*|cmz*/, /*cmz|*/'align-items: center' /*|cmz*/, /*cmz|*/'height: 4rem' /*|cmz*/]),

  logo: (0, _cmz2.default)('src_ui_nav-29', [/*cmz|*/'width: 20rem' /*|cmz*/, /*cmz|*/'padding: 0 2rem' /*|cmz*/, /*cmz|*/'\n& span {\n  display: inline-block;\n  width: 2rem;\n  position: relative;\n  top: .5rem;\n  margin-right: .5rem;\n}\n      ' /*|cmz*/]),

  heading: (0, _cmz2.default)('src_ui_nav-43', [/*cmz|*/'flex-grow: 1' /*|cmz*/]),

  pageSelect: (0, _cmz2.default)('src_ui_nav-47', [/*cmz|*/'margin: 0 1rem' /*|cmz*/, /*cmz|*/'background: transparent' /*|cmz*/, /*cmz|*/'border: none' /*|cmz*/, /*cmz|*/'font-size: 1rem' /*|cmz*/])
};

exports.default = function (props) {
  var families = props.families;


  return _react2.default.createElement(
    'div',
    { className: s.root },
    _react2.default.createElement(
      'div',
      { className: s.inner },
      _react2.default.createElement(
        'div',
        { className: s.logo },
        _react2.default.createElement(
          'h1',
          { className: _index.heading },
          _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: (0, _logo2.default)() } }),
          'Atoms'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: s.heading },
        props.heading
      ),
      _react2.default.createElement(
        'select',
        { className: s.pageSelect },
        families.map(function (f) {
          return _react2.default.createElement(
            'option',
            { key: f.name },
            f.name
          );
        })
      )
    )
  );
};

},{"../../atoms/logo":3,"./index.js":27,"cmz":11,"react":"react"}]},{},[23]);
