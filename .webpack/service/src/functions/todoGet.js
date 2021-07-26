/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/todoGet.ts":
/*!**********************************!*\
  !*** ./src/functions/todoGet.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\r\nconst handle = async (event) => {\r\n    const { userid } = event.pathParameters;\r\n    const response = await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.scan({\r\n        TableName: \"todostest\",\r\n        FilterExpression: \"userid = :userid\",\r\n        ExpressionAttributeValues: {\r\n            \":userid\": userid\r\n        }\r\n    }).promise();\r\n    const userCertificate = response.Items[0];\r\n    if (userCertificate) {\r\n        return {\r\n            statusCode: 200,\r\n            body: JSON.stringify(response),\r\n        };\r\n    }\r\n    ;\r\n    return {\r\n        statusCode: 400,\r\n        body: JSON.stringify({\r\n            message: \"Todo is invalid!\",\r\n        }),\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3RvZG9HZXQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNhZmlvLy4vc3JjL2Z1bmN0aW9ucy90b2RvR2V0LnRzP2UzOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XHJcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2R5bmFtb2RiQ2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZG9jdW1lbnQuc2Nhbih7XHJcbiAgICAgICAgVGFibGVOYW1lOiBcInRvZG9zdGVzdFwiLFxyXG4gICAgICAgIEZpbHRlckV4cHJlc3Npb246IFwidXNlcmlkID0gOnVzZXJpZFwiLFxyXG4gICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXMgOiB7XHJcbiAgICAgICAgICAgIFwiOnVzZXJpZFwiIDogdXNlcmlkXHJcbiAgICAgICAgfVxyXG4gICAgfSkucHJvbWlzZSgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJDZXJ0aWZpY2F0ZSA9IHJlc3BvbnNlLkl0ZW1zWzBdO1xyXG5cclxuICAgIGlmICh1c2VyQ2VydGlmaWNhdGUpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZTogNDAwLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUb2RvIGlzIGludmFsaWQhXCIsXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/todoGet.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst options = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline()\r\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\r\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNhZmlvLy4vc3JjL3V0aWxzL2R5bmFtb2RiQ2xpZW50LnRzPzQ1MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEeW5hbW9EQn0gZnJvbSBcImF3cy1zZGtcIjtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZWdpb246IFwibG9jYWxob3N0XCIsXHJcbiAgICBlbmRwb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIlxyXG59XHJcblxyXG5jb25zdCBpc09mZmxpbmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuSVNfT0ZGTElORTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpIFxyXG4gICAgPyBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQob3B0aW9ucykgXHJcbiAgICA6IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/todoGet.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;