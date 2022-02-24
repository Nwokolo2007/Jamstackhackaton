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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\sharePage.js",
    _s = $RefreshSig$();







function sharePage() {
  _s();

  ;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var email = router.query.email;
  console.log(email);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    "class": "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      "class": "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        "class": "col-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              name: "target",
              required: true,
              readOnly: true,
              className: "form-control",
              value: encodeURI("http://localhost:3000/paymentPage?email=".concat(email))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          "class": "btn btn-success",
          href: "https://facebook.com/sharer/sharer.php?",
          children: "Share on Facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(sharePage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hhcmVQYWdlLmZiMGQ4Zjc0ZDk5NTMyMGVjY2E3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHZSxTQUFTTSxTQUFULEdBQXFCO0FBQUE7O0FBQUM7QUFDakMsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUF4QjtBQUNBLE1BQU9JLEtBQVAsR0FBZ0JELE1BQU0sQ0FBQ0UsS0FBdkIsQ0FBT0QsS0FBUDtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUVGLHNCQUNFO0FBQUssYUFBTSxxQkFBWDtBQUFBLDJCQUNFO0FBQUssZUFBTSxLQUFYO0FBQUEsNkJBQ0U7QUFBSyxpQkFBTSxVQUFYO0FBQUEsZ0NBRUU7QUFBQSxpQ0FDQTtBQUFLLHFCQUFTLEVBQUVILHVFQUFoQjtBQUFBLG1DQUVJO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxRQUZQO0FBR0Usc0JBQVEsTUFIVjtBQUlFLHNCQUFRLE1BSlY7QUFLRSx1QkFBUyxFQUFDLGNBTFo7QUFNRSxtQkFBSyxFQUFJUSxTQUFTLG1EQUE0Q0wsS0FBNUM7QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBa0JFO0FBQUcsbUJBQVEsaUJBQVg7QUFBNkIsY0FBSSwyQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7O0dBL0J1QkY7VUFDTEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hhcmVQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcclxuaW1wb3J0IHsgVXBsb2FkQnV0dG9uIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvaW1hZ2VzL3VwbG9hZEJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFyZVBhZ2UoKSB7O1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtlbWFpbH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtYXJnaW5Ub3BcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsPk5hbWU8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0YXJnZXRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW5jb2RlVVJJKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcGF5bWVudFBhZ2U/ZW1haWw9JHtlbWFpbH1gKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8YSBjbGFzcyA9IFwiYnRuIGJ0bi1zdWNjZXNzXCIgaHJlZj17YGh0dHBzOi8vZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP2B9PlNoYXJlIG9uIEZhY2Vib29rPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VVc2VyIiwiVXBsb2FkQnV0dG9uIiwidXNlUm91dGVyIiwic3R5bGVzIiwic2hhcmVQYWdlIiwicm91dGVyIiwiZW1haWwiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJlbmNvZGVVUkkiXSwic291cmNlUm9vdCI6IiJ9