"use strict";
self["webpackHotUpdate_N_E"]("pages/sharePage",{

/***/ "./pages/sharePage.js":
/*!****************************!*\
  !*** ./pages/sharePage.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ sharePage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "./node_modules/@auth0/nextjs-auth0/dist/index.browser.js");
/* harmony import */ var _Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/images/uploadButton */ "./Components/images/uploadButton.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\sharePage.js",
    _s = $RefreshSig$();






function sharePage() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      target = _useState4[0],
      setTarget = _useState4[1];

  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser)(),
      user = _useUser.user;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      url = _useState5[0],
      shareUrl = _useState5[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    "class": "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      "class": "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        "class": "col-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "number",
              name: "target",
              required: true,
              placeholder: "target amount",
              className: "form-control",
              value: '/' + user.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          "class": "btn btn-success",
          href: "https://facebook.com/sharer/sharer.php?",
          children: "Share on Facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(sharePage, "ZA+NC1fbccJRhrjTn/SIoPlPh14=", false, function () {
  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hhcmVQYWdlLmNjMjg5MTNjMTA1M2E1MWZmZTQ1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdlLFNBQVNLLFNBQVQsR0FBcUI7QUFBQTs7QUFFbEMsa0JBQXdCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPSyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBMEJOLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE4QlIsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBNEJWLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9XLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLGlCQUFnQlgsNERBQU8sRUFBdkI7QUFBQSxNQUFRWSxJQUFSLFlBQVFBLElBQVI7O0FBRUEsbUJBQXNCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFBQSxNQUFNYyxHQUFOO0FBQUEsTUFBVUMsUUFBVjs7QUFDQSxzQkFDRTtBQUFLLGFBQU0scUJBQVg7QUFBQSwyQkFDRTtBQUFLLGVBQU0sS0FBWDtBQUFBLDZCQUNFO0FBQUssaUJBQU0sVUFBWDtBQUFBLGdDQUVFO0FBQUEsaUNBQ0E7QUFBSyxxQkFBUyxFQUFFWix1RUFBaEI7QUFBQSxtQ0FFSTtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFJLEVBQUMsUUFGUDtBQUdFLHNCQUFRLE1BSFY7QUFJRSx5QkFBVyxFQUFDLGVBSmQ7QUFLRSx1QkFBUyxFQUFDLGNBTFo7QUFNRSxtQkFBSyxFQUFJLE1BQUlVLElBQUksQ0FBQ047QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBa0JFO0FBQUcsbUJBQVEsaUJBQVg7QUFBNkIsY0FBSSwyQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7O0dBbkN1Qkg7VUFNTkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hhcmVQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcclxuaW1wb3J0IHsgVXBsb2FkQnV0dG9uIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvaW1hZ2VzL3VwbG9hZEJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYXJlUGFnZSgpIHtcclxuXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgeyB1c2VyfSA9IHVzZVVzZXIoKTtcclxuICAgIFxyXG4gIGNvbnN0W3VybCxzaGFyZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtYXJnaW5Ub3BcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsPk5hbWU8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRhcmdldFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0YXJnZXQgYW1vdW50XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHsnLycrdXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8YSBjbGFzcyA9IFwiYnRuIGJ0bi1zdWNjZXNzXCIgaHJlZj17YGh0dHBzOi8vZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP2B9PlNoYXJlIG9uIEZhY2Vib29rPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VVc2VyIiwiVXBsb2FkQnV0dG9uIiwic3R5bGVzIiwic2hhcmVQYWdlIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJ1c2VyIiwidXJsIiwic2hhcmVVcmwiLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9