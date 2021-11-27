/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch/polyfill */ \"cross-fetch/polyfill\");\n/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ \"./node_modules/pure-react-carousel/dist/react-carousel.es.css\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fontsource_open_sans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/open-sans */ \"./node_modules/@fontsource/open-sans/index.css\");\n/* harmony import */ var _fontsource_open_sans__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fontsource_open_sans__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fontsource_source_sans_pro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/source-sans-pro */ \"./node_modules/@fontsource/source-sans-pro/index.css\");\n/* harmony import */ var _fontsource_source_sans_pro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fontsource_source_sans_pro__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fontsource_raleway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fontsource/raleway */ \"./node_modules/@fontsource/raleway/index.css\");\n/* harmony import */ var _fontsource_raleway__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fontsource_raleway__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var styles_reset_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styles/reset.scss */ \"./src/styles/reset.scss\");\n/* harmony import */ var styles_reset_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styles_reset_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var utils_responsive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/responsive */ \"./src/utils/responsive.tsx\");\n/* harmony import */ var utils_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/analytics */ \"./src/utils/analytics.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_10___default().configure({\n    showSpinner: false\n});\nnext_router__WEBPACK_IMPORTED_MODULE_8___default().events.on('routeChangeStart', ()=>nprogress__WEBPACK_IMPORTED_MODULE_10___default().start()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_8___default().events.on('routeChangeComplete', ()=>nprogress__WEBPACK_IMPORTED_MODULE_10___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_8___default().events.on('routeChangeError', ()=>nprogress__WEBPACK_IMPORTED_MODULE_10___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_8___default().events.on('routeChangeComplete', utils_analytics__WEBPACK_IMPORTED_MODULE_14__.pageview);\nconst OmnifineryApp = ({ pageProps , Component  })=>{\n    if (pageProps.error) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_error__WEBPACK_IMPORTED_MODULE_9___default()), {\n            statusCode: pageProps.error.status,\n            title: pageProps.error.message,\n            __source: {\n                fileName: \"/home/bolajiscott/Videos/Meta.omni-Lukso-blockchain/src/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 10\n            },\n            __self: undefined\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(utils_responsive__WEBPACK_IMPORTED_MODULE_13__.MediaContextProvider, {\n        __source: {\n            fileName: \"/home/bolajiscott/Videos/Meta.omni-Lukso-blockchain/src/pages/_app.tsx\",\n            lineNumber: 35,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                __source: {\n                    fileName: \"/home/bolajiscott/Videos/Meta.omni-Lukso-blockchain/src/pages/_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 4\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/bolajiscott/Videos/Meta.omni-Lukso-blockchain/src/pages/_app.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    },\n                    __self: undefined,\n                    children: \"meta.omni\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/home/bolajiscott/Videos/Meta.omni-Lukso-blockchain/src/pages/_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 4\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OmnifineryApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzBCO0FBQ3ZCO0FBRUY7QUFDTTtBQUNSO0FBRUE7QUFDSTtBQUNGO0FBQ0c7QUFFUDtBQUVxQjtBQUVRO0FBQ2xCO0FBRXJDRywyREFBbUIsQ0FBQyxDQUFDO0lBQUNLLFdBQVcsRUFBRSxLQUFLO0FBQUMsQ0FBQztBQUUxQ1AsNERBQWdCLENBQUMsQ0FBa0IsdUJBQVFFLHVEQUFlOztBQUMxREYsNERBQWdCLENBQUMsQ0FBcUIsMEJBQVFFLHNEQUFjOztBQUM1REYsNERBQWdCLENBQUMsQ0FBa0IsdUJBQVFFLHNEQUFjOztBQUV6REYsNERBQWdCLENBQUMsQ0FBcUIsc0JBQUVLLHNEQUFXO0FBRW5ELEtBQUssQ0FBQ1EsYUFBYSxJQUFrQixDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsR0FBbUIsQ0FBQztJQUMxRixFQUFFLEVBQUVELFNBQVMsQ0FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDckIsTUFBTSxzRUFBRWYsbURBQUs7WUFBQ2dCLFVBQVUsRUFBRUgsU0FBUyxDQUFDRSxLQUFLLENBQUNFLE1BQU07WUFBRUMsS0FBSyxFQUFFTCxTQUFTLENBQUNFLEtBQUssQ0FBQ0ksT0FBTzs7Ozs7Ozs7SUFDakYsQ0FBQztJQUVELE1BQU0sdUVBQ0poQixtRUFBb0I7Ozs7Ozs7O2lGQUNuQkwsa0RBQUk7Ozs7Ozs7K0ZBQ0hvQixDQUFLOzs7Ozs7OzhCQUFDLENBQVM7OztpRkFFaEJKLFNBQVM7bUJBQUtELFNBQVM7Ozs7Ozs7Ozs7QUFHM0IsQ0FBQztBQUVELGlFQUFlRCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Nyb3NzLWZldGNoL3BvbHlmaWxsJztcbmltcG9ydCAncHVyZS1yZWFjdC1jYXJvdXNlbC9kaXN0L3JlYWN0LWNhcm91c2VsLmVzLmNzcyc7XG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcblxuaW1wb3J0ICdAZm9udHNvdXJjZS9vcGVuLXNhbnMnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9zb3VyY2Utc2Fucy1wcm8nO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yYWxld2F5JztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuXG5pbXBvcnQgJ3N0eWxlcy9yZXNldC5zY3NzJztcblxuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAndXRpbHMvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgKiBhcyBnYSBmcm9tICd1dGlscy9hbmFseXRpY3MnO1xuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IGZhbHNlIH0pO1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgZ2EucGFnZXZpZXcpO1xuXG5jb25zdCBPbW5pZmluZXJ5QXBwOiBGQzxBcHBQcm9wcz4gPSAoeyBwYWdlUHJvcHMsIENvbXBvbmVudCB9OiBBcHBQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XG5cdGlmIChwYWdlUHJvcHMuZXJyb3IpIHtcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3BhZ2VQcm9wcy5lcnJvci5zdGF0dXN9IHRpdGxlPXtwYWdlUHJvcHMuZXJyb3IubWVzc2FnZX0gLz47XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNZWRpYUNvbnRleHRQcm92aWRlcj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+bWV0YS5vbW5pPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30+PC9Db21wb25lbnQ+XG5cdFx0PC9NZWRpYUNvbnRleHRQcm92aWRlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9tbmlmaW5lcnlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlJvdXRlciIsIkVycm9yIiwiTlByb2dyZXNzIiwiUmVhY3QiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsImdhIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsInBhZ2V2aWV3IiwiT21uaWZpbmVyeUFwcCIsInBhZ2VQcm9wcyIsIkNvbXBvbmVudCIsImVycm9yIiwic3RhdHVzQ29kZSIsInN0YXR1cyIsInRpdGxlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/analytics.ts":
/*!********************************!*\
  !*** ./src/utils/analytics.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\n// log the pageview with their URL\nconst pageview = (url)=>{\n    window.gtag('config', publicRuntimeConfig.gaID, {\n        page_path: url\n    });\n};\n// log specific events happening.\nconst event = ({ action , params  })=>{\n    window.gtag('event', action, params);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYW5hbHl0aWNzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFFbkMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsbUJBQW1CLEVBQUMsQ0FBQyxHQUFHRCxrREFBUztBQUV6QyxFQUFrQztBQUNsQyxLQUFLLENBQUNFLFFBQVEsSUFBSUMsR0FBVyxHQUFXLENBQUM7SUFDdkNDLE1BQU0sQ0FBU0MsSUFBSSxDQUFDLENBQVEsU0FBRUosbUJBQW1CLENBQUNLLElBQUksRUFBRSxDQUFDO1FBQ3pEQyxTQUFTLEVBQUVKLEdBQUc7SUFDZixDQUFDO0FBQ0YsQ0FBQztBQUVELEVBQWlDO0FBQ2pDLEtBQUssQ0FBQ0ssS0FBSyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEVBQXVDLENBQUMsR0FBVyxDQUFDO0lBQ2pGTixNQUFNLENBQVNDLElBQUksQ0FBQyxDQUFPLFFBQUVJLE1BQU0sRUFBRUMsTUFBTTtBQUM3QyxDQUFDO0FBRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FuYWx5dGljcy50cz81YmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuXG4vLyBsb2cgdGhlIHBhZ2V2aWV3IHdpdGggdGhlaXIgVVJMXG5jb25zdCBwYWdldmlldyA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHQod2luZG93IGFzIGFueSkuZ3RhZygnY29uZmlnJywgcHVibGljUnVudGltZUNvbmZpZy5nYUlELCB7XG5cdFx0cGFnZV9wYXRoOiB1cmwsXG5cdH0pO1xufTtcblxuLy8gbG9nIHNwZWNpZmljIGV2ZW50cyBoYXBwZW5pbmcuXG5jb25zdCBldmVudCA9ICh7IGFjdGlvbiwgcGFyYW1zIH06IHsgYWN0aW9uOiB1bmtub3duOyBwYXJhbXM6IHVua25vd24gfSk6IHZvaWQgPT4ge1xuXHQod2luZG93IGFzIGFueSkuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcyk7XG59O1xuXG5leHBvcnQgeyBwYWdldmlldywgZXZlbnQgfTtcbiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwiZ2FJRCIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwicGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/analytics.ts\n");

/***/ }),

