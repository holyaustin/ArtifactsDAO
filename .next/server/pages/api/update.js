"use strict";
(() => {
var exports = {};
exports.id = 901;
exports.ids = [901];
exports.modules = {

/***/ 6987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
async function handler(req, res) {
    const { assetId , name , storage , meta  } = req.body;
    // console.log(req.body);
    try {
        // Calling api and passing in the properties of the asset from the 'update' form to be updated
        const response = await fetch(`https://livepeer.studio/api/asset/${assetId}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                storage,
                meta
            })
        });
        // Convert json response into JS object
        const data = await response.json();
        // console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6987));
module.exports = __webpack_exports__;

})();