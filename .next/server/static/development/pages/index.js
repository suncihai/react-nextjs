module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/banner1.jpg":
/*!********************************!*\
  !*** ./assets/img/banner1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/banner1_302de08bc2f3296a850adbe3d2eed3c1.jpg";

/***/ }),

/***/ "./assets/img/banner2.jpg":
/*!********************************!*\
  !*** ./assets/img/banner2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/banner2_2f05edde081112311b7f862fc53b1f0f.jpg";

/***/ }),

/***/ "./assets/img/banner3.png":
/*!********************************!*\
  !*** ./assets/img/banner3.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/banner3_ba9204e4ea3ac4386b272c11e213dd0a.png";

/***/ }),

/***/ "./assets/img/banner4.png":
/*!********************************!*\
  !*** ./assets/img/banner4.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/banner4_5de1c212f916f19ae3ee7f8e9cbe039b.png";

/***/ }),

/***/ "./assets/img/banner5.jpg":
/*!********************************!*\
  !*** ./assets/img/banner5.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/banner5_0a3117af4f88390a5a17b4d40b35bd59.jpg";

/***/ }),

/***/ "./assets/img/home_bg.jpg":
/*!********************************!*\
  !*** ./assets/img/home_bg.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/home_bg_94bcaf285df69ae343399bbbdc6936d8.jpg";

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo_ed5c199939bd52859d01f1f9eb680ec9.png";

/***/ }),

/***/ "./common/js/axios.js":
/*!****************************!*\
  !*** ./common/js/axios.js ***!
  \****************************/
/*! exports provided: axiosClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosClient", function() { return axiosClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./common/js/utils.js");
 // import axiosRetry from 'axios-retry'
// const axiosOrigin = require('axios-proxy-fix')



 // import utils from 'utils'
// axiosOrigin.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axiosOrigin.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

if (false) { var Fingerprint2; }

var cookieData; // if (process.browser) {
//   cookieData =  cookie.parse(document.cookie)
// }

/**
 * [axiosClient description]
 * @type {[type]}
 */

var axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'X-BM-CLIENT': 'WEB',
    'X-BM-DEVICE': 1,
    'X-BM-VERSION': process.env.version || '1.0.0'
  },
  transformRequest: function transformRequest(data, headers) {
    cookieData = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.parse(document.cookie);
    headers['X-BM-DEVICE'] = window.device || 1;
    headers['Authorization'] = cookieData && cookieData.accessToken;
    return qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data);
  },
  transformResponse: function transformResponse(res) {
    //console.log("res",res);
    var host = window.location.host;
    var webDomain = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["breakDownHostUrl"])(host);
    var cookieOptions;

    if (webDomain.indexOf('localhost') < 0) {
      cookieOptions = {
        maxAge: 0,
        domain: ".".concat(webDomain)
      };
    } else {
      cookieOptions = {
        maxAge: 0
      };
    }

    if (+res.code === -6) {
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('accessToken', null, cookieOptions);
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('accessSalt', null, cookieOptions);
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('loginName', null, cookieOptions);
    }

    var ret = JSON.parse(res);
    return ret;
  } // baseURL: process.env.baseUrl,

});
axiosClient.interceptors.response.use(function (res) {
  if (res.status === 200) {
    return res.data;
  }

  return res;
}, function (err) {
  return err;
});

/***/ }),

/***/ "./common/js/const.js":
/*!****************************!*\
  !*** ./common/js/const.js ***!
  \****************************/
/*! exports provided: cryptoApiUrl, cryptoStreamUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cryptoApiUrl", function() { return cryptoApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cryptoStreamUrl", function() { return cryptoStreamUrl; });
var cryptoApiUrl = 'https://min-api.cryptocompare.com'; // CryptoCompare API

var cryptoStreamUrl = 'https://streamer.cryptocompare.com'; // CryptoCompare websocket stream

/***/ }),

/***/ "./common/js/utils.js":
/*!****************************!*\
  !*** ./common/js/utils.js ***!
  \****************************/
