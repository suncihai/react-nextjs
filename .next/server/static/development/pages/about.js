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

/***/ "./assets/img/app_download.png":
/*!*************************************!*\
  !*** ./assets/img/app_download.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/app_download_47177572960b36a477fa59a2a5ea2791.png";

/***/ }),

/***/ "./assets/img/devices.png":
/*!********************************!*\
  !*** ./assets/img/devices.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/devices_552bcf84deb46184ae8e5ea0fe0c3780.png";

/***/ }),

/***/ "./assets/img/download1.svg":
/*!**********************************!*\
  !*** ./assets/img/download1.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/download1_f15cc82e8eb03c0c97f57bc7b9c61b80.svg";

/***/ }),

/***/ "./assets/img/download2.svg":
/*!**********************************!*\
  !*** ./assets/img/download2.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/download2_952c3a7796c0adbd3cfa0551c56289a7.svg";

/***/ }),

/***/ "./assets/img/iphoneX.png":
/*!********************************!*\
  !*** ./assets/img/iphoneX.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/iphoneX_9ee126dad6ec4d2c614123ac49bc0c7a.png";

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo_ed5c199939bd52859d01f1f9eb680ec9.png";

/***/ }),

/***/ "./assets/img/logo2.png":
/*!******************************!*\
  !*** ./assets/img/logo2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo2_f6b5ff43b9a2e525913a2d206bfdc0d1.png";

/***/ }),

/***/ "./assets/img/phone_c1.png":
/*!*********************************!*\
  !*** ./assets/img/phone_c1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/phone_c1_c33489e35a33405e31576926ce25b6c8.png";

/***/ }),

/***/ "./assets/img/phone_c2.png":
/*!*********************************!*\
  !*** ./assets/img/phone_c2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/phone_c2_786b49f5fad925f7c0b42aa2dd74b979.png";

/***/ }),

/***/ "./assets/img/phone_c3.png":
/*!*********************************!*\
  !*** ./assets/img/phone_c3.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/phone_c3_41888b1f5ff961c8e29f1a8ee0e27546.png";

/***/ }),

/***/ "./assets/video/1.mp4":
/*!****************************!*\
  !*** ./assets/video/1.mp4 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/1_44e0871de18040ec0087a21c7d222f66.mp4";

/***/ }),

/***/ "./assets/video/2.mp4":
/*!****************************!*\
  !*** ./assets/video/2.mp4 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/2_9e46dd62dce1b3ec36de0a9290c7c7cd.mp4";

/***/ }),

/***/ "./assets/video/3.mp4":
/*!****************************!*\
  !*** ./assets/video/3.mp4 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/3_addc48145d0709421e92e37160a7c816.mp4";

/***/ }),

/***/ "./assets/video/4.mp4":
/*!****************************!*\
  !*** ./assets/video/4.mp4 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/4_2d5093b375ccd463ef567d4b500dcab0.mp4";

/***/ }),

/***/ "./common/css/animation.css":
/*!**********************************!*\
  !*** ./common/css/animation.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/css/style.css":
/*!******************************!*\
  !*** ./common/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/js/const.js":
/*!****************************!*\
  !*** ./common/js/const.js ***!
  \****************************/
/*! exports provided: cryptoApiUrl, cryptoStreamUrl, videoWords, sidebarMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cryptoApiUrl", function() { return cryptoApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cryptoStreamUrl", function() { return cryptoStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoWords", function() { return videoWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarMenu", function() { return sidebarMenu; });
var cryptoApiUrl = 'https://min-api.cryptocompare.com'; // CryptoCompare API

var cryptoStreamUrl = 'https://streamer.cryptocompare.com'; // CryptoCompare websocket stream

var videoWords = ['We are eager to discover unknown area', 'No one is fear', 'One good change to Buy BitCoin', 'Just do it.', 'Keep walking', 'And you are there', 'If you love your dog', 'Let him be rich'];
var sidebarMenu = [{
  bar: 'Who we are',
  active: true
}, {
  bar: 'What we do',
  active: false
}, {
  bar: 'Our prospect',
  active: false
}, {
  bar: 'Buy, Store, Sell',
  active: false
}];

/***/ }),

