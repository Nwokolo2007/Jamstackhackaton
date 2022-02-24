"use strict";
(() => {
var exports = {};
exports.id = "pages/api/uploadForm";
exports.ids = ["pages/api/uploadForm"];
exports.modules = {

/***/ "./pages/api/uploadForm.js":
/*!*********************************!*\
  !*** ./pages/api/uploadForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ "form-data");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  var formData = new (form_data__WEBPACK_IMPORTED_MODULE_0___default())();

  try {
    console.log(JSON.stringify(req.body));
    Object.entries(req.body).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = await fetch('https://getform.io/f/6673e6dc-f6ac-45b3-a9f9-faadc97c3770', {
      method: 'post',
      body: formData
    });
    return res.json(response);
    ;
  } catch (error) {} finally {}

  ;
});

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("form-data");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/uploadForm.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VwbG9hZEZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUlDLFFBQVEsR0FBRyxJQUFJSCxrREFBSixFQUFmOztBQUNBLE1BQUk7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixHQUFHLENBQUNPLElBQW5CLENBQVo7QUFFQUMsSUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVULEdBQUcsQ0FBQ08sSUFBbkIsRUFBeUJHLE9BQXpCLENBQWlDLENBQUMsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLENBQUQsS0FBa0I7QUFFL0NWLE1BQUFBLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQkYsR0FBaEIsRUFBcUJDLEtBQXJCO0FBQ0QsS0FISDtBQUlBLFVBQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsMkRBQUQsRUFBOEQ7QUFDeEZDLE1BQUFBLE1BQU0sRUFBRSxNQURnRjtBQUV4RlQsTUFBQUEsSUFBSSxFQUFFTDtBQUZrRixLQUE5RCxDQUE1QjtBQUtBLFdBQU9ELEdBQUcsQ0FBQ2dCLElBQUosQ0FBU0gsUUFBVCxDQUFQO0FBQTBCO0FBQzNCLEdBYkgsQ0FhSSxPQUFPSSxLQUFQLEVBQWMsQ0FHZixDQWhCSCxTQWdCWSxDQUVSOztBQUFBO0FBRVAsQ0F0QkQ7Ozs7Ozs7Ozs7QUNIQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdGhvbi8uL3BhZ2VzL2FwaS91cGxvYWRGb3JtLmpzIiwid2VicGFjazovL2hhY2thdGhvbi9leHRlcm5hbCBcImZvcm0tZGF0YVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpKVxyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhyZXEuYm9keSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2dldGZvcm0uaW8vZi82NjczZTZkYy1mNmFjLTQ1YjMtYTlmOS1mYWFkYzk3YzM3NzAnLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihyZXNwb25zZSk7O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgIFxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgfTtcclxuICAgIFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtLWRhdGFcIik7Il0sIm5hbWVzIjpbIkZvcm1EYXRhIiwicmVxIiwicmVzIiwiZm9ybURhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvZHkiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=