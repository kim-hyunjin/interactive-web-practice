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

/***/ "./src/drawLines.js":
/*!**************************!*\
  !*** ./src/drawLines.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);\ncamera.position.set(0, 0, 100);\ncamera.lookAt(0, 0, 0);\n\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n\n// define a material\n//create a blue LineBasicMaterial\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({ color: 0x0000ff });\n\n// geometry with some vertices\nconst points = [];\npoints.push(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-10, 0, 0));\npoints.push(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 10, 0));\npoints.push(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(10, 0, 0));\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints(points);\n\n// geometry + material\nconst line = new three__WEBPACK_IMPORTED_MODULE_0__.Line(geometry, material);\n\nscene.add(line);\nrenderer.render(scene, camera);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZHJhd0xpbmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS13ZWItdGhyZWVqcy8uL3NyYy9kcmF3TGluZXMuanM/NmFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbmNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDUwMCk7XG5jYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDEwMCk7XG5jYW1lcmEubG9va0F0KDAsIDAsIDApO1xuXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4vLyBkZWZpbmUgYSBtYXRlcmlhbFxuLy9jcmVhdGUgYSBibHVlIExpbmVCYXNpY01hdGVyaWFsXG5jb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KTtcblxuLy8gZ2VvbWV0cnkgd2l0aCBzb21lIHZlcnRpY2VzXG5jb25zdCBwb2ludHMgPSBbXTtcbnBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC0xMCwgMCwgMCkpO1xucG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMTAsIDApKTtcbnBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAwLCAwKSk7XG5jb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpLnNldEZyb21Qb2ludHMocG9pbnRzKTtcblxuLy8gZ2VvbWV0cnkgKyBtYXRlcmlhbFxuY29uc3QgbGluZSA9IG5ldyBUSFJFRS5MaW5lKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbnNjZW5lLmFkZChsaW5lKTtcbnJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/drawLines.js\n");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/drawLines.js");
/******/ 	
/******/ })()
;