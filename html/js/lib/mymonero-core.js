!function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("require('electron')")):"function"==typeof define&&define.amd?define(["require('electron')"],e):"object"==typeof exports?exports.mymonero_core_js=e(require("require('electron')")):A.mymonero_core_js=e(A["require('electron')"])}(window,function(__WEBPACK_EXTERNAL_MODULE__88__){return function(A){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return A[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},t.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var r in A)t.d(n,r,function(e){return A[e]}.bind(null,r));return n},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=86)}([function(A,e){"function"==typeof Object.create?A.exports=function(A,e){A.super_=e,A.prototype=Object.create(e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}})}:A.exports=function(A,e){A.super_=e;var t=function(){};t.prototype=e.prototype,A.prototype=new t,A.prototype.constructor=A}},function(A,e,t){var n=t(2),r=n.Buffer;function i(A,e){for(var t in A)e[t]=A[t]}function a(A,e,t){return r(A,e,t)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?A.exports=n:(i(n,e),e.Buffer=a),i(r,a),a.from=function(A,e,t){if("number"==typeof A)throw new TypeError("Argument must not be a number");return r(A,e,t)},a.alloc=function(A,e,t){if("number"!=typeof A)throw new TypeError("Argument must be a number");var n=r(A);return void 0!==e?"string"==typeof t?n.fill(e,t):n.fill(e):n.fill(0),n},a.allocUnsafe=function(A){if("number"!=typeof A)throw new TypeError("Argument must be a number");return r(A)},a.allocUnsafeSlow=function(A){if("number"!=typeof A)throw new TypeError("Argument must be a number");return n.SlowBuffer(A)}},function(A,e,t){"use strict";(function(A){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
//# sourceMappingURL=mymonero-core.js.map