/*! exports provided: transLang, transLang2, rand, insertSignToParams, filterNAN, isMoneyType, validatePwd, getBrowserLang, breakDownHostUrl, getMainSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transLang", function() { return transLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transLang2", function() { return transLang2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSignToParams", function() { return insertSignToParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNAN", function() { return filterNAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoneyType", function() { return isMoneyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePwd", function() { return validatePwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserLang", function() { return getBrowserLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakDownHostUrl", function() { return breakDownHostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainSite", function() { return getMainSite; });
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js/md5 */ "crypto-js/md5");
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__);
 // 正常转化

var transLang = function transLang(lang) {
  var langParam = 'en_US';

  if (lang === 'cn') {
    langParam = 'zh_CN';
  } else if (lang === 'jp') {
    langParam = 'ja_JP';
  } else if (lang === 'kr') {
    langParam = 'ko_KR';
  } else if (lang === 'vn') {
    langParam = 'vi_VN';
  } else if (lang === 'ru') {
    langParam = 'ru_RU';
  } else if (lang === 'cn_tw') {
    langParam = 'zh_TW';
  } else if (lang === 'tr') {
    langParam = 'tr_TR';
  } else {
    langParam = 'en_US';
  }

  return langParam;
}; // 变态转化 只给极验用

var transLang2 = function transLang2(lang) {
  var langParam = 'en';

  if (lang === 'cn') {
    langParam = 'zh-cn';
  } else {
    langParam = 'en';
  }

  return langParam;
};
var rand = function rand(length, current) {
  current = current ? current : '';
  return length ? rand(--length, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 60)) + current) : current;
};
/**
 *
 */

var insertSignToParams = function insertSignToParams(params, timestamp, salt) {
  // asii timsstamp salt => md5
  var keyArr = Object.keys(params);
  var ret = '';
  keyArr = keyArr.sort();
  keyArr.forEach(function (keyName) {
    if (keyName !== 'timestamp') {
      ret = "".concat(ret, "&").concat(keyName, "=").concat(params[keyName]);
    }
  });
  ret = ret.slice(1);
  ret = "".concat(ret).concat(timestamp).concat(salt);
  ret = crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(ret).toString();
  params.sign = ret; // 最后把sign偷偷加上

  return ret;
}; // 对输入框输入数字做格式处理，并返回正确内容

var filterNAN = function filterNAN(str) {
  //得到第一个字符是否为负号
  var s = str.toString();
  var t = str.toString().charAt(0); //先把非数字的都替换掉，除了数字和.

  s = s.replace(/[^\d\.]/g, ''); //必须保证第一个为数字而不是.

  s = s.replace(/^\./g, ''); //保证只有出现一个.而没有多个.

  s = s.replace(/\.{2,}/g, '.'); //保证.只出现一次，而不能出现两次以上

  s = s.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.'); //如果第一位是负号，则允许添加

  if (t == '-') {
    s = '-' + s;
  }

  return s;
}; // 判断是否符合金融格式 只能有一位小数点， 小数点后最长8位， 仅包含数字和一个小数点

var isMoneyType = function isMoneyType(str) {
  var s = str.toString();
  var reg = /^(([1-9]\d*|0)(\.\d{1,8})?)$|(0\.0?([1-9]\d?))$/;
  return reg.test(s);
}; // 8-32  必须包括数字 英文 可以包括 特殊字符 不含空格

var validatePwd = function validatePwd(str) {
  var ret = /[a-zA-Z[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]+/.test(str) && /\d+/.test(str) && str.length >= 6 && str.length <= 32 && !/\s/.test(str);
  return ret;
};
var getBrowserLang = function getBrowserLang() {
  var lang = window.navigator.language;
  var locale;

  if (lang === 'zh-CN' || lang === 'cn') {
    locale = 'cn';
  } else if (lang === 'vi-VN') {
    locale = 'vn';
  } else if (lang === 'ja-JP') {
    locale = 'jp';
  } else if (lang === 'ko-KR') {
    locale = 'kr';
  } else if (lang === 'ru-RU') {
    locale = 'ru';
  } else if (lang === 'zh-TW') {
    locale = 'cn_tw';
  } else if (lang === 'tr-TR') {
    locale = 'tr';
  } else {
    locale = 'en';
  }

  return locale;
};
var breakDownHostUrl = function breakDownHostUrl(url) {
  var hostUrl = url;
  var newUrl = hostUrl; // 防止未做301跳转，产生XXX.XXX的域名

  if (hostUrl.split('.') && hostUrl.split('.').length <= 2) {
    newUrl = hostUrl;
  } else {
    var number = hostUrl.indexOf('.');
    newUrl = hostUrl.slice(number + 1);
  }

  return newUrl;
};
var getMainSite = function getMainSite() {
  var mainSite = 'https://www.bitmart.com';
  var host = window.location.host;
  var webDomain = breakDownHostUrl(host);

  if (process.env.web_env === 'dev') {
    mainSite = "https://web-frontend-v2-dev-d981hkl2m.".concat(webDomain);
  } else if (process.env.web_env === 'testing') {
    mainSite = "https://web-frontend-v2-testing.".concat(webDomain);
  } else if (process.env.web_env === 'master') {
    mainSite = "https://www.".concat(webDomain);
  }

  return mainSite;
};

/***/ }),