/***/ "./components/about/About.js":
/*!***********************************!*\
  !*** ./components/about/About.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input/style/css */ "antd/lib/input/style/css");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_js_const_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/js/const.js */ "./common/js/const.js");
/* harmony import */ var _common_css_animation_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/css/animation.css */ "./common/css/animation.css");
/* harmony import */ var _common_css_animation_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_css_animation_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_img_devices_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/devices.png */ "./assets/img/devices.png");
/* harmony import */ var _assets_img_devices_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_devices_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_app_download_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/app_download.png */ "./assets/img/app_download.png");
/* harmony import */ var _assets_img_app_download_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_img_app_download_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/img/iphoneX.png */ "./assets/img/iphoneX.png");
/* harmony import */ var _assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_img_download1_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/img/download1.svg */ "./assets/img/download1.svg");
/* harmony import */ var _assets_img_download1_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_img_download1_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_img_download2_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/img/download2.svg */ "./assets/img/download2.svg");
/* harmony import */ var _assets_img_download2_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_img_download2_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_img_phone_c1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/img/phone_c1.png */ "./assets/img/phone_c1.png");
/* harmony import */ var _assets_img_phone_c1_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_img_phone_c1_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_img_phone_c2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/img/phone_c2.png */ "./assets/img/phone_c2.png");
/* harmony import */ var _assets_img_phone_c2_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_img_phone_c2_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_img_phone_c3_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/img/phone_c3.png */ "./assets/img/phone_c3.png");
/* harmony import */ var _assets_img_phone_c3_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_img_phone_c3_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_video_1_mp4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/video/1.mp4 */ "./assets/video/1.mp4");
/* harmony import */ var _assets_video_1_mp4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_video_1_mp4__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_video_2_mp4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/video/2.mp4 */ "./assets/video/2.mp4");
/* harmony import */ var _assets_video_2_mp4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_video_2_mp4__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_video_3_mp4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/video/3.mp4 */ "./assets/video/3.mp4");
/* harmony import */ var _assets_video_3_mp4__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_video_3_mp4__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_video_4_mp4__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/video/4.mp4 */ "./assets/video/4.mp4");
/* harmony import */ var _assets_video_4_mp4__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_video_4_mp4__WEBPACK_IMPORTED_MODULE_20__);



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 //image and video













var AboutBody = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "About__AboutBody",
  componentId: "sc-1xephd0-0"
})(["min-height:200vh;"]);
var ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "About__ContentWrap",
  componentId: "sc-1xephd0-1"
})(["height:100vh;width:100vw;.main-box{width:1200px;margin:0 auto;display:flex;justify-content:space-around;.left-box{padding-top:200px;display:inline-block;width:600px;vertical-align:top;h2{font-size:50px;margin-bottom:25px;font-family:'DIN-Bold';letter-spacing:1px;line-height:1.2;}p{font-size:16px;letter-spacing:1.2px;margin-bottom:30px;}.ant-input-group{width:400px;margin-bottom:40px;}img.ios{margin-right:10px;}}.right-box{display:inline-block;vertical-align:top;padding-top:150px;.phone-bg{width:300px;height:600px;background-image:url(", ");background-size:cover;padding:22px;overflow:hidden;.container{height:580px;overflow:hidden;img{position:absolute;width:257px;visibility:hidden;opacity:0;&.appFade1{transition:opacity 1.5s ease-in;z-index:2;opacity:1;visibility:visible;}&.appFade2{opacity:1;visibility:visible;}}}}}}&.top{}&.intro{background:linear-gradient(145deg,#fff 10%,#ebf4ff 60%,#69b2ff 150%);position:relative;.right-box{img{width:550px;position:relative;}}}"], _assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_11___default.a);
var VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "About__VideoWrapper",
  componentId: "sc-1xephd0-2"
})(["width:100vw;overflow:hidden;position:relative;video{object-fit:cover;height:100vh;transition:all 1s ease-in-out;}"]);
var StoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "About__StoryWrapper",
  componentId: "sc-1xephd0-3"
})(["position:absolute;transform:translate(-50%,-50%);left:50%;top:50%;font-size:40px;color:#fff;white-space:nowrap;z-index:51;"]);
var Mask = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "About__Mask",
  componentId: "sc-1xephd0-4"
})(["position:absolute;width:100%;height:100vh;left:0;top:0;z-index:50;background:#000;"]);
var SideBar = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "About__SideBar",
  componentId: "sc-1xephd0-5"
})(["position:fixed;left:0;top:12.5vh;width:175px;height:75vh;z-index:70;ul{display:flex;height:100%;flex-direction:column;justify-content:space-between;li{align-items:center;display:flex;height:8vh;color:#ddd;padding:30px;cursor:pointer;&.active{color:#000;border-left:5px solid #000;&.light{color:#fff;border-left:5px solid #fff;}}&.light{color:#aaa;}}}"]);

