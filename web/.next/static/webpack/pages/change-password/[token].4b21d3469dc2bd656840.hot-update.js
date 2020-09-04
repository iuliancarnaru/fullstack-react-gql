webpackHotUpdate_N_E("pages/change-password/[token]",{

/***/ "./src/pages/change-password/[token].tsx":
/*!***********************************************!*\
  !*** ./src/pages/change-password/[token].tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login */ \"./src/pages/login.tsx\");\n/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/toErrorMap */ \"./src/utils/toErrorMap.ts\");\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/iulian.carnaru/Desktop/fullstack-react-gql/web/src/pages/change-password/[token].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ChangePassword = function ChangePassword(_ref) {\n  var token = _ref.token;\n  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"], {\n    initialValues: {\n      newPassword: newPassword\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref2) {\n        var _response$data, _response$data2;\n\n        var setErrors, response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setErrors = _ref2.setErrors;\n                _context.next = 3;\n                return Object(_login__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(values);\n\n              case 3:\n                response = _context.sent;\n\n                if ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.login.errors) {\n                  setErrors(Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_6__[\"toErrorMap\"])(response.data.login.errors));\n                } else if ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.login.user) {\n                  router.push(\"/\");\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref3.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, function (_ref4) {\n    var isSubmitting = _ref4.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      name: \"newPassword\",\n      placeholder: \"new password\",\n      label: \"New password\",\n      type: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n      mt: 4,\n      isLoading: isSubmitting,\n      type: \"submit\",\n      variantColor: \"teal\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, \"Change password\"));\n  }));\n};\n\n_c = ChangePassword;\n\nChangePassword.getInitialProps = function (_ref5) {\n  var query = _ref5.query;\n  return {\n    token: query.token\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangePassword);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChangePassword\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9bdG9rZW5dLnRzeD9kZWRmIl0sIm5hbWVzIjpbIkNoYW5nZVBhc3N3b3JkIiwidG9rZW4iLCJuZXdQYXNzd29yZCIsInZhbHVlcyIsInNldEVycm9ycyIsImxvZ2luIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3JzIiwidG9FcnJvck1hcCIsInVzZXIiLCJyb3V0ZXIiLCJwdXNoIiwiaXNTdWJtaXR0aW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUEyQyxHQUFHLFNBQTlDQSxjQUE4QyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2pFLFNBQ0UsTUFBQywyREFBRDtBQUFTLFdBQU8sRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUNFLGlCQUFhLEVBQUU7QUFBRUMsaUJBQVcsRUFBWEE7QUFBRixLQURqQjtBQUVFLFlBQVE7QUFBQSxtTUFBRSxpQkFBT0MsTUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUJDLHlCQUFqQixTQUFpQkEsU0FBakI7QUFBQTtBQUFBLHVCQUNlQyxzREFBSyxDQUFDRixNQUFELENBRHBCOztBQUFBO0FBQ0ZHLHdCQURFOztBQUVSLHNDQUFJQSxRQUFRLENBQUNDLElBQWIsbURBQUksZUFBZUYsS0FBZixDQUFxQkcsTUFBekIsRUFBaUM7QUFDL0JKLDJCQUFTLENBQUNLLG9FQUFVLENBQUNILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRixLQUFkLENBQW9CRyxNQUFyQixDQUFYLENBQVQ7QUFDRCxpQkFGRCxNQUVPLHVCQUFJRixRQUFRLENBQUNDLElBQWIsb0RBQUksZ0JBQWVGLEtBQWYsQ0FBcUJLLElBQXpCLEVBQStCO0FBQ3BDQyx3QkFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEOztBQU5PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0c7QUFBQSxRQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSxXQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFDRSxVQUFJLEVBQUMsYUFEUDtBQUVFLGlCQUFXLEVBQUMsY0FGZDtBQUdFLFdBQUssRUFBQyxjQUhSO0FBSUUsVUFBSSxFQUFDLFVBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBT0UsTUFBQyxzREFBRDtBQUNFLFFBQUUsRUFBRSxDQUROO0FBRUUsZUFBUyxFQUFFQSxZQUZiO0FBR0UsVUFBSSxFQUFDLFFBSFA7QUFJRSxrQkFBWSxFQUFDLE1BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixDQUREO0FBQUEsR0FYSCxDQURGLENBREY7QUFrQ0QsQ0FuQ0Q7O0tBQU1iLGM7O0FBcUNOQSxjQUFjLENBQUNjLGVBQWYsR0FBaUMsaUJBQWU7QUFBQSxNQUFaQyxLQUFZLFNBQVpBLEtBQVk7QUFDOUMsU0FBTztBQUNMZCxTQUFLLEVBQUVjLEtBQUssQ0FBQ2Q7QUFEUixHQUFQO0FBR0QsQ0FKRDs7QUFNZUQsNkVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL1t0b2tlbl0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IGxvZ2luIGZyb20gXCIuLi9sb2dpblwiO1xuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gXCIuLi8uLi91dGlscy90b0Vycm9yTWFwXCI7XG5pbXBvcnQgSW5wdXRGaWxlZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgQ2hhbmdlUGFzc3dvcmQ6IE5leHRQYWdlPHsgdG9rZW46IHN0cmluZyB9PiA9ICh7IHRva2VuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBuZXdQYXNzd29yZCB9fVxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRFcnJvcnMgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbG9naW4odmFsdWVzKTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8ubG9naW4uZXJyb3JzKSB7XG4gICAgICAgICAgICBzZXRFcnJvcnModG9FcnJvck1hcChyZXNwb25zZS5kYXRhLmxvZ2luLmVycm9ycykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YT8ubG9naW4udXNlcikge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICA8SW5wdXRGaWxlZFxuICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5ldyBwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmV3IHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG10PXs0fVxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInRlYWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDaGFuZ2UgcGFzc3dvcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbkNoYW5nZVBhc3N3b3JkLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogcXVlcnkudG9rZW4gYXMgc3RyaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlUGFzc3dvcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/change-password/[token].tsx\n");

/***/ })

})