"use strict";
(() => {
var exports = {};
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 6674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
async function handler(req, res) {
    try {
        // ${req.query.getStream} is getting from /stream/[getStream].js
        const response = await fetch(`https://livepeer.studio/api/stream/${req.query.getStream}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        res.status(400).send("Error");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6674));
module.exports = __webpack_exports__;

})();