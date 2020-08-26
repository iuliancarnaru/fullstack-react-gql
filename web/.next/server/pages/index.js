module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/CTA.js":
/*!*******************************!*\
  !*** ./src/components/CTA.js ***!
  \*******************************/
/*! exports provided: CTA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CTA\", function() { return CTA; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ \"./src/components/Container.js\");\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/components/CTA.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CTA = () => __jsx(_Container__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n  flexDirection: \"row\",\n  position: \"fixed\",\n  bottom: \"0\",\n  width: \"100%\",\n  maxWidth: \"48rem\",\n  py: 2,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n  isExternal: true,\n  href: \"https://chakra-ui.com\",\n  flexGrow: 1,\n  mx: 2,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n  width: \"100%\",\n  variant: \"outline\",\n  variantColor: \"green\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 7\n  }\n}, \"chakra-ui\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n  isExternal: true,\n  href: \"https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui\",\n  flexGrow: 3,\n  mx: 2,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n  width: \"100%\",\n  variant: \"solid\",\n  variantColor: \"green\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }\n}, \"View Repo\")));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DVEEuanM/YjdiNyJdLCJuYW1lcyI6WyJDVEEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRU8sTUFBTUEsR0FBRyxHQUFHLE1BQ2pCLE1BQUMsb0RBQUQ7QUFDRSxlQUFhLEVBQUMsS0FEaEI7QUFFRSxVQUFRLEVBQUMsT0FGWDtBQUdFLFFBQU0sRUFBQyxHQUhUO0FBSUUsT0FBSyxFQUFDLE1BSlI7QUFLRSxVQUFRLEVBQUMsT0FMWDtBQU1FLElBQUUsRUFBRSxDQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FRRSxNQUFDLG9EQUFEO0FBQVksWUFBVSxNQUF0QjtBQUF1QixNQUFJLEVBQUMsdUJBQTVCO0FBQW9ELFVBQVEsRUFBRSxDQUE5RDtBQUFpRSxJQUFFLEVBQUUsQ0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsc0RBQUQ7QUFBUSxPQUFLLEVBQUMsTUFBZDtBQUFxQixTQUFPLEVBQUMsU0FBN0I7QUFBdUMsY0FBWSxFQUFDLE9BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVJGLEVBY0UsTUFBQyxvREFBRDtBQUNFLFlBQVUsTUFEWjtBQUVFLE1BQUksRUFBQyx1RUFGUDtBQUdFLFVBQVEsRUFBRSxDQUhaO0FBSUUsSUFBRSxFQUFFLENBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQU1FLE1BQUMsc0RBQUQ7QUFBUSxPQUFLLEVBQUMsTUFBZDtBQUFxQixTQUFPLEVBQUMsT0FBN0I7QUFBcUMsY0FBWSxFQUFDLE9BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixDQWRGLENBREsiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DVEEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIGFzIENoYWtyYUxpbmssIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9Db250YWluZXInXG5cbmV4cG9ydCBjb25zdCBDVEEgPSAoKSA9PiAoXG4gIDxDb250YWluZXJcbiAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICBib3R0b209XCIwXCJcbiAgICB3aWR0aD1cIjEwMCVcIlxuICAgIG1heFdpZHRoPVwiNDhyZW1cIlxuICAgIHB5PXsyfVxuICA+XG4gICAgPENoYWtyYUxpbmsgaXNFeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9jaGFrcmEtdWkuY29tXCIgZmxleEdyb3c9ezF9IG14PXsyfT5cbiAgICAgIDxCdXR0b24gd2lkdGg9XCIxMDAlXCIgdmFyaWFudD1cIm91dGxpbmVcIiB2YXJpYW50Q29sb3I9XCJncmVlblwiPlxuICAgICAgICBjaGFrcmEtdWlcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2hha3JhTGluaz5cblxuICAgIDxDaGFrcmFMaW5rXG4gICAgICBpc0V4dGVybmFsXG4gICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Jsb2IvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtY2hha3JhLXVpXCJcbiAgICAgIGZsZXhHcm93PXszfVxuICAgICAgbXg9ezJ9XG4gICAgPlxuICAgICAgPEJ1dHRvbiB3aWR0aD1cIjEwMCVcIiB2YXJpYW50PVwic29saWRcIiB2YXJpYW50Q29sb3I9XCJncmVlblwiPlxuICAgICAgICBWaWV3IFJlcG9cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2hha3JhTGluaz5cbiAgPC9Db250YWluZXI+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CTA.js\n");

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/components/Container.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nconst Container = props => {\n  const {\n    colorMode\n  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"])();\n  const bgColor = {\n    light: 'gray.50',\n    dark: 'gray.900'\n  };\n  const color = {\n    light: 'black',\n    dark: 'white'\n  };\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], _extends({\n    direction: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"flex-start\",\n    bg: bgColor[colorMode],\n    color: color[colorMode]\n  }, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIuanM/NTU0MCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJwcm9wcyIsImNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZSIsImJnQ29sb3IiLCJsaWdodCIsImRhcmsiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLG9FQUFZLEVBQWxDO0FBRUEsUUFBTUMsT0FBTyxHQUFHO0FBQUVDLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FBaEI7QUFFQSxRQUFNQyxLQUFLLEdBQUc7QUFBRUYsU0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFFBQUksRUFBRTtBQUF4QixHQUFkO0FBQ0EsU0FDRSxNQUFDLG9EQUFEO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxjQUFVLEVBQUMsUUFGYjtBQUdFLGtCQUFjLEVBQUMsWUFIakI7QUFJRSxNQUFFLEVBQUVGLE9BQU8sQ0FBQ0YsU0FBRCxDQUpiO0FBS0UsU0FBSyxFQUFFSyxLQUFLLENBQUNMLFNBQUQ7QUFMZCxLQU1NRCxLQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQVVELENBaEJNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgdXNlQ29sb3JNb2RlIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuXG4gIGNvbnN0IGJnQ29sb3IgPSB7IGxpZ2h0OiAnZ3JheS41MCcsIGRhcms6ICdncmF5LjkwMCcgfVxuXG4gIGNvbnN0IGNvbG9yID0geyBsaWdodDogJ2JsYWNrJywgZGFyazogJ3doaXRlJyB9XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Container.js\n");

/***/ }),

