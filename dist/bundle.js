/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animation.ts":
/*!**************************!*\
  !*** ./src/animation.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/timer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * グラフ描画アニメーション用\r\n */\r\nvar Animation = /** @class */ (function (_super) {\r\n    __extends(Animation, _super);\r\n    function Animation(f, delay) {\r\n        return _super.call(this, f, delay) || this;\r\n    }\r\n    Animation.prototype.next_state = function () {\r\n        if (this._enabled == false) {\r\n            // 状態を一つ進める\r\n            this._func(1);\r\n        }\r\n    };\r\n    Animation.prototype.prev_state = function () {\r\n        if (this._enabled == false) {\r\n            // 状態を一つ戻す\r\n            this._func(-1);\r\n        }\r\n    };\r\n    return Animation;\r\n}(_timer__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animation);\r\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/animation.ts?");

/***/ }),

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Button = /** @class */ (function () {\r\n    function Button(animation) {\r\n        this._start = document.querySelector(\"#start\");\r\n        this._start.onclick = function () { return animation.start(); };\r\n        this._stop = document.querySelector(\"#stop\");\r\n        this._stop.onclick = function () { return animation.stop(); };\r\n        this._next = document.querySelector(\"#next\");\r\n        this._next.onclick = function () { return animation.next_state(); };\r\n        this._prev = document.querySelector(\"#prev\");\r\n        this._prev.onclick = function () { return animation.prev_state(); };\r\n    }\r\n    return Button;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\r\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/button.ts?");

/***/ }),

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Calculator = /** @class */ (function () {\r\n    function Calculator() {\r\n    }\r\n    Calculator.hyperbolic = function () {\r\n        // 計算結果を格納\r\n        var result = {};\r\n        // 刻みの大きさ\r\n        var n = 200;\r\n        var u = [n + 1];\r\n        var v = [n + 1];\r\n        var w = [n + 1];\r\n        // 微小時間\r\n        var k = 0.001;\r\n        var h;\r\n        var r;\r\n        var s, q;\r\n        var i, j;\r\n        // 定数\r\n        h = 1.0 / n;\r\n        r = k / h;\r\n        q = r * r;\r\n        s = 2.0 * (1.0 - q);\r\n        var peak = 0.9;\r\n        var ia = peak * n;\r\n        for (i = 0; i <= ia; i++) {\r\n            u[i] = i / ia * 0.5;\r\n        }\r\n        for (i = ia; i <= n; i++) {\r\n            u[i] = 0.5 - ((i - ia) / (n - ia)) * 0.5;\r\n        }\r\n        for (i = 0; i <= n; i++) {\r\n            v[i] = u[i];\r\n        }\r\n        for (i = 0; i <= n; i++) {\r\n            w[i] = 0;\r\n        }\r\n        for (j = 0; j <= 20000; j++) {\r\n            if ((j % 10) == 0) {\r\n                var tmp = (j * k).toFixed(1);\r\n                result[tmp] = [];\r\n                for (i = 0; i <= n; i += 2) {\r\n                    result[tmp].push([i, parseFloat(u[i].toFixed(4))]);\r\n                }\r\n            }\r\n            for (i = 1; i < n; i++) {\r\n                w[i] = q * (u[i + 1] + u[i - 1]) + s * u[i] - v[i];\r\n            }\r\n            for (i = 0; i <= n; i++) {\r\n                v[i] = u[i];\r\n                u[i] = w[i];\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    return Calculator;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);\r\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/calculator.ts?");

/***/ }),

/***/ "./src/draw.ts":
/*!*********************!*\
  !*** ./src/draw.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.ts\");\n\r\nvar DrawingData = /** @class */ (function () {\r\n    function DrawingData() {\r\n        this.current = 0;\r\n        this._chartElement = document.querySelector('#chart');\r\n        this.drawData = [];\r\n        this.options = {\r\n            title: \"hyperbolic partial differential equation\",\r\n            width: 828,\r\n            height: 414,\r\n            animation: { duration: 100 },\r\n            hAxis: { title: 'x' },\r\n            vAxis: {\r\n                title: 'U',\r\n                minValue: -0.6,\r\n                maxValue: 0.6,\r\n                ticks: [-0.5, -0.4, -0.3, -0.2, -0.1, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5]\r\n            },\r\n        };\r\n        this.setDrawData();\r\n    }\r\n    DrawingData.prototype.setDrawData = function () {\r\n        var _this = this;\r\n        var calcResult = _calculator__WEBPACK_IMPORTED_MODULE_0__.default.hyperbolic();\r\n        var count = 0;\r\n        for (var i in calcResult) {\r\n            this.drawData[count] = new google.visualization.DataTable();\r\n            this.drawData[count].addColumn('number', 'X');\r\n            this.drawData[count].addColumn('number', 'U');\r\n            this.drawData[count].addRows(calcResult[i]);\r\n            count++;\r\n        }\r\n        var chart = new google.visualization.LineChart(this._chartElement);\r\n        this.drawChart = function () {\r\n            chart.draw(_this.drawData[_this.current], _this.options);\r\n        };\r\n    };\r\n    return DrawingData;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawingData);\r\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/draw.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./src/draw.ts\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ \"./src/animation.ts\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/button.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\nwindow.addEventListener(\"load\", function () {\r\n    var animation;\r\n    var draw;\r\n    init();\r\n    function init() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var f;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: \r\n                    // 描画用のデータの読み込み完了まで待機\r\n                    return [4 /*yield*/, google.charts.load('current', { packages: ['corechart', 'line'] })];\r\n                    case 1:\r\n                        // 描画用のデータの読み込み完了まで待機\r\n                        _a.sent();\r\n                        // アニメーションに必要なデータをインスタンス変数に格納する\r\n                        draw = new _draw__WEBPACK_IMPORTED_MODULE_0__.default();\r\n                        // 描画する\r\n                        draw.drawChart();\r\n                        f = function (transition) {\r\n                            if (transition === void 0) { transition = 1; }\r\n                            // 計算結果の範囲を超えないように調整\r\n                            if (transition === -1 && draw.current === 0) {\r\n                                draw.current = 199;\r\n                            }\r\n                            else if (transition === 1 && draw.current === 199) {\r\n                                draw.current = 0;\r\n                            }\r\n                            draw.current += transition;\r\n                            draw.drawChart();\r\n                        };\r\n                        animation = new _animation__WEBPACK_IMPORTED_MODULE_1__.default(f, 100);\r\n                        // ボタンクリック時の関数を設定\r\n                        new _button__WEBPACK_IMPORTED_MODULE_2__.default(animation);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/main.ts?");

/***/ }),

/***/ "./src/timer.ts":
/*!**********************!*\
  !*** ./src/timer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n *  インターバルタイマー\r\n */\r\nvar Timer = /** @class */ (function () {\r\n    function Timer(func, delay) {\r\n        this._delay = delay;\r\n        this._enabled = false;\r\n        this._func = func;\r\n        this._intervalId = null;\r\n    }\r\n    Timer.prototype.start = function () {\r\n        if ((this._func != null) && (this._enabled == false)) {\r\n            this._intervalId = window.setInterval(this._func, this._delay);\r\n            this._enabled = true;\r\n        }\r\n    };\r\n    Timer.prototype.stop = function () {\r\n        if (this._enabled == true) {\r\n            clearInterval(this._intervalId);\r\n            this._enabled = false;\r\n        }\r\n    };\r\n    return Timer;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\r\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/timer.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;