/***/ "./components/CoinList.js":
/*!********************************!*\
  !*** ./components/CoinList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_js_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/js/axios */ "./common/js/axios.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_js_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/js/const */ "./common/js/const.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-sparklines */ "react-sparklines");
/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_11__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var CoinListContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "CoinList__CoinListContainer",
  componentId: "sc-1xno7ue-0"
})(["width:1000px;margin:0 auto;padding-top:110px;padding-bottom:100px;.min-max-value{display:inline-block;height:250px;position:relative;div{&.max{position:absolute;top:0;}&.min{position:absolute;bottom:0;}}}"]);
var CoinGraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "CoinList__CoinGraphContainer",
  componentId: "sc-1xno7ue-1"
})(["margin-bottom:30px;svg{margin-right:10px;}#fillgauge4{margin-right:25px;}span{display:inline-block;vertical-align:top;line-height:75px;font-size:20px;font-weight:bold;margin-right:15px;}"]);
var CoinWrap = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "CoinList__CoinWrap",
  componentId: "sc-1xno7ue-2"
})(["display:inline-block;padding:12.5px 0;width:125px;text-align:center;border:1px solid #fcfcfd;font-weight:bold;"]);

var CoinList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CoinList, _React$Component);

  function CoinList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CoinList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CoinList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      status: true,
      //To trigger rerendering page
      socket: {},
      btcData: []
    });

    _defineProperty(_assertThisInitialized(_this), "getCoinList",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(gauge) {
        var ret, coins, initialBTC, testUser, tmp, btcPrice, i, coinsParsed;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_common_js_const__WEBPACK_IMPORTED_MODULE_8__["cryptoApiUrl"], "/data/top/totalvolfull?limit=100&tsym=USD"));

              case 2:
                ret = _context.sent;
                coins = ret.data.Data;
                _context.next = 6;
                return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_4__["axiosClient"])({
                  method: 'GET',
                  url: '/api/get_btc_initial_price'
                });

              case 6:
                initialBTC = _context.sent;
                _context.next = 9;
                return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_4__["axiosClient"])({
                  method: 'GET',
                  url: '/api/getusers'
                });

              case 9:
                testUser = _context.sent;
                console.log('testUser', testUser);
                tmp = initialBTC.split(",");
                btcPrice = [];

                for (i = 0; i < 100; i++) {
                  btcPrice.push(parseFloat(tmp[2 * i + 1]));
                }

                _this.setState({
                  btcData: btcPrice
                });

                coinsParsed = {};
                coins.forEach(function (coin) {
                  coin = {
                    name: coin.RAW.USD.FROMSYMBOL,
                    price: coin.RAW.USD.PRICE.toFixed(2)
                  };
                  coinsParsed[coin.name] = coin;
                });

                _this.props.getCoinPrice(coinsParsed);

                _this.subscribeStream(Object.keys(coinsParsed), coinsParsed, gauge);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CoinList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var gauge = [];
      var config1 = liquidFillGaugeDefaultSettings();
      config1.waveAnimateTime = 5000;
      config1.waveHeight = 0.08;
      config1.waveOffset = 0.25;
      config1.valueCountUp = false;
      config1.displayPercent = false;
      config1.textSize = 2;
      config1.minValue = 0;
      config1.maxValue = 10;
      gauge[0] = loadLiquidFillGauge("fillgauge1", 0, config1);
      var config2 = liquidFillGaugeDefaultSettings();
      config2.waveAnimateTime = 5000;
      config2.waveHeight = 0.08;
      config2.waveOffset = 0.25;
      config2.valueCountUp = false;
      config2.displayPercent = false;
      config2.textSize = 2;
      config2.minValue = 0;
      config2.maxValue = 10;
      gauge[1] = loadLiquidFillGauge("fillgauge2", 0, config2);
      var config3 = liquidFillGaugeDefaultSettings();
      config3.waveAnimateTime = 5000;
      config3.waveHeight = 0.08;
      config3.waveOffset = 0.25;
      config3.valueCountUp = false;
      config3.displayPercent = false;
      config3.textSize = 2;
      config3.minValue = 0;
      config3.maxValue = 10;
      gauge[2] = loadLiquidFillGauge("fillgauge3", 0, config3);
      var config4 = liquidFillGaugeDefaultSettings();
      config4.waveAnimateTime = 5000;
      config4.waveHeight = 0.08;
      config4.waveOffset = 0.25;
      config4.valueCountUp = false;
      config4.displayPercent = false;
      config4.textSize = 2;
      config4.minValue = 0;
      config4.maxValue = 10;
      gauge[3] = loadLiquidFillGauge("fillgauge4", 0, config4);
      var config5 = liquidFillGaugeDefaultSettings();
      config5.waveAnimateTime = 5000;
      config5.waveHeight = 0.08;
      config5.waveOffset = 0.25;
      config5.valueCountUp = false;
      config5.displayPercent = false;
      config5.textSize = 2;
      config5.minValue = 0;
      config5.maxValue = 10;
      gauge[4] = loadLiquidFillGauge("fillgauge5", 0, config5);
      var config6 = liquidFillGaugeDefaultSettings();
      config6.waveAnimateTime = 5000;
      config6.waveHeight = 0.08;
      config6.waveOffset = 0.25;
      config6.valueCountUp = false;
      config6.displayPercent = false;
      config6.textSize = 2;
      config6.minValue = 0;
      config6.maxValue = 10;
      gauge[5] = loadLiquidFillGauge("fillgauge6", 0, config6);
      this.getCoinList(gauge);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.socket) {
        this.socket.close();
        this.socket.disconnect();
      }
    }
  }, {
    key: "subscribeStream",
    value: function subscribeStream(symbols, coins, gauge) {
      var _this2 = this;

      /*
        Subscribe to websocket stream using coin symbols.
      */
      this.socket = io.connect(_common_js_const__WEBPACK_IMPORTED_MODULE_8__["cryptoStreamUrl"]);
      var subscriptions = [];
      symbols.forEach(function (symbol) {
        subscriptions.push('5~CCCAGG~' + symbol + '~USD');
      });
      this.socket.emit('SubAdd', {
        'subs': subscriptions
      });
      this.socket.on('m', function (message) {
        _this2.handleMessage(message, coins, gauge);
      });
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(message, coins, gauge) {
      //console.log('coins', this.props.coins)
      message = message.split('~'); // coin value goes up(1) or down(2)

      if (message[4] === "1" || message[4] === "2") {
        var coin = {
          name: message[2],
          price: message[5]
        };

        if (message[4] === "1") {
          coin.isUp = true;
          coin.isDown = false;
        } else if (message[4] === "2") {
          coin.isUp = false;
          coin.isDown = true;
        }

        this.updateCoin(coin, coins, gauge);
      }
    }
  }, {
    key: "updateCoin",
    value: function updateCoin(coin, coins, gauge) {
      var _this3 = this;

      var status = this.state.status;
      this.setState({
        status: !status
      });
      coins[coin.name] = coin;
      this.props.getCoinPrice(coins);
      Object.values(coins).map(function (ele, index) {
        if (ele.name == "BTC") {
          var num = "".concat(parseFloat(ele.price).toFixed(2));
          num = num.split('.');
          gauge[0].update(parseInt(num[0][0]));
          gauge[1].update(parseInt(num[0][1]));
          gauge[2].update(parseInt(num[0][2]));
          gauge[3].update(parseInt(num[0][3]));
          gauge[4].update(parseInt(num[1][0]));
          gauge[5].update(parseInt(num[1][1]));
          var arr = _this3.state.btcData;
          arr.push(parseFloat(ele.price).toFixed(2));

          _this3.setState({
            btcData: arr
          });
        }
      });
      /*
        Reset coin status after short interval to remove binded css classes.
        This will allow tick animations be reapplied and play again.
      */

      window.setTimeout(function () {
        coins[coin.name].isUp = false;
        coins[coin.name].isDown = false;

        _this3.props.getCoinPrice(coins);
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.coins) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], null));
      } else {
        var graphCss = {
          width: '1000px',
          height: '250px'
        };
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CoinListContainer, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_11__["Sparklines"], {
          style: graphCss,
          data: this.state.btcData,
          limit: 100
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_11__["SparklinesLine"], {
          color: "#08aba6"
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "min-max-value"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "max"
        }, "$", lodash__WEBPACK_IMPORTED_MODULE_2___default.a.max(this.state.btcData)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "min"
        }, "$", lodash__WEBPACK_IMPORTED_MODULE_2___default.a.min(this.state.btcData))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CoinGraphContainer, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "BTC"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
          id: "fillgauge1",
          width: "70",
          height: "70"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
          id: "fillgauge2",
          width: "70",
          height: "70"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
          id: "fillgauge3",
          width: "70",
          height: "70"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
          id: "fillgauge4",
          width: "70",
          height: "70"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
          id: "fillgauge5",
          width: "70",
          height: "70"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
          id: "fillgauge6",
          width: "70",
          height: "70"
        })), Object.values(this.props.coins).map(function (ele) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CoinWrap, {
            key: ele.name,
            className: classname__WEBPACK_IMPORTED_MODULE_10___default()({
              'tickGreen': ele.isUp,
              'tickRed': ele.isDown
            })
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, ele.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, "$", ele.price));
        })));
      }
    }
  }]);

  return CoinList;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var mapDispatchToProps = {
  getCoinPrice: _store__WEBPACK_IMPORTED_MODULE_9__["getCoinPrice"]
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var coins = _ref2.coins;
  return {
    coins: coins
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(CoinList));

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Bar",
  componentId: "sc-87s9ew-0"
})(["background:#0e1118;height:65px;line-height:65px;color:#666;text-align:center;"]);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, null, "Copyright 2017-2019 \xA9 bitmart.com, All Rights Reserved"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_4__);





