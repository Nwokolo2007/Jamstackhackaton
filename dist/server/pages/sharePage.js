(() => {
var exports = {};
exports.id = "pages/sharePage";
exports.ids = ["pages/sharePage"];
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

/***/ "./pages/sharePage.js":
/*!****************************!*\
  !*** ./pages/sharePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sharePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_images_uploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/images/uploadButton */ "./Components/images/uploadButton.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\PersonalProjects\\ReactProject\\HackMamba\\hackathon\\pages\\sharePage.js";






function sharePage() {
  ;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    email
  } = router.query;
  console.log(email);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    class: "container marginTop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      class: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        class: "col-lg-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().margin),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              name: "target",
              required: true,
              readOnly: true,
              className: "form-control",
              value: encodeURI(`http://localhost:3000/paymentPage?email=${email}`)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          class: "btn btn-success",
          href: `https://facebook.com/sharer/sharer.php?u=${encodeURI(`http://localhost:3000/paymentPage?email=${email}`)}`,
          children: "Share on Facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@auth0/nextjs-auth0");

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
var __webpack_exports__ = (__webpack_exec__("./pages/sharePage.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXRob24vLi9Db21wb25lbnRzL2ltYWdlcy91cGxvYWRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vcGFnZXMvc2hhcmVQYWdlLmpzIiwid2VicGFjazovL2hhY2thdGhvbi8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vaGFja2F0aG9uL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovL2hhY2thdGhvbi9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaGFja2F0aG9uL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9oYWNrYXRob24vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gVXBsb2FkQnV0dG9uKHtlbWFpbCxzZXRJbWFnZVVybH0pIHtcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbnB1dEZpbGUnLCBmaWxlKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJyxlbWFpbClcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXBsb2FkJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBzZXRJbWFnZVVybChkYXRhLnNlY3VyZV91cmwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgICAvL3JldHVybiByZXMuanNvbihlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgIFxyXG4gIFxyXG4gICAgcmV0dXJuICg8aW5wdXQgY2xhc3MgPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxyXG4gIH1cclxuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI7XHJcbmltcG9ydCB7IFVwbG9hZEJ1dHRvbiB9IGZyb20gXCIuLi9Db21wb25lbnRzL2ltYWdlcy91cGxvYWRCdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhcmVQYWdlKCkgeztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7ZW1haWx9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbWFyZ2luVG9wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbD5OYW1lPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFyZ2V0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2VuY29kZVVSSShgaHR0cDovL2xvY2FsaG9zdDozMDAwL3BheW1lbnRQYWdlP2VtYWlsPSR7ZW1haWx9YCl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGEgY2xhc3MgPSBcImJ0biBidG4tc3VjY2Vzc1wiIGhyZWY9e2BodHRwczovL2ZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7ZW5jb2RlVVJJKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcGF5bWVudFBhZ2U/ZW1haWw9JHtlbWFpbH1gKX1gfT5TaGFyZSBvbiBGYWNlYm9vazwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY3JlYXRlRnVuZFwiOiBcIkhvbWVfY3JlYXRlRnVuZF9fMml2RVlcIixcblx0XCJwcm9maWxlXCI6IFwiSG9tZV9wcm9maWxlX18xekpvRFwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJtYXJnaW5cIjogXCJIb21lX21hcmdpbl9fMmZ5VnRcIixcblx0XCJjb2xvcnBcIjogXCJIb21lX2NvbG9ycF9fMldRZG1cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJVcGxvYWRCdXR0b24iLCJlbWFpbCIsInNldEltYWdlVXJsIiwib25DaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJzZWN1cmVfdXJsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJzaGFyZVBhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsIm1hcmdpbiIsImVuY29kZVVSSSJdLCJzb3VyY2VSb290IjoiIn0=