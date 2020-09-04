module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/change-password/[token].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/fullstack-react-gql/web/src/components/InputField.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nconst InputFiled = (_ref) => {\n  let {\n    label,\n    size: _\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"label\", \"size\"]);\n\n  const [field, {\n    error\n  }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__[\"useField\"])(props);\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    isInvalid: !!error,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormLabel\"], {\n    htmlFor: field.name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, label), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], _extends({}, field, props, {\n    id: field.name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  })), error ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormErrorMessage\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 16\n    }\n  }, error) : null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputFiled);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbnB1dEZpZWxkLnRzeD9jOTJkIl0sIm5hbWVzIjpbIklucHV0RmlsZWQiLCJsYWJlbCIsInNpemUiLCJfIiwicHJvcHMiLCJmaWVsZCIsImVycm9yIiwidXNlRmllbGQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQWFBLE1BQU1BLFVBQXFDLEdBQUcsVUFJeEM7QUFBQSxNQUp5QztBQUM3Q0MsU0FENkM7QUFFN0NDLFFBQUksRUFBRUM7QUFGdUMsR0FJekM7QUFBQSxNQUREQyxLQUNDOztBQUNKLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRO0FBQUVDO0FBQUYsR0FBUixJQUFxQkMsdURBQVEsQ0FBQ0gsS0FBRCxDQUFuQztBQUVBLFNBQ0UsTUFBQywyREFBRDtBQUFhLGFBQVMsRUFBRSxDQUFDLENBQUNFLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVcsV0FBTyxFQUFFRCxLQUFLLENBQUNHLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNQLEtBQWpDLENBREYsRUFFRSxNQUFDLHFEQUFELGVBQVdJLEtBQVgsRUFBc0JELEtBQXRCO0FBQTZCLE1BQUUsRUFBRUMsS0FBSyxDQUFDRyxJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsRUFHR0YsS0FBSyxHQUFHLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQkEsS0FBbkIsQ0FBSCxHQUFrRCxJQUgxRCxDQURGO0FBT0QsQ0FkRDs7QUFnQmVOLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgRm9ybUVycm9yTWVzc2FnZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuXG50eXBlIElucHV0RmllbGRQcm9wcyA9IElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4gJiB7XG4gIGxhYmVsOiBzdHJpbmc7XG5cbiAgbmFtZTogc3RyaW5nO1xufTtcblxuY29uc3QgSW5wdXRGaWxlZDogUmVhY3QuRkM8SW5wdXRGaWVsZFByb3BzPiA9ICh7XG4gIGxhYmVsLFxuICBzaXplOiBfLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbZmllbGQsIHsgZXJyb3IgfV0gPSB1c2VGaWVsZChwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXshIWVycm9yfT5cbiAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17ZmllbGQubmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxuICAgICAgPElucHV0IHsuLi5maWVsZH0gey4uLnByb3BzfSBpZD17ZmllbGQubmFtZX0gLz5cbiAgICAgIHtlcnJvciA/IDxGb3JtRXJyb3JNZXNzYWdlPntlcnJvcn08L0Zvcm1FcnJvck1lc3NhZ2U+IDogbnVsbH1cbiAgICA8L0Zvcm1Db250cm9sPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWxlZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/InputField.tsx\n");

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/fullstack-react-gql/web/src/components/Wrapper.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Wrapper = ({\n  children,\n  variant = \"regular\"\n}) => {\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    mt: 8,\n    mx: \"auto\",\n    maxW: variant === \"regular\" ? \"800px\" : \"400px\",\n    w: \"100%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XcmFwcGVyLnRzeD9iODdiIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJjaGlsZHJlbiIsInZhcmlhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBTUEsTUFBTUEsT0FBK0IsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsU0FBTyxHQUFHO0FBQXRCLENBQUQsS0FBdUM7QUFDN0UsU0FDRSxNQUFDLG1EQUFEO0FBQ0UsTUFBRSxFQUFFLENBRE47QUFFRSxNQUFFLEVBQUMsTUFGTDtBQUdFLFFBQUksRUFBRUEsT0FBTyxLQUFLLFNBQVosR0FBd0IsT0FBeEIsR0FBa0MsT0FIMUM7QUFJRSxLQUFDLEVBQUMsTUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdELFFBTkgsQ0FERjtBQVVELENBWEQ7O0FBYWVELHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICB2YXJpYW50PzogXCJzbWFsbFwiIHwgXCJyZWd1bGFyXCI7XG59XG5cbmNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPFdyYXBwZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdmFyaWFudCA9IFwicmVndWxhclwiIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBtdD17OH1cbiAgICAgIG14PVwiYXV0b1wiXG4gICAgICBtYXhXPXt2YXJpYW50ID09PSBcInJlZ3VsYXJcIiA/IFwiODAwcHhcIiA6IFwiNDAwcHhcIn1cbiAgICAgIHc9XCIxMDAlXCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Wrapper.tsx\n");

/***/ }),