var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Bar",
  componentId: "sc-1fjhu9s-0"
})(["background:transparent;position:fixed;top:0;color:#fff;height:50px;padding-top:8px;padding-left:10px;width:100%;transition:ease 0.5s;&.isDark{background:#0e1118;}"]);
var Navi = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Header__Navi",
  componentId: "sc-1fjhu9s-1"
})(["margin:0 15px;display:inline-block;cursor:pointer;&:hover{opacity:0.7;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1fjhu9s-2"
})(["display:inline-block;height:35px;vertical-align:middle;cursor:pointer;"]);
var naviList = ['Partners'];

var Header = function Header(props) {
  var bgClass = classname__WEBPACK_IMPORTED_MODULE_4___default()({
    'isDark': props.isDark
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
    className: bgClass
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      display: 'inline-block',
      marginLeft: '30px'
    }
  }, naviList.map(function (ele, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navi, {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(ele.toLowerCase())
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ele)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDark: props.isDark
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "antd/lib/icon/style/css");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/spin/style/css */ "antd/lib/spin/style/css");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);






var LoadingWrap = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Loading__LoadingWrap",
  componentId: "n57mgo-0"
})(["background:transparent;height:500px;line-height:500px;width:100%;text-align:center;"]);
var Spin = antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default.a,
    Icon = antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a;
var antIcon = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
  type: "loading",
  style: {
    fontSize: 24,
    color: '#1890ff'
  }
});

var Loading = function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LoadingWrap, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Spin, {
    indicator: antIcon
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel/style/css */ "antd/lib/carousel/style/css");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_home_bg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/home_bg.jpg */ "./assets/img/home_bg.jpg");
/* harmony import */ var _assets_img_home_bg_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_home_bg_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_banner1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/banner1.jpg */ "./assets/img/banner1.jpg");
/* harmony import */ var _assets_img_banner1_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_banner1_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_banner2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/banner2.jpg */ "./assets/img/banner2.jpg");
/* harmony import */ var _assets_img_banner2_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_banner2_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_img_banner3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/banner3.png */ "./assets/img/banner3.png");
/* harmony import */ var _assets_img_banner3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_img_banner3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_img_banner4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/banner4.png */ "./assets/img/banner4.png");
/* harmony import */ var _assets_img_banner4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_banner4_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_banner5_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/banner5.jpg */ "./assets/img/banner5.jpg");
/* harmony import */ var _assets_img_banner5_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_img_banner5_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_CoinList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CoinList */ "./components/CoinList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Body = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__Body",
  componentId: "sc-1ao6dy1-0"
})(["background:#ebeef0;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1ao6dy1-1"
})(["height:500px;background:url(", ") no-repeat 100% 100%;background-size:1920px;.title{padding-top:180px;width:1000px;margin:0 auto;}img{width:290px;margin:5px;}.ant-carousel{padding-top:180px;.slick-slider{height:300px;width:1200px;margin:0 auto;}.slick-slide{img{display:inline-block;}}h2{font-size:30px;color:#fff;}}"], _assets_img_home_bg_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDark: false
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      if (window.scrollY > 250) {
        _this.setState({
          isDark: true
        });
      } else {
        _this.setState({
          isDark: false
        });
      }
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var isDark = this.state.isDark;
      var CarouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isDark: isDark
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.slim.js"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
        src: "http://d3js.org/d3.v3.min.js",
        language: "JavaScript"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
        src: "/static/liquidFillGauge2.js",
        language: "JavaScript"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
        autoplay: true
      }, CarouselSettings), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "A Premier Global Digital Asset Trading Platform")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: _assets_img_banner1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: _assets_img_banner2_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: _assets_img_banner3_png__WEBPACK_IMPORTED_MODULE_8___default.a
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: _assets_img_banner4_png__WEBPACK_IMPORTED_MODULE_9___default.a
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: _assets_img_banner5_jpg__WEBPACK_IMPORTED_MODULE_10___default.a
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CoinList__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, serverRenderClock, startClock, incrementCount, decrementCount, resetCount, getPartners, getCoinPrice, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCount", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCount", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPartners", function() { return getPartners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoinPrice", function() { return getCoinPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);


var InitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  partners: {},
  coins: {}
};
var actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  GETPARTNERS: 'GETPARTNERS',
  GETCOINPRICE: 'GETCOINPRICE' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });

    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: InitialState.count
      });

    case actionTypes.GETPARTNERS:
      return Object.assign({}, state, {
        partners: action.payload
      });

    case actionTypes.GETCOINPRICE:
      return Object.assign({}, state, {
        coins: action.payload
      });

    default:
      return state;
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock() {
  return {
    type: actionTypes.TICK,
    light: false,
    ts: Date.now()
  };
};
var startClock = function startClock() {
  return {
    type: actionTypes.TICK,
    light: true,
    ts: Date.now()
  };
};
var incrementCount = function incrementCount() {
  return {
    type: actionTypes.INCREMENT
  };
};
var decrementCount = function decrementCount() {
  return {
    type: actionTypes.DECREMENT
  };
};
var resetCount = function resetCount() {
  return {
    type: actionTypes.RESET
  };
};
var getPartners = function getPartners(data) {
  return {
    type: actionTypes.GETPARTNERS,
    payload: data
  };
};
var getCoinPrice = function getCoinPrice(data) {
  return {
    type: actionTypes.GETCOINPRICE,
    payload: data
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/carousel":
/*!************************************!*\
  !*** external "antd/lib/carousel" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "antd/lib/carousel/style/css":
/*!**********************************************!*\
  !*** external "antd/lib/carousel/style/css" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel/style/css");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style/css":
/*!******************************************!*\
  !*** external "antd/lib/icon/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "antd/lib/spin/style/css":
/*!******************************************!*\
  !*** external "antd/lib/spin/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style/css");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classname":
/*!****************************!*\
  !*** external "classname" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classname");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "crypto-js/md5":
/*!********************************!*\
  !*** external "crypto-js/md5" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js/md5");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-sparklines":
/*!***********************************!*\
  !*** external "react-sparklines" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sparklines");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map