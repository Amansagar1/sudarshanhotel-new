"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/rooms/[id]/page",{

/***/ "(app-pages-browser)/./src/Webservices/APIEndpoints.js":
/*!*****************************************!*\
  !*** ./src/Webservices/APIEndpoints.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const BASE_URL = \"http://localhost:5000\";\n// const BASE_URL = \"\"\nconst EndPoints = {\n    GET_ROOMS: ()=>'http://46.202.162.229:5000\"/api/rooms',\n    GET_ROOMSDETAILS: ()=>\"http://localhost:5000/api/roomdetails\",\n    BOOKING_ROOMS: ()=>\"http://localhost:5000/api/book\",\n    POST_ROOMS: ()=>\"http://localhost:5000/api/rooms\",\n    GET_ROOMID: (_id)=>\"http://localhost:5000/api/rooms/:\".concat(_id, \" \")\n};\nObject.freeze(EndPoints);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndPoints);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9XZWJzZXJ2aWNlcy9BUElFbmRwb2ludHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDRDQUE0QztBQUc1QyxzQkFBc0I7QUFHdEIsTUFBTUEsWUFBWTtJQUNkQyxXQUFXLElBQ1Q7SUFFRkMsa0JBQWtCLElBQ2pCO0lBRURDLGVBQWUsSUFBTztJQUUxQkMsWUFBYSxJQUFPO0lBRXBCQyxZQUFZLENBQUNDLE1BQVEsb0NBQXdDLE9BQUpBLEtBQUk7QUFFN0Q7QUFFQUMsT0FBT0MsTUFBTSxDQUFDUjtBQUVkLGlFQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJEOlxccHJpdmF0ZSB3b3JrXFxzdWRhcnNoYW5ob3RlbC1uZXdcXHNyY1xcV2Vic2VydmljZXNcXEFQSUVuZHBvaW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiO1xyXG5cclxuXHJcbi8vIGNvbnN0IEJBU0VfVVJMID0gXCJcIlxyXG5cclxuXHJcbmNvbnN0IEVuZFBvaW50cyA9IHtcclxuICAgIEdFVF9ST09NUzogKCkgPT5cclxuICAgICBgaHR0cDovLzQ2LjIwMi4xNjIuMjI5OjUwMDBcIi9hcGkvcm9vbXNgLFxyXG5cclxuICAgIEdFVF9ST09NU0RFVEFJTFM6ICgpID0+XHJcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9yb29tZGV0YWlsc2AsXHJcblxyXG4gICAgQk9PS0lOR19ST09NUzogKCkgPT4gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvYm9va2AsXHJcblxyXG5QT1NUX1JPT01TIDogKCkgPT4gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcm9vbXNgLFxyXG5cclxuR0VUX1JPT01JRDogKF9pZCkgPT4gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcm9vbXMvOiR7X2lkfSBgLFxyXG5cclxufTtcclxuXHJcbk9iamVjdC5mcmVlemUoRW5kUG9pbnRzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVuZFBvaW50cztcclxuIl0sIm5hbWVzIjpbIkVuZFBvaW50cyIsIkdFVF9ST09NUyIsIkdFVF9ST09NU0RFVEFJTFMiLCJCT09LSU5HX1JPT01TIiwiUE9TVF9ST09NUyIsIkdFVF9ST09NSUQiLCJfaWQiLCJPYmplY3QiLCJmcmVlemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Webservices/APIEndpoints.js\n"));

/***/ })

});