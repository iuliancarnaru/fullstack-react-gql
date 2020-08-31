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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: RegularUserFragmentDoc, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, MeDocument, useMeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegularUserFragmentDoc\", function() { return RegularUserFragmentDoc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginDocument\", function() { return LoginDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLoginMutation\", function() { return useLoginMutation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoutDocument\", function() { return LogoutDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLogoutMutation\", function() { return useLogoutMutation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterDocument\", function() { return RegisterDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRegisterMutation\", function() { return useRegisterMutation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MeDocument\", function() { return MeDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMeQuery\", function() { return useMeQuery; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst RegularUserFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    fragment regularUser on User {\n  id\n  username\n}\n    `;\nconst LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    mutation Login($username: String!, $password: String!) {\n  login(input: {username: $username, password: $password}) {\n    user {\n      ...regularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n    ${RegularUserFragmentDoc}`;\nfunction useLoginMutation() {\n  return urql__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"](LoginDocument);\n}\n;\nconst LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    mutation Logout {\n  logout\n}\n    `;\nfunction useLogoutMutation() {\n  return urql__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"](LogoutDocument);\n}\n;\nconst RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    mutation Register($username: String!, $password: String!) {\n  register(input: {username: $username, password: $password}) {\n    user {\n      ...regularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n    ${RegularUserFragmentDoc}`;\nfunction useRegisterMutation() {\n  return urql__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"](RegisterDocument);\n}\n;\nconst MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    query Me {\n  me {\n    ...regularUser\n  }\n}\n    ${RegularUserFragmentDoc}`;\nfunction useMeQuery(options = {}) {\n  return urql__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"](_objectSpread({\n    query: MeDocument\n  }, options));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4P2E0N2MiXSwibmFtZXMiOlsiUmVndWxhclVzZXJGcmFnbWVudERvYyIsImdxbCIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiVXJxbCIsIkxvZ291dERvY3VtZW50IiwidXNlTG9nb3V0TXV0YXRpb24iLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIk1lRG9jdW1lbnQiLCJ1c2VNZVF1ZXJ5Iiwib3B0aW9ucyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUE4Sk8sTUFBTUEsc0JBQXNCLEdBQUdDLGtEQUFJOzs7OztLQUFuQztBQU1BLE1BQU1DLGFBQWEsR0FBR0Qsa0RBQUk7Ozs7Ozs7Ozs7OztNQVkzQkQsc0JBQXVCLEVBWnRCO0FBY0EsU0FBU0csZ0JBQVQsR0FBNEI7QUFDakMsU0FBT0MsZ0RBQUEsQ0FBd0RGLGFBQXhELENBQVA7QUFDRDtBQUFBO0FBQ00sTUFBTUcsY0FBYyxHQUFHSixrREFBSTs7OztLQUEzQjtBQU1BLFNBQVNLLGlCQUFULEdBQTZCO0FBQ2xDLFNBQU9GLGdEQUFBLENBQTBEQyxjQUExRCxDQUFQO0FBQ0Q7QUFBQTtBQUNNLE1BQU1FLGdCQUFnQixHQUFHTixrREFBSTs7Ozs7Ozs7Ozs7O01BWTlCRCxzQkFBdUIsRUFadEI7QUFjQSxTQUFTUSxtQkFBVCxHQUErQjtBQUNwQyxTQUFPSixnREFBQSxDQUE4REcsZ0JBQTlELENBQVA7QUFDRDtBQUFBO0FBQ00sTUFBTUUsVUFBVSxHQUFHUixrREFBSTs7Ozs7O01BTXhCRCxzQkFBdUIsRUFOdEI7QUFRQSxTQUFTVSxVQUFULENBQW9CQyxPQUEyRCxHQUFHLEVBQWxGLEVBQXNGO0FBQzNGLFNBQU9QLDZDQUFBO0FBQXlCUSxTQUFLLEVBQUVIO0FBQWhDLEtBQStDRSxPQUEvQyxFQUFQO0FBQ0Q7QUFBQSIsImZpbGUiOiIuL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCAqIGFzIFVycWwgZnJvbSAndXJxbCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE9taXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gUGljazxULCBFeGNsdWRlPGtleW9mIFQsIEs+Pjtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgY3JlYXRlUG9zdDogUG9zdDtcbiAgdXBkYXRlUG9zdD86IE1heWJlPFBvc3Q+O1xuICBkZWxldGVQb3N0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVBvc3RBcmdzID0ge1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlUG9zdEFyZ3MgPSB7XG4gIHRpdGxlPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBpbnB1dDogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgaW5wdXQ6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VybmFtZVBhc3N3b3JkSW5wdXQgPSB7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclVzZXJGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgJiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUmVndWxhclVzZXJGcmFnbWVudFxuICAgICk+LCBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZWdpc3RlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFJlZ3VsYXJVc2VyRnJhZ21lbnRcbiAgICApPiwgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFJlZ3VsYXJVc2VyRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgcmVndWxhclVzZXIgb24gVXNlciB7XG4gIGlkXG4gIHVzZXJuYW1lXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKGlucHV0OiB7dXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZH0pIHtcbiAgICB1c2VyIHtcbiAgICAgIC4uLnJlZ3VsYXJVc2VyXG4gICAgfVxuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIoaW5wdXQ6IHt1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkfSkge1xuICAgIHVzZXIge1xuICAgICAgLi4ucmVndWxhclVzZXJcbiAgICB9XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICAuLi5yZWd1bGFyVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TWVRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TWVRdWVyeT4oeyBxdWVyeTogTWVEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/generated/graphql.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"@urql/exchange-graphcache\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nfunction betterUpdateQuery(cache, qi, result, fn) {\n  return cache.updateQuery(qi, data => fn(result, data));\n}\n\nconst client = Object(urql__WEBPACK_IMPORTED_MODULE_2__[\"createClient\"])({\n  url: \"http://localhost:4000/graphql\",\n  fetchOptions: {\n    credentials: \"include\"\n  },\n  exchanges: [urql__WEBPACK_IMPORTED_MODULE_2__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__[\"cacheExchange\"])({\n    updates: {\n      Mutation: {\n        login: (_result, args, cache, info) => {\n          betterUpdateQuery(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n          }, _result, (result, query) => {\n            if (result.login.errors) {\n              return query;\n            } else {\n              return {\n                me: result.login.user\n              };\n            }\n          });\n        },\n        register: (_result, args, cache, info) => {\n          betterUpdateQuery(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n          }, _result, (result, query) => {\n            if (result.register.errors) {\n              return query;\n            } else {\n              return {\n                me: result.register.user\n              };\n            }\n          });\n        }\n      }\n    }\n  }), urql__WEBPACK_IMPORTED_MODULE_2__[\"fetchExchange\"]]\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(urql__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    value: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ColorModeProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJiZXR0ZXJVcGRhdGVRdWVyeSIsImNhY2hlIiwicWkiLCJyZXN1bHQiLCJmbiIsInVwZGF0ZVF1ZXJ5IiwiZGF0YSIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJ1cGRhdGVzIiwiTXV0YXRpb24iLCJsb2dpbiIsIl9yZXN1bHQiLCJhcmdzIiwiaW5mbyIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsImVycm9ycyIsIm1lIiwidXNlciIsInJlZ2lzdGVyIiwiZmV0Y2hFeGNoYW5nZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxTQUFTQSxpQkFBVCxDQUNFQyxLQURGLEVBRUVDLEVBRkYsRUFHRUMsTUFIRixFQUlFQyxFQUpGLEVBS0U7QUFDQSxTQUFPSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JILEVBQWxCLEVBQXVCSSxJQUFELElBQVVGLEVBQUUsQ0FBQ0QsTUFBRCxFQUFTRyxJQUFULENBQWxDLENBQVA7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUdDLHlEQUFZLENBQUM7QUFDMUJDLEtBQUcsRUFBRSwrQkFEcUI7QUFFMUJDLGNBQVksRUFBRTtBQUNaQyxlQUFXLEVBQUU7QUFERCxHQUZZO0FBSzFCQyxXQUFTLEVBQUUsQ0FDVEMsa0RBRFMsRUFFVEMsK0VBQWEsQ0FBQztBQUNaQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBRSxDQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBZ0JsQixLQUFoQixFQUF1Qm1CLElBQXZCLEtBQWdDO0FBQ3JDcEIsMkJBQWlCLENBQ2ZDLEtBRGUsRUFFZjtBQUNFb0IsaUJBQUssRUFBRUMsNkRBQVVBO0FBRG5CLFdBRmUsRUFLZkosT0FMZSxFQU1mLENBQUNmLE1BQUQsRUFBU2tCLEtBQVQsS0FBbUI7QUFDakIsZ0JBQUlsQixNQUFNLENBQUNjLEtBQVAsQ0FBYU0sTUFBakIsRUFBeUI7QUFDdkIscUJBQU9GLEtBQVA7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTztBQUNMRyxrQkFBRSxFQUFFckIsTUFBTSxDQUFDYyxLQUFQLENBQWFRO0FBRFosZUFBUDtBQUdEO0FBQ0YsV0FkYyxDQUFqQjtBQWdCRCxTQWxCTztBQW9CUkMsZ0JBQVEsRUFBRSxDQUFDUixPQUFELEVBQVVDLElBQVYsRUFBZ0JsQixLQUFoQixFQUF1Qm1CLElBQXZCLEtBQWdDO0FBQ3hDcEIsMkJBQWlCLENBQ2ZDLEtBRGUsRUFFZjtBQUNFb0IsaUJBQUssRUFBRUMsNkRBQVVBO0FBRG5CLFdBRmUsRUFLZkosT0FMZSxFQU1mLENBQUNmLE1BQUQsRUFBU2tCLEtBQVQsS0FBbUI7QUFDakIsZ0JBQUlsQixNQUFNLENBQUN1QixRQUFQLENBQWdCSCxNQUFwQixFQUE0QjtBQUMxQixxQkFBT0YsS0FBUDtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPO0FBQ0xHLGtCQUFFLEVBQUVyQixNQUFNLENBQUN1QixRQUFQLENBQWdCRDtBQURmLGVBQVA7QUFHRDtBQUNGLFdBZGMsQ0FBakI7QUFnQkQ7QUFyQ087QUFESDtBQURHLEdBQUQsQ0FGSixFQTZDVEUsa0RBN0NTO0FBTGUsQ0FBRCxDQUEzQjs7QUFzREEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLFNBQ0UsTUFBQyw2Q0FBRDtBQUFVLFNBQUssRUFBRXZCLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWUsU0FBSyxFQUFFd0IsOENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQURGLENBREYsQ0FERjtBQVVEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIENTU1Jlc2V0LCBDb2xvck1vZGVQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgUHJvdmlkZXIsIGRlZHVwRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2UgfSBmcm9tIFwidXJxbFwiO1xuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgQ2FjaGUsIFF1ZXJ5SW5wdXQgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHtcbiAgTWVEb2N1bWVudCxcbiAgTG9naW5NdXRhdGlvbixcbiAgTWVRdWVyeSxcbiAgUmVnaXN0ZXJNdXRhdGlvbixcbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5cbmZ1bmN0aW9uIGJldHRlclVwZGF0ZVF1ZXJ5PFJlc3VsdCwgUXVlcnk+KFxuICBjYWNoZTogQ2FjaGUsXG4gIHFpOiBRdWVyeUlucHV0LFxuICByZXN1bHQ6IGFueSxcbiAgZm46IChyOiBSZXN1bHQsIHE6IFF1ZXJ5KSA9PiBRdWVyeVxuKSB7XG4gIHJldHVybiBjYWNoZS51cGRhdGVRdWVyeShxaSwgKGRhdGEpID0+IGZuKHJlc3VsdCwgZGF0YSBhcyBhbnkpIGFzIGFueSk7XG59XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxuICBmZXRjaE9wdGlvbnM6IHtcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gIH0sXG4gIGV4Y2hhbmdlczogW1xuICAgIGRlZHVwRXhjaGFuZ2UsXG4gICAgY2FjaGVFeGNoYW5nZSh7XG4gICAgICB1cGRhdGVzOiB7XG4gICAgICAgIE11dGF0aW9uOiB7XG4gICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IE1lRG9jdW1lbnQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBNZURvY3VtZW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGZldGNoRXhjaGFuZ2UsXG4gIF0sXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHZhbHVlPXtjbGllbnR9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICAgIDxDU1NSZXNldCAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iulian.carnaru/Desktop/lireddit/web/src/theme.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst fonts = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].fonts), {}, {\n  mono: `'Menlo', monospace`\n});\n\nconst breakpoints = [\"40em\", \"52em\", \"64em\"];\n\nconst theme = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"]), {}, {\n  colors: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].colors), {}, {\n    black: \"#16161D\"\n  }),\n  fonts,\n  breakpoints,\n  icons: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].icons), {}, {\n    logo: {\n      path: __jsx(\"svg\", {\n        width: \"3000\",\n        height: \"3163\",\n        viewBox: \"0 0 3000 3163\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }\n      }, __jsx(\"rect\", {\n        width: \"3000\",\n        height: \"3162.95\",\n        fill: \"none\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }\n      }), __jsx(\"path\", {\n        d: \"M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z\",\n        fill: \"currentColor\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }\n      })),\n      viewBox: \"0 0 3000 3163\"\n    }\n  })\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUudHN4P2NhNzYiXSwibmFtZXMiOlsiZm9udHMiLCJjaGFrcmFUaGVtZSIsIm1vbm8iLCJicmVha3BvaW50cyIsInRoZW1lIiwiY29sb3JzIiwiYmxhY2siLCJpY29ucyIsImxvZ28iLCJwYXRoIiwidmlld0JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxtQ0FBUUMscURBQVcsQ0FBQ0QsS0FBcEI7QUFBMkJFLE1BQUksRUFBRztBQUFsQyxFQUFYOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBQXBCOztBQUVBLE1BQU1DLEtBQUssbUNBQ05ILHFEQURNO0FBRVRJLFFBQU0sa0NBQ0RKLHFEQUFXLENBQUNJLE1BRFg7QUFFSkMsU0FBSyxFQUFFO0FBRkgsSUFGRztBQU1UTixPQU5TO0FBT1RHLGFBUFM7QUFRVEksT0FBSyxrQ0FDQU4scURBQVcsQ0FBQ00sS0FEWjtBQUVIQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUNGO0FBQ0UsYUFBSyxFQUFDLE1BRFI7QUFFRSxjQUFNLEVBQUMsTUFGVDtBQUdFLGVBQU8sRUFBQyxlQUhWO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxhQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9FO0FBQU0sYUFBSyxFQUFDLE1BQVo7QUFBbUIsY0FBTSxFQUFDLFNBQTFCO0FBQW9DLFlBQUksRUFBQyxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEYsRUFRRTtBQUNFLFNBQUMsRUFBQyxpSUFESjtBQUVFLFlBQUksRUFBQyxjQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSRixDQUZFO0FBZ0JKQyxhQUFPLEVBQUU7QUFoQkw7QUFGSDtBQVJJLEVBQVg7O0FBK0JlTixvRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aGVtZSBhcyBjaGFrcmFUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgZm9udHMgPSB7IC4uLmNoYWtyYVRoZW1lLmZvbnRzLCBtb25vOiBgJ01lbmxvJywgbW9ub3NwYWNlYCB9O1xuXG5jb25zdCBicmVha3BvaW50cyA9IFtcIjQwZW1cIiwgXCI1MmVtXCIsIFwiNjRlbVwiXTtcblxuY29uc3QgdGhlbWUgPSB7XG4gIC4uLmNoYWtyYVRoZW1lLFxuICBjb2xvcnM6IHtcbiAgICAuLi5jaGFrcmFUaGVtZS5jb2xvcnMsXG4gICAgYmxhY2s6IFwiIzE2MTYxRFwiLFxuICB9LFxuICBmb250cyxcbiAgYnJlYWtwb2ludHMsXG4gIGljb25zOiB7XG4gICAgLi4uY2hha3JhVGhlbWUuaWNvbnMsXG4gICAgbG9nbzoge1xuICAgICAgcGF0aDogKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCIzMDAwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMTYzXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwMDAgMzE2M1wiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIzMDAwXCIgaGVpZ2h0PVwiMzE2Mi45NVwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0xNDcwLjg5IDE0NDguODFMMjE3MCAyNDg4LjE5SDgyMFY3MDYuMzkySDIxNzBMMTQ3MC44OSAxNDQ4LjgxWk0xNDA4LjIxIDE1MTUuMzdMOTA5LjE5NiAyMDQ1LjNWMjM5My40NkgxOTk4Ljg0TDE0MDguMjEgMTUxNS4zN1pcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApLFxuICAgICAgdmlld0JveDogXCIwIDAgMzAwMCAzMTYzXCIsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "@urql/exchange-graphcache":
/*!********************************************!*\
  !*** external "@urql/exchange-graphcache" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@urql/exchange-graphcache\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI/NGRmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@urql/exchange-graphcache\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"urql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cnFsXCI/YTY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1cnFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///urql\n");

/***/ })

/******/ });