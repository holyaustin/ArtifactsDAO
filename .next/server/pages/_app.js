"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CustomApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@livepeer/react"
var react_ = __webpack_require__(1739);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@w3ui/react-keyring"
const react_keyring_namespaceObject = require("@w3ui/react-keyring");
;// CONCATENATED MODULE: external "@w3ui/react-uploader"
const react_uploader_namespaceObject = require("@w3ui/react-uploader");
;// CONCATENATED MODULE: ./src/pages/_app.js
/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */ /** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/ 












const livepeerClient = (0,react_.createReactClient)({
    provider: (0,react_.studioProvider)({
        apiKey: "21fd241e-3233-4d34-8ba7-c3cee62547cc"
    })
});
function CustomApp({ Component , pageProps  }) {
    // return 
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.LivepeerConfig, {
        client: livepeerClient,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "/images/logoonlyblue.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
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
var __webpack_exports__ = (__webpack_exec__(1579));
module.exports = __webpack_exports__;

})();