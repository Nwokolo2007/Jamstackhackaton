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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZjY1YTU5YjFmZDA2NjA2MjhkYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNHLFNBQVQsQ0FBb0JDLFNBQXBCLEVBQStCO0FBQUE7O0FBRTVDLGlCQUFtQ0osNERBQU8sRUFBMUM7QUFBQSxNQUFRSyxJQUFSLFlBQVFBLElBQVI7QUFBQSxNQUFjQyxLQUFkLFlBQWNBLEtBQWQ7QUFBQSxNQUFxQkMsU0FBckIsWUFBcUJBLFNBQXJCOztBQUNFLHNCQUNFO0FBQUssYUFBTSxnRUFBWDtBQUE0RSxTQUFLLEVBQUU7QUFBQ0MsTUFBQUEsZUFBZSxFQUFFO0FBQWxCLEtBQW5GO0FBQUEsNEJBQ0g7QUFBUSxlQUFNLGdCQUFkO0FBQStCLFVBQUksRUFBQyxRQUFwQztBQUE2QyxxQkFBWSxVQUF6RDtBQUFvRSxxQkFBWSx5QkFBaEY7QUFBMEcsdUJBQWMsd0JBQXhIO0FBQWlKLHVCQUFjLE9BQS9KO0FBQXVLLG9CQUFXLG1CQUFsTDtBQUFBLDZCQUNDO0FBQU0saUJBQU07QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBS0o7QUFBSyxlQUFNLDBCQUFYO0FBQXNDLFFBQUUsRUFBQyx3QkFBekM7QUFBQSw2QkFDRTtBQUFJLGlCQUFNLG9CQUFWO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBTSxpQkFBVjtBQUFBLGlDQUNFO0FBQUcscUJBQU0sVUFBVDtBQUFvQixnQkFBSSxFQUFDLEdBQXpCO0FBQUEsb0NBQ0U7QUFBRyx1QkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFHRTtBQUFNLHVCQUFNLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQUksbUJBQU0sVUFBVjtBQUFBLGlDQUNBO0FBQUcscUJBQVMsRUFBQywrRUFBYjtBQUE2RixnQkFBSSxFQUFDLHNEQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxJLGVBc0JGO0FBQUssZUFBTSwwQkFBWDtBQUFzQyxRQUFFLEVBQUMsd0JBQXpDO0FBQUEsNkJBQ0E7QUFBSSxpQkFBTSxhQUFWO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBTSxVQUFWO0FBQUEsaUNBRU07QUFBTSxxQkFBTSxxQkFBWjtBQUFBLDRCQUFvQ0gsSUFBSSxnQkFBRyw4REFBQyxpREFBRDtBQUFhLGtCQUFJLEVBQUlBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsZ0JBQWdDLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNQTtBQUFJLG1CQUFNLFVBQVY7QUFBQSxpQ0FHRTtBQUFHLHFCQUFTLEVBQUMsOEVBQWI7QUFBNEYsZ0JBQUksRUFBQyxzREFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrREQ7O0dBckRxQkY7VUFFYUg7OztLQUZiRztBQXFEckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXYvTmF2SGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuaW1wb3J0IFNpZ25JblVzZXIgZnJvbSAnLi9TaWduSW5Vc2VyJztcclxuaW1wb3J0IFNpZ25PdXRVc2VyIGZyb20gJy4vU2lnbk91dFVzZXInO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZIZWFkZXIgKHBhZ2VQcm9wcykge1xyXG5cclxuICBjb25zdCB7IHVzZXIsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWljb24tdG9wIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM2NTc4NEYhaW1wb3J0YW50O1wifX0+XHJcbiAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgXHJcbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1ob21lXCI+PC9pPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwiY3JlYXRlRnVuZHMgYnRuIGJ0bi1iZC1kb3dubG9hZCBkLW5vbmUgZC1sZy1pbmxpbmUtYmxvY2sgbWItMyBtYi1tZC0wIG1sLW1kLTNcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2FyY2hpdmUvdjQuMC4wLnppcFwiPk5haWphZnVuZG1lPC9hPlxyXG5cclxuICAgICAgPC9saT5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBcIj5cclxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPiB7dXNlciA/IDxTaWduT3V0VXNlciB1c2VyID0ge3VzZXJ9Lz46PFNpZ25JblVzZXIvPiB9PC9zcGFuPlxyXG4gICAgICAgICAgXHJcbiAgICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICBcclxuXHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImNyZWF0ZUZ1bmQgYnRuIGJ0bi1iZC1kb3dubG9hZCBkLW5vbmUgZC1sZy1pbmxpbmUtYmxvY2sgbWItMyBtYi1tZC0wIG1sLW1kLTNcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2FyY2hpdmUvdjQuMC4wLnppcFwiPlN0YXJ0IGEgZnVuZGluZzwvYT5cclxuXHJcbiAgICAgIDwvbGk+XHJcbiAgXHJcbiAgICA8L3VsPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgXHJcbiAgICB7LyogPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZSBteS0yIG15LWxnLTBcIj5cclxuICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXktMiBteS1zbS0wXCIgdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPiAqL31cclxuICAgIFxyXG4gIFxyXG48L25hdj5cclxuXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJTaWduSW5Vc2VyIiwiU2lnbk91dFVzZXIiLCJOYXZIZWFkZXIiLCJwYWdlUHJvcHMiLCJ1c2VyIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9