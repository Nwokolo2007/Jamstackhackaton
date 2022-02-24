"use strict";
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ contact; }
/* harmony export */ });
/* harmony import */ var C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/images/uploadButton */ "./Components/images/uploadButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\contact.js",
    _s2 = $RefreshSig$();







function contact() {
  _s2();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      target = _useState4[0],
      setTarget = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      url = _useState5[0],
      setImageUrl = _useState5[1];

  var formSubmit = /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = (0,C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(_s( /*#__PURE__*/C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var res, _yield$res$json, error;

      return C_PersonalProjects_ReactProject_HackMamba_hackathon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              e.preventDefault(); //let isValidForm = handleValidation();

              _context.next = 4;
              return fetch("/api/uploadForm", {
                body: JSON.stringify({
                  email: email,
                  name: name,
                  message: message,
                  target: target,
                  url: url
                }),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST"
              });

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              _yield$res$json = _context.sent;
              error = _yield$res$json.error;

              if (!error) {
                _context.next = 12;
                break;
              }

              console.log(error);
              return _context.abrupt("return");

            case 12:
              (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
                var pathname = (next_router__WEBPACK_IMPORTED_MODULE_4___default().pathname);

                if (pathname == '/contact') {
                  next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/sharePage');
                }
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "OD7bBpZva5O2jO+Puf00hKivP7c="));

    return function formSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    "class": "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      "class": "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        "class": "col-lg-3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        "class": "col-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
          "class": "colorp",
          children: "Set up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
          onSubmit: formSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              type: "number",
              name: "target",
              required: true,
              placeholder: "target amount",
              className: "form-control",
              value: target,
              onChange: function onChange(e) {
                return setTarget(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
              lineNumber: 75,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
              lineNumber: 90,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("textarea", {
              type: "text",
              name: "message",
              required: true,
              placeholder: "Tell your story here",
              className: "form-control",
              value: message,
              onChange: function onChange(e) {
                return setMessage(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {
              email: email,
              setImageUrl: setImageUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            "class": "btn btn-success",
            type: "submit",
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s2(contact, "Py+BGwJZgyGCmlK6LkFotzgi2GQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC40MzI5YTEyN2IxMDcyZDhhMGMwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR2UsU0FBU00sT0FBVCxHQUFtQjtBQUFBOztBQUVoQyxrQkFBd0JILCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9JLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUEwQkwsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT00sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFPUSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QlQsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT1UsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsbUJBQXlCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQSxNQUFNWSxHQUFOO0FBQUEsTUFBVUMsV0FBVjs7QUFHQSxNQUFNQyxVQUFVO0FBQUE7O0FBQUEsNFRBQUksaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNsQkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRGtCLENBSWxCOztBQUprQjtBQUFBLHFCQU9FQyxLQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDekNDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CZCxrQkFBQUEsS0FBSyxFQUFFQSxLQURZO0FBRW5CRixrQkFBQUEsSUFBSSxFQUFFQSxJQUZhO0FBR25CSSxrQkFBQUEsT0FBTyxFQUFFQSxPQUhVO0FBSW5CRSxrQkFBQUEsTUFBTSxFQUFDQSxNQUpZO0FBS25CRSxrQkFBQUEsR0FBRyxFQUFDQTtBQUxlLGlCQUFmLENBRG1DO0FBUXpDUyxnQkFB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TUUsbUJBQUssRUFBSU0sT0FOWDtBQU9FLHNCQUFRLEVBQUUsa0JBQUFPLENBQUM7QUFBQSx1QkFBSU4sVUFBVSxDQUFDTSxDQUFDLENBQUNMLE1BQUYsQ0FBU3FCLEtBQVYsQ0FBZDtBQUFBO0FBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUNGLGVBc0RFO0FBQUsscUJBQVMsRUFBRTdCLHVFQUFoQjtBQUFBLG1DQUNFLDhEQUFDLHlFQUFEO0FBQWMsbUJBQUssRUFBSUksS0FBdkI7QUFBOEIseUJBQVcsRUFBSU87QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdERGLGVBeURFO0FBQVEscUJBQU0saUJBQWQ7QUFBZ0MsZ0JBQUksRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDs7SUFuSHVCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBVcGxvYWRCdXR0b24gfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9pbWFnZXMvdXBsb2FkQnV0dG9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xyXG5cclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIFxyXG4gIGNvbnN0W3VybCxzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gIGNvbnN0IGZvcm1TdWJtaXQgID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgLy9sZXQgaXNWYWxpZEZvcm0gPSBoYW5kbGVWYWxpZGF0aW9uKCk7XHJcblxyXG4gICAgIFxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXBsb2FkRm9ybVwiLCB7XHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICB0YXJnZXQ6dGFyZ2V0LFxyXG4gICAgICAgICAgdXJsOnVybCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7cGF0aG5hbWV9ID0gUm91dGVyXHJcbiAgICAgICAgaWYocGF0aG5hbWUgPT0gJy9jb250YWN0JyApe1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NoYXJlUGFnZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1hcmdpblRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjb2xvcnBcIj5TZXQgdXA8L2gzPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFyZ2V0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRhcmdldCBhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3RhcmdldH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0VGFyZ2V0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7bmFtZX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+RW1haWw8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+PC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHlvdXIgc3RvcnkgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgPFVwbG9hZEJ1dHRvbiBlbWFpbCA9IHtlbWFpbH0gc2V0SW1hZ2VVcmwgPSB7c2V0SW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJVcGxvYWRCdXR0b24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwic3R5bGVzIiwiY29udGFjdCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidGFyZ2V0Iiwic2V0VGFyZ2V0IiwidXJsIiwic2V0SW1hZ2VVcmwiLCJmb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJyZXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJwdXNoIiwibWFyZ2luIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9