/***/ "./src/utils/responsive.tsx":
/*!**********************************!*\
  !*** ./src/utils/responsive.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mediaStyle\": () => (/* binding */ mediaStyle),\n/* harmony export */   \"Media\": () => (/* binding */ Media),\n/* harmony export */   \"MediaContextProvider\": () => (/* binding */ MediaContextProvider)\n/* harmony export */ });\n/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @artsy/fresnel */ \"@artsy/fresnel\");\n/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppMedia = (0,_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__.createMedia)({\n    breakpoints: {\n        mobile: 0,\n        desktop: 992\n    }\n});\nconst mediaStyle = AppMedia.createMediaStyle();\nconst { Media , MediaContextProvider  } = AppMedia;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvcmVzcG9uc2l2ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFFNUMsS0FBSyxDQUFDQyxRQUFRLEdBQUdELDJEQUFXLENBQUMsQ0FBQztJQUM3QkUsV0FBVyxFQUFFLENBQUM7UUFDYkMsTUFBTSxFQUFFLENBQUM7UUFDVEMsT0FBTyxFQUFFLEdBQUc7SUFDYixDQUFDO0FBQ0YsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsVUFBVSxHQUFHSixRQUFRLENBQUNLLGdCQUFnQjtBQUM1QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLG9CQUFvQixFQUFDLENBQUMsR0FBR1AsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy9yZXNwb25zaXZlLnRzeD9iNGU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnO1xuXG5jb25zdCBBcHBNZWRpYSA9IGNyZWF0ZU1lZGlhKHtcblx0YnJlYWtwb2ludHM6IHtcblx0XHRtb2JpbGU6IDAsXG5cdFx0ZGVza3RvcDogOTkyLFxuXHR9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBtZWRpYVN0eWxlID0gQXBwTWVkaWEuY3JlYXRlTWVkaWFTdHlsZSgpO1xuZXhwb3J0IGNvbnN0IHsgTWVkaWEsIE1lZGlhQ29udGV4dFByb3ZpZGVyIH0gPSBBcHBNZWRpYTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVNZWRpYSIsIkFwcE1lZGlhIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJkZXNrdG9wIiwibWVkaWFTdHlsZSIsImNyZWF0ZU1lZGlhU3R5bGUiLCJNZWRpYSIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/responsive.tsx\n");

/***/ }),

/***/ "./node_modules/@fontsource/open-sans/index.css":
/*!******************************************************!*\
  !*** ./node_modules/@fontsource/open-sans/index.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/raleway/index.css":
/*!****************************************************!*\
  !*** ./node_modules/@fontsource/raleway/index.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/source-sans-pro/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@fontsource/source-sans-pro/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/pure-react-carousel/dist/react-carousel.es.css":
/*!*********************************************************************!*\
  !*** ./node_modules/pure-react-carousel/dist/react-carousel.es.css ***!
  \*********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@artsy/fresnel":
/*!*********************************!*\
  !*** external "@artsy/fresnel" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@artsy/fresnel");

/***/ }),

/***/ "cross-fetch/polyfill":
/*!***************************************!*\
  !*** external "cross-fetch/polyfill" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("cross-fetch/polyfill");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();