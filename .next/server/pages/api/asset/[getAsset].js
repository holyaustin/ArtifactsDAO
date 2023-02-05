"use strict";
(() => {
var exports = {};
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 3554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
async function handler(req, res) {
    // Calling api from backend and passing in the Id of the asset from the 'listAssetId' form as the query
    try {
        const response = await fetch(`https://livepeer.studio/api/asset/${req.query.getAsset}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            }
        });
        // Convert json response into JS object
        const data = await response.json();
        // console.log(data);
        return res.status(200).json(data);
    } catch (error) {
    // console.log(error);
    }
    res.status(400).send("Error");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3554));
module.exports = __webpack_exports__;

})();