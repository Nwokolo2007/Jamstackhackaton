"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Nav/NavHeader.js":
/*!*************************************!*\
  !*** ./Components/Nav/NavHeader.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavHeader; }
/* harmony export */ });
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "./node_modules/@auth0/nextjs-auth0/dist/index.browser.js");
/* harmony import */ var _SignInUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInUser */ "./Components/Nav/SignInUser.jsx");
/* harmony import */ var _SignOutUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignOutUser */ "./Components/Nav/SignOutUser.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\Components\\Nav\\NavHeader.js",
    _s = $RefreshSig$();






function NavHeader(pageProps) {
  _s();

  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.useUser)(),
      user = _useUser.user,
      error = _useUser.error,
      isLoading = _useUser.isLoading;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
    "class": "navbar navbar-icon-top navbar-expand-lg navbar-dark bg-primary",
    style: {
      backgroundColor: "#65784F!important;"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      "class": "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        "class": "navbar-toggler-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      "class": "collapse navbar-collapse",
      id: "navbarSupportedContent",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
        "class": "navbar-nav mr-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          "class": "nav-item active",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            "class": "nav-link",
            href: "#",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
              "class": "fa fa-home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              "class": "sr-only",
              children: "(current)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          "class": "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            className: "createFunds btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3",
            href: "https://github.com/twbs/bootstrap/archive/v4.0.0.zip",
            children: "Naijafundme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      "class": "collapse navbar-collapse",
      id: "navbarSupportedContent",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
        "class": "navbar-nav ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          "class": "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            "class": "badge badge-warning",
            children: [" ", user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SignOutUser__WEBPACK_IMPORTED_MODULE_2__.default, {
              user: user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 56
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SignInUser__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 85
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          "class": "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            className: "createFund btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3",
            href: "https://github.com/twbs/bootstrap/archive/v4.0.0.zip",
            children: "Start a funding"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, this);
}

_s(NavHeader, "z8NjDiK5azFgDeQIeOoWnL/sCfs=", false, function () {
  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.useUser];
});

_c = NavHeader;
;

var _c;

$RefreshReg$(_c, "NavHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmY2NWE1OWIxZmQwNjYwNjI4ZGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTRyxTQUFULENBQW9CQyxTQUFwQixFQUErQjtBQUFBOztBQUU1QyxpQkFBbUNKLDREQUFPLEVBQTFDO0FBQUEsTUFBUUssSUFBUixZQUFRQSxJQUFSO0FBQUEsTUFBY0MsS0FBZCxZQUFjQSxLQUFkO0FBQUEsTUFBcUJDLFNBQXJCLFlBQXFCQSxTQUFyQjs7QUFDRSxzQkFDRTtBQUFLLGFBQU0sZ0VBQVg7QUFBNEUsU0FBSyxFQUFFO0FBQUNDLE1BQUFBLGVBQWUsRUFBRTtBQUFsQixLQUFuRjtBQUFBLDRCQUNIO0FBQVEsZUFBTSxnQkFBZDtBQUErQixVQUFJLEVBQUMsUUFBcEM7QUFBNkMscUJBQVksVUFBekQ7QUFBb0UscUJBQVkseUJBQWhGO0FBQTBHLHVCQUFjLHdCQUF4SDtBQUFpSix1QkFBYyxPQUEvSjtBQUF1SyxvQkFBVyxtQkFBbEw7QUFBQSw2QkFDQztBQUFNLGlCQUFNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUtKO0FBQUssZUFBTSwwQkFBWDtBQUFzQyxRQUFFLEVBQUMsd0JBQXpDO0FBQUEsNkJBQ0U7QUFBSSxpQkFBTSxvQkFBVjtBQUFBLGdDQUNFO0FBQUksbUJBQU0saUJBQVY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFNLFVBQVQ7QUFBb0IsZ0JBQUksRUFBQyxHQUF6QjtBQUFBLG9DQUNFO0FBQUcsdUJBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBR0U7QUFBTSx1QkFBTSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFJLG1CQUFNLFVBQVY7QUFBQSxpQ0FDQTtBQUFHLHFCQUFTLEVBQUMsK0VBQWI7QUFBNkYsZ0JBQUksRUFBQyxzREFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSSxlQXNCRjtBQUFLLGVBQU0sMEJBQVg7QUFBc0MsUUFBRSxFQUFDLHdCQUF6QztBQUFBLDZCQUNBO0FBQUksaUJBQU0sYUFBVjtBQUFBLGdDQUNFO0FBQUksbUJBQU0sVUFBVjtBQUFBLGlDQUVNO0FBQU0scUJBQU0scUJBQVo7QUFBQSw0QkFBb0NILElBQUksZ0JBQUcsOERBQUMsaURBQUQ7QUFBYSxrQkFBSSxFQUFJQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILGdCQUFnQyw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUE7QUFBSSxtQkFBTSxVQUFWO0FBQUEsaUNBR0U7QUFBRyxxQkFBUyxFQUFDLDhFQUFiO0FBQTRGLGdCQUFJLEVBQUMsc0RBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REOztHQXJEcUJGO1VBRWFIOzs7S0FGYkc7QUFxRHJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTmF2L05hdkhlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcbmltcG9ydCBTaWduSW5Vc2VyIGZyb20gJy4vU2lnbkluVXNlcic7XHJcbmltcG9ydCBTaWduT3V0VXNlciBmcm9tICcuL1NpZ25PdXRVc2VyJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2SGVhZGVyIChwYWdlUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pY29uLXRvcCBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjNjU3ODRGIWltcG9ydGFudDtcIn19PlxyXG4gICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIFxyXG4gIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaG9tZVwiPjwvaT5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImNyZWF0ZUZ1bmRzIGJ0biBidG4tYmQtZG93bmxvYWQgZC1ub25lIGQtbGctaW5saW5lLWJsb2NrIG1iLTMgbWItbWQtMCBtbC1tZC0zXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9hcmNoaXZlL3Y0LjAuMC56aXBcIj5OYWlqYWZ1bmRtZTwvYT5cclxuXHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXdhcm5pbmdcIj4ge3VzZXIgPyA8U2lnbk91dFVzZXIgdXNlciA9IHt1c2VyfS8+OjxTaWduSW5Vc2VyLz4gfTwvc3Bhbj5cclxuICAgICAgICAgIFxyXG4gICAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgXHJcblxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJjcmVhdGVGdW5kIGJ0biBidG4tYmQtZG93bmxvYWQgZC1ub25lIGQtbGctaW5saW5lLWJsb2NrIG1iLTMgbWItbWQtMCBtbC1tZC0zXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9hcmNoaXZlL3Y0LjAuMC56aXBcIj5TdGFydCBhIGZ1bmRpbmc8L2E+XHJcblxyXG4gICAgICA8L2xpPlxyXG4gIFxyXG4gICAgPC91bD5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgey8qIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgIDwvZm9ybT4gKi99XHJcbiAgICBcclxuICBcclxuPC9uYXY+XHJcblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICJdLCJuYW1lcyI6WyJ1c2VVc2VyIiwiU2lnbkluVXNlciIsIlNpZ25PdXRVc2VyIiwiTmF2SGVhZGVyIiwicGFnZVByb3BzIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==