(() => {
var exports = {};
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./Components/images/uploadButton.js":
/*!*******************************************!*\
  !*** ./Components/images/uploadButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadButton": () => (/* binding */ UploadButton)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\Components\\images\\uploadButton.js";

function UploadButton({
  email,
  setImageUrl
}) {
  const onChange = async event => {
    event.preventDefault();
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('inputFile', file);
    formData.append('email', email);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setImageUrl(data.secure_url);
    } catch (error) {
      console.log("Error", error); //return res.json(error);
    } finally {//
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    class: "form-control",
    type: "file",
    onChange: onChange
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }, this);
}

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/images/uploadButton */ "./Components/images/uploadButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\contact.js";





function contact() {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: target,
    1: setTarget
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: url,
    1: setImageUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const formSubmit = async e => {
    e.preventDefault(); //let isValidForm = handleValidation();

    const res = await fetch("/api/uploadForm", {
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
    const {
      error
    } = await res.json();

    if (error) {
      console.log(error);
      return;
    }

    const {
      pathname
    } = (next_router__WEBPACK_IMPORTED_MODULE_2___default());

    if (pathname == '/contact') {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push({
        pathname: '/sharePage',
        query: {
          email: email
        }
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    class: "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      class: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "col-lg-3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "col-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          class: "colorp",
          children: "Set up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
          onSubmit: formSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "number",
              name: "target",
              required: true,
              placeholder: "target amount",
              className: "form-control",
              value: target,
              onChange: e => setTarget(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "text",
              name: "name",
              required: true,
              placeholder: "Name",
              className: "form-control",
              value: name,
              onChange: e => setName(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "email",
              name: "email",
              required: true,
              placeholder: "Email",
              className: "form-control",
              value: email,
              onChange: e => setEmail(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", {
              type: "text",
              name: "message",
              required: true,
              placeholder: "Tell your story here",
              className: "form-control",
              value: message,
              onChange: e => setMessage(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_0__.UploadButton, {
              email: email,
              setImageUrl: setImageUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            class: "btn btn-success",
            type: "submit",
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"createFund": "Home_createFund__2ivEY",
	"profile": "Home_profile__1zJoD",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"margin": "Home_margin__2fyVt",
	"colorp": "Home_colorp__2WQdm"
};


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/contact.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRERixlQXlERTtBQUFRLGlCQUFLLEVBQUMsaUJBQWQ7QUFBZ0MsZ0JBQUksRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDs7Ozs7Ozs7OztBQzVIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vQ29tcG9uZW50cy9pbWFnZXMvdXBsb2FkQnV0dG9uLmpzIiwid2VicGFjazovL2hhY2thdGhvbi8uL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9oYWNrYXRob24vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2hhY2thdGhvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaGFja2F0aG9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFVwbG9hZEJ1dHRvbih7ZW1haWwsc2V0SW1hZ2VVcmx9KSB7XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW5wdXRGaWxlJywgZmlsZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsZW1haWwpXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VwbG9hZCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgc2V0SW1hZ2VVcmwoZGF0YS5zZWN1cmVfdXJsKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgLy9yZXR1cm4gcmVzLmpzb24oZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICBcclxuICBcclxuICAgIHJldHVybiAoPGlucHV0IGNsYXNzID1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcclxuICB9XHJcbiAgIiwiXHJcbmltcG9ydCB7IFVwbG9hZEJ1dHRvbiB9IGZyb20gXCIuLi9Db21wb25lbnRzL2ltYWdlcy91cGxvYWRCdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCAsdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcblxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgY29uc3RbdXJsLHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCAgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAvL2xldCBpc1ZhbGlkRm9ybSA9IGhhbmRsZVZhbGlkYXRpb24oKTtcclxuXHJcbiAgICAgXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGxvYWRGb3JtXCIsIHtcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgIHRhcmdldDp0YXJnZXQsXHJcbiAgICAgICAgICB1cmw6dXJsLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7cGF0aG5hbWV9ID0gUm91dGVyXHJcbiAgICBpZihwYXRobmFtZSA9PSAnL2NvbnRhY3QnICl7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe3BhdGhuYW1lOicvc2hhcmVQYWdlJyxxdWVyeTp7ZW1haWw6ZW1haWx9fSlcclxuICAgIH1cclxuXHJcbiAgICAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1hcmdpblRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjb2xvcnBcIj5TZXQgdXA8L2gzPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFyZ2V0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRhcmdldCBhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3RhcmdldH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0VGFyZ2V0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+TmFtZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7bmFtZX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+RW1haWw8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWw+PC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHlvdXIgc3RvcnkgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgPFVwbG9hZEJ1dHRvbiBlbWFpbCA9IHtlbWFpbH0gc2V0SW1hZ2VVcmwgPSB7c2V0SW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY3JlYXRlRnVuZFwiOiBcIkhvbWVfY3JlYXRlRnVuZF9fMml2RVlcIixcblx0XCJwcm9maWxlXCI6IFwiSG9tZV9wcm9maWxlX18xekpvRFwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJtYXJnaW5cIjogXCJIb21lX21hcmdpbl9fMmZ5VnRcIixcblx0XCJjb2xvcnBcIjogXCJIb21lX2NvbG9ycF9fMldRZG1cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiVXBsb2FkQnV0dG9uIiwiZW1haWwiLCJzZXRJbWFnZVVybCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwic2VjdXJlX3VybCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJzdHlsZXMiLCJjb250YWN0IiwibmFtZSIsInNldE5hbWUiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V0VGFyZ2V0IiwidXJsIiwiZm9ybVN1Ym1pdCIsImUiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInBhdGhuYW1lIiwicHVzaCIsInF1ZXJ5IiwibWFyZ2luIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9