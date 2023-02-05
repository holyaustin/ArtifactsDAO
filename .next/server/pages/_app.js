"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _livepeer_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1739);
/* harmony import */ var _livepeer_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_livepeer_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _w3ui_react_keyring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2843);
/* harmony import */ var _w3ui_react_keyring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_w3ui_react_keyring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _w3ui_react_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1878);
/* harmony import */ var _w3ui_react_uploader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_w3ui_react_uploader__WEBPACK_IMPORTED_MODULE_5__);
/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */ /** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/ 












const livepeerClient = (0,_livepeer_react__WEBPACK_IMPORTED_MODULE_2__.createReactClient)({
    provider: (0,_livepeer_react__WEBPACK_IMPORTED_MODULE_2__.studioProvider)({
        apiKey: "21fd241e-3233-4d34-8ba7-c3cee62547cc"
    })
});
function CustomApp({ Component , pageProps  }) {
    // return 
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_livepeer_react__WEBPACK_IMPORTED_MODULE_2__.LivepeerConfig, {
        client: livepeerClient,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "shortcut icon",
                    href: "/images/logoonlyblue.png"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 1739:
/***/ ((module) => {

module.exports = require("@livepeer/react");

/***/ }),

/***/ 2843:
/***/ ((module) => {

module.exports = require("@w3ui/react-keyring");

/***/ }),

/***/ 1878:
/***/ ((module) => {

module.exports = require("@w3ui/react-uploader");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2654));
module.exports = __webpack_exports__;

})();