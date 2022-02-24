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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/images/uploadButton */ "./Components/images/uploadButton.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\contact.js",
    _s = $RefreshSig$();







function contact() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      target = _useState4[0],
      setTarget = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
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
                  target: target,
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    "class": "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      "class": "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        "class": "col-lg-3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        "class": "col-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
          "class": "colorp",
          children: "Set up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: formSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
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
              lineNumber: 74,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
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
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
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
              lineNumber: 102,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
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
              lineNumber: 115,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_3__.UploadButton, {
              email: email,
              setImageUrl: setImageUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            "class": "btn btn-success",
            type: "submit",
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        "class": "col-lg-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(FacebookShareCount, {
          url: "url"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(contact, "Py+BGwJZgyGCmlK6LkFotzgi2GQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5mMTkxNWZlZGJkZjhmNGM1MWY3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQXVCZSxTQUFTdUIsT0FBVCxHQUFtQjtBQUFBOztBQUVoQyxrQkFBd0J0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPdUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTBCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT3lCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE4QjFCLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU8yQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QjVCLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU82QixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxtQkFBeUI5QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQSxNQUFNK0IsR0FBTjtBQUFBLE1BQVVDLFdBQVY7O0FBR0EsTUFBTUMsVUFBVTtBQUFBLHlUQUFJLGlCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURrQixDQUlsQjs7QUFKa0I7QUFBQSxxQkFPRUMsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQ3pDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQmQsa0JBQUFBLEtBQUssRUFBRUEsS0FEWTtBQUVuQkYsa0JBQUFBLElBQUksRUFBRUEsSUFGYTtBQUduQkksa0JBQUFBLE9BQU8sRUFBRUEsT0FIVTtBQUluQkUsa0JBQUFBLE1BQU0sRUFBQ0EsTUFKWTtBQUtuQkUsa0JBQUFBLEdBQUcsRUFBQ0E7QUFMZSxpQkFBZixDQURtQztBQVF6Q1MsZ0JBQUFB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QUFBLGtCQTFDRixlQXNERTtBQUFLLHFCQUFTLEVBQUU5Qyx1RUFBaEI7QUFBQSxtQ0FDRSw4REFBQyx5RUFBRDtBQUFjLG1CQUFLLEVBQUl1QixLQUF2QjtBQUE4Qix5QkFBVyxFQUFJTztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0REYsZUF5REU7QUFBUSxxQkFBTSxpQkFBZDtBQUFnQyxnQkFBSSxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFrRUU7QUFBSyxpQkFBTSxVQUFYO0FBQUEsK0JBQ0EsOERBQUMsa0JBQUQ7QUFBb0IsYUFBRyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRFRDs7R0FqSHVCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVcGxvYWRCdXR0b24gfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9pbWFnZXMvdXBsb2FkQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgRW1haWxTaGFyZUJ1dHRvbixcclxuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxyXG4gIEhhdGVuYVNoYXJlQnV0dG9uLFxyXG4gIEluc3RhcGFwZXJTaGFyZUJ1dHRvbixcclxuICBMaW5lU2hhcmVCdXR0b24sXHJcbiAgTGlua2VkaW5TaGFyZUJ1dHRvbixcclxuICBMaXZlam91cm5hbFNoYXJlQnV0dG9uLFxyXG4gIE1haWxydVNoYXJlQnV0dG9uLFxyXG4gIE9LU2hhcmVCdXR0b24sXHJcbiAgUGludGVyZXN0U2hhcmVCdXR0b24sXHJcbiAgUG9ja2V0U2hhcmVCdXR0b24sXHJcbiAgUmVkZGl0U2hhcmVCdXR0b24sXHJcbiAgVGVsZWdyYW1TaGFyZUJ1dHRvbixcclxuICBUdW1ibHJTaGFyZUJ1dHRvbixcclxuICBUd2l0dGVyU2hhcmVCdXR0b24sXHJcbiAgVmliZXJTaGFyZUJ1dHRvbixcclxuICBWS1NoYXJlQnV0dG9uLFxyXG4gIFdoYXRzYXBwU2hhcmVCdXR0b24sXHJcbiAgV29ya3BsYWNlU2hhcmVCdXR0b25cclxufSBmcm9tICdyZWFjdC1zaGFyZScgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcclxuXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBcclxuICBjb25zdFt1cmwsc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICBjb25zdCBmb3JtU3VibWl0ICA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgIC8vbGV0IGlzVmFsaWRGb3JtID0gaGFuZGxlVmFsaWRhdGlvbigpO1xyXG5cclxuICAgICBcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VwbG9hZEZvcm1cIiwge1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgdGFyZ2V0OnRhcmdldCxcclxuICAgICAgICAgIHVybDp1cmwsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1hcmdpblRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjb2xvcnBcIj5TZXQgdXA8L2gzPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFyZ2V0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRhcmdldCBhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3RhcmdldH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0VGFyZ2V0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7bmFtZX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+RW1haWw8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+PC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHlvdXIgc3RvcnkgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgPFVwbG9hZEJ1dHRvbiBlbWFpbCA9IHtlbWFpbH0gc2V0SW1hZ2VVcmwgPSB7c2V0SW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTNcIj5cclxuICAgICAgICA8RmFjZWJvb2tTaGFyZUNvdW50IHVybD1cInVybFwiPlxyXG5cclxuPC9GYWNlYm9va1NoYXJlQ291bnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlVwbG9hZEJ1dHRvbiIsInN0eWxlcyIsIkVtYWlsU2hhcmVCdXR0b24iLCJGYWNlYm9va1NoYXJlQnV0dG9uIiwiSGF0ZW5hU2hhcmVCdXR0b24iLCJJbnN0YXBhcGVyU2hhcmVCdXR0b24iLCJMaW5lU2hhcmVCdXR0b24iLCJMaW5rZWRpblNoYXJlQnV0dG9uIiwiTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbiIsIk1haWxydVNoYXJlQnV0dG9uIiwiT0tTaGFyZUJ1dHRvbiIsIlBpbnRlcmVzdFNoYXJlQnV0dG9uIiwiUG9ja2V0U2hhcmVCdXR0b24iLCJSZWRkaXRTaGFyZUJ1dHRvbiIsIlRlbGVncmFtU2hhcmVCdXR0b24iLCJUdW1ibHJTaGFyZUJ1dHRvbiIsIlR3aXR0ZXJTaGFyZUJ1dHRvbiIsIlZpYmVyU2hhcmVCdXR0b24iLCJWS1NoYXJlQnV0dG9uIiwiV2hhdHNhcHBTaGFyZUJ1dHRvbiIsIldvcmtwbGFjZVNoYXJlQnV0dG9uIiwiY29udGFjdCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidGFyZ2V0Iiwic2V0VGFyZ2V0IiwidXJsIiwic2V0SW1hZ2VVcmwiLCJmb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJyZXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9