"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_Nav_NavHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Nav/NavHeader */ "./Components/Nav/NavHeader.js");
/* harmony import */ var _Components_User_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/User/Profile */ "./Components/User/Profile.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\index.js",
    _s = $RefreshSig$();










function Home(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      url = _useState5[0],
      setImageUrl = _useState5[1];

  var formSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var res, _yield$res$json, error;

      return C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); //let isValidForm = handleValidation();

              _context.next = 3;
              return fetch("/api/uploadForm", {
                body: JSON.stringify({
                  email: email,
                  name: name,
                  message: message,
                  title: title,
                  url: url
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST"
              });

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              _yield$res$json = _context.sent;
              error = _yield$res$json.error;

              if (!error) {
                _context.next = 11;
                break;
              }

              console.log(error);
              return _context.abrupt("return");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function formSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    "class": "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      "class": "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        "class": "col-md-6 mb-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h5", {
          children: "How it works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("ul", {
          "class": "list-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("li", {
            "class": "list-group-item disabled",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              "class": "fas fa-cog",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h6", {
                children: "Create and set up an account on Naijafundme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                children: "Once your account is created, verify your email and proceed with setting up a naijafundme donation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 18
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("li", {
            "class": "list-group-item disabled",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              "class": "fas fa-cog",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h6", {
                children: "Create a donation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                children: "Please ensure ensure that you create only once single donation at a time and upload an image correctly describing your situation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 18
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("li", {
            "class": "list-group-item disabled",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              "class": "fas fa-cog",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h6", {
                children: "Share the donation link to friends on social media"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                children: "Immediately the donation is created, you can proceed with sharing the link online"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 18
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        "class": "col-lg-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          "class": "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            "class": "col-lg-3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            "class": "col-lg-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
              "class": "colorp",
              children: "Report a fraud"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("form", {
              onSubmit: formSubmit,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().margin),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                  type: "text",
                  name: "title",
                  required: true,
                  placeholder: "subject",
                  className: "form-control",
                  value: title,
                  onChange: function onChange(e) {
                    return setTitle(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().margin),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                  type: "text",
                  name: "name",
                  required: true,
                  placeholder: "Name",
                  className: "form-control",
                  value: name,
                  onChange: function onChange(e) {
                    return setName(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().margin),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                  type: "email",
                  name: "email",
                  required: true,
                  placeholder: "Email",
                  className: "form-control",
                  value: email,
                  onChange: function onChange(e) {
                    return setEmail(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().margin),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("textarea", {
                  type: "text",
                  name: "message",
                  required: true,
                  placeholder: "message",
                  className: "form-control",
                  value: message,
                  onChange: function onChange(e) {
                    return setMessage(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
                "class": "btn btn-success widthBtn",
                type: "submit",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            "class": "col-lg-3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s(Home, "hxH4vj1G52V6gqsHVouLlx8fnDE=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzVhZTk4MTZlNTA1YzQ3ZTY2NGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ2UsU0FBU08sSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ2xDLGtCQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT0csSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTBCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJOLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9PLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTBCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxtQkFBMkJWLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9XLEdBQVA7QUFBQSxNQUFZQyxXQUFaOztBQUVBLE1BQU1DLFVBQVU7QUFBQSx5VEFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEaUIsQ0FHakI7O0FBSGlCO0FBQUEscUJBS0NDLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUN6Q0MsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJkLGtCQUFBQSxLQUFLLEVBQUVBLEtBRFk7QUFFbkJGLGtCQUFBQSxJQUFJLEVBQUVBLElBRmE7QUFHbkJJLGtCQUFBQSxPQUFPLEVBQUVBLE9BSFU7QUFJbkJFLGtCQUFBQSxLQUFLLEVBQUVBLEtBSlk7QUFLbkJFLGtCQUFBQSxHQUFHLEVBQUVBO0FBTGMsaUJBQWYs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUEyREU7QUFBSyxxQkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0dEOztHQXhJdUI1Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTmF2SGVhZGVyIGZyb20gXCIuLi9Db21wb25lbnRzL05hdi9OYXZIZWFkZXJcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9Db21wb25lbnRzL1VzZXIvUHJvZmlsZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbdXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBmb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvL2xldCBpc1ZhbGlkRm9ybSA9IGhhbmRsZVZhbGlkYXRpb24oKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGxvYWRGb3JtXCIsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbWFyZ2luVG9wXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgPGg1PkhvdyBpdCB3b3JrczwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGRpc2FibGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXMgZmEtY29nXCI+XG4gICAgICAgICAgICAgIDxoNj5DcmVhdGUgYW5kIHNldCB1cCBhbiBhY2NvdW50IG9uIE5haWphZnVuZG1lPC9oNj5cbiAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgT25jZSB5b3VyIGFjY291bnQgaXMgY3JlYXRlZCwgdmVyaWZ5IHlvdXIgZW1haWwgYW5kIHByb2NlZWQgd2l0aCBzZXR0aW5nIHVwIGEgbmFpamFmdW5kbWUgZG9uYXRpb25cbiAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGRpc2FibGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXMgZmEtY29nXCI+XG4gICAgICAgICAgICAgIDxoNj5DcmVhdGUgYSBkb25hdGlvbjwvaDY+XG4gICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnN1cmUgZW5zdXJlIHRoYXQgeW91IGNyZWF0ZSBvbmx5IG9uY2Ugc2luZ2xlIGRvbmF0aW9uIGF0IGEgdGltZSBhbmQgdXBsb2FkIGFuIGltYWdlIGNvcnJlY3RseSBkZXNjcmliaW5nIHlvdXIgc2l0dWF0aW9uXG4gICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzIGZhLWNvZ1wiPlxuICAgICAgICAgICAgICA8aDY+U2hhcmUgdGhlIGRvbmF0aW9uIGxpbmsgdG8gZnJpZW5kcyBvbiBzb2NpYWwgbWVkaWE8L2g2PlxuICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICBJbW1lZGlhdGVseSB0aGUgZG9uYXRpb24gaXMgY3JlYXRlZCwgeW91IGNhbiBwcm9jZWVkIHdpdGggc2hhcmluZyB0aGUgbGluayBvbmxpbmVcbiAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctM1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbG9ycFwiPlJlcG9ydCBhIGZyYXVkPC9oMz5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxuICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbD5OYW1lPC9sYWJlbD4gKi99XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWw+RW1haWw8L2xhYmVsPiAqL31cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxuICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbD48L2xhYmVsPiAqL31cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mgd2lkdGhCdG5cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJOYXZIZWFkZXIiLCJQcm9maWxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsInVybCIsInNldEltYWdlVXJsIiwiZm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==