"use strict";
self["webpackHotUpdate_N_E"]("pages/paymentPage",{

/***/ "./pages/paymentPage.js":
/*!******************************!*\
  !*** ./pages/paymentPage.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ PaymentPage; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\paymentPage.js",
    _s = $RefreshSig$();






var __N_SSP = true;
function PaymentPage(_ref) {
  _s();

  var email = _ref.email,
      target = _ref.target,
      message = _ref.message,
      name = _ref.name,
      url = _ref.url;

  function GetOrderId() {
    var currentDate = new Date();
    var orderId = currentDate.getYear().toString() + currentDate.getHours().toString() + currentDate.getMinutes().toString() + currentDate.getSeconds().toString();
    return orderId;
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      amt = _useState[0],
      setAmount = _useState[1]; //const target = 7


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    "class": "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      "class": "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        "class": "col-lg-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: url != null ? url : "/public/house5.png",
          alt: "Picture of the author",
          width: 500,
          height: 500
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        "class": "col-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
          "class": "colorp",
          children: ["Target Amount:", target]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
          action: "https://fidelitypaygate.fidelitybank.ng/CIPG/MerchantServices/MakePayment.aspx",
          method: "POST",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "number",
              name: "amt",
              id: "amt",
              required: true,
              placeholder: "amount",
              className: "form-control",
              onChange: function onChange(e) {
                return setAmount(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "text",
              name: "orderId",
              required: true,
              hidden: true,
              value: GetOrderId(),
              placeholder: "Name",
              className: "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "email",
              name: "email",
              id: "emailid",
              required: true,
              hidden: true,
              value: email,
              className: "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "text",
              name: "mercId",
              id: "mercId",
              value: "00037",
              required: true,
              hidden: true,
              placeholder: "Tell your story here",
              className: "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "text",
              name: "prod",
              id: "prodid",
              value: "naija_fund",
              required: true,
              hidden: true,
              placeholder: "Tell your story here",
              className: "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            "class": "btn btn-success widthBtn",
            type: "submit",
            children: "Donate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          "class": "col-lg-12   marginTop",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            "class": "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
} // get the url and fetch the user details

_s(PaymentPage, "+e0E7cVy0U14zbRJYMEkId+o4Rk=");

_c = PaymentPage;

var _c;

$RefreshReg$(_c, "PaymentPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF5bWVudFBhZ2UuZjc4NGYwODlkMmMxOGZhNzcxYjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNJLFdBQVQsT0FBNEQ7QUFBQTs7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87O0FBQ3pFLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsV0FBVyxHQUFHLElBQUlDLElBQUosRUFBbEI7QUFDQSxRQUFJQyxPQUFPLEdBQ1RGLFdBQVcsQ0FBQ0csT0FBWixHQUFzQkMsUUFBdEIsS0FDQUosV0FBVyxDQUFDSyxRQUFaLEdBQXVCRCxRQUF2QixFQURBLEdBRUFKLFdBQVcsQ0FBQ00sVUFBWixHQUF5QkYsUUFBekIsRUFGQSxHQUdBSixXQUFXLENBQUNPLFVBQVosR0FBeUJILFFBQXpCLEVBSkY7QUFLQSxXQUFPRixPQUFQO0FBQ0Q7O0FBRUQsa0JBQXlCViwrQ0FBUSxDQUFDLENBQUQsQ0FBakM7QUFBQSxNQUFPZ0IsR0FBUDtBQUFBLE1BQVlDLFNBQVosZ0JBWHlFLENBYXpFOzs7QUFDQSxzQkFDRTtBQUFLLGFBQU0scUJBQVg7QUFBQSwyQkFDRTtBQUFLLGVBQU0sS0FBWDtBQUFBLDhCQUNFO0FBQUssaUJBQU0sVUFBWDtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsYUFBRyxFQUFFWCxHQUFHLElBQUcsSUFBTixHQUFZQSxHQUFaLEdBQWlCLG9CQUR4QjtBQUVFLGFBQUcsRUFBQyx1QkFGTjtBQUdFLGVBQUssRUFBRSxHQUhUO0FBSUUsZ0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFB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QUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyRkQsRUFFRDs7R0EzR3dCSDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5bWVudFBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRQYWdlKHsgZW1haWwsIHRhcmdldCwgbWVzc2FnZSwgbmFtZSwgdXJsIH0pIHtcclxuICBmdW5jdGlvbiBHZXRPcmRlcklkKCkge1xyXG4gICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBvcmRlcklkID1cclxuICAgICAgY3VycmVudERhdGUuZ2V0WWVhcigpLnRvU3RyaW5nKCkgK1xyXG4gICAgICBjdXJyZW50RGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkgK1xyXG4gICAgICBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSArXHJcbiAgICAgIGN1cnJlbnREYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIG9yZGVySWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbYW10LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vY29uc3QgdGFyZ2V0ID0gN1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1hcmdpblRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXt1cmwgIT1udWxsID91cmw6IFwiL3B1YmxpYy9ob3VzZTUucG5nXCJ9XHJcbiAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgIDxoNSBjbGFzcz1cImNvbG9ycFwiPlRhcmdldCBBbW91bnQ6e3RhcmdldH08L2g1PlxyXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9maWRlbGl0eXBheWdhdGUuZmlkZWxpdHliYW5rLm5nL0NJUEcvTWVyY2hhbnRTZXJ2aWNlcy9NYWtlUGF5bWVudC5hc3B4XCIgbWV0aG9kID0gXCJQT1NUXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsPk5hbWU8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImFtdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImFtdFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZGVySWRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e0dldE9yZGVySWQoKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbD5FbWFpbDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsaWRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW1haWx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbD48L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXJjSWRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXJjSWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIwMDAzN1wiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgeW91ciBzdG9yeSBoZXJlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbD48L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kXCIgXHJcbiAgICAgICAgICAgICAgICBpZD1cInByb2RpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIm5haWphX2Z1bmRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHlvdXIgc3RvcnkgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHdpZHRoQnRuXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIERvbmF0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgICBtYXJnaW5Ub3BcIj5cclxuICAgICAgICAgICAgPGg1PntuYW1lfTwvaDU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGdldCB0aGUgdXJsIGFuZCBmZXRjaCB0aGUgdXNlciBkZXRhaWxzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIC8vXHJcblxyXG4gIGNvbnN0IGZ1bmROYW1lID0gY29udGV4dC5xdWVyeTtcclxuICBjb25zb2xlLmxvZyhmdW5kTmFtZS5lbWFpbCk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vYXBpLmdldGZvcm0uaW8vdjEvZm9ybXMvNjY3M2U2ZGMtZjZhYy00NWIzLWE5ZjktZmFhZGM5N2MzNzcwP3Rva2VuPTlOQzFvUzFSZmtsWGJDNGNjWTNOY0VPN29iN0xwR3BDdTNJYVkyZjRjQW5NT240ZXFtUVdPVGJLaGFseFwiXHJcbiAgKTsgLy8gR2V0IHRoZSB1c2VyIGRldGFpbHMgZnJvbSB0aGUgZm9ybVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgdmFyIG15RnVuZCA9IHJlc3BvbnNlLmRhdGEuc3VibWlzc2lvbnMuZmlsdGVyKFxyXG4gICAgKHgpID0+IHguZW1haWwgPT09IGZ1bmROYW1lLmVtYWlsXHJcbiAgKVswXTtcclxuXHJcbiAgY29uc29sZS5sb2coeyAuLi5teUZ1bmQgfSk7XHJcbiAgLy8gVGhlIHZhbHVlIG9mIHRoZSBgcHJvcHNgIGtleSB3aWxsIGJlXHJcbiAgLy8gIHBhc3NlZCB0byB0aGUgYEhvbWVgIGNvbXBvbmVudFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogbXlGdW5kLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInJvdXRlciIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJQYXltZW50UGFnZSIsImVtYWlsIiwidGFyZ2V0IiwibWVzc2FnZSIsIm5hbWUiLCJ1cmwiLCJHZXRPcmRlcklkIiwiY3VycmVudERhdGUiLCJEYXRlIiwib3JkZXJJZCIsImdldFllYXIiLCJ0b1N0cmluZyIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJhbXQiLCJzZXRBbW91bnQiLCJtYXJnaW4iLCJlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9