/***/ "./src/components/DarkModeSwitch.js":
/*!******************************************!*\
  !*** ./src/components/DarkModeSwitch.js ***!
  \******************************************/
/*! exports provided: DarkModeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkModeSwitch\", function() { return DarkModeSwitch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/components/DarkModeSwitch.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst DarkModeSwitch = () => {\n  const {\n    colorMode,\n    toggleColorMode\n  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"])();\n  const isDark = colorMode === 'dark';\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    position: \"fixed\",\n    top: \"1rem\",\n    right: \"1rem\",\n    color: \"green\",\n    isChecked: isDark,\n    onChange: toggleColorMode,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaC5qcz8xMzNhIl0sIm5hbWVzIjpbIkRhcmtNb2RlU3dpdGNoIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlIiwiaXNEYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBQ2xDLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQWlDQyxvRUFBWSxFQUFuRDtBQUNBLFFBQU1DLE1BQU0sR0FBR0gsU0FBUyxLQUFLLE1BQTdCO0FBQ0EsU0FDRSxNQUFDLHNEQUFEO0FBQ0UsWUFBUSxFQUFDLE9BRFg7QUFFRSxPQUFHLEVBQUMsTUFGTjtBQUdFLFNBQUssRUFBQyxNQUhSO0FBSUUsU0FBSyxFQUFDLE9BSlI7QUFLRSxhQUFTLEVBQUVHLE1BTGI7QUFNRSxZQUFRLEVBQUVGLGVBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBVUQsQ0FiTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29sb3JNb2RlLCBTd2l0Y2ggfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBEYXJrTW9kZVN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgY29uc3QgaXNEYXJrID0gY29sb3JNb2RlID09PSAnZGFyaydcbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoXG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIHRvcD1cIjFyZW1cIlxuICAgICAgcmlnaHQ9XCIxcmVtXCJcbiAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgaXNDaGVja2VkPXtpc0Rhcmt9XG4gICAgICBvbkNoYW5nZT17dG9nZ2xlQ29sb3JNb2RlfVxuICAgIC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DarkModeSwitch.js\n");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/components/Footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nconst Footer = props => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], _extends({\n  as: \"footer\",\n  py: \"8rem\"\n}, props, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 34\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanM/MjcwYiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVyxNQUFDLG9EQUFEO0FBQU0sSUFBRSxFQUFDLFFBQVQ7QUFBa0IsSUFBRSxFQUFDO0FBQXJCLEdBQWdDQSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4gPEZsZXggYXM9XCJmb290ZXJcIiBweT1cIjhyZW1cIiB7Li4ucHJvcHN9IC8+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Footer.js\n");

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/components/Hero.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Hero = ({\n  title\n}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n  justifyContent: \"center\",\n  alignItems: \"center\",\n  height: \"100vh\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n  fontSize: \"10vw\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, title));\nHero.defaultProps = {\n  title: 'with-chakra-ui'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvLmpzP2Q2ODciXSwibmFtZXMiOlsiSGVybyIsInRpdGxlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNsQixNQUFDLG9EQUFEO0FBQU0sZ0JBQWMsRUFBQyxRQUFyQjtBQUE4QixZQUFVLEVBQUMsUUFBekM7QUFBa0QsUUFBTSxFQUFDLE9BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLHVEQUFEO0FBQVMsVUFBUSxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMEJBLEtBQTFCLENBREYsQ0FESztBQU1QRCxJQUFJLENBQUNFLFlBQUwsR0FBb0I7QUFDbEJELE9BQUssRUFBRTtBQURXLENBQXBCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVyby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBIZXJvID0gKHsgdGl0bGUgfSkgPT4gKFxuICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMTB2d1wiPnt0aXRsZX08L0hlYWRpbmc+XG4gIDwvRmxleD5cbilcblxuSGVyby5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnd2l0aC1jaGFrcmEtdWknLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hero.js\n");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/components/Main.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nconst Main = props => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], _extends({\n  spacing: \"1.5rem\",\n  width: \"100%\",\n  maxWidth: \"48rem\",\n  mt: \"-45vh\",\n  pt: \"8rem\",\n  px: \"1rem\"\n}, props, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUNsQixNQUFDLHFEQUFEO0FBQ0UsU0FBTyxFQUFDLFFBRFY7QUFFRSxPQUFLLEVBQUMsTUFGUjtBQUdFLFVBQVEsRUFBQyxPQUhYO0FBSUUsSUFBRSxFQUFDLE9BSkw7QUFLRSxJQUFFLEVBQUMsTUFMTDtBQU1FLElBQUUsRUFBQztBQU5MLEdBT01BLEtBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURLIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuXG5leHBvcnQgY29uc3QgTWFpbiA9IChwcm9wcykgPT4gKFxuICA8U3RhY2tcbiAgICBzcGFjaW5nPVwiMS41cmVtXCJcbiAgICB3aWR0aD1cIjEwMCVcIlxuICAgIG1heFdpZHRoPVwiNDhyZW1cIlxuICAgIG10PVwiLTQ1dmhcIlxuICAgIHB0PVwiOHJlbVwiXG4gICAgcHg9XCIxcmVtXCJcbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ \"./src/components/Hero.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main */ \"./src/components/Main.js\");\n/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DarkModeSwitch */ \"./src/components/DarkModeSwitch.js\");\n/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CTA */ \"./src/components/CTA.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Index = () => __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 3\n  }\n}, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__[\"Hero\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }\n}), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_4__[\"Main\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }\n}, \"Example repository of \", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Code\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 31\n  }\n}, \"Next.js\"), \" + \", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Code\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 54\n  }\n}, \"chakra-ui\"), \".\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n  spacing: 3,\n  my: 0,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListIcon\"], {\n  icon: \"check-circle\",\n  color: \"green.500\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 11\n  }\n}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n  isExternal: true,\n  href: \"https://chakra-ui.com\",\n  flexGrow: 1,\n  mr: 2,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 11\n  }\n}, \"Chakra UI \", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n  name: \"external-link\",\n  mx: \"2px\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 23\n  }\n}))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListIcon\"], {\n  icon: \"check-circle\",\n  color: \"green.500\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 11\n  }\n}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n  isExternal: true,\n  href: \"https://nextjs.org\",\n  flexGrow: 1,\n  mr: 2,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 11\n  }\n}, \"Next.js \", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n  name: \"external-link\",\n  mx: \"2px\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 21\n  }\n}))))), __jsx(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_5__[\"DarkModeSwitch\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }\n}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"Footer\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }\n}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 7\n  }\n}, \"Next \\u2764\\uFE0F Chakra\")), __jsx(_components_CTA__WEBPACK_IMPORTED_MODULE_6__[\"CTA\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFDWixNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDd0IsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHhCLFNBQytDLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQvQyxNQURGLEVBS0UsTUFBQyxvREFBRDtBQUFNLFNBQU8sRUFBRSxDQUFmO0FBQWtCLElBQUUsRUFBRSxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyx3REFBRDtBQUFVLE1BQUksRUFBQyxjQUFmO0FBQThCLE9BQUssRUFBQyxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLG9EQUFEO0FBQ0UsWUFBVSxNQURaO0FBRUUsTUFBSSxFQUFDLHVCQUZQO0FBR0UsVUFBUSxFQUFFLENBSFo7QUFJRSxJQUFFLEVBQUUsQ0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU1ZLE1BQUMsb0RBQUQ7QUFBTSxNQUFJLEVBQUMsZUFBWDtBQUEyQixJQUFFLEVBQUMsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU5aLENBRkYsQ0FERixFQVlFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsd0RBQUQ7QUFBVSxNQUFJLEVBQUMsY0FBZjtBQUE4QixPQUFLLEVBQUMsV0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUUsTUFBQyxvREFBRDtBQUFZLFlBQVUsTUFBdEI7QUFBdUIsTUFBSSxFQUFDLG9CQUE1QjtBQUFpRCxVQUFRLEVBQUUsQ0FBM0Q7QUFBOEQsSUFBRSxFQUFFLENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDVSxNQUFDLG9EQUFEO0FBQU0sTUFBSSxFQUFDLGVBQVg7QUFBMkIsSUFBRSxFQUFDLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFEVixDQUZGLENBWkYsQ0FMRixDQUZGLEVBNEJFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQTVCRixFQTZCRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsQ0E3QkYsRUFnQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaENGLENBREY7O0FBcUNlQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpbmsgYXMgQ2hha3JhTGluayxcbiAgVGV4dCxcbiAgQ29kZSxcbiAgSWNvbixcbiAgTGlzdCxcbiAgTGlzdEljb24sXG4gIExpc3RJdGVtLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5cbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lcidcbmltcG9ydCB7IE1haW4gfSBmcm9tICcuLi9jb21wb25lbnRzL01haW4nXG5pbXBvcnQgeyBEYXJrTW9kZVN3aXRjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2gnXG5pbXBvcnQgeyBDVEEgfSBmcm9tICcuLi9jb21wb25lbnRzL0NUQSdcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8SGVybyAvPlxuICAgIDxNYWluPlxuICAgICAgPFRleHQ+XG4gICAgICAgIEV4YW1wbGUgcmVwb3NpdG9yeSBvZiA8Q29kZT5OZXh0LmpzPC9Db2RlPiArIDxDb2RlPmNoYWtyYS11aTwvQ29kZT4uXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxMaXN0IHNwYWNpbmc9ezN9IG15PXswfT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SWNvbiBpY29uPVwiY2hlY2stY2lyY2xlXCIgY29sb3I9XCJncmVlbi41MDBcIiAvPlxuICAgICAgICAgIDxDaGFrcmFMaW5rXG4gICAgICAgICAgICBpc0V4dGVybmFsXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jaGFrcmEtdWkuY29tXCJcbiAgICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgICAgbXI9ezJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2hha3JhIFVJIDxJY29uIG5hbWU9XCJleHRlcm5hbC1saW5rXCIgbXg9XCIycHhcIiAvPlxuICAgICAgICAgIDwvQ2hha3JhTGluaz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SWNvbiBpY29uPVwiY2hlY2stY2lyY2xlXCIgY29sb3I9XCJncmVlbi41MDBcIiAvPlxuICAgICAgICAgIDxDaGFrcmFMaW5rIGlzRXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiIGZsZXhHcm93PXsxfSBtcj17Mn0+XG4gICAgICAgICAgICBOZXh0LmpzIDxJY29uIG5hbWU9XCJleHRlcm5hbC1saW5rXCIgbXg9XCIycHhcIiAvPlxuICAgICAgICAgIDwvQ2hha3JhTGluaz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDwvTGlzdD5cbiAgICA8L01haW4+XG5cbiAgICA8RGFya01vZGVTd2l0Y2ggLz5cbiAgICA8Rm9vdGVyPlxuICAgICAgPFRleHQ+TmV4dCDinaTvuI8gQ2hha3JhPC9UZXh0PlxuICAgIDwvRm9vdGVyPlxuICAgIDxDVEEgLz5cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });