"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

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
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
              "class": "fa fa-home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          "class": "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            className: "createFunds btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3",
            href: "https://github.com/twbs/bootstrap/archive/v4.0.0.zip",
            children: "Naijafundme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      "class": "collapse navbar-collapse",
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
              lineNumber: 48,
              columnNumber: 23
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SignInUser__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 53
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          "class": "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            className: "createFund btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3",
            href: "/contact",
            children: "Start a funding"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_s(NavHeader, "z8NjDiK5azFgDeQIeOoWnL/sCfs=", false, function () {
  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.useUser];
});

_c = NavHeader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yOGU1NGZmMGM3ZTQ0MzdhNTMwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNHLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCO0FBQUE7O0FBQzNDLGlCQUFtQ0osNERBQU8sRUFBMUM7QUFBQSxNQUFRSyxJQUFSLFlBQVFBLElBQVI7QUFBQSxNQUFjQyxLQUFkLFlBQWNBLEtBQWQ7QUFBQSxNQUFxQkMsU0FBckIsWUFBcUJBLFNBQXJCOztBQUNBLHNCQUNFO0FBQ0UsYUFBTSxnRUFEUjtBQUVFLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUU7QUFBbkIsS0FGVDtBQUFBLDRCQUlFO0FBQ0UsZUFBTSxnQkFEUjtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UscUJBQVksVUFIZDtBQUlFLHFCQUFZLHlCQUpkO0FBS0UsdUJBQWMsd0JBTGhCO0FBTUUsdUJBQWMsT0FOaEI7QUFPRSxvQkFBVyxtQkFQYjtBQUFBLDZCQVNFO0FBQU0saUJBQU07QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBZ0JFO0FBQUssZUFBTSwwQkFBWDtBQUFzQyxRQUFFLEVBQUMsd0JBQXpDO0FBQUEsNkJBQ0U7QUFBSSxpQkFBTSxvQkFBVjtBQUFBLGdDQUNFO0FBQUksbUJBQU0saUJBQVY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFNLFVBQVQ7QUFBb0IsZ0JBQUksRUFBQyxHQUF6QjtBQUFBLG1DQUNFO0FBQUcsdUJBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFJLG1CQUFNLFVBQVY7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUMsK0VBRFo7QUFFRSxnQkFBSSxFQUFDLHNEQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBbUNFO0FBQUssZUFBTSwwQkFBWDtBQUFBLDZCQUNFO0FBQUksaUJBQU0sYUFBVjtBQUFBLGdDQUNFO0FBQUksbUJBQU0sVUFBVjtBQUFBLGlDQUNFO0FBQU0scUJBQU0scUJBQVo7QUFBQSx1QkFDRyxHQURILEVBRUdILElBQUksZ0JBQUcsOERBQUMsaURBQUQ7QUFBYSxrQkFBSSxFQUFFQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILGdCQUFpQyw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBSSxtQkFBTSxVQUFWO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLDhFQURaO0FBRUUsZ0JBQUksRUFBQyxVQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkREOztHQS9EdUJGO1VBQ2FIOzs7S0FEYkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXYvTmF2SGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiO1xyXG5pbXBvcnQgU2lnbkluVXNlciBmcm9tIFwiLi9TaWduSW5Vc2VyXCI7XHJcbmltcG9ydCBTaWduT3V0VXNlciBmcm9tIFwiLi9TaWduT3V0VXNlclwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZIZWFkZXIocGFnZVByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWljb24tdG9wIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiXHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNjU3ODRGIWltcG9ydGFudDtcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1ob21lXCI+PC9pPlxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGVGdW5kcyBidG4gYnRuLWJkLWRvd25sb2FkIGQtbm9uZSBkLWxnLWlubGluZS1ibG9jayBtYi0zIG1iLW1kLTAgbWwtbWQtM1wiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9hcmNoaXZlL3Y0LjAuMC56aXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTmFpamFmdW5kbWVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXdhcm5pbmdcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3VzZXIgPyA8U2lnbk91dFVzZXIgdXNlcj17dXNlcn0gLz4gOiA8U2lnbkluVXNlciAvPn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlRnVuZCBidG4gYnRuLWJkLWRvd25sb2FkIGQtbm9uZSBkLWxnLWlubGluZS1ibG9jayBtYi0zIG1iLW1kLTAgbWwtbWQtM1wiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9jb250YWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN0YXJ0IGEgZnVuZGluZ1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgIDwvZm9ybT4gKi99XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VVc2VyIiwiU2lnbkluVXNlciIsIlNpZ25PdXRVc2VyIiwiTmF2SGVhZGVyIiwicGFnZVByb3BzIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==