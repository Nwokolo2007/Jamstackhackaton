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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTJkM2JiMTc1ZmY4NjU2NDU0OTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTRyxTQUFULENBQW9CQyxTQUFwQixFQUErQjtBQUFBOztBQUU1QyxpQkFBbUNKLDREQUFPLEVBQTFDO0FBQUEsTUFBUUssSUFBUixZQUFRQSxJQUFSO0FBQUEsTUFBY0MsS0FBZCxZQUFjQSxLQUFkO0FBQUEsTUFBcUJDLFNBQXJCLFlBQXFCQSxTQUFyQjs7QUFDRSxzQkFDRTtBQUFLLGFBQU0sZ0VBQVg7QUFBNEUsU0FBSyxFQUFFO0FBQUNDLE1BQUFBLGVBQWUsRUFBRTtBQUFsQixLQUFuRjtBQUFBLDRCQUNIO0FBQVEsZUFBTSxnQkFBZDtBQUErQixVQUFJLEVBQUMsUUFBcEM7QUFBNkMscUJBQVksVUFBekQ7QUFBb0UscUJBQVkseUJBQWhGO0FBQTBHLHVCQUFjLHdCQUF4SDtBQUFpSix1QkFBYyxPQUEvSjtBQUF1SyxvQkFBVyxtQkFBbEw7QUFBQSw2QkFDQztBQUFNLGlCQUFNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUtKO0FBQUssZUFBTSwwQkFBWDtBQUFzQyxRQUFFLEVBQUMsd0JBQXpDO0FBQUEsNkJBQ0U7QUFBSSxpQkFBTSxvQkFBVjtBQUFBLGdDQUNFO0FBQUksbUJBQU0saUJBQVY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFNLFVBQVQ7QUFBb0IsZ0JBQUksRUFBQyxHQUF6QjtBQUFBLG9DQUNFO0FBQUcsdUJBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBR0U7QUFBTSx1QkFBTSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFJLG1CQUFNLFVBQVY7QUFBQSxpQ0FDQTtBQUFHLHFCQUFTLEVBQUMsK0VBQWI7QUFBNkYsZ0JBQUksRUFBQyxzREFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSSxlQXNCRjtBQUFLLGVBQU0sMEJBQVg7QUFBQSw2QkFDQTtBQUFJLGlCQUFNLGFBQVY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFNLFVBQVY7QUFBQSxpQ0FFTTtBQUFNLHFCQUFNLHFCQUFaO0FBQUEsNEJBQW9DSCxJQUFJLGdCQUFHLDhEQUFDLGlEQUFEO0FBQWEsa0JBQUksRUFBSUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxnQkFBZ0MsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1BO0FBQUksbUJBQU0sVUFBVjtBQUFBLGlDQUdFO0FBQUcscUJBQVMsRUFBQyw4RUFBYjtBQUE0RixnQkFBSSxFQUFDLHNEQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtERDs7R0FyRHFCRjtVQUVhSDs7O0tBRmJHO0FBcURyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL05hdi9OYXZIZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5pbXBvcnQgU2lnbkluVXNlciBmcm9tICcuL1NpZ25JblVzZXInO1xyXG5pbXBvcnQgU2lnbk91dFVzZXIgZnJvbSAnLi9TaWduT3V0VXNlcic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkhlYWRlciAocGFnZVByb3BzKSB7XHJcblxyXG4gIGNvbnN0IHsgdXNlciwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaWNvbi10b3AgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1wcmltYXJ5XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzY1Nzg0RiFpbXBvcnRhbnQ7XCJ9fT5cclxuICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICBcclxuICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWhvbWVcIj48L2k+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJjcmVhdGVGdW5kcyBidG4gYnRuLWJkLWRvd25sb2FkIGQtbm9uZSBkLWxnLWlubGluZS1ibG9jayBtYi0zIG1iLW1kLTAgbWwtbWQtM1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYXJjaGl2ZS92NC4wLjAuemlwXCI+TmFpamFmdW5kbWU8L2E+XHJcblxyXG4gICAgICA8L2xpPlxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XHJcbiAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IFwiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS13YXJuaW5nXCI+IHt1c2VyID8gPFNpZ25PdXRVc2VyIHVzZXIgPSB7dXNlcn0vPjo8U2lnbkluVXNlci8+IH08L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgIFxyXG5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwiY3JlYXRlRnVuZCBidG4gYnRuLWJkLWRvd25sb2FkIGQtbm9uZSBkLWxnLWlubGluZS1ibG9jayBtYi0zIG1iLW1kLTAgbWwtbWQtM1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYXJjaGl2ZS92NC4wLjAuemlwXCI+U3RhcnQgYSBmdW5kaW5nPC9hPlxyXG5cclxuICAgICAgPC9saT5cclxuICBcclxuICAgIDwvdWw+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICBcclxuICAgIHsvKiA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXItc20tMlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhcmlhLWxhYmVsPVwiU2VhcmNoXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBteS0yIG15LXNtLTBcIiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+ICovfVxyXG4gICAgXHJcbiAgXHJcbjwvbmF2PlxyXG5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAiXSwibmFtZXMiOlsidXNlVXNlciIsIlNpZ25JblVzZXIiLCJTaWduT3V0VXNlciIsIk5hdkhlYWRlciIsInBhZ2VQcm9wcyIsInVzZXIiLCJlcnJvciIsImlzTG9hZGluZyIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=