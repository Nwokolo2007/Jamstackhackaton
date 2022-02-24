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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("i", {
                "class": "fas fa-stamp"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 39
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h6", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("li", {
            "class": "list-group-item disabled",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              "class": "fas fa-cog",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h6", {
                children: "Widthrawal Policy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                children: "Please ensure your withrawal request is sent 5 business days before your expected date of cash withrawal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 18
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
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
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            "class": "col-lg-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
              "class": "colorp",
              children: "Report a fraud"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
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
                  lineNumber: 95,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
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
                  lineNumber: 107,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
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
                  lineNumber: 120,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
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
                  lineNumber: 132,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
                "class": "btn btn-success widthBtn",
                type: "submit",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            "class": "col-lg-3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWRkZTgwODhkMjRlZjM0M2M1MzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ2UsU0FBU08sSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ2xDLGtCQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT0csSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTBCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJOLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9PLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTBCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxtQkFBMkJWLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9XLEdBQVA7QUFBQSxNQUFZQyxXQUFaOztBQUVBLE1BQU1DLFVBQVU7QUFBQSx5VEFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEaUIsQ0FHakI7O0FBSGlCO0FBQUEscUJBS0NDLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUN6Q0MsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJkLGtCQUFBQSxLQUFLLEVBQUVBLEtBRFk7QUFFbkJGLGtCQUFBQSxJQUFJLEVBQUVBLElBRmE7QUFHbkJJLGtCQUFBQSxPQUFPLEVBQUVBLE9BSFU7QUFJbkJFLGtCQUFBQSxLQUFLLEVBQUVBLEtBSlk7QUFLbkJFLGtCQUFBQSxHQUFHLEVBQUVBO0FBTGMsaUJBQWYs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SyxFQUFFVyxPQU5UO0FBT0UsMEJBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLDJCQUFPTixVQUFVLENBQUNNLENBQUMsQ0FBQ2MsTUFBRixDQUFTQyxLQUFWLENBQWpCO0FBQUE7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF0Q0YsZUFrREU7QUFBUSx5QkFBTSwwQkFBZDtBQUF5QyxvQkFBSSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBMkRFO0FBQUsscUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStHRDs7R0FqSnVCNUI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdkhlYWRlciBmcm9tIFwiLi4vQ29tcG9uZW50cy9OYXYvTmF2SGVhZGVyXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Vc2VyL1Byb2ZpbGVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgW3VybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy9sZXQgaXNWYWxpZEZvcm0gPSBoYW5kbGVWYWxpZGF0aW9uKCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXBsb2FkRm9ybVwiLCB7XG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1hcmdpblRvcFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgbWItNFwiPlxuICAgICAgICAgIDxoNT5Ib3cgaXQgd29ya3M8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzIGZhLWNvZ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXN0YW1wXCI+PC9pPlxuICAgICAgICAgICAgICA8aDY+Q3JlYXRlIGFuZCBzZXQgdXAgYW4gYWNjb3VudCBvbiBOYWlqYWZ1bmRtZTwvaDY+XG4gICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgIE9uY2UgeW91ciBhY2NvdW50IGlzIGNyZWF0ZWQsIHZlcmlmeSB5b3VyIGVtYWlsIGFuZCBwcm9jZWVkIHdpdGggc2V0dGluZyB1cCBhIG5haWphZnVuZG1lIGRvbmF0aW9uXG4gICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzIGZhLWNvZ1wiPlxuICAgICAgICAgICAgICA8aDY+Q3JlYXRlIGEgZG9uYXRpb248L2g2PlxuICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW5zdXJlIGVuc3VyZSB0aGF0IHlvdSBjcmVhdGUgb25seSBvbmNlIHNpbmdsZSBkb25hdGlvbiBhdCBhIHRpbWUgYW5kIHVwbG9hZCBhbiBpbWFnZSBjb3JyZWN0bHkgZGVzY3JpYmluZyB5b3VyIHNpdHVhdGlvblxuICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhcyBmYS1jb2dcIj5cbiAgICAgICAgICAgICAgPGg2PlNoYXJlIHRoZSBkb25hdGlvbiBsaW5rIHRvIGZyaWVuZHMgb24gc29jaWFsIG1lZGlhPC9oNj5cbiAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgSW1tZWRpYXRlbHkgdGhlIGRvbmF0aW9uIGlzIGNyZWF0ZWQsIHlvdSBjYW4gcHJvY2VlZCB3aXRoIHNoYXJpbmcgdGhlIGxpbmsgb25saW5lXG4gICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzIGZhLWNvZ1wiPlxuICAgICAgICAgICAgICA8aDY+V2lkdGhyYXdhbCBQb2xpY3k8L2g2PlxuICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnN1cmUgeW91ciB3aXRocmF3YWwgcmVxdWVzdCBpcyBzZW50IDUgYnVzaW5lc3MgZGF5cyBiZWZvcmUgeW91ciBleHBlY3RlZCBkYXRlIG9mIGNhc2ggd2l0aHJhd2FsXG4gICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTNcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjb2xvcnBcIj5SZXBvcnQgYSBmcmF1ZDwvaDM+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XG4gICAgICAgICAgICAgICAgICB7LyogPGxhYmVsPk5hbWU8L2xhYmVsPiAqL31cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic3ViamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XG4gICAgICAgICAgICAgICAgICB7LyogPGxhYmVsPkVtYWlsPC9sYWJlbD4gKi99XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWw+PC9sYWJlbD4gKi99XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHdpZHRoQnRuXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctM1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiTmF2SGVhZGVyIiwiUHJvZmlsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwicHJvcHMiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJ1cmwiLCJzZXRJbWFnZVVybCIsImZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsInJlcyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=