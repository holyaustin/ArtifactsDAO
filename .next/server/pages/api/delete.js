"use strict";
(() => {
var exports = {};
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
async function handler(req, res) {
    // Calling api and passing in the Id of the asset from the 'deleteAsset' form as the query
    try {
        const response = await fetch(`https://livepeer.studio/api/asset/${req.body.assetId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            }
        });
        // Convert json response into JS object
        const data = await response.json();
        return res.status(204).json(data);
    } catch (error) {
        res.status(400).send("error");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(77));
module.exports = __webpack_exports__;

})();