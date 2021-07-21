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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/timer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n/**\n * グラフ描画アニメーション用\n */\nvar Animation = /** @class */ (function (_super) {\n    __extends(Animation, _super);\n    function Animation(f, delay) {\n        return _super.call(this, f, delay) || this;\n    }\n    Animation.prototype.next = function () {\n        // 状態を一つ進める\n        this._func(1);\n    };\n    Animation.prototype.prev = function () {\n        // 状態を一つ戻す\n        this._func(-1);\n    };\n    return Animation;\n}(_timer__WEBPACK_IMPORTED_MODULE_0__.default));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animation);\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/animation.ts?");

/***/ }),

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Button = /** @class */ (function () {\n    function Button(motion) {\n        var _this = this;\n        this._start = document.querySelector(\"#start\");\n        this._stop = document.querySelector(\"#stop\");\n        this._next = document.querySelector(\"#next\");\n        this._prev = document.querySelector(\"#prev\");\n        this._start.onclick = function () {\n            motion.start();\n            _this._start.disabled = true;\n            _this._next.disabled = true;\n            _this._prev.disabled = true;\n            _this._stop.disabled = false;\n        };\n        this._stop.onclick = function () {\n            motion.stop();\n            _this._stop.disabled = true;\n            _this._start.disabled = false;\n            _this._next.disabled = false;\n            _this._prev.disabled = false;\n        };\n        this._next.onclick = function () { return motion.next(); };\n        this._prev.onclick = function () { return motion.prev(); };\n    }\n    return Button;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/button.ts?");

/***/ }),

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Calculator = /** @class */ (function () {\n    function Calculator() {\n    }\n    // 弦の初期位置 0.0 ~ 1.0\n    Calculator.hyperbolic = function (peak) {\n        // 計算結果を格納\n        var result = {};\n        // 刻みの大きさ\n        var n = 200;\n        var u = [n + 1];\n        var v = [n + 1];\n        var w = [n + 1];\n        // 微小時間\n        var k = 0.001;\n        // 定数を先に計算しておく\n        var h = 1.0 / n;\n        var r = k / h;\n        var q = r * r;\n        var s = 2.0 * (1.0 - q);\n        var ia = peak * n;\n        for (var i = 0; i <= ia; i++) {\n            u[i] = i / ia * 0.5;\n        }\n        for (var i = ia; i <= n; i++) {\n            u[i] = 0.5 - ((i - ia) / (n - ia)) * 0.5;\n        }\n        for (var i = 0; i <= n; i++) {\n            v[i] = u[i];\n        }\n        for (var i = 0; i <= n; i++) {\n            w[i] = 0;\n        }\n        for (var j = 0; j <= 20000; j++) {\n            if ((j % 10) == 0) {\n                var tmp = (j * k).toFixed(1);\n                result[tmp] = [];\n                for (var i = 0; i <= n; i += 2) {\n                    result[tmp].push([i, parseFloat(u[i].toFixed(4))]);\n                }\n            }\n            for (var i = 1; i < n; i++) {\n                w[i] = q * (u[i + 1] + u[i - 1]) + s * u[i] - v[i];\n            }\n            for (var i = 0; i <= n; i++) {\n                v[i] = u[i];\n                u[i] = w[i];\n            }\n        }\n        return result;\n    };\n    return Calculator;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/calculator.ts?");

/***/ }),

/***/ "./src/draw.ts":
/*!*********************!*\
  !*** ./src/draw.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.ts\");\n\nvar DrawingData = /** @class */ (function () {\n    function DrawingData(peak) {\n        this.current = 0;\n        this._chartElement = document.querySelector('#chart');\n        this.drawData = [];\n        this.options = {\n            title: \"hyperbolic partial differential equation\",\n            width: 828,\n            height: 414,\n            animation: { duration: 100 },\n            hAxis: { title: 'x' },\n            vAxis: {\n                title: 'U',\n                minValue: -0.6,\n                maxValue: 0.6,\n                ticks: [-0.5, -0.4, -0.3, -0.2, -0.1, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5]\n            },\n        };\n        this.setDrawData(peak);\n    }\n    DrawingData.prototype.setDrawData = function (peak) {\n        var _this = this;\n        var calcResult = _calculator__WEBPACK_IMPORTED_MODULE_0__.default.hyperbolic(peak);\n        var count = 0;\n        for (var i in calcResult) {\n            this.drawData[count] = new google.visualization.DataTable();\n            this.drawData[count].addColumn('number', 'X');\n            this.drawData[count].addColumn('number', 'U');\n            this.drawData[count].addRows(calcResult[i]);\n            count++;\n        }\n        var chart = new google.visualization.LineChart(this._chartElement);\n        this.drawChart = function () {\n            chart.draw(_this.drawData[_this.current], _this.options);\n        };\n    };\n    return DrawingData;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawingData);\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/draw.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./src/draw.ts\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ \"./src/animation.ts\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/button.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\nwindow.addEventListener(\"load\", function () {\n    var animation;\n    var draw;\n    init();\n    var peak = document.querySelector(\"#peak\");\n    peak.onchange = function () {\n        draw.setDrawData(parseFloat(peak.value));\n        draw.current = 0;\n        draw.drawChart();\n    };\n    function init() {\n        return __awaiter(this, void 0, void 0, function () {\n            var f;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: \n                    // 描画用のデータの読み込み完了まで待機\n                    return [4 /*yield*/, google.charts.load('current', { packages: ['corechart', 'line'] })];\n                    case 1:\n                        // 描画用のデータの読み込み完了まで待機\n                        _a.sent();\n                        // アニメーションに必要なデータをインスタンス変数に格納する\n                        draw = new _draw__WEBPACK_IMPORTED_MODULE_0__.default(0.5);\n                        // 描画する\n                        draw.drawChart();\n                        f = function (transition) {\n                            if (transition === void 0) { transition = 1; }\n                            // 計算結果の範囲を超えないように調整\n                            if (transition === -1 && draw.current === 0) {\n                                draw.current = 199;\n                            }\n                            else if (transition === 1 && draw.current === 199) {\n                                draw.current = 0;\n                            }\n                            draw.current += transition;\n                            draw.drawChart();\n                        };\n                        animation = new _animation__WEBPACK_IMPORTED_MODULE_1__.default(f, 100);\n                        // ボタンクリック時の関数を設定\n                        new _button__WEBPACK_IMPORTED_MODULE_2__.default(animation);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    }\n});\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/main.ts?");

/***/ }),

/***/ "./src/timer.ts":
/*!**********************!*\
  !*** ./src/timer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n *  インターバルタイマー\n */\nvar Timer = /** @class */ (function () {\n    function Timer(func, delay) {\n        this._delay = delay;\n        this._hasTimer = false;\n        this._func = func;\n        this._intervalId = null;\n    }\n    Object.defineProperty(Timer.prototype, \"hasTimer\", {\n        get: function () {\n            return this._hasTimer;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Timer.prototype.start = function () {\n        if ((this._func != null) && (this._hasTimer == false)) {\n            this._intervalId = window.setInterval(this._func, this._delay);\n            this._hasTimer = true;\n        }\n    };\n    Timer.prototype.stop = function () {\n        if (this._hasTimer == true) {\n            clearInterval(this._intervalId);\n            this._hasTimer = false;\n        }\n    };\n    return Timer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n\n//# sourceURL=webpack://ts-hyperbolic-differential/./src/timer.ts?");

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