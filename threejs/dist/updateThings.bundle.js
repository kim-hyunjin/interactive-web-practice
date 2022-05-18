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

/***/ "./src/updateThings.js":
/*!*****************************!*\
  !*** ./src/updateThings.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/**\n * https://threejs.org/docs/index.html#manual/en/introduction/How-to-update-things\n */\n\n\n\nconst MAX_POINTS = 500;\n\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);\ncamera.position.set(0, 0, 100);\ncamera.lookAt(0, 0, 0);\n\n// geometry\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n\n// attributes\nconst positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point\ngeometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));\n\n// draw range\nconst drawCount = 2; // draw the first 2 points, only\ngeometry.setDrawRange(0, drawCount);\n\n// material\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({ color: 0xff0000 });\n\n// line\nconst line = new three__WEBPACK_IMPORTED_MODULE_0__.Line(geometry, material);\nscene.add(line);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n\n  const positions = line.geometry.attributes.position.array;\n\n  let x, y, z, index;\n  x = y = z = index = 0;\n\n  for (let i = 0, l = MAX_POINTS; i < l; i++) {\n    positions[index++] = x;\n    positions[index++] = y;\n    positions[index++] = z;\n\n    x += (Math.random() - 0.5) * 30;\n    y += (Math.random() - 0.5) * 30;\n    z += (Math.random() - 0.5) * 30;\n  }\n\n  renderer.render(scene, camera);\n  line.geometry.attributes.position.needsUpdate = true; // required after the first render\n}\n\nanimate();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXBkYXRlVGhpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS13ZWItdGhyZWVqcy8uL3NyYy91cGRhdGVUaGluZ3MuanM/OTI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9pbmRleC5odG1sI21hbnVhbC9lbi9pbnRyb2R1Y3Rpb24vSG93LXRvLXVwZGF0ZS10aGluZ3NcbiAqL1xuXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgTUFYX1BPSU5UUyA9IDUwMDtcblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCA1MDApO1xuY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCAxMDApO1xuY2FtZXJhLmxvb2tBdCgwLCAwLCAwKTtcblxuLy8gZ2VvbWV0cnlcbmNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cbi8vIGF0dHJpYnV0ZXNcbmNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoTUFYX1BPSU5UUyAqIDMpOyAvLyAzIHZlcnRpY2VzIHBlciBwb2ludFxuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcblxuLy8gZHJhdyByYW5nZVxuY29uc3QgZHJhd0NvdW50ID0gMjsgLy8gZHJhdyB0aGUgZmlyc3QgMiBwb2ludHMsIG9ubHlcbmdlb21ldHJ5LnNldERyYXdSYW5nZSgwLCBkcmF3Q291bnQpO1xuXG4vLyBtYXRlcmlhbFxuY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwMDAgfSk7XG5cbi8vIGxpbmVcbmNvbnN0IGxpbmUgPSBuZXcgVEhSRUUuTGluZShnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuc2NlbmUuYWRkKGxpbmUpO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgY29uc3QgcG9zaXRpb25zID0gbGluZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xuXG4gIGxldCB4LCB5LCB6LCBpbmRleDtcbiAgeCA9IHkgPSB6ID0gaW5kZXggPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gTUFYX1BPSU5UUzsgaSA8IGw7IGkrKykge1xuICAgIHBvc2l0aW9uc1tpbmRleCsrXSA9IHg7XG4gICAgcG9zaXRpb25zW2luZGV4KytdID0geTtcbiAgICBwb3NpdGlvbnNbaW5kZXgrK10gPSB6O1xuXG4gICAgeCArPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAzMDtcbiAgICB5ICs9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDMwO1xuICAgIHogKz0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMzA7XG4gIH1cblxuICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gIGxpbmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7IC8vIHJlcXVpcmVkIGFmdGVyIHRoZSBmaXJzdCByZW5kZXJcbn1cblxuYW5pbWF0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/updateThings.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/updateThings.js");
/******/ 	
/******/ })()
;