/***/ "./src/pages/change-password/[token].tsx":
/*!***********************************************!*\
  !*** ./src/pages/change-password/[token].tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/fullstack-react-gql/web/src/pages/change-password/[token].tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst ChangePassword = ({\n  token\n}) => {\n  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"small\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__[\"Formik\"], {\n    initialValues: {\n      newPassword: \"\"\n    },\n    onSubmit: async (values, {\n      setErrors\n    }) => {// const response = await login(values);\n      // if (response.data?.login.errors) {\n      //   setErrors(toErrorMap(response.data.login.errors));\n      // } else if (response.data?.login.user) {\n      //   router.push(\"/\");\n      // }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, ({\n    isSubmitting\n  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"newPassword\",\n    placeholder: \"new password\",\n    label: \"New password\",\n    type: \"password\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    mt: 4,\n    isLoading: isSubmitting,\n    type: \"submit\",\n    variantColor: \"teal\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"Change password\"))));\n};\n\nChangePassword.getInitialProps = ({\n  query\n}) => {\n  return {\n    token: query.token\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangePassword);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL1t0b2tlbl0udHN4P2RlZGYiXSwibmFtZXMiOlsiQ2hhbmdlUGFzc3dvcmQiLCJ0b2tlbiIsIm5ld1Bhc3N3b3JkIiwidmFsdWVzIiwic2V0RXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTs7QUFFQSxNQUFNQSxjQUEyQyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDakUsU0FDRSxNQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FEakI7QUFFRSxZQUFRLEVBQUUsT0FBT0MsTUFBUCxFQUFlO0FBQUVDO0FBQUYsS0FBZixLQUFpQyxDQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRyxDQUFDO0FBQUVDO0FBQUYsR0FBRCxLQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLGVBQVcsRUFBQyxjQUZkO0FBR0UsU0FBSyxFQUFDLGNBSFI7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxNQUFDLHNEQUFEO0FBQ0UsTUFBRSxFQUFFLENBRE47QUFFRSxhQUFTLEVBQUVBLFlBRmI7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLGdCQUFZLEVBQUMsTUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGLENBWkosQ0FERixDQURGO0FBa0NELENBbkNEOztBQXFDQUwsY0FBYyxDQUFDTSxlQUFmLEdBQWlDLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDOUMsU0FBTztBQUNMTixTQUFLLEVBQUVNLEtBQUssQ0FBQ047QUFEUixHQUFQO0FBR0QsQ0FKRDs7QUFNZUQsNkVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL1t0b2tlbl0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IGxvZ2luIGZyb20gXCIuLi9sb2dpblwiO1xuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gXCIuLi8uLi91dGlscy90b0Vycm9yTWFwXCI7XG5pbXBvcnQgSW5wdXRGaWxlZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgQ2hhbmdlUGFzc3dvcmQ6IE5leHRQYWdlPHsgdG9rZW46IHN0cmluZyB9PiA9ICh7IHRva2VuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBuZXdQYXNzd29yZDogXCJcIiB9fVxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRFcnJvcnMgfSkgPT4ge1xuICAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbG9naW4odmFsdWVzKTtcbiAgICAgICAgICAvLyBpZiAocmVzcG9uc2UuZGF0YT8ubG9naW4uZXJyb3JzKSB7XG4gICAgICAgICAgLy8gICBzZXRFcnJvcnModG9FcnJvck1hcChyZXNwb25zZS5kYXRhLmxvZ2luLmVycm9ycykpO1xuICAgICAgICAgIC8vIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YT8ubG9naW4udXNlcikge1xuICAgICAgICAgIC8vICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICA8SW5wdXRGaWxlZFxuICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5ldyBwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmV3IHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG10PXs0fVxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInRlYWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDaGFuZ2UgcGFzc3dvcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbkNoYW5nZVBhc3N3b3JkLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogcXVlcnkudG9rZW4gYXMgc3RyaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlUGFzc3dvcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/change-password/[token].tsx\n");

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIj83MGQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZvcm1pay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///formik\n");

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