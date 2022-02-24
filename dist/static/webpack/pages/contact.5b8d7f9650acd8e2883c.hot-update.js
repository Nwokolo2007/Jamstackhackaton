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

  var _this = this;

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
          url: shareUrl,
          children: function children(shareCount) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "myShareCountWrapper",
              children: shareCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 18
            }, _this);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC41YjhkN2Y5NjUwYWNkOGUyODgzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQXVCZSxTQUFTdUIsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUVoQyxrQkFBd0J0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPdUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTBCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT3lCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE4QjFCLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU8yQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QjVCLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU82QixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxtQkFBeUI5QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQSxNQUFNK0IsR0FBTjtBQUFBLE1BQVVDLFdBQVY7O0FBR0EsTUFBTUMsVUFBVTtBQUFBLHlUQUFJLGlCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURrQixDQUlsQjs7QUFKa0I7QUFBQSxxQkFPRUMsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQ3pDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQmQsa0JBQUFBLEtBQUssRUFBRUEsS0FEWTtBQUVuQkYsa0JBQUFBLElBQUksRUFBRUEsSUFGYTtBQUduQkksa0JBQUFBLE9BQU8sRUFBRUEsT0FIVTtBQUluQkUsa0JBQUFBLE1BQU0sRUFBQ0EsTUFKWTtBQUtuQkUsa0JBQUFBLEdBQUcsRUFBQ0E7QUFMZSxpQkFBZixDQURtQztBQVF6Q1Ms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QUFBQTtBQUFBLGtCQTFDRixlQXNERTtBQUFLLHFCQUFTLEVBQUU5Qyx1RUFBaEI7QUFBQSxtQ0FDRSw4REFBQyx5RUFBRDtBQUFjLG1CQUFLLEVBQUl1QixLQUF2QjtBQUE4Qix5QkFBVyxFQUFJTztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0REYsZUF5REU7QUFBUSxxQkFBTSxpQkFBZDtBQUFnQyxnQkFBSSxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFrRUU7QUFBSyxpQkFBTSxVQUFYO0FBQUEsK0JBQ0EsOERBQUMsa0JBQUQ7QUFBb0IsYUFBRyxFQUFFaUIsUUFBekI7QUFBQSxvQkFDTCxrQkFBQUMsVUFBVTtBQUFBLGdDQUFJO0FBQU0sdUJBQVMsRUFBQyxxQkFBaEI7QUFBQSx3QkFBdUNBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUo7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRFRDs7R0FqSHVCNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXBsb2FkQnV0dG9uIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvaW1hZ2VzL3VwbG9hZEJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIEVtYWlsU2hhcmVCdXR0b24sXHJcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcclxuICBIYXRlbmFTaGFyZUJ1dHRvbixcclxuICBJbnN0YXBhcGVyU2hhcmVCdXR0b24sXHJcbiAgTGluZVNoYXJlQnV0dG9uLFxyXG4gIExpbmtlZGluU2hhcmVCdXR0b24sXHJcbiAgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbixcclxuICBNYWlscnVTaGFyZUJ1dHRvbixcclxuICBPS1NoYXJlQnV0dG9uLFxyXG4gIFBpbnRlcmVzdFNoYXJlQnV0dG9uLFxyXG4gIFBvY2tldFNoYXJlQnV0dG9uLFxyXG4gIFJlZGRpdFNoYXJlQnV0dG9uLFxyXG4gIFRlbGVncmFtU2hhcmVCdXR0b24sXHJcbiAgVHVtYmxyU2hhcmVCdXR0b24sXHJcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gIFZpYmVyU2hhcmVCdXR0b24sXHJcbiAgVktTaGFyZUJ1dHRvbixcclxuICBXaGF0c2FwcFNoYXJlQnV0dG9uLFxyXG4gIFdvcmtwbGFjZVNoYXJlQnV0dG9uXHJcbn0gZnJvbSAncmVhY3Qtc2hhcmUnIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcblxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgY29uc3RbdXJsLHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCAgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAvL2xldCBpc1ZhbGlkRm9ybSA9IGhhbmRsZVZhbGlkYXRpb24oKTtcclxuXHJcbiAgICAgXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGxvYWRGb3JtXCIsIHtcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgIHRhcmdldDp0YXJnZXQsXHJcbiAgICAgICAgICB1cmw6dXJsLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtYXJnaW5Ub3BcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctM1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiY29sb3JwXCI+U2V0IHVwPC9oMz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsPk5hbWU8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRhcmdldFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0YXJnZXQgYW1vdW50XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt0YXJnZXR9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7ZSA9PnNldFRhcmdldChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsPk5hbWU8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge25hbWV9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSB7ZSA9PnNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsPkVtYWlsPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtlbWFpbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5zZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsPjwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB5b3VyIHN0b3J5IGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIDxVcGxvYWRCdXR0b24gZW1haWwgPSB7ZW1haWx9IHNldEltYWdlVXJsID0ge3NldEltYWdlVXJsfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgPEZhY2Vib29rU2hhcmVDb3VudCB1cmw9e3NoYXJlVXJsfT5cclxuICB7c2hhcmVDb3VudCA9PiA8c3BhbiBjbGFzc05hbWU9XCJteVNoYXJlQ291bnRXcmFwcGVyXCI+e3NoYXJlQ291bnR9PC9zcGFuPn1cclxuPC9GYWNlYm9va1NoYXJlQ291bnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlVwbG9hZEJ1dHRvbiIsInN0eWxlcyIsIkVtYWlsU2hhcmVCdXR0b24iLCJGYWNlYm9va1NoYXJlQnV0dG9uIiwiSGF0ZW5hU2hhcmVCdXR0b24iLCJJbnN0YXBhcGVyU2hhcmVCdXR0b24iLCJMaW5lU2hhcmVCdXR0b24iLCJMaW5rZWRpblNoYXJlQnV0dG9uIiwiTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbiIsIk1haWxydVNoYXJlQnV0dG9uIiwiT0tTaGFyZUJ1dHRvbiIsIlBpbnRlcmVzdFNoYXJlQnV0dG9uIiwiUG9ja2V0U2hhcmVCdXR0b24iLCJSZWRkaXRTaGFyZUJ1dHRvbiIsIlRlbGVncmFtU2hhcmVCdXR0b24iLCJUdW1ibHJTaGFyZUJ1dHRvbiIsIlR3aXR0ZXJTaGFyZUJ1dHRvbiIsIlZpYmVyU2hhcmVCdXR0b24iLCJWS1NoYXJlQnV0dG9uIiwiV2hhdHNhcHBTaGFyZUJ1dHRvbiIsIldvcmtwbGFjZVNoYXJlQnV0dG9uIiwiY29udGFjdCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidGFyZ2V0Iiwic2V0VGFyZ2V0IiwidXJsIiwic2V0SW1hZ2VVcmwiLCJmb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJyZXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidmFsdWUiLCJzaGFyZVVybCIsInNoYXJlQ291bnQiXSwic291cmNlUm9vdCI6IiJ9