var About = function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      story = _useState2[0],
      setStory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_assets_video_1_mp4__WEBPACK_IMPORTED_MODULE_17___default.a),
      _useState4 = _slicedToArray(_useState3, 2),
      video = _useState4[0],
      setVideo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mask = _useState6[0],
      setMask = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_common_js_const_js__WEBPACK_IMPORTED_MODULE_7__["sidebarMenu"]),
      _useState8 = _slicedToArray(_useState7, 2),
      bars = _useState8[0],
      setBars = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      light = _useState10[0],
      setLight = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      app1 = _useState12[0],
      setApp1 = _useState12[1];

  var timer = function timer() {
    setTimeout(function () {
      addStory(story);
      addApp1(app1);
      timer();
    }, 5000);
  };

  var doMask = function doMask(video) {
    setMask(function (mask) {
      return true;
    });
    setTimeout(function () {
      setMask(function (mask) {
        return false;
      });
      setVideo(video);
    }, 1000);
  };

  var addStory = function addStory(story) {
    setStory(function (story) {
      if (story == 1) {
        doMask(_assets_video_2_mp4__WEBPACK_IMPORTED_MODULE_18___default.a);
      }

      if (story == 3) {
        doMask(_assets_video_3_mp4__WEBPACK_IMPORTED_MODULE_19___default.a);
      }

      if (story == 5) {
        doMask(_assets_video_4_mp4__WEBPACK_IMPORTED_MODULE_20___default.a);
      }

      if (story == 7) {
        doMask(_assets_video_1_mp4__WEBPACK_IMPORTED_MODULE_17___default.a);
        return 0;
      }

      return story + 1;
    });
  };

  var addApp1 = function addApp1(app1) {
    setApp1(function (app1) {
      if (app1 == 2) {
        return 0;
      }

      return app1 + 1;
    });
  };

  var selectBar = function selectBar(bars, num, light) {
    var windowHeight = window.innerHeight;
    bars.map(function (ele, index) {
      if (num == index) {
        ele.active = true;
      } else {
        ele.active = false;
      }
    });
    setBars(function (bars) {
      return bars;
    });
    setLight(light);
    window.scrollTo({
      top: num * windowHeight,
      behavior: 'smooth'
    });
  };

  var onScroll = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
    var height = window.scrollY;
    var windowHeight = window.innerHeight;

    if (height < windowHeight / 2) {
      selectBar(bars, 0, false);
    } else if (height >= windowHeight / 2 && height < 1.5 * windowHeight) {
      selectBar(bars, 1, false);
    } else if (height >= 1.5 * windowHeight && height < 2.5 * windowHeight) {
      selectBar(bars, 2, true);
    }
  }, 350);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    timer();
    window.addEventListener('scroll', onScroll);
    return function () {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AboutBody, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SideBar, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, bars.map(function (ele, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      onClick: function onClick() {
        return selectBar(bars, index);
      },
      className: classname__WEBPACK_IMPORTED_MODULE_6___default()({
        'active': ele.active,
        'light': light
      }),
      key: index
    }, ele.bar);
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContentWrap, {
    className: "top"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "main-box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left-box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "BitMart to the Moon!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "The BitMart mobile app is the safe, trusted way to build your crypto portfolio. Buying, storing, and selling crypto has never been easier."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Search, {
    enterButton: "text me the app",
    placeholder: "phone number",
    size: "large"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "ios",
    src: _assets_img_download1_svg__WEBPACK_IMPORTED_MODULE_12___default.a
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _assets_img_download2_svg__WEBPACK_IMPORTED_MODULE_13___default.a
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right-box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "phone-bg"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classname__WEBPACK_IMPORTED_MODULE_6___default()({
      'appFade1': app1 == 0,
      'appFade2': app1 == 1
    }),
    src: _assets_img_phone_c1_png__WEBPACK_IMPORTED_MODULE_14___default.a
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classname__WEBPACK_IMPORTED_MODULE_6___default()({
      'appFade1': app1 == 1,
      'appFade2': app1 == 2
    }),
    src: _assets_img_phone_c2_png__WEBPACK_IMPORTED_MODULE_15___default.a
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classname__WEBPACK_IMPORTED_MODULE_6___default()({
      'appFade1': app1 == 2,
      'appFade2': app1 == 0
    }),
    src: _assets_img_phone_c3_png__WEBPACK_IMPORTED_MODULE_16___default.a
  })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContentWrap, {
    className: "intro"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "main-box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left-box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Powering the future of crypto payments"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "We\u2019ve partnered with the Flexa network to make the promise of crypto payments a reality.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right-box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "riseDown",
    src: _assets_img_app_download_png__WEBPACK_IMPORTED_MODULE_10___default.a
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(VideoWrapper, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_5___default.a, {
    url: video,
    playing: true,
    loop: true,
    width: "100%",
    height: "100vh"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Mask, {
    className: mask ? 'maskFadeIn' : 'maskFadeOut'
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StoryWrapper, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, _common_js_const_js__WEBPACK_IMPORTED_MODULE_7__["videoWords"].map(function (ele, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: story == index ? 'wordfadeIn' : 'wordfadeOut',
      key: index
    }, ele);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/layout/CheckLogin.js":
/*!*****************************************!*\
  !*** ./components/layout/CheckLogin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CheckLogin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckLogin, _React$Component);

  function CheckLogin() {
    _classCallCheck(this, CheckLogin);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckLogin).apply(this, arguments));
  }

  _createClass(CheckLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('testUserName')) {
        this.props.login(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('testUserName'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  }]);

  return CheckLogin;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = {
  login: _store__WEBPACK_IMPORTED_MODULE_2__["login"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CheckLogin));

/***/ }),

/***/ "./components/layout/Footer.js":
/*!*************************************!*\
  !*** ./components/layout/Footer.js ***!
  \*************************************/
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
  componentId: "sc-1714oml-0"
})(["background:#0e1118;height:65px;line-height:65px;color:#666;text-align:center;"]);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, null, "Copyright 2017-2019 \xA9 bitmart.com, All Rights Reserved"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style/css */ "antd/lib/divider/style/css");
/* harmony import */ var antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/logo2.png */ "./assets/img/logo2.png");
/* harmony import */ var _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CheckLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckLogin */ "./components/layout/CheckLogin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Bar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__Bar",
  componentId: "sc-1dlmmob-0"
})(["background:transparent;position:fixed;top:0;color:#fff;height:50px;padding-top:8px;padding-left:10px;width:100%;transition:ease 0.5s;z-index:100;&.isDark{background:#0e1118;}&.light{background:transparent;color:#000;}"]);
var Navi = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "Header__Navi",
  componentId: "sc-1dlmmob-1"
})(["margin:0 15px;display:inline-block;cursor:pointer;&:hover{opacity:0.7;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1dlmmob-2"
})(["display:inline-block;height:35px;vertical-align:middle;cursor:pointer;"]);
var LoginBoxUl = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "Header__LoginBoxUl",
  componentId: "sc-1dlmmob-3"
})(["position:absolute;top:12px;right:20px;li{&:hover{opacity:0.7;}}"]);
var naviList = ['Partners', 'User', 'About'];

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('testUserName');
      this.props.logout();
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.replace('/');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var bgClass = classname__WEBPACK_IMPORTED_MODULE_10___default()({
        'isDark': this.props.isDark,
        'light': this.props.light
      });
      var ls = {
        display: 'inline-block',
        cursor: 'pointer'
      };
      var loginBox;

      if (this.props.user) {
        loginBox = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginBoxUl, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, this.props.user)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "vertical"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          onClick: function onClick() {
            return _this.logout();
          }
        }, "Log Out")));
      } else {
        loginBox = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginBoxUl, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/register"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Register"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "vertical"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/login"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Login"))));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CheckLogin__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bar, {
        className: bgClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
        src: !this.props.light ? _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a : _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_6___default.a
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          display: 'inline-block',
          marginLeft: '30px'
        }
      }, naviList.map(function (ele, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Navi, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/".concat(ele.toLowerCase())
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, ele)));
      })), loginBox));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var mapDispatchToProps = {
  logout: _store__WEBPACK_IMPORTED_MODULE_9__["logout"]
};

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDark: props.isDark,
    light: props.light
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_about_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/about/About */ "./components/about/About.js");
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/css/style.css */ "./common/css/style.css");
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "about__Body",
  componentId: "sc-11yt6ut-0"
})(["background:#ebeef0;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "about__Container",
  componentId: "sc-11yt6ut-1"
})(["min-height:97vh;background:#fff;"]);

var AboutPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AboutPage, _React$Component);

  function AboutPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AboutPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AboutPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDark: false,
      light: true
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      var height = window.scrollY;
      var windowHeight = window.innerHeight;

      if (height >= 2 * windowHeight) {
        _this.setState({
          light: false
        });
      } else {
        _this.setState({
          light: true
        });
      }
    });

    return _this;
  }

  _createClass(AboutPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isDark = _this$state.isDark,
          light = _this$state.light;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isDark: isDark,
        light: light,
        className: _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__["sovleNextBug"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        className: "banner-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_About__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
    }
  }]);

  return AboutPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, serverRenderClock, startClock, incrementCount, decrementCount, resetCount, getPartners, getCoinPrice, getUsers, addUser, searchWord, searchUser, deleteUser, login, logout, initializeStore */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchWord", function() { return searchWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUser", function() { return searchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
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
  coins: {},
  users: null,
  searchword: "",
  searchusers: null,
  user: null
};
var actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  GETPARTNERS: 'GETPARTNERS',
  GETCOINPRICE: 'GETCOINPRICE',
  GETUSERS: 'GETUSERS',
  SEARCHWORD: 'SEARCHWORD',
  SEARCHUSER: 'SEARCHUSER',
  ADDUSER: 'ADDUSER',
  DELETEUSER: 'DELETEUSER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT' // REDUCERS

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

    case actionTypes.GETUSERS:
      return Object.assign({}, state, {
        users: action.payload
      });

    case actionTypes.ADDUSER:
      return Object.assign({}, state, {
        users: state.users.concat(action.payload)
      });

    case actionTypes.SEARCHWORD:
      return Object.assign({}, state, {
        searchword: action.payload
      });

    case actionTypes.SEARCHUSER:
      return Object.assign({}, state, {
        searchusers: state.users.filter(function (user) {
          return user.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
        })
      });

    case actionTypes.DELETEUSER:
      return Object.assign({}, state, {
        users: state.users.filter(function (user) {
          return user.name != action.payload;
        })
      });

    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        user: action.payload
      });

    case actionTypes.LOGOUT:
      return Object.assign({}, state, {
        user: null
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
var getUsers = function getUsers(data) {
  return {
    type: actionTypes.GETUSERS,
    payload: data
  };
};
var addUser = function addUser(data) {
  return {
    type: actionTypes.ADDUSER,
    payload: data
  };
};
var searchWord = function searchWord(data) {
  return {
    type: actionTypes.SEARCHWORD,
    payload: data
  };
};
var searchUser = function searchUser(data) {
  return {
    type: actionTypes.SEARCHUSER,
    payload: data
  };
};
var deleteUser = function deleteUser(data) {
  return {
    type: actionTypes.DELETEUSER,
    payload: data
  };
};
var login = function login(data) {
  return {
    type: actionTypes.LOGIN,
    payload: data
  };
};
var logout = function logout(data) {
  return {
    type: actionTypes.LOGOUT
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/divider/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/divider/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style/css");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style/css":
/*!*******************************************!*\
  !*** external "antd/lib/input/style/css" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),

/***/ "classname":
/*!****************************!*\
  !*** external "classname" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classname");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=about.js.map