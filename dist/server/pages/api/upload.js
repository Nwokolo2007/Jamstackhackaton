"use strict";
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ "cloudinary");
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ "formidable");
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__);



cloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({
  cloud_name: "flabeblast",
  api_key: "643527445346692",
  api_secret: "VM-pnn7X58fVNwUbFGVE8_BCydo"
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  var _data$files;

  const data = await new Promise((resolve, reject) => {
    const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({
        fields,
        files
      });
    });
  });
  const file = data === null || data === void 0 ? void 0 : (_data$files = data.files) === null || _data$files === void 0 ? void 0 : _data$files.inputFile.path;
  const email = data === null || data === void 0 ? void 0 : data.fields.email;
  const response = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.upload(file, {
    resource_type: 'image',
    public_id: email
  });
  return res.json(response);
});

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VwbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsd0RBQUEsQ0FBa0I7QUFDaEJJLEVBQUFBLFVBQVUsRUFBRSxZQURJO0FBRWhCQyxFQUFBQSxPQUFPLEVBQUUsaUJBRk87QUFHaEJDLEVBQUFBLFVBQVUsRUFBRTtBQUhJLENBQWxCO0FBTU8sTUFBTUgsTUFBTSxHQUFHO0FBQ3BCSSxFQUFBQSxHQUFHLEVBQUU7QUFDSEMsSUFBQUEsVUFBVSxFQUFFO0FBRFQ7QUFEZSxDQUFmO0FBTVAsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQUE7O0FBQy9CLFFBQU1DLElBQUksR0FBRyxNQUFNLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDbEQsVUFBTUMsSUFBSSxHQUFHLElBQUlkLG9EQUFKLEVBQWI7QUFFQWMsSUFBQUEsSUFBSSxDQUFDQyxLQUFMLENBQVdQLEdBQVgsRUFBZ0IsQ0FBQ1EsR0FBRCxFQUFNQyxNQUFOLEVBQWNDLEtBQWQsS0FBd0I7QUFDdEMsVUFBSUYsR0FBSixFQUFTLE9BQU9ILE1BQU0sQ0FBQ0csR0FBRCxDQUFiO0FBQ1RKLE1BQUFBLE9BQU8sQ0FBQztBQUFFSyxRQUFBQSxNQUFGO0FBQVVDLFFBQUFBO0FBQVYsT0FBRCxDQUFQO0FBQ0QsS0FIRDtBQUlELEdBUGtCLENBQW5CO0FBUUEsUUFBTUMsSUFBSSxHQUFHVCxJQUFILGFBQUdBLElBQUgsc0NBQUdBLElBQUksQ0FBRVEsS0FBVCxnREFBRyxZQUFhRSxTQUFiLENBQXVCQyxJQUFwQztBQUNBLFFBQU1DLEtBQUssR0FBR1osSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVPLE1BQU4sQ0FBYUssS0FBM0I7QUFFRixRQUFNQyxRQUFRLEdBQUcsTUFBTXhCLG9FQUFBLENBQThCb0IsSUFBOUIsRUFBb0M7QUFDekRRLElBQUFBLGFBQWEsRUFBRSxPQUQwQztBQUV6REMsSUFBQUEsU0FBUyxFQUFDTjtBQUYrQyxHQUFwQyxDQUF2QjtBQUlBLFNBQU9iLEdBQUcsQ0FBQ29CLElBQUosQ0FBU04sUUFBVCxDQUFQO0FBQ0QsQ0FqQkQ7Ozs7Ozs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLy4vcGFnZXMvYXBpL3VwbG9hZC5qcyIsIndlYnBhY2s6Ly9oYWNrYXRob24vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vaGFja2F0aG9uL2V4dGVybmFsIFwiY2xvdWRpbmFyeVwiIiwid2VicGFjazovL2hhY2thdGhvbi9leHRlcm5hbCBcImZvcm1pZGFibGVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvdWRpbmFyeSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xyXG5pbXBvcnQgeyBJbmNvbWluZ0Zvcm0gfSBmcm9tIFwiZm9ybWlkYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcblxyXG5jbG91ZGluYXJ5LmNvbmZpZyh7XHJcbiAgY2xvdWRfbmFtZTogXCJmbGFiZWJsYXN0XCIsXHJcbiAgYXBpX2tleTogXCI2NDM1Mjc0NDUzNDY2OTJcIixcclxuICBhcGlfc2VjcmV0OiBcIlZNLXBubjdYNThmVk53VWJGR1ZFOF9CQ3lkb1wiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBmb3JtID0gbmV3IEluY29taW5nRm9ybSgpO1xyXG5cclxuICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgICAgcmVzb2x2ZSh7IGZpZWxkcywgZmlsZXMgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmaWxlID0gZGF0YT8uZmlsZXM/LmlucHV0RmlsZS5wYXRoO1xyXG4gICAgY29uc3QgZW1haWwgPSBkYXRhPy5maWVsZHMuZW1haWw7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci51cGxvYWQoZmlsZSwge1xyXG4gICAgcmVzb3VyY2VfdHlwZTogJ2ltYWdlJyxcclxuICAgIHB1YmxpY19pZDplbWFpbFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXMuanNvbihyZXNwb25zZSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xvdWRpbmFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWRhYmxlXCIpOyJdLCJuYW1lcyI6WyJjbG91ZGluYXJ5IiwiSW5jb21pbmdGb3JtIiwidXNlVXNlciIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJhcGlfa2V5IiwiYXBpX3NlY3JldCIsImFwaSIsImJvZHlQYXJzZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImZpbGUiLCJpbnB1dEZpbGUiLCJwYXRoIiwiZW1haWwiLCJyZXNwb25zZSIsInYyIiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJyZXNvdXJjZV90eXBlIiwicHVibGljX